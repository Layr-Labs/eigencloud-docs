---
title: Security Model
sidebar_position: 4
---

### Trust Requirements

EigenCompute currently requires trust in:
- Intel TDX hardware security guarantees
- Google Confidential Space attestation service
- Single KMS operator (being decentralized via threshold cryptography)

Security enhancements in development:
- Public attestation endpoints for runtime verification
- Threshold KMS for distributed key management
- Replica prevention via onchain checks and heartbeats
- Verifiably built images with reproducible builds