---
title: Start New Project
sidebar_position: 1
---

The high level steps to start and deploy a new project are: 

## 1. Create from template

```
eigenx app create my-app typescript
```

For more information, refer to [Create Application](create-app-from-template.md).

## 2. Configure environment

```bash
cd my-app
cp .env.example .env
```

Edit `.env` with your settings.

## 3. Test locally (if needed)

```bash
npm install
npm run dev
```

## 4. Deploy to TEE

```
eigenx app deploy
```

## 5. Set a friendly name

```
eigenx app name <app-id> my-production-app
```

For more information, refer to [Name Application](../configure/name-application.md).

## 6. (Optional) Add TLS if needed

```bash
eigenx app configure tls
```

For more inforamtion, refer to [Configure TLS](../deploy-to-production/configure-tls.md).