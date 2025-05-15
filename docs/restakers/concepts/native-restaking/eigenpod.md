---
sidebar_position: 2
title: EigenPods
---

An [**EigenPod**](https://github.com/Layr-Labs/eigenlayer-contracts/blob/main/docs/core/EigenPodManager.md) is a smart contract 
deployed and controlled by the Staker. An EigenPod enables EigenLayer to track your validator’s balance and withdrawal status 
while preserving self custody. Each Staker must create an EigenPod before restaking.

When planning your EigenPod and validator operations, consider the following:

- Any number of validators can be repointed to a single EigenPod.
- Each Ethereum address (wallet) may deploy only one EigenPod instance.
- The deploying address becomes the contract owner (EigenPod Owner), with permission to restake and withdraw.
- Ownership of an EigenPod cannot be transferred.


:::note
EigenPods are only required for native restaking using Ethereum validators. If you are staking LSTs, EIGEN, or other ERC20
tokens using liquid restaking, EigenPods are not required.
:::


## Gas Cost Planning 

Where practical, we recommend users connect many validators to a single EigenPod to reduce cost and complexity. 
For each action requiring a checkpoint proof, the [EigenLayer app](https://app.eigenlayer.xyz/) batches up to 80 validators per proof transaction batch. 
Users with more validators require additional transactions to complete each checkpoint proof. Please plan your gas costs accordingly.


## Checkpoint Proofs

[Checkpoint Proofs](https://github.com/Layr-Labs/eigenlayer-contracts/blob/main/docs/core/EigenPod.md#checkpointing-validators) convert native validator ETH and validator yield to actively restaked shares. Checkpoint proofs are initiated
before any Restaking or Withdrawal action and prove the expected funds are deposited in the EigenPod and/or validator.
Checkpoint proofs are a two step process:
1. Starting a Checkpoint: this step occurs once.
1. Verifying (and Completing) a Checkpoint: this step occurs multiple times until all of the remaining unproven ETH balance in the
   EigenPod has been proven.