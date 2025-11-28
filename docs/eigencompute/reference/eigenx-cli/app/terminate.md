---
title: terminate
sidebar_position: 6
---

Permanently remove an application and all its resources.

:::danger Irreversible Action
Termination is permanent and irreversible. The TEE wallet mnemonic becomes inaccessible. Any funds in the wallet will be lost forever.
:::

### Before terminating

1. Withdraw funds from the TEE wallet.
2. Backup data stored by your app.
3. Save logs if needed for auditing.
4. Document configuration if you plan to redeploy.

## Synopsis

`eigenx app terminate [--force] [global options] [<app-id|name>]`

## Arguments

`app-id|name` (string)

> Application ID or display name. Prompted for if not provided.

## Options

`--force`

> Force termination without confirmation.

## Global Options

Global options available are `--verbose, -v`, `--enable-telemetry`, `--disable-telemetry`, `--environment value`, `--rpc-url`,
`--private-key`, `--help, -h`. Refer to [Overview](app.md#global-options) for more information. 