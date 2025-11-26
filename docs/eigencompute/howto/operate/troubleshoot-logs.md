---
title: Troubleshoot Logs
sidebar_position: 3
---

## Application not starting

```bash
eigenx app logs my-app
```

Look for:
- Port binding errors
- Missing environment variables
- Dependency issues
- Startup exceptions

## Monitor for errors

```bash
eigenx app logs --watch my-app | grep -i error
```
