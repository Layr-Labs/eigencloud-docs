---
title: Deploy Existing Project
sidebar_position: 1
---

You don't need to use `ecloud app create` if you have an existing project. The CLI works with any Docker-based project:

## 1. Navigate to your project

```bash
cd my-existing-project
```

## 2. Create .env if needed

```bash
touch .env
```

Add your environment variables.

## 3. Deploy

Ensure you have a Dockerfile and .env. The CLI will prompt if not found.

```bash 
ecloud compute app deploy
```

# 4. Add TLS if needed

```bash
ecloud app compute configure tls
```

For more information, refer to [Configure TLS](../deploy-to-production/configure-tls.md).