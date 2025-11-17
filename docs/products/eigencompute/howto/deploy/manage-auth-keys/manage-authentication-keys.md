---
title: Manage Authentication Keys
sidebar_position: 3
---

:::important
EigenCompute uses two types of keys:
* Authentication keys for deployments and protocol interactions.
* TEE mnemonic for applications and wallet functionality inside the TEE.

For more information on EigenCompute keys, refer to the [Keys](../../../concepts/keys-overview.md) concept topic.
:::

## Check authentication status

Check the authentication status to: 
* Verify that you are logged in before deploying.
* Find your address to request testnet funds.
* Confirm the environment to which you're deploying.

To display the currently authenticated address: 

```
eigenx auth whoami
```

The authenticated address and environment are displayed:

```
Address: 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb1
Source:  stored credentials (sepolia)
```

## List stored keys

List stored keys to: 
* Audit stored keys across environments.
* Check which key is active for key environment.
* Track keys for different environments. 

To list all stored keys: 

```
eigenx auth list
```

The addresses of the stored keys are displayed for each environment: 

```
Stored private keys:

sepolia      0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb1
```

## Log out of EigenX 

Log out of EigenX to:
* Remove credentials before leaving a shared machine.
* Use a different authentication key.
* Remove corrupted credentials when troubleshooting.

To log out of all environments: 

```bash
eigenx auth logout --all
```

Output:
```
✓ Logged out from all environments
✓ All private keys removed from OS keyring
```

To log out of the current environment: 

```bash
eigenx auth logout
```

To log out from a specific environment:

```bash
eigenx auth logout --env sepolia
```