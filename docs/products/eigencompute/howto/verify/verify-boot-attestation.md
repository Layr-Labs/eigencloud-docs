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

Use the [Attested API templates](https://github.com/Layr-Labs/eigenx-templates/tree/main/templates/attested-api) to create an
app template that signs and posts the signed boot attestation. 

## Verify the Boot Attestation Signed by TEE Mnemonic Key 

1. Use the [`eigenx app info [app-id]`](../../reference/cli-commands/monitoring.md#eigenx-app-info) CLI command to get the wallet addresses for the app. 

2. Use the [app `/random` API](https://github.com/Layr-Labs/eigenx-templates/tree/main/templates/attested-api/golang#api) `GET /random → \{ randomNumber, timestamp, message, messageHash, signature, signer }` to obtain
the signer.

3. Verify that the signer returned matches one of the wallet addresses in step 1.

