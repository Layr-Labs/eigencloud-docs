---
title: Shared Options
sidebar_position: 10
---

`--verbose, -v` (boolean)

> Enable verbose logging.

`--enable-telemetry` (boolean)

> Enable telemetry collection on first run without prompting. Default is false.

`--disable-telemetry` (boolean)

> Disable telemetry collection on first run without prompting. Default is false.

`--environment value, --env value` (string)

> Deployment environment to use. One of `mainnet-alpha` and `sepolia`. Available on `app` and `auth` subcommands.

`--rpc-url value ` (URL)

> RPC URL to connect to blockchain. Can be set using environment variable `$EIGENX_RPC_URL`. Available on `app` subcommands.

`--private-key value` (string)

> Private key for signing transactions. Can be set using environment variable `$EIGENX_PRIVATE_KEY`. Available on `app` subcommands.

`--env-file value` (string)

> Environment file to use. Default is the `.env` file. Available on `app` subcommands.

`--help, -h`

> Show help.