---
sidebar_position: 5
title: Using Hourglass to Implement Your AVS
---

## What Hourglass Provides 

The Hourglass template provides a basic structure for building an AVS with the Hourglass framework. It includes:

* A stub of Go code for your Performer to get you started. 
* Default `TaskAVSRegistrar` and `AVSTaskHook` AVS contracts that work out of the box. Can be extended to add additional onchain logic.
* All the dependent contracts for the framework to work and scripts to deploy them. The scripts are managed by the Devkit CLI.
* A docker-compose stack to run an Aggregator and Executor locally to test your AVS. Both the Aggregator and Executor are run by EigenLayer Operators when you launch your AVS, so we've given you the full stack to run locally to make development and testing easier.
* Integration with the DevKit CLI. DevKit provides a streamlined, modular experience for scaffolding your projects, compiling, running local networks, and testing.

## What You Need to Implement

| Component                              | Purpose               | Developer to Implement                     | Required or Optional | 
| -------------------------------------- | --------------------- |--------------------------------------------|----------------------| 
| `main.go`                              | Task logic            | Write AVS-specific task processing         |               | 
| Smart Contracts                        | On-chain AVS logic    | Modify if you need custom on-chain behavior |               | 
| Config files (`.hourglass`, `.devkit`) | Runtime and CLI setup | Customize paths, images, and network       |               | 
| Task Input                             | Task testing          | Create representative input data           |               | 
| `docker-compose.yml` (optional)        | Local setup           | Edit to match your environment             |               |