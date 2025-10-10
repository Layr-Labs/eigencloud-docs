---
title: Lifecycle Management
sidebar_position: 4
---

# Lifecycle Management Commands

Manage the lifecycle of your deployed applications, including starting, stopping, and terminating apps.

## Commands Overview

| Command | Description |
| --- | --- |
| `eigenx app start [app-id\|name]` | Start a stopped app |
| `eigenx app stop [app-id\|name]` | Stop a running app |
| `eigenx app terminate [app-id\|name]` | Permanently remove an app |

---

## Application States

Your application can be in one of these states:

| State | Description | Actions Available |
| --- | --- | --- |
| **Running** | App is active and processing | Stop, Upgrade, Terminate |
| **Stopped** | App is paused, resources held | Start, Terminate |
| **Terminated** | App is permanently removed | None (must redeploy) |

:::tip
Stopped apps retain their instance and wallet address but don't process requests. Terminated apps are completely removed and cannot be restarted.
:::

---

## `eigenx app start`

Start a previously stopped application.

### Syntax

```bash
eigenx app start [command options] [app-id|name]
```

### Arguments

| Argument | Description | Required |
| --- | --- | --- |
| `app-id\|name` | Application ID or friendly name | No (prompts if not provided) |

### Flags

| Flag | Description |
| --- | --- |
| `--private-key <key>` | Private key for signing transactions |
| `--environment <env>` | Deployment environment to use |
| `--rpc-url <url>` | RPC URL to connect to blockchain |

### Examples

**Start an app by name**

```bash
eigenx app start my-app
```

Output:
```
Starting app 'my-app'...
App my-app (0x34EEA5808d2580C68172b00c29111A7342B49F9c) started successfully

App Name: my-app
App ID: 0x34EEA5808d2580C68172b00c29111A7342B49F9c
Latest Release Time: 2025-10-02 12:58:48
Status: Resuming
IP: 34.169.169.68
EVM Address: 0xc86aaDeC6C291C30FF9e4a86b7a7e1200E616112 (path: m/44'/60'/0'/0/0)
Solana Address: AxkZ28MneJzGySFfW6rFQJhcRnkCszWNRXGiGWt4Nnew (path: m/44'/501'/0'/0')

Status changed: Resuming → Running

App is now running
```

**Start an app by ID**

```bash
eigenx app start app-1a2b3c4d5e6f
```

### When to Use

**After stopping for maintenance**

```bash
# Perform maintenance
eigenx app stop my-app
# ... do maintenance tasks ...
eigenx app start my-app
```

**Cost optimization**

```bash
# Stop overnight (if not 24/7 service)
eigenx app stop my-app

# Start in the morning
eigenx app start my-app
```

**After testing**

```bash
# Stop test app after use
eigenx app stop test-app

# Restart when needed
eigenx app start test-app
```

### What Happens When Starting

1. **Transaction Submission**
   - Sign and submit start transaction
   - Wait for blockchain confirmation

2. **Instance Activation**
   - Resume TEE instance
   - Restore container state
   - Reinject environment variables

3. **Application Startup**
   - Container starts
   - Application initializes
   - Begins accepting requests

### Behavior

- **Wallet persists** - Same MNEMONIC is available
- **IP persists** - Usually keeps the same instance IP
- **State reset** - In-memory state is lost (use external storage for persistence)
- **Logs preserved** - Previous logs may still be available

---

## `eigenx app stop`

Stop a running application without removing it.

### Syntax

```bash
eigenx app stop [command options] [app-id|name]
```

### Arguments

| Argument | Description | Required |
| --- | --- | --- |
| `app-id\|name` | Application ID or friendly name | No (prompts if not provided) |

### Flags

| Flag | Description |
| --- | --- |
| `--private-key <key>` | Private key for signing transactions |
| `--environment <env>` | Deployment environment to use |
| `--rpc-url <url>` | RPC URL to connect to blockchain |

### Examples

**Stop an app by name**

```bash
eigenx app stop my-app
```

Output:
```
Stopping app 'my-app'...
App my-app (0x34EEA5808d2580C68172b00c29111A7342B49F9c) stopped successfully

App Name: my-app
App ID: 0x34EEA5808d2580C68172b00c29111A7342B49F9c
Latest Release Time: 2025-10-02 12:58:48
Status: Stopping
IP: 34.169.169.68
EVM Address: 0xc86aaDeC6C291C30FF9e4a86b7a7e1200E616112 (path: m/44'/60'/0'/0/0)
Solana Address: AxkZ28MneJzGySFfW6rFQJhcRnkCszWNRXGiGWt4Nnew (path: m/44'/501'/0'/0')
```

**Stop an app by ID**

```bash
eigenx app stop app-1a2b3c4d5e6f
```

### When to Use

**Maintenance windows**

```bash
# Stop before maintenance
eigenx app stop my-app

# Perform database migration, etc.
# ...

# Restart
eigenx app start my-app
```

**Debugging**

```bash
# Stop to prevent further actions
eigenx app stop my-app

# Analyze logs
eigenx app logs my-app

# Make fixes and upgrade
eigenx app upgrade my-app

# Restart
eigenx app start my-app
```

**Cost management**

```bash
# Stop non-production apps when not in use
eigenx app stop dev-app
eigenx app stop staging-app

# Restart when needed
eigenx app start dev-app
```

**Emergency response**

```bash
# Immediately stop problematic app
eigenx app stop my-app

# Investigate issue
eigenx app logs my-app

# Deploy fix
eigenx app upgrade my-app
eigenx app start my-app
```

### What Happens When Stopping

1. **Transaction Submission**
   - Sign and submit stop transaction
   - Wait for blockchain confirmation

2. **Graceful Shutdown** (if supported by app)
   - SIGTERM signal sent to container
   - Application has time to clean up
   - Container stops

3. **Instance Pause**
   - Container is stopped
   - Instance is paused
   - Resources are held

### Behavior

- **No data loss** - Container state is preserved
- **No requests** - App doesn't accept requests while stopped
- **Logs preserved** - Can still view logs
- **Costs reduced** - Lower costs while stopped (but not zero)

---

## `eigenx app terminate`

Permanently remove an application and all its resources.

### Syntax

```bash
eigenx app terminate [command options] [app-id|name]
```

### Arguments

| Argument | Description | Required |
| --- | --- | --- |
| `app-id\|name` | Application ID or friendly name | No (prompts if not provided) |

### Flags

| Flag | Description |
| --- | --- |
| `--private-key <key>` | Private key for signing transactions |
| `--environment <env>` | Deployment environment to use |
| `--rpc-url <url>` | RPC URL to connect to blockchain |
| `--force` | Force termination without confirmation |

### Examples

**Terminate an app (with confirmation)**

```bash
eigenx app terminate my-app
```

Output:
```
⚠️  Permanently destroy app 'my-app' on mainnet-alpha (max cost: <0.000001 ETH)

? Continue? Yes

Terminating app 'my-app'...
App my-app (0x34EEA5808d2580C68172b00c29111A7342B49F9c) terminated successfully

App Name: my-app
App ID: 0x34EEA5808d2580C68172b00c29111A7342B49F9c
Latest Release Time: 2025-10-02 12:58:48
Status: Terminating
IP: 34.169.169.68
EVM Address: 0xc86aaDeC6C291C30FF9e4a86b7a7e1200E616112 (path: m/44'/60'/0'/0/0)
Solana Address: AxkZ28MneJzGySFfW6rFQJhcRnkCszWNRXGiGWt4Nnew (path: m/44'/501'/0'/0')
```

**Terminate without confirmation**

```bash
eigenx app terminate --force my-app
```

**Terminate by ID**

```bash
eigenx app terminate app-1a2b3c4d5e6f
```

### When to Use

**Clean up test apps**

```bash
# Remove test deployment
eigenx app terminate test-deployment
```

**Decommission old versions**

```bash
# List all apps
eigenx app list

# Terminate old versions
eigenx app terminate my-app-v1
eigenx app terminate my-app-v2
```

**Project cancellation**

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

**Before terminating:**

1. **Withdraw funds** from the TEE wallet
2. **Backup data** stored by your app
3. **Save logs** if needed for auditing
4. **Document configuration** if you plan to redeploy

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

- **Immediate** - Takes effect after transaction confirmation
- **Permanent** - Cannot be undone
- **Name available** - App name can be reused for new deployments
- **ID retired** - App ID is never reused

---

## Lifecycle Patterns

### Development Workflow

```bash
# Deploy for development
eigenx app deploy

# Name it
eigenx app name app-xxx dev-app

# Use during development
# ...

# Stop when not actively developing
eigenx app stop dev-app

# Start when resuming
eigenx app start dev-app

# When project is complete
eigenx app terminate dev-app
```

---

## Best Practices

### Before Stopping

- [ ] Finish any in-progress transactions
- [ ] Notify users if it's a public service
- [ ] Save any ephemeral state to external storage

### Before Terminating

- [ ] **Critical**: Withdraw all funds from TEE wallet
- [ ] Backup logs: `eigenx app logs my-app > backup.log`
- [ ] Document configuration
- [ ] Verify app is no longer needed
- [ ] Check for any dependent services

### Monitoring Lifecycle

```bash
# Check app status
eigenx app info my-app

# List all apps and their states
eigenx app list

# Monitor after lifecycle changes
eigenx app logs --watch my-app
```

### Handling TEE Wallet Funds

```javascript
// Before termination, withdraw funds
const balance = await provider.getBalance(teeWallet.address)
if (balance > 0) {
  const tx = await teeWallet.sendTransaction({
    to: safeAddress,
    value: balance
  })
  await tx.wait()
  console.log('Funds withdrawn safely')
}
```

---

## Troubleshooting

### Start fails

**Check current status:**

```bash
eigenx app info my-app
```

If already running, you'll see an error. Stop and restart if needed.

### Cannot terminate

Ensure you have transaction signing capability:

```bash
eigenx auth whoami
```

### Terminated by mistake

Unfortunately, termination is irreversible. You'll need to:

1. Redeploy the application: `eigenx app deploy`
2. Reconfigure with a new TEE wallet
3. Any funds in the old wallet are lost

---

## Related Commands

- [Deployment](./deployment) - Deploy new apps or upgrade existing ones
- [Monitoring](./monitoring) - View app status, info, and logs
- [Project Management](./project-management) - Create and configure apps
