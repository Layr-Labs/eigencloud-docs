---
sidebar_position: 1
title: Overview
---

:::important
Multichain verification is early-access and in active development. Expect iterative updates before the mainnet release.

Multichain verification implements [ELIP-008 EigenLayer Multichain Verification](https://github.com/eigenfoundation/ELIPs/blob/elip-008v1/ELIPs/ELIP-008.md) and is available on testnet in v1.7.0.
:::

Multichain verification enables developers to build verifiable services that can operate across multiple chains and consumers of 
those services to verify those services on supported chains with the same trust and security of restaked assets on Ethereum.

## Components 

The multichain verification framework uses standardized infrastructure for key management, stake verification, and certificate
validation.

| **Component**                               | **Description**                                                                                                                                                                                                                                                                                                                                                                        | 
|---------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Weight**                                  | Standard process for stake weighting in the core and middleware. The AVS defines an array of numerical values representing an individual Operator's weight for work and reward distribution in the Operator Set. In the simplest form this may represent an Operator’s delegation or allocation of a single asset but is customizable for more complicated work distribution criteria. |
| **Operator table**                          | Data structure representing Operator weights of all Operators in a Operator Set (optionally custom-weighted).                                                                                                                                                                                                                                                                          |
| **Table calculation**                       | To facilitate the generation of Operator weights by the core protocol, AVSs specify a `OperatorTableCalculator` for each Operator Set to decorate stake weighting of different assets and apply the formats required by the AVS.                                                                                                                                                       |
| **Stake table**                             | Data structure (merkle tree) representing the global view of all Operator Sets and their corresponding Operator Tables. One of these lives on each target chain. The root of the stake table is the global table root.                                                                                                                                                                 | 
| **Certificates & certificate verification** | Data structure for signed Operator outputs (certificates) and a core contract (`CertificateVerifier`) for verifying those outputs against the Operator Table and Operator consensus rules (for example, signed weight above nominal or proportional stake thresholds).                                                                                                                 |
| **Stake generation & transport**            | Specification for generating and verifying the global stake table root and transporting it to core contracts on supported target chains. The process is pluggable by AVSs and other third-parties.                                                                                                                                                                                     

## Process

To have a single global root with up-to-date stake representation on target chains where an verifiable service is available: 

1. On Ethereum, the developer of the verifiable service specifies the logic for calculating its single, weighted Operator Table.
2. Offchain, EigenLabs combines the many Operator Set representations to generate a global stake table.
3. Crosschain, the global stake table is transported to target chains, and Operator Tables calculated.
4. On target chains, Operater Tables are used for verifying Operator certificates.
5. Offchain and crosschain, weekly, or as forcible updates are needed (for example, when an Operator is ejected or slashed), the global stake table is regenerated and transported again. 
    This ensures up-to-date weight representations wherever the verifiable service is consumed.

Certificates are an aggregation of signatures from Operators running a multichain verifiable service. To verify operator 
certificates against transported stake tables, consumers use the `CertificateVerifier`.