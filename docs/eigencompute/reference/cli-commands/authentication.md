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
refer to [Create Authentication Keys](../../howto/build/authenticate/create-auth-keys.md).

```bash
eigenx auth generate [--store] [--env <environment>]
```

| Flag                  | Description                                                       |
|-----------------------|-------------------------------------------------------------------|
| `--store`             | Store the generated private key in OS keyring                     |
| `--env <environment>` | Specify environment for the key.  Default is current environment. |


### login

Store an existing authentication key securely in your OS keyring. For more information on logging in to EigenX, refer to
[Manage Authentication Keys](../../howto/build/authenticate/manage-authentication-keys.md).

```bash
eigenx auth login [--private-key <key>] [--env <environment>]
```

| Flag                  | Description                                                      |
|-----------------------|------------------------------------------------------------------|
| `--private-key <key>` | Provide private key directly (not recommended)                   |
| `--env <environment>` | Specify environment for the key. Default is current environment. |


### whoami

Display current authentication status and wallet address. For more information on checking your authentication status,
refer to [Manage Authentication Keys](../../howto/build/authenticate/manage-authentication-keys.md).

```bash
eigenx auth whoami
```

### list

List all stored authentication keys organized by environment. For more information on listing keys,
refer to [Manage Authentication Keys](../../howto/build/authenticate/manage-authentication-keys.md).

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

---

## Related Commands

- [Environment Management](./environment) - Switch between mainnet and sepolia
- [Configuration](./configuration) - CLI configuration options
- [Deployment](./deployment) - Deploy apps using authenticated credentials
