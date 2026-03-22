---
title: Billing
sidebar_position: 3
---

Deploying an EigenCompute application to Sepolia testnet or mainnet requires an EigenCompute subscription. EigenCompute subscriptions
can be paid by credit card or EigenCompute credits can be purchased with USDC.

EigenCompute has metered billing at 0.177c per vCPU hour so you pay for what you use. All new and migrating customers 
receive a $100 credit.

:::important Mainnet Pricing
Current EigenCompute pricing is the testnet pricing. Mainnet deployments are available testnet pricing for a promotional
period ending on 01/31/2026.
:::

Up to 10 apps each can be deployed on Sepolia testnet and mainnet per subscription (that is, 20 apps total can be deployed per subscription per [ecloud CLI authentication key](../concepts/keys-overview.md)).

:::note Early Access Customers
Early Access Customers will continue to get free access until the end of the year. Starting January 2026, we will begin turning off active applications without a subscription.
:::

## Subscribe

To subscribe to EigenCompute: 

```
ecloud billing subscribe
```

Choose whether to subscribe with credit card or by purchasing credits with USDC. 

If you select credit card, the payment portal is displayed.  Enter your payment method details and click the Subscribe button.

If you select purchase credits with USDC, the EigenCompute wallet address and balance is displayed. If the wallet contains USDC,
specify the amount to spend on credits. If the wallet does not contain USDC, you are prompted to send USDC to the wallet.

The payment successful message is displayed.  Return to the terminal and you have access to [deploy your application](../reference/ecloud-cli/compute/app.md#deploy).

## Cancel a Subscription

To cancel an active subscription:

```
ecloud billing cancel
```

The deployed application is terminated and a refund for the remaining period of the month issued to the payment method you provided
when subscribing.

## Manage Billing

To view current subscriptions:

```
ecloud billing status
```

The subscription status is displayed and a link provided to manage payment methods and view subscription transactions.

## Top up with USDC

To purchase EigenCompute credits with USDC:

```
ecloud billing top-up
```

The EigenCompute wallet address and balance is displayed. If the wallet contains USDC, specify the amount to spend on credits. 
If the wallet does not contain USDC, you are prompted to send USDC to the wallet.

## Support

For support, join our [Discord channel](https://discord.com/channels/1089434273720832071/1187153894564966480).

To talk to the EigenCompute team, complete [this form](https://ein6l.share.hsforms.com/2L1WUjhJWSLyk72IRfAhqHQ) and a member of the team will reach out to discuss your project.