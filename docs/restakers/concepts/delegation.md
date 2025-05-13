---
sidebar_position: 3
title: Delegation
---

Delegation is a core step in the restaking process that allows users to assign their restaked balance to an **Operator**, who acts on their behalf in securing Autonomously Verifiable Services (AVSs). Delegation is **required** unless you choose to operate your own Operator node directly.

Operators play a critical role in the EigenLayer ecosystem:

- They run the off-chain infrastructure required by AVSs
- They decide which AVSs to support
- They are responsible for responding to slashing conditions

By delegating to an Operator, a **Restaker** entrusts their staked assets to support the services the Operator opts into. In return, the Restaker shares in the rewards generated from those AVSs — without needing to manage infrastructure themselves.

## Why Delegate?

Most Restakers do not run their own Operators. Delegation allows them to:

- Participate in securing AVSs
- Earn protocol rewards
- Avoid the operational overhead of running infrastructure

This separation of roles keeps EigenLayer accessible, while enabling a robust and decentralized security model.

## Delegation Rules and Behavior

- Restakers can only delegate to a single Operator at a time.
- Delegation is an all or nothing operation. You must delegate all of your available Restaked balance to a single Operator.
- Delegation is not possible for Native Restakers while their validators are in the activation (entry) queue. Native Restaked
  tokens must be fully Restaked and proven on-chain before they can be delegated.
- If you have already delegated your stake to an operator, all new stakes are automatically delegated to the same operator.
- If the delegated Operator is no longer in the active set of an AVS (such as due to operator ejection), the Restaker has
  the option to redelegate their balance to another Operator.