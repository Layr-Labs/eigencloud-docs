---
title: Deployment Process
sidebar_position: 1
---

A deployment follows these steps:

1. Build Phase (if not using pre-built image)
    - Read Dockerfile
    - Build for `linux/amd64` platform
    - Tag image with unique identifier

2. Push Phase
    - Authenticate with Docker registry
    - Push image layers
    - Verify image is accessible

3. Transaction Phase
    - Sign deployment transaction
    - Submit to Ethereum (Sepolia testnet)
    - Wait for confirmation

4. Provisioning Phase
    - Provision TEE instance
    - Generate app mnemonic via KMS
    - Inject environment variables
    - Start application container

5. Verification Phase
    - Verify app is running
    - Return app details and IP