---
title: Get Started Building a Task-based AVS
sidebar_position: 1
---

To get started: 

1. Install DevKit

    ```
    curl -fsSL https://raw.githubusercontent.com/Layr-Labs/devkit-cli/main/install-devkit.sh | bash
    ```

    For more installation options, refer to the [DevKit repo Readme](https://github.com/Layr-Labs/devkit-cli).

2. Verify the installation 

    ```
    devkit --help
    ```

3. Scaffold your AVS project 

    ```
    devkit avs create my-avs-project ./
    ```

    :::note
    On macOS and Debian, running the `avs create` installs all required dependencies and version numbers automatically. For other OSs, 
    manual installation of software prerequisites is required. For software prerequisites, refer to the [DevKit repo Readme](https://github.com/Layr-Labs/devkit-cli).
    :::

4. Implement your AVS task logic in `main.go`. 

Next: 

[Build and Test Locally](build-test-locally.md)