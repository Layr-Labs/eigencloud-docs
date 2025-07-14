---
sidebar_position: 5
title: Using Hourglass to Implement Your AVS
---

## What Hourglass Provides 

The Hourglass template provides a basic structure for building an AVS with the Hourglass framework. It includes:

* A stub of Go code for your Performer. 
* Default `TaskAVSRegistrar` and `AVSTaskHook` AVS contracts that work out of the box. These contracts can be extended to add additional onchain logic.
* All dependent contracts required by the framework and the scripts to deploy them. The scripts are managed by the Devkit CLI.
* A docker-compose stack to run an Aggregator and Executor locally to test your AVS. 
* Integration with the DevKit CLI. DevKit provides a streamlined, modular experience for scaffolding your projects, compiling, running local networks, and testing.

## What You Need to Implement

| Component                                           | Purpose               | Developer to Implement                       | Required or Optional | 
|-----------------------------------------------------|-----------------------|----------------------------------------------|----------------------| 
| `main.go`                                           | Task logic            | Write AVS-specific task processing           | Required             | 
| Smart Contracts (`TaskAVSRegistrar`, `AVSTaskHook`) | Onchain AVS logic     | Modify if you need custom onchain behavior   | Optional             | 
| Config files (`.hourglass`, `.devkit`)              | Runtime and CLI setup | Customize paths, images, and network         | Optional             | 
| Task Input                                          | Task testing          | Create representative input data             | Optional             | 
| `docker-compose.yml`                                | Local setup           | Edit to match your environment               | Optional             |

## Local Development and Testing 

### Task processing in main.go 

`main.go` implements the offchain binary run by Operators running the Hourglass Executor. That is, the core business logic
for processing tasks. It contains the business logic of the AVS and performs worked based on the tasks sent to it. 

The Hourglass Aggregator ingests tasks from the TaskMailbox and distributes work to Executors configured to run the AVS Performer. 

Performers execute the work and return the result to the Executor where the result is signed and returned to the Aggregator to
place in the outbox once the signing threshold is met.

Minimal `VadildateTask` and `HandleTask`functions are provided in `main.go` to get you started. The code can be restructured
as needed for your AVS requirements.

### Core business logic for AVS

The example `HelloWorld.sol` contract is included. Delete and replace with a contract implementing your AVS logic.

### Task Callback Logic in AVSTaskHook 

Extend `AVSTaskHooks` to include additional onchain logic to:
* Validate the task lifecycle.
* Create a fee market for your AVS.

### Contract Deployment in DeployMyContracts.s.sol

Wire up your contracts in `DeployMyContracts.s.sol`. This script is automatically called during `devkit avs devnet start`.

## Deployment to Testnet

### Operator Registration in TaskAVSRegistrar

`TaskAVSRegistrar` defines which Operators can register as an Operator for your AVS to be an Aggregator and/or an Executor.

:::tip
When running the devnet locally, Operators are set up by Hourglass and Operator registration does not need to be implemented.
:::

For detailed information on the Hourglass framework, refer to the [Readme in the Hourglass repo](https://github.com/Layr-Labs/hourglass-avs-template).