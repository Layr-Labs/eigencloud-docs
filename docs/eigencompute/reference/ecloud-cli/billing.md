---
title: billing
sidebar_position: 3
---

EigenCompute requires a [subscription for deploying applications](../../get-started/billing). Use these commands to manage billing and subscription.

## Available Commands

* [subscribe](#subscribe)
* [cancel](#cancel) 
* [status](#status)
* [top-up](#top-up)

## Global Options

The following options are available for all `billing` subcommands:

`--private-key=<value>` (string)

> Authentication key for the billing subscription.

`--product=<option>` (string)

> Product for which to apply the billing subscription. Default and only option at this stage is `compute`.

`--verbose` (boolean) 

> Enable verbose logging. Default is `false`.

## subscribe

Redirects to the payment portal to supply a payment method for subscription. For more information,
refer to [Subscribe](../../get-started/billing#subscribe).

### Synopsis

`ecloud billing subscribe [global options]`

## cancel

Cancel an existing subscription. For more information, refer to [Cancel a Subscription](../../get-started/billing#cancel-a-subscription).

### Synopsis

`ecloud billing cancel [-force] [global options]`

### Options 

`--force`

> Skip confirmation prompt.

## status

Display current billing status. For more information, refer to [Manage Billing](../../get-started/billing#manage-billing).

### Synopsis

`ecloud billing status [global options]`

## top-up

Purchase EigenCompute credits with USDC (on-chain), credit card, or x402. For more information, refer to
[Top up with USDC](../../get-started/billing#top-up-with-usdc) and [Top up with x402](../../get-started/billing#top-up-with-x402).

### Synopsis

`ecloud billing top-up [--method usdc|card|x402] [--amount <value>] [global options]`

### Options

`--method=<option>` (string)

> Payment method: `usdc` (on-chain transfer), `card` (credit card), or `x402` (USDC payment over x402, no gas required). Prompted if omitted.

`--amount=<value>` (number)

> Amount to spend, in whole dollars. The minimum x402 purchase is $5.

`--chain=<option>` (string)

> Network for on-chain USDC payment: `ethereum` or `base`. Applies to `--method usdc` only.

`--creator=<value>` (string)

> x402 only: creator address whose shared credit pool to top up. Defaults to your wallet. Mutually exclusive with `--app`.

`--app=<value>` (string)

> x402 only: app address to credit directly (isolated billing). Mutually exclusive with `--creator`.