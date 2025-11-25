---
title: Start Application
sidebar_position: 1
---

## Start an application by name

```bash
eigenx app start my-app
```

## Start an application by ID

```bash
eigenx app start app-1a2b3c4d5e6f
```

### When to Use

#### After stopping for maintenance

```bash
# Perform maintenance
eigenx app stop my-app
# ... do maintenance tasks ...
eigenx app start my-app
```

#### Cost optimization

```bash
# Stop overnight (if not 24/7 service)
eigenx app stop my-app

# Start in the morning
eigenx app start my-app
```

#### After testing

```bash
# Stop test app after use
eigenx app stop test-app

# Restart when needed
eigenx app start test-app
```

### What Happens When Starting

1. Transaction Submission
    - Sign and submit start transaction
    - Wait for blockchain confirmation

2. Instance Activation
    - Resume TEE instance
    - Restore container state
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
