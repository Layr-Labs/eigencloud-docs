---
title: Follow Best Practices
sidebar_position: 5
---

## 1. Test Before Upgrading

```bash
# Test locally first
docker build --platform linux/amd64 -t my-app:test .
docker run -p 3000:3000 my-app:test
# Verify it works

# Then upgrade
eigenx app upgrade my-app
```

## 2. Use Version Tags

```bash
# Build with version tag
docker build --platform linux/amd64 -t registry.io/app:v2.1.0 .
docker push registry.io/app:v2.1.0

# Deploy specific version
eigenx app upgrade my-app registry.io/app:v2.1.0
```

## 3. Monitor After Upgrade

```bash
# Upgrade
eigenx app upgrade my-app

# Immediately check logs
eigenx app logs --watch my-app

# Verify app health
eigenx app info my-app
```

## 4. Use Version Tags

```bash
# Build with version tag
docker build --platform linux/amd64 -t registry.io/app:v2.1.0 .
docker push registry.io/app:v2.1.0

# Deploy specific version
eigenx app upgrade my-app registry.io/app:v2.1.0
```