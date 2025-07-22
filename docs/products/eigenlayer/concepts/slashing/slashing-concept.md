---
sidebar_position: 1
title: Overview
---

:::note
[ELIP-006 Redistributable Slashing](https://github.com/eigenfoundation/ELIPs/blob/main/ELIPs/ELIP-006.md) introduced Redistributable Operator Sets, and is now available on mainnet.
:::

Slashing is a type of penalty determined by an AVS as a deterrent for broken commitments by Operators. Broken commitments
may include improperly or inaccurately completing tasks assigned in [Operator Sets](../operator-sets/operator-sets-concept) by an AVS. 
Slashing results in a burning or redistribution of funds. AVSs can only slash an Operator’s [Unique Stake](unique-stake.md) allocated to a single Operator Set.

An AVS may slash an Operator up to the total allocated amount of Unique Stake per [Strategy](../operator-sets/strategies-and-magnitudes) under the following conditions:
* The Operator is registered to the Operator Set the AVS wishes to slash.
* The Operator Set is configured to include the allocated strategy.
* All applicable safety and time delays have passed.

:::important
The EigenLayer protocol provides a slashing function that is maximally flexible. That is, AVSs may slash any Operator that
has delegated stake to that AVS within any of their Operator Sets. AVSs have flexibility to design their protocols to slash
for any reason. Slashing does not have to be objectively attributable (that is, provable onchain), but AVSs are encouraged to
create robust legibility and process around how their slashing is designed and individual slashing events. Operators are responsible
for ensuring that they fully understand the slashing conditions and slashing risks of AVSs before delegating stake to them, as once
delegated, those funds may be slashable according to the conditions set by that AVS.

With Redistributable Operator Sets, Stakers should carefully consider the AVSs that their delegated Operators are running,
and consider the risk and reward trade-offs. Redistributable Operator Sets may offer higher rewards, but these should be considered
against the increased slashing risks.
:::

## Slashing sequence

The interactions between Staker, Operator, AVS, and core contracts during a slashing are represented in the sequence diagram.

```mermaid
sequenceDiagram
    title Redistribution & Burn Flow

    participant AVS as AVS
    participant ALM as Allocation Manager
    participant DM as Delegation Manager
    participant SM as Strategy Manager
    participant STR as Strategy Contract
    participant RR as Redistribution Recipient

    Note over AVS,RR: Slashing Initiation
    AVS->>ALM: slashOperator<br>(avs, slashParams)
    ALM-->>DM: *Internal* <br>slashOperatorShares<br>(operator, strategies,<br> prevMaxMags, newMaxMags)
    Note over DM,SM: Share Management
    DM-->>SM: *Internal*<br>increaseBurnOrRedistributableShares<br>(operatorSet, slashId, strategy, addedSharesToBurn)
    
    Note over SM,RR: Direct Fund Distribution
    SM->>SM: clearBurnOrRedistributableShares(operatorSet, slashId)
    SM-->>STR: *Internal*<br>withdraw<br>(recipient, token, underlyingAmount)
    STR-->>RR: *Internal*<br>transfer<br>(token, underlyingAmount)
    Note right of RR: Final protocol fund outflow
```

## Burning or redistributing slashed funds

When funds are slashed by an AVS, they are either burned (for standard, non-redistributable Operator Sets) or redistributed
(for redistributable Operator Sets). 

Before burning or redistributing, slashed shares are increased in `StrategyManager` storage as burnable or redistributable shares.
In another call, slashed shares are converted and funds are transferred directly to the `redistributionRecipient` (or burned if using a standard Operator Set). This is done through a permissionless call to the `clearBurnOrRedistributeShares` function on the `StrategyManager`.

This two party flow is non-atomic to maintain the guarantee that slash does not fail, in the case where a token transfer
or some other upstream issue of removing funds from the protocol may fail. This flow is maintained, with the addition of
redistributable shares, using the non-atomic approach while enabling direct distribution to redistribution recipients without a
delay. The AVS can call `clearBurnOrRedistributeShares` themselves via a multi-call or `clearBurnOrRedistributeShares` is called 
after some time by a cron job to ensure funds do not remain in the protocol after a slash.

Once the slash distribution is processed, the slashed funds exit the EigenLayer protocol:
* When burned, ERC-20s are sent to the dead 0x00...00e16e4 address. The dead address is used to ensure proper
accounting with various LRT protocols. No action is required by the AVS to burn the slashed funds.
* For redistributed funds, the slashed funds are transferred directly to the `redistributionRecipient` specified when the redistributable Operator Set is created.

### Native ETH & EIGEN Redistribution Limitations

:::warning
Native ETH cannot be redistributed and remains permanently locked in EigenPod contracts when slashed, just as with burn-only slashing.
:::

Native ETH and EIGEN are excluded from redistributable slashing.

* Native ETH is excluded at this time due to technical constraints of the Ethereum beacon chain and exiting validators in a timely manner. Options are being explored to enable this feature.
* EIGEN cannot be used in redistributable slashing at this time, as it requires a delayed protocol outflow. This is to support its use in intersubjective faults.

**Current Behavior:**
When native ETH is slashed, it remains permanently locked in the EigenPod contracts, making it inaccessible to both the validator operator.

Burned natively restaked ETH is locked in EigenPod contracts, permanently inaccessible. The Ethereum Pectra upgrade is anticipated
to unblock development of an EigenLayer upgrade which would burn natively restaked ETH by sending it to a dead address, instead
of permanently locking it within EigenPod contracts.

:::note
Only ERC-20 assets staked on EigenLayer, including Liquid Staking Tokens (LSTs), and AVS tokens, can be redistributed. EIGEN is excluded from redistribution at launch.
:::

## For AVS Developers

For information on:
* AVS security models and slashing, refer to [AVS Security Models](../../developers/concepts/avs-security-models.md). 
* Design considerations for slashing, refer to [Design Operator Sets](../../developers/howto/build/operator-sets/design-operator-set.md) and [Design Slashing Conditions](../../developers/howto/build/slashing/slashing-veto-committee-design.md).
* Implementing slashing, refer to [Implement Slashing](../../developers/howto/build/slashing/implement-slashing.md).

## For Operators

For information on allocating to Operator Sets, refer to [Allocate and Register to Operator Set](../../operators/howto/operator-sets.md). 