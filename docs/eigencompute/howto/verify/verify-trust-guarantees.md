---
title: Verify Trust Guarantees
sidebar_position: 1
---

Use the Verifiability Dashboards for [mainnet](https://verify.eigencloud.xyz/) and [Sepolia testnet](https://verify-sepolia.eigencloud.xyz/) to verify [trust guarantees enabled by EigenCompute](../../concepts/trust-guarantees.md). 

## View Verifiability Data in Dashboard

To view verifiability data for an application using the dashboard: 

1. Go to the Verifiability Dashboard for [mainnet](https://verify.eigencloud.xyz/) or [Sepolia testnet](https://verify-sepolia.eigencloud.xyz/).
2. In the _Deployed Applications_ field, search for the application by name or application ID.
3. The verifiability data for the application is displayed.  The data includes: 
   * Application ID and Creator address.
   * Release history with Docker Image Digests. 
   * TEE attestations for releases. There is a TEE attestation displayed for each release.
   * Logs for running application (if configured as publicly visible).
   * Wallet addresses for the application.

:::note
Whether logs are visible publicly is configured by the application developer using the `--log-visibiilty` option on the [`eigenx app deploy`](../../reference/cli-commands/deployment.md#eigenx-app-deploy) and
[`eigenx app upgrade`](../../reference/cli-commands/deployment.md#eigenx-app-upgrade) commands.
:::

## View Verifiability Data Onchain

The dashboard provides a convenient way to view releases and application status. The release history and application status
can also be verified onchain.

To monitor application releases onchain, monitor `AppUpgraded` events on the `AppController` contract. The `AppUpgraded` 
events include the application ID and the associated release data (imageDigest, registryURL, upgrade time, public and encrypted environment variables).

To monitor application status onchain, monitor the `AppCreated`, `AppStarted`, `AppStopped`, `AppTerminated`, and `AppTerminatedByAdmin`
events on the `AppController` contract.

AppController contract deployment addresses are published in the [`eigenx-contracts`](https://github.com/Layr-Labs/eigenx-contracts) repository for [Mainnet](https://github.com/Layr-Labs/eigenx-contracts/blob/master/script/deploys/mainnet-alpha/deployment.json) and [Sepolia testnet](https://github.com/Layr-Labs/eigenx-contracts/blob/master/script/deploys/sepolia-prod/deployment.json).