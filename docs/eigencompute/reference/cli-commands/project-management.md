---
title: Project Management
sidebar_position: 2
---

# Project Management Commands

These commands help you create new projects and configure existing ones for deployment to EigenCompute.

## Commands Overview

| Command                                     | Description                           |
|---------------------------------------------|---------------------------------------|
| `eigenx app create [name] [language]`       | Create new project from template      |
| `eigenx app configure tls`                  | Add TLS configuration to your project |
| `eigenx app name <app-id\|name> <new-name>` | Set a friendly name for your app      |

## Subcommands

### create

Create an application project from a template with all necessary configuration files. For more information on creating
applications, refer to [Create Application](../../howto/build/create-app-from-template.md).

```bash
eigenx app create [name] [language] [--template <url>] [--template-version <version>]
```

| Argument   | Description                         | Required                     |
|------------|-------------------------------------|------------------------------|
| `name`     | Name for your application directory | No (prompts if not provided) |
| `language` | Template language to use            | No (prompts if not provided) |

| Flag                           | Description                    |
|--------------------------------|--------------------------------|
| `--template <url>`             | Custom template repository URL |
| `--template-version <version>` | Template version/tag to use    |

### Supported Languages

| Language     | Description                 | Use Case                                       | 
|--------------|-----------------------------|------------------------------------------------|
| `typescript` | TypeScript/Node.js template | Web services, APIs, bots                       |
| `python`     | Python template             | ML/AI, data processing, scripts                |
| `golang`     | Go template                 | High-performance services                      |
| `rust`       | Rust template               | Systems programming, performance-critical apps |

---

## configure tls

Add TLS/HTTPS configuration to your project for secure domain access. This command adds:

* Caddy Server Configuration - Automatic HTTPS with [Let's Encrypt](https://letsencrypt.org/) using [Caddyfile](https://caddyserver.com/docs/caddyfile)
* Environment Variables - Example TLS configuration in `.env.example.tls`

For more information on configuring TLS, refer to [Configure TLS](../../howto/deploy-to-production/configure-tls.md).

```bash
eigenx app configure tls
```

## `eigenx app name`

Set or update a friendly name for your application, making it easier to reference in commands.

### Syntax

```bash
eigenx app name [command options] <app-id|current-name> [new-name]
```

### Arguments

| Argument | Description | Required |
| --- | --- | --- |
| `app-id\|current-name` | Application ID or current name | Yes |
| `new-name` | New friendly name for the app | No (omit to remove name) |

For examples and naming best practices, refer to [Name Application](../../howto/configure/name-application.md).

---

## Related Commands

- [Deployment & Updates](./deployment) - Deploy and upgrade applications
- [Authentication](./authentication) - Manage authentication for deployments
- [Monitoring](./monitoring) - View app info and logs
