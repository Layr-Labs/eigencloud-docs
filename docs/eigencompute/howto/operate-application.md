---
title: Operate application
sidebar_position: 7
---

Use the [`list`](../reference/ecloud-cli/compute/app.md#list), [`info`](../reference/ecloud-cli/compute/app.md#info), and [`logs`](../reference/ecloud-cli/compute/app.md#logs) commands to monitor and manage EigenCompute applications.

Use the [`start`](../reference/ecloud-cli/compute/app.md#start), [`stop`](../reference/ecloud-cli/compute/app.md#stop), and [`terminate`](../reference/ecloud-cli/compute/app.md#terminate) commands to change application state.

## When starting a previously stopped application

- Wallet persists - Same MNEMONIC is available
- IP persists - Usually keeps the same instance IP
- State reset - In-memory state is lost (use external storage for persistence)
- Logs preserved - Previous logs may still be available

### When stopping

- No requests - App doesn't accept requests while stopped
- Logs preserved - Can still view logs
- Costs reduced - Lower costs while stopped (but not zero)

## Before terminating

:::danger Irreversible Action
Termination is permanent and irreversible. The TEE wallet mnemonic becomes inaccessible. Any funds in the wallet will be lost forever.
:::

- [ ] **Critical**: Withdraw all funds from TEE wallet
- [ ] Backup logs: `ecloud compute app logs my-app > backup.log`
- [ ] Document configuration
- [ ] Verify app is no longer needed
- [ ] Check for any dependent services

### What gets deleted when terminating

When you terminate an app:

- TEE instance
- Docker container
- Environment variables
- App configuration
- TEE wallet access (LOST FOREVER)
- App name (can be reused)

:::danger Irreversible Action
Termination is permanent and irreversible. The TEE wallet mnemonic becomes inaccessible. Any funds in the wallet will be lost forever.
:::

### Behavior

- Immediate - Takes effect after transaction confirmation
- Permanent - Cannot be undone
- Name available - App name can be reused for new deployments
- ID retired - App ID is never reused

### Safe Termination Workflow

```bash
# 1. Stop the app first
ecloud compute app stop my-app

# 2. Get wallet address
ecloud compute app info my-app
# Note the TEE Wallet address

# 3. Check for funds
# Use a blockchain explorer or Etherscan

# 4. Withdraw funds (from within your app code)
# Transfer to a safe address

# 5. Terminate
ecloud compute app terminate my-app
```