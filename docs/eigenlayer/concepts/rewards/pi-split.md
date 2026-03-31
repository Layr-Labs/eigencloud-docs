---
sidebar_position: 4
title: Programmatic Incentives Split
---

[Programmatic Incentives](https://docs.eigenfoundation.org/programmatic-incentives/programmatic-incentives-faq) are EIGEN tokens minted by the EigenLayer protocol to Stakers and Operators.
Programmatic Incentives are claimed, and Operators can set a variable split of Programmatic Incentives, in the same way as Rewards.

Incentives are directed to fee-paying AVSs by the [Incentives Council](https://forum.eigenlayer.xyz/t/incentives-committee-update-1/14786)
as outlined in [ELIP-12](https://github.com/eigenfoundation/ELIPs/blob/main/ELIPs/ELIP-012.md).

As at March 2026:
* All ETH incentives are directed to [EigenDA](../../../eigenda/core-concepts/overview.md).  
* To receive programmatic incentives as a Staker, delegate to Operators supporting EigenDA.
* To receive programmatic incentives as an Operator, run EigenDA

In future, other fee-paying AVSs may be eligible for ETH incentives proportional to their rewards paid.

By default, Operators earn a 10% split on Programmatic Incentives. The rest of the Programmatic Incentives are claimable 
by the Operator’s delegated Stakers. Programmatic Incentive distributions are proportional to delegated stake.

For information on how to change the default Programmatic Incentives split, refer to [Set Programmatic Incentives Split](../../operators/howto/configurerewards/set-pi-split).
