---
sidebar_position: 4
title: Certificate Verification
---

## Certificate Structures

Certificates are signed attestations that you verify against stake tables.

### ECDSA Certificate 

For Operator Sets with less than 30 Operators. 

```
struct ECDSACertificate {
    uint32 referenceTimestamp;  // When certificate was created
    bytes32 messageHash;        // Hash of the signed message/task result
    bytes sig;                  // Concatenated operator signatures
}
```

### BLS Certificate

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

## Certificate Verification Methods

Choose from the following verification methods depending on your trust requirements:
1. [Direct - Call `CertificateVerifier` functions directly.](#direct-verification-functions)
2. AVS-wrapped - Use verification contract provided by the verifiable service.
3. [Custom-wrapped - Add your own logic wrapping `CertificateVerifier`.](#custom-verification-logic-example)

## Direct Verification Functions

* Proportional 
    
    `CertificateVerifier.verifyCertificateProportion(operatorSet, cert, [6600]) // ≥ 66 %`
* Nominal
    
    `CertificateVerifier.verifyCertificateNominal(operatorSet, cert, [1000000]) // ≥ 1 M units`
* Custom
    
    `(bool valid, uint256[] memory weights) = CertificateVerifier.verifyCertificate(operatorSet, cert)`, then apply custom logic

### Direct Verification Example

```
// Same code works on Ethereum, Base, etc.
bool isValid = certificateVerifier.verifyCertificateProportion(
operatorSet,
certificate,
[6600] // Require 66% of stake
);

if (isValid) {
// Process verified result
processOperatorOutput(certificate.messageHash);
}
```

## Custom Verification Logic Example

```
// Get raw stake weights for custom logic
(bool validSigs, uint256[] memory weights) = certificateVerifier.verifyCertificate(operatorSet, cert);
require(validSigs, "Invalid signatures");

// Apply custom business logic
uint256 totalStake = 0;
uint256 validOperators = 0;
for (uint i = 0; i < weights.length; i++) {
if (weights[i] >= MIN_OPERATOR_STAKE) {
totalStake += weights[i];
validOperators++;
}
}

// Custom requirements: need both 60% stake AND 3+ operators
require(totalStake * 10000 >= getTotalOperatorSetStake() * 6000, "Need 60% stake");
require(validOperators >= 3, "Need 3+ qualified operators");
```

