---
sidebar_position: 4
---

# Mainnet Beta

The EigenDA Mainnet Beta is a beta version of EigenDA network for functional and load testing. This environment is set up as a separate AVS on mainnet and targeted for registered mainnet operators only. No rollup integrations can be made on Mainnet Beta, and only V2 (Blazar) mode is supported.

:::important
To reuse existing stake, operators should use the same ECDSA key from mainnet but **must** generate a new BLS key. 
:::

Please refer to [this guide](https://github.com/Layr-Labs/eigenda-operator-setup/tree/master/mainnet-beta#mainnet-beta-specific-instructions--requirements) for additional steps for setting up a validator on Mainnet Beta.

## Quick Links

* [AVS Page][1]
* Blob Explorer Blazar (V2): coming soon

## Specs

| Property | Value |
| --- | --- |
| DataAPI Address | `dataapi-mainnet-beta.eigenda.xyz` |
| Churner Address | `churner-mainnet-beta.eigenda.xyz:443` |
| Batch Dispersal Interval | Every 1 second (may vary based on network health) |
| Min Blob Size | 128 KiB |
| Max Blob Size | 16 MiB |

## Contract Addresses

| Contract | Address |
| --- | --- |
| EigenDAServiceManager | [0xd314209cE0ae9aDfD7643BB9d8becD62290D826a](https://etherscan.io/address/0xd314209cE0ae9aDfD7643BB9d8becD62290D826a) |
| BLSOperatorStateRetriever | [0x9E874193D8d500371bE151f2Bb8512Fc48a1f5aa](https://etherscan.io/address/0x9E874193D8d500371bE151f2Bb8512Fc48a1f5aa) |
| CertVerifier | [0x9D901Ea8971287294b417277c6176fE8172Fec6F](https://etherscan.io/address/0x9D901Ea8971287294b417277c6176fE8172Fec6F) |


## Quorums

| Quorum Number | Token |
| --- | --- |
| 0 | ETH, LSTs |
| 1 | [EIGEN](https://etherscan.io/address/0xec53bF9167f50cDEB3Ae105f56099aaaB9061F83) |

[1]: https://app.eigenlayer.xyz/avs/0xd314209ce0ae9adfd7643bb9d8becd62290d826a