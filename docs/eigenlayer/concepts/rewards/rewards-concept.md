---
sidebar_position: 1
title: Overview
---

Rewards are tokens distributed to Stakers and Operators by an AVS to reward Stakers and Operators for participation in securing AVSs.

## Rewards v2 and v2.1

Rewards v2 (operator directed rewards) implements the [EigenLayer Improvement Proposal-001: Rewards v2](https://github.com/eigenfoundation/ELIPs/blob/main/ELIPs/ELIP-001.md).
Rewards v2.1 (operator directed Operator Set rewards) uses the same operator directed model but scoped to a specific Operator Set 
rather than AVS-wide. 

Using operator directed rewards (v2) and operator directed Operator Set rewards (v2.1), AVSs can [direct performance-based rewards](../../developers/howto/build/submit-rewards-submissions.md) to specific Operators using custom logic. Operator directed Rewards enable 
rewards to be distributed based on work completion, quality or other parameters determined by the AVS, allowing flexible and tailored incentives.

## Rewards v2.2

Rewards v2.2 (unique stake and total stake Operator Set rewards) implements [ELIP-014](https://github.com/eigenfoundation/ELIPs/blob/main/ELIPs/ELIP-014.md), and:
* Unique stake rewards distributes based on allocated unique stake (`magnitude / max_magnitude`) within an Operator Set.
* Total stake rewards distributes based on total delegated stake within an Operator Set.

Rewards v2.2 enables auto-weighted distribution supports both retroactive and forward-looking submissions (up to 2 years). 

## Rewards split

Operators can [set their per-AVS fee rate](../../operators/howto/configurerewards/set-rewards-split.md) on AVS Rewards to any amount from 0% to 100%. The default split is 10%. Setting
a variable split per-AVS enables Operators to align their fee structures with their economic needs and the complexity and diversity of AVS demands.
Operator fees can be varied by Operator Set for more granular reward fee structures.

## Rewards submission, calculation, and distribution

## Rewards v2.2

[EigenLayer Improvement Proposal-014: Rewards v2.2](https://github.com/eigenfoundation/ELIPs/blob/main/ELIPs/ELIP-014.md) adds rewards mechanisms that enable:

* Unique stake weighted rewards

  AVSs can distribute rewards based on allocated unique stake in Operator Sets. Supports both retroactive and future 
  commitments (max of 2 years).

* Total stake weighted rewards

  AVSs can distribute rewards based on total delegated stake in Operator Sets. Supports both retroactive and future
  commitments (max of 2 years).

The Rewards v2.2 rewards mechanisms enable predictable, multi-period incentive structures.

## Submission, calculation, and distribution

Rewards are submitted, calculated, and distributed as follows:

1. [AVSs submit rewards submissions to Operators and Stakers](../../developers/howto/build/submit-rewards-submissions.md).
2. The Rewards updater calculates Rewards offchain and consolidates these into a merkle root posted onchain.
3. [Operators and Stakers claim their allocated Rewards](rewards-claiming).

## Rewards calculation 

Rewards are calculated via an offchain process. A Merkle root (known as the distribution root) is posted which represents
the cumulative rewards across all earners weekly on mainnet and daily on testnet. There is an additional 2 hour delay on
testnet and 1 week delay on mainnet after posting for the root to be claimable against with a valid Merkle proof. For more
information on the deterministic calculation of the distribution of rewards, refer to the [Rewards Calculation technical documentation](https://github.com/Layr-Labs/sidecar/blob/master/docs/docs/sidecar/rewards/calculation.md).

The posted distribution roots contain cumulative earnings. That is, Stakers and Operators do not have to claim against every
root and claiming against the most recent root claims anything not yet claimed.

Rewards stop accumulating when a withdrawal is queued.
