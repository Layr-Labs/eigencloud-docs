---
sidebar_position: 2
title: Redistribution
---

:::note
[ELIP-006 Redistributable Slashing](https://github.com/eigenfoundation/ELIPs/blob/main/ELIPs/ELIP-006.md) introduced Redistributable Operator Sets, and is now available on mainnet.
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

In general, there is an incentive to slash user funds when redistribution is enabled. Redistributable Operator Sets 
may offer higher rewards, but these should be considered against the increased slashing risks.

:::note
All ERC-20 assets staked on EigenLayer, including Liquid Staking Tokens (LSTs), and AVS tokens, can be redistributed. Native ETH and EIGEN are not yet eligible for redistribution.
:::

## Security Implications and Risks

:::important
With redistributable slashing, compromised AVS or Operator keys can lead to theft of user funds rather than just burning. This represents a significant increase in risk that all participants must understand.
:::

### For AVSs and Service Builders

**Key Management Requirements:**
- The `redistributionRecipient` should be treated as an AVS-controlled role and signing key with the highest security standards.
- An attacker who gains access to both AVS slashing keys and the `redistributionRecipient` can drain the entirety of Operator and Staker allocated stake for a given Operator Set.
- An attack of this nature will have severe repercussions on the AVS's reputation and continued trust from the community.

**Design Considerations:**
- Because redistribution allows AVSs to benefit from theft related to slashing, additional design care must be taken to consider the incentives of all parties.
- AVSs should implement robust governance mechanisms, fraud proofs, and decentralization in their slashing designs. We encourage AVSs to create robust legibility and process around individual slashings.
- Include delays and veto periods in AVS designs to avoid or cancel slashing in cases of AVS implementation bugs, improper slashing, or fraud.
- Have guidelines around allocation magnitudes and the lower bounds of what can be slashed without introducing [precision loss during slashing](../../developers/howto/build/slashing/precision-rounding-considerations.md).

### For Operators

**Increased Liability:**
- Operators must ensure exceptional focus on key management and operational security when running any redistributable AVS. A loss of a signing key may expose a given Operator to additional slashing via equivocation or signing of malicious certificates. 
- A compromised Operator key could allow a malicious actor to register for a malicious AVS and slash and redistribute allocated Staker funds. This risk may be mitigated by the [`ALLOCATION_DELAY`](../../reference/safety-delays-reference.md), which would provide Stakers an opportunity to undelegate from a compromised Operator. The [`ALLOCATION_DELAY`](../../reference/safety-delays-reference.md) is set by the Operator and should be considered by Stakers in making delegation decisions.
- An attack of this nature will cause Operators to suffer potentially irreparable reputational damage and distrust from Stakers.

**Visibility Changes:**
- Operators participating in redistributing Operator Sets will be marked with `Redistributable` metadata to aid in Staker risk assessment.
- This profile change may affect an Operator's ability to attract stake, though it may also enable access to higher reward opportunities.

### For Stakers

**Attack Scenarios:**
Stakers face increased risks from multiple attack vectors:

1. **Malicious AVS Governance**: If an AVS's governance or slashing functionality is corrupted, an attacker may be able to drain Operator-delegated funds.
2. **Compromised Operators**: If an Operator is compromised, they may stand up their own malicious AVS to steal user funds.
3. **Collusion**: Operators and AVSs may collude to slash and redistribute funds inappropriately.

**Risk Assessment Guidelines:**
- Carefully evaluate the reputation and legitimacy of Operators when making delegations.
- Consider the governance structure and security practices of AVSs using redistributable slashing.
- Understand that redistributable Operator Sets may offer higher rewards but come with proportionally higher risks.
- Monitor your delegated Operators' allocations across various Operator Sets regularly.

## Immutable Guarantees

To provide some protection against the increased risks, redistributable Operator Sets have several immutable properties:

**Fixed Redistribution Recipient:**
- The `redistributionRecipient` address cannot be changed after Operator Set creation.
- While AVSs may use upstream proxy or pass-through contracts, the immutability in EigenLayer allows AVSs to provide additional guarantees through governance controls, timelocks, or immutability.

**Unchangeable Redistribution Capability:**
- An Operator Set must be configured as redistributable at creation time.
- Standard Operator Sets cannot become redistributable.
- Redistributable Operator Sets cannot remove their redistribution property.
- This provides predictable risk profiles for the lifetime of the Operator Set.

**Enhanced Metadata:**
- All redistributable Operator Sets and participating Operators are clearly marked in onchain metadata and the EigenLayer app.
- This improves risk legibility for all participants.

For information on: 

* Interactions and sequence when slashing, refer to the [Slashing Overview](slashing-concept.md).
* Key management when using redistributable slashing, refer to [Key Management for Redistributable Slashing](../../developers/concepts/slashing/key-management-redistributable-slashing.md).
* Security and risk assessments for redistributable slashing, refer to [Security for Redistributable Slashing](../../developers/howto/build/slashing/security-redistributable-slashing.md) and [Risk Assessment for Redistributable Slashing](../../developers/howto/build/slashing/risk-assessment-redistributable-slashing.md).
* Implementing redistributable slashing, refer to [Create Operator Sets](../../developers/howto/build/operator-sets/create-operator-sets.md).
* Operator opt-in to redistributable Operator Sets, refer to [Allocate and Register to Operator Set](../../operators/howto/operator-sets.md).
