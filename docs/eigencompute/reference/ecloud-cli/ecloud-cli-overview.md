---
title: Overview
sidebar_position: 1
---

Use the `ecloud` CLI to:

* Deploy containerized applications to ecloud TEE
* Manage application lifecycle (start, stop, terminate)
* Build and push Docker images with encryption
* Monitor application status and logs.

:::important Migration from eigenx CLI
If you are an existing `eigenx` user, the `eigenx` CLI is deprecated and will not receive updates. The `ecloud` CLI supports 
the same commands as `eigenx` and the `migrate` command is provided to migrate your authentication key. We recommend migrating to `ecloud` as soon as practical.
::: 

## Available Commands

TODO - confirm this list is the same. Then copy, paste, and confirm each subcommand is the same.

* app
* auth
* billing
* environment, env
* version
* undelegate
* upgrade
* telemetry
* help

## Global Options

TODO - confirm these are the same. 

`--verbose, -v` (boolean)

> Enable verbose logging.

`--enable-telemetry` (boolean)

> Enable telemetry collection on first run without prompting. The default is false.

`--disable-telemetry` (boolean)

> Disable telemetry collection on first run without prompting. The default is false.

`--help, -h`

> Show help.