---
title: app
sidebar_position: 2
---

Manage applications including creating, operating, and terminating.

## Available Commands

* [create](#create)
* [deploy](#deploy)
* [upgrade](#upgrade)
* [start](#start)
* [stop](#stop)
* [terminate](#terminate)
* [list](#list)
* [info](#info)
* [logs](#logs)
* [releases](#releases)
* [profile](#profile)
* [configure](#configure)
* help, h

## Global Options

Options available for all `app` subcommands are:

`--environment <env>` (string)

> Deployment environment to use. One of `mainnet-alpha` and `sepolia`.  Can be set using environment variable `ECLOUD_ENV`.

`--rpc-url value ` (URL)

> RPC URL to connect to blockchain. Can be set using environment variable `ECLOUD_RPC_URL`. 

`--private-key value` (string)

> Private key for signing transactions. Can be set using environment variable `ECLOUD_PRIVATE_KEY`. 

`--env-file value` (string)

> Environment file to use. Default is the `.env` file. Can be set using environment variable `ECLOUD_ENVFILE_PATH`

`--verbose`

> Enable verbose logging.

## create

Create an application project from a template with all necessary configuration files. For more information on creating
applications, refer to [Quickstart](../../../get-started/quickstart.md).

### Synopsis

`ecloud compute app create [--name <value>] [--language <value>] [--template-repo <value>] [--template-version <version>] [global options]`

### Options

`name` (string)

> Name for your application directory. Prompted for if not provided.

`language` (string)

> Language to use for template. Prompted for if not provided. Options are:
>  * `typescript` - use for Web services, APIs, bots
>  * `python` - use for ML/AI, data processing, scripts
>  * `golang` - use for high-performance services
>  *  `rust`  - use for systems programming, performance-critical apps

`--template-repo <value>` (string)

> Template name or custom template URL.

`--template-version <version>` (string)

> Template version/tag to use.

## deploy

Deploy a new application to a Trusted Execution Environment (TEE).

If you don't have an EigenCompute subscription, the CLI will prompt you for [billing details](../../../get-started/billing.md) in our payment portal.

### Synopsis

`ecloud compute app deploy [--name <value>] [--dockerfile <value>] [--image-ref <value>]
[--log-visibility] [--instance-type <value>] [--skip-profile] [--resource-usage-monitoring] [--website <value>]
[--description <value>] [--x-url <value>] [--image <value>] [--skip-profile]
[--verifiable] [--repo <value>] [--commit <value>] [--build-dockerfile <value>] [--build-context <value>] [--build-dependencies <value>...] [global options]` 

### Options

`--image_ref <value>` (string)

> Pre-built Docker image reference. Can be set using environment variable `ECLOUD_IMAGE_REF`.

`--dockerfile <path>, -f <path>` (string)

> Path to Dockerfile. If not provided, the Dockerfile in the current directory is used. Your Dockerfile must include the `EXPOSE` directive to specify which port(s) your application listens on, see the [Port Exposure Guide](../../../howto/deploy/expose-ports.md). Can be set using environment variable `ECLOUD_DOCKERFILE_PATH`.

`--log-visibility <setting>` (string)

> Log visibility. One of `public`, `private`, or `off`. If set to `public`, logs are displayed on the Verifiability Dashboard
> for [Mainnet](https://verify.eigencloud.xyz/) or [Sepolia testnet](https://verify-sepolia.eigencloud.xyz/). Prompted for if not provided. Can be set using environment variable `ECLOUD_LOG_VISIBILITY`.

`--resource-usage-monitoring value` (string)

> Resource use monitoring. One of `enable` or `disable`. Prompted for if not provided. Can be set using environment variable `ECLOUD_RESOURCE_USAGE_MONITORING`.

`--instance-type <value>` (string)

> Machine instance type to use. One of `g1-standard-4t` or `g1-standard-8t`. Prompted for if not provided. Can be set using environment variable `ECLOUD_INSTANCE_TYPE`.
>
> | Machine type     | vCPUs   |  Memory  | Architecture |
> |------------------|:-------:|:--------:|---------------|
> | g1-standard-4t   |    4    |  16 GB   | Intel TDX     |
> | g1-standard-8t   |    8    |  32 GB   | Intel TDX     |


`--name <name>` (string)

> Display name for the application. Used by developer to manage application and displayed on the
> Verifiability Dashboard for [Mainnet](https://verify.eigencloud.xyz/) or [Sepolia testnet](https://verify-sepolia.eigencloud.xyz/). Prompted for if not provided. Can be set using environment variable `ECLOUD_NAME`.

`--website <URL>` (string)

> Application website URL. Displayed on the
> Verifiability Dashboard for [Mainnet](https://verify.eigencloud.xyz/) or [Sepolia testnet](https://verify-sepolia.eigencloud.xyz/). 

`--description <value>` (string)

> Application description. Displayed on the
> Verifiability Dashboard for [Mainnet](https://verify.eigencloud.xyz/) or [Sepolia testnet](https://verify-sepolia.eigencloud.xyz/). 

`--x-url <URL>` (string)

> X (Twitter) profile. Displayed on the
> Verifiability Dashboard for [Mainnet](https://verify.eigencloud.xyz/) or [Sepolia testnet](https://verify-sepolia.eigencloud.xyz/).

`--image <path>` (string)

> Path to profile image. Must be JPG/PNG and max size of 4MB. Displayed on the
> Verifiability Dashboard for [Mainnet](https://verify.eigencloud.xyz/) or [Sepolia testnet](https://verify-sepolia.eigencloud.xyz/).

`--skip-profile`

> Skip app profile setup.

`--verifiable`

> Enable verifiable build mode. Build from either: 
> * Git source using `--repo` and `--commit`
> * Prebuilt verifiable image using `--image-ref`.

`--repo <value>`

> Git repository URL. Required with `--verifiable` when building from Git source.

`--commit <value>`

> Git commit SHA (40 hex chars). Required with `--verifiable` when building from Git source.

`--build-dockerfile <value>`

> Dockerfile path for verifiable build when building from Git source.

`--build-context <value>`

> Build context path for verifiable build when building from Git source.

`--build-dependencies=<value>...`

> Dependency digests for verifiable build when building from Git source (sha256:...).

## upgrade

Update an existing application with new code, configuration, or environment variables.

### Synopsis

`ecloud compute app upgrade  [<app-id|name>] [--dockerfile value, -f value] [--log-visibility value] [--resource-usage-monitoring value] 
[--instance-type value] [--image_ref <value>] [--verifiable] [--repo <value>] [--commit <value>] [--build-dockerfile <value>] 
[--build-context <value>] [--build-dependencies <value>...] [global options]`

### Arguments

`app-id|name` (string)

> Application ID or display name. Prompted for if not provided.

### Options

`--dockerfile <path>, -f <path>` (string)

> Path to Dockerfile. If not provided, the Dockerfile in the current directory is used. Can be set using environment variable `ECLOUD_DOCKERFILE_PATH`. 

`--image_ref <value>` (string)

> Pre-built Docker image reference. Optional. Can be set using environment variable `ECLOUD_IMAGE_REF`.

`--log-visibility <setting>` (string)

> Log visibility. One of `public`, `private`, or `off`. If set to `public`, logs are displayed on the Verifiability Dashboard
> for [Mainnet](https://verify.eigencloud.xyz/) or [Sepolia testnet](https://verify-sepolia.eigencloud.xyz/). Prompted for if not provided. Can be set using environment variable `ECLOUD_LOG_VISIBILITY`.

`--resource-usage-monitoring value` (string)

> Resource use monitoring. One of `enable` or `disable`. Prompted for if not provided. Can be set using `ECLOUD_RESOURCE_USAGE_MONITORING`.

`--instance-type <value>` (string)

> Machine instance type to use. One of `g1-standard-4t` or `g1-standard-8t`. Prompted for if not provided. Can be set using `ECLOUD_INSTANCE_TYPE`.

`--verifiable`

> Enable verifiable build mode. Build from either:
> * Git source using `--repo` and `--commit`
> * Prebuilt verifiable image using `--image-ref`.

`--repo <value>`

> Git repository URL. Required with `--verifiable` when building from Git source.

`--commit <value>`

> Git commit SHA (40 hex chars). Required with `--verifiable` when building from Git source.

`--build-dockerfile <value>`

> Dockerfile path for verifiable build when building from Git source.

`--build-context <value>`

> Build context path for verifiable build when building from Git source.

`--build-dependencies=<value>...`

> Dependency digests for verifiable build when building from Git source (sha256:...).

## start

Start a previously stopped application.

### Synopsis

`ecloud compute app start [<app-id|name>] [global options]`

### Arguments

`app-id|name` (string)

> Application ID or display name. Prompted for if not provided.

## stop

Stop a running application without removing it.

### Synopsis

`ecloud compute app stop [<app-id|name>] [global options]`

### Arguments

`app-id|name` (string)

> Application ID or display name. Prompted for if not provided.

## terminate
Permanently remove an application and all its resources.

:::danger Irreversible Action
Termination is permanent and irreversible. The TEE wallet mnemonic becomes inaccessible. Any funds in the wallet will be lost forever.
:::

### Before terminating

1. Withdraw funds from the TEE wallet.
2. Save logs if needed for auditing.
3. Document configuration if you plan to redeploy.

### Synopsis

`ecloud compute app terminate [<app-id|name>] [--force] [global options]`

### Arguments

`app-id|name` (string)

> Application ID or display name. Prompted for if not provided.

### Options

`--force`

> Force termination without confirmation.

## list

List all applications deployed by your account in the current environment. 

### Synopsis

`ecloud compute app list [--all] [--address-count <value>] [global options]`

### Options

`--all`

> Show all applications including terminated applications.

`--address-count <value>`

> Number of [addresses available to application](../../../howto/build/use-app-wallet.mdx) to fetch. Default is `1`.

## info

Display detailed information about a specific application.

### Synopsis

`ecloud compute app info [--watch] [<app-id|name>] [--address-count <value>] [global options]`

### Arguments

`app-id|name` (string)

> Application ID or display name. Prompted for if not provided.

### Options

`--watch`

> Continuously fetch and display updates to application information. Default is disabled.

`--address-count <value>`

> Number of [addresses available to application](../../../howto/build/use-app-wallet.mdx) to fetch. Default is `1`.

## logs

View application logs from your TEE instance. 

### Synopsis

`ecloud compute app logs [<app-id|name>] [--watch] [global options]`

### Arguments

`app-id|name` (string)

> Application ID or display name. Prompted for if not provided.

### Options

`--watch`

> Continuously fetch and display logs for application. Default is disabled.

## releases

Display app releases including verifiable builds and dependency builds.

### Synopsis

`ecloud compute app releases [app-id|name] [--json] [--full] [global options]`

### Arguments

`app-id|name` (string)

> Application ID or display name. Prompted for if not provided.

### Options

`--json`

> Output JSON instead of formatted text.

`--full`
> Display the full (multi-line) release details instead of a table.

## profile set

Update or specify application profile. The application profile properties are displayed on the Verifiability Dashboard for
[Mainnet](https://verify.eigencloud.xyz/) or [Sepolia testnet](https://verify-sepolia.eigencloud.xyz/).

### Synopsis

`ecloud compute app profile set [global options] [<app-id|name>]`

### Arguments

`app-id|name` (string)

> Application ID or display name. Prompted for if not provided.

### Options

`--name <name>` (string)

> Display name for the application. Used by developer to manage application and displayed on the
> Verifiability Dashboard for [Mainnet](https://verify.eigencloud.xyz/) or [Sepolia testnet](https://verify-sepolia.eigencloud.xyz/). Prompted for if not provided. Can be set using environment variable `ECLOUD_NAME`.

`--website <URL>` (string)

> Application website URL. Displayed on the
> Verifiability Dashboard for [Mainnet](https://verify.eigencloud.xyz/) or [Sepolia testnet](https://verify-sepolia.eigencloud.xyz/). Optional.

`--description <value>` (string)

> Application description. Displayed on the
> Verifiability Dashboard for [Mainnet](https://verify.eigencloud.xyz/) or [Sepolia testnet](https://verify-sepolia.eigencloud.xyz/). Optional.

`--x-url <URL>` (string)

> X (Twitter) profile. Displayed on the
> Verifiability Dashboard for [Mainnet](https://verify.eigencloud.xyz/) or [Sepolia testnet](https://verify-sepolia.eigencloud.xyz/). Optional.

`--image <path>` (string)

> Path to profile image. Must be JPG/PNG and max size of 4MB. Displayed on the
> Verifiability Dashboard for [Mainnet](https://verify.eigencloud.xyz/) or [Sepolia testnet](https://verify-sepolia.eigencloud.xyz/). Optional.

## configure tls

Add TLS/HTTPS configuration to your project for secure domain access. This command adds:

* Caddy Server Configuration - Automatic HTTPS with [Let's Encrypt](https://letsencrypt.org/) using [Caddyfile](https://caddyserver.com/docs/caddyfile)
* Environment Variables - Example TLS configuration in `.env.example.tls`

For more information on configuring TLS, refer to [Configure TLS](../../../howto/deploy/configure-tls.md).

### Synopsis

`ecloud compute app configure tls`
