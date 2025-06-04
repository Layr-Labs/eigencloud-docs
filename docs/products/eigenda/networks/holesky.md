---
sidebar_position: 2
---

# Holesky

The EigenDA Holesky testnet is the current EigenDA testnet for operators. The EigenDA Holesky testnet was preceded by the now-sunset [EigenDA Goerli testnet](./goerli.md).

## Quick Links

* [AVS Page][2]
* [Blob Explorer V1][1]
* [Blob Explorer Blazar (V2)][4]
* [Deployed Contract Addresses][3]

## Specs

| Property | Value |
| --- | --- |
| Disperser Address | `disperser-holesky.eigenda.xyz:443` |
| Churner Address | `churner-holesky.eigenda.xyz:443` |
| Batch Confirmation Interval (V1) | Every 10 minutes (may vary based on network health) |
| Max Blob Size | 16 MiB |
| Default Blob Dispersal Rate limit | No more than 1 blob every 100 seconds |
| Default Blob Size Rate Limit | No more than 1.8 MiB every 10 minutes |
| Stake Sync (AVS-Sync) Interval | Every 24 hours |
| Ejection Cooldown Period | 24 hours |

## Contract Addresses

| Contract | Address |
| --- | --- |
| RegistryCoordinator | [0x53012C69A189cfA2D9d29eb6F19B32e0A2EA3490](https://holesky.etherscan.io/address/0x53012C69A189cfA2D9d29eb6F19B32e0A2EA3490) |
| StakeRegistry | [0xBDACD5998989Eec814ac7A0f0f6596088AA2a270](https://holesky.etherscan.io/address/0xBDACD5998989Eec814ac7A0f0f6596088AA2a270) |
| IndexRegistry | [0x2E3D6c0744b10eb0A4e6F679F71554a39Ec47a5D](https://holesky.etherscan.io/address/0x2E3D6c0744b10eb0A4e6F679F71554a39Ec47a5D) |
| BLSApkRegistry | [0x066cF95c1bf0927124DFB8B02B401bc23A79730D](https://holesky.etherscan.io/address/0x066cF95c1bf0927124DFB8B02B401bc23A79730D) |
| EigenDAServiceManager | [0xD4A7E1Bd8015057293f0D0A557088c286942e84b](https://holesky.etherscan.io/address/0xD4A7E1Bd8015057293f0D0A557088c286942e84b) |
| BLSOperatorStateRetriever | [0xB4baAfee917fb4449f5ec64804217bccE9f46C67](https://holesky.etherscan.io/address/0xB4baAfee917fb4449f5ec64804217bccE9f46C67) |
| PaymentVault | [0x4a7Fff191BCDa5806f1Bc8689afc1417c08C61AB](https://holesky.etherscan.io/address/0x4a7Fff191BCDa5806f1Bc8689afc1417c08C61AB) |

## Quorums

| Quorum Number | Token |
| --- | --- |
| 0 | ETH, LSTs |
| 1 | [WETH](https://holesky.etherscan.io/address/0x94373a4919B3240D86eA41593D5eBa789FEF3848) |
| 2 | [reALT](https://holesky.etherscan.io/address/0x2ff89Aa21D2FB7B00F28A3d224ECf5854ea162f4) |

[1]: https://blobs-holesky.eigenda.xyz/
[2]: https://holesky.eigenlayer.xyz/avs/eigenda
[3]: https://github.com/Layr-Labs/eigenlayer-middleware/?tab=readme-ov-file#current-testnet-deployment
[4]: https://blobs-v2-testnet-holesky.eigenda.xyz/
