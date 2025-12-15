---
title: Deployment Examples
sidebar_position: 3
---

## Deploy from current directory

```bash
ecloud compute app deploy
```

The CLI will prompt you for deployment configuration.

## Deploy with custom Dockerfile location

```bash
ecloud app compute deploy --dockerfile ./docker/Dockerfile.prod
```

## Deploy with custom .env location

```bash
ecloud app compute deploy --env-file ./config/.env.production
```

## Deploy pre-built image

```bash
# Build and push manually
docker build --platform linux/amd64 -t registry.io/user/myapp:v1.0 .
docker push registry.io/user/myapp:v1.0

# Deploy the image
ecloud app deploy registry.io/user/myapp:v1.0
```

## Multi-Environment Deployment

```bash
# Deploy to mainnet (default)
ecloud compute app deploy --env-file .env.mainnet

# Deploy to sepolia testnet
ecloud compute app deploy --env-file .env.sepolia --environment sepolia
```