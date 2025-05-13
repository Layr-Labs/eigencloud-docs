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

To optimize gas costs, initiating a checkpoint no more than once every two weeks is generally recommended. Waiting longer
before performing a checkpoint can lead to greater gas savings, as the gas cost remains the same regardless of the number of
consensus rewards being proven. Users should choose a checkpoint interval that aligns with their gas cost considerations and restaking benefits.

Consensus rewards are transferred from the beacon chain to your EigenPod approximately every 9 days, according to the Ethereum protocol.
Creating checkpoints more than once per sweep provides no additional benefit.