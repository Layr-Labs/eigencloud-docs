---
sidebar_position: 3
---

# Sepolia

The EigenDA Sepolia testnet is the current EigenDA testnet for integrations.

## Quick Links

* [AVS Page][2]
* [Blob Explorer Blazar (V2)][1]

## Specs

| Property | Value |
| --- | --- |
| Disperser Address | `disperser-testnet-sepolia.eigenda.xyz:443` |
| Max Blob Size | 16 MiB |

## Contract Addresses

| Contract | Address |
| --- | --- |
| EigenDADirectory | [0x9620dC4B3564198554e4D2b06dEFB7A369D90257](https://sepolia.etherscan.io/address/0x9620dC4B3564198554e4D2b06dEFB7A369D90257) |

All other contracts are now tracked inside the EigenDADirectory contract:
1. Click on the etherscan link above.
2. Click on the "Contract" button.
3. Click on the "Read as Proxy" button.
4. Click on "getAllNames()" function to see the name of all registered contracts.
5. Use the "getAddress()" function to get the address of a specific contract, using its name.

![](/img/eigenda/eigenda-directory-etherscan.png)

## Quorums

| Quorum Number | Token |
| --- | --- |
| 0 | LSTs |
| 1 | [WETH](https://sepolia.etherscan.io/token/0xf531b8f309be94191af87605cfbf600d71c2cfe0) |

[1]: https://blobs-v2-testnet-sepolia.eigenda.xyz/
[2]: https://sepolia.eigenlayer.xyz/avs/eigenda