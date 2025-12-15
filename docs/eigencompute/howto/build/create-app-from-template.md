---
title: Create Application
sidebar_position: 2
---

The ecloud CLI provides templates for creating EigenCompute application projects with all required configuration files. 
Create applications using the templates to:

* Start building immediately with working examples for quick prototyping. 
* Understand TEE patterns through template code.
* Follow best practices for deployment by using template code.

Templates are available in: 

* Typescript
* Python
* Go
* Rust.

:::tip 
The ecloud CLI works with existing Docker projects and images. If you are working with an existing project or image,
skip this step and refer to deploying an application for next steps.
::: 

## Create an application from a template

To create an Typescript application:

```bash
ecloud compute app create --name my-app --language typescript --template-repo minimal
```

Output:
```
Cloning template: https://github.com/Layr-Labs/ecloud-templates → extracting templates/minimal/typescript

[====================] 100% ecloud-templates (Cloning from ref: main)

Template extraction complete: templates/minimal/typescript
```

The project files and structure are created:

```
my-trading-bot/
├── src/                  # Application source code
├── Dockerfile            # Pre-configured for TEE deployment
├── .env.example          # Example environment variables
├── .gitignore            # Git ignore file
├── package.json          # Dependencies (TypeScript/Node.js)
├── tsconfig.json         # TypeScript config (TypeScript)
└── README.md             # Project documentation
```

## Update template files for your application

Templates include:

1. TEE-Ready Dockerfile. Pre-configured to:
    - Target `linux/amd64` architecture.
    - Run as root user (required for TEE).
    - Include necessary system dependencies.

2. Environment Variable Handling. Access to:
    - `MNEMONIC` - Auto-generated wallet mnemonic.
    - Custom environment variables from `.env`.

3. Example Code. Demonstrates:
    - Accessing the TEE mnemonic.
    - Creating wallet accounts.
    - Making onchain transactions.
    - Environment variable usage.

4. Development Setup. Includes:
    - Local development instructions.
    - Testing guidelines.
    - Deployment best practices.

## Name application

Use the [`--name` option for `ecloud deploy`](../../reference/eigenx-cli/app.md) to configure a name when deploying an application. Or use
[`ecloud compute app profile set`](../../reference/eigenx-cli/app.md) to set or update a name for a previously deployed application. 

Configuring an application display name provides the following benefits:

- Displayed on Verifiability Dashboard for [Mainnet](https://verify.eigencloud.xyz/) or [Sepolia testnet](https://verify-sepolia.eigencloud.xyz/).
- Easier to remember - Use descriptive names instead of IDs
- Better organization - Distinguish between multiple apps
- Simplified commands - Type less when managing apps
- Team collaboration - Share meaningful app names with team members

Use cases include:

- Multiple environments - `api-dev`, `api-staging`, `api-prod`
- Multiple apps - `trading-bot`, `monitoring-service`, `data-processor`
- Version tracking - `api-v1`, `api-v2`
- Team clarity - Meaningful names for team members

### Naming Best Practices

Good names:
- `production-api`
- `staging-web-app`
- `discord-bot-v2`
- `ml-inference-service`

Avoid:
- Generic names: `app1`, `test`, `new`
- Special characters: `my@app`, `app#123`
- Spaces: `my app` (use hyphens: `my-app`)