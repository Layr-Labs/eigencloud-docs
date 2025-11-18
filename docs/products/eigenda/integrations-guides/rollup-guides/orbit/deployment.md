---
title: Deploying a new chain
---

# Arbitrum Orbit Deployment

[Arbitrum
Orbit](https://docs.arbitrum.io/launch-orbit-chain/orbit-gentle-introduction) is
a Rollup Development Kit (RDK) developed by [Offchain
Labs](https://www.offchainlabs.com/) to enable rollup developers to build
 using the same software that powers *Arbitrum One* and *Arbitrum Nova*.

## EigenDA Proxy

Arbitrum nodes communicate with EigenDA via the proxy for secure communication and low code overhead. More information can be found [here](../../eigenda-proxy/eigenda-proxy.md). An instance of proxy **must** be spun-up to use this integration securely. In your node config, this will look like:
```
"eigen-da": {"enable": true,"rpc": "http://eigenda_proxy:3100"}
```

CLI flags are available to enable EigenDA on a Nitro node:
```
--node.eigen-da.enable=true
--node.eigen-da.rpc=http://eigenda_proxy:3100
```

## How to deploy a Rollup Creator integrated with EigenDA

1. Assuming you have yarn and hardhat installed. 

2. Download the nitro contracts source [code](https://github.com/Layr-Labs/nitro-contracts) from the EigenDA Nitro contracts fork using the latest stable version [release](https://github.com/Layr-Labs/nitro-contracts/releases).

3. Within the high level directory, create a new deployment config using existing template:
```
cp scripts/config.ts.example scripts/config.ts
```

Based on your parent chain level (i.e, L1 vs L2), update the `maxDataSize` field accordingly. Typically this is set as:
- `117964` for L2s settling to Ethereum
- `104857` for L3s

**Please note that this is set in accordance with network specific parameters (i.e, tx calldata limits) and may require changing when deploying to novel settlement domains**

4. Run command to initiate the deployment:
```bash
yarn deploy-factory --network ${NETWORK_ID} 
```

To see all relevant environment context to understand which env vars to provide, please advise the [*hardhat.config.ts*](https://github.com/Layr-Labs/nitro-contracts/blob/278fdbc39089fa86330f0c23f0a05aee61972c84/hardhat.config.ts) file for a more in-depth breakdown. 

The script will take a few minutes to complete as it prints out the addresses of the deployed contracts along the way. Upon completion, your rollup creator factory is ready to use for new chain deployments!

**NOTE: Since this script is hardhat, there are no state checkpoints that happen if a terminal failure occurs midway through execution. Please use at your own risk and ensure that you're connected to a stable RPC provider and have sufficient funds before beginning the deployment.**

### Deploy using our hosted Rollup Creators
The Orbit [documentation](https://docs.arbitrum.io/launch-orbit-chain/how-tos/orbit-sdk-deploying-rollup-chain) provides a comprehensive overview for how one can trigger new chain deployments using already deployed rollup creators. If you'd like to leverage the orbit-sdk please use our fork [here](https://github.com/Layr-Labs/eigenda-orbit-sdk).

Additionally, we maintain the following Rollup Creator factories:

| Contracts Version | Network | Rollup Creator Address | EigenDAV1 CertVerifier Address |
|---------|---------|---------|-----------|
| [v2.1.3](https://github.com/Layr-Labs/nitro-contracts/releases/tag/v2.1.3)  | Ethereum Mainnet | [0xdD6258539c41687B9afd38983c0456493423C73d](https://etherscan.io/address/0xdD6258539c41687B9afd38983c0456493423C73d#code) | [0x787c88E70900f6AE10E7B9D18024482895EBD1eb](https://etherscan.io/address/0x787c88E70900f6AE10E7B9D18024482895EBD1eb#code) |
| [v2.1.3](https://github.com/Layr-Labs/nitro-contracts/releases/tag/v2.1.3)  | Ethereum Sepolia | [0x5af6fe79EB79A8177268ab143f31f7e0A9b7Fd53](https://sepolia.etherscan.io/address/0x5af6fe79EB79A8177268ab143f31f7e0A9b7Fd53#code) | [0xb1ffa45789f1e3ea513d58202389c8eea1e6de4e](https://sepolia.etherscan.io/address/0xb1ffa45789f1e3ea513d58202389c8eea1e6de4e#code) |
| [v2.1.3](https://github.com/Layr-Labs/nitro-contracts/releases/tag/v2.1.3)  | Arbitrum Mainnet | [0x4231Dd9e6717aB9a9ABC5618d8a4Fcf1a432F698](https://arbiscan.io/address/0x4231Dd9e6717aB9a9ABC5618d8a4Fcf1a432F698#code) | **NA** |
| [v2.1.3](https://github.com/Layr-Labs/nitro-contracts/releases/tag/v2.1.3)  | Arbitrum Sepolia | [0x0F7f71c48c6278422736a4a9441cd1d59ba0C2dB](https://sepolia.arbiscan.io/address/0x0F7f71c48c6278422736a4a9441cd1d59ba0C2dB#code) | **NA** |
| [v2.1.3](https://github.com/Layr-Labs/nitro-contracts/releases/tag/v2.1.3)  | Base Mainnet     | [0xcC272c9249d1638B7985eFb84c0E9Cdc001b73F7](https://basescan.org/address/0xcC272c9249d1638B7985eFb84c0E9Cdc001b73F7#code) | **NA** |
| [v2.1.3](https://github.com/Layr-Labs/nitro-contracts/releases/tag/v2.1.3)  | Base Sepolia     | [0xfc2a0CD44A6CB0b72d5a7F8Db2C044F62db50781](https://sepolia.basescan.org/address/0xfc2a0CD44A6CB0b72d5a7F8Db2C044F62db50781) | **NA**


**The cert verifier address is necessary for verifying V1 EigenDA blobs within the `SequencerInbox` to remove a trust assumption on the sequencer. This can be set within the `params` section of the orbit sdk.**

### Migrate or upgrade using our hosted `NitroContractsEigenDA2Point1Point3UpgradeAction`
See how to run or deploy yourself [here](https://github.com/Layr-Labs/orbit-actions/tree/main/scripts/foundry/contract-upgrades/eigenda-v2.1.3). All contracts listed below have been enabled for upgrade to the consensus-eigenda-v32.3 WASM [artifact](https://github.com/Layr-Labs/nitro/releases/tag/consensus-eigenda-v32.3).

| Network          | Address                                      | Cert Verification Enabled | Explorer Link                                                                                    | MaxDataSize |
| ---------------- | -------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------ | ----------- |
| **Eth Mainnet**  | `0x128f64272804f17502A189A862449F2C8d6B5448` | true                 | [Etherscan](https://etherscan.io/address/0x128f64272804f17502A189A862449F2C8d6B5448)     | 117964      |
| **Eth Sepolia**  | `0x8b4b9BA6715aB493073d9e8426f3E9eb8404f12a` | true                 | [Etherscan](https://sepolia.etherscan.io/address/0x8b4b9BA6715aB493073d9e8426f3E9eb8404f12a)     | 117964      |
| **Base Sepolia** | `0x28303a297e31ac5376047b128867e9D339B58Bf0` | false                 | [BaseScan](https://sepolia.basescan.org/address/0x28303a297e31ac5376047b128867e9D339B58Bf0#code) | 104857      |
| **Arbitrum One** | `0xf099152D84dd3473442Ee659276b6d374c008c5a` | false                  | [Arbiscan](https://sepolia.arbiscan.io/address/0xf099152D84dd3473442Ee659276b6d374c008c5a)       | 104857      |


## How to deploy a Rollup on Testnet using our UI

While you can interact with the deployed Rollup creator directly, we recommend using our [orbit chain deployment portal](https://orbit.eigenda.xyz/) to deploy a rollup for a friendlier devx and easy-to-use configs. Currently, the UI only supports testnets for:
- Ethereum Sepolia
- Arbitrum Sepolia
- Base Sepolia


### Troubleshooting
If your nitro setup script node encounters a warning `error getting latest batch count: no contract code at given address`, you should first verify that:
- That the `SequencerInbox` entry in your `/config/orbitSetupScriptConfig` maps to a successfully deployed contract
- Your RPC provider is sufficiently reliable. Transient errors are common when leveraging free and public RPC providers

## Token Bridge

The Arbitrum token bridge can be enabled to support L1 to/from L2 bridging of ERC-20 assets. Since the token bridge is a wrapper on-top of the existing L1 to/from L2 native bridge, there are no changes necessary to enable it. Additionally, the [existing](https://docs.arbitrum.io/build-decentralized-apps/reference/contract-addresses#token-bridge-smart-contracts) token bridge creators maintained by Offchain labs can be leveraged to deploy token bridges on-top of existing inboxes integrated EigenDA.