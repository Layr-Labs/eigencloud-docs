---
sidebar_position: 3
title: Withdraw
---

There are two options when withdrawing restaked validator ETH:
* Exit validator and withdraw restaked balance.
* Continue as a validator and withdraw yield only.

With the exception of stopping and exiting the validator, the two processes are the same. The process to withdraw restaked validator ETH is:

1. [If exiting the validator, stop the validator and wait for the validator to go through the exit queue.](#step-1-stopping-validator)
2. [Generate a checkpoint proof to bring the balance in your EigenPod up to date.](#step-2-generate-checkpoint-proof)
3. [Determine the number of shares available to withdraw.](#step-3-determine-the-number-of-withdrawable-shares)
4. [Queue a withdrawal, and wait for EigenLayer escrow period.](#step-4-queue-withdrawal)
5. [Complete withdrawal.](#step-5-complete-withdrawal)

#### Step 1 Stopping Validator

If exiting validator and withdrawing restaked balance, fully exit the validator:
1. Monitor the validator activity at [beaconcha.in/validator/\[yourvalidatorid](http://beaconcha.in/validator/\[yourvalidatorid)\].
2. Wait for the final beacon chain withdrawal to be deposited to your EigenPod.

After a validator's status changes to "exited", it can take between 24 hours and 10 days for its ETH to be transferred to
the EigenPod. See the "Withdrawals" tab and "Time" column for your validator via beaconcha.in/validator/[yourvalidatorid]#withdrawals .
The ETH will then be viewable in the EigenPod's address on the Execution Layer.

#### Step 2 Generate Checkpoint Proof

Generate checkpoint proof using [eigenpod-proofs-generation CLI](https://github.com/Layr-Labs/eigenpod-proofs-generation/tree/master/cli#checkpoint-proofs) to account for any ETH that has accumulated in the EigenPod.
Once completed, the balance in your EigenPod is up to date.

#### Step 3 Determine the Number of Withdrawable Shares

To determine the number of withdrawable shares:
1. Invoke `[YourEigenPodContract].withdrawableRestakedExecutionLayerGwei()` to get the amount of withdrawable execution layer ETH in Gwei.
2. Convert the Gwei to Wei (multiply Gwei by 10^9 or 1,000,000,000).

#### Step 4 Queue Withdrawal

To queue withdrawal:

1. As the EigenPod Owner wallet, invoke the [`DelegationManager.queueWithdrawals()`](https://github.com/Layr-Labs/eigenlayer-contracts/blob/dev/docs/core/DelegationManager.md#queuewithdrawals) function with:
    * [`QueuedWithdrawalParams`](https://github.com/Layr-Labs/eigenlayer-contracts/blob/dev/src/contracts/interfaces/IDelegationManager.sol#L116)
    * Beacon chain ETH strategy (`0xbeaC0eeEeeeeEEeEeEEEEeeEEeEeeeEeeEEBEaC0`).
    * Amount of withdrawable shares in Wei.
2. Wait for the EigenLayer escrow period.

:::note
If you queue a withdrawal with an amount of shares higher than the withdrawable shares, you may have to exit validators and complete
a checkpoint or restart the escrow process before the withdrawal can be completed.
:::

#### Step 5 Complete withdrawal

As the EigenPod Owner Wallet, invoke the [`DelegationManager.completeQueuedWithdrawal()`](https://github.com/Layr-Labs/eigenlayer-contracts/blob/dev/docs/core/DelegationManager.md#completequeuedwithdrawal) function.

:::note
Withdrawals can only be cancelled after waiting the full escrow period. To cancel a withdrawal, invoke the [`DelegationManager.completeQueuedWithdrawal()`](https://github.com/Layr-Labs/eigenlayer-contracts/blob/dev/docs/core/DelegationManager.md#completequeuedwithdrawal)
function with the parameter `receiveAsTokens` set to `FALSE`.
:::


### Withdraw Native ETH Balance - check with Matt

This process is intended to allow users to withdraw their Native beacon chain balance from the EigenPod.

1. Validator Exit
   * Fully exit the Validator. You may monitor its activity via beaconcha.in/validator/\[yourvalidatorid\] .
   * Wait for the final beacon chain withdrawal to be deposited to your EigenPod. There can be a lag of up to 24 hours to 7 days between the validator appearing as "exited" and the withdrawal amount deposited to EigenPod. Please see the "Withdrawals" tab and "Time" column for your validator via beaconcha.in/validator/\[yourvalidatorid\]\#withdrawals . The ETH will then be recognized in the EigenPod.
2. Generate [checkpoint proof](https://github.com/Layr-Labs/eigenpod-proofs-generation/tree/master/cli#checkpoint-proofs) via eigenpod-proofs-generation CLI in order to initiate and complete a checkpoint.
3. Determine the number of **withdrawable shares**.
   * Invoke `DelegationManager.getWithdrawableShares()` to determine the Staker’s withdrawable shares, which represent deposited shares minus slashed shares.
   * Invoke `[YourEigenPod].withdrawableRestakedExecutionLayerGwei()` to get the amount of withdrawable execution layer ETH in gwei. Convert the gwei to wei (multiply by by 10^9 or 1,000,000,000).
   * Confirm the number of withdrawable shares is less than withdrawableRestakedExecutionLayerGwei. Otherwise, the withdrawal will not be completable after it is queued.
4. Prepare the `depositShares` parameter for the queueWithdrawals() function.
   * Pass the number of **withdrawable shares** as input to the `convertToDepositShares()` function.
   * The resulting value represents the amount to be used in the `depositShares` parameter in the queueWithdrawals() function.
5. Invoke the DelegationManager.queueWithdrawals() function.
   * This function can only be invoked by the EigenPod Owner wallet.
   * Please see the `QueuedWithdrawalParams` struct documentation for more details on how to construct the input parameters.
   * strategies \- use the Beacon chain ETH strategy (0xbeaC0eeEeeeeEEeEeEEEEeeEEeEeeeEeeEEBEaC0).
6. Wait for the Escrow Period to complete.
7. Invoke `DelegationManager.completeQueuedWithdrawal()`.

### Withdraw Yield Only - check with Matt

This process is intended to allow users to withdraw yield (beacon chain consensus rewards, execution fees, and ETH) from the EigenPod.

1. Generate [checkpoint proof](https://github.com/Layr-Labs/eigenpod-proofs-generation/tree/master/cli#checkpoint-proofs) via eigenpod-proofs-generation CLI in order to initiate and complete a checkpoint.
2. Determine the number of **withdrawable shares**.
   * Invoke `DelegationManager.getWithdrawableShares()` to determine the Staker’s withdrawable shares, which represent deposited shares minus slashed shares.
   * Invoke `[YourEigenPod].withdrawableRestakedExecutionLayerGwei()` to get the amount of withdrawable execution layer ETH in gwei. Convert the gwei to wei (multiply by by 10^9 or 1,000,000,000).
   * Confirm the number of withdrawable shares is less than withdrawableRestakedExecutionLayerGwei. Otherwise, the withdrawal will not be completable after it is queued.
3. Prepare the `depositShares` parameter for the queueWithdrawals() function.
   * Pass the number of **withdrawable shares** as input to the `convertToDepositShares()` function.
   * The resulting value represents the amount to be used in the `depositShares` parameter in the queueWithdrawals() function.
4. Invoke the DelegationManager.queueWithdrawals() function.
   * This function can only be invoked by the EigenPod Owner wallet.
   * Please see the `QueuedWithdrawalParams` struct documentation for more details on how to construct the input parameters.
   * strategies \- use the Beacon chain ETH strategy (0xbeaC0eeEeeeeEEeEeEEEEeeEEeEeeeEeeEEBEaC0).
5. Wait for the Escrow Period to complete.
6. Invoke DelegationManager.completeQueuedWithdrawal().