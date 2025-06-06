---
sidebar_position: 5
---

# Glossary

This glossary contains terms related to rollup integrations and EigenDA. It attemps to use stack-agnostic terms, and detail the equivalent terms in the different rollup stacks.

## Cert Punctuality Window

The time window (in number of L1 blocks) during which a [batcher](#rollup-batcher) must submit a batch to the [rollup inbox](#rollup-inbox) after it has been created.

A cert is considered valid when it is included onchain before the cert's [ReferenceBlockNumber][spec-rbn] (RBN) + the cert's CPW (Cert punctuality window).
```
RBN < cert.L1InclusionBlock < RBN+CPW 
```

A default CPW of 12 hours (3600 blocks on ethereum mainnet) is recommended. For OP specifically, this number should be at least as large as the [sequencerWindowSize](https://docs.optimism.io/operators/chain-operators/configuration/rollup#sequencerwindowsize).

## Rollup Batcher

Sequencer service (can either be a separate binary, or a thread in the sequencer) that is responsible for batching transactions (or state diffs) and sending them to the [rollup inbox](#rollup-inbox).

## Rollup Inbox

Ethereum address where the [rollup batcher](#rollup-batcher) sends the batch of transactions (or state diffs). This can either be an EOA (op-stack) or a contract (nitro, zksync).

- op stack: batcher inbox (EOA)
- nitro stack: sequencer inbox (contract)
- zk stack: [ExecutorFacet](https://docs.zksync.io/zksync-protocol/contracts/l1-contracts#executorfacet) (sometimes also simply referred to as [diamond proxy](https://docs.zksync.io/zksync-protocol/contracts/l1-contracts#diamond-also-mentioned-as-state-transition-contract))




<!-- References -->
[spec-rbn]: https://layr-labs.github.io/eigenda/protobufs/generated/common_v2.html#batchheader