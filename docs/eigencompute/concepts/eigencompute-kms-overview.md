---
title: EigenCompute KMS
sidebar_position: 2
---

The EigenCompute Key Management Service (KMS) is the service that handles all secrets (for example, private keys, API secrets,
encrypted tokens) for EigenCompute applications. The KMS provides applications a persistent onchain identity, strict isolation
of secrets, and with the [distributed KMS](#distributed-kms-q1-2026), long-term recoverability even with hardware failures or Operator outages.

The KMS provides three key properties to EigenCompute applications:

1. [Deterministic TEE mnemonic](#deterministic-mnemomic-generation)

    Every application receives a deterministic mnemonic that only its TEE can access. This allows the TEE to hold a persistent wallet and act autonomously onchain.
2. [No access to secrets outside the TEE](#derived-from-mnemonic)

    Secrets are never exposed to application code or Operators. Only the TEE can derive and use private keys.
3. Recoverability even if a TEE fails (with [distributed KMS](#distributed-kms-q1-2026))
  
    Once threshold KMS is live, the KMS will tolerate up to n/3 Operator failures or outages, ensuring applications maintain their identity and capabilities.

:::note KMS Operator in Mainnet Alpha Phase
In the Mainnet Alpha phase, EigenLabs are running a single KMS node for all EigenCompute apps in Google Cloud Platform.
[Threshold KMS for distributed key management](#distributed-kms-q1-2026) is in active development.
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

## Distributed KMS (Q1, 2026)

The distributed KMS (planned for release Q1, 2026) will use threshold cryptography (BLS12-381) to eliminate single points 
of failure while maintaining Byzantine fault tolerance. The distributed KMS will provide two important properties:

* No single Operator can access TEE secrets.
* Applications continue operating even if some KMS Operators go offline.

### No access to TEE secrets

Key shares cannot be combined by any single party meaning that no Operator ever sees the full private key. A compromised Operator,
or even a malicious one, cannot gain access to the private key without collusion from ⌈2n/3⌉ operators.

### Fault-tolerant availability

With a ⌈2n/3⌉ threshold, the KMS will tolerate up to n/3 Operator failures or outages. Applications can continue without interruption if up 
to n/3 Operators fail. This ensures that availability is shared across a decentralized set of Operators.