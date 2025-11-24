---
title: Technical overview
---
# Overview

Defined below is a technical breakdown of the key changes we've made to securely enable fraud proofs and high throughput for Arbitrum with EigenDA. This also goes over some key caveats and features. 

## Runbook

Core Arbitrum is a highly complicated composition of many software repositories and programming languages. To better demystify key system flows, we've developed an operational developer [runbook](https://eigen-labs.notion.site/Arbitrum-x-EigenDA-Developer-Runbook-12466062c1a7495ebc1d803169c37644?pvs=4) which describes core testing and system procedures.

## ETH L2 vs L3 deployments

L2s using Arbitrum with EigenDA are a M0 integration unlike L3s which are M1. This means both degraded security and throughput when currently using L3s with EigenDA. Please advise our Integrations [Overview](../integrations-overview.md) for a more comprehensive overview of different EigenDA rollup stages.

EigenDA bridging is currently only supported on Ethereum, meaning that L3s settling to a L2 can't:
- Rely on cert verification within the `Sequencer Inbox` contract
- Await disperser confirmations via eigenda proxy for accrediting batches

Currently for L3 deployments, we recommend ensuring that:

- `EIGENDA_PROXY_EIGENDA_CONFIRMATION_DEPTH` is set closer to ETH finalization (i.e, 64 blocks or two consensus epochs) since a reorg'd EigenDA bridge confirmation tx wouldn't be detectable by the rollup itself. This risk is nonexistent for L2s settling to Ethereum since the inbox's EigenDA certificate tx would read storage states on the `EigenDAServiceManger` which are set by the EigenDA bridge confirmation tx; meaning that a reorg of the EigenDA bridge confirmation tx would result in a reorg of the inbox's EigenDA certificate tx.

- If you wish to support higher throughput L3s with reduced risk, you can configure your EigenDA proxy instance with secondary storage fallbacks. This would at least ensure that if the blob certificate were to be invalidated the data would still be partially available. This would compromise the trust model of the rollup given an honest verifier node could when syncing from a confirmed chain head could halt in the event of a reorg'd since it wouldn't have access to the sequencer's secondary store.

### EigenDA Proxy

[EigenDA Proxy](https://github.com/Layr-Labs/eigenda-proxy) is used for secure and optimized communication between the rollup and the EigenDA disperser. Arbitrum uses the [*Simple Commitment Mode*](https://github.com/Layr-Labs/eigenda-proxy?tab=readme-ov-file#simple-commitment-mode) for client/server interaction and representing DA certificates. Read more about EigenDA Proxy and its respective security features [here](../../eigenda-proxy/eigenda-proxy.md).

### Posting batches to EigenDA

Please ensure that changes made to batch poster configs are globally applied across all your batch poster instances. If not, there could be inconsistencies that arise due to deviations in collective processing logic. To learn more about the Arbitrum batch poster please advise our following overview [spec](https://hackmd.io/@epociask/ByHk6x_TC).

**Adjusting maximum batch size**

Currently, the batch poster defaults to a maximum of `16mib` when dispersing batches to EigenDA. This can be adjusted to a lower threshold directly within the batch poster section of your node config:

```json
    "node": {
        ...
        "batch-poster": {
            "enable": true,
            ...
            "max-eigenda-batch-size": 12_000_000, // 12 MB
        }
    }
```
:::note
When configuring your batch parameters, consult this [batch sizing reference](https://github.com/Layr-Labs/eigenda/blob/master/encoding/utils/codec/README.md) to understand encoding overhead and cost implications.
:::

**Enabling Failover**

To remove a trust assumption on the liveness of EigenDA for the liveness of the rollup, we've extended the Arbitrum Nitro batch poster's logic to support opt-in failover to other DA destinations (e.g, AnyTrust, EIP-4844, calldata) in the event of indicated service unavailability from EigenDA. This logic is disabled by default but can be enabled by making the following update to your batch poster config with the following field:
```json
    "node": {
        ...
        "batch-poster": {
            "enable": true,
            ...
            "enable-eigenda-failover": true, 
        }
    }
```

**NOTE:** 4844 failover is implemented and audited but untested via E2E system tests since there are no existing tests in vanilla Arbitrum that programmatically assert the end-to-end correctness of 4844. Please use at your own risk, if you'd like to disable 4844 in-favor of calldata DA, add the following field to your `dangerous` sub-config via node config:
```json
    "dangerous": {
        "disable-blob-reader": true,
    },
```

To learn more about our Arbitrum failover design methodology, please advise the following [spec](https://hackmd.io/@epociask/SJUyIZlZkx).

# Diff Overview 

Many core Arbitrum repositories were forked to securely enable EigenDA. Please advise the following overviews for a more technical breakdown of exact changesets:

- [nitro](https://layr-labs.github.io/nitro/)
- [nitro-contracts](https://layr-labs.github.io/nitro-contracts/)
- [nitro-testnode](https://layr-labs.github.io/nitro-testnode/)
- [nitro-go-ethereum](https://layr-labs.github.io/nitro-go-ethereum/)
