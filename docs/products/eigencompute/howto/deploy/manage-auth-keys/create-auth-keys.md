---
title: Create Authentication Keys
sidebar_position: 1
---

:::important 
EigenCompute uses two types of keys: 
* Authentication keys for deployments and protocol interactions.
* TEE mnemonic for applications and wallet functionality inside the TEE. 

For more information on EigenCompute keys, refer to the [Keys](../../../concepts/keys-overview.md) concept topic. 
:::

New authentication keys are required for: 

* First time set up to generate a key when you don't have one.
* Multiple environments to generate separate keys for dev, testnet, and mainnet.
* Testing to create separate keys for testing.

## Create and securely store an authentication key

To create and securely store an authentication key: 

```
eigenx auth generate --store
```

An authentication key is created and stored in the OS keyring: 

```
Generated new private key
Address: 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb1

✓ Private key stored securely in OS keyring
✓ You can now use eigenx commands without additional authentication
```

:::warning
The private key is securely stored while you remain authenticated to EigenCompute.

If you log out of EigenCompute and have not backed up the private key that was generated for you, you will be unable to access your deployed application.

If you generate another EigenCompute key and overwrite the existing private key without first having backed up the private key that was generated for you, you will be unable to access your deployed application.
:::

To create and securely store an authentication key for a specific environment:

```
eigenx auth generate --store --environment sepolia
```

:::tip
To list available deployment environments, use `eigenx environment list`
:::

## Create and display an authentication key

:::caution 
Logging in by providing your private key directly in the command line is not recommended. It is recommended to [securely store 
authentication keys in the OS keyring](#create-and-securely-store-an-authentication-key).
:::

To create and display an authentication key: 

```
eigenx auth generate
```

An authentication key is created and displayed:

```
Generated new private key: 0x1234567890abcdef...
Address: 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb1

⚠️  Private key not stored. Use --store flag to save it securely.
```