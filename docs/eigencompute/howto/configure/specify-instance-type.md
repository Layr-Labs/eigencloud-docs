---
title: Specify instance type
sidebar_position: 1
---

When deploying an EigenCompute app, the machine instance type appropriate for the app vCPU and memory use is specified.

## Available Instance Types

| Machine type     | vCPUs   |  Memory  | Architecture |
|------------------|:-------:|:--------:|---------------|
| g1-standard-4t   |    4    |  16 GB   | Intel TDX     |
| g1-standard-8t   |    8    |  32 GB   | Intel TDX     |

To specify or change the instance type use the `--instance-type` flag on [`deploy`](../../reference/ecloud-cli/compute/app.md#deploy) or [`upgrade`](../../reference/ecloud-cli/compute/app.md#deploy) commands.


