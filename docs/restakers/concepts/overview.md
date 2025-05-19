---
sidebar_position: 1
title: Restaking Overview
---

Restaking is a mechanism that enables token holders to provide security to Autonomous Verifiable Services (AVSs) on EigenLayer. 
Stakers can restake ETH, Liquid Staking Tokens (LSTs), or stake EIGEN, and any other ERC20 token. AVSs distribute rewards
to Stakers for participation in securing AVSs.

## Restaking Methods

EigenLayer supports: 

* Liquid restaking enables users to deposit liquid tokens (LSTs, the EIGEN token, or any ERC20 token) into EigenLayer smart contracts. 
Liquid restaking does not require running an Ethereum validator and is accessible to any holder of supported tokens.
* Native restaking enables Ethereum validators to opt into restaking by redirecting their [ withdrawal credentials](https://notes.ethereum.org/@launchpad/withdrawals-faq#Q-What-are-withdrawals) to EigenLayer's smart contracts. 
Native restaking requires:
    - Operating an Ethereum validator
    - A minimum of 32 ETH (Ethereum protocol requirement)
    - Creating an [EigenPod](native-restaking/eigenpod.md)

## Slashable Stake Risks

:::important
With slashing, stake can become slashable for a Staker that has previously
delegated stake to an Operator. Stakers are responsible for ensuring that they fully understand and confirm their risk tolerances
for existing and future delegations to Operators and the Operator’s slashable allocations. Additionally, stakers are responsible
for continuing to monitor the allocations of their chosen Operators as they update allocations across various Operator Sets.
:::

AVSs can create [Operator Sets](../../products/eigenlayer/concepts/operator-sets/operator-sets-concept.md) that may include slashable
[Unique Stake](../../products/eigenlayer/concepts/slashing/unique-stake.md), and Operators can allocate their delegated stake to Operator Sets. If a Staker has previously delegated stake
to an Operator, the delegated stake becomes slashable when the Operator opts into an Operator Set and allocates Unique Stake.

Stakers are responsible for understanding the increased risk posed by allocation of their delegated stake as slashable
Unique Stake to an AVS. While the allocation of delegated stake to an Operator Set may be subject to the [Allocation Config
Delay and Allocation Delay](../../products/eigenlayer/reference/safety-delays-reference.md), it is important to understand the increased risk.

For more information on the safety delays for Stakers, refer to the :
* [Safety Delays reference](../../products/eigenlayer/reference/safety-delays-reference.md)
* [Allocating and Deallocating to Operator Sets section of ELIP-002](https://github.com/eigenfoundation/ELIPs/blob/main/ELIPs/ELIP-002.md#unique-stake-allocation--deallocation).

## Escrow Period (Withdrawal Delay)

EigenLayer contracts feature a withdrawal delay for all Liquid and Native restaking, a critical security measure for instances
of vulnerability disclosure or when anomalous behavior is detected by monitoring systems. For more information, refer to [Withdrawal Delay](/docs/products/eigenlayer/security/withdrawal-delay.md).

For information on how to get started, refer to:
* [Restake and Delegate](../howto/restake-webapp/liquid-restaking/restake-lsts.md) for liquid restaking.
* [Get Started](../howto/restake-webapp/native-restaking/native-restaking-get-started.md) for native restaking. 