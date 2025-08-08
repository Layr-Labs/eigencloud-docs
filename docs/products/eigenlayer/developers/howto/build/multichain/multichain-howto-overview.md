---
sidebar_position: 1
title: Overview
---

The following diagram shows:
* The contracts AVS developers interact with, or specify, to build a multichain AVS
* Offchain components AVS developers implement to create and verify certificates. 

In this diagram, the AVS aggregator and the Certificate Storage illustrate one possible approach to implementing 
multichain verification. The architecture of these components is determined and implemented by the AVS and not part of
the multichain verification framework. For a reference implementation of these components, refer to the [Hourglass template](https://github.com/Layr-Labs/hourglass-avs-template).

<img src="/img/implement-multichain.png" alt="Multichain Implementation Overview"/>

The multichain framework is highly flexible and allows AVS developers to: 
* Support single or multiple Operators, with signature aggregation for multiple Operators.
* Choose between different certificate delivery patterns.
* Customize verification logic, based on trust models and service needs.

Onchain components of the multichain framework can also be used by AVS consumers to implement custom logic when verifying
certificates.

:::tip
Using the [Hourglass template](https://github.com/Layr-Labs/hourglass-avs-template) provides a multichain implementation that significantly reduces implementation effort.
:::

To get started implementing multichain verification, refer to [Configure a Multichain AVS](configure-multichain.md).

Refer to the concept material for information on: 
* [Multichain overview](../../../concepts/multichain/multichain-overview.md)
* [Architecture](../../../concepts/multichain/multichain-architecture.md)
* [Stake weighting for the Operator Table Calculator](../../../concepts/multichain/stake-weighting.md)
* [Certificates](../../../concepts/multichain/certificates.md).