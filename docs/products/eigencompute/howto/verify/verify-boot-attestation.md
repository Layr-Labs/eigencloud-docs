---
title: TEE Attestation
sidebar_position: 1
---

During startup, the TEE running the EigenCompute application generates a boot attestation. A boot attestation is a signed
statement proving what code and environment were measured at boot.

For application users to verify the boot attestation was produced by the TEE running the application:

1. The application signs the boot attestation with the TEE mnemonic and submits the signed boot attestation onchain.
2. The user verifies that the boot attestation was signed by the TEE mnemonic key.

## Signing Boot Attestation with TEE Mnemonic 


## Verify the Boot Attestation Signed by TEE Mnemonic Key 


