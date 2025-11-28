---
title: deploy
sidebar_position: 3
---

Deploy a new application to a Trusted Execution Environment (TEE).

If you don't have an EigenCompute subscription, the CLI will prompt you for [billing details](../../../get-started/billing.md) in our payment portal.

## Synopsis

`eigenx app deploy [--dockerfile value, -f value] [--log-visibility value] [--resource-usage-monitoring value] [--instance-type value] [--name value] [--website value] [--description value] [--x-url value] [--image value] [global options] [image_ref]`

## Arguments

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

`--name <name>` (string)

> Display name for the application. Used by developer to manage application and displayed on the
> Verifiability Dashboard for [Mainnet](https://verify.eigencloud.xyz/) or [Sepolia testnet](https://verify-sepolia.eigencloud.xyz/). Prompted for if not provided.

`--website value <URL>` (string)

> Application website URL. Displayed on the
> Verifiability Dashboard for [Mainnet](https://verify.eigencloud.xyz/) or [Sepolia testnet](https://verify-sepolia.eigencloud.xyz/). Optional.

`--description <value>` (string)

> Application description. Displayed on the
> Verifiability Dashboard for [Mainnet](https://verify.eigencloud.xyz/) or [Sepolia testnet](https://verify-sepolia.eigencloud.xyz/). Optional.

`--x-url <URL>` (string)

> X (Twitter) profile. Displayed on the
> Verifiability Dashboard for [Mainnet](https://verify.eigencloud.xyz/) or [Sepolia testnet](https://verify-sepolia.eigencloud.xyz/). Optional.


## Global Options

Global options available are `--verbose, -v`, `--enable-telemetry`, `--disable-telemetry`, `--environment value`, `--rpc-url`, 
`--private-key`, `--env-file`, `--help, -h`. Refer to [Overview](app.md#global-options) for more information. 