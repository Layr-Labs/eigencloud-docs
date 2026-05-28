---
title: Upgrade Process
sidebar_position: 2
---

An upgrade follows these steps:

1. Build new image (if not using pre-built)
    - Build updated application
    - Tag with new identifier

2. Push image
    - Push to registry
    - Verify accessibility

3. Submit upgrade transaction
    - Sign upgrade transaction
    - Submit to blockchain
    - Wait for confirmation

4. Update TEE instance
    - Pull new image
    - Update environment variables
    - Restart application container

5. Verify update
    - Confirm the app is running
    - Verify the new version is active

## What gets updated

An upgrade updates:
- Application code (new Docker image)
- Environment variables (updated .env values)
- Configuration (TLS, ports)

What stays the same:
- App ID
- TEE wallet address (same MNEMONIC)
- Instance IP (usually)

:::tip Zero downtime
Upgrades aim for minimal downtime, but brief interruptions may occur during container restart. Plan upgrades during maintenance windows for production apps.
:::