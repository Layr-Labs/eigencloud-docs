---
title: Environment Management
sidebar_position: 6
---

# Environment Management Commands

Manage deployment environments to switch between mainnet and testnet.

## Commands Overview

| Command | Description | Alias |
| --- | --- | --- |
| `eigenx environment show` | Show active deployment environment | `env` |
| `eigenx environment list` | List available deployment environments | - |
| `eigenx environment set <environment>` | Set deployment environment | - |

---

## `eigenx environment show`

Display the currently active deployment environment.

### Syntax

```bash
eigenx environment show
```

### Alias

```bash
eigenx env show
```

### Example

```bash
eigenx env show
```

Output:
```
Active deployment environment: mainnet-alpha
```

---

## `eigenx environment list`

List all available deployment environments.

### Syntax

```bash
eigenx environment list
```

### Alias

```bash
eigenx env list
```

### Example

```bash
eigenx env list
```

Output:
```
Available deployment environments:
  • sepolia - Ethereum Sepolia testnet
  • mainnet-alpha - Ethereum mainnet (⚠️  uses real funds) (active)
```

---

## `eigenx environment set`

Switch to a different deployment environment.

### Syntax

```bash
eigenx environment set [command options] <environment>
```

### Alias

```bash
eigenx env set <environment>
```

### Arguments

| Argument | Description | Required |
| --- | --- | --- |
| `environment` | Environment name (`sepolia` or `mainnet-alpha`) | Yes |

### Flags

| Flag | Description |
| --- | --- |
| `--yes` | Skip confirmation prompts (for automation) |

### Examples

**Switch to sepolia testnet**

```bash
eigenx env set sepolia
```

**Switch to mainnet**

```bash
eigenx env set mainnet-alpha
```

**Switch without confirmation (for scripts)**

```bash
eigenx env set --yes mainnet-alpha
```

---

## Available Environments

| Environment | Network | Use Case |
| --- | --- | --- |
| `mainnet-alpha` | Ethereum Mainnet | Production deployments (default) |
| `sepolia` | Sepolia Testnet | Development and testing |

:::warning Mainnet Alpha Limitations
- **Not recommended for customer funds** - Mainnet Alpha is intended to enable developers to build, test and ship applications
- **Developer is still trusted** - Does not enable full verifiable and trustless execution yet
- **No SLA** - No SLAs around support and uptime of infrastructure
:::

---

## Best Practices

**Always verify environment before deploying:**

```bash
eigenx env show
eigenx app deploy
```

**Use sepolia for testing:**

```bash
eigenx env set sepolia
eigenx app deploy
# Test thoroughly

eigenx env set mainnet-alpha
eigenx app deploy
```

---

## Related Commands

- [Authentication](./authentication) - Manage credentials per environment
- [Deployment](./deployment) - Deploy apps to current environment
- [Monitoring](./monitoring) - View apps in current environment
