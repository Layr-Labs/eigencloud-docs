---
title: Stop Application
sidebar_position: 2
---

## Stop an application by name

```bash
eigenx app stop my-app
```

## Stop an application by ID

```bash
eigenx app stop app-1a2b3c4d5e6f
```

### When to Use

#### Maintenance windows

```bash
# Stop before maintenance
eigenx app stop my-app

# Perform database migration, etc.
# ...

# Restart
eigenx app start my-app
```

#### Debugging

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

#### Cost management

```bash
# Stop non-production apps when not in use
eigenx app stop dev-app
eigenx app stop staging-app

# Restart when needed
eigenx app start dev-app
```

#### Emergency response

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

- No data loss - Container state is preserved
- No requests - App doesn't accept requests while stopped
- Logs preserved - Can still view logs
- Costs reduced - Lower costs while stopped (but not zero)
