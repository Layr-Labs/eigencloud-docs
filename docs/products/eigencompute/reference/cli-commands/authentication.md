---
title: Authentication
sidebar_position: 1
---

# Authentication Commands

EigenX CLI requires authentication to sign transactions for deploying and managing applications. Use these commands to help you manage 
authentication credentials securely.

## Commands Overview

| Command                | Description                                      | Aliases      |
|------------------------|--------------------------------------------------|--------------|
| `eigenx auth generate` | Generate new private key and optionally store it | `gen`, `new` |
| `eigenx auth login`    | Store existing private key in OS keyring         | -            |
| `eigenx auth whoami`   | Show current authentication status and address   | -            |
| `eigenx auth list`     | List all stored private keys by environment      | -            |
| `eigenx auth logout`   | Remove private key from OS keyring               | -            |

## Subcommands

### generate

Generate a new authentication key with optional secure storage. For more information on creating authentication keys,
refer to [Create Authentication Keys](../../howto/manage-auth-keys/create-auth-keys.md).

```bash
eigenx auth generate [--store] [--env <environment>]
```

| Flag                  | Description                                                       |
|-----------------------|-------------------------------------------------------------------|
| `--store`             | Store the generated private key in OS keyring                     |
| `--env <environment>` | Specify environment for the key.  Default is current environment. |


### login

Store an existing authentication key securely in your OS keyring. For more information on logging in to EigenX, refer to
[Manage Authentication Keys](../../howto/manage-auth-keys/manage-authentication-keys.md).

```bash
eigenx auth login [--private-key <key>] [--env <environment>]
```

| Flag                  | Description                                                      |
|-----------------------|------------------------------------------------------------------|
| `--private-key <key>` | Provide private key directly (not recommended)                   |
| `--env <environment>` | Specify environment for the key. Default is current environment. |


### whoami

Display current authentication status and wallet address. For more information on checking your authentication status,
refer to [Manage Authentication Keys](../../howto/manage-auth-keys/manage-authentication-keys.md).

```bash
eigenx auth whoami
```

### list

List all stored authentication keys organized by environment. For more information on listing keys,
refer to [Manage Authentication Keys](../../howto/manage-auth-keys/manage-authentication-keys.md).

```bash
eigenx auth list
```

### logout

Remove stored authentication keys from your OS keyring.

```bash
eigenx auth logout [--env <environment>] [--all]
```

| Flag                  | Description                                                         |
|-----------------------|---------------------------------------------------------------------|
| `--env <environment>` | Specify environment to logout from. Default is current environment. |
| `--all`               | Remove keys from all environments                                   |


## Environment Variables Method

Instead of storing your private key in the keyring, you can provide it via environment variable:

```bash
export PRIVATE_KEY=0x1234567890abcdef...
eigenx app deploy
```

This is useful for:
- CI/CD pipelines
- Automated scripts
- Temporary usage

:::caution
Be careful not to commit `.env` files containing private keys to version control. Add them to `.gitignore`.
:::

## Command Flag Method

Provide your private key directly to any command:

```bash
eigenx app deploy --private-key 0x1234567890abcdef...
```

:::warning
This method exposes your private key in your shell history. Only use this for testing with non-production keys.
:::

---

## Best Practices

### Security

1. **Use OS Keyring** - Most secure method for local development
2. **Never commit keys** - Add keys to `.gitignore` and use environment variables for CI/CD
3. **Separate keys per environment** - Use different keys for dev, testnet, and mainnet
4. **Regular rotation** - Consider rotating keys periodically

### Workflow

1. **Initial setup**: `eigenx auth generate --store`
2. **Check status**: `eigenx auth whoami` before deploying
3. **Get funds**: Use address from `whoami` to request testnet ETH
4. **Verify balance**: Check you have sufficient funds before deployment

### Using Sepolia Testnet

By default, commands use mainnet-alpha. To switch to sepolia testnet:

```bash
eigenx env set sepolia
eigenx auth generate --store
eigenx app deploy
```

---

## Troubleshooting

### "Not authenticated" Error

If you get authentication errors:

```bash
# Check authentication status
eigenx auth whoami

# If not authenticated, login
eigenx auth login
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
eigenx auth whoami

# Logout and login with correct key
eigenx auth logout
eigenx auth login
```

---

## Related Commands

- [Environment Management](./environment) - Switch between mainnet and sepolia
- [Configuration](./configuration) - CLI configuration options
- [Deployment](./deployment) - Deploy apps using authenticated credentials
