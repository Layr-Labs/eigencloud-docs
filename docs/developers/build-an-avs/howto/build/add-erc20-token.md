---
sidebar_position: 7
title: Add an ERC-20 Token as a Restakable Asset
---

Any ERC-20 token can be permissionlessly added as a restakable asset, significantly broadening
the scope of assets that can contribute to the security of decentralized networks, and unlocking the cryptoeconomic security of 
ERC-20 tokens on EigenLayer. Strategies are contracts that hold assets that are restaked into EigenLayer.

AVSs can choose to accept any ERC-20 token as a restaked asset to provide cryptoeconomic security for 
their AVS. This allows AVSs to evaluate the supply and utility of all available tokens to create cross-ecosystem partnerships 
while ensuring the safety and security of their services. This increases alignment and connectivity across the ecosystem.

## Adding a New Strategy

To add a new Strategy to the EigenLayer protocol, invoke [`StrategyFactory.deployNewStrategy()`](https://github.com/Layr-Labs/eigenlayer-contracts/blob/main/docs/core/StrategyManager.md#strategyfactorydeploynewstrategy).
The Strategy is now available to be associated with AVSs.

Once the strategy has been added to EigenLayer, add to [Operator Sets for your AVS](manage-operator-sets.md#modify-strategy-composition).

:::note
Custom Strategies have custom bytecode and do not implement `StrategyBase`. Custom Strategies are strategies that are not 
deployed via `StrategyFactory.deployNewStrategy()` and require whitelisting via [`StrategyFactory.whitelistStrategies`](https://github.com/Layr-Labs/eigenlayer-contracts/blob/main/docs/core/StrategyManager.md#strategyfactorywhiteliststrategies). 

Custom Strategies are not yet supported because the Strategies specification is still evolving alongside the EigenLayer
protocol. AVS developers should build their AVS using the `StrategyBase` interface and functionality, which provides a
stable and supported foundation for integration.
:::