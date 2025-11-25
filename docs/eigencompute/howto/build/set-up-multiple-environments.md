---
title: Set Up Multiple Environments
sidebar_position: 4
---

```bash
# Development
eigenx environment set dev
eigenx app create api-dev typescript
cd api-dev
eigenx app deploy

# Staging
cd ..
eigenx environment set staging
eigenx app create api-staging typescript
cd api-staging
eigenx app deploy

# Production
cd ..
eigenx environment set prod
eigenx app create api-prod typescript
cd api-prod
eigenx app configure tls
eigenx app deploy
```