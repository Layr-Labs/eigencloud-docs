---
title: build
sidebar_position: 5
---

Submit a new verifiable build. For more information, refer to Submit verifiable builds in the How to section.

## Available Commands

* [submit](#submit)
* [list](#list)
* [logs](#logs)
* [status](#status)
* [info](#info)
* [verify](#verify)

## Global Options

Options available for all `build` subcommands are:

`--environment <env>` (string)

> Deployment environment to use. One of `mainnet-alpha` and `sepolia`.  Can be set using environment variable `ECLOUD_ENV`.

`--rpc-url value ` (URL)

> RPC URL to connect to blockchain. Can be set using environment variable `ECLOUD_RPC_URL`.

`--private-key value` (string)

> Private key for signing transactions. Can be set using environment variable `ECLOUD_PRIVATE_KEY`.

`--verbose`

> Enable verbose logging.

## submit

Submit verifiable builds from Git source with provenance verification. 

### Synopsis

`ecloud compute build submit [--repo <value>] [--commit <value>] [--dockerfile <value>] [--build-caddyfile <value>] [--context <value>] [--dependencies <value>...] [--no-follow] [--json] [global options]`

### Options

`--repo <value>`

> Git repository URL. 

`--commit <value>` 

> Git commit SHA (40 hex chars). 

`--dockerfile <value>` 

> Dockerfile path.

`--build-caddyfile <value>` 

> Caddyfile path for builds. Optional.

`[--dependencies <value>...]` 

> Dependency image digests to include. For more information, refer to Submit verifiable builds in the How to section. 

`--no-follow`

> Exit after submission without streaming logs.

`--json`

> Output JSON instead of formatted text.

## list

List recent builds for your billing address.

### Synopsis

`ecloud compute build list [--limit <value>] [--offset <value>] [--json] [global options]`

### Options

`--limit <value>`

> Maximum number of builds to return (min 1, max 100). Default is `20`.

`--offset <value>`

> Number of builds to skip.

`--json`

> Output JSON instead of formatted text.

## logs

View or stream build logs in real-time using the `--follow` option.

### Synopsis

`ecloud compute build logs [BUILDID] [--follow] [--tail <value>] [global options]`

### Arguments

`BUILDID`

> Build ID.

### Options

`--follow`

> Follow logs in real-time.

`--tail <value>`

> Show last N lines.

## status

Status check for a specified build.

### Synopsis

`ecloud compute build status [BUILDID] [--json] [global options]`

### Arguments

`BUILDID`

> Build ID.

### Options

`--json`

> Output JSON instead of formatted text.

## info

Full build details including dependency tree.

### Synopsis

`ecloud compute build info [BUILDID] [--json] [global options]`

### Arguments

`BUILDID`

> Build ID.

### Options

`--json`

> Output JSON instead of formatted text.

## verify

Verify provenance for a build ID, image digest, or commit SHA.

### Synopsis

`ecloud compute build verify [IDENTIFIER] [--json] [global options]`

### Arguments

`IDENTIFIER`

> Build ID, image digest (sha256:...), or git commit SHA.

### Options

`--json`

> Output JSON instead of formatted text.