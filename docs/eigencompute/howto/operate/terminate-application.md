---
title: Terminate Application
sidebar_position: 5
---

:::danger Irreversible Action
Termination is permanent and irreversible. The TEE wallet mnemonic becomes inaccessible. Any funds in the wallet will be lost forever.
:::

## Terminate an app (with confirmation)

```bash
eigenx app terminate my-app
```

## Terminate without confirmation

```bash
eigenx app terminate --force my-app
```

## Terminate by ID

```bash
eigenx app terminate app-1a2b3c4d5e6f
```

### When to Use

#### Clean up test apps

```bash
# Remove test deployment
eigenx app terminate test-deployment
```

#### Decommission old versions

```bash
# List all apps
eigenx app list

# Terminate old versions
eigenx app terminate my-app-v1
eigenx app terminate my-app-v2
```

#### Project cancellation

```bash
# Remove all project apps
eigenx app terminate project-dev
eigenx app terminate project-staging
eigenx app terminate project-prod
```

### What Gets Deleted

When you terminate an app:

- TEE instance
- Docker container
- Environment variables
- App configuration
- TEE wallet access (LOST FOREVER)
- App name (can be reused)

### What You Cannot Recover

:::danger Irreversible Action
Termination is permanent and irreversible. The TEE wallet mnemonic becomes inaccessible. Any funds in the wallet will be lost forever.
:::

#### Before terminating

1. Withdraw funds from the TEE wallet
2. Backup data stored by your app
3. Save logs if needed for auditing
4. Document configuration if you plan to redeploy.

### Safe Termination Workflow

```bash
# 1. Stop the app first
eigenx app stop my-app

# 2. Get wallet address
eigenx app info my-app
# Note the TEE Wallet address

# 3. Check for funds
# Use a blockchain explorer or etherscan

# 4. Withdraw funds (from within your app code)
# Transfer to a safe address

# 5. Backup any data
eigenx app logs my-app > logs.txt

# 6. Terminate
eigenx app terminate my-app
```

### Behavior

- Immediate - Takes effect after transaction confirmation
- Permanent - Cannot be undone
- Name available - App name can be reused for new deployments
- ID retired - App ID is never reused
