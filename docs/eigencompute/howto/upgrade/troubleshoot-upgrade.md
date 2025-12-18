---
title: Troubleshoot Upgrade
sidebar_position: 6
---

## Upgrade transaction fails

Check you have sufficient ETH:

```bash
ecloud auth whoami
```

## App fails after upgrade

Check logs for errors:

```bash
ecloud compute app logs my-app
```

Rollback to previous version if needed:

```bash
ecloud compute app upgrade my-app --image-ref registry.io/user/app:previous-tag
```

## Environment variables not updating

Ensure your .env file is being read:

```bash
ecloud compute app upgrade my-app --env-file ./.env
```

## Image pull fails

Verify image exists and is publicly accessible:

```bash
docker pull registry.io/user/app:tag
```
