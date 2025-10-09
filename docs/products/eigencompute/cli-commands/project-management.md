---
title: Project Management
sidebar_position: 2
---

# Project Management Commands

These commands help you create new projects and configure existing ones for deployment to EigenX.

## Commands Overview

| Command | Description |
| --- | --- |
| `eigenx app create [name] [language]` | Create new project from template |
| `eigenx app configure tls` | Add TLS configuration to your project |
| `eigenx app name <app-id\|name> <new-name>` | Set a friendly name for your app |

---

## `eigenx app create`

Create a new application project from a template with all necessary configuration files.

### Syntax

```bash
eigenx app create [command options] [name] [language]
```

### Arguments

| Argument | Description | Required |
| --- | --- | --- |
| `name` | Name for your application directory | No (prompts if not provided) |
| `language` | Template language to use | No (prompts if not provided) |

### Supported Languages

| Language | Description | Use Case |
| --- | --- | --- |
| `typescript` | TypeScript/Node.js template | Web services, APIs, bots |
| `python` | Python template | ML/AI, data processing, scripts |
| `golang` | Go template | High-performance services |
| `rust` | Rust template | Systems programming, performance-critical apps |

### Flags

| Flag | Description |
| --- | --- |
| `--template <url>` | Custom template repository URL |
| `--template-version <version>` | Template version/tag to use |

### Examples

**Create TypeScript application**

```bash
eigenx app create my-trading-bot typescript
```

Output:
```
Cloning template: https://github.com/Layr-Labs/eigenx-templates → extracting templates/minimal/typescript

[====================] 100% eigenx-templates (Cloning from ref: main)

Template extraction complete: templates/minimal/typescript
```

Your application is ready! Next steps:
```bash
cd my-trading-bot
cp .env.example .env
# Edit .env with your configuration
eigenx app deploy
```

**Create Python application**

```bash
eigenx app create ml-agent python
```

**Create Go application**

```bash
eigenx app create high-perf-service golang
```

**Create Rust application**

```bash
eigenx app create systems-app rust
```

### Project Structure

After creating a project, you'll have this structure:

```
my-app/
├── src/                    # Application source code
├── Dockerfile             # Pre-configured for TEE deployment
├── .env.example          # Example environment variables
├── .gitignore            # Git ignore file
├── package.json          # Dependencies (TypeScript/Node.js)
├── tsconfig.json         # TypeScript config (TypeScript)
├── requirements.txt      # Dependencies (Python)
├── go.mod                # Dependencies (Go)
├── Cargo.toml            # Dependencies (Rust)
└── README.md             # Project documentation
```

### Template Features

All templates include:

1. **TEE-Ready Dockerfile** - Pre-configured to:
   - Target `linux/amd64` architecture
   - Run as root user (required for TEE)
   - Include necessary system dependencies

2. **Environment Variable Handling** - Access to:
   - `MNEMONIC` - Auto-generated wallet mnemonic
   - Custom environment variables from `.env`

3. **Example Code** - Demonstrates:
   - Accessing the TEE mnemonic
   - Creating wallet accounts
   - Making onchain transactions
   - Environment variable usage

4. **Development Setup** - Includes:
   - Local development instructions
   - Testing guidelines
   - Deployment best practices

### Use Cases

- **Quick prototyping** - Start building immediately with working examples
- **Learning EigenX** - Understand TEE patterns through template code
- **Production apps** - Templates follow best practices for deployment
- **Language preference** - Choose the stack you're most comfortable with

### Working Without Templates

You don't need to use `eigenx app create` if you have an existing project. The CLI works with any Docker-based project:

```bash
cd my-existing-project

# Ensure you have a Dockerfile and .env
# The CLI will prompt if not found

eigenx app deploy
```

---

## `eigenx app configure tls`

Add TLS/HTTPS configuration to your project for secure domain access.

### Syntax

```bash
eigenx app configure tls
```

### What It Does

This command adds:

1. **Caddy Server Configuration** - Automatic HTTPS with Let's Encrypt via Caddyfile
2. **Environment Variables** - Example TLS configuration in `.env.example.tls`

### Examples

**Add TLS configuration**

```bash
cd my-app
eigenx app configure tls
```

Output:
```
TLS configuration added successfully

Created:
  - Caddyfile
  - .env.example.tls

To enable TLS:

1. Add TLS variables to .env:
   cat .env.example.tls >> .env

2. Configure required variables:
   DOMAIN=yourdomain.com
   APP_PORT=3000

   For first deployment (recommended):
   ENABLE_CADDY_LOGS=true
   ACME_STAGING=true

3. Set up DNS A record pointing to instance IP
   Run 'eigenx app info' to get IP address

4. Upgrade:
   eigenx app upgrade

Note: Let's Encrypt rate limit is 5 certificates/week per domain
```

### Configuration Steps

**1. Add environment variables to `.env`:**

```bash
cat .env.example.tls >> .env
```

**2. Edit required variables:**

```bash
# Required
DOMAIN=yourdomain.com
APP_PORT=3000

# Recommended for first deployment
ENABLE_CADDY_LOGS=true
ACME_STAGING=true  # Use staging certificates initially
```

**3. Configure DNS:**

Create an A record pointing to your instance IP:
- **Type**: A
- **Name**: yourdomain.com
- **Value**: Get from `eigenx app info`

**4. Deploy:**

```bash
eigenx app upgrade
```

### Environment Variables

| Variable | Description | Required | Default |
| --- | --- | --- | --- |
| `DOMAIN` | Your domain name | Yes | - |
| `APP_PORT` | Port your app listens on | Yes | - |
| `ACME_STAGING` | Use Let's Encrypt staging | No | `false` |
| `ACME_FORCE_ISSUE` | Force certificate reissue | No | `false` |
| `ENABLE_CADDY_LOGS` | Enable Caddy debug logs | No | `false` |

### Testing with Staging Certificates

Always test with staging certificates first to avoid Let's Encrypt rate limits:

```bash
# .env
ACME_STAGING=true
ENABLE_CADDY_LOGS=true
```

Deploy and verify everything works:

```bash
eigenx app upgrade
curl https://yourdomain.com  # Will show certificate warning (expected)
```

### Switching to Production Certificates

Once tested, switch to production:

```bash
# .env
ACME_STAGING=false
ACME_FORCE_ISSUE=true  # Only needed once

# Deploy
eigenx app upgrade

# After successful deployment, disable ACME_FORCE_ISSUE
# Edit .env: ACME_FORCE_ISSUE=false
```

### Rate Limits

:::warning Let's Encrypt Rate Limits
Let's Encrypt has a rate limit of **5 certificates per week per domain**. Always test with staging certificates first.
:::

### Use Cases

- **Public APIs** - Expose your TEE app via HTTPS
- **Webhooks** - Receive webhook events over HTTPS
- **Web Applications** - Serve web UIs securely
- **Production Services** - Professional deployment with TLS

### Troubleshooting

**DNS not propagating**

Wait 5-10 minutes after DNS changes. Verify with:

```bash
dig yourdomain.com
nslookup yourdomain.com
```

**Certificate issuance failing**

Check logs:

```bash
eigenx app logs
```

Common issues:
- DNS not pointing to correct IP
- Port 80/443 not accessible
- Domain already has certificates (use `ACME_FORCE_ISSUE=true`)

**Rate limit exceeded**

If you hit rate limits:
- Wait a week for the limit to reset
- Use a different subdomain
- Consider using staging for development

---

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
