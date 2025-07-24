---
sidebar_position: 1
title: Implementers
---

:::important
Multichain verification is early-access and in active development. Expect iterative updates before the mainnet release.

Multichain implements [ELIP-008 EigenLayer Multichain Verification](https://github.com/eigenfoundation/ELIPs/blob/elip-008v1/ELIPs/ELIP-008.md) and is available on testnet in v1.7.0.
:::

The diagram illustrates the high level steps to implement multichain verification: 

<img src="/img/multichain-registration.png" alt="Multichain Implementation" width="600"/>

Implementers of multichain verification need to:
1. [Configure Operator Set curve type](#1-configure-operator-set-curve-type)
2. [Deploy Operator table calculator](#2-deploy-operator-table-calculator)
3. [(Optional) View the registered cryptographic keys for your Operator Set](#3-optional-view-the-registered-cryptographic-keys-for-your-operator-set)
4. [Opt-in to multichain](#4-opt-in-to-multichain)
5. [Wait for deployment](#5-wait-for-deployment)
6. [Design integration pattern for consumers](#6-design-integration-pattern-for-consumers)

## 1. Configure Operator Set Curve Type

1. Decide on the cryptographic curve type for Operator keys. Choose ECDSA for less than 30 Operators, or BN254 BLS for more than 30 Operators.
2. [Create the Operator Set](../operator-sets/create-operator-sets.md). 
3. [Set the `KeyType` in `KeyRegistrar`](https://github.com/Layr-Labs/eigenlayer-contracts/blob/v1.7.0-rc.4/docs/permissions/KeyRegistrar).

## 2. Deploy Operator Table Calculator

Deploy the `OperatorTableCalculator` contract to define stake weighting logic.

To use the as-is unweighted stakes, deploy the template `ECDSATableCalculatorBase` or `BN254TableCalculatorBase` contract.
The contract can be upgraded. Alternatively, use the onchain [default unweighted contract provided by EigenLabs](https://github.com/Layr-Labs/eigenlayer-middleware?tab=readme-ov-file#current-middlewarev2-testnet-deployment).

To define custom stake weighting logic, override `calculateOperatorTable()` to add:
- Asset weighting (for example, ETH 2x vs stablecoins)
- Stake capping per operator
- Oracle price feed integration
- Custom filtering logic.

For more information on stake weighting and how to customize, refer to [Stake Weighting](stake-weighting.md).

## 3. (Optional) View the registered cryptographic keys for your Operator Set

Operators self-register using [`KeyRegistrar.registerKey(operator, operatorSet, pubkey, sig)`](https://github.com/Layr-Labs/eigenlayer-contracts/blob/v1.7.0-rc.4/docs/permissions/KeyRegistrar.md#key-registration).

## 4. Opt-in to Multichain and create a generation reservation

To enable multichain verification, register with `CrossChainRegistry`. To register, use: 

[`CrossChainRegistry.createGenerationReservation(operatorSet, calculator, config)`](https://github.com/Layr-Labs/eigenlayer-contracts/blob/v1.7.0-rc.4/docs/multichain/source/CrossChainRegistry.md#creategenerationreservation)

Where `config`:
* `staleness` = 14 days (must exceed 7-day refresh)
* `owner` = Permissioned owner of the Operator Set on target chains

A `staleness` period of `0` enables certificates to be verified against any timestamp in the past. 

The `staleness` must be greater than the update cadence of the Operator tables (communciated offchain 
and currently 7 days). 

The caller must have UAM permissions for operatorSet.avs. 

## 5. Wait for deployment

EigenLabs generates and transports your stake table. To determine when transport is complete, monitor [`OperatorTableUpdater.GlobalRootConfirmed`](https://github.com/Layr-Labs/eigenlayer-contracts/blob/v1.7.0-rc.4/docs/multichain/destination/OperatorTableUpdater.md).

## 6. Design Integration Pattern for Consumers

Choose how multichain verification users will consume your service. Options are: active verification, self-service, or hybrid.  
The primary integration pattern is determined by the verification service. Regardless of the chosen integration pattern, 
any consumer can verify the certificate they have against the stake weights in the contracts directly.

For more information on these patterns, refer to [Integration Patterns](multichain-integration-patterns.md).