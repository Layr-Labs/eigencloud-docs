---
sidebar_position: 3
title: Deposit and Withdraw Liquid Tokens
---

The following sections describe the steps to Restake "liquid" tokens (including LSTs EIGEN token, and any ERC20 token).

### Deposit (Restake) Liquid Tokens

1. For the token being deposited, invoke ERC20(token).approve(StrategyManager, amount) to authorize EigenLayer contracts before depositing.
2. Invoke `StrategyManager.depositIntoStrategy()` .
    * Parameters:
        * `strategy` - use the address of the deployed strategy ([example list here](https://github.com/Layr-Labs/eigenlayer-contracts?tab=readme-ov-file#deployments)).
        * `token` - use the address of the token associated with that strategy.
4. User is now actively Restaked.


### Withdraw (Unstake) Liquid Tokens

1. Invoke `DelegationManager.getWithdrawableShares()` to determine the Staker’s **withdrawable shares**, which represent deposited shares minus slashed shares.  withdrawable shares, which represent deposited shares minus slashed shares.
2. Prepare the 'depositShares' parameter for the queueWithdrawals() function.
   * Pass the number of **withdrawable shares** as input to the `convertToDepositShares()` function.
   * The resulting value represents the amount to be used in the 'depositShares' parameter in the queueWithdrawals() function.
3. Queue Withdrawal: invoke DelegationManager.[queueWithdrawals()](https://github.com/Layr-Labs/eigenlayer-contracts/blob/slashing-magnitudes/src/contracts/core/DelegationManager.sol#L195) to trigger the escrow period.
   * Please see the `QueuedWithdrawalParams` struct documentation for more details on how to construct the input parameters.
   * Please see further detail [here](https://docs.eigenlayer.xyz/eigenlayer/restaking-guides/restaking-user-guide/#escrow-period-withdrawal-delay) on the escrow period.
4. Complete Withdrawal as Tokens: invoke DelegationManager.completeQueuedWithdrawal() to complete the withdrawal and return assets to the withdrawer's wallet.

:::note
The input amount for `DelegationManager.queueWithdrawal()` can be any amount you like. However, it must be less than or
equal to `withdrawableRestakedExecutionLayerGwei` when the withdrawal is completed.

The value of `withdrawableRestakedExecutionLayerGwei` is any withdrawable (that is, has not been slashed in EigenLayer) ETH
in the EigenPod contract address after a checkpoint, independent of its source. Sources of withdrawable ETH include consensus
rewards, exited validators, direct transfers of ETH, and ETH from self-destructed contracts.
:::