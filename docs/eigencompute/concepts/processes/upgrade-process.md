---
title: Upgrade Process
sidebar_position: 2
---

An upgrade follows these steps:

1. Build New Image (if not using pre-built)
    - Build updated application
    - Tag with new identifier

2. Push Image
    - Push to registry
    - Verify accessibility

3. Submit Upgrade Transaction
    - Sign upgrade transaction
    - Submit to blockchain
    - Wait for confirmation

4. Update TEE Instance
    - Pull new image
    - Update environment variables
    - Restart application container

5. Verify Update
    - Confirm app is running
    - Verify new version is active

## What Gets Updated

An upgrade updates:
- Application code (new Docker image)
- Environment variables (updated .env values)
- Configuration (TLS, ports, etc.)

What stays the same:
- App ID
- TEE wallet address (same MNEMONIC)
- Instance IP (usually)

:::tip Zero Downtime
Upgrades aim for minimal downtime, but brief interruptions may occur during container restart. Plan upgrades during maintenance windows for production apps.
:::