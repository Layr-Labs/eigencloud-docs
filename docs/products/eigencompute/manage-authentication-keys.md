---
title: Manage Authentication Keys
sidebar_position: 2
---

:::important
EigenCompute uses two types of keys:
* Authentication keys for deployments and protocol interactions.
* TEE mnemonic for applications and wallet functionality inside the TEE.

For more information on EigenCompute keys, refer to the Keys Overview concept topic.
:::

## Log in to EigenX

When using EigenX, logging in refers to providing your authentication key to the EigenX command line. The following methods
are supported and checked in this order: 

1. `--private-key` flag on any command (not recommended). 
2. `PRIVATE_KEY` environment variable.
3. OS keyring securely stored credentials.

:::warning
Using the `--private-key` flag to provide your private key directly on the command line is not recommended. When provided on the command line
it may be stored in your shell history. Use the OS keyring to securely store credentials or the `PRIVATE_KEY` environment 
variable for CI/CD pipelines.
:::

Log in to:
* Import an existing key from Metamask or another wallet.
* Store your allowlisted wallet after receiving access.
* Configure the EigenX CLI on a new machine.

To log in by storing your authentication key in the OS keyring, use the interactive login:

```bash
eigenx auth login
```

The CLI will prompt you to enter your private key:

```
Enter your private key: [hidden input]
Address: 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb1

✓ Private key stored securely in OS keyring
✓ You can now use eigenx commands without additional authentication
```

Use the `--env` flag to log in to a specific environment:

```bash
eigenx auth login --env sepolia
```

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