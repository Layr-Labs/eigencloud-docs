---
sidebar_position: 4
title: Certificates
---

A Certificate is a proof of a task being executed offchain by the Operators of an Operator Set. A Certificate consists of an 
aggregation of Operator signatures that you verify against stake tables. An AVS implementation includes 
retrieving Operator signatures from Operators running a multichain verification service.

The `CertificateVerifier` is responsible for verifying certificates from an offchain task, on-chain.

## ECDSA Certificate

For Operator Sets with less than 30 Operators.

```
struct ECDSACertificate {
    uint32 referenceTimestamp;  // When certificate was created
    bytes32 messageHash;        // Hash of the signed message/task result
    bytes sig;                  // Concatenated operator signatures
}
```

## BLS Certificate

More efficient for Operator Sets with more than 30 Operators.

```
struct BN254Certificate {
    uint32 referenceTimestamp;  // When certificate was created
    bytes32 messageHash;        // Hash of the signed message/task result
    BN254.G1Point signature;    // Aggregate signature
    BN254.G2Point apk;         // Aggregate public key
    BN254OperatorInfoWitness[] nonSignerWitnesses; // Proof of non-signers
}
```