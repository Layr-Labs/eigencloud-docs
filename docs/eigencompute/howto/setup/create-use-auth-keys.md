---
title: Create and use authentication keys
sidebar_position: 2
---

:::important 
EigenCompute uses two types of keys: 
* Authentication keys for deployments and protocol interactions.
* TEE mnemonic for applications and wallet functionality inside the TEE. 

For more information on EigenCompute keys, refer to the [Keys](../../concepts/keys-overview.md) concept topic. 
:::

## Create and securely store an authentication key

To create and securely store an authentication key: 

```
ecloud auth generate --store
```

An authentication key is created and stored in the OS keyring:

:::warning
The private key is securely stored while you remain authenticated to EigenCompute.

If you log out of EigenCompute and have not backed up the private key that was generated for you, you will be unable to access your deployed application.

If you generate another authentication key and overwrite the existing private key without first having backed up the private key that was generated for you, you will be unable to access your deployed application.
:::

## Create and display an authentication key

:::caution 
Logging in by providing your private key directly in the command line is not recommended. It is recommended to [securely store 
authentication keys in the OS keyring](#create-and-securely-store-an-authentication-key) or use the `ECLOUD_PRIVATE_KEY` environment variable.
:::

To create and display an authentication key: 

```
ecloud auth generate
```

:::note Follow best practices
* Use OS Keyring - Most secure method for local development
* Never commit keys - Add keys to `.gitignore` and use environment variables for CI/CD.
:::

## Use existing authentication key

When using EigenCompute, logging in refers to providing your authentication key to the ecloud command line. The following methods
are supported and checked in this order:

1. `--private-key` flag on any command (not recommended).
2. `ECLOUD_PRIVATE_KEY` environment variable.
3. OS keyring securely stored credentials.

:::warning
Using the `--private-key` flag to provide your private key directly on the command line is not recommended. When provided on the command line
it may be stored in your shell history. Use the OS keyring to securely store credentials or the `ECLOUD_PRIVATE_KEY` environment
variable for CI/CD pipelines.
:::

To log in by storing your authentication key in the OS keyring:

```bash
ecloud auth login
```

## Troubleshooting

### "Not authenticated" Error

If you get authentication errors:

```bash
# Check authentication status
ecloud auth whoami

# If not authenticated, login
ecloud auth login
```

### Keyring Access Issues

On some systems, you may need to unlock your keyring:

- **Linux**: Ensure GNOME Keyring or KWallet is running
- **macOS**: System Keychain should work automatically
- **Windows**: Credential Manager should work automatically

If issues persist, use the environment variable method as a fallback.

### Wrong Address

If you're using the wrong address:

```bash
# Check current address
ecloud auth whoami

# Logout and login with correct key
ecloud auth logout
ecloud auth login
```