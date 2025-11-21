---
sidebar_position: 5
title: Multichain Security Considerations
---

The following table outlines the key security aspects to consider when implementing multichain verification services.

| Risk                    | Mitigation                                       | Implementation                                                                 |
|-------------------------|--------------------------------------------------|---------------------------------------------------------------------------------|
| Stale Stake Data        | Configure appropriate staleness periods          | Set staleness > 7 days in your `OperatorSetConfig`                             |
| Key Compromise          | Monitor for operator ejections and key rotations | Listen for `AllocationManager.OperatorSlashed` and `KeyRegistrar.KeyDeregistered` |
| Insufficient Stake      | Set minimum thresholds in verification           | Use `verifyCertificateNominal()` with minimum stake requirements               |
| Operator Centralization | Implement stake capping in your calculator       | Cap individual operators at 10–20% of total weight                              |
| Certificate Replay      | Check certificate freshness                      | Validate `referenceTimestamp` is recent and within staleness period            |

The following table outlines possible emergency procedures. 

| Procedure                            | Action                                                                      |
|--------------------------------------|-----------------------------------------------------------------------------|
| Operator Ejection                    | Immediately updates across all chains when operators are slashed or ejected |
| Operator Registration/Deregistration | Immediately updates across all chains when operators register or deregister |
| Pause Mechanisms                     | System-wide pause capabilities for critical vulnerabilities                 |
| Key Rotation                         | Operators can rotate compromised keys with configurable delays              |

The **operator tables of *all* operatorSets are updated weekly on Monday at 14:00 UTC on mainnet and daily at 14:00 UTC on testnet**. To ensure that an operatorSet can immediately begin verifying certificates and that its stake weights do not become stale between table updates, the multichain protocol updates the table for a *single* operatorSet registered to the protocol when the following events are emitted:

- AllocationManager: `OperatorSlashed`
- AllocationManager: `OperatorAddedToOperatorSet`
- AllocationManager: `OperatorRemovedFromOperatorSet`
- CrossChainRegistry: `GenerationReservationCreated`