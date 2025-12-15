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
ecloud compute app upgrade my-app
```

## 2. Use Version Tags

```bash
# Build with version tag
docker build --platform linux/amd64 -t registry.io/app:v2.1.0 .
docker push registry.io/app:v2.1.0

# Deploy specific version
ecloud compute app upgrade my-app --image-ref registry.io/app:v2.1.0 
```

## 3. Monitor After Upgrade

```bash
# Upgrade
ecloud compute app upgrade my-app

# Immediately check logs
ecloud compute app logs --watch my-app

# Verify app health
ecloud compute app info my-app
```

## 4. Use Version Tags

```bash
# Build with version tag
docker build --platform linux/amd64 -t registry.io/app:v2.1.0 .
docker push registry.io/app:v2.1.0

# Deploy specific version
ecloud compute app upgrade my-app --image-ref registry.io/app:v2.1.0
```