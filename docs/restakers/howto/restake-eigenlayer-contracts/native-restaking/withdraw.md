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