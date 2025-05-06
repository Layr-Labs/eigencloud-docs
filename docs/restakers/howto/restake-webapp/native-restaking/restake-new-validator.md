---
sidebar_position: 2
title: Restake New Validator
---

Create EigenPod:
1. Visit the [EigenLayer App](https://app.eigenlayer.xyz/).
1. Click **Natively Staked Ether** via the Dashboard or Token tab.
1. Click **Create EigenPod**.
1. **Sign** the transaction via your Web3 wallet when prompted.
1. Observe the new EigenPod contract address is displayed.

:::info
This address is responsible for all subsequent restaking and withdrawal activities associated with that EigenPod.
:::

Repoint Validator:
1. Configure the validator(s) credentials to point to the EigenPod address when the validator is created. Please see [Ethereum Launchpad](https://launchpad.ethereum.org/en/withdrawals#enabling-withdrawals) for more information.
    * Confirming Withdrawal Address: you can confirm your withdrawal credentials (which should match your EigenPod), via the following URL: https://beaconcha.in/validator/[validator_index]#deposits
    * Optional: as of the PEPE release you may choose to set the FEE_RECIPIENT to your EigenPod address if you wish to Restake those fees.
1. Wait for the validator(s) to become active on-chain. Please see https://beaconcha.in/[validator_index] to follow your validator status. Please note: this process could take up to 10 days depending on the Beacon Chain deposit queue.
1. The validator's state will transition to `Awaiting Restake` in the web app.

Activate Restaking:
1. Once the Validator is active on-chain and the withdrawal address has been configured to point to the EigenPod address, the Restake button will become active.
1. Click **Restake** to initiate restaking the validator.
1. Sign the transaction with your web3 wallet.
1. Your validator is now **Restaked**.
1. You now have the option to delegate your restaked assets to your selected Operator. If you are already delegated to an Operator, your assets will automatically delegate to your currently selected Operator.
