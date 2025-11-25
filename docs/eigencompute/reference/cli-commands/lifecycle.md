---
title: Lifecycle Management
sidebar_position: 4
---

# Lifecycle Management Commands

Manage the lifecycle of your deployed applications, including starting, stopping, and terminating apps.

## Commands Overview

| Command | Description |
| --- | --- |
| `eigenx app start [app-id\|name]` | Start a stopped app |
| `eigenx app stop [app-id\|name]` | Stop a running app |
| `eigenx app terminate [app-id\|name]` | Permanently remove an app |

---

## Application States

Your application can be in one of these states:

| State | Description | Actions Available |
| --- | --- | --- |
| **Running** | App is active and processing | Stop, Upgrade, Terminate |
| **Stopped** | App is paused, resources held | Start, Terminate |
| **Terminated** | App is permanently removed | None (must redeploy) |

:::tip
Stopped apps retain their instance and wallet address but don't process requests. Terminated apps are completely removed and cannot be restarted.
:::

---

## `eigenx app start`

Start a previously stopped application.

### Syntax

```bash
eigenx app start [command options] [app-id|name]
```

### Arguments

| Argument | Description | Required |
| --- | --- | --- |
| `app-id\|name` | Application ID or friendly name | No (prompts if not provided) |

### Flags

| Flag | Description |
| --- | --- |
| `--private-key <key>` | Private key for signing transactions |
| `--environment <env>` | Deployment environment to use |
| `--rpc-url <url>` | RPC URL to connect to blockchain |

---

## `eigenx app stop`

Stop a running application without removing it.

### Syntax

```bash
eigenx app stop [command options] [app-id|name]
```

### Arguments

| Argument | Description | Required |
| --- | --- | --- |
| `app-id\|name` | Application ID or friendly name | No (prompts if not provided) |

### Flags

| Flag | Description |
| --- | --- |
| `--private-key <key>` | Private key for signing transactions |
| `--environment <env>` | Deployment environment to use |
| `--rpc-url <url>` | RPC URL to connect to blockchain |

---

## `eigenx app terminate`

Permanently remove an application and all its resources.

### Syntax

```bash
eigenx app terminate [command options] [app-id|name]
```

### Arguments

| Argument | Description | Required |
| --- | --- | --- |
| `app-id\|name` | Application ID or friendly name | No (prompts if not provided) |

### Flags

| Flag | Description |
| --- | --- |
| `--private-key <key>` | Private key for signing transactions |
| `--environment <env>` | Deployment environment to use |
| `--rpc-url <url>` | RPC URL to connect to blockchain |
| `--force` | Force termination without confirmation |

---

## Related Commands

- [Deployment](./deployment) - Deploy new apps or upgrade existing ones
- [Monitoring](./monitoring) - View app status, info, and logs
- [Project Management](./project-management) - Create and configure apps
