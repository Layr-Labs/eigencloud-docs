---
title: info
sidebar_position: 9
---

Display detailed information about a specific application.

## Synopsis

`eigenx app info [--watch] [--address-count <value>] [global options] [<app-id|name>]`

## Arguments

`app-id|name` (string)

> Application ID or display name. Prompted for if not provided.

## Options

`--watch`

> Continuously fetch and display updates to application information. Default is disabled.

`--address-count <value>`

> Number of [addresses available to application](../../../howto/build/use-app-wallet.mdx) to fetch. Default is `1`.

## Global Options

Global options available are `--verbose, -v`, `--enable-telemetry`, `--disable-telemetry`, `--environment value`, `--rpc-url`,
`--help, -h`. Refer to [Overview](app.md#global-options) for more information. 