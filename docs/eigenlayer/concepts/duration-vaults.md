---
sidebar_position: 8
title: Duration Vaults
---

:::note
[ELIP-015](https://github.com/eigenfoundation/ELIPs/blob/main/ELIPs/ELIP-015.md) introduced Duration Vaults.
[ELIP-017](https://github.com/eigenfoundation/ELIPs/blob/main/ELIPs/ELIP-017.md) enabled Duration Vaults for ETH LSTs.
:::

Duration Vaults are time-bound, single-use strategies that provide guaranteed stake commitments for specific periods. Unlike 
traditional restaking where Stakers delegate to Operators, Duration Vaults require Stakers to delegate to the vault and deposit tokens for a fixed duration.

## How Duration Vaults Work

Duration Vaults operate through three phases:

1. **Deposits** - Stakers delegate to the vault and deposit tokens (ETH LSTs or other ERC-20s) during an open window.
2. **Allocations** - Vault locks deposits and allocates 100% stake to a specific Operator Set. Stake is slashable and earns rewards.
3. **Withdrawals** - After the duration elapses, Stakers can withdraw deposits plus rewards minus any slashing.

## Duration Vaults vs Traditional Restaking

| Aspect | Traditional Restaking                     | Duration Vaults                                        |
|--------|-------------------------------------------|--------------------------------------------------------|
| **Delegation** | Delegate to Operators                     | Delegate and deposit directly to vault                 |
| **Duration** | Perpetual, withdraw anytime (with delays) | Fixed duration commitment                              |
| **Flexibility** | Can redelegate between operators          | Locked for vault's allocation period                   |

## Supported Tokens

Duration Vaults support ETH LST and other ERC-20 tokens with EigenLayer strategies. 

Duration Vaults do not support EIGEN and bEIGEN, or Native ETH.

## When to Use Duration Vaults

For Stakers:
- Commit stake for a specific time period in exchange for guaranteed returns.
- Simplified staking without Operator selection complexity.
- Time-bound services offered by AVSs (insurance coverage, prediction markets).

For AVS developers:
- Secure guaranteed capacity for a specific time period.
- Provide predictable security commitments to end users.
- Support time-bound use cases requiring fixed-duration stake allocations.

For information on how to implement Duration Vaults, see [Create Duration Vaults](../developers/howto/build/create-duration-vaults.md).

:::important
Duration Vaults lock Staker funds for the entire allocation period. Withdrawals are not possible during the allocation period.
:::