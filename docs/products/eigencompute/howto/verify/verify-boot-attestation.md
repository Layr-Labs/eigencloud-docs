---
title: Verify TEE Signature
sidebar_position: 1
---

Application users can verify a message was signed by a TEE using the application address.

## Attested API Template Example  

The [Attested API templates](https://github.com/Layr-Labs/eigenx-templates/tree/main/templates/attested-api) include an example of:
1. Signing a random number and posting on Ethereum.
2. Providing an API for the application user to retrieve the signed message.

## Verify Message Signed by Application Example

1. Use the [`eigenx app info [app-id]`](../../reference/cli-commands/monitoring.md#eigenx-app-info) CLI command to get the wallet addresses for the app. 

2. Use the [app `/random` API](https://github.com/Layr-Labs/eigenx-templates/tree/main/templates/attested-api/golang#api) `GET /random → \{ randomNumber, timestamp, message, messageHash, signature, signer }` to obtain
the message, signature, and signer.

3. Use **Verify Signature** at https://etherscan.io/verifiedSignatures# to verify that the message is signed by one of the addresses obtained in Step 1.

