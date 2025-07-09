---
sidebar_position: 3
title: Security for Redistributable Slashing
---

:::warning
Redistributable slashing increases the attack surface and potential impact of security vulnerabilities. AVSs must implement additional security measures beyond what would be required for burn-only slashing.

AVSs should only implement redistributable slashing if they can meet these enhanced security standards and have thoroughly evaluated the associated risks.
:::

### Monitoring and Incident Response

**Continuous Monitoring and Alerting:**
- Monitor all slashing events for unusual patterns or amounts.
- Track `redistributionRecipient` address activity for unexpected activity.
- Set up alerts for suspicious operator registration patterns.
- Implement automated anomaly detection systems.

**Emergency Procedures:**
- Maintain emergency pause mechanisms for critical vulnerabilities.
- Establish clear incident response procedures.
- Create secure communication channels for emergency coordination.
- Plan for potential key compromise scenarios.

### Smart Contract Integration

**Redistribution Recipient Design:**
When designing the `redistributionRecipient` contract:
- Implement additional access controls and validation logic in the redistribution logic.
- Add time delays for large fund movements.
- Include governance mechanisms for fund distribution.
- Maintain comprehensive audit trails and transparency.
- Consider using a contract rather than an EOA for the `redistributionRecipient`.

**Circuit Breakers and Limits:**
- Implement rate limiting on slashing frequency and amounts.
- Set maximum slash amounts per time period.
- Create automatic shutdown triggers for suspicious activity.
- Maintain manual override capabilities for emergency situations.

**Smart Contract Design:**
- Implement time delays for critical operations.
- Use upgradeable contracts with governance-controlled upgrades.
- Include emergency pause functionality.
- Implement comprehensive access controls and role management.

**Precision loss:** 
- Implement [guidelines to minimize precision loss](precision-rounding-considerations.md).

### Governance and Fraud Prevention

**Veto Mechanisms:**
- Implement governance mechanisms where a committee can review proposed slashings.
- Include meaningful delay periods between slash proposal and execution.
- Allow for community veto of suspicious slashing events.
- Maintain transparent logs of all slashing decisions and rationale.

**Fraud Proofs and Verification:**
- Where possible, implement objective, onchain fraud proofs.
- Create robust legibility around slashing conditions and individual events.
- Enable community verification of slashing claims.
- Implement dispute resolution mechanisms for contested slashes.

### Technical Implementation Guidelines

**Testing and Auditing:**
- Conduct comprehensive security audits focusing on redistributable slashing.
- Implement extensive testing including edge cases and attack scenarios.
- Use formal verification where appropriate for critical components.
- Regular security reviews and penetration testing.

### Catastrophic Bug Mitigation

AVSs should prepare for scenarios where critical bugs could enable unauthorized slashing:

**Circuit Breakers:**
- Implement rate limiting on slashing amounts and frequency.
- Set maximum slash amounts per time period.
- Create automatic shutdown triggers for suspicious activity.
- Maintain manual override capabilities for emergency situations.

**Recovery Mechanisms:**
- Plan for potential fund recovery in case of bugs or exploits.
- Consider insurance or compensation mechanisms.
- Maintain transparency about security measures and incident response.
- Establish clear communication channels with affected parties.