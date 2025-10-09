---
title: EigenCompute Overview
sidebar_position: 1
---

## What is EigenCompute? 

EigenCompute is a verifiable offchain compute service that enables developers to run complex, long-running agent logic outside
of a smart contract while maintaining the integrity and security of the onchain environment. The mainnet alpha release of 
EigenCompute allows developers to upload app or agent logic as a Docker image, which is executed within a secure TEE 
(Trusted Execution Environment).

## Why Build with EigenCompute?

EigenCompute enables you to build verifiable applications without thinking about determinism, solidity, or how to build a 
consensus mechanism.  To ship a verifiable application, Simply containerize your application using Docker and upload your 
application to EigenCompute.

Use EigenCompute to build applications such as:
- Agents & AI: Build fully verifiable agents. Create agents that judge outcomes, trading bots, verifiable NPCs in games, and much more.  
- Verifiable social media: EigenCompute enables social media platforms to create verifiable ranking algorithms. 
- Verifiable & scalable gaming: EigenCompute enables running high performance games in containers with tokens stored onchain.
- Scalable DeFi: EigenCompute enables you to build advanced ML based, or DeFi products with scalable compute. 

The benefits of building with EigenCompute include: 
- User trust: EigenCompute helps your users trust you. With our upcoming user dashboard, users will be able to verify the attestation flow themselves.
- Easy deployment & development: Write your business logic in a Docker container and upload it easily using the EigenX CLI.
- Web2 programmability & scale:  EigenCompute offers VMs up to 177vCPU cores and 756GB of RAM.

## How EigenCompute Works

The first version of EigenCompute, EigenCompute TEE, enables developers to provision verifiable execution from a TEE-based environment. 
TEEs provide an attestation that a specified source image was used to generate a specific output. When the attestation is
tied to an onchain smart contract, it can be guaranteed that the output moving tokens was generated from within the TEE.

## Roadmap

The EigenCompute vision is to enable offchain execution systems to provide similar guarantees to blockchain smart contracts, including:

- Verifiable execution
- Forced inclusion
- Liveness guarantees
- Upgrade delays.

## Next steps 

* [Get Started using EigenCompute](../howto/get-started.md)
* [Connect with our team](https://onboarding.eigencloud.xyz/)

