---
sidebar_position: 1
title: AVS Overview
---


## What is an Autonomous Verifiable Service (AVS)?

An Autonomous Verifiable Service (AVS) on EigenLayer is a decentralized service built on Ethereum that provides custom verification mechanisms of off-chain operations. Please see the [Intro to EigenLayer](https://docs.eigenlayer.xyz/eigenlayer/overview/) for background context on the broader EigenLayer ecosystem.

An AVS is composed of on-chain contracts for verification and an off-chain network of Operators. Operators execute the service on behalf of the AVS and then post evidence of their execution on-chain to the AVS contracts. Tasks can be initiated via on-chain contracts, off-chain via direct communication with the Operators, or via a task aggregator entity.

The design of the off-chain execution and on-chain verification is entirely flexible based on the needs of the AVS developer. 
- If the Operators perform tasks properly, the AVS can autonomously distribute rewards.
- If the Operators perform tasks maliciously, their delegate stake can be slashed autonomously by the AVS, and the Operator can be removed from the Operator set.

![AVS Architecture](/img/avs/avs-architecture-v2.png)


## Why Build an AVS?

Launching new Web3 projects requires substantial time and effort to bootstrap capital and operators. Builders should focus on their core product differentiators rather than bootstrapping economic security. Building an Autonomous Verifiable Service (AVS) on EigenLayer offers enhanced security, decentralization, and cost efficiency by utilizing Ethereum’s staking mechanism through restaking. This allows developers to focus more on their product’s core value and innovation without the significant overhead of setting up a new consensus mechanism or validator networks from scratch.

The key benefits of building an AVS on EigenLayer include:
- Security via Restaking: leverage Ethereum’s staking mechanism to secure your service.
- Focus on your project's unique value: spend less time and resources accumulating economic security from scratch.
- Bootstrap your Operator network: quickly access a large network of experienced Operators.
- Decentralization and Trust: build on trust-minimized, decentralized infrastructure.
- Composability: seamlessly integrate with the broader Ethereum ecosystem.


## What Can You Build as an AVS?

The scope of AVS design is broad. It includes **any off-chain service** that can be verified on-chain. This flexibility allows AVS developers to design custom verification mechanisms suited to the unique requirements of their service. The only requirement is that some evidence for the off-chain service’s execution is posted on-chain to enable verification of the service.

Examples of these services include rollup services, co-processors, cryptography services, zk Proof services, and more.

![AVS Categories](/img/avs/avs-categories.png)


## Get in Touch

If you would like to discuss your ideas to build an AVS on EigenLayer, submit your contact information via [this form](https://www.eigencloud.xyz/contact) and we'll be in touch shortly.
