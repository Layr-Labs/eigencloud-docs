---
title: upgrade
sidebar_position: 4
---

Update an existing application with new code, configuration, or environment variables.

## Synopsis

`eigenx app upgrade [--dockerfile value, -f value] [--log-visibility value] [--resource-usage-monitoring value] [--instance-type value] [global options] [<app-id|name>] [<image_ref>]`

## Arguments

`app-id|name` (string)

> Application ID or display name. Prompted for if not provided.

`image_ref` (string)

> Pre-built Docker image reference. Optional.

## Options

`--dockerfile <path>, -f <path>` (string)

> Path to Dockerfile. If not provided, the Dockerfile in the current directory is used.

`--log-visibility <setting>` (string)

> Log visibility. One of `public`, `private`, or `off`. If set to `public`, logs are displayed on the Verifiability Dashboard
> for [Mainnet](https://verify.eigencloud.xyz/) or [Sepolia testnet](https://verify-sepolia.eigencloud.xyz/). Prompted for if not provided.

`--resource-usage-monitoring value` (string)

> Resource use monitoring. One of `enable` or `disable`. Prompted for if not provided.

`--instance-type <value>` (string)

> Machine instance type to use. One of `g1-standard-4t` or `g1-standard-8t`. Prompted for if not provided.

## Global Options

Global options available are `--verbose, -v`, `--enable-telemetry`, `--disable-telemetry`, `--environment value`, `--rpc-url`,
`--private-key`, `--env-file`, `--help, -h`. Refer to [Overview](app.md#global-options) for more information. 