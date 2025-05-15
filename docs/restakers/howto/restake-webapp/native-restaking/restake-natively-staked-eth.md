---
sidebar_position: 2
title: Restake Natively Staked ETH
---

:::important
Running your own EigenPod for native restaking is an advanced task that requires operating and maintaining Ethereum validator infrastructure.
It involves managing validator keys and associated risks including slashing, downtime penalties, or loss of access to
restaked funds if keys are lost or compromised. For more information, refer to [Ethereum Launchpad](https://launchpad.ethereum.org/en/).
:::

Before restaking, we recommend reviewing: 
* [Restaking Overview](../../../concepts/overview.md)
* [EigenPods](../../../concepts/native-restaking/eigenpod.md)

To restake an Ethereum validator:
1. [Create EigenPod](#create-eigenpod). 
2. [Set the validator withdrawal address to the EigenPod address](#set-validator-withdrawal-address-to-eigenpod).
3. [Activate Restaking](#activate-restaking).

## Create EigenPod

To create an EigenPod:
1. Visit the [EigenLayer App](https://app.eigenlayer.xyz/).
1. Click **Restake Eth** on the Dashboard.
1. Click **Create EigenPod**.
1. **Sign** the transaction using your Web3 wallet when prompted. The new EigenPod contract address is displayed, and 
is responsible for all subsequent restaking and withdrawal activities associated with that EigenPod.


## Set Validator Withdrawal Address to EigenPod

To create a validator and set the withdrawal address to the EigenPod address:
1. When creating the validator, configure the validator credentials to point to the EigenPod address. For more information, refer to [Ethereum Launchpad](https://launchpad.ethereum.org/en/withdrawals#enabling-withdrawals).
1. To confirm the Withdrawal Address matches your EigenPod address, refer to https://beaconcha.in/validator/[validator_index]#deposits
1. (Optional) To restake validator fees, set the FEE_RECIPIENT to your EigenPod address.
1. Wait for the validator to become active onchain. To follow your validator status, refer to https://beaconcha.in/[validator_index].
Depending on the Beacon Chain deposit queue, it could take up to 10 days for a validator to become active. 

Once the validator is active, the validator state is displayed as `Awaiting Restake` in the web app.

:::info
Once set, the withdrawal address cannot be updated for an Ethereum validator. To restake an Ethereum validator with a previously
set withdrawal address, you must exit the validator and stake again with a new validator. For more information, refer to [Ethereum Launchpad](https://launchpad.ethereum.org/en/withdrawals#enabling-withdrawals).
:::

## Activate Restaking

Once the validator is active onchain and the withdrawal address points to the EigenPod address, the **Restake** button becomes active.

To activate Restaking:
1. Click **Restake** to initiate restaking the validator.
1. Sign the transaction using your Web3 wallet. Your validator is now **Restaked**.

You can now [delegate your restaked assets to your selected Operator](delelgate-undelegate.md). If you are already delegated to an Operator, your 
assets are automatically delegated to your currently selected Operator.
