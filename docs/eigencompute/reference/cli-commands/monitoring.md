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

---

## Related Commands

- [Lifecycle Management](./lifecycle) - Start, stop, terminate apps
- [Deployment](./deployment) - Deploy and upgrade apps
- [Authentication](./authentication) - Manage account access
