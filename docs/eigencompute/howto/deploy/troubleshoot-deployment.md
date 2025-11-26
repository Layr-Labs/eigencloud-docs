---
title: Troubleshoot Deployment
sidebar_position: 6
---

## Build fails: platform mismatch

Ensure your Dockerfile specifies the platform:

```dockerfile
FROM --platform=linux/amd64 node:18
```

## Push fails: authentication required

Login to Docker registry:

```bash
docker login
```

## Transaction fails: insufficient funds

Get Sepolia ETH (for `sepolia` environment) or Mainnet ETH (for `mainnet-alpha` environment):

```bash
eigenx auth whoami  # Get your address
# Visit faucet and request funds
```

## App fails to start

Check logs:

```bash
eigenx app logs <app-id>
```

Common issues:
- Missing environment variables
- Port binding issues
- Application crashes
- Incorrect entrypoint/command
