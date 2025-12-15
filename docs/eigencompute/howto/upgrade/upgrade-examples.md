---
title: Upgrade Examples
sidebar_position: 4
---

## Upgrade with new code

```bash
# Make code changes
vim src/index.ts

# Upgrade deployment
 ecloud compute app upgrade my-app
```

```bash
# Fix a bug or add feature
git pull
npm install  # if dependencies changed
ecloud compute app upgrade my-app
```

## Upgrade environment variables only

```bash
# Edit .env file
vim .env

# Upgrade with new environment
ecloud compute app upgrade my-app
```

```bash
# Add new API key
echo "NEW_API_KEY=abc123" >> .env
ecloud compute app upgrade my-app
```

## Add TLS configuration

```bash
# Add TLS
ecloud compute app configure tls
cat .env.example.tls >> .env
# Edit DOMAIN and APP_PORT
ecloud compute app upgrade my-app
```

## Upgrade with pre-built image

```bash
ecloud compute app upgrade my-app --image-ref registry.io/user/app:v2.0
```

## Upgrade using application ID

```bash
ecloud compute app upgrade app-1a2b3c4d5e6f
```

## Version rollback

```bash
# Deploy previous image version
ecloud compute app upgrade my-app --image-ref registry.io/user/app:v1.0
```