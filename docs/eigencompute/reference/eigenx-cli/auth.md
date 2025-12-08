---
title: auth
sidebar_position: 3
---

EigenX CLI requires authentication to sign transactions for deploying and managing applications. Use `auth` commands to manage
authentication credentials securely.

## Available Commands

* [generate](#generate)
* [login](#login)
* [logout](#logout)
* [whoami](#whoami)
* [list](#list)

## Global Options

The `--environment` option is available for all `auth` subcommands:

`--environment <env>` (string)

> Deployment environment to use. One of `mainnet-alpha` and `sepolia`.

## generate

Generate a new authentication key with optional secure storage. For more information on creating authentication keys,
refer to [Create Authentication Keys](../../howto/manage-auth-keys/create-auth-keys.md).

### Synopsis

`eigenx auth generate [--store] [global options]`

### Options

`--store` (boolean)

> Generate a new authentication key with optional secure storage. For more information on creating authentication keys,
refer to [Create Authentication Keys](../../howto/manage-auth-keys/create-auth-keys.md). Default is false.

## login

Store an existing authentication key securely in your OS keyring. For more information on logging in to EigenX, refer to
[Manage Authentication Keys](../../howto/manage-auth-keys/manage-authentication-keys.md).

### Synopsis

`eigenx auth login [global options]`

## logout

Remove stored authentication keys from your OS keyring.

### Synopsis

`eigenx auth logout [--force] [global options]`

### Options

`--force` (boolean)

> Log out without requiring confirmation. Default is false.

## whoami

Display current authentication status and wallet address. For more information on checking your authentication status,
refer to [Manage Authentication Keys](../../howto/manage-auth-keys/manage-authentication-keys.md).

### Synopsis

`eigenx auth whoami [global options]`

## list

List all stored authentication keys organized by environment. For more information on listing keys,
refer to [Manage Authentication Keys](../../howto/manage-auth-keys/manage-authentication-keys.md).

### Synopsis 

`eigenx auth list [global options]`