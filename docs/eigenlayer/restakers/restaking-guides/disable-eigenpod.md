---
sidebar_position: 4
title: Permanently disable EigenPod
---

The RETIRE feature (ELIP-018) allows you to permanently and irreversibly disable restaking on your EigenPod. To disable, 
you must first queue all withdrawals and wait for the full withdrawal delay to elapse. Once disabled, your EigenPod enters a terminal
state. No new shares can be minted, and any ETH arriving in the disabled EigenPod can be swept directly without checkpointing
or queuing additional withdrawals.

:::danger THIS ACTION IS IRREVERSIBLE
Once you disable your EigenPod, you can never turn restaking back on. This is a permanent, one-way transition. Ensure 
you understand the implications before proceeding.
:::

## When to use RETIRE

### Key rotation without Beacon Chain exit

If you need to rotate the keys controlling your validators, disabling your EigenPod allows you to consolidate validator balances
to freshly keyed validators without exiting the Beacon Chain. You do not have to exit and re-enter the Beacon Chain entry queue.

### Clean exit from EigenLayer

Disabling your EigenPod provides a clean exit path that eliminates restaked dust and removes the need for additional checkpoints. 
After disabling, any ETH arriving in your EigenPod is plain balance you can sweep immediately and not restaked shares 
requiring further checkpointing. You can fully exit EigenLayer with a single withdrawal cycle.

## Prerequisites

- **Zero deposit shares**: Queue withdrawals of all native ETH shares to bring your deposit shares to exactly zero
- **No active checkpoint**: Your EigenPod cannot have a checkpoint in progress
- **Full withdrawal delay elapsed**: Every queued Beacon Chain ETH withdrawal must have remained slashable for the full delay period
- **Value conservation**: Your EigenPod tracked restaked balance must not exceed the completion value of your queued withdrawals (with 1 gwei slack for rounding)
- **No mixed withdrawals**: Any queued withdrawal containing the Beacon Chain ETH strategy must not be mixed with other strategies

### Critical limitations

:::warning AVS-Slashed EigenPods cannot be disabled
If your EigenPod has been AVS-slashed, you cannot use the disable feature. AVS slashing 
reduces your queued withdrawal value but does not reduce your pod's tracked balance.

Beacon Chain slashing is reflected in your EigenPod balance via checkpoints and does not prevent an EigenPod being disabled. 
:::

## Disabling your EigenPod

These steps are the same regardless of whether you're rotating keys or fully exiting.

### 1. Queue all native ETH withdrawals

[Queue withdrawals of all previously checkpointed shares to bring your deposit shares to exactly zero](0-restaking-user-guide/native-restaking/README.md#queue-the-withdrawal).

Your EigenPod now has zero active stake.

### 2. Wait for the full withdrawal delay

Wait for the EigenLayer escrow period (`minWithdrawalDelayBlocks`) to elapse.

### 3. Call `disablePod()` on EigenPodManager

Once the delay has elapsed and all preconditions are met:

```solidity
EigenPodManager.disablePod()
```

Your pod is now permanently disabled.

### 4. Choose your path

Now that your EigenPod is disabled, continue with either:
- [Key Rotation](#after-disabling-key-rotation) (consolidate to new validators)
- [Full Exit](#after-disabling-full-exit) (sweep all ETH and exit completely)

:::note Proof Submitter restriction
While your EigenPod is active, both the EigenPod Owner and any designated Proof Submitter can call `requestConsolidation()`. 
Once disabled, only the EigenPod Owner can request consolidations.
:::

## After disabling: Key rotation

Use this workflow to rotate validator keys without exiting the Beacon Chain.

### Step 1: Create new target validators

Set up new Beacon Chain validators with fresh withdrawal credentials (new keys).

### Step 2: Request consolidations

For each validator in your disabled EigenPod, submit a consolidation request to transfer its balance to one of the new target validators:

```solidity
// Called on your EigenPod contract
EigenPod.requestConsolidation(
    sourceValidatorIndex,  // your old validator
    targetValidatorIndex   // your new validator
)
```

### Step 3: Sweep any remaining ETH

After consolidations complete, there may be dust or small amounts of ETH left in your EigenPod (from partial withdrawals, execution layer rewards, etc). Sweep it:

```solidity
EigenPod.withdrawDisabledPodETH(recipient)
```

This transfers the EigenPod's entire ETH balance to `recipient` in a single transaction.

You can call this method multiple times as more ETH arrives in the EigenPod.

## After disabling: Full exit

Use this workflow to completely exit EigenLayer.

### Step 1: Exit validators from Beacon Chain

Broadcast full exit requests for all validators in your EigenPod.

Monitor validator status via https://beaconcha.in/validator/[validator_index_or_public_key]

As validators exit, their balances are swept back to your EigenPod by the Beacon Chain (this can take 24 hours to 7 days after the validator shows as exited).

### Step 2: Sweep ETH as it arrives

As exited validator balances land in your EigenPod, sweep the ETH:

```solidity
EigenPod.withdrawDisabledPodETH(recipient)
```

This transfers the EigenPod's entire ETH balance to `recipient`.

You can call `withdrawDisabledPodETH()` multiple times as more ETH arrives from validator exits, rewards, or consolidations.

## Gas considerations

The `disablePod()` call iterates over your full list of queued withdrawals twice. If you have a very large number of queued 
withdrawals, the transaction could take a large amount of gas.

### Methods available after disabling

After disabling, you can:
-  `withdrawDisabledPodETH(recipient)` — sweep all ETH to recipient
-  `requestConsolidation(source, target)` — consolidate to external validators
-  `requestWithdrawal(validatorIndex)` — exit validators

### References

See the full [ELIP-018 specification](https://github.com/eigenfoundation/ELIPs/blob/main/ELIPs/ELIP-018.md) and the [implementation PR](https://github.com/Layr-Labs/eigenlayer-contracts/pull/1758) for complete technical details, security considerations, and audit reports.
