---
sidebar_position: 1
title: Consume multichain services
---

Consumers of multichain verifiable services need to: 
1. Decide whether to adopt the integration method provided by the verifiable service, or to use a self-service or hybrid model, and
implement certificate acquisition according to the chosen [integration method](multichain-integration-patterns.md).

2. Select a verification method based on your trust requirements (direct, AVS-wrapped, or custom-wrapped), and implement
[certificate verification logic](verification-methods.md).

3. Track certificate validity and stake table freshness by monitoring `CertificateVerifier.StakeTableUpdated` and implementing
staleness checks.