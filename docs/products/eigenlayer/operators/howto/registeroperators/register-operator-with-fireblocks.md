---
sidebar_position: 2
title: Install and Register Operators using Fireblocks
---

The steps below specify how to onboard to EigenLayer and connect to an AVS when using [Fireblocks](https://www.fireblocks.com/).

## 1. Install the EigenLayer CLI 

Follow the steps in [Node Operator Checklist](operator-installation.md#node-operator-checklist) and [CLI Installation](operator-installation.md#cli-installation).

## 2. Create Firebocks Key

In your Fireblocks console, create a ETH-type key to be your Operator address.

## 3. Fund the Operator Account

In Fireblocks, retrieve the deposit address of your Operator key. The deposit address is the ECDSA public key of your Operator.

Fund the Operator account:

• On the Sepolia testnet: [Use a faucet](../../../restakers/restaking-guides/testnet/obtaining-testnet-eth-and-liquid-staking-tokens-lsts.md#obtain-sepolia-eth-sepeth-via-a-faucet).

• On Mainnet: Maintain at least 1 ETH in your Operator account.

## 4. Create Operator Configuration

Run: 

```
eigenlayer operator config create
```

A prompt is displayed. 

```
Would you like to populate the operator config file? 
```

Select No.

## 5. Populate metadata.json

Open the generated `metadata.json` file. Populate as specified in [Operator Configuration and Registration](operator-installation.md#operator-configuration-and-registration).

Host the `metadata.json` file at a publicly accessible URL (for example, GitHub pages, S3, or IPFS).

## 6. Populate operator.yaml 

Open the generated `operator.yaml` file. 

### Operator Section

In the `Operator` section, specify: 

```
Operator:
  address: "<your-operator-address>"
  delegation_approver_address: "<your-delegation-approver>"
  metadata_url: "<link-to-your-metadata.json>"
  allocation_delay: <integer-blocks>
  el_delegation_manager_address: "<DelegationManager-proxy>"
  eth_rpc_url: "<Ethereum-RPC-URL>"
  chain_id: <chain-id>
  signer_type: "fireblocks"
```

:::important
The allocation delay specifies how many blocks must pass before any allocations become live in an Operator Set. 
For example, if the allocation dalay is set to 1200, and a Staker allocates funds to your Operator,  the funds do no not 
become live before the 1200 block delay. The allocation delay applies globally across all Operator Sets and Strategies 
and can be any unsigned integer. Any change to the allocation delay has a 17.5 day delay before taking effect. See the [Safety Delays reference](../../../reference/safety-delays-reference.md) for
more information.
:::

#### EL Delegation Manager Address 

You must configure the correct `DelegationManager` contract address for your environment. The Proxy addresses for 
`DelegationManager` for your environment (Mainnet, Sepolia, Hoodi, Holesky) are listed in the [GitHub repository](https://github.com/Layr-Labs/eigenlayer-contracts?tab=readme-ov-file#deployments). 

Set the value for `el_delegation_manager_address` in your `operator.yaml` file to the appropriate address.

### Fireblocks Section 

In the `fireblocks` section, specify: 

```
fireblocks:
  api_key: "<your-fireblocks-api-key>"
  secret_key: "<your-fireblocks-secret>"               # Fireblocks secret key. If you are using AWS Secret Manager, this should be the secret name.
  base_url: "<your-fireblocks-api-base-url>"
  vault_account_name: "<your-vault-account-name>"
  secret_storage_type: "plaintext"                     # or "aws_secret_manager" if you are using AWS Secrets Manager
  aws_region: "<your-aws-secret-manager-region>"       # if using AWS Secret Manager, leave blank if plaintext
  timeout: <integer-seconds>
```

## 7. Register your Operator for EigenLayer

Run: 

```
eigenlayer operator register operator.yaml
```