---
sidebar_position: 3
title: Undelegating and Redelegating
---

Restakers can Undelegate their balance from an Operator at any time.  Once undelegated, Restakers can Redelegate to another
Operator.

:::tip
Undelegating is not required or recommended when withdrawing staked assets from EigenLayer. Undelegating and withdrawing requires
more gas than Unstaking and withdrawing.
::::

Initiating an Undelegate transaction automatically queues a withdrawal but does not complete (finalize) the withdrawal. 
The Undelegate and Queue Withdrawal transactions are combined due to the security architecture of EigenLayer smart contracts. 
If you wish to redelegate, you can do so immediately after the escrow period ends. If you want to complete the withdrawal, 
you can do so immediately after the [escrow period](overview.md#escrow-period-withdrawal-delay) ends.
