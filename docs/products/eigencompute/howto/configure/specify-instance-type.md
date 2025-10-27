---
title: Specify Instance Type
sidebar_position: 1
---

When deploying an EigenCompute app, the machine instance type appropriate for the app vCPU and memory use is specified.

## Available Instance Types

| Machine type     | vCPUs   |  Memory  | Architecture |
|------------------|:-------:|:--------:|---------------|
| g1-standard-4t   |    4    |  16 GB   | Intel TDX     |
| g1-standard-8t   |    8    |  32 GB   | Intel TDX     |

## Use --instance-type flag

To specify the instance type using the `--instance-type` flag:

```
eigenx app deploy --instance-type g1-standard-8t
```

## Specify when Prompted

If the instance type not specified on the command line, you are prompted to select an instance type when running `eigenx app deploy`.

## Change Instance Type for Deployed App

To change the instance type for a deployed app: 

```
eigenx app upgrade --instance-type g1-standard-8t
```


