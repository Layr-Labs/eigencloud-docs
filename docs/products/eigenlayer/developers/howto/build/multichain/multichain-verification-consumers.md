---
sidebar_position: 3
title: Consumers
---

Consumers of multichain verifiable services need to: 
1. Decide whether to use the integration method chosen by the [verifiable service](multichain-integration-patterns.md), or
to use a [self-service, or hybrid model](multichain-integration-patterns.md#self-service).
2. Select a verification method based on your trust requirements: [direct, AVS-wrapped, or custom-wrapped](verification-methods.md#certificate-verification-methods).
3. Implement certificate verification logic: [proportional, nominal, or custom](verification-methods.md#direct-verification-functions).
4. Implement certificate acquisition based on your chosen model in step 1. Certificates are produced by Operators running
software for a multichain verfication service.
5. Track certificate validity and stake table freshness by monitoring `CertificateVerifier.StakeTableUpdated` and implementing staleness checks.