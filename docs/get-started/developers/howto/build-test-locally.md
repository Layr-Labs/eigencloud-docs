---
title: Build and Test Locally
sidebar_position: 2
---

Building with DevKit enables:
* A rapid local iteration loop removing the need for lengthy testnet deployments. 
* Built-in observability and error handling removing the need for protocol-level debugging to understand what's going wrong.

Prerequisites:

[Get Started Building a Task-based AVS](start-building-task-based-avs.md)

To build and test locally:
1. [Set the RPC endpoint URL](#1-set-the-rpc-endpoint-url)
2. [Build your AVS](#2-build-your-avs)
3. [Run AVS tests](#3-run-avs-tests) 
4. [Test AVS with local devnet or by simulating tasks](#4-test-avs)

## 1. Set the RPC Endpoint URL

In the `.env` file, set the `*_FORK_URL` values to Ethereum Sepolia (`L1_FORK_URL`) and Base Sepolia (`L2_FORK_URL`) 
RPC archive node endpoint URLs. Use any reliable RPC provider (for example, QuickNode, Alchemy).

```
cp .env.example .env
# edit `.env` and set your L1_FORK_URL and L2_FORK_URL to point to your RPC endpoints
```

:::note
Currently, only the Sepolia testnet is supported.
The RPC endpoint must be an [archive node, not a full node](https://www.quicknode.com/guides/infrastructure/node-setup/ethereum-full-node-vs-archive-node).
:::

## 2. Build Your AVS

Compile AVS contracts and offchain binaries before running a devnet or simulating tasks. 

In the project directory, run: 

```
devkit avs build
```

## 3. Run AVS Tests

Run offchain unit tests and onchain contract tests to ensure your business logic and smart contracts are functioning correctly
before deploying.

In the project directory, run: 

```
devkit avs test
```

## 4. Test AVS

DevKit provides two options for testing AVS functionality: 
* Running a local Devnet to simulate the full AVS environment. 
* Triggering task execution to simulate how a task is submitted, processed, and validated. 

### Local Devnet

Test and iterate without needing to interact with testnet or mainnet. Devkit:
* Spins up a local Devnet and deploys contracts, registers operators, and runs offchain infrastructure. 
* Automatically funds wallets (`operator_keys` and `submit_wallet`) if balances are below 10 ETH.

:::important
Ensure your Docker daemon is running before launching local Devnet.
:::

Devkit forks Ethereum Sepolia using the fork URL (provided by you) and a block number. We recommend specifying the fork URL
in a [`.env` file](#1-set-the-rpc-endpoint-url). The `.env` file takes precedence over `config/context/devnet.yaml`. 

In your project directory, run:
```
devkit avs devnet start
```

Devnet management commands listed below.

| Command                | Description                                                   |
|------------------------|---------------------------------------------------------------|
| `start`                | Start local Docker containers and contracts                   |
| `stop`                 | Stop and remove containers from the AVS project               |
| `list`                 | List active containers and their ports                        |
| `stop --all`           | Stops all devkit devnet containers that are currently running |
| `stop --project.name`  | Stops the specified project devnet                            |
| `stop --port`          | Stops the specified port (for example, `stop --port 8545`)    |

###  Simulate Task Execution

Trigger task execution through your AVS to simulate how a task would be submitted, processed, and validated. Useful for 
testing end-to-end behavior of your AVS logic in a local environment. Devkit enables: 

* Simulating the full lifecycle of task submission and execution.
* Validating both off-chain and on-chain logic.
* Reviewing detailed execution results.

From your project directory, run:

```
devkit avs call signature="(uint256,string)" args='(5,"hello")'
```

Optionally, submit tasks directly to the on-chain TaskMailbox contract via a frontend or another method for more realistic
testing scenarios.

Next:

[Publish Task-based AVS](publish-task-based-avs-release.md)

:::tip
Optional DevKit commands are described in the [DevKit repo](https://github.com/Layr-Labs/devkit-cli).
:::