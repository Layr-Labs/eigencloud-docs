---
sidebar_position: 2
---

# OP Stack and EigenDA

[OP Stack](https://github.com/ethereum-optimism/optimism) is the set of software
components that run the [Optimism](https://l2beat.com/scaling/projects/op-mainnet) rollup and can be
deployed independently to power third-party rollups.

By default, the OP Stack sequencer's [op-batcher](https://github.com/ethereum-optimism/optimism/tree/develop/op-batcher) writes batches to Ethereum in the form of calldata or 4844 blobs to commit to the transactions included in the canonical L2 chain. In Alt-DA mode, the op-batcher and op-nodes (validators) are configured to talk to a third-party HTTP proxy server for writing (op-batcher) and reading (op-node) tx batches to and from DA. Optimism's Alt-DA [spec](https://specs.optimism.io/experimental/alt-da.html) contains a more in-depth breakdown of how these systems interact.

To implement this server spec, EigenDA provides [EigenDA Proxy](../../eigenda-proxy/eigenda-proxy.md) which is run as a dependency alongside OP Stack sequencers and full nodes to securely communicate with the EigenDA disperser.

## Our OP Fork

We currently maintain a [fork](https://github.com/Layr-Labs/optimism) of the OP Stack to provide [3 features](https://github.com/Layr-Labs/optimism?tab=readme-ov-file#fork-features) missing from the upstream OP Stack:
1. Performance: we enable high-throughput rollups via parallel blob submissions (see [Release 2](https://github.com/Layr-Labs/optimism/releases/tag/op-node%2Fv1.11.1-eigenda.2))
2. Liveness: we provide failover to Ethereum calldata if EigenDA is unavailable (see [Release 1](https://github.com/Layr-Labs/optimism/releases/tag/op-node%2Fv1.11.1-eigenda.1))
3. Safety: we are working on a fully secure integration, using our [hokulea](https://github.com/Layr-Labs/hokulea) extension to op's [rust derivation pipeline](https://github.com/op-rs/kona)

## Kurtosis Devnet

For a quick start to explore an eigenda-powered op rollup, we [extended](https://github.com/Layr-Labs/optimism/tree/eigenda-develop/kurtosis-devnet) op's kurtosis-devnet. Start by cloning the repo and cd'ing to the correct directory:
```bash
git clone git@github.com:Layr-Labs/optimism.git
cd optimism/kurtosis-devnet
```
Then take a look at the different just commands related to our devnet:
```bash
$ just --list
  [...] # other commands
  [eigenda]
  eigenda-devnet-add-tx-fuzzer ENCLAVE_NAME="eigenda-devnet" *ARGS=""
  eigenda-devnet-clean ENCLAVE_NAME="eigenda-devnet"
  eigenda-devnet-configs ENCLAVE_NAME="eigenda-devnet"
  eigenda-devnet-failback ENCLAVE_NAME="eigenda-devnet"
  eigenda-devnet-failover ENCLAVE_NAME="eigenda-devnet" # to failover to ethDA. Use `eigenda-devnet-failback` to revert.
  eigenda-devnet-grafana ENCLAVE_NAME="eigenda-devnet"
  eigenda-devnet-restart-batcher ENCLAVE_NAME="eigenda-devnet" # Restart batcher with new flags or image.
  eigenda-devnet-start VALUES_FILE="eigenda-template-values/memstore-concurrent-large-blobs.json" ENCLAVE_PREFIX="eigenda" # We also start a tx-fuzzer separately, since the optimism-package doesn't currently have that configurable as part of its package.
  eigenda-devnet-sync-status ENCLAVE_NAME="eigenda-devnet"
  eigenda-devnet-test-sepolia *ARGS=""               # Take a look at how CI does it in .github/workflows/kurtosis-devnet.yml .
  eigenda-devnet-test-memstore *ARGS=""              # meaning with a config file in eigenda-template-values/memstore-* .
```

You can run `just eigenda-devnet-start` to start a devnet which will spin-up an [eigenda-proxy](../../eigenda-proxy/eigenda-proxy.md) in memstore mode, simulating EigenDA. To interact with the actual EigenDA [sepolia](../../../networks/sepolia.md) testnet, you can run `just eigenda-devnet-start "eigenda-template-values/sepolia-concurrent-small-blobs.json"`. You will need to fill in the missing secret values in that [config file](https://github.com/Layr-Labs/optimism/blob/eigenda-develop/kurtosis-devnet/eigenda-template-values/sepolia-v2-concurrent-small-blobs.json): `eigenda-proxy.secrets.eigenda.signer-private-key-hex`, `eigenda-proxy.secrets.eigenda.v2.signer-private-key-hex` and `eigenda-proxy.secrets.eigenda.eth-rpc`. Feel free to modify any other values, or even modify the kurtosis eigenda [template file](https://github.com/Layr-Labs/optimism/blob/e1d636081550caacae42d88b79404899f0e45888/kurtosis-devnet/eigenda.yaml) directly if needed.

## Deploying

Deploy your OP Stack according to the official OP [deployment docs](https://docs.optimism.io/builders/chain-operators/tutorials/create-l2-rollup). Our fork currently only modifies the op-batcher and op-node, so make sure to also read the instructions below to deploy those.

### Rollup Config

If using op-deployer to [initialize your chain](https://docs.optimism.io/operators/chain-operators/tools/op-deployer#init-configure-your-chain), make sure to set the [DangerousAltDAConfig](https://github.com/ethereum-optimism/optimism/blob/d474182026cb0a56874c1c2658849f7a1951b55d/op-deployer/pkg/deployer/state/chain_intent.go#L69) fields in your intent file (don't fret the OP FUD; EigenDA rollups don't bite):

```toml
[[chains]]
  # Your chain's ID, encoded as a 32-byte hex string
  id = "0x00000000000000000000000000000000000000000000000000000a25406f3e60"
  # Only called dangerous because it hasn't been tested by OP Labs
  [chains.dangerousAltDAConfig]
    useAltDA = true
    daCommitmentType = "GenericCommitment" # instead of KeccakCommitment
    daChallengeWindow = 300  # unused random value
    daResolveWindow = 300 # unused random value
```

With `GenericCommitment`, this will skip deploying the DAChallengeContract (see our [analysis](#da-challenge-contract) below for why we don't use it), and create a `rollup.json` configuration file with the following alt_da fields:

```json
{
  "alt_da": {
    "da_commitment_type": "GenericCommitment",
    "da_challenge_contract_address": "0x0000000000000000000000000000000000000000",
    "da_challenge_window": 300,
    "da_resolve_window": 300
  }
}
```

If you are not using op-deployer and possibly generating this file manually, make sure to set `da_commitment_type` to use generic commitment instead of [keccak commitments](https://specs.optimism.io/experimental/alt-da.html#input-commitment-submission)! The other values are meaningless, but they still need to be set somehow.

:::note
When configuring your batch parameters, consult this [batch sizing reference](https://github.com/Layr-Labs/eigenda/blob/master/encoding/utils/codec/README.md) to understand encoding overhead and cost implications.
:::

### Deploying EigenDA Proxy

Please use the [eigenda-proxy](https://github.com/Layr-Labs/eigenda/tree/master/api/proxy#eigenda-proxy-) user guide for the latest information.

Make sure to read the different [features](https://github.com/Layr-Labs/eigenda/tree/master/api/proxy#features-and-configuration-options-flagsenv-vars) provided by the proxy, to understand the different flag options. We provide an example [config](https://github.com/Layr-Labs/eigenda/blob/master/api/proxy/.env.example) which contains the env vars required to configure Proxy for retrieval from both EigenDA V1 and V2.

If deploying proxy for an op-batcher, which means blobs will be dispersed to EigenDA, make sure to set [EIGENDA_PROXY_STORAGE_DISPERSAL_BACKEND=V2](https://github.com/Layr-Labs/eigenda/blob/master/api/proxy/.env.example#L21) to submit blobs to EigenDA V2.

### Deploying OP Node

The following env config values should be set to ensure proper communication between op-node and eigenda-proxy, replacing `{EIGENDA_PROXY_URL}` with the URL of your EigenDA Proxy server.

- `OP_NODE_ROLLUP_CONFIG={ROLLUP_CONFIG_PATH}`: path to the `rollup.json` file mentioned [above](#rollup-config)
- `OP_NODE_ALTDA_ENABLED=true`
- `OP_NODE_ALTDA_DA_SERVICE=true`: this weird name means to use generic commitments instead of keccak commitments.
- `OP_NODE_ALTDA_VERIFY_ON_READ=false`: another weird name which is only used for keccak commitments.
- `OP_NODE_ALTDA_DA_SERVER={EIGENDA_PROXY_URL}`

### Deploying OP Batcher

The following env config values should be set accordingly to ensure proper communication between OP Batcher and EigenDA Proxy, replacing `{EIGENDA_PROXY_URL}` with the URL of your EigenDA Proxy server.

- `OP_BATCHER_ALTDA_ENABLED=true`
- `OP_BATCHER_ALTDA_DA_SERVICE=true`: this weird name means to use generic commitments instead of keccak commitments.
- `OP_BATCHER_ALTDA_VERIFY_ON_READ=false`: another weird name which is only used for keccak commitments.
- `OP_BATCHER_ALTDA_DA_SERVER={EIGENDA_PROXY_URL}`
- `OP_BATCHER_TARGET_NUM_FRAMES=8`
- `OP_BATCHER_MAX_L1_TX_SIZE_BYTES=120000`: default value
- `OP_BATCHER_ALTDA_MAX_CONCURRENT_DA_REQUESTS=10`

Each blob submitted to EigenDA consists of `OP_BATCHER_TARGET_NUM_FRAMES` number of frames, each of size `OP_BATCHER_MAX_L1_TX_SIZE_BYTES`. The above values submit blobs of ~1MiB. We advise not setting `OP_BATCHER_MAX_L1_TX_SIZE_BYTES` larger than the default in case [failover](#failover) is required, which will submit the frames directly to ethereum as calldata, so must fit in a single transaction (max 128KiB).

EigenDA V2 dispersals p99 latency is ~10seconds, so in order to achieve a throughput of 1MiB/s, we set `OP_BATCHER_ALTDA_MAX_CONCURRENT_DA_REQUESTS=10` to allow 10 pipelined requests to fill those 10 seconds. 

<!-- details creates a dropdown menu -->
<details>
<summary>EigenDA V1 Setting</summary>
EigenDA V1, because of its blocking calls, required setting `OP_BATCHER_ALTDA_MAX_CONCURRENT_DA_REQUESTS=1320` to achieve 1MiB/s throughput. This is because blob dispersals on EigenDA V1 mainnet take ~10 mins for batching and 12 mins for Ethereum finality, which means a blob submitted to the eigenda-proxy could take up to 22 mins before returning. Thus, assuming blobs of 1MiB/s by setting `OP_BATCHER_TARGET_NUM_FRAMES=8`, in order to reach a throughput of 1MiB/s, which means 8 requests per second each blocking for possibly up to 22mins, we would need to send up to `60*22=1320` parallel requests.
</details>

#### **Failover**

Failover was added in this [PR](https://github.com/Layr-Labs/optimism/pull/34), and is automatically supported by the batcher. Each channel will first attempt to disperse to EigenDA via the proxy. If a `503` HTTP error is received, that channel will failover and be submitted as calldata to ethereum instead. To configure when the proxy returns `503` errors, see the [failover signals](https://github.com/Layr-Labs/eigenda/tree/master/api/proxy#failover-signals-) section of the Proxy README.

## Migrating To EigenDA V2

For [trusted](../integrations-overview.md#trusted-integration) integrations, migrating to EigenDA V2 is as simple as:
- op-node: restarting the eigenda-proxy to support [both V1 and V2 backends](https://github.com/Layr-Labs/eigenda/blob/master/api/proxy/.env.example#L17)
- op-batcher: restarting the eigenda-proxy to [disperse to V2](https://github.com/Layr-Labs/eigenda/blob/master/api/proxy/.env.example#L21). This will require setting a [V2_SIGNER_PRIVATE_KEY](https://github.com/Layr-Labs/eigenda/blob/master/api/proxy/.env.example#L31) with [V2 payments](../../../core-concepts/payments.md) enabled (either pay-per-blob or reserved bandwidth).

Please refer to the [EigenDA Proxy README](https://github.com/Layr-Labs/eigenda/tree/master/api/proxy#eigenda-proxy-) for more details. We also have a V2 migration test on our kurtosis devnet which shows how to [swap the dispersal-backend](https://github.com/Layr-Labs/optimism/blob/89ac40d0fddba2e06854b253b9f0266f36350af2/kurtosis-devnet/tests/eigenda/v2_migration_test.go#L83) from V1 to V2 without needing to restart the proxy.

## Security Guarantees

The above setup provides a [trusted integration](../integrations-overview.md#trusted-integration) level of security guarantees without adding an unnecessary trust assumption on the EigenDA disperser.

### DA Challenge Contract

OP's Alt-DA spec includes a [DA challenge contract](https://specs.optimism.io/experimental/alt-da.html#data-availability-challenge-contract), which allows L2 asset-holders to prevent a data withholding attack executed by the sequencer or DA network. EigenDA does not make use of the challenge contract because not only is uploading high-throughput bandwidth onto Ethereum not physically possible, but even for low throughput rollups, the challenge contract is not economically viable. See [l2beat's analysis of the redstone rollup](https://l2beat.com/scaling/projects/redstone#da-layer-risk-analysis) or donnoh's [Universal Plasma and DA challenges](https://ethresear.ch/t/universal-plasma-and-da-challenges/18629) article for an economic analysis of the challenge contract.

This means that even if our op stack fork were to implement failover to keccak commitments (currently it is only possible to failover to ethereum calldata), using the challenge contract would not provide any additional security guarantees, which is why we recommend that every eigenda-op rollup uses GenericCommitments in their [rollup.json](#deploying-op-node) config.
