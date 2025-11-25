---
title: Troubleshoot
sidebar_position: 6
---

## Start Fails

### Check current status

```bash
eigenx app info my-app
```

If already running, you'll see an error. Stop and restart if needed.

### Cannot terminate

Ensure you have transaction signing capability:

```bash
eigenx auth whoami
```

### Terminated by mistake

Unfortunately, termination is irreversible. You'll need to:

1. Redeploy the application: `eigenx app deploy`
2. Reconfigure with a new TEE wallet
3. Any funds in the old wallet are lost


