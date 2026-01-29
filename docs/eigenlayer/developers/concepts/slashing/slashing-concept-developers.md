---
sidebar_position: 1
title: Slashing
---

For information on how slashing works, refer to concept content on [Slashing](../../../concepts/slashing/slashing-concept.md) and
[Operator Sets](../../../concepts/operator-sets/operator-sets-concept).

## Redistribution Recipient

:::important
When using [Redistribution](../../../concepts/slashing/redistribution.md), an attacker that gains access to AVS keys for the slasher and `redistributionRecipient` can drain
the entirety of Operator and Staker allocated stake for a given Operator Set.
:::

When creating a [redistributable Operator Set](../../howto/build/operator-sets/create-operator-sets.md), an immutable `redistributionRecipient` is specified. The `redistributionRecipient`
should be:
* An AVS-controlled role and signing key.
* A smart contract wallet or mulit-sig to ensure enhanced security and programmability.

The `redistributionRecipient` address cannot be changed. While an AVS may use an upstream proxy or pass-through contract, 
the immutability of this address in EigenLayer means an AVS can layer additional guarantees by guarding the upgradability 
of the upstream contract via controls such as governance, and timelocks.

For information on how to implement slashing, refer to: 
* [Implement Slashing](../../howto/build/slashing/implement-slashing)
* [Design Operator Sets](../../howto/build/operator-sets/design-operator-set.md)
* [Migrate to Operator Sets](../../howto/build/operator-sets/migrate-to-operatorsets.md)
* [Veto Committee Design](../../howto/build/slashing/slashing-veto-committee-design.md)

## Slashers

Upon creation of an operatorSet, a `slasher` address is specified. The `slasher` is the only address that can slash an operatorSet and can be updated on a 17.5 day delay. This delay is in place to enable AVSs to make credible commitments to the operators that they are running their service. Furthermore, we recommend that AVS slashing contract be on a time delay on proxy upgrades or be immutable to allow credible commitments around slashing conditions to be made. 