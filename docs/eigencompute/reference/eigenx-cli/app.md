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
* [profile](#profile)
* [configure](#configure)
* help, h

## Global Options

Options available for all `app` subcommands are:

`--environment <env>` (string)

> Deployment environment to use. One of `mainnet-alpha` and `sepolia`. 

`--rpc-url value ` (URL)

> RPC URL to connect to blockchain. Can be set using environment variable `$EIGENX_RPC_URL`. 

`--private-key value` (string)

> Private key for signing transactions. Can be set using environment variable `$EIGENX_PRIVATE_KEY`. 

`--env-file value` (string)

> Environment file to use. Default is the `.env` file. 

## create

Create an application project from a template with all necessary configuration files. For more information on creating
applications, refer to [Create Application](../../howto/build/create-app-from-template.md).

### Synopsis

`eigenx app create [name] [language] [template-name] [--template-repo <url>] [--template-version <version>] [global options]`

### Arguments

`name` (string)

> Name for your application directory. Prompted for if not provided.

`language` (string)

> Language to use for template. Prompted for if not provided. Options are:
>  * `typescript` - use for Web services, APIs, bots
>  * `python` - use for ML/AI, data processing, scripts
>  * `golang` - use for high-performance services
>  *  `rust`  - use for systems programming, performance-critical apps

`template-name` (string)

> Name of template from which to create application. Prompted for if not provided.

### Options

`--template-repo <url>` (string)

> Custom template repository URL.

`--template-version <version>` (string)

> Template version/tag to use.

## deploy

Deploy a new application to a Trusted Execution Environment (TEE).

If you don't have an EigenCompute subscription, the CLI will prompt you for [billing details](../../get-started/billing.md) in our payment portal.

### Synopsis

`eigenx app deploy [--dockerfile value, -f value] [--log-visibility value] [--resource-usage-monitoring value] [--instance-type value] [--name value] [--website value] [--description value] [--x-url value] [--image value] [global options] [image_ref]`

### Arguments

`image_ref` (string)

> Pre-built Docker image reference. Optional.

### Options

`--dockerfile <path>, -f <path>` (string)

> Path to Dockerfile. If not provided, the Dockerfile in the current directory is used. Your Dockerfile must include the `EXPOSE` directive to specify which port(s) your application listens on, see the [Port Exposure Guide](../../howto/configure/expose-ports.md).

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

`--website <URL>` (string)

> Application website URL. Displayed on the
> Verifiability Dashboard for [Mainnet](https://verify.eigencloud.xyz/) or [Sepolia testnet](https://verify-sepolia.eigencloud.xyz/). Optional.

`--description <value>` (string)

> Application description. Displayed on the
> Verifiability Dashboard for [Mainnet](https://verify.eigencloud.xyz/) or [Sepolia testnet](https://verify-sepolia.eigencloud.xyz/). Optional.

`--x-url <URL>` (string)

> X (Twitter) profile. Displayed on the
> Verifiability Dashboard for [Mainnet](https://verify.eigencloud.xyz/) or [Sepolia testnet](https://verify-sepolia.eigencloud.xyz/). Optional.

## upgrade

Update an existing application with new code, configuration, or environment variables.

### Synopsis

`eigenx app upgrade [--dockerfile value, -f value] [--log-visibility value] [--resource-usage-monitoring value] [--instance-type value] [global options] [<app-id|name>] [<image_ref>]`

### Arguments

`app-id|name` (string)

> Application ID or display name. Prompted for if not provided.

`image_ref` (string)

> Pre-built Docker image reference. Optional.

### Options

`--dockerfile <path>, -f <path>` (string)

> Path to Dockerfile. If not provided, the Dockerfile in the current directory is used.

`--log-visibility <setting>` (string)

> Log visibility. One of `public`, `private`, or `off`. If set to `public`, logs are displayed on the Verifiability Dashboard
> for [Mainnet](https://verify.eigencloud.xyz/) or [Sepolia testnet](https://verify-sepolia.eigencloud.xyz/). Prompted for if not provided.

`--resource-usage-monitoring value` (string)

> Resource use monitoring. One of `enable` or `disable`. Prompted for if not provided.

`--instance-type <value>` (string)

> Machine instance type to use. One of `g1-standard-4t` or `g1-standard-8t`. Prompted for if not provided.

## start

Start a previously stopped application.

### Synopsis

`eigenx app start [global options] [<app-id|name>]`

### Arguments

`app-id|name` (string)

> Application ID or display name. Prompted for if not provided.

## stop

Stop a running application without removing it.

### Synopsis

`eigenx app stop [global options] [<app-id|name>]`

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

`eigenx app terminate [--force] [global options] [<app-id|name>]`

### Arguments

`app-id|name` (string)

> Application ID or display name. Prompted for if not provided.

### Options

`--force`

> Force termination without confirmation.

## list

List all applications deployed by your account in the current environment. For usage examples, refer to [Monitor](../../howto/operate/monitor.md).

### Synopsis

`eigenx app list [--all] [--address-count <value>] [global options]`

### Options

`--all`

> Show all applications including terminated applications.

`--address-count <value>`

> Number of [addresses available to application](../../howto/build/use-app-wallet.mdx) to fetch. Default is `1`.

## info

Display detailed information about a specific application.

### Synopsis

`eigenx app info [--watch] [--address-count <value>] [global options] [<app-id|name>]`

### Arguments

`app-id|name` (string)

> Application ID or display name. Prompted for if not provided.

### Options

`--watch`

> Continuously fetch and display updates to application information. Default is disabled.

`--address-count <value>`

> Number of [addresses available to application](../../howto/build/use-app-wallet.mdx) to fetch. Default is `1`.

## logs

View application logs from your TEE instance. For usage examples, refer to [Monitor](../../howto/operate/monitor.md).

### Synopsis

`eigenx app logs [--watch] [global options] [<app-id|name>]`

### Arguments

`app-id|name` (string)

> Application ID or display name. Prompted for if not provided.

### Options

`--watch`

> Continuously fetch and display logs for application. Default is disabled.

## profile

Update or specify application profile. The application profile properties are displayed on the Verifiability Dashboard for
[Mainnet](https://verify.eigencloud.xyz/) or [Sepolia testnet](https://verify-sepolia.eigencloud.xyz/).

### Synopsis

`eigenx app profile set [global options] [<app-id|name>]`

### Arguments

`app-id|name` (string)

> Application ID or display name. Prompted for if not provided.

### Subcommands

`set`

> Prompts for application profile properties: Name, Website, Description, X (Twitter) profile URL, and application icon or image.

## configure

Add TLS/HTTPS configuration to your project for secure domain access. This command adds:

* Caddy Server Configuration - Automatic HTTPS with [Let's Encrypt](https://letsencrypt.org/) using [Caddyfile](https://caddyserver.com/docs/caddyfile)
* Environment Variables - Example TLS configuration in `.env.example.tls`

For more information on configuring TLS, refer to [Configure TLS](../../howto/deploy-to-production/configure-tls.md).

### Synopsis

`eigenx app configure tls`

### Subcommands

`tls`

> Adds TLS configuration to the application.