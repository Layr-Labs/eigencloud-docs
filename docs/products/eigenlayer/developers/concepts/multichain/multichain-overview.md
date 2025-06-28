---
sidebar_position: 1
title: Overview
---

:::note
Multichain implements [ELIP-008 EigenLayer Multichain Verification](https://github.com/eigenfoundation/ELIPs/blob/elip-008v1/ELIPs/ELIP-008.md) and is available on testnet in v1.7.0.
:::

Multichain verification enables AVSs to operate across multiple chains and maintain the security guarantees of EigenLayer.
The multichain verification framework uses standardized infrastructure for key management, stake verification, and certificate
validation.

## Components 

The components that enable multichain verification are:

| **Component**                   | **Description**                                                                                                                                                                                                                                     |
|--------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Operator Table**             | Represents stake-weighted Operator delegations and allocations of a given Operator Set.                                                                                                                                                             |
| **Stake Table**                | Represents the global view of all Operator Sets with AVS-decorated stake weights. One Stake Table is deployed on each target chain and represents many Operator Tables.                                                                             |
| **Stake Weighting & Table Calculation** | An `OperatorTableCalculator` is provided for AVSs to enable custom stake weighting of different assets and to apply the formats required by the Operator Table.                                                                                     |
| **Certificates & Certificate Verification** | Signed Operator outputs (certificates), and a provided core contract (`CertificateVerifier`) for verifying those outputs against the Operator Table and stake-weighted rules (for example, signed weight above nominal or proportional thresholds). |
| **Stake Generation & Transport** | Specification for generating and verifying the global Stake Table Merkle root and transporting it to core contracts on many chains. EigenLabs operates a Transporter for testnet. The Transporter is permissionless and pluggable.                  |

## Process

To have a single global root with up-to-date stake representation on multiple chains where an AVS is used: 

1. The AVS writes and deploys the logic for calculating its single, weighted Operator Table (or uses the default logic).
2. EigenLayer combines the many Operator Set representations to generate a global stake table.
3. The global stake table is transported to target chains. The Operator Tables are then used for verifying Operator certificates.
4. Weekly, or as forcible updates are needed (for example, when an Operator is ejected or slashed), the table is regenerated and transported again.