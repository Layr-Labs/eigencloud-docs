---
title: Troubleshoot deployment
sidebar_position: 6
---

## Dockerfile requirements

```dockerfile
# Must target linux/amd64
FROM --platform=linux/amd64 node:18

# Must run as root (TEE requirement)
USER root

# Application code
WORKDIR /app
COPY . .
RUN npm install

CMD ["npm", "start"]
```

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
ecloud auth whoami  # Get your address
# Visit faucet and request funds
```

## App fails to start

Check logs:

```bash
ecloud compute app logs <app-id>
```

Common issues:
- Missing environment variables
- Port binding issues
- Application crashes
- Incorrect entrypoint/command
