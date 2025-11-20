---
title: EigenCompute Overview
sidebar_position: 1
---

## What is EigenCompute? 

EigenCompute enables developers to deploy verifiable applications: containerized services that receive their own cryptographic identity, allowing them to hold funds, sign transactions, and operate autonomously.

EigenCompute is a verifiable offchain compute service that enables developers to run complex, long-running agent logic outside
of a smart contract while maintaining the integrity and security of the onchain environment. The mainnet alpha release of 
EigenCompute allows developers to upload app or agent logic as a Docker image, which is executed within a secure TEE 
(Trusted Execution Environment).

## Why Build with EigenCompute?

Traditional applications require users to trust developers with both code execution and key management. Smart contracts eliminated
this trust requirement but introduced severe constraints: prohibitive gas costs, limited computational power, and restricted 
programming models.

EigenCompute provides a third path: applications that offer cryptographic guarantees about their behavior while retaining the 
flexibility and performance of traditional computing.

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

When you deploy to EigenCompute, your application gets:

1. Hardware-isolated execution: Your app runs inside Intel TDX, a secure enclave with encrypted memory that generates cryptographic
proof of the exact Docker image running inside.

2. A dedicated wallet: Each application receives a unique wallet. Only that specific app, running the verified Docker image 
in the enclave, can retrieve the private key.

3. Secure secret management: Environment variables that are encrypted locally and only accessible within the TEE.

4. Onchain deployment record: Every deployment is permanently recorded on-chain by its Docker digest, creating an immutable audit trail.

5. Network access: Optionally [expose ports](../howto/configure/expose-ports.md) for HTTP endpoints, or [configure HTTPS](../get-started/quickstart.md#tlshttps-setup-optional) with a custom domain.

This creates truly autonomous applications - code that holds its own funds with cryptographic proof of what it will do with them.

## Roadmap

The EigenCompute vision is to enable offchain execution systems to provide similar guarantees to blockchain smart contracts, including:

- Verifiable execution
- Forced inclusion
- Liveness guarantees
- Upgrade delays.

## Next steps 

* [Get Started using EigenCompute](../get-started/demo)
* [Use the quickstart](../get-started/quickstart.md)
* Read the EigenCompute: 
    * [Architecture Guide](https://github.com/Layr-Labs/eigenx-cli/blob/main/docs/EIGENX_ARCHITECTURE.md) - Deep dive into how EigenCompute works
    * [Core Concepts](https://github.com/Layr-Labs/eigenx-cli/blob/main/docs/EIGENX_CONCEPTS.md) - Understanding keys, security, and best practices
* [Connect with our team](https://onboarding.eigencloud.xyz/)


