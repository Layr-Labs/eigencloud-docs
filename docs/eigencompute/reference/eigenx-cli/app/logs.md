---
title: logs
sidebar_position: 10
---

View application logs from your TEE instance. For usage examples, refer to [Monitor](../../../howto/operate/monitor.md).

## Synopsis

`eigenx app logs [--watch] [global options] [<app-id|name>]`

## Arguments

`app-id|name` (string)

> Application ID or display name. Prompted for if not provided.

## Options

`--watch`

> Continuously fetch and display logs for application. Default is disabled.

## Global Options

Global options available are `--verbose, -v`, `--enable-telemetry`, `--disable-telemetry`, `--environment value`, `--rpc-url`,
`--help, -h`. Refer to [Overview](app.md#global-options) for more information. 