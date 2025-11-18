---
title: ZK Stack
sidebar_position: 2
---
# ZK Stack and EigenDA

ZK Stack is ZKsync's rollup framework. We have implemented an [EigenDA Client](https://github.com/matter-labs/zksync-era/tree/main/core/node/da_clients/src/eigen) following ZK Stack's [validium architecture](https://docs.zksync.io/zk-stack/running/validium). Our integration is currently in [Stage 1](#stage-1) and we are working towards [Stage 2](#stage-2).

## Overview

Unlike most other rollup stacks, ZK Stack posts compressed state diffs to EigenDA, as opposed to batches of transactions. For more information as to the motivation for this, as well as technical details, see ZK Stack's [Data Availability](https://docs.zksync.io/zksync-protocol/rollup/data-availability) documentation.

<!-- Image source: https://app.excalidraw.com/s/1XPZRMVbRNH/1fYTKbI9b4H -->
![](../../../../../static/img/integrations/zksync/batches-vs-state-diffs.png)

Overall, the [transaction lifecycle](https://docs.zksync.io/zksync-protocol/rollup/transaction-lifecycle) remains unaffected, other than the data (compressed state diffs) being submitted to EigenDA, and a DACert submitted to L1.

### Stage 1
> a Validium that only sends the data to the DA layer, but doesn’t verify its inclusion

ZK Stack prefers to have their sequencer run as a single binary without sidecars. Therefore, our ZK Stack integration does not use the [EigenDA Proxy](../../eigenda-proxy/eigenda-proxy.md). Rather, we use our Rust [eigenda-client](https://github.com/Layr-Labs/eigenda-client-rs). And the [EigenDA Client](https://github.com/matter-labs/zksync-era/tree/f05fffda72393fd86c752e88b7192cc8e0c30b68/core/node/da_clients/src/eigen) wrapper inside the ZKSync-Era repo implements the 2 [required trait](https://docs.zksync.io/zk-stack/running/validium#server-related-details) methods `dispatch_blob` and `get_inclusion_data`.

### Stage 2
> a Validium that sends the data to the DA layer, and also verifies its inclusion on L1 either by using the verification bridges or zk-proofs directly.

In the stage 2 model, in order for ZK Stack's prover to remain AltDA agnostic, their Validium architecture mandates that a sidecar prover is used to prove the inclusion of the compressed state diffs on EigenDA, to the L1. We use Risc0 for this sidecar prover.

<!-- Image source: https://app.excalidraw.com/s/1XPZRMVbRNH/9envZ9u54Sl -->
![](../../../../../static/img/integrations/zksync/secure-integration-architecture.png)

## Deployment

### Local Deployment

Follow the steps in the Validium [FAQ](https://docs.zksync.io/zk-stack/running/validium#faq):
1. Install `zkstack` following [this guide](https://github.com/matter-labs/zksync-era/tree/main/zkstack_cli)
2. `zkstack dev clean all` - to make sure you have an empty setup
3. `zkstack containers` - this creates the necessary docker containers
4. `zkstack ecosystem init` - init a default ecosystem (go with default options everywhere)
5. `zkstack chain create` - create a new chain, stick to the default options, but select Validium when prompted, use this chain as default (the last question there)
6. `zkstack chain init` - init the new chain
7. configure the client, see [section below](#client-configuration)
8. `zkstack server --chain YOUR_CHAIN_NAME` - run the server

### Production Deployment

The production deployment should be similar to the local deployment. It will require setting up the [eigenda client](#client-configuration). See ZK Stack's [production deployment](https://docs.zksync.io/zk-stack/running/production) docs for more information.

### Client configuration

> Note: The docs below might be outdated. Please refer to the ZKSync Era [EigenDA Client](https://github.com/matter-labs/zksync-era/tree/main/core/node/da_clients/src/eigen) and its [Config](https://github.com/matter-labs/zksync-era/blob/main/core/lib/config/src/configs/da_client/eigen.rs) as the source of truth.

First you need to set the `use_dummy_inclusion_data` field in the file `etc/env/file_based/general.yaml` to `true`. This is a pending solution until our Stage 2 integration is complete.

```yaml
da_dispatcher:
  use_dummy_inclusion_data: true
```

The client can be set up by modifying the field `da_client` of the file `etc/env/file_based/overrides/validium.yaml`.
These are the fields that can be modified:

- `disperser_rpc` (string): URL of the EigenDA Disperser RPC server. Available per network in our [docs](../../../networks/sepolia.md#specs)
- `operator_state_retriever_addr`: Address of the OperatorStateRetriever contract. This address can be found by reading from the [EigenDA Directory](../../../networks/sepolia.md#contract-addresses).
- `registry_coordinator_addr`: Address of the Registry Coordinator contract. This address can be found by reading from the [EigenDA Directory](../../../networks/sepolia.md#contract-addresses).
- `cert_verifier_router_addr`: Address of the CertVerifierRouter contract. We deploy a default CertVerifier whose address can be found by reading from the [EigenDA Directory](../../../networks/sepolia.md#contract-addresses), but any team desiring custom quorums and/or custom thresholds should read our [Custom Security](../../custom-security.md) page.
- `eigenda_svc_manager_address` (string): Address of the service manager contract.
- `blob_version`: Specifies the BlobParams version to use. Currently only 0 is available. BlobVersions are defined in the ThresholdRegistry contract, whose address can be found by reading the from [EigenDA Directory](../../../networks/sepolia.md#contract-addresses).

So, for example, a client setup that uses the sepolia EigenDA client would look like this:

```yaml
da_client:
  client: Eigen
  disperser_rpc: https://disperser-testnet-sepolia.eigenda.xyz:443
  operator_state_retriever_addr: 0x22478d082E9edaDc2baE8443E4aC9473F6E047Ff
  registry_coordinator_addr: 0xAF21d3811B5d23D5466AC83BA7a9c34c261A8D81
  cert_verifier_router_addr: 0x17ec4112c4BbD540E2c1fE0A49D264a280176F0D
  blob_version: 0
```

:::note
When configuring your batching parameters, consult this [batch sizing reference](https://github.com/Layr-Labs/eigenda/blob/master/encoding/utils/codec/README.md) to understand encoding overhead and cost implications.
:::

You also need to modify `etc/env/file_based/secrets.yaml` to include the private key
of the account that will be used to pay for dispersals. You need to add the following field:

```yaml
da:
  client: Eigen
  private_key: <PRIVATE_KEY> # without the `0x` prefix
```
