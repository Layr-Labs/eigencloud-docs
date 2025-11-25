---
title: Troubleshoot Upgrade
sidebar_position: 6
---

## Upgrade transaction fails

Check you have sufficient ETH:

```bash
eigenx auth whoami
```

## App fails after upgrade

Check logs for errors:

```bash
eigenx app logs my-app
```

Rollback to previous version if needed:

```bash
eigenx app upgrade my-app registry.io/user/app:previous-tag
```

## Environment variables not updating

Ensure your .env file is being read:

```bash
eigenx app upgrade my-app --env-file ./.env
```

## Image pull fails

Verify image exists and is accessible:

```bash
docker pull registry.io/user/app:tag
```
