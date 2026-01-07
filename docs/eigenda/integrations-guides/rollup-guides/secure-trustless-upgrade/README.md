---
sidebar_position: 1
title: Secure Trustless Upgrade Overview
---

# Secure Trustless Upgrade

This document outlines procedures for upgrading rollup integrations. For a complete understanding of how to securely upgrade the rollup derivation pipeline, see the [spec](https://layr-labs.github.io/eigenda/integration/spec/7-secure-upgrade.html).

If you are using EigenDA with v2 or v3 certs and want to upgrade to v4 or the latest integration, this guide covers key concepts (cert verifier, cert verifier router, and activation block number), then walks through specific upgrade scenarios, procedures, and constraints.

## CertVerifier, CertVerifier Router and Activation Block Number

A cert verifier is a contract that determines if a DA cert is sufficiently stored and attested by the EigenDA network. The DA cert is a versioned data structure containing all necessary information for verification. See the EigenDA [spec](https://layr-labs.github.io/eigenda/integration/spec/4-contracts.html#eigendacertverifier) for details.

A cert verifier router is a key-value map from block numbers to deployed cert verifier contract addresses. The key is called the activation block number (ABN) because it determines when each CertVerifier is activated. See the EigenDA [spec](https://layr-labs.github.io/eigenda/integration/spec/4-contracts.html#eigendacertverifierrouter) for details.

> If your rollup is using V2 or V3 DA certs, you are most likely using an EigenLabs-deployed router or a cert verifier directly. We strongly recommend deploying your own router.

### CertVerifier Router Deployment

Before deploying a CertVerifier Router, you must first have a cert verifier deployed. If not, refer to the [EigenDA V2 Cert Verifier Deployer](https://github.com/Layr-Labs/eigenda/blob/26709ca468f176eb23c09f52a3122e5e18681c7d/contracts/script/deploy/certverifier/README.md#eigenda-v2-cert-verfier-deployer) guide. Use the latest [release](https://github.com/Layr-Labs/eigenda/releases).

> EigenDA V2 (Blazer) is the upgraded network supporting V2 and later cert versions (V3, V4). The secure upgrade does not support the EigenDA V1 network, which has been deprecated in favor of V2.

Deploy a router and configure the default certVerifier by following the [guide on GitHub](https://github.com/Layr-Labs/eigenda/blob/26709ca468f176eb23c09f52a3122e5e18681c7d/contracts/script/deploy/router/README.md).

When processing a DA cert, the router automatically extracts the reference block number and selects the appropriate cert verifier implementation from the key-value map.

It is **strongly recommended** that rollups deploy their own router. If using an EigenLabs-deployed router, the rollup must follow EigenLabs' upgrade schedule. For example, if EigenLabs upgrades the router on January 1st but your rollup needs to upgrade in March, L2 consensus nodes that did not upgrade before January 1st will **halt**. Even if both the batcher and L2 consensus nodes run the older version, the contract can reject older-version certs once upgraded. This is intentional to prevent malicious batchers from submitting older certs that might contain bugs.

## Upgrading Procedures

This section describes upgrading from V3 to V4 certs and from V2 to V4 certs.

### Scenario 1 - Upgrading from V3 to V4 Cert

**Context:** The batcher is posting V3 certs to the L1 inbox; EigenDA proxies on L2 consensus nodes are processing V3 certs from the L1 inbox. Assume a router is already deployed, the current L1 block number is 24136054 (Jan 1, 2026), and the upgrade is scheduled at L1 block number 24560854 (approximately March 1).

#### Procedures
1. Find an EigenDA release to upgrade to.
2. Deploy the new cert verifier implementation from the release.
3. Use `addCertVerifier(uint32 abn, address certVerifier)` to register the cert verifier with its activation block number (ABN). Set `abn` to `24560854` and `certVerifier` to the deployed cert verifier address.
4. Announce the upgrade at `24560854` and encourage L2 consensus nodes to upgrade to the proxy release before `24560854`.
5. Upgrade the batcher at any time before `24560854`.

Even after the proxy upgrade, the batcher's proxy will continue creating V3 certs; it automatically switches to V4 certs only when the reference block number (RBN) for the blob is at or after `24560854`.

At `24560856` (two L1 blocks after activation), the RBN for the dispersed blob may still be earlier than the activation time. The RBN is chosen by the EigenDA disperser 75 blocks below the current L1 block number, so the batcher may still disperse V3 certs even after the L1 block number has passed the activation block number.

To avoid submitting V3 certs entirely after the activation number, use the manual method described in Scenario 2.

### Scenario 2 - Upgrading from V2 to V4 Cert

**Context:** Same as Scenario 1, except the batcher is posting V2 certs to the L1 inbox.

The current EigenDA proxy does not support submitting V2 certs. There are two possible upgrade solutions:
- (i) Add a feature to the proxy to construct V2 certs
- (ii) Manually upgrade the batcher after the activation block number

We describe procedures for the second method. If the code for option (i) is implemented, the procedures match Scenario 1 exactly.

1. Find an EigenDA release to upgrade to.
2. Deploy the new cert verifier implementation from the release.
3. Use `addCertVerifier(uint32 abn, address certVerifier)` to register the cert verifier with its activation block number (ABN). Set `abn` to `24560854` and `certVerifier` to the deployed cert verifier address.
4. Announce the upgrade at `24560854` and encourage L2 consensus nodes to upgrade to the proxy release before `24560854`.
5. Stop the batcher's proxy at or after `24560929`.
6. Upgrade the proxy.

`24560929` is chosen instead of `24560854` because the disperser picks the RBN by subtracting [75](https://github.com/Layr-Labs/eigenda/blob/72f377a19a301f30eecad1b856532b4cc4fc4ffc/disperser/controller/controller_config.go#L185) from the current L1 block number.

Consider the case when the batcher stopped at `24560940`, and such that there is a V2 cert submitted at `24560860` after the activation block number. All upgraded L2 consensus nodes will reject the V2 cert by ignoring it.

If the batcher restarted earlier than `24560929`, the batcher software might either crash or produce a V3 cert, which can only be processed by L2 consensus nodes that have upgraded to the latest release.