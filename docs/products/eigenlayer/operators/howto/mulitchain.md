---
sidebar_position: 5
title: Run Multichain Services
---

To operate a multichain verification service, the following is required: 

1. Register cryptographic keys for each Operator Set you join. 

    To register keys, use [`KeyRegistrar.registerKey(myAddress, operatorSet, pubkey, signature)`](https://github.com/Layr-Labs/eigenlayer-contracts/blob/v1.7.0-rc.4/docs/permissions/KeyRegistrar.md#ecdsa-key-registration). The [Operator UAM admin](uam/op-add-remove-admins.md) 
    can register the signing key on behalf of the Operator.

    Key Types are either ECDSA address or BN254 G1/G2 points.

2. Update your operator binary to produce certificates.

    The verification service will provide new binaries to produce certificates. 

3. Monitor key health. 

    Watch for key rotation needs and ejection events, by monitoring [`AllocationManager.OperatorSlashed`](https://github.com/Layr-Labs/eigenlayer-contracts/blob/v1.7.0-rc.4/docs/core/AllocationManager.md#slashoperator), 
    and [`AllocationManager.OperatorRemovedFromOperatorSet`](https://github.com/Layr-Labs/eigenlayer-contracts/blob/v1.7.0-rc.4/docs/core/AllocationManager.md#deregisterfromoperatorsets), and rotating keys as needed.