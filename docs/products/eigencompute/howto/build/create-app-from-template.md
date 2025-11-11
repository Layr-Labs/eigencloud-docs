---
title: Create Application
sidebar_position: 1
---

The EigenX CLI provides templates for creating EigenCompute application projects with all required configuration files. 
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
The EigenX CLI works with existing Docker projects and images. If you are working with an existing project or image,
skip this step and refer to deploying an application for next steps.
::: 

## Create an application from a template

To create an Typescript application:

```bash
eigenx app create my-trading-bot typescript
```

Output:
```
Cloning template: https://github.com/Layr-Labs/eigenx-templates → extracting templates/minimal/typescript

[====================] 100% eigenx-templates (Cloning from ref: main)

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