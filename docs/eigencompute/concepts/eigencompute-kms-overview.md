---
title: EigenCompute KMS
sidebar_position: 2
---

The [EigenCompute Key Management Service (KMS)](https://github.com/Layr-Labs/eigenx-kms-go) is a distributed service that handles all secrets (for example, private keys, API secrets,
encrypted tokens) for EigenCompute applications. The KMS provides applications a persistent onchain identity, strict isolation
of secrets, and long-term recoverability even with hardware failures or Operator outages.

The KMS provides three key properties to EigenCompute applications:

1. [Deterministic TEE mnemonic](#deterministic-mnemomic-generation)

    Every application receives a deterministic mnemonic that only its TEE can access. This allows the TEE to hold a persistent wallet and act autonomously onchain.
2. No access to secrets outside the TEE

    [Secrets](#derived-from-mnemonic) are never exposed to application code or Operators. Only the TEE can derive and use private keys.

    Key shares cannot be combined by any single party meaning that no Operator ever sees the full private key. A compromised Operator,
    or even a malicious one, cannot gain access to the private key without collusion from ⌈2n/3⌉ operators.

3. Recoverability even if a TEE fails
  
    The KMS tolerates up to n/3 Operator failures or outages, ensuring applications maintain their identity and capabilities.
    This enables availability to be shared across a decentralized set of Operators.

:::note KMS Operators in Mainnet Alpha Phase
In the Mainnet Alpha phase, EigenLabs are running all KMS nodes. Additional Operators will be onboarded in Q3, 2026.
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

## Distributed KMS Protocol

The distributed KMS implements a DKG (distributed key generation) based MPC (multi-party computation) protocol based on 
the [Feldmann-VSS white paper](https://dl.acm.org/doi/10.1109/SFCS.1987.4).
The distributed KMS uses:
* BLS12-381 threshold signatures for distributed key generation and signing
* Identity-Based Encryption (IBE) where application IDs serve as public keys
* Automatic key resharing at regular intervals for security rotation.