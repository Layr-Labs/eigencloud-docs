---
sidebar_position: 1
title: Secure Trustless Upgrade Overview
---

# Secure Trustless Upgrade

This document outlines context and procedures to upgrade Rollup integration. For a more complete understanding to securely upgrade the rollup derivation pipeline, please check out the [spec](https://layr-labs.github.io/eigenda/integration/spec/7-secure-upgrade.html).

If you are a rollup that's using EigenDA with v2 or v3 cert, and you want to use v4 or the latest integration code, this is the page for you. We will first introduce key concepts including cert verifier, cert verifier router and activation block number. Then we'll dive into specific scenarios, procedures, and constraints when upgrading.

## CertVerifier, CertVerifier Router and Activation Block Number

A cert verifier is a contract that determines if a DA cert is sufficiently stored and attested by the EigenDA network. The DA cert is a versioned data structure, that contains all the necessary information for determining the correctness. Please also check the EigenDA [spec](https://layr-labs.github.io/eigenda/integration/spec/4-contracts.html#eigendacertverifier) for more information.

A cert verifier router is a key-value map from a block number to a contract address of some deployed cert verifier. We also refer the key as the activation block number (ABN), because it determines when any CertVerifier is activated. Please also check the EigenDA [spec](https://layr-labs.github.io/eigenda/integration/spec/4-contracts.html#eigendacertverifierrouter) for more information.

> If your rollup is using V2 or V3 DA certs, you are most likely using an EigenLabs deployed router or using a cert verifier directly. We strongly recommend you to deploy your own router.

### CertVerifier Router Deployment

Before deploying a CertVerifier Router, you must first have a cert verifier deployed. If not, please refer to the guide for [EigenDA V2 Cert Verfier Deployer](https://github.com/Layr-Labs/eigenda/blob/26709ca468f176eb23c09f52a3122e5e18681c7d/contracts/script/deploy/certverifier/README.md#eigenda-v2-cert-verfier-deployer). It is best to pick the latest [release](https://github.com/Layr-Labs/eigenda/releases) from EigenDA.

> EigenDA V2 (Blazer) refers to the upgraded EigenDA network, and it supports V2 and later cert versions including V3 and V4 certs. The secure upgrade does not support EigenDA V1 network, which is decided to depreciate in favor of EigenDA V2 network.

You can deploy a router and configure the default certVerifier by following the guide on [github](https://github.com/Layr-Labs/eigenda/blob/26709ca468f176eb23c09f52a3122e5e18681c7d/contracts/script/deploy/router/README.md).

When a router processes a DA cert, the router contract automatically extracts the reference block number from the DA cert, and then chooses the correct cert verifier implementation using the key-value map.

It is **strongly** recommended a rollup deploying their own router. If using the router deployed by EigenLabs, the rollup is forced to follow the upgrade schedule determined by EigenLabs. For instance, if a rollup needs to upgrade on March and is using the EigenLabs deployed router, but EigenLabs has determined to upgrade the router on Januaray 1st. After the upgrade on Jan 1st, rollup nodes that did not upgrades before January 1st will **halt**.

## Upgrading procedures

We will describe upgrading from V3 to V4 cert and V2 to V4 cert.

### Scenario 1 - upgrading from V3 cert to V4 cert

Context: the batcher is posting V3 certs to L1 inbox; eigenda proxy of the L2 consensus nodes are processing V3 certs from L1 inbox. Assume a router is already deployed, and the current L1 block number is 24136054 (Jan 1st 2026) and the upgrade is scheduled at L1 block number 24560854 (which is about 1st March).

#### Procedures
1. Find a eigenda release you want to upgrade to.
2. Deploy the new cert verifier implementation from the release.
3. Use `addCertVerifier(uint32 abn, address certVerifier)` to register additional cert verifiers with their activation block numbers (ABNs). `abn` should be set as `24560854`, the `certVerifier` is copied from the deployed cert verifier
4. Announce upgrade at `24560854` and encourage L2 conseneus nodes to upgrade to the proxy release before `24560854`.
5. Upgrade batcher at any time before `24560854`.

Even after the upgrade, the proxy ran by the batcher will continue to create V3 certs for the batcher; the proxy will automatically switch to constructing a V4 cert only if the reference block number for the blob is equal or after `24560854`.

It is possible at `24560856` (two L1 blocks after the activation), the reference block number(RBN) for the dispersed blob is still earlier than the activation time. The RBN is chosen by an EigenDA disperser 75 blocks below the current L1 block number. So it should not come as a total surprise that a batcher is still dispersing V3 cert even though the L1 block number has passed the activation block number. 

Please continue reading if you want to avoid submitting V3 cert entirely after the activation number by using the manual method.

### Scearion 2 - upgrading from V2 cert to V4 cert

It uses the same context as above, except that batcher is posting V2 cert to L1 inbox.

The current EigenDA proxy does not support submitting V2 cert. There are two possible solutions for upgrade:
i. add a new feature into the proxy to be able to construct V2 cert
ii. manually upgrade batcher after the activation block number

We will describe procedures for the second method. If the code is implemented, the procedures match exactly as sceario 1.

1. Find a eigenda release you want to upgrade to.
2. Deploy the new cert verifier implementation from the release.
3. Use `addCertVerifier(uint32 abn, address certVerifier)` to register additional cert verifiers with their activation block numbers (ABNs). `abn` should be set as `24560854`, the `certVerifier` is copied from the deployed cert verifier
4. Announce upgrade at `24560854` and encourage L2 consensus nodes to upgrade to the proxy release before `24560854`.
5. Stop the proxy of the batcher after `24560929`.
6. upgrade the proxy.

`24560929` is chosen as opposed to `24560856` is because the disperser picked a RBN by substracting [75](https://github.com/Layr-Labs/eigenda/blob/72f377a19a301f30eecad1b856532b4cc4fc4ffc/disperser/controller/controller_config.go#L185) from the current L1 block number. Hence the batcher's proxy should only start after `24560929`.

If batcher stopped at `24560930` such that it produced a V2 cert at `24560929`, all the upgrade L2 consensus node will reject the V2 cert by ignoring it, which is different from halting.

If the batcher restarted earlier than `24560929`, such that no V4 cert can be produced, the batcher software might either crush or produce a V3 cert, which can only be processed by L2 consensus that has upgraded to the latest release.