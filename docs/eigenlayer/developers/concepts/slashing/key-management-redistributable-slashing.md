---
sidebar_position: 2
title: Key Management for Redistributable Slashing
---

When implementing [redistributable slashing](slashing-concept-developers.md), AVSs face significantly heightened security requirements. Unlike burn-only slashing where compromised keys result in destroyed funds, redistributable slashing allows attackers to steal funds directly.

:::important
When using Redistribution, an attacker that gains access to AVS keys for the slasher and `redistributionRecipient` can drain
the entirety of Operator and Staker allocated stake for a given Operator Set.
:::

For information on AVS key types, refer to [Keys](../../../concepts/keys-and-signatures).

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

### Enhanced Key Management Practices

**Multi-Signature Implementation:**
- Use threshold signatures for all critical operations.
- Distribute signing authority across multiple independent parties.
- Implement different threshold requirements for different operation types.
- Maintain offline backup signers in geographically distributed locations.

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




