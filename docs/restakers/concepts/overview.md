---
sidebar_position: 1
title: Restaking Overview
---

**Liquid restaking** is the process of depositing liquid tokens, including LSTs, EIGEN token, and any ERC20 token into the EigenLayer smart contracts. For information on adding new ERC20 tokens, refer to [Permissionless Token Strategies](../../developers/build-an-avs/howto/build/avs-permissionlesss.md).

**Native restaking** is the process of changing an Ethereum validator's[ withdrawal credentials](https://notes.ethereum.org/@launchpad/withdrawals-faq#Q-What-are-withdrawals) to EigenLayer's smart contracts. You must operate an Ethereum Validator node in order to participate in Native Restaking. For more information on Ethereum Validators, or set up your Ethereum Validator, refer to [Ethereum Foundation](https://launchpad.ethereum.org/).

## Escrow Period (Withdrawal Delay)

EigenLayer contracts feature a withdrawal delay for all Liquid and Native restaking, a critical security measure for instances
of vulnerability disclosure or when anomalous behavior is detected by monitoring systems. For more information, refer to [Withdrawal Delay](/docs/eigenlayer/security/withdrawal-delay.md).

## Gas Cost Planning

We recommend users connect many validators to a single EigenPod in order to reduce cost and complexity where practical. For each of the actions below that require a checkpoint proof, the web app will batch up to 80 validators per proof transaction batch. Users with more validators will require additional transactions to complete each checkpoint proof. Please plan your gas costs accordingly.