---
sidebar_position: 3
title: Delegate
---

The process of Delegating assets is the same for both liquid and native restaked assets. The user's Restaking wallet must Delegate all restaked assets to a single Operator. After the initial Delegate operation - any subsequent Deposited (Restaked) assets are also automatically delegated to the current operator.

### Delegate Assets

1. Invoke `DelegationManager.delegateTo()`. Please observe the following notes on the parameters:
   a. operator: the address of the operator you want to delegate to.
   b. approverSignatureAndExpiry: can be left blank.
   c. approverSalt: can be left blank.
2. Your Restaked assets are now delegated.

:::note
For a given asset, if the Operator has been slashed 100% for that Strategy, then **no new Stakers** can delegate to the Operator if they hold this Strategy asset. This was designed to avoid smart contract division by zero (0) errors.
:::

### Change Actively Delegated Operator

The following steps are necessary for a Restaker to **move** their Delegated balance to a New Operator. The process below requires users to perform each of the following steps in order:
- **Undelegate** assets, which
- **Redeposit** each asset.
- **Delegate** to the new Operator.

1. Undelegate: invoke `DelegationManager.undelegate()`.
    * Note: this action automatically **queues a withdrawal for all restaked assets**. The Undelegate and Queue Withdrawal transactions are intentionally combined due to the security architecture of EigenLayer smart contracts.
2. Wait for the Escrow Period to complete.
3. Invoke DelegationManager.completeQueuedWithdrawal(). **Important:** you will choose to complete the withdrawal as shares, which is effectively a **redeposit** action.
    * `receiveAsTokens` should be set to _false_.
4. Invoke `DelegationManager.delegateTo()` to delegate your restaked assets to the new Operator.
