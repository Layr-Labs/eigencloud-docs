---
title: Environment Variables
sidebar_position: 3
---

On deployment, the project's `.env` file is encrypted and securely injected into the TEE:

```bash
# Private variables (encrypted)
API_KEY=secret-key-here
DATABASE_URL=postgres://...

# Public variables (visible to users for transparency)
NETWORK_PUBLIC=sepolia
VERSION_PUBLIC=1.0.0
```

Variables ending in `_PUBLIC` are visible onchain for transparency.

:::important Auto-Generated MNEMONIC
The `MNEMONIC` environment variable is **automatically provided by KMS** at runtime. Any mnemonic in `.env.example` is just
a placeholder. The TEE overwrites it with your app's unique, persistent KMS-generated mnemonic.
:::