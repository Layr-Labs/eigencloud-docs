---
sidebar_position: 4
title: Certificates
---

Certificates are signed attestations that you verify against stake tables. Certificates are produced by Operators running
software for a multichain verification service.

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