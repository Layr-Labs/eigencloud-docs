---
title: eigenx Reference
sidebar_position: 1
---

:::important
The `eigenx` CLI is deprecated and will not receive updates. The `ecloud` CLI supports the same commands as `eigenx` and
the `migrate` command is provided to migrate your authentication key. We recommend migrating to `ecloud` as soon as practical.
:::

## Description

Use `eigenx` to deploy and manage verifiable applications in Trusted Execution Environments (TEEs).

## Available Commands

* [app](app.md)
* [auth](auth.md)
* [billing](billing.md)
* [environment, env](environment.md)
* [version](version.md)
* [undelegate](undelgate.md)
* [upgrade](upgrade.md)
* [telemetry](telemetry.md)
* help

## Global Options

`--verbose, -v` (boolean)

> Enable verbose logging.

`--enable-telemetry` (boolean)

> Enable telemetry collection on first run without prompting. The default is false.

`--disable-telemetry` (boolean)

> Disable telemetry collection on first run without prompting. The default is false.

`--help, -h`

> Show help.