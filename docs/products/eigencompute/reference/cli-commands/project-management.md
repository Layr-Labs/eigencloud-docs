---
title: Project Management
sidebar_position: 2
---

# Project Management Commands

These commands help you create new projects and configure existing ones for deployment to EigenX.

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

### Working Without Templates

You don't need to use `eigenx app create` if you have an existing project. The CLI works with any Docker-based project:

```bash
cd my-existing-project

# Ensure you have a Dockerfile and .env
# The CLI will prompt if not found

eigenx app deploy
```

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

### Examples

**Name a newly deployed app**

```bash
# After deployment, you get an app ID
eigenx app deploy
# Output: Deployed successfully! App ID: app-1a2b3c4d

# Set a friendly name
eigenx app name app-1a2b3c4d trading-bot
```

Output:
```
✓ App renamed successfully

App ID: app-1a2b3c4d
Name: trading-bot

You can now use 'trading-bot' in place of the app ID in commands.
```

**Rename an existing app**

```bash
eigenx app name trading-bot production-trading-bot
```

**Use the friendly name in commands**

```bash
# These are now equivalent:
eigenx app info trading-bot
eigenx app info app-1a2b3c4d

eigenx app logs trading-bot
eigenx app logs app-1a2b3c4d
```

### Benefits

- **Easier to remember** - Use descriptive names instead of IDs
- **Better organization** - Distinguish between multiple apps
- **Simplified commands** - Type less when managing apps
- **Team collaboration** - Share meaningful app names with team members

### Naming Best Practices

**Good names:**
- `production-api`
- `staging-web-app`
- `discord-bot-v2`
- `ml-inference-service`

**Avoid:**
- Generic names: `app1`, `test`, `new`
- Special characters: `my@app`, `app#123`
- Spaces: `my app` (use hyphens: `my-app`)

### Use Cases

- **Multiple environments** - `api-dev`, `api-staging`, `api-prod`
- **Multiple apps** - `trading-bot`, `monitoring-service`, `data-processor`
- **Version tracking** - `api-v1`, `api-v2`
- **Team clarity** - Meaningful names for team members

---

## Best Practices

### Starting a New Project

```bash
# 1. Create from template
eigenx app create my-app typescript

# 2. Configure environment
cd my-app
cp .env.example .env
# Edit .env with your settings

# 3. Test locally (if needed)
npm install
npm run dev

# 4. Deploy to TEE
eigenx app deploy

# 5. Set a friendly name
eigenx app name <app-id> my-production-app

# 6. (Optional) Add TLS if needed
eigenx app configure tls
# Configure DNS and deploy
```

### Converting Existing Projects

```bash
# 1. Navigate to your project
cd my-existing-project

# 2. Ensure you have a Dockerfile
# Modify to target linux/amd64 and run as root

# 3. Create .env if needed
touch .env
# Add your environment variables

# 4. Deploy
eigenx app deploy

# 5. Add TLS if needed
eigenx app configure tls
```

### Multi-Environment Setup

```bash
# Development
eigenx environment set dev
eigenx app create api-dev typescript
cd api-dev
eigenx app deploy

# Staging
cd ..
eigenx environment set staging
eigenx app create api-staging typescript
cd api-staging
eigenx app deploy

# Production
cd ..
eigenx environment set prod
eigenx app create api-prod typescript
cd api-prod
eigenx app configure tls
eigenx app deploy
```

---

## Related Commands

- [Deployment & Updates](./deployment) - Deploy and upgrade applications
- [Authentication](./authentication) - Manage authentication for deployments
- [Monitoring](./monitoring) - View app info and logs
