---
sidebar_position: 4
title: Safety Delays
---

:::important
Stake delegated to an Operator can become slashable, and when redistributable slashing is live on mainnet, previously delegated
stake can become redistributable if an Operator allocates to a redistributable Operator Set. Stakers are responsible for 
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
[ELIP-006 Redistributable Slashing](https://github.com/eigenfoundation/ELIPs/blob/main/ELIPs/ELIP-006.md) introduced instant outflow for redistributable funds through the `StrategyManager` interface. Redistributable Slashing is now
available on mainnet.
:::

When funds are slashed, they are processed through a two-step approach within the `StrategyManager`. First, slashed shares are marked as "burnable or redistributable" shares in the `StrategyManager` storage. Then, through a permissionless call to `clearBurnOrRedistributableShares`, the funds are either burned or transferred directly to the redistribution recipient. This non-atomic approach maintains the guarantee that slashing never fails while enabling instant redistribution without delays.

For more information on provided safety delays, refer to the [Safety Delays reference](../../reference/safety-delays-reference).
