---
sidebar_position: 1
title: EigenLayer Core Contracts
---

The EigenLayer core contracts are the set of contracts that are implemented and maintained by EigenLabs and upgradeable by
the Protocol Council.

The EigenLayer core contracts are documented in the [eigenlayer-contracts](https://github.com/Layr-Labs/eigenlayer-contracts) repository. The core contracts include contracts for:
* The [EigenLayer protocol](#eigenlayer-protocol-core-contracts) to stake and secure verifiable services, and to enable incentives and consequences for Operator commitments.
* [Permissions](#permissions-core-contracts) including User Access Management (UAM), and managing cryptographic keys for Operators across different Operator Sets.
* The [multichain protocol](#multichain-core-contracts) to enable consumption of EigenLayer Ethereum stake on supported destination chains.

This documentation matches the functionality available in [v1.7.0 of the core contracts](../../../releases.md). For release specific
documentation for other releases, refer to the `/docs` repository on the branch for that release in the [eigenlayer-contracts](https://github.com/Layr-Labs/eigenlayer-contracts) repository.

## EigenLayer Protocol Core Contracts

| Core contract                                                                                                            | Description                                                                                                                                                                                                                                                                                                                                                                     | 
|--------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [StrategyManager](https://github.com/Layr-Labs/eigenlayer-contracts/tree/main/docs#strategymanager)           | Responsible for handling the accounting for Restakers as they deposit and withdraw ERC20 tokens from their corresponding strategies. The StrategyManager tracks the amount of restaked assets each Restaker has within Eigenlayer and handles outflows for burning or redistribution of slashed funds through the `clearBurnOrRedistributableShares` function.                                                                                                                                              |
| [DelegationManager](https://github.com/Layr-Labs/eigenlayer-contracts/tree/main/docs#delegationmanager)       | Responsible for enabling Restakers to delegate assets to Operators, and withdraw assets. The DelegationManager tracks the amount of assets from each Strategy that have been delegated to each Operator, and tracks accounting for slashing.                                                                                                                                    | 
| [EigenPodManager](https://github.com/Layr-Labs/eigenlayer-contracts/tree/main/docs#eigenpodmanager)           | Enables native ETH restaking                                                                                                                                                                                                                                                                                                                                                    | 
| [AllocationManager](https://github.com/Layr-Labs/eigenlayer-contracts/tree/main/docs#allocationmanager)       | Responsible for creating Operator Sets, and Operator registrations to Operator Sets. The Allocation Manager also tracks allocation of stake to a Operator Set, and enables AVSs to slash that stake.                                                                                                                                                                            
| [RewardsCoordinator](https://github.com/Layr-Labs/eigenlayer-contracts/tree/main/docs#allocationmanager)      | Enables AVSs to distribute ERC20 tokens to Operators and Restakers who delegated assets to Operators. The RewardsCoordinator tracks the rewards and enables Operators and Restakers to claim them.
| [AVSDirectory](https://github.com/Layr-Labs/eigenlayer-contracts/tree/main/docs#avsdirectory)                 | Has been replaced by AllocationManager and will be deprecated in a future release. We strongly recommend existing AVSs [migrate to using Operator Sets](../../howto/build/operator-sets/migrate-to-operatorsets.md) on Testnet.                                                                                                                                                 | 

## Permissions Core Contracts

| Core contract                                                                                                            | Description                                                                                                                                                                                                              | 
|--------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [PermissionController](https://github.com/Layr-Labs/eigenlayer-contracts/tree/main/docs#permissioncontroller) | Enables AVSs and Operators to delegate the ability to call certain core contract functions to other addresses. For more information, refer to [User Access Management](../../../concepts/uam/user-access-management.md). |
| [KeyRegistrar](https://github.com/Layr-Labs/eigenlayer-contracts/blob/main/docs/permissions/KeyRegistrar.md)    | Manages cryptographic keys for operators across different operator sets. Supports both ECDSA and BN254 key types and ensures global uniqueness of keys across all operator sets.                                         |

## Multichain Core Contracts

| Core contract        | Description                                                                             | 
|----------------------|-----------------------------------------------------------------------------------------|
| [CertificateVerifier](https://github.com/Layr-Labs/eigenlayer-contracts/blob/main/docs/multichain/destination/CertificateVerifier.md#certificateverifier)  | Responsible for verifying certificates onchain from an offchain task.                    |
| [OperatorTableUpdater](https://github.com/Layr-Labs/eigenlayer-contracts/blob/main/docs/multichain/destination/OperatorTableUpdater.md#operatortableupdater) | Updates Operator table for each Operator Set from the stake root, and validates with storage proofs.       | 
| [CrossChainRegistry](https://github.com/Layr-Labs/eigenlayer-contracts/blob/main/docs/multichain/source/CrossChainRegistry.md#crosschainregistry) | Manages the registration and deregistration of Operator Sets to the multichain protocol and helps generate the global stake root.|
