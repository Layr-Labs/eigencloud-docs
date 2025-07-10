---
sidebar_position: 5
title: Stake Weighting
---

Use the `OperatorTableCalculator` to define how Operator stakes are weighted and formatted for your specific use case. 
`OperatorTableCalculator` is a mandatory contract that must be deployed for each Operator Set to participate in 
multichain verification.

The `OperatorTableCalculator` contract converts raw EigenLayer stake data into weighted Operator Tables reflecting the 
AVS's specific requirements. For example, capping certain operators, weighting different assets differently, or integrating 
external price feeds.

The `OperatorTableCalculator` enables AVSs to control how their stake is weighted while maintaining standardized interfaces
for multichain verification. The stake weights are key to verifying Operator certificates.

## Default Table Calculators

Default table calculators are provided. For AVSs that don't need custom logic, default calculators  that return unweighted stake values 
are provided for both `ECDSATableCalculator` and `BLSTableCalculator`.

For larger Operator Sets (30+ operators), BLS provides more efficient verification through aggregate signatures. The BLS 
calculator follows a similar pattern but optimizes for larger scale operations.

## Stake Weights 

By default, weights of USDC and ETH are treated the same if no weighting is given to either (for example, 10 ETH == 10 USDC
when presented as raw stake values). Operator shares of a given strategy (that is, staked value for one asset) are stored
in a numerical format and should be converted for the AVSs use-case.

## Customizing Stake Weights

The weights are captured in OperatorInfo structs for ESDSA and BLS. The weights array is completely flexible and AVSs can 
define any groupings they need. Common patterns include:

* Simple: `[total_stake]`
* Asset-specific: `[eth_stake, steth_stake, eigen_stake]`
* Detailed: `[slashable_stake, delegated_stake, strategy_1_stake, strategy_2_stake]`

Examples of customization options include: 

* Stake Capping: Limit any single operator to maximum 10% of total weight
* Asset Weighting: Weight ETH stakes 2x higher than other assets
* Oracle Integration: Use external price feeds to convert all stakes to USD values
* Minimum Requirements: Filter out operators below certain stake thresholds (that is, set their verification weight to zero)

## Implementation Examples

### Simple Equal Weighting

```
// Basic implementation: return raw stake values without modification
function calculateOperatorTable(OperatorSet calldata operatorSet) 
    external view returns (ECDSAOperatorInfo[] memory) {
    return getRawStakeValues(operatorSet);
}
```

### Advanced Custom Weighting

```
// Advanced implementation with asset weighting and stake capping
function calculateOperatorTable(OperatorSet calldata operatorSet) 
    external view returns (ECDSAOperatorInfo[] memory) {
    ECDSAOperatorInfo[] memory operators = getRawStakeValues(operatorSet);
    
    for (uint i = 0; i < operators.length; i++) {
        // Apply asset-specific weighting
        // weights[0] = ETH stake, weights[1] = stablecoin stake
        operators[i].weights[0] *= 2;  // Weight ETH 2x higher
        operators[i].weights[1] *= 1;  // Keep stablecoins at 1x
        
        // Implement stake capping - limit any operator to 10% of total
        uint256 maxWeight = getTotalStake() / 10;
        if (operators[i].weights[0] > maxWeight) {
            operators[i].weights[0] = maxWeight;
        }
        
        // Filter out operators below minimum threshold
        if (operators[i].weights[0] < MINIMUM_STAKE_THRESHOLD) {
            operators[i].weights[0] = 0;  // Zero weight = excluded from verification
        }
    }
    return operators;
}
```