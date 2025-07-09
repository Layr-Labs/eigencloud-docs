---
sidebar_position: 1
title: Overview
---

:::important
Multichain verification is early-access and in active development. Expect iterative updates before the mainnet release.

Multichain verification implements [ELIP-008 EigenLayer Multichain Verification](https://github.com/eigenfoundation/ELIPs/blob/elip-008v1/ELIPs/ELIP-008.md) and is available on testnet in v1.7.0.
:::

Multichain verification enables AVSs to operate across multiple chains and developers verify their services and applications 
on supported chains with the same trust and security of restaked assets on Ethereum.

## Components 

The multichain verification framework uses standardized infrastructure for key management, stake verification, and certificate
validation.

| **Component**                               | **Description**                                                                                                                                                                                                                                               | **Where it lives**                                                                                                                                      |
|---------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Stake**                                   | Stake on Ethereum. Stake guarantees and protections, and security and slashing rules, apply for multichain as for Ethereum only services and apps. Secured by Ethereum consensus.                                                                             | Core contracts on Ethereum                                                                                                                              | 
| **Core contracts**                          | `KeyRegistrar` - canonical key store (ECDSA / BN254) <br /> `CrossChainRegistry` – opt-in & config hub for multichain <br />`OperatorTableUpdater` – ingests stake root on each target chain <br />`CertificateVerifier` – single integration surface for every app | Ethereum: `KeyRegistrar` and `CrossChainRegistry` <br />Supported target chains (including Ethereum): `OperatorTableUpdater` and `CertificateVerifier`. | 
| **Template middleware contract**            | `OperatorTableCalculator` - templated contract for decorating stakes with weighting logic. Deployed by the AVS for each Operator Set. <br />Connected to the `CrossChainRegistry` via an opt-in registration.                                                       | AVS contracts deployed on Ethereum only                                                                                                                 |
| **Certificates & certificate verification** | AVSs and their users verify results using certificates. Certificates signed by Operators are checked against the Operator Table in `CertificateVerifier`, using default or custom stake-weight rules.                                                         | `CertificateVerifier` contract                                                                                                                          |
| **Operator table**                          | Merklized stake weights for each Operator Set (optionally custom-weighted). Created by calling the `OperatorTableCalculator` with the correct expected return type. Calculated offchain.                                                                      | `CertificateVerifier` contract                                                                                                                          |
| **Global stake root (confirmation root)**   | Bundles all Operator Tables into a Merkle tree/root for easy transport to target chains. Shipped weekly (or instantly on slash/eject & register/deregister).                                                                                                  | Generated (and provably correct) by the Eigen Sidecar, and posted to all target chains by EigenLabs                                                     |
| **Curves**                                  | ECDSA for ≤ ≈50 operators. BN254 BLS for larger sets.                                                                                                                                                                                                         | Supported APIs for each curve type when using the `KeyRegistrar` and `CertificateVerifier`                                                              |
| **Protocol Parameters**                     | Available on Ethereum, Base, Sepolia, and Base-Sepolia. Refreshed weekly or on key events.                                                                                                                                                                    | In various contracts                                                                                                                                    |

## Process

To have a single global root with up-to-date stake representation on multiple chains where an AVS is used: 

1. On Ethereum, the AVS developer writes and deploys the logic for calculating its single, weighted Operator Table (or uses the default logic).
2. Offchain, EigenLabs combines the many Operator Set representations to generate a global stake table.
3. Crosschain, the global stake table is transported to target chains. The Operator Tables are used for verifying Operator certificates.
4. Offchain and crosschain, weekly, or as forcible updates are needed (for example, when an Operator is ejected or slashed), the global stake table is regenerated and transported again.

To verify operator certificates against transported stake tables, apps use the `CertificateVerifier`.