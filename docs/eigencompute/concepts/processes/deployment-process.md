---
title: Deployment Process
sidebar_position: 1
---

A deployment follows these steps:

1. Build phase (if not using pre-built image)
    - Read Dockerfile
    - Build for `linux/amd64` platform
    - Tag image with unique identifier

2. Push phase
    - Authenticate with Docker registry
    - Push image layers
    - Verify image is accessible

3. Transaction phase
    - Sign deployment transaction
    - Submit to Ethereum (Sepolia testnet)
    - Wait for confirmation

4. Provisioning phase
    - Provision TEE instance
    - Generate app mnemonic via the KMS
    - Inject environment variables
    - Start application container

5. Verification phase
    - Verify the app is running
    - Return app details and IP