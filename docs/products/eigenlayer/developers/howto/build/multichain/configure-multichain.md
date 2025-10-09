---
sidebar_position: 2
title: Configure Multichain AVS
---

:::important
Multichain verification is early-access and in active development. Expect iterative updates before the mainnet release.

Multichain implements [ELIP-008 EigenLayer Multichain Verification](https://github.com/eigenfoundation/ELIPs/blob/main/ELIPs/ELIP-008.md) and is available on testnet and mainnet in v1.7.0.
:::

The diagram illustrates the high level steps to configure multichain verification and create a reservation for a participating
AVS in the multichain verification framework: 

<img src="/img/multichain-registration.png" alt="Multichain Implementation" width="600"/>

Implementers of multichain verification need to:
1. [Configure Operator Set curve type](#1-configure-operator-set-curve-type)
2. [Deploy Operator table calculator](#2-deploy-operator-table-calculator)
3. [(Optional) View the registered cryptographic keys for your Operator Set](#3-optional-view-the-registered-cryptographic-keys-for-your-operator-set)
4. [Opt-in to multichain](#4-opt-in-to-multichain-and-create-a-generation-reservation)
5. [Wait for deployment](#5-wait-for-deployment)

## 1. Configure Operator Set Curve Type

1. Decide on the cryptographic curve type for Operator keys. Choose ECDSA for less than 30 Operators, or BN254 BLS for more than 30 Operators.
2. [Create the Operator Set](../operator-sets/create-operator-sets.md). 
3. [Set the `KeyType` in `KeyRegistrar`](https://github.com/Layr-Labs/eigenlayer-contracts/blob/v1.8.0-rc.0/docs/permissions/KeyRegistrar.md).

## 2. Deploy Operator Table Calculator

[Deploy the `OperatorTableCalculator` contract to define stake weighting logic.](https://github.com/Layr-Labs/eigenlayer-middleware/blob/dev/docs/middlewareV2/OperatorTableCalculator.md)

To use the as-is unweighted stakes, deploy the template `ECDSATableCalculatorBase` or `BN254TableCalculatorBase` contract.
The contract can be upgraded. Alternatively, use the onchain [default unweighted contract provided by EigenLabs](https://github.com/Layr-Labs/eigenlayer-middleware?tab=readme-ov-file#current-middlewarev2-testnet-deployment).

To define custom stake weighting logic, override [`calculateOperatorTable()`](https://github.com/Layr-Labs/eigenlayer-middleware/blob/dev/docs/middlewareV2/OperatorTableCalculator.md#calculateoperatortable) to add:
- Asset weighting (for example, ETH 3500x vs. stablecoins),
- Stake capping per operator,
- Oracle price feed integration,
- Custom filtering logic.

For more information on stake weighting and how to customize, refer to [Stake Weighting](../../../concepts/multichain/stake-weighting.md).

## 3. (Optional) View the registered cryptographic keys for your Operator Set

Operators self-register using [`KeyRegistrar.registerKey(operator, operatorSet, pubkey, sig)`](https://github.com/Layr-Labs/eigenlayer-contracts/blob/v1.7.0-rc.4/docs/permissions/KeyRegistrar.md#key-registration).

## 4. Opt-in to Multichain and create a generation reservation

To enable multichain verification, register with `CrossChainRegistry`. To register, use: 

[`CrossChainRegistry.createGenerationReservation(operatorSet, calculator, config)`](https://github.com/Layr-Labs/eigenlayer-contracts/blob/v1.7.0-rc.4/docs/multichain/source/CrossChainRegistry.md#creategenerationreservation)

Where `config`:
* `staleness` = 14 days (either set t be 0, or exceed 7-day refresh)
* `owner` = Permissioned owner of the Operator Set on target chains

The `staleness` parameter is the length of time that a [certificate](verification-methods.md) remains valid after its reference timestamp. It is set as an integer representing days.

A `staleness` period of `0` completely removes staleness checks, allowing certificates to be validated regardless of their timestamp. The `staleness` must be greater than the update cadence of the Operator tables (communciated offchain 
and currently 7 days). 

The caller must have [UAM permissions](../../../concepts/uam-for-avs.md) for `operatorSet.avs`. 

## 5. Wait for deployment

EigenLabs generates and transports your stake table. To determine when transport is complete, monitor [`OperatorTableUpdater.GlobalRootConfirmed`](https://github.com/Layr-Labs/eigenlayer-contracts/blob/v1.7.0-rc.4/docs/multichain/destination/OperatorTableUpdater.md).


The **operator tables of *all* operatorSets are updated weekly on Monday at 14:00 UTC on mainnet and daily at 14:00 UTC on testnet**. To ensure that an operatorSet can immediately begin verifying certificates and that its stake weights do not become stale between table updates, the multichain protocol updates the table for a *single* operatorSet registered to the protocol when the following events are emitted:

- AllocationManager: `OperatorSlashed`
- AllocationManager: `OperatorAddedToOperatorSet`
- AllocationManager: `OperatorRemovedFromOperatorSet`
- CrossChainRegistry: `GenerationReservationCreated`

## Next 

[Implement how certificate are created, and delivered or exposed.](implement-certificate-verification.md).