---
sidebar_position: 1
title: Overview
---

The following diagram shows:
* The contracts AVS developers must interact with, or specify, to build a multichain AVS
* Offchain components AVS developers must implement to create and verify certificates. In this diagram, the offchain components
are represented by the AVS aggregator.

<img src="/img/implement-multichain.png" alt="Multichain Implementation Overview"/>

The multichain framework is highly flexible. The AVS must implement functionality to aggregate Operator
signatures to create a certificate. Additional design decisions include: 
* How consumers receive or obtain certificates.
* If custom logic is added to the CertificateVerifier.

Onchain components of the multichain framework can also be used by AVS consumers to implement custom logic when verifying
certificates.

:::tip
Using the Hourglass template provides a multichain implementation significantly reducing implementation effort.
:::

Refer to the following for more information: 
* [Implementing a multichain AVS](avs-developer/implement-multichain.md) 
* [Consuming multichain services](avs-consumer/multichain-verification-consumers.md).

Refer to the concept material for information on: 
* [Multichain overview](../../../concepts/multichain/multichain-overview.md)
* [Architecture](../../../concepts/multichain/multichain-architecture.md)
* [Stake weighting for the Operator Table Calculator](../../../concepts/multichain/stake-weighting.md)
* [Certificates](../../../concepts/multichain/certificates.md).