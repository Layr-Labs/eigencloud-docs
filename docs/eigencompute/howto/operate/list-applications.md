---
title: List Applications
sidebar_position: 2
---

## Examples

### List active apps

```bash
eigenx app list
```

Output when no active apps:
```
No active apps found for developer 0xB4921D9F3eDEB4bFDfcDCA669860Ab965273dC71 (use --all to show terminated apps)
```

### List all apps including terminated

```bash
eigenx app list --all
```

## Use Cases

### Inventory management

```bash
# See all your apps
eigenx app list --all

# Count running apps
eigenx app list | grep Running
```

### Find application ID

```bash
# List to find the app ID you need
eigenx app list

# Copy app ID for other commands
eigenx app info app-1a2b3c4d
```

### Cross-environment check

```bash
# Verify deployment across environments
eigenx app list --all

# Ensure prod apps are running
eigenx app list --env prod
```
