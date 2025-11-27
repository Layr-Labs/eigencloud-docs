---
title: Use Existing Authentication Keys
sidebar_position: 2
---

When using EigenX, logging in refers to providing your authentication key to the EigenX command line. The following methods
are supported and checked in this order:

1. `--private-key` flag on any command (not recommended).
2. `EIGENX_PRIVATE_KEY` environment variable.
3. OS keyring securely stored credentials.

:::warning
Using the `--private-key` flag to provide your private key directly on the command line is not recommended. When provided on the command line
it may be stored in your shell history. Use the OS keyring to securely store credentials or the `EIGENX_PRIVATE_KEY` environment
variable for CI/CD pipelines.
:::

Log in to:
* Import an existing key from Metamask or another wallet.
* Configure the EigenX CLI on a new machine.

## Provide by storing in OS keyring

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

## Provide using environment variable

Instead of storing your private key in the keyring, you can provide it via environment variable:

```bash
export EIGENX_PRIVATE_KEY=0x1234567890abcdef...
eigenx app deploy
```

This is useful for:
- CI/CD pipelines
- Automated scripts
- Temporary usage

:::caution
Be careful not to commit `.env` files containing private keys to version control. Add them to `.gitignore`.
:::

## Provide private key using command flag 

Provide your private key directly to any command:

```bash
eigenx app deploy --private-key 0x1234567890abcdef...
```

:::warning
This method exposes your private key in your shell history. Only use this for testing with non-production keys.
:::