---
sidebar_position: 3
title: Delegation
---

Delegation is the process of assigning restaked balance to an Operator. The Restaker receives fees according to the AVSs
that the Operator chooses to run. Restakers can undelegate their balance to end their assignment to the Operator and later
redelegate the balance to a new Operator.

Note the following conditions:
- Restakers can only delegate to a single Operator at a time.
- Delegation is an all or nothing operation. You must delegate all of your available Restaked balance to a single Operator.
- Delegation is not possible for Native Restakers while their validators are in the activation (entry) queue. Native Restaked
  tokens must be fully Restaked and proven on-chain before they can be delegated.
- If you have already delegated your stake to an operator, all new stakes are automatically delegated to the same operator.
- If the delegated Operator is no longer in the active set of an AVS (such as due to operator ejection), the Restaker has
  the option to redelegate their balance to another Operator.