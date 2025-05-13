---
sidebar_position: 5
title: Withdraw
---

## Withdraw Native ETH or Validator Yield

Overview: the amount of ETH available to be queued for withdrawal will appear under "Available to Queue" in the web app. This amount will include any exited validators where the balance was withdrawn to EigenPod and any validator yield available to be withdrawn.


If you wish to withdraw native ETH from an active validator, complete the following steps before proceeding:
1. Ensure you have repointed your validator's withdrawal credentials to your EigenPod prior to continuing. Please see [Ethereum Launchpad](https://launchpad.ethereum.org/en/withdrawals#enabling-withdrawals) for more information.
1. Fully exit your validator from the beacon chain. You may monitor its activity via beaconcha.in/validator/[validator_index].
1. Wait for the final beacon chain withdrawal to be deposited to your EigenPod. There can be a lag of up to 24 hours to 7 days between the validator appearing as "exited" and the withdrawal amount deposited to EigenPod. Please see the "Withdrawals" tab and "Time" column for your validator via beaconcha.in/validator/[validator_index]#withdrawals .


:::warning
Each queue withdrawal action will trigger a checkpoint and the associated gas costs. Please review the [Checkpoint Frequency](#checkpoint-frequency) section and plan for gas costs accordingly.
:::

Queue the Withdrawal:
1. Click **Queue Withdrawal** in the web app.
1. Choose the amount you wish to queue for withdrawal and continue
1. A checkpoint proof is initiated. **Sign** the associated transaction with your web3 wallet.
1. Wait for the [Escrow Period](/docs/restakers/howto/testnet/restake-testnet-overview.md#testnet-vs-mainnet-differences) to complete.


Redeposit or Complete Withdrawal:
Redeposit or Complete Withdrawal: Redepositing is available at this step for users who accidentally queued a withdrawal, but would like to resume staking and delegation.
1. Choose to either **Restake** (to Redeposit the assets) or **Withdraw** (to complete the withdrawal).
1. **Sign** the transaction using your web3 wallet.