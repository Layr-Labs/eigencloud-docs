---
title: configure
sidebar_position: 12
---

Add TLS/HTTPS configuration to your project for secure domain access. This command adds:

* Caddy Server Configuration - Automatic HTTPS with [Let's Encrypt](https://letsencrypt.org/) using [Caddyfile](https://caddyserver.com/docs/caddyfile)
* Environment Variables - Example TLS configuration in `.env.example.tls`

For more information on configuring TLS, refer to [Configure TLS](../../../howto/deploy-to-production/configure-tls.md).

## Synopsis

`eigenx app configure tls`

## Subcommands

`tls`

> Adds TLS configuration to the application.

## Global Options

The global option `--help, -h` is available. 