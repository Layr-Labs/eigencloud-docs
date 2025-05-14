---
sidebar_position: 4
title: Delegate and Undelegate
---

Before delegating or undelegating, we recommend reviewing: 
* [Get Started](native-restaking-prerequisites.md)
* [Delegation](../../../concepts/delegation.md).

## Delegate to Operator

To delegate to an Operator:
1. On the *Operator* tab in the [EigenLayer app](https://app.eigenlayer.xyz/operator), navigate to the Operator to which you want to delegate your assets.
1. Click **Delegate**.
1. **Sign** the transaction using your Web3 wallet. You are now delegated to that Operator

## Undelegate from Operator

:::important 
Undelegating is not required to [exit and withdraw your validator](withdraw.md). Only undelegate if you intend to redelegate to a different
Operator.
:::

To undelegate from an Operator:
1. Click **Undelegate**.
1. **Sign** the transaction using your Web3 wallet. You are now undelegated from that Operator.
1. Wait for the [Escrow Period](/docs/restakers/howto/testnet/restake-testnet-overview.md#testnet-vs-mainnet-differences) to complete.
1. [Delegate to a new Operator.](#delegate-to-operator)
