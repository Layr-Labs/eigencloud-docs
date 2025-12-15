---
title: billing
sidebar_position: 3
---

EigenCompute requires a [subscription for deploying applications](../../get-started/billing). Use these commands to manage billing and subscription.

## Available Commands

* [subscribe](#subscribe)
* [cancel](#cancel) 
* [status](#status)

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

