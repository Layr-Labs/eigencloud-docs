---
title: Monitor
sidebar_position: 2
---

## List applications

```bash
## active apps
ecloud compute app list

## all apps including terminated
ecloud compute list --all

# Ensure mainnet apps are running
ecloud compute app list --env mainnet-alpha
```

## Get application information

```bash
# List to find the app ID you need
ecloud compute app list

# Check app status
ecloud compute app info app-1a2b3c4d
```

## View logs from TEE instance

```bash
# view recent logs
ecloud compute app logs trading-bot

# watch logs continuously
ecloud compute app logs --watch trading-bot

# save logs for analysis
ecloud compute app logs my-app > logs.txt

# filter logs
ecloud compute app logs my-app | grep -i error
ecloud compute app logs my-app | grep "Transaction executed"
```

## Troubleshoot application not starting

```bash
ecloud compute app logs my-app
```

Look for:
- Port binding errors
- Missing environment variables
- Dependency issues
- Startup exceptions.

For more information on the `list` and `logs` subcommands, refer to the [ecloud Reference](../../reference/ecloud-cli/compute/app.md).