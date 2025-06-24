---
title: EigenCloud Roadmap
sidebar_position: 2
---

## Pillars of EigenCloud 

We organize the roadmap around four major pillars:
1. **Developer Platform**: Tooling, CLIs, SDKs, APIs, and infrastructure to build, test, ship, and manage AVSs and Apps.
2. **Trusted Primitives**: 1st party services to power verifiable applications.
3. **The EIGEN Token**: The EigenCloud is built on the EIGEN token. The EIGEN token’s forking design enables the ability to add cryptoeconomic security to the entire platform.
4. **Commitment Infrastructure**: Make trust-minimized security and cryptoeconomic guarantees easily available for builders creating verifiable apps and services. 

[![](/img/eigencloud-roadmap.png)](/img/eigencloud-roadmap.png)

### Eigen Developer Platform: Apps & AVS

Our goal is to make developing AVSs and onchain Apps/integrations feel like building on a modern cloud stack; low-lift, modular,
and intuitive. Through our DevKit CLI, SDKs, and extensibility system, developers can scaffold, test, and release services with
minimal setup. Future updates will integrate richer tooling (for example, AI-driven codegen, templates, plugin marketplaces), while
enhancing telemetry, packaging, and observability. Our north star is to empower developers to build scalable, high-quality
AVSs and apps without needing deep protocol expertise. Work includes:
* Extensible DevKit CLI for AVS and App creation, task simulation, and packaging
* SDKs supporting slashing, rewards, task execution
* Plugin and template ecosystem providing customization and extensibility
* Release management with artifact versioning and publishing
* Unified observability stack with logging and monitoring
* Quickstart verifiable apps and samples
* Developer portal for easier integration and usability.

### Eigen Primitives: Verifiable Blockspace

To make verifiability easy to adopt, EigenCloud provides foundational, 1st party services that AVSs and applications can plug into.
These primitives, [EigenDA](../products/eigenda/core-concepts/overview.md), [EigenCompute](../products/eigencompute/eigencompute-overview.md), and [EigenVerify](../products/eigenverify/eigenverify-overview.md), deliver critical capabilities, such as data availability, offchain
compute, and adjudication. By making these services developer-accessible, we enable new classes of verifiable applications,
reduce developer lift, and promote ecosystem standardization. Work includes:
* EigenDA Throughput: Scale EigenDA throughput from 50 mb/s to hundreds of mb/s
* EigenDA Latency: Reduce EigenDA latency from 10s to less than a second
* Preview release of EigenCompute for containerized, verifiable compute
* Preview release of EigenVerify for fraud and dispute resolution
* Finality gadgets, sequencing layers, and modular coordination for rollups
* Cross-chain receipt proof and verification tooling.

### EIGEN Token: Forking for economic security 

The EIGEN token enables the creation of expressive cloud services for both 3P AVS built on the developer platform and the 
first party primitives. The EIGEN token gives the EigenCloud the ability to fork if the operators running the Eigen primitives
collude to cause economic harm to the applications running on the cloud.

Similar to an L1 token, the EIGEN token is valuable because of its utility in staking and securing these first party primitives
and third party services. Unlike an L1, the EIGEN token benefits significantly from a shared distribution of AVSs built by market
participants to apps across a broad ecosystem of chains. 

### EigenLayer Protocol: Commitment Infrastructure

[EigenLayer](../products/eigenlayer/concepts/eigenlayer-overview.md) is the backbone of EigenCloud and the token is its cryptoeconomic layer with staking, delegation, and enforcement mechanisms
providing AVSs with flexible, programmable trust guarantees. This programmable trust layer is what allows developers to delegate
security without managing validator sets, while still enforcing correct behavior and punishing misbehavior, on any chain. We’re
building support for multichain delegation, long-term commitments, and expressive enforcement, all underpinned by transparent
slashing and reward routing. These improvements unlock more granular, secure, and configurable deployments for AVS developers,
while empowering operators and stakers with more choice and clarity. Work includes:
* Multi-chain support to launch, integrate, and consume verifiable AVSs on any chain
* Slashing fund redistribution (beyond burns)
* New token tools and reward types, commitments, and offerings.
