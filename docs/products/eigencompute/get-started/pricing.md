---
title: EigenCompute Testnet Pricing
sidebar_position: 2
---

Deploying an EigenCompute application to Sepolia testnet or mainnet requires an EigenCompute subscription.

One app can be deployed per subscription (that is, you can have one subscription per [eigenx CLI authentication key](../concepts/keys-overview.md)). 

Testnet pricing includes the following instance types: 

| Machine type     | vCPUs   |  Memory  | Architecture  | Monthly Subscription |
|------------------|:-------:|:--------:|---------------|----------------------|
| g1-standard-4t   |    4    |  16 GB   | Intel TDX     | USD$86.14            |
| g1-standard-8t   |    8    |  32 GB   | Intel TDX     | USD$172.28           |         

:::important Mainnet Pricing
Current EigenCompute pricing is the testnet pricing. Mainnet deployments are available testnet pricing for a promotional
period ending on 12/31/2025.
:::

## Subscribe

To subscribe to EigenCompute: 

```
eigenx billing subscribe
```

The payment portal is displayed.  Enter your payment method details and click the Subscribe button.

The payment successful message is displayed.  Return to the terminal and you have access to [deploy your application](../reference/cli-commands/deployment.md).

:::tip Specifying Sepolia Testnet or Mainnet
Use the [`--env` option](../reference/cli-commands/billing.md) to specify the environment for the subsciption.  The default is
the current environment. The `--env` option is available for all `billing` subcommands. 
::: 

## Cancel a Subscription

To cancel an active subscription:

```
eigenx billing cancel
```

The deployed application is terminated and a refund for the remaining period of the month issued to the payment method you provided
when subscribing.

## Manage Billing

To view current subscriptions:

```
eigenx billing status
```

The subscription status is displayed and a link provided to manage payment methods and view subscription transactions.

## Support

For support, join our Discord channel (TODO - Add discord link).

To talk to the EigenCompute team, complete [this form](https://ein6l.share.hsforms.com/2L1WUjhJWSLyk72IRfAhqHQ) and a member of the team will reach out to discuss your project.