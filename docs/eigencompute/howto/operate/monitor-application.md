---
title: Monitor Application
sidebar_position: 1
---

## Get application information

```bash
eigenx app info my-app
```

Output:
```
App Name: my-app
App ID: 0x01354ee823Dc898F6500c071348BA5523891aafd
Latest Release Time: 2025-10-02 14:02:48
Status: Running
IP: 34.71.169.252
EVM Address: 0x5d5d34E9406459C67Bf4D7C4F179282F8d02D672 (path: m/44'/60'/0'/0/0)
Solana Address: 432ap3zrxTAsDaXu7wdSp3d14srqLhhdvMsF3awbHJco (path: m/44'/501'/0'/0')
```

## View logs from TEE instance

### View recent logs

```bash
eigenx app logs trading-bot
```

### Watch logs continuously

```bash
eigenx app logs --watch trading-bot
```

This continuously fetches and displays log updates. Use `Ctrl+C` to stop.

## Use Cases

### Monitor logs in real-time

```bash
eigenx app logs --watch my-app
```

### Save logs for analysis

```bash
eigenx app logs my-app > logs.txt
```

### Filter logs

```bash
eigenx app logs my-app | grep -i error
eigenx app logs my-app | grep "Transaction executed"
```