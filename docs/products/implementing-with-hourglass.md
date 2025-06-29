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
|-----------------------------------------------------| --------------------- |----------------------------------------------|----------------------| 
| `main.go`                                           | Task logic            | Write AVS-specific task processing           | Required             | 
| Smart Contracts (`TaskAVSRegistrar`, `AVSTaskHook`) | On-chain AVS logic    | Modify if you need custom onchain behavior  | Optional             | 
| Config files (`.hourglass`, `.devkit`)              | Runtime and CLI setup | Customize paths, images, and network         | Optional             | 
| Task Input                                          | Task testing          | Create representative input data             | Optional             | 
| `docker-compose.yml`                                | Local setup           | Edit to match your environment               | Optional             |

For detailed information on the Hourglass framework, refer to the [Readme in the Hourglass repo](https://github.com/Layr-Labs/hourglass-avs-template).