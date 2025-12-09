---
title: Monitor
sidebar_position: 2
---

## List applications

```bash
## active apps
eigenx app list

## all apps including terminated
eigenx app list --all

# Count running apps
eigenx app list | grep Running

# Ensure mainnet apps are running
eigenx app list --env mainnet-alpha
```

## Get application information

```bash
# List to find the app ID you need
eigenx app list

# Check app status
eigenx app info app-1a2b3c4d
```

## View logs from TEE instance

```bash
# view recent logs
eigenx app logs trading-bot

# watch logs continuously
eigenx app logs --watch trading-bot

# save logs for analysis
eigenx app logs my-app > logs.txt

# filter logs
eigenx app logs my-app | grep -i error
eigenx app logs my-app | grep "Transaction executed"
```

## Troubleshoot application not starting

```bash
eigenx app logs my-app
```

Look for:
- Port binding errors
- Missing environment variables
- Dependency issues
- Startup exceptions.

For more information on the `list` and `logs` subcommands, refer to the [eigenx Reference](../../reference/eigenx-cli/app.md).