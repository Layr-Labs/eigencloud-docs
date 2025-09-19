---
sidebar_position: 4
---

# Hoodi

The EigenDA Hoodi testnet is the EigenDA testnet for operators.

## Quick Links

* [AVS Page][2]

## Specs

| Property | Value |
| --- | --- |
| Disperser Address | `disperser-hoodi.eigenda.xyz:443` |
| Churner Address | `churner-hoodi.eigenda.xyz:443` |
| Batch Confirmation Interval (V1) | Every 10 minutes (may vary based on network health) |
| Batch Confirmation Interval (V2) | Every 3 seconds (may vary based on network health) |
| Max Blob Size | 16 MiB |
| Default Blob Dispersal Rate limit | No more than 1 blob every 100 seconds |
| Default Blob Size Rate Limit | No more than 1.8 MiB every 10 minutes |
| Stake Sync (AVS-Sync) Interval | Every 24 hours |
| Ejection Cooldown Period | 24 hours |

## Contract Addresses

| Contract | Address |
| --- | --- |
| EigenDADirectory | [0x5a44e56e88abcf610c68340c6814ae7f5c4369fd](https://hoodi.etherscan.io/address/0x5a44e56e88abcf610c68340c6814ae7f5c4369fd#readProxyContract) |

All other contracts are now tracked inside the EigenDADirectory contract:
1. Click on the etherscan link above.
2. Click on the "Contract" button.
3. Click on the "Read as Proxy" button.
4. Click on "getAllNames()" function to see the name of all registered contracts.
5. Use the "getAddress()" function to get the address of a specific contract, using its name.

![](/img/eigenda/eigenda-directory-etherscan.png)

## Quorums

| Quorum Number | Stake Minimum | Token |
| --- | --- | --- |
| 0 | 32 | [ETH, LSTs](https://hoodi.eigenlayer.xyz/token) |
| 1 | 1 | [bEIGEN](https://hoodi.eigenlayer.xyz/token/bEIGEN) |

Note: When restaking EIGEN it is automatically converted to bEIGEN.

[2]: https://hoodi.eigenlayer.xyz/avs/eigenda
