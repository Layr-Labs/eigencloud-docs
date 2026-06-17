---
sidebar_position: 4
title: Safety Delays
---

:::important
Stake delegated to an Operator can become slashable, and previously delegated stake can become redistributable if an Operator allocates to a redistributable Operator Set. Stakers are responsible for 
ensuring that they fully understand and confirm their risk tolerances for existing and future delegations to Operators and the 
Operator’s slashable allocations. Additionally, Stakers are responsible for continuing to monitor the allocations of their 
chosen Operators as they update allocations across various Operator Sets.

AVSs using redistribution, and Operators running those AVSs, will be marked with appropriate metadata onchain and in the EigenLayer app.
:::

Safety delays are applied when allocating or deallocating to prevent rapid stake movements. Safety delays:
* Ensure stability. Delays ensure gradual transitions when stake is being allocated or dellocated enabling AVSs to adjust to changes in Operator security.
* Reduce risks from slashing. Delays ensure that staked assets remain at risk for a period after deallocation preventing the withdrawal of stake immediately before a slashing event to avoid slashing penalties.
* Preventing stake cycling to collect rewards. Delays ensure commitment periods to securing an AVS.

:::note
[ELIP-006 Redistributable Slashing](https://github.com/eigenfoundation/ELIPs/blob/main/ELIPs/ELIP-006.md) introduced redistributable funds through the `StrategyManager` interface. [ELIP-016 Slash Resolution Delay](https://github.com/eigenfoundation/ELIPs/blob/main/ELIPs/ELIP-016.md) introduced a 7-day delay before slashed shares can be cleared.

In the event of a security incident, redistribution can be paused by the [Pauser Multisig](https://etherscan.io/address/0x5050389572f2d220ad927CcbeA0D406831012390) to prevent slashed funds from leaving the protocol.
:::

For more information on provided safety delays, refer to the [Safety Delays reference](../../reference/safety-delays-reference).
