---
title: EigenCompute Testnet Pricing
sidebar_position: 2
---

The EigenCompute testnet pricing is approximately 3.1X GCP for vCPU hour (TODO - needs updating with $ figure). 

Testnet pricing includes the following instance types: 

| Machine type     | vCPUs   |  Memory  | Architecture |
|------------------|:-------:|:--------:|---------------|
| g1-standard-4t   |    4    |  16 GB   | Intel TDX     |
| g1-standard-8t   |    8    |  32 GB   | Intel TDX     |

:::important Mainnet Pricing
Current EigenCompute pricing is the testnet pricing. Mainnet deployments are available testnet pricing for a promotional
period ending on 12/31/2025.
:::

Pricing is a monthly subscription and you'll be prompted to provide billing details when deploying your app to EigenCompute using the
[`eigenx app deploy` CLI command](../reference/cli-commands/deployment.md). 

Subscriptions are per app, and a separate subscription is required for Sepolia testnet and mainnet.

## Subscribe

To subscribe to EigenCompute: 

```
eigenx billing subscribe
```

The payment portal is displayed.  Enter your payment method details and click the Subscribe button.

The payment successful message is displayed.  Return to the terminal and you have access to [deploy your application](../reference/cli-commands/deployment.md).

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

To talk to the EigenCompute team, (TODO - Add hubspot link).