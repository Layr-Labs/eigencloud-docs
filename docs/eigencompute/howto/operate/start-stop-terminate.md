---
title: Start, Stop, and Terminate
sidebar_position: 1
---

## What happens when starting a previously stopped application

1. Transaction Submission
    - Sign and submit start transaction
    - Wait for blockchain confirmation

2. Instance Activation
    - Resume TEE instance
    - Reinject environment variables

3. Application Startup
    - Container starts
    - Application initializes
    - Begins accepting requests

### Behavior

- Wallet persists - Same MNEMONIC is available
- IP persists - Usually keeps the same instance IP
- State reset - In-memory state is lost (use external storage for persistence)
- Logs preserved - Previous logs may still be available

## Before Stopping

- [ ] Finish any in-progress transactions
- [ ] Notify users if it's a public service
- [ ] Save any ephemeral state to external storage

### What Happens When Stopping

1. Transaction Submission
    - Sign and submit stop transaction
    - Wait for blockchain confirmation

2. Graceful Shutdown (if supported by app)
    - SIGTERM signal sent to container
    - Application has time to clean up
    - Container stops

3. Instance Pause
    - Container is stopped
    - Instance is paused
    - Resources are held

### Behavior

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