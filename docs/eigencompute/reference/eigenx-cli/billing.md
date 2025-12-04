---
title: billing
sidebar_position: 4
---

EigenCompute requires a [subscription for deploying applications](../../get-started/billing). Use these commands to manage billing and subscription.

## Available Commands

* [subscribe](#subscribe)
* [cancel](#cancel) 
* [status](#status)

## Global Options

The `--environment` option is available for all `billing` subcommands:

`--environment <env>` (string)

> Deployment environment to use. One of `mainnet-alpha` and `sepolia`.

## subscribe

Redirects to the payment portal to supply a payment method for billing. For more information,
refer to [Subscribe](../../get-started/billing#subscribe).

### Synopsis

`eigenx billing subscribe [global options]`

## cancel

Cancel an existing subscription. For more information, refer to [Cancel a Subscription](../../get-started/billing#cancel-a-subscription).

### Synopsis

`eigenx billing cancel [global options]`

## status

Display current billing status. For more information, refer to [Manage Billing](../../get-started/billing#manage-billing).

### Synopsis

`eigenx billing status [global options]`

