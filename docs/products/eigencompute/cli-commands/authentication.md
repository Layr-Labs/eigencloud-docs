---
title: Authentication
sidebar_position: 1
---

# Authentication Commands

EigenX CLI requires authentication to sign transactions for deploying and managing applications. These commands help you manage authentication credentials securely.

## Authentication Methods

The CLI supports three methods for providing your private key, checked in this priority order:

1. **Command Flag** - `--private-key` flag on any command
2. **Environment Variable** - `PRIVATE_KEY` environment variable
3. **OS Keyring** - Securely stored credentials

:::tip Recommended Method
Using the OS keyring via `eigenx auth login` or `eigenx auth generate --store` is the most secure method. Your private key is encrypted and stored in your operating system's secure credential storage.
:::

## Commands Overview

| Command | Description | Aliases |
| --- | --- | --- |
| `eigenx auth generate` | Generate new private key and optionally store it | `gen`, `new` |
| `eigenx auth login` | Store existing private key in OS keyring | - |
| `eigenx auth whoami` | Show current authentication status and address | - |
| `eigenx auth list` | List all stored private keys by environment | - |
| `eigenx auth logout` | Remove private key from OS keyring | - |

---

## `eigenx auth generate`

Generate a new private key with optional secure storage.

### Syntax

```bash
eigenx auth generate [command options]
```

### Flags

| Flag | Description |
| --- | --- |
| `--store` | Store the generated private key in OS keyring |
| `--env <environment>` | Specify environment for the key (default: current environment) |

### Examples

**Generate a new private key (display only)**

```bash
eigenx auth generate
```

Output:
```
Generated new private key: 0x1234567890abcdef...
Address: 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb1

⚠️  Private key not stored. Use --store flag to save it securely.
```

**Generate and store a new private key**

```bash
eigenx auth generate --store
```

Output:
```
Generated new private key
Address: 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb1

✓ Private key stored securely in OS keyring
✓ You can now use eigenx commands without additional authentication
```

**Generate for specific environment**

```bash
eigenx auth generate --store --env prod
```

### Use Cases

- **First-time setup** - Generate a new key when you don't have one
- **Multiple environments** - Generate separate keys for dev, testnet, and mainnet
- **Fresh start** - Create a new identity for testing

### Aliases

You can use these aliases instead of `generate`:

```bash
eigenx auth gen --store
eigenx auth new --store
```

---

## `eigenx auth login`

Store an existing private key securely in your OS keyring.

### Syntax

```bash
eigenx auth login [command options]
```

### Flags

| Flag | Description |
| --- | --- |
| `--private-key <key>` | Provide private key directly (not recommended) |
| `--env <environment>` | Specify environment for the key (default: current environment) |

### Examples

**Interactive login (recommended)**

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

**Login with inline private key**

```bash
eigenx auth login --private-key 0x1234567890abcdef...
```

:::warning Security Note
Providing your private key directly in the command line is not recommended as it may be stored in your shell history. Use the interactive prompt instead.
:::

**Login for specific environment**

```bash
eigenx auth login --env prod
```

### Use Cases

- **Import existing key** - Use a key from MetaMask or another wallet
- **Onboarding** - Store your allowlisted wallet after receiving access
- **Team setup** - Configure the CLI on a new machine

---

## `eigenx auth whoami`

Display current authentication status and wallet address.

### Syntax

```bash
eigenx auth whoami
```

### Examples

**Check authentication status**

```bash
eigenx auth whoami
```

Output when authenticated:
```
Address: 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb1
Source:  stored credentials (sepolia)
```

Output when not authenticated:
```
Error: no private key found

Use one of these commands to authenticate:
  eigenx auth login              Store an existing private key
  eigenx auth generate --store   Generate and store a new private key
```

### Use Cases

- **Verify authentication** - Check if you're logged in before deploying
- **Get wallet address** - Find your address to request testnet funds
- **Check balance** - Ensure you have enough ETH for deployments
- **Verify environment** - Confirm which environment you're deploying to

---

## `eigenx auth list`

List all stored private keys organized by environment.

### Syntax

```bash
eigenx auth list
```

### Examples

**List all stored keys**

```bash
eigenx auth list
```

Output:
```
Stored private keys:

  sepolia      0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb1

Usage:
  eigenx auth login                    # Store key for current environment
  eigenx auth logout                   # Remove key for current environment
  eigenx --environment <env> <command> # Use different environment
```

### Use Cases

- **Audit stored keys** - See all keys stored across environments
- **Identify current key** - Check which key is active for each environment
- **Manage multiple keys** - Track keys for different environments

---

## `eigenx auth logout`

Remove the stored private key from your OS keyring for the current environment.

### Syntax

```bash
eigenx auth logout [command options]
```

### Flags

| Flag | Description |
| --- | --- |
| `--env <environment>` | Specify environment to logout from (default: current environment) |
| `--all` | Remove keys from all environments |

### Examples

**Logout from current environment**

```bash
eigenx auth logout
```

Output:
```
✓ Logged out from dev environment
✓ Private key removed from OS keyring
```

**Logout from specific environment**

```bash
eigenx auth logout --env prod
```

**Logout from all environments**

```bash
eigenx auth logout --all
```

Output:
```
✓ Logged out from all environments
✓ All private keys removed from OS keyring
```

### Use Cases

- **Security cleanup** - Remove credentials before leaving a shared machine
- **Switch accounts** - Logout to use a different private key
- **Troubleshooting** - Remove corrupted credentials and re-login

---

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

---

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
