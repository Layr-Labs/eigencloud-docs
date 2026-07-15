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
   4. Click on the arrow to the right. 
   5. In the _staker (address)_ field, enter your wallet address and click *Query*.

3. Save the Withdrawal Data. 

   You receive a response similar to:
   ```
   [getQueuedWithdrawals(address) Response]
   withdrawals (array) : [
    {
     staker (address) : 0x[YOUR ADDRESS]
     delegatedTo (address) : 0x[OPERATOR]
     withdrawer (address) : 0x[YOUR ADDRESS]
     nonce (uint256) : 15
     startBlock (uint32) : 24246024
     strategies (array) : [
     0xbeaC0eeEeeeeEEeEeEEEEeeEEeEeeeEeeEEBEaC0
     scaledShares (array) : [
     13636298239000000000
     ]
    }
   ]
   ```
   
   Save these values, you need them in the next step.

   :::note
   The timestamp shows the block when your withdrawal was queued. If that block is less than 14 days old, the withdrawal attempt will fail.
   :::

4. Complete the Withdrawal:
   1. Switch to the _Write as Proxy_ tab.
   2. Connect your wallet.
   3. Find the function completeQueuedWithdrawal. Note that it's `Withdrawal`, no S at the end.
   4. Fill in the inputs using the data you saved in the previous step:
      ```
      staker: <staker address>
      delegatedTo: <delegated address>
      withdrawer: <withdrawer address>
      nonce: <nonce number>
      startBlock: <start block number>
      strategies: [<strategy address>]
      scaledShares: [<scaledShares number>]
      tokens: [<token address you want to withdraw. For Native ETH withdrawals, enter 0x0000000000000000000000000000000000000000. For EIGEN withdrawals, enter 0xec53bf9167f50cdeb3ae105f56099aaab9061f83>]
      receiveAsTokens: true
      ```

      You can specify `receiveAsTokens: false` to cancel a completable withdrawal and return the assets to fully restaked status eligible to earn rewards.

      :::important EIGEN withdrawals
      For EIGEN withdrawals, use the EIGEN token address (`0xec53bf9167f50cdeb3ae105f56099aaab9061f83`) in the `tokens` field, even though the strategy holds bEIGEN.
      :::

5. Submit the Transaction
    1. Click *Write*.
       Your wallet prompts a transaction.
    2. Review the simulation carefully, then confirm.
       Once confirmed, you’ll receive your tokens directly in your wallet.