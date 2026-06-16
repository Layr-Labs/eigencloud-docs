---
sidebar_position: 3
title: Create Duration Vaults
---

[Duration Vaults](../../../concepts/duration-vaults.md) enable AVSs to make guaranteed, time-bound stake commitments for specific Operator Sets. 

## Prerequisites

Before creating a Duration Vault, first [create an Operator Set](operator-sets/create-operator-sets.md) for your AVS. Your Operator Set is assigned an `operatorSetId` that is specified when deploying the vault.

The Duration Vault provides guaranteed stake to that Operator Set during its allocation period. You can deploy multiple Duration Vaults (with different durations or token types) targeting the same Operator Set.

## Implementation

Duration Vaults are deployed permissionlessly via the `StrategyFactory`. For detailed deployment instructions and contract references, see
the [Duration Vault Strategy contract documentation](https://github.com/Layr-Labs/eigenlayer-contracts/blob/main/docs/core/DurationVaultStrategy.md).
