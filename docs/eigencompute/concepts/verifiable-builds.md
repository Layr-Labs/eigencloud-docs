---
title: Verifiable Builds
sidebar_position: 5
---

Verifiable builds provide cryptographic proof of the origin and build process for applications. EigenCompute verifiable builds
enable users to attribute a specifc GitHub commit to the running container for an EigenCompute application. 

EigenCompute uses the [Google Cloud Build SLSA provenance system](https://cloud.google.com/build/docs/securing-builds/generate-validate-build-provenance/)
to provide the digest that is cryptographically signed by Google Cloud Build and includes:

* Git repository URL
* Exact commit SHA
* Dockerfile path and build context
* All dependency image digests
* Build timestamp.

Verifiably built containers are stored publicly in Docker Hub.

## Dependencies

For an application to be verifiably built, every layer of the application stack must be verifiably built. You cannot include
unverified code in a verifiable build.

When you submit a build with dependencies, each dependency:

1. Must be a previously verifiably built image.
2. Must have valid SLSA provenance.
3. Must have it's digest recorded in your build's provenance.

When submitting a build with dependencies, provenance is validated and dependency digests are recorded in the build's SLSA provenance.

The tls-keygen and kms-client images are prebuilt and the digests included in all EigenCompute applications.

TODO - add example of when you'd need to include a dependency. 

## Guarantees

| Property              | Guarantee                                               |
|-----------------------|---------------------------------------------------------|
| Source Verification   | Every line of code traces back to a specific git commit  |
| Build Reproducibility | Same inputs always produce same provenance               |
| Dependency Integrity  | No unverified code can be injected                       |
| Tamper Evidence       | Any modification breaks the cryptographic chain          |

TODO - builds are not bit for bit reproducible are they? 