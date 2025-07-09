---
sidebar_position: 2
title: Precision and Rounding Considerations
---

:::warning
Slashing in very small increments, slashing operators with very low magnitudes, or slashing operators with very low share balances may lead to precision loss that results in burned and redistributed amounts being far lower than expected.
:::

AVSs should be aware of potential precision loss during slashing operations. This occurs primarily when:
- Operators have very low allocated magnitudes
- Operators have very few delegated shares
- Very small slashing percentages are used
- Tokens with low decimal precision are involved

### Precision Loss Scenarios

**Magnitude-Related Precision Loss:**
When slashing small magnitudes, the `mulWadRoundUp` operations can result in zero redistributed amounts due to rounding. For example:
- Max magnitude: `1e18`
- Allocated magnitude: `1e4`
- wadsToSlash: `1e14`
- Result: Magnitude slashed rounds to 1 [dust](https://www.techopedia.com/definition/dust-transaction), shares slashed rounds to 0

**Share-Related Precision Loss:**
The `calcSlashedAmount` function depends on sufficient precision in operations to avoid zero results when share counts are very low.

**Token Decimal Considerations:**
Low-decimal tokens require higher minimum deposits to maintain precision:
- USDC/USDT (6 decimals): Requires minimum 1000 tokens to reach 1e9 precision
- WBTC (8 decimals): Requires minimum 10 tokens to reach 1e9 precision
- Standard 18-decimal tokens: Generally safe when following magnitude/share thresholds

## Operator Selection and Slashing Guidelines

To minimize precision loss issues, AVSs should implement the following guidelines:

### Operator Registration Criteria

**Magnitude Thresholds:**
- **Reject operators with allocated magnitude under 1e9**: Operators with very low allocated magnitude are more susceptible to precision loss during slashing
- **Checking**: Query `getAllocatedMagnitude()` for each operator-strategy pair before allowing registration

**Share Thresholds:**
- **Reject operators with fewer than 1e9 delegated shares**: Low share counts increase the likelihood of rounding errors that reduce redistributed amounts
- **Checking**: Query operator's total delegated shares across all strategies before registration
- **Cross-validation**: Ensure both magnitude and share thresholds are met simultaneously, as they are interdependent

### Slashing Amount Considerations

**Percentage Thresholds:**
- **Exercise significant caution when slashing less than 0.01% (1e14 WAD)**: Very small slashing percentages are more prone to precision loss
- **Recommendation**: Consider implementing a minimum slash percentage (e.g., 0.1% or 1e15 WAD) for reliable redistribution

### Implementation Recommendations

**Pre-Registration Validation:**
```solidity
// Example validation checks
require(getAllocatedMagnitude(operator, strategy) >= 1e9, "Insufficient magnitude");
require(getOperatorShares(operator) >= 1e9, "Insufficient shares");
require(tokenDecimals >= 6, "Token decimals too low"); // Adjust based on risk tolerance
```

**Pre-Slash Validation:**
```solidity
// Example pre-slash checks
uint256 expectedSlash = calculateExpectedSlash(operator, strategy, slashPercentage);
require(expectedSlash > 0, "Slash amount would round to zero");
require(slashPercentage >= MINIMUM_SLASH_PERCENTAGE, "Slash percentage too small");
```

**Testing and Validation Tools:**
For practical testing of precision considerations, refer to the [precision analysis demo](https://gist.github.com/wadealexc/1997ae306d1a5a08e5d26db1fac8d533) which provides examples of validations and edge case testing for slashing operations.

**Monitoring and Alerting:**
- **Track precision loss events**: Monitor for slashes that result in zero or unexpectedly small redistributed amounts
- **Alert on edge cases**: Set up alerts for operators approaching magnitude/share thresholds
- **Audit slash outcomes**: Regularly verify that slashed amounts match expected calculations

### Risk Assessment Framework

AVSs should evaluate their specific use case against these parameters:

1. **Expected operator size distribution**: Will most operators easily meet the 1e9 thresholds?
2. **Slashing frequency and amounts**: How often and how much do you expect to slash?
3. **Token ecosystem**: What tokens will operators stake, and do they meet decimal requirements?
4. **Precision tolerance**: Can your protocol tolerate small amounts of precision loss?

### Recovery Procedures

- **Dust accumulation**: Understand that precision loss results in small amounts of dust remaining in the protocol. Precision loss dust cannot be retrieved.
- **Operator remediation**: Develop procedures for operators who fall below thresholds (for example, requiring additional deposits).
- **Slashing adjustments**: Have procedures to adjust slashing parameters if precision loss becomes problematic.
