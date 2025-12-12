---
title: Start New Project
sidebar_position: 1
---

The high level steps to start and deploy a new project are:

### 1. Create from template

```
ecloud app create my-app typescript
```

For more information, refer to [Create Application](create-app-from-template.md).

### 2. Configure environment

```bash
cd my-app
cp .env.example .env
```

Edit `.env` with your settings.

### 3. Test locally (if needed)

```bash
npm install
npm run dev
```

### 4. Deploy to TEE

```
ecloud app deploy
```

### 5. (Optional) Add TLS if needed

```bash
ecloud app configure tls
```

For more information, refer to [Configure TLS](../deploy-to-production/configure-tls.md).

## Upgrade

After making changes to your code or environment variables:

```bash
ecloud app upgrade
```

The CLI will rebuild and redeploy your application with the latest changes.

## Application Environment

Your TEE application runs with these capabilities:

### Secure Execution
Your code runs in an Intel TDX instance with hardware-level isolation.

### Auto-Generated Wallet
Access a private mnemonic via `process.env.MNEMONIC`. For more information, refer to [Use App Wallet](use-app-wallet.mdx).

### Environment Variables
All variables from your `.env` file are available in your container:
- Variables with `_PUBLIC` suffix are visible to users for transparency
- Standard variables remain private and encrypted within the TEE

### Onchain Management
Your app's lifecycle is controlled via Ethereum smart contracts.