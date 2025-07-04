---
sidebar_position: 2
title: Redistribution
---

:::note
[ELIP-006 Redistributable Slashing](https://github.com/eigenfoundation/ELIPs/blob/main/ELIPs/ELIP-006.md) introduced Redistributable Operator Sets.
Redistributable Slashing is available in v1.5 on testnets and will be available on mainnet in Q3.
:::

Redistribution enables AVSs to repurpose slashed funds instead of burning them. In use cases such as lending and insurance protocols, 
redistribution plays a key role. It enables the reallocation of funds when commitments are broken or conditions change, for example, 
in the event of a liquidation or user reimbursement. Redistribution may be particularly beneficial for AVS use-cases that involve 
lending, insurance, risk hedging, or, broadly, commitments with a need to compensate harmed parties or amortize risk.

Redistribution extends slashing, allowing AVSs to not only penalize Operators for missed commitments but also strategically 
redirect slashed funds for their use-case, which could include compensating harmed parties or potentially rewarding reliable Operators.

Redistribution is opt-in only for AVSs, Operators, and Stakers. AVSs choose whether to enable redistribution by creating
redistributable Operator Sets, Operators choose whether to accept the redistribution conditions, and Stakers decide whether 
to delegate to Operators allocated to redistributable Operator Sets.

In general, there is a larger incentive to slash user funds when redistribution is enabled. Redistributable Operator Sets 
may offer higher rewards, but these should be considered against the increased slashing risks.

:::note
All ERC-20 assets staked on EigenLayer, including Liquid Staking Tokens (LSTs), EIGEN, and AVS tokens, can be redistributed. Native ETH is not 
yet eligible for redistribution.
:::

For information on: 
* Slash escrow delay, refer to [Safety Delays](safety-delays-concept.md) and [Safety Delays reference](../../reference/safety-delays-reference.md).
* Interactions and sequence when slashing, refer to the [Slashing Overview](slashing-concept.md).
* Implementing redistributable slashing, refer to [Create Operator Sets](../../developers/howto/build/operator-sets/create-operator-sets.md).
* Opting into redistributable Operator Sets, refer to [Allocate and Register to Operator Set](../../operators/howto/operator-sets.md).