---
title: Use Existing Image
sidebar_position: 3
---

If you have a containerized application, you don't need to start from a template when creating an EigenCompute application:

```bash
cd my-existing-project

# Deploy directly - the CLI will prompt for Dockerfile and .env paths
eigenx app deploy
```
The CLI will prompt you for [billing details](../../get-started/billing.md) in our payment portal.

**Requirements for existing projects:**
- **Dockerfile** - Must target `linux/amd64` and run as root user
- **.env file** - Optional but recommended for environment variables

The CLI will automatically prompt for file paths if they're not in default locations.

### Manual Image Building

If you prefer to build and push images yourself:

```bash
# Build and push manually
docker build --platform linux/amd64 -t myregistry/myapp:v1.0 .
docker push myregistry/myapp:v1.0

# Deploy using the image reference
eigenx app deploy myregistry/myapp:v1.0
```

The CLI will prompt you for [billing details](../../get-started/billing.md) in our payment portal.
