---
title: Custom Security
sidebar_position: 5
---

# Custom Quorums And Thresholds

EigenDA allows users to tailor their data availability solution while maintaining security guarantees.

This is done by letting users define their own [custom quorum](../core-concepts/security/security-model.md#quorums-and-security-models) and [security thresholds](../core-concepts/security/security-model.md#safety-and-liveness-analysis).

Rollups that do so must enforce that the DA Certificate they receive from the disperser meets the `thresholds` they have set for each quorum, including their custom quorum.

Dispersing to a custom quorum effectively additionally replicates the data to the set of operators which hold the custom token that defines the custom quorum.

This means a rollup's token holders can decide, by delegating their tokens, which operators they trust to ensure the data availability of their rollup.

## Overview

Custom quorums and thresholds enable rollups and other users to:
- Define specific operator sets for data verification via delegation of their own token
- Enforce verification of the custom quorum's signature, starting at a specific activation block number
- Set custom confirmation thresholds for data availability confirmation
- Securely upgrade these thresholds as security needs evolve

## Economic Utility for Native Tokens

A key benefit of custom quorums is the ability for users to provide economic utility to their native ERC20 tokens. Rollups can:
- Create dedicated quorums that require re-staking of their native token
- Establish economic security backed by their own token ecosystem
- Enable token holders to participate in securing the rollup's data availability

This creates a powerful economic flywheel where the rollup's success directly enhances the utility and value of its native token, while leveraging that token to strengthen the rollup's security.

## Securely Upgradeable Cert Verification

Backward-compatible secure updates to custom quorums and thresholds are implemented using the exact same mechanism that is used for seamlessly (and securely) updating EigenDA Cert verification logic.

This allows cert verification to be securely added to rollups that were not previously verifying EigenDA certificates, and allows existing cert verification to be upgraded to new versions or to verify additional custom quorums.

## Implementation Process

The process to implement custom security involves several key steps:

### 1. Deploy Custom EigenDACertVerifierRouter

Deploy your own instance of the EigenDACertVerifierRouter contract which will manage certificate verification for your custom quorum configuration.

### 2. Configure Proxy Instances  

Restart your EigenDA proxy instances with configuration pointing to your custom router contract to enable custom security verification.

### 3. Deploy Certificate Verifier Contracts

Deploy new certificate verifier contracts that implement your specific custom quorum and threshold requirements.

### 4. Activate Custom Verifiers

Configure the activation of new verifiers at specific block numbers to ensure smooth transitions and maintain security guarantees throughout the upgrade process.

## Security Considerations

When implementing custom quorums and thresholds:

- Ensure custom quorum operators maintain sufficient stake to provide meaningful security
- Set appropriate confirmation thresholds that balance security and performance requirements  
- Plan activation block numbers carefully to avoid security gaps during transitions
- Consider the economic incentives for your custom quorum operators
- Regular monitoring of custom quorum health and operator participation

## Getting Started

To begin implementing custom security for your rollup:

1. Contact the EigenDA team to discuss your specific requirements
2. Review the security model documentation to understand quorum mechanics
3. Plan your custom token delegation strategy
4. Test the implementation on testnet before mainnet deployment

For technical implementation details and smart contract interfaces, refer to the [EigenDA integration guides](overview.md) and consult with the EigenDA development team.