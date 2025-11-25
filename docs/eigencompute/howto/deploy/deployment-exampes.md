---
title: Deployment Examples
sidebar_position: 3
---

## Deploy from current directory

```bash
eigenx app deploy
```

The CLI will prompt you for deployment configuration.

## Deploy with custom Dockerfile location

```bash
eigenx app deploy --dockerfile ./docker/Dockerfile.prod
```

## Deploy with custom .env location

```bash
eigenx app deploy --env-file ./config/.env.production
```

## Deploy pre-built image

```bash
# Build and push manually
docker build --platform linux/amd64 -t registry.io/user/myapp:v1.0 .
docker push registry.io/user/myapp:v1.0

# Deploy the image
eigenx app deploy registry.io/user/myapp:v1.0
```

## Deploy without building (use existing image)

```bash
eigenx app deploy registry.io/user/myapp:latest --no-build
```

## CI/CD Pipeline Deployment

```bash
# In CI/CD script
export EIGENX_PRIVATE_KEY=$CI_PRIVATE_KEY
docker build --platform linux/amd64 -t registry.io/app:$CI_COMMIT_SHA .
docker push registry.io/app:$CI_COMMIT_SHA
eigenx app deploy registry.io/app:$CI_COMMIT_SHA
```

## Multi-Environment Deployment

```bash
# Deploy to mainnet (default)
eigenx app deploy --env-file .env.mainnet

# Deploy to sepolia testnet
eigenx --environment sepolia app deploy --env-file .env.sepolia
```