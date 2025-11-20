---
title: Application Environment
sidebar_position: 5
---

Your TEE application runs with these capabilities:

### Secure Execution
Your code runs in an Intel TDX instance with hardware-level isolation.

### Auto-Generated Wallet
Access a private mnemonic via `process.env.MNEMONIC`. For more information, refer to [Use App Wallet](use-app-wallet.mdx).

### Environment Variables
All variables from your `.env` file are available in your container:
- Variables with `_PUBLIC` suffix are visible to users for transparency
- Standard variables remain private and encrypted within the TEE

### Onchain Management
Your app's lifecycle is controlled via Ethereum smart contracts.
