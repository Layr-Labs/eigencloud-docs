---
title: create
sidebar_position: 2
---

## Description

Create an application project from a template with all necessary configuration files. For more information on creating
applications, refer to [Create Application](../../../howto/build/create-app-from-template.md).

## Synopsis

`eigenx app create [name] [language] [--template <url>] [--template-version <version>]`

## Arguments

`name` (string)

> Name for your application directory. Prompted for if not provided.

`language` (string)

> Language to use for template. Prompted for if not provided. Options are:
>  * `typescript` - use for Web services, APIs, bots                       
>  * `python` - use for ML/AI, data processing, scripts
>  * `golang` - use for high-performance services                      
>  *  `rust`  - use for systems programming, performance-critical apps

## Options

`--template <url>` (string)

> Custom template repository URL.

`--template-version <version>` (string)

> Template version/tag to use.

## Global Options 

Global options available are `--verbose, -v`, `--enable-telemetry`, `--disable-telemetry`, `--help, -h`. Refer to [Overview](app.md#global-options) for more information.