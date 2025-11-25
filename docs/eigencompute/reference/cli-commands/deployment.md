---
title: Deployment & Upgrades
sidebar_position: 3
---

# Deployment & Upgrades Commands

Deploy new applications to TEE instances and upgrade existing deployments with new code or configuration.

## Commands Overview

| Command | Description |
| --- | --- |
| `eigenx app deploy [image_ref]` | Deploy new app to TEE |
| `eigenx app upgrade <app-id\|name> [image_ref]` | Update existing deployment |

---

## `eigenx app deploy`

Deploy a new application to a Trusted Execution Environment (TEE). 

The CLI will prompt you for [billing details](../../get-started/billing) in our payment portal.

### Syntax

```bash
eigenx app deploy [command options] [image_ref]
```

### Arguments

| Argument | Description | Required |
| --- | --- | --- |
| `image_ref` | Pre-built Docker image reference | No |

### Flags

| Flag                         | Description                                                         |
|------------------------------|---------------------------------------------------------------------|
| `--dockerfile <path>`, `-f`  | Path to Dockerfile                                                  |
| `--env-file <path>`          | Path to .env file (default: `.env`)                                 |
| `--private-key <key>`        | Private key for signing transactions                                |
| `--environment <env>`        | Deployment environment to use                                       |
| `--rpc-url <url>`            | RPC URL to connect to blockchain                                    |
| `--name <name>`              | Friendly name for the app                                           |
| `--log-visibility <setting>` | Log visibility: `public`, `private`, or `off`                       |
| `--instance-type <value>`    | Machine instance type to use: `g1-standard-4t`, or `g1-standard-8t` |

Your Dockerfile must include the `EXPOSE` directive to specify which port(s) your application listens on, see the [Port Exposure Guide](../../howto/configure/expose-ports.md).

---

## `eigenx app upgrade`

Update an existing application with new code, configuration, or environment variables.

### Syntax

```bash
eigenx app upgrade [command options] <app-id|name> <image_ref>
```

### Arguments

| Argument | Description | Required |
| --- | --- | --- |
| `app-id\|name` | Application ID or friendly name | Yes |
| `image_ref` | Pre-built Docker image reference | Yes |

### Flags

| Flag                         | Description                                                         |
|------------------------------|---------------------------------------------------------------------|
| `--dockerfile <path>`, `-f`  | Path to Dockerfile                                                  |
| `--env-file <path>`          | Path to .env file (default: `.env`)                                 |
| `--private-key <key>`        | Private key for signing transactions                                |
| `--environment <env>`        | Deployment environment to use                                       |
| `--rpc-url <url>`            | RPC URL to connect to blockchain                                    |
| `--log-visibility <setting>` | Log visibility: `public`, `private`, or `off`                       |
| `--instance-type <value>`    | Machine instance type to use: `g1-standard-4t`, or `g1-standard-8t` |

---

## Related Commands

- [Lifecycle Management](./lifecycle) - Start, stop, and terminate apps
- [Monitoring](./monitoring) - View logs and app information
- [Project Management](./project-management) - Create and configure projects
- [Authentication](./authentication) - Manage deployment credentials
