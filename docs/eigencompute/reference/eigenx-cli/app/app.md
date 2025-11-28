---
title: Overview
sidebar_position: 1
---

Manage applications including creating, operating, and terminating.

## Available Commands

* [create](create.md)
* [deploy](deploy.md)
* [upgrade](upgrade.md)
* [start](start.md)
* [stop](stop.md)
* [terminate](terminate.md)
* [list](list.md)
* [info](info.md)
* [logs](logs.md)
* [profile](profile.md)
* [configure](configure.md)
* help, h

## Global Options

`--verbose, -v` (boolean)

> Enable verbose logging.

`--enable-telemetry` (boolean)

> Enable telemetry collection on first run without prompting. Default is false.

`--disable-telemetry` (boolean)

> Disable telemetry collection on first run without prompting. Default is false.

`--environment value, --env value` (string)

> Deployment environment to use. One of `mainnet-alpha` and `sepolia`.

`--rpc-url value ` (URL)

> RPC URL to connect to blockchain. Can be set using environment variable `$EIGENX_RPC_URL`.

`--private-key value` (string) 

> Private key for signing transactions. Can be set using environment variable `$EIGENX_PRIVATE_KEY`.

`--env-file value` (string)

> Environment file to use. Default is the `.env` file.

`--help, -h`

> Show help.