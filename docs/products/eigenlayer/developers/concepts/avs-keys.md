---
sidebar_position: 6
title: AVS Keys
---

For information on AVS key types, refer to [Keys](../../concepts/keys-and-signatures).

:::important
When using Redistribution, an attacker that gains access to AVS keys for the slasher and `redistributionRecipient` can drain
the entirety of Operator and Staker allocated stake for a given Operator Set. 
:::

## Key Management for Redistributable Slashing

When implementing [redistributable slashing](../slashing/slashing-concept-developers.md), AVSs face significantly heightened security requirements. Unlike burn-only slashing where compromised keys result in destroyed funds, redistributable slashing allows attackers to steal funds directly.

### Critical Key Categories

**Slashing Authority Keys:**
- Keys authorized to call `slashOperator` on the `AllocationManager`
- Should be managed with the highest security standards
- Consider using multi-signature wallets with threshold signatures
- Implement geographic and organizational distribution of signers

**Redistribution Recipient Keys:**
- Keys controlling the `redistributionRecipient` address specified during Operator Set creation
- May receive slashed funds instantly upon calling `clearBurnOrRedistributableShares`
- Should be secured with hardware security modules (HSMs) when possible
- Consider using smart contract wallets rather than EOAs for enhanced security

### Enhanced Security Practices

**Multi-Signature Implementation:**
- Use threshold signatures for all critical operations
- Distribute signing authority across multiple independent parties
- Implement different threshold requirements for different operation types
- Maintain offline backup signers in geographically distributed locations

**Access Control and Separation:**
- Separate slashing authority from other AVS administrative functions
- Use different key sets for operational vs. governance functions
- Implement role-based access controls with principle of least privilege
- Regularly audit and rotate key assignments

**Operational Security:**
- Store keys in dedicated hardware security modules (HSMs)
- Implement comprehensive key rotation schedules
- Maintain secure key backup and recovery procedures
- Use air-gapped systems for key generation and critical operations

### Monitoring and Incident Response

**Continuous Monitoring:**
- Monitor all slashing events for unusual patterns or amounts
- Track `redistributionRecipient` address activity
- Set up alerts for suspicious operator registration patterns
- Implement automated anomaly detection systems

**Emergency Procedures:**
- Maintain emergency pause mechanisms for critical vulnerabilities
- Establish clear incident response procedures
- Create secure communication channels for emergency coordination
- Plan for potential key compromise scenarios

### Smart Contract Integration

**Redistribution Recipient Design:**
When designing the `redistributionRecipient` contract:
- Implement additional access controls and validation logic
- Add time delays for large fund movements
- Include governance mechanisms for fund distribution
- Maintain comprehensive audit trails and transparency

**Circuit Breakers and Limits:**
- Implement rate limiting on slashing frequency and amounts
- Set maximum slash amounts per time period
- Create automatic shutdown triggers for suspicious activity
- Maintain manual override capabilities for emergency situations

### Risk Assessment

Before implementing redistributable slashing, AVSs should conduct comprehensive risk assessments covering:

1. **Key Management Risks**: Evaluation of current key security practices
2. **Operational Risks**: Assessment of internal processes and procedures  
3. **Technical Risks**: Analysis of smart contract vulnerabilities and integration points
4. **Economic Risks**: Understanding of changed incentive structures and attack economics

### Regulatory and Compliance Considerations

AVSs using redistributable slashing should also consider:
- Potential regulatory implications of controlling redistributed funds
- Compliance requirements for fund management and distribution
- Legal liability for key management failures
- Insurance and risk mitigation strategies

:::warning
The security requirements for redistributable slashing are substantially higher than for burn-only slashing. AVSs should only implement redistributable slashing if they can meet these enhanced security standards and have thoroughly evaluated the associated risks.
:::
