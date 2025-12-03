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

`eigenx env set [--yes] <environment>`

### Arguments

`environment` (string)

> Environment name (`sepolia` or `mainnet-alpha`).

### Options

`--yes` (boolean)

> Skip confirmation prompts. Default is false.

The [shared option](shared-options) `--help, -h` is available.

## list

List all available deployment environments.

### Synopsis

`eigenx environment list`

### Options

The [shared option](shared-options) `--help, -h` is available.

## show

Display the currently active deployment environment.

### Synopsis

`eigenx environment show`

### Options

The [shared option](shared-options) `--help, -h` is available.


`

