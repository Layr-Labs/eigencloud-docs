---
title: Architecture
sidebar_position: 3
---

EigenCompute enables developers to deploy verifiable applications in Trusted Execution Environments (TEEs). Each app receives
its own wallet serving as its cryptographic identity, allowing it to sign transactions, hold funds, and operate
autonomously.

When you deploy an EigenCompute app you get:

* A unique private key derived deterministically from your app's ID.
* Hardware-isolated execution via Intel TDX trusted execution environments.
* Cryptographic attestation proving which exact Docker image (by digest) has access to the key.
* Autonomous capabilities - your app can hold funds, sign transactions, and operate independently.

## Application Deployment Flow 

The deployment flow ensures only verified, attested apps are deployed to TEEs, and can access the app wallet keys.

![Deployment Flow](/img/eigencompute-deployment-flow.png)

The EigenCompute components are:

* Developer tools to publish digest metadata on Ethereum:
  - Build container image using EigenX CLI.
  - Sign image digest with authentication keys.
  - Push image to container registry.
* EigenLabs Coordinator to manage infrastructure:
  - Listens for onchain app creation.
  - Deploys image to TEE.
* [Intel  TDX (Google Cloud)](https://cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview) to execute app with unique wallet key:
  - Deploys verified app inside TEE.
  - Requests keys from KMS.
* KMS to manage onchain verification and key delivery:
  - Verifies TEE attestation and onchain whitelisted code match.
  - Provides app keys after successful verification.

:::note KMS Operator in Mainnet Alpha Phase
In the Mainnet Alpha phase, EigenLabs are running a single KMS node for all EigenCompute apps in [Google Cloud Platform](https://cloud.google.com/kms/docs/key-management-service).
Threshold KMS for distributed key management is in development.
:::

