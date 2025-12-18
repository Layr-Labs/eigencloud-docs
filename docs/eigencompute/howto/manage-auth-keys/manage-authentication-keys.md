---
title: Manage Authentication Keys
sidebar_position: 3
---

:::important
EigenCompute uses two types of keys:
* Authentication keys for deployments and protocol interactions.
* TEE mnemonic for applications and wallet functionality inside the TEE.

For more information on EigenCompute keys, refer to the [Keys](../../concepts/keys-overview.md) concept topic.
:::

## Check authentication status

Check the authentication status to: 
* Verify that you are logged in before deploying.
* Find your address to request testnet funds.

To display the currently authenticated address: 

```
ecloud auth whoami
```

The authenticated address are displayed:

```
Address: 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb1
Source:  stored credentials
```

## Log out 

Log out of ecloud CLI to:
* Remove credentials before leaving a shared machine.
* Use a different authentication key.
* Remove corrupted credentials when troubleshooting.

To log out: 

```bash
ecloud auth logout
```