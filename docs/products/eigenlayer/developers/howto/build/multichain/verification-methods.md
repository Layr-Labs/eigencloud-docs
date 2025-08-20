---
sidebar_position: 5
title: Verify certificates
---

This topic includes:
* [Certificate verification methods](#certificate-verification-methods)
* [Verification examples](#direct-verification-example)
* [Troubleshooting certificate verification](#troubleshooting-certificate-verification)

## Certificate Verification Methods

Choose from the following verification methods depending on your trust requirements:
1. [Direct - Call `CertificateVerifier` functions directly.](#direct-verification-functions)
2. AVS-wrapped - Use verification contract provided by the AVS.
3. [Custom-wrapped - Add your own logic wrapping `CertificateVerifier`.](#custom-verification-logic-example)

## Direct Verification Functions

* Proportional 
    
    `CertificateVerifier.verifyCertificateProportion(operatorSet, cert, [6600]) // ≥ 66 %`
* Nominal
    
    `CertificateVerifier.verifyCertificateNominal(operatorSet, cert, [1000000]) // ≥ 1 M units`

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

## Custom Verification Function

`(bool valid, uint256[] memory weights) = CertificateVerifier.verifyCertificate(operatorSet, cert)`, then apply custom logic

### Custom Verification Logic Example

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
## Troubleshooting Certificate Verification

| Symptom                                              | Likely Cause                             | Fix                                                                                                 |
|------------------------------------------------------|------------------------------------------|-----------------------------------------------------------------------------------------------------|
| `verifyCertificate…` returns false                   | Stake table is stale or wrong curve type | Check `referenceTimestamp`, refresh reservation, and ensure Operators registered the correct curve. |
| Gas cost too high verifying sigs                     | Large OperatorSet using ECDSA            | Switch to BN254 BLS calculator and certificates.                                                    |
| Operator keys missing on target chain                | Key not in `KeyRegistrar`                | Call `isRegistered()`, re-register, and wait for the next table update.                             |
| Certificate verification fails with valid signatures | Operator not in current OperatorSet      | Check operator registration status and OperatorSet membership.                                      |
| Custom verification logic errors                     | Incorrect stake weight interpretation    | Use `verifyCertificate()` to inspect raw weights before applying custom logic.                      |
