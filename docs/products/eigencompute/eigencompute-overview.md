---
title: EigenCompute Overview
sidebar_position: 4
---

:::tip Get Started
Follow the [EigenX CLI documentation](https://github.com/Layr-Labs/eigenx-cli) to deploy your application to EigenCompute.
:::

## Overview
Build verifiable applications without thinking about determinism, solidity, or how to build a consensus mechanism. Simply containerize your application using docker and upload your application to EigenCompute to ship a verifiable, unstoppable application. 

**Our mission is to enable any developer to build scalable & verifiable applications, so that any developer anywhere in the world can build trusted applications.** 
We built EigenCompute because we believe that verifiable applications unlock trust for everyone. DeFi lets builders around the world move trillions of dollars onchain without enormous compliance departments because anyone can verify the code. But blockchain verification suffers from scalability and programmability problems. Five cents of Web2 compute can cost thousands, if not tens of thousands on a blockchain. This makes verifiable agents, and verifiable high scale applications impossible onchain. 

## Use Cases

Builders are leveraging EigenCompute to build applications such as:
- **Agents & AI**: Build fully verifiable agents. Create agents which judge outcomes, trading bots, verifiable NPCs in games and much more.  
- **Verifiable Social Media**: EigenCompute lets social media platforms create verifiable ranking algorithms. 
- **Verifiable & Scalable Gaming**: EigenCompute lets you run high performance games within containers. Tokens can be stored onchain, so game developers can run tournaments. 
- **Scalable DeFi**: EigenCompute lets you build advanced ML based, or DeFi products. 

## How EigenCompute Works
Eigen Compute's vision is to give offchain execution systems similar guarantees to blockchain smart contracts, including:

- Verifiable execution
- Forced inclusion
- Liveness guarantees
- Upgrade delays

The first version of EigenCompute, **EigenCompute TEE**, enables developers to provision verifiable execution from a TEE-based environment. TEEs provide an attestation that a particular source image was used to generate a particular output. When this attestation is tied to an onchain smart contract, it can be guaranteed that the output moving tokens was only generated from within the TEE. 

## Benefits
- **User Trust**: EigenCompute helps your users trust you ~ because they don't have to. With our upcoming user dashboard, users will be able to verify the attestation flow themselves. 
- **Easy deployment & development**: Write your business logic in a docker container. Upload it easily using our CLI
- **Web2 Programmability & scale**:  VM offerings up to 177vCPU cores and 756GB of RAM

## Get Started in 5 Minutes

To build on EigenCompute, all you need to do is:

1. Place your application in a Docker container
2. Upload it to EigenCompute using our EigenX CLI

It's that simple to ship a verifiable, unstoppable application!

For detailed instructions, see the [EigenX CLI documentation](https://github.com/Layr-Labs/eigenx-cli).