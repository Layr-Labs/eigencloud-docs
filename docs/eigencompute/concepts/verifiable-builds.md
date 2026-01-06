---
title: Verifiable Builds
sidebar_position: 5
---

Verifiable builds provide cryptographic proof linking the source code and build process for EigenCompute applications. EigenCompute verifiable builds
enable users to cryptographically verify that a running container was built from a specific GitHub commit. 

EigenCompute uses the [Google Cloud Build SLSA provenance system](https://cloud.google.com/build/docs/securing-builds/generate-validate-build-provenance/)
to provide the build digest that is cryptographically signed by Google Cloud Build and includes:

* Git repository URL
* Exact commit SHA
* Dockerfile path and build context
* All dependency image digests
* Build timestamp.

Verifiably built containers are stored publicly in [Docker Hub](https://hub.docker.com/r/eigenlayer/eigencloud-containers).

The [Verifiability Dashboard](https://verify.eigencloud.xyz/) displays the status of source code verification for applications.

For information on how to build verifiably, see [Build from verfiable source](../howto/build/verifiable-builds/build-from-verifiable-source.md). 

## Dependencies

For an application to be verifiably built, every layer of the application stack must be verifiably built. You cannot include
unverified code in a verifiable build.

When you submit a build with dependencies, each dependency:

1. Must be a previously verifiably built image.
2. Must have valid SLSA provenance.
3. Must have it's digest recorded in your build's provenance.

When submitting a build with dependencies, provenance is validated and dependency digests are recorded in the build's SLSA provenance.

The [EigenCompute TLS and KMS clients are prebuilt](https://github.com/Layr-Labs/eigencompute-containers) and the digests included in all EigenCompute applications.

EigenCompute applications with dependencies other than the TLS and KMS clients must submit those verifiable builds and include
the dependency's image digest when verifiably building the application.

## Guarantees

| Property              | Guarantee                                               |
|-----------------------|---------------------------------------------------------|
| Source Verification   | Every line of code traces back to a specific git commit  |
| Build Reproducibility | Same inputs always produce same provenance               |
| Dependency Integrity  | No unverified code can be injected                       |
| Tamper Evidence       | Any modification breaks the cryptographic chain          |
