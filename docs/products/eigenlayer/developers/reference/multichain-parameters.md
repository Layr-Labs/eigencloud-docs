---
sidebar_position: 1
title: Multichain Parameters
---

Protocol parameters for multichain verification include: 

* [Mutable parameters that require monitoring](#mutable-parameters)
* [Immutable parameters](#immutable-parameters)
* [Configurable parameters](#configurable-parameters)

## Mutable Parameters

| Parameter                            | Controlled By                  | Update Frequency                | Impact                            | Monitoring Event                                                          |
|--------------------------------------|--------------------------------|---------------------------------|-----------------------------------|---------------------------------------------------------------------------|
| Operator Tables                      | EigenLabs (during Preview)     | Weekly + force updates          | Certificate verification validity | `CertificateVerifier.StakeTableUpdated`                                   |
| Operator Keys                        | Operators                      | Updates with Operator Table     | Certificate signature validation  | `KeyRegistrar.KeyRegistered/Deregistered`                                 |
| Stake Weights                        | `OperatorTableCalculator`      | Per table update                | Verification thresholds           | Custom events in your calculator                                          |
| Operator Registration/Deregistration | Verifiable Service + Operators | On-demand                       | Available Operators for tasks     | `AVSRegistrar.OperatorRegistered` and `AVSRegistrar.OperatorDeregistered` |
| Slashing/Ejections                   | EigenLayer Core                | On-demand (immediate transport) | Operator validity and weights     | `AllocationManager.OperatorSlashed`                                         |

## Immutable Parameters

| Parameter          | Set By             | Description                                                       |
|--------------------|--------------------|-------------------------------------------------------------------|
| Operator Set ID     | Verifiable service | Cryptographic curve and operator list hash                        |
| Contract Addresses  | EigenLayer Core    | `CertificateVerifier`, `OperatorTableUpdater` addresses per chain |
| Chain Support       | EigenLayer Core    | Which chains support multichain verification                      |

## Configurable Parameters

| Parameter               | Configured By      | Options                                             | Configured Where                                    |
|-------------------------|--------------------|-----------------------------------------------------|-----------------------------------------------------|
| Staleness Period        | Verifiable service | 0 (no expiry) or must exceed table update frequency | `CrossChainRegistry`                                | 
| Minimum Stake Weight    | Verifiable service | Any uint256 value                                   | `CrossChainRegistry`                                |
| Target Chains           | Verifiable service | Any supported chain IDs                             | `CrossChainRegistry`                                |
| Verification Thresholds | Consumers          | Proportional % or nominal amounts                   | Consumer integration with `CertificateVerifier`     |
| Custom Stake Weighting  | Verifiable service | Override `calculateOperatorTable()` with any logic  | `OperatorTableCalculator` contract for Operator Set |
