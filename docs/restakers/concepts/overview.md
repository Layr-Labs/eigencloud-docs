---
sidebar_position: 1
title: Restaking Overview
---

## What is Restaking?
Restaking is a mechanism that enables token holders to contribute to the security of emerging Web3 infrastructure. By restaking assets such as ETH, Liquid Staking Tokens (LSTs), the EIGEN token, or any ERC20 token, participants provide security to Autonomous Verifiable Services (AVSs) on EigenLayer. In return, stakers may earn rewards, creating an incentive-aligned ecosystem where network security is shared across multiple services.

This model extends the utility of staked capital and promotes more efficient use of network resources, while enabling new innovation in decentralized infrastructure.

## Restaking Pathways
EigenLayer supports two primary methods of restaking:
yarn 
**Liquid restaking** allows users to deposit liquid tokens — such as Liquid Staking Tokens (LSTs), the EIGEN token, or any ERC20 token — into EigenLayer smart contracts. This method does not require running an ETH validator and is accessible to any holder of supported tokens.

To learn how new ERC20 tokens can be added, see [Permissionless Token Strategies](../../developers/build-an-avs/howto/build/avs-permissionlesss.md).

**Native restaking** allows Ethereum validators to opt into restaking by redirecting their [ withdrawal credentials](https://notes.ethereum.org/@launchpad/withdrawals-faq#Q-What-are-withdrawals) to EigenLayer's smart contracts. This approach requires:
- Operating an Ethereum validator
- A minimum of **32 ETH** (Ethereum protocol requirement)
- Creating an **EigenPod**

An [**EigenPod**](https://github.com/Layr-Labs/eigenlayer-contracts/blob/main/docs/core/EigenPodManager.md) is a smart contract deployed and controlled by the staker. It enables EigenLayer to track your validator’s balance and withdrawal status while preserving self-custody. Each staker must create an EigenPod before restaking and can link multiple validators to a single EigenPod.

For setup instructions, see the [EigenPod Deployment Guide](https://eigencloud-docs-git-restakerestructure-eigen-labs.vercel.app/restakers/concepts/eigenpod) and the [Ethereum Validator Guide](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/#validators).

## Escrow Period (Withdrawal Delay)

EigenLayer contracts feature a withdrawal delay for all Liquid and Native restaking, a critical security measure for instances
of vulnerability disclosure or when anomalous behavior is detected by monitoring systems. For more information, refer to [Withdrawal Delay](/docs/eigenlayer/security/withdrawal-delay.md).

## Gas Cost Planning

We recommend users connect many validators to a single EigenPod in order to reduce cost and complexity where practical. For each of the actions below that require a checkpoint proof, the web app will batch up to 80 validators per proof transaction batch. Users with more validators will require additional transactions to complete each checkpoint proof. Please plan your gas costs accordingly.