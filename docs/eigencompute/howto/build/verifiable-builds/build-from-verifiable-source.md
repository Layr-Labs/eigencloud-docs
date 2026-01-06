---
title: Build from verifiable source
sidebar_position: 1
---

To build from a verifiable source, options are: 

1. Use the `ecloud compute build submit` command to submit a verifiable build from GitHub source.
2. Use the verifiable flow (by specifying `--verifiable` or selecting `Yes` when prompted) when deploying or upgrading.

## Submit from GitHub source

To submit a verifiable build from GitHub source, specify the required options or supply when prompted:

* `--repo` (`ECLOUD_BUILD_REPO`) 
* `--commit` (`ECLOUD_BUILD_COMMIT`) 
* `--dockerfile` (`ECLOUD_BUILD_DOCKERFILE`, default is `Dockerfile`)
* `--context` (`ECLOUD_BUILD_CONTEXT`, default is `.`) 
* `--dependencies sha256:...` (repeatable; prompt supports comma-separated)
* `--build-caddyfile` (`ECLOUD_BUILD_CADDYFILE`) (optional)
* `--no-follow` 
* `--json`

For example:
TODO - add example.

Once built and verified, the image can be specified as a prebuilt image when deploying or upgrading.

## Submit when deploying or upgrading

To submit when deploying or upgrading, specify the `--verifiable` option for the `ecloud compute app` command, or select
`Yes` when prompted. 

When deploying or upgrading, specify a GitHub source using the [relevant options](#submit-from-github-source) or specify
a prebuilt verifiable image using the `--image-ref` option.

For example:
TODO - add examples.

## Submitting builds with dependencies

To specify prebuilt dependencies to include in a verifiable build, use the `--dependencies` option for `ecloud compute build`,
`ecloud compute app deploy` or `ecloud compute app upgrade`

:::note
TODO - add point about tls-keygen and kms-client. 
:::