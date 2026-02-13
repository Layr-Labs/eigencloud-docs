---
sidebar_position: 3
title: Withdraw using contract
---

:::caution Manual withdrawals
If you’re having issues withdrawing your funds using the EigenLayer app, you can manually complete the process using the 
Delegation Contract on Etherscan.

The manual withdrawal:
* Involves interacting directly with the Delegation contract on Etherscan. Only proceed if you’re comfortable 
using smart contracts. 
* Requires spending ETH in gas.
:::

Find the Delegation manager contract here: [EigenLayer Core Contracts](https://docs.eigencloud.xyz/products/eigenlayer/developers/concepts/eigenlayer-contracts/core-contracts).

:::note
For native ETH , your full ETH balance must already be available in your Eigenpod contract. Any validators being stopped 
must have fully exited and the funds swept to the Execution layer. A checkpoint must be completed or
the withdrawal attempt will fail.
:::

## Withdraw funds using Delegation contract

1. Open the Delegation Contract by going to the EigenLayer Delegation contract on Etherscan at
  `0x39053D51B77DC0d36036Fc1fCc8Cb819df8Ef37A`.

2. Read your queued withdrawals:
   1. Navigate to the _Contract_ tab.
   2. Select *Read as Proxy*.
   3. Find function 19: `getQueuedWithdrawals`. Note that it's `Withdrawals`, with an S at the end.
   4. Click on the arrow to the right. You will see something like `withdrawalRoot (bytes32)`.
   5. Enter your wallet address and click *Query*.

3. Save the Withdrawal Data. 

   You receive a response similar to:
   ` [ getQueuedWithdrawals(address) Response ]
   withdrawals tuple[] :
   [[0x840675002eE34C147C04e6dD91E7E01Ec0b0A408,0x1f8C8b1d78d01bCc42ebdd34Fae60181bD697662, 0x840675002eE34C147C04e6dD91E7E01Ec0b0A408,0,23198928,0x0Fe4F44beE93503346A3Ac9EE5A26b130a5796d6,27225244801338426]] `

   The response corresponds to
   `[staker address, delegated address, withdrawer address, nonce, start block, strategies, scaledShares]`

   Save these values, you need them in the next step.

   :::note
   The timestamp shows the block when your withdrawal was queued. If that block is less than 14 days old, the withdrawal attempt will fail.
   :::

4. Complete the Withdrawal:
   1. Switch to the _Write as Proxy_ tab.
   2. Connect your wallet.
   3. Find the function completeQueuedWithdrawal. Note that it's `Withdrawal`, no S at the end.
   4. Fill in the inputs using the data you saved in the previous step:
     `staker: <staker address>
      delegatedTo: <delegated address>
      withdrawer: <withdrawer address>
      nonce: <nonce number>
      startBlock: <start block number>
      strategies: [<strategy address>]
      scaledShares: [<scaledShares number>]
      tokens: [<token address you want to withdraw>]
      receiveAsTokens: true`

5. Submit the Transaction
    1. Click *Write*.
       Your wallet prompts a transaction.
    2. Review the simulation carefully, then confirm.
       Once confirmed, you’ll receive your tokens directly in your wallet.