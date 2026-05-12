---
title: Configure environment variables
sidebar_position: 2
---

To configure environment variables for your application:

```bash
cp .env.example .env
```

Edit `.env` to add any environment variables your application needs:

```bash
# Example .env content
API_KEY=your_api_key_here
DATABASE_URL=your_database_url

# Variables with _PUBLIC suffix are visible to users
NETWORK_PUBLIC=sepolia
```

Variables with the `_PUBLIC` suffix will be visible to users for transparency. Standard variables remain encrypted within the TEE.

:::important Auto-Generated MNEMONIC
The `MNEMONIC` environment variable is **automatically provided by KMS** at runtime. Any mnemonic in `.env.example` is just
a placeholder. The TEE overwrites it with your app's unique, persistent KMS-generated mnemonic.
:::

:::caution Launch time env vars visibility
Any environment variables in the container's launch-time env (image `ENV` or `tee-env-*` overrides) will be part of the 
attested measurement and be visible in the attestation token. Ensure secrets are configured in the encrypted `.env` file
(same pattern as the [confidential space token](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims#workload-container-claims)).
:::