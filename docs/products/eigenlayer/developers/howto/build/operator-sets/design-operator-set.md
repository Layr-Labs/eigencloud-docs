---
sidebar_position: 1
title: Design Operator Sets
---

An [Operator Set](../../../../concepts/operator-sets/operator-sets-concept.md) is a grouping of different types of work within a single AVS. Each AVS has at least one Operator Set. The 
EigenLayer protocol does not enforce criteria for Operator Sets.

## Operator Set Types

Operator Sets are either:
* [Non-redistributing](create-operator-sets.md#create-operator-set). Slashed funds are burnt.
* [Redistributing](create-operator-sets.md#create-redistributing-operator-set). Slashed funds are sent to the [`redistributionRecipient`](../../../concepts/slashing/slashing-concept-developers.md#redistribution-recipient).

The Operator Set type cannot be changed.

## Operator Set Groupings

Best practices for Operator Set design are to logically group AVS tasks (and verification) into separate Operator Sets. 
Organize your Operator Sets according to conditions for which you wish to distribute Rewards. Potential conditions include:
* Unique business logic.
* Unique Stake (cryptoeconomic security) amount and types of token required to be allocated from Operators.
* Slashing conditions.
* Ejection criteria.
* Quantity of Operators and criteria for operators allowed.
* Hardware profiles.
* Liveness guarantees.

For more information on Operator Sets, refer to [Operator Sets](../../../../concepts/operator-sets/operator-sets-concept).