---
sidebar_position: 1
title: Slashing
---

For information on how slashing works, refer to concept content on [Slashing](../../../concepts/slashing/slashing-concept.md) and
[Operator Sets](../../../concepts/operator-sets/operator-sets-concept).

## Redistribution Recipient

:::important
When using [Redistribution](../../../concepts/slashing/redistribution.md), an attacker that gains access to AVS keys for the slasher and `redistributionRecipient` can drain
the entirety of Operator and Staker allocated stake for a given Operator Set.
:::

When creating a [redistributable Operator Set](../../howto/build/operator-sets/create-operator-sets.md), an immutable `redistributionRecipient` is specified. The `redistributionRecipient`
should be:
* An AVS-controlled role and signing key.
* A smart contract wallet or mulit-sig to ensure enhanced security and programmability.

The `redistributionRecipient` address cannot be changed. While an AVS may use an upstream proxy or pass-through contract, 
the immutability of this address in EigenLayer means an AVS can layer additional guarantees by guarding the upgradability 
of the upstream contract via controls such as governance, and timelocks.

## Security Design Principles for Redistributable Slashing

:::warning
Redistributable slashing increases the attack surface and potential impact of security vulnerabilities. AVSs must implement additional security measures beyond what would be required for burn-only slashing.
:::

### Key Management Requirements

**Multi-Signature Requirements:**
- Use multi-signature wallets for all slashing-related keys
- Implement threshold signatures with geographic and organizational distribution
- Store keys in hardware security modules (HSMs) when possible
- Regularly rotate keys according to a defined schedule

**Separation of Concerns:**
- Separate slashing authority from other AVS administrative functions
- Use different key sets for different operational functions
- Implement role-based access controls with principle of least privilege
- Maintain offline backup keys in secure locations

### Governance and Fraud Prevention

**Veto Mechanisms:**
- Implement governance mechanisms where a committee can review proposed slashings
- Include meaningful delay periods between slash proposal and execution
- Allow for community veto of suspicious slashing events
- Maintain transparent logs of all slashing decisions and rationale

**Fraud Proofs and Verification:**
- Where possible, implement objective, on-chain fraud proofs
- Create robust legibility around slashing conditions and individual events
- Enable community verification of slashing claims
- Implement dispute resolution mechanisms for contested slashes

### Operational Security Practices

**Monitoring and Alerting:**
- Implement comprehensive monitoring of all slashing events
- Set up alerts for unusual slashing patterns or amounts
- Monitor the `redistributionRecipient` address for unexpected activity
- Track operator behavior and flag suspicious registration patterns

**Emergency Response:**
- Maintain emergency pause mechanisms for critical bugs
- Establish incident response procedures for potential compromises
- Create communication channels for emergency coordination
- Plan for potential key compromise scenarios

### Technical Implementation Guidelines

**Smart Contract Design:**
- Implement time delays for critical operations
- Use upgradeable contracts with governance-controlled upgrades
- Include emergency pause functionality
- Implement comprehensive access controls and role management

**Redistribution Recipient Design:**
- Consider using a contract rather than an EOA for the `redistributionRecipient`
- Implement additional checks and balances in the redistribution logic
- Add governance controls over fund distribution mechanisms
- Include transparent accounting and audit trails

**Testing and Auditing:**
- Conduct comprehensive security audits focusing on redistributable slashing
- Implement extensive testing including edge cases and attack scenarios
- Use formal verification where appropriate for critical components
- Regular security reviews and penetration testing

### Risk Assessment Framework

Before implementing redistributable slashing, AVSs should evaluate:

**Threat Model Analysis:**
1. **Internal Threats**: Key compromise, insider attacks, governance capture
2. **External Threats**: Economic attacks, MEV extraction, coordinated manipulation
3. **Technical Risks**: Smart contract bugs, integration failures, oracle manipulation
4. **Operational Risks**: Key management failures, process breakdowns, communication failures

**Economic Incentive Analysis:**
1. **Slash Incentives**: Understand how redistribution changes slashing motivations
2. **Operator Behavior**: Consider how redistribution affects operator incentives
3. **Staker Risks**: Evaluate the risk-reward profile for stakers
4. **Attack Economics**: Analyze the cost-benefit of potential attacks

### Catastrophic Bug Mitigation

AVSs should prepare for scenarios where critical bugs could enable unauthorized slashing:

**Circuit Breakers:**
- Implement rate limiting on slashing amounts and frequency
- Set maximum slash amounts per time period
- Create automatic shutdown triggers for suspicious activity
- Maintain manual override capabilities for emergency situations

**Recovery Mechanisms:**
- Plan for potential fund recovery in case of bugs or exploits
- Consider insurance or compensation mechanisms
- Maintain transparency about security measures and incident response
- Establish clear communication channels with affected parties

For information on how to implement slashing, refer to: 
* [Implement Slashing](../../howto/build/slashing/implement-slashing)
* [Design Operator Sets](../../howto/build/operator-sets/design-operator-set.md)
* [Migrate to Operator Sets](../../howto/build/operator-sets/migrate-to-operatorsets.md)
* [Veto Committee Design](../../howto/build/slashing/slashing-veto-committee-design.md)