---
title: auth
sidebar_position: 2
---

The `ecloud` CLI requires authentication to sign transactions for deploying and managing applications. Use `auth` commands to manage
authentication credentials securely.

## Available Commands

* [generate](#generate)
* [login](#login)
* [logout](#logout)
* [migrate](#migrate)
* [whoami](#whoami)
* [list](#list)

## generate

Generate a new authentication key with optional secure storage. For more information on creating authentication keys,
refer to [Create Authentication Keys](../../howto/setup/create-use-auth-keys.md).

### Synopsis

`ecloud auth generate [--store]`

### Options

`--store` (boolean)

> Generate a new authentication key with optional secure storage. For more information on creating authentication keys,
refer to [Create Authentication Keys](../../howto/setup/create-use-auth-keys.md). Default is false.

## login

Store an existing authentication key securely in your OS keyring. 

### Synopsis

`ecloud auth login`

### Options

`--private-key 0x...` (string)

> Private key to store (skips interactive prompt). Can be set using environment variable `ECLOUD_PRIVATE_KEY`.

:::warning
For best security, use the `ECLOUD_PRIVATE_KEY` environment variable. Private keys passed on the command line
may be exposed in shell history, process listings, and system logs.
:::

`--force` (boolean)

> Log in without requiring confirmation. Default is false.

## logout

Remove stored authentication key from your OS keyring.

### Synopsis

`ecloud auth logout [--force]`

### Options

`--force` (boolean)

> Log out without requiring confirmation. Default is false.

## migrate

Migrate authentication key from `eigenx` CLI to `ecloud` CLI.  For mor information, refer to [Migrate to ecloud CLI](../../howto/setup/migrate-ecloud-cli.md).

### Synopsis

`ecloud auth migrate`

## whoami

Display current authentication status and wallet address. 

### Synopsis

`ecloud auth whoami`