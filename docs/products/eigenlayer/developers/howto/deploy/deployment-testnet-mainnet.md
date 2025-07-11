---
sidebar_position: 6
title: Prepare for and Deploy to Testnet and Mainnet
---


## Preparing and Deploying to Testnet

1. Package the Operator’s long running executable in a way that is easy for Operators to launch  (via binary, docker container, or similar).

2. Author Testnet user and Operator documentation, including:
   - Trust Modeling: clarify any trust assumptions in your architecture to your users. Identify the components that are trusted (centralized) and untrusted (decentralized, trustless).
   - Operator instructions to install, register, deregister.
   - End user (aka “Consumer”) instructions to utilize your AVS service.
   - Communication channels that will be utilized for AVS upgrades.
   - Describe Operator monitoring tooling available, such as GraFana dashboards, log files or similar.

3. Follow the [AVS Developer Security Best Practices](../../reference/avs-developer-best-practices.md) and [Key Manage Considerations for Developers](../../reference/avs-developer-best-practices.md#key-management-recommendation-for-developers).

4.  Follow the [Testnet Dashboard Onboarding instructions](../publish/onboard-avs-dashboard.md).

5. Implement Rewards distributions per the instructions [here](../build/submit-rewards-submissions.md).


## Preparing and Deploying to Mainnet

1. Smart Contract Auditing: have your codebase audited with at least 2-3 reputable audit firms.
2. Finalize User and Operator documentation.
3. Follow the [Mainnet Dashboard Onboarding instructions](../publish/onboard-avs-dashboard.md#mainnet-dashboard-onboarding).