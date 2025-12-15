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
If you are an existing `eigenx` user, the `eigenx` CLI is deprecated and will no longer receive updates. The `ecloud` CLI supports 
the same commands as `eigenx` and the `migrate` command is provided to migrate your authentication key. We recommend migrating to `ecloud` as soon as practical.
::: 

## Available Commands

* [auth](auth.md)
* [billing](billing.md)
* [compute](compute/compute-overview.md)
* [upgrade](upgrade.md)
* [version](version.md)

## Global Options

`--help, -h`

> Show help.