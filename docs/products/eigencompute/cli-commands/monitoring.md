---
title: Monitoring
sidebar_position: 5
---

# Monitoring Commands

Monitor your deployed applications with commands to list apps, view detailed information, and stream logs in real-time.

## Commands Overview

| Command | Description |
| --- | --- |
| `eigenx app list` | List all your deployed apps |
| `eigenx app info [app-id\|name]` | Show detailed app information |
| `eigenx app logs [app-id\|name]` | View application logs |

---

## `eigenx app list`

List all applications deployed under your account in the current environment.

### Syntax

```bash
eigenx app list [command options]
```

### Flags

| Flag | Description |
| --- | --- |
| `--all` | Show all apps including terminated ones |
| `--address-count <value>` | Number of addresses to fetch (default: 1) |

### Examples

**List active apps**

```bash
eigenx app list
```

Output when no active apps:
```
No active apps found for developer 0xB4921D9F3eDEB4bFDfcDCA669860Ab965273dC71 (use --all to show terminated apps)
```

**List all apps including terminated**

```bash
eigenx app list --all
```

Output:
```
App Name: my-app
App ID: 0xa59fD620FeAc528417aB7128c7b18C803F40a631
Latest Release Time: 2025-09-25 22:06:12
Status: Running
IP: 34.170.211.89
EVM Address: 0xF619A67Ea563675007Eac422e69530126392b958 (path: m/44'/60'/0'/0/0)
Solana Address: 6Atoibgb61E6jhYcQmXqgLZUNki1fnsTRiGx8FqrqpK1 (path: m/44'/501'/0'/0')

----------------------------------------------------------------------

App Name: another-app
App ID: 0xCDeeA867a5bA09bD5e6678A1594f7ec55E10fE34
Latest Release Time: 2025-09-25 22:25:24
Status: Terminated
IP: 34.42.73.228
EVM Address: 0x27b49986edB3cd0219b3D713F5489b01D9666525 (path: m/44'/60'/0'/0/0)
Solana Address: BA3qL53xF3Y5gVBCHS9YnbNudVwCqBiU2K6sTk4zAZBU (path: m/44'/501'/0'/0')
```


### Use Cases

**Inventory management**

```bash
# See all your apps
eigenx app list --all

# Count running apps
eigenx app list | grep Running
```

**Find app ID**

```bash
# List to find the app ID you need
eigenx app list

# Copy app ID for other commands
eigenx app info app-1a2b3c4d
```

**Cross-environment check**

```bash
# Verify deployment across environments
eigenx app list --all

# Ensure prod apps are running
eigenx app list --env prod
```

---

## `eigenx app info`

Display detailed information about a specific application.

### Syntax

```bash
eigenx app info [command options] [app-id|name]
```

### Arguments

| Argument | Description | Required |
| --- | --- | --- |
| `app-id\|name` | Application ID or friendly name | No (prompts if not provided) |

### Flags

| Flag | Description |
| --- | --- |
| `--address-count <value>` | Number of addresses to fetch (default: 1) |
| `--environment <env>` | Deployment environment to use |
| `--rpc-url <url>` | RPC URL to connect to blockchain |

### Examples

**Get app information**

```bash
eigenx app info my-app
```

Output:
```
App Name: my-app
App ID: 0x01354ee823Dc898F6500c071348BA5523891aafd
Latest Release Time: 2025-10-02 14:02:48
Status: Running
IP: 34.71.169.252
EVM Address: 0x5d5d34E9406459C67Bf4D7C4F179282F8d02D672 (path: m/44'/60'/0'/0/0)
Solana Address: 432ap3zrxTAsDaXu7wdSp3d14srqLhhdvMsF3awbHJco (path: m/44'/501'/0'/0')
```

---

## `eigenx app logs`

View application logs from your TEE instance.

### Syntax

```bash
eigenx app logs [command options] [app-id|name]
```

### Arguments

| Argument | Description | Required |
| --- | --- | --- |
| `app-id\|name` | Application ID or friendly name | No (prompts if not provided) |

### Flags

| Flag | Description |
| --- | --- |
| `--watch`, `-w` | Continuously fetch and display updates |
| `--environment <env>` | Deployment environment to use |
| `--rpc-url <url>` | RPC URL to connect to blockchain |

### Examples

**View recent logs**

```bash
eigenx app logs trading-bot
```

Output:
```
2024-01-15T14:22:15.123Z App started on port 3000
2024-01-15T14:22:15.456Z Connected to database
2024-01-15T14:22:15.789Z Initialized wallet: 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb1
2024-01-15T14:22:16.012Z Subscribing to blockchain events...
2024-01-15T14:22:16.234Z Ready to process transactions
2024-01-15T14:25:30.567Z Received new block: 12345678
2024-01-15T14:25:30.890Z Processing 3 pending transactions
2024-01-15T14:25:31.123Z Transaction executed: 0xabc123...
```

**Watch logs continuously**

```bash
eigenx app logs --watch trading-bot
```

This continuously fetches and displays log updates. Use `Ctrl+C` to stop.

### Use Cases

**Monitor logs in real-time**

```bash
eigenx app logs --watch my-app
```

**Save logs for analysis**

```bash
eigenx app logs my-app > logs.txt
```

**Filter logs**

```bash
eigenx app logs my-app | grep -i error
eigenx app logs my-app | grep "Transaction executed"
```

### Troubleshooting with Logs

**App not starting**

```bash
eigenx app logs my-app
```

Look for:
- Port binding errors
- Missing environment variables
- Dependency issues
- Startup exceptions

**Monitor for errors**

```bash
eigenx app logs --watch my-app | grep -i error
```

---

## Related Commands

- [Lifecycle Management](./lifecycle) - Start, stop, terminate apps
- [Deployment](./deployment) - Deploy and upgrade apps
- [Authentication](./authentication) - Manage account access
