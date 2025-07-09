---
sidebar_position: 6
title: Implement Multichain AVS
---

:::important
Multichain verification is early-access and in active development. Expect iterative updates before the mainnet release.

Multichain implements [ELIP-008 EigenLayer Multichain Verification](https://github.com/eigenfoundation/ELIPs/blob/elip-008v1/ELIPs/ELIP-008.md) and is available on testnet in v1.7.0.
:::

The following diagram illustrates the high level steps to implement a multichain AVS: 

![Register Multichain](/img/multichain-registration.png)

## 1. Configure Operator Set Curve Type

Decide on the cryptographic curve type for Operator keys. Choose ECDSA for less than 50 Operators, or BN254 BLS for more than 50 operators.
[Create Operator Set](operator-sets/create-operator-sets.md). Set the `KeyType` in `KeyRegistrar`.

## 2. Deploy Operator Table Calculator

Deploy the `OperatorTableCalculator` contract to define stake weighting logic.

To use the as-is unweighted stakes, deploy the template `ECDSATableCalculatorBase` or `BN254TableCalculatorBase` contract.
The contract can be upgraded. Alternatively, use the EigenLabs default unweighted contract onchain.

To define custom stake weighting logic, override `calculateOperatorTable()` to add:
- Asset weighting (for example, ETH 2x vs stablecoins)
- Stake capping per operator
- Oracle price feed integration
- Custom filtering logic.

## 3. (Optional) View the registered cryptographic keys for your Operator Set

Operators self-register using `KeyRegistrar.registerKey(operator, operatorSet, pubkey, sig)`.

## 4. Opt-in to Multichain

Register with `CrossChainRegistry` to enable multichain verification. To register, use: 

`CrossChainRegistry.createGenerationReservation(operatorSet, calculator, config, [chainIDs])`

Where `config`:
* `staleness` = 14 days (must exceed 7-day refresh)
* `minWeight` = 0

Where `chainIDs` are:

| Chain Name     | Chain ID   |
|----------------|------------|
| Ethereum       | 1          |
| Base           | 8453       |
| Sepolia        | 11155111   |
| Base-Sepolia   | 84532      |


The caller must have UAM permissions for operatorSet.avs. 

## 5. Wait for deployment

EigenLabs generates and transports your stake table. To determine when transport complete, monitor `OperatorTableUpdater.GlobalRootConfirmed`.

## 6. Design Integration Pattern

Choose how AVS users will consume your service. Options are: 
- Direct: Users call `CertificateVerifier` directly
- Wrapped: Deploy custom contract wrapping `CertificateVerifier`
- Hybrid: Offer both patterns.