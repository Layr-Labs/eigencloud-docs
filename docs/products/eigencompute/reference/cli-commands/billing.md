---
title: Billing
sidebar_position: 4
---

# Billing Commands

EigenCompute requires a [subscription for deploying applications](../../get-started/billing). Use these commands to manage billing and subscription.

## Commands Overview

| Command                    | Description                                    | 
|----------------------------|------------------------------------------------|
| `eigenx billing subscribe` | Subscribe to start deploying apps              | 
| `eigenx billing cancel`    | Cancel subscription                            | 
| `eigenx billing status`    | Show current authentication status and address | 

## Subcommands

### subscribe

Redirects to the payment portal to supply a payment method for billing. For more information,
refer to [Subscribe](../../get-started/billing#subscribe).

| Flag                  | Description                                                                |
|-----------------------|----------------------------------------------------------------------------|
| `--env <environment>` | Specify environment for the subscription.  Default is current environment. |

### cancel

Cancel an existing subscription. For more information, refer to [Cancel a Subscription](../../get-started/billing#cancel-a-subscription).

| Flag                  | Description                                                                |
|-----------------------|----------------------------------------------------------------------------|
| `--env <environment>` | Specify environment for the subscription.  Default is current environment. |

### status

Display current billing status. For more information, refer to [Manage Billing](../../get-started/billing#manage-billing).

| Flag                  | Description                                                                |
|-----------------------|----------------------------------------------------------------------------|
| `--env <environment>` | Specify environment for the subscription.  Default is current environment. |