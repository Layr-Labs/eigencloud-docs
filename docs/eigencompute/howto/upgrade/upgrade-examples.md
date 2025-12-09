---
title: Upgrade Examples
sidebar_position: 4
---

## Upgrade with new code

```bash
# Make code changes
vim src/index.ts

# Upgrade deployment
eigenx app upgrade my-app
```

```bash
# Fix a bug or add feature
git pull
npm install  # if dependencies changed
eigenx app upgrade my-app
```

## Upgrade environment variables only

```bash
# Edit .env file
vim .env

# Upgrade with new environment
eigenx app upgrade my-app
```

```bash
# Add new API key
echo "NEW_API_KEY=abc123" >> .env
eigenx app upgrade my-app
```

## Add TLS configuration

```bash
# Add TLS
eigenx app configure tls
cat .env.example.tls >> .env
# Edit DOMAIN and APP_PORT
eigenx app upgrade my-app
```

## Upgrade with pre-built image

```bash
eigenx app upgrade my-app registry.io/user/app:v2.0
```

## Upgrade using application ID

```bash
eigenx app upgrade app-1a2b3c4d5e6f
```

## Version rollback

```bash
# Deploy previous image version
eigenx app upgrade my-app registry.io/user/app:v1.0
```