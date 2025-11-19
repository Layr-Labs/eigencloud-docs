---
title: EigenCompute KMS
sidebar_position: 2
---

The EigenCompute Key Management Service (KMS) is the service that handles all secrets (for example, private keys, API secrets, 
encrypted tokens) for applications.

:::note KMS Operator in Mainnet Alpha Phase
In the Mainnet Alpha phase, EigenLabs are running a single KMS node for all EigenCompute apps in Google Cloud Platform. 
Threshold KMS for distributed key management is in active development.
:::

## Deterministic Mnemomic Generation

Each application gets a persistent mnemonic derived deterministically from its application ID.  That is, the same application
ID will always produce the same mnemonic.

The deterministic mnemonic generation enables persistent identity across the entire application lifecycle. When you upgrade
or restart your application, the new instance get the same mnemonic.

### Derived from Mnemonic

From the mnemonic, applications can generate:

* Wallet addresses for: 
    * Ethereum
    * Solana
    * Any other blockchain with Hierarchical Deterministic (HD) wallet support. HD wallets implement the [BIP-32 standard](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki).

* TLS private keys for: 
    * Serving HTTPS traffic
    * Generating certificates tied to the mnemonic.

* Encryption keys for: 
    * Encrypting data at rest 
    * Securing communication with other services.

:::tip Example Use Case
Encrypt a database with a key derived from the mnemonic. On reboot, derive the same key and decrypt the database. Persistent encrypted state!
:::

## Recoverability

TODO - add this part 