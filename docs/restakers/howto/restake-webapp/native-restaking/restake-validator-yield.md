---
sidebar_position: 3
title: Restake Validator Yield
---

## Restake Validator Yield (Rewards, Fees, and ETH)

As of the PEPE release, users can now convert consensus rewards, validator execution fees and ETH sent to the EigenPod to restaked shares (referred to broadly in this document as "Validator Yield").  Initiating and completing a checkpoint proof will automatically convert any consensus rewards to restaked shares for the EigenPod.

1. Observe the value of `Unstaked Balance` becomes greater than zero when there is ETH available to convert to restaked shares in the EigenPod.
1. Click **Restake** to initiate a checkpoint proof.
1. Sign two transactions: Begin Restake (to initiate a checkpoint proof) and Restake (to complete the checkpoint proof).
1. Observe the Restaked Balance has increased by the amount of validator yield proven in the previous step.

:::info
1. The time lag associated with Ethereum beacon chain validator sweeps, which can be up to 65812 slots or 9 days. Please see the Ethereum docs [here](https://ethereum.org/en/staking/withdrawals/#validator-sweeping) for more information.
   :::

### Checkpoint Frequency

Users should not initiate a checkpoint more frequently than once every two weeks (approximately).
The longer you wait before performing a checkpoint, the more gas users will save. The gas cost of a checkpoint is the same, regardless of how many consensus rewards will be proven. Each user should determine the best interval to fit their gas cost and restaking benefit needs.

Consensus rewards are moved from the beacon chain to your EigenPod once every approximately 8 days per the Ethereum protocol. Checkpoint intervals more frequently than 8 days would result in no benefit for the user.