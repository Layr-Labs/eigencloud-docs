---
title: environment
sidebar_position: 5
---

Manage deployment environments to switch between Mainnet and Sepolia testnet.

## Available Commands

* [set](#set)
* [list](#list)
* [show](#show)

## set

Switch to a different deployment environment.

### Synopsis

`ecloud compute env set [--yes] <environment>`

### Arguments

`environment` (string)

> Environment name (`sepolia` or `mainnet-alpha`).

### Options

`--yes` (boolean)

> Skip confirmation prompts. Default is false.

## list

List all available deployment environments.

### Synopsis

`ecloud compute environment list`

## show

Display the currently active deployment environment.

### Synopsis

`ecloud compute environment show`

`

