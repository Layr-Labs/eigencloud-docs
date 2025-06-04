---
title: Migrating an existing chain
---

# Migrating your Orbit Chain to use EigenDA

Defined below is the process for which you can use to migrate your vanilla Arbitrum sequencer using native Arbitrum DA (i.e, Ethereum calldata, 4844 blobs, anytrust) to one using high throughput and low cost via EigenDA. This procedure is identical regardless of your parent chain context (e.g, Ethereum, Arbitrum One) with varying security [implications](overview.md#eth-l2-vs-l3-deployments) based on the depth of your deployment.

# Procedure

1. Ensure your node software is on the latest vanilla Arbitrum Nitro version. This can typically be found via referencing the Offchain Labs nitro github [releases](https://github.com/OffchainLabs/nitro/releases) or Arbitrum developer [docs](https://docs.arbitrum.io/run-arbitrum-node/arbos-releases/overview).

2. Perform node upgrade to use latest EigenDA x Nitro [version](https://github.com/Layr-Labs/nitro/releases). Please ensure that the fork version is equivalent to the nitro reference. The EigenDA x Nitro fork is designed to be backwards compatible with the latest Arbitrum release and should operate using native Arbitrum DA without any liveness compromises.

3. Invoke the eigenda v2.1.0 migration action to upgrade the parent chain contracts to use EigenDA ones. Instructions can be found [here](https://github.com/Layr-Labs/orbit-actions/blob/0bc2322333e19e5b26965ffd2083d214d291e588/scripts/foundry/contract-upgrades/eigenda-2.1.0/README.md) onto how to do this. This will apply necessary eigenda contract upgrades and update the `wasmModuleRoot` to the one necessary for the new replay script used for performing validations with the EigenDA batch destination type. This action **must** be ran before enabling EigenDA feature flags on the node backend configs.

4. Update your Arbitrum system configs to enable EigenDA. This includes changes to your batch posters, validators, and sequencer node configs; i.e:
- Update **node** field section to use eigenda-proxy configuration; ie:

        `"eigen-da": {"enable": true,"rpc": "http://eigenda_proxy:4242"}`

- Update **arbitrum** field section to enable eigenda; ie:

        `"eigenda": true`

5. Last but not least, upgrade ArbOS system config via the rollup owner account to enable EigenDA by updating the **arbitrum** field section using your previous config; e.g:
        ```
        ETH_RPC_URL={ETH_RPC} cast send "0x7000000000000000000000000000000000000000"
        "setChainConfig(string calldata)" "{"chainId":666666,...,"arbitrum":{"EigenDA":true,...}}"
        --private-key {PRIVATE_KEY} --gas-limit 1000000
        ``` 

**NOTE:** If this is not done an edge-case can be reached where the sequencer's batch posters are able to submit batches to EigenDA but the `MakeNode` and `Defensive` validators will halt due to an old config being referenced during stateless block validation within the validation server.

6. Verify your deployment. Steps on how to do this can be found via our developer [runbook](https://eigen-labs.notion.site/Developer-Runbook-12466062c1a7495ebc1d803169c37644?pvs=4).