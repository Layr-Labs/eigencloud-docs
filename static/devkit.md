This file is a merged representation of the entire codebase, combined into a single document by Repomix.
The content has been processed where content has been compressed (code blocks are separated by ⋮---- delimiter).

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Content has been compressed - code blocks are separated by ⋮---- delimiter
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.cursor/
  rules/
    golang.mdc
    project.mdc
.github/
  configs/
    typos-cli.toml
  workflows/
    automation.yml
    build.yml
    checks.yml
    codeql-scanning.yaml
    create.yml
    devnet.yml
    e2e.yml
    golangci-lint.yml
    release.yml
    tests.yml
  CODEOWNERS
  pull_request_template.md
autocomplete/
  bash_autocomplete
  zsh_autocomplete
config/
  configs/
    migrations/
      v0.0.1-v0.0.2.go
      v0.0.2-v0.0.3.go
    registry.go
    v0.0.1.yaml
    v0.0.2.yaml
    v0.0.3.yaml
  contexts/
    migrations/
      v0.0.1-v0.0.2.go
      v0.0.2-v0.0.3.go
      v0.0.3-v0.0.4.go
      v0.0.4-v0.0.5.go
      v0.0.5-v0.0.6.go
      v0.0.6-v0.0.7.go
      v0.0.7-v0.0.8.go
      v0.0.8-v0.0.9.go
      v0.0.9-v0.1.0.go
      v0.1.0-v0.1.1.go
    registry.go
    v0.0.1.yaml
    v0.0.2.yaml
    v0.0.3.yaml
    v0.0.4.yaml
    v0.0.5.yaml
    v0.0.6.yaml
    v0.0.7.yaml
    v0.0.8.yaml
    v0.0.9.yaml
    v0.1.0.yaml
    v0.1.1.yaml
  keystores/
    operator1.bls.keystore.json
    operator1.ecdsa.keystore.json
    operator2.bls.keystore.json
    operator2.ecdsa.keystore.json
    operator3.bls.keystore.json
    operator3.ecdsa.keystore.json
    operator4.bls.keystore.json
    operator4.ecdsa.keystore.json
    operator5.bls.keystore.json
    operator5.ecdsa.keystore.json
  .env.example
  .gitignore
  .zeus
  config_embeds.go
  config.yaml
  keystore_embeds_test.go
  keystore_embeds.go
  templates.yaml
docker/
  anvil/
    devnetembed.go
    docker-compose.yaml
internal/
  version/
    version.go
pkg/
  commands/
    config/
      config_edit.go
      config_test.go
      config.go
    context/
      context_create.go
      context_selection.go
      context_test.go
      context.go
    keystore/
      create_keystore.go
      keystore_test.go
      keystore.go
      read_keystore.go
    template/
      info_test.go
      info.go
      template_test.go
      template.go
      upgrade_test.go
      upgrade.go
    version/
      version.go
    avs.go
    basic_e2e_test.go
    build_test.go
    build.go
    call_test.go
    call.go
    create_test.go
    create.go
    deploy_actions.go
    deploy.go
    devnet_actions_test.go
    devnet_actions.go
    devnet_test.go
    devnet.go
    release_actions.go
    release.go
    run_test.go
    run.go
    telemetry.go
    test_test.go
    test.go
    transporter_test.go
    transporter.go
    upgrade_test.go
    upgrade.go
  common/
    artifact/
      oci_artifact_test.go
      oci_artifact.go
      README.md
    contracts/
      eigen.go
      erc20.go
      registry.go
      steth.go
    devnet/
      constants.go
      embed.go
      funding.go
      getters.go
      logging.go
      utils.go
    iface/
      logger.go
      progress.go
    logger/
      basic_logger.go
      noop_logger_test.go
      noop_logger.go
      progress_logger.go
      zap_logger.go
    output/
      prompt.go
    progress/
      decect_tty.go
      log_progress.go
      tty_progress.go
    config_test.go
    config.go
    constants.go
    context.go
    contract_caller.go
    dockerutils.go
    flags.go
    getters.go
    global_config_test.go
    global_config.go
    project_config_test.go
    project_config.go
    scripts_caller_test.go
    scripts_caller.go
    telemetry_prompt_test.go
    telemetry_prompt.go
    user_config_test.go
    user_config.go
    utils_test.go
    utils.go
    yaml_test.go
    yaml.go
    zeus.go
  hooks/
    hooks_test.go
    hooks.go
  migration/
    migrator_test.go
    migrator.go
  telemetry/
    metric.go
    noop.go
    posthog.go
    telemetry_test.go
    telemetry.go
  template/
    config_test.go
    config.go
    git_client_test.go
    git_client.go
    git_fetcher_test.go
    git_fetcher.go
    git_reporter_test.go
    git_reporter.go
  testutils/
    utils.go
scripts/
  bundleReleases.sh
  version.sh
test/
  integration/
    migration/
      keystores/
        operator1.bls.keystore.json
        operator1.ecdsa.keystore.json
        operator2.bls.keystore.json
        operator2.ecdsa.keystore.json
        operator3.bls.keystore.json
        operator3.ecdsa.keystore.json
        operator4.bls.keystore.json
        operator4.ecdsa.keystore.json
        operator5.bls.keystore.json
        operator5.ecdsa.keystore.json
      .zeus
      avs_context_0_1_0_to_0_1_1_test.go
      avs_context_migration_test.go
.gitignore
.pre-commit-config.yaml
.zeus
CLAUDE.md
embeds.go
go.mod
install-devkit.sh
LICENSE
Makefile
README.md
VERSION
```

# Files

## File: .cursor/rules/golang.mdc
````
---
description: 
globs: 
alwaysApply: true
---
# Go Development Guidelines for devkit-cli

This document outlines coding standards, patterns, and best practices to be followed when developing Go applications and libraries for the `devkit-cli` project. These rules are based on general Go best practices and observed patterns within this 
codebase.

## 0. Always..

- Run `make tests` when completing a task to make sure the entire test suite passes
- Run `make lint` to lint the code

## 1. Code Formatting

- **`gofmt`/`goimports`**: All Go code **MUST** be formatted using `gofmt` or `goimports` before committing. This ensures consistent code style across the project. `goimports` is preferred as it also manages import statements.
    - Configure your IDE to format on save.
    - This is likely enforced by pre-commit hooks.

## 2. Naming Conventions

- **Packages**:
    - Package names **SHOULD** be short, concise, and all lowercase.
    - Avoid overly generic names like `util` or `common` unless the package truly contains cross-cutting concerns. If so, sub-packages within `common` (e.g., `common/httputil`) are preferred.
    - The project uses `pkg/common` for shared utilities (e.g., `logger`, context management), which is acceptable.
- **Variables**:
    - Local variables and function parameters **SHOULD** use `camelCase` (e.g., `myVariable`).
    - Exported variables **MUST** use `PascalCase` (e.g., `ExportedVariable`).
- **Functions and Methods**:
    - Function and method names **SHOULD** use `camelCase` for unexported identifiers (e.g., `calculateValue`).
    - Exported functions and methods **MUST** use `PascalCase` (e.g., `CalculateValue`).
- **Interfaces**:
    - Interfaces **SHOULD** be named with the `-er` suffix if they have only one method (e.g., `Reader`, `Writer`).
    - For more complex interfaces, choose a name that describes its purpose (e.g., `DataStore`).
- **Avoid Stutter**: Do not repeat package names in identifiers. For example, in package `logger`, prefer `logger.New()` over `logger.NewLogger()`.
- **Acronyms**: Acronyms like HTTP, ID, URL **SHOULD** be consistently cased (e.g., `serveHTTP`, `userID`, `parseURL`). `PascalCase` for exported acronyms (e.g., `ServeHTTP`, `UserID`, `ParseURL`).

## 3. Packages and Project Structure

- **`cmd/`**: Main application(s). Each subdirectory in `cmd/` is a separate executable.
- **`pkg/`**: Library code that can be used by other applications or projects. Code here should be designed to be reusable.
    - CLI command logic is well-organized under `pkg/commands`.
- **`internal/`**: Private application and library code. This is the ideal place for code that is specific to this project and should not be imported by other projects.
    - The `internal/version` pattern for build-time variable injection is good.
- **Clarity**: Package structure should clearly communicate the purpose and separation of concerns.
- **Circular Dependencies**: Avoid circular dependencies between packages.

## 4. Error Handling

- **Explicit Handling**: Errors **MUST** be handled explicitly. Do not ignore errors using the blank identifier (`_`) unless there is a very specific and documented reason.
- **Return Errors**: Functions that can fail **MUST** return an `error` as their last return value.
- **Error Wrapping**: When an error is propagated up the call stack, it **SHOULD** be wrapped with additional context using `fmt.Errorf("operation X failed: %w", err)`. This preserves the original error and adds a stack of contextual information.
    - Use `errors.Is()` and `errors.As()` from the standard `errors` package to inspect wrapped errors.
- **Error Messages**: Error messages should be lowercase and not end with punctuation, as they are often combined with other context.
- **Top-Level Handling**: In `main()` or top-level HTTP handlers, errors should be logged appropriately, and the program/request should terminate gracefully (e.g., `log.Fatal(err)` in `main.go` is acceptable for CLI startup).

## 5. Comments and Documentation

- **Godoc**: All exported identifiers (variables, constants, functions, types) **MUST** have Godoc comments.
    - Comments should start with the name of the identifier they describe.
    - Provide clear, concise explanations of what the identifier does, its parameters, and return values.
- **Non-Obvious Code**: Add comments to explain complex, non-obvious, or surprising logic.
- **TODOs**: Use `// TODO:` comments to mark areas that need future attention. Include context or a reference if possible.

## 6. Logging

- **Structured Logging**: Use a structured logging library like `zap` (as currently used in `pkg/common/logger/zap_logger.go`).
- **Log Levels**: Use appropriate log levels (e.g., DEBUG, INFO, WARN, ERROR, FATAL).
- **Contextual Information**: Include relevant contextual information in log messages (e.g., request IDs, user IDs) to aid debugging.
- **Avoid Logging and Returning Errors**: Generally, a function should either log an error and handle it, or return the error to the caller to handle. Avoid doing both unless there's a specific reason. The caller is usually better positioned to decide if logging is appropriate.

## 7. Concurrency

- **Goroutines**: Use goroutines for concurrent operations. Ensure they are managed correctly (e.g., using `sync.WaitGroup` to wait for completion).
- **Channels**: Prefer channels for communication between goroutines and for synchronization.
- **`context.Context`**:
    - Pass `context.Context` as the first argument to functions that perform I/O, long-running computations, or need to support cancellation or deadlines.
    - The project correctly uses `context.Context` (e.g., `common.WithShutdown(context.Background())`).
- **Race Conditions**: Be mindful of race conditions. Use the Go race detector (`go test -race`) during testing. Protect shared mutable state using mutexes (`sync.Mutex`, `sync.RWMutex`) or channels.

## 8. Testing

- **File Naming**: Test files **MUST** be named `*_test.go`.
- **Function Naming**: Test functions **MUST** be named `TestXxx` (where `Xxx` starts with an uppercase letter) and take `*testing.T` as a parameter.
- **Coverage**: Strive for high test coverage. Use `go test -coverprofile=coverage.out && go tool cover -html=coverage.out` to inspect coverage.
- **Table-Driven Tests**: Use table-driven tests for testing multiple scenarios of the same function with different inputs and expected outputs.
- **Subtests**: Use `t.Run` to create subtests for better organization and output.
- **Assertions**: Use standard library features or well-known assertion libraries if necessary. Avoid overly complex custom assertion logic.
- **Mocks/Fakes**: Use fakes or mocks for dependencies, especially for external services or components that are hard to set up in a test environment.

## 9. API Design

- **Interfaces**: Define interfaces on the consumer side where appropriate. This promotes loose coupling and makes code easier to test and mock.
- **Simplicity**: Strive for simple and clear API designs. Avoid overly complex or numerous parameters.
- **Return Values**: Be consistent with return value patterns (e.g., `(value, error)` or `(value, bool)`).

## 10. Dependency Management

- **Go Modules**: Use Go Modules (`go.mod`, `go.sum`) for dependency management.
- **Tidy Modules**: Keep `go.mod` and `go.sum` tidy by running `go mod tidy` regularly.
- **Dependency Updates**: Regularly review and update dependencies to incorporate security patches and bug fixes.

## 11. Linters and Static Analysis

- **`golangci-lint`**: Use `golangci-lint` or a similar comprehensive linter tool.
    - A `.golangci.yml` configuration file should be present in the repository to define enabled linters and settings.
    - Integrate linters into pre-commit hooks (as suggested by `.pre-commit-config.yaml`).

## 12. CLI Specific (using `urfave/cli/v2`)

- **Command Structure**: Define commands and subcommands clearly, following the patterns in `pkg/commands/devnet.go`.
- **Flags**: Use descriptive names and usage messages for flags. Provide sensible default values.
- **Actions**: Command actions should encapsulate the logic for that command. Delegate complex logic to other packages/functions.
- **Context Usage**: Utilize the `cli.Context` for accessing flags, arguments, and application-level values.
- **Hooks**: Leverage hooks (e.g., `Before`, `After`) for common setup/teardown tasks, as seen with `hooks.LoadEnvFile` and `hooks.WithCommandMetricsContext`.

## 13. General Best Practices

- **Keep it Simple (KISS)**: Prefer simple, readable code over overly clever or complex solutions.
- **Don't Repeat Yourself (DRY)**: Avoid code duplication by abstracting common logic into functions or methods.
- **Single Responsibility Principle (SRP)**: Functions and types should have a single, well-defined responsibility.
- **Avoid `init()`**: Use `init()` functions sparingly. Explicit initialization in `main()` or via factory functions is often clearer.
- **Avoid Global Variables**: Minimize the use of global variables. If used, ensure they are concurrency-safe. The version variables in `internal/version` are a common exception, typically set at build time.
- **Resource Management**: Ensure resources like file handles, network connections, etc., are properly closed (e.g., using `defer`).
````

## File: .cursor/rules/project.mdc
````
---
description: 
globs: 
alwaysApply: true
---
## Rules to apply always

* When running the cli to test creating projects, always create them in the ./test-projects directory
* Always run `make build` to build the binary to test
````

## File: .github/configs/typos-cli.toml
````toml
[files]
extend-exclude = [
    "go.mod",
    "go.sum",
    "**/lib/**",
    "**/docs/images/**",
    # Not present locally, but is in remote (github).
    "**/doc/**"
]
ignore-hidden = true
ignore-files = true
ignore-dot = true
ignore-vcs = true
ignore-global = true
ignore-parent = true

[default]
binary = false
check-filename = true
check-file = true
unicode = true
ignore-hex = true
identifier-leading-digits = false
locale = "en"
extend-ignore-identifiers-re = []
extend-ignore-words-re = []
extend-ignore-re = []

[default.extend-identifiers]

# Weird syntax, but this how you ignore corrections for certain words.
[default.extend-words]
strat = "strat"
froms = "froms"

[type.go]
extend-glob = []
extend-ignore-identifiers-re = []
extend-ignore-words-re = []
extend-ignore-re = []

[type.go.extend-identifiers]
flate = "flate"

[type.go.extend-words]

[type.sh]
extend-glob = []
extend-ignore-identifiers-re = []
extend-ignore-words-re = []
extend-ignore-re = []

[type.sh.extend-identifiers]
ot = "ot"
stap = "stap"

[type.sh.extend-words]

[type.py]
extend-glob = []
extend-ignore-identifiers-re = []
extend-ignore-words-re = []
extend-ignore-re = []

[type.py.extend-identifiers]
NDArray = "NDArray"
arange = "arange"
EOFError = "EOFError"

[type.py.extend-words]
````

## File: .github/workflows/automation.yml
````yaml
name: PR

on:
  pull_request:
    types: [opened, edited, synchronize]

permissions:
  contents: read
  pull-requests: read

jobs:
  lint-pr-title:
    runs-on: ubuntu-latest
    name: Title
    steps:
      - name: Fetch PR Title
        run: |
          PR_TITLE=$(jq -r '.pull_request.title' "$GITHUB_EVENT_PATH")
          echo "PR title: $PR_TITLE"

          # Define the valid pattern (supports conventional commit format)
          if [[ ! "$PR_TITLE" =~ ^(release|feat|fix|chore|docs|refactor|test|style|ci|perf)(\(.*?\))?:\ .* ]]; then
            echo "❌ Invalid PR title: '$PR_TITLE'"
            echo "Expected format: 'type: description' or 'type(scope): description'"
            echo "Allowed types: release, feat, fix, chore, docs, refactor, test, style, ci, perf."
            exit 1
          fi

          echo "✅ PR title is valid"
````

## File: .github/workflows/build.yml
````yaml
name: build

on:
  push:
    branches:
      - main
  pull_request:
    branches: ["**"]

permissions:
  contents: read

jobs:
  Test:
    name: Build
    runs-on: ubuntu-latest
    steps:
      - name: Checkout devkit-cli
        uses: actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683 # v4.2.2

      - uses: actions/setup-go@d35c59abb061a4a6fb18e82ac0862c26744d6ab5 # v5.5.0
        with:
          go-version: '1.23'
      - name: Build
        run: |
          go mod tidy
          make build
````

## File: .github/workflows/checks.yml
````yaml
name: Checks

on:
  push:
    branches:
      - main
  pull_request:
    branches: ["**"]
  workflow_dispatch:

permissions:
  contents: read
  pull-requests: read

concurrency:
  group: checks-${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

env:
  CLICOLOR: 1

jobs:
  typos:
    name: Typo Linting
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683 # v4.2.2
      - uses: crate-ci/typos@51f257b946f503b768e522781f56e9b7b5570d48 # v1.29.7
        with:
          config: .github/configs/typos-cli.toml

  check-make-fmt:
    name: Check make fmt
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683 # v4.2.2            

      - name: Setup Go
        uses: actions/setup-go@d35c59abb061a4a6fb18e82ac0862c26744d6ab5 # v5.5.0
        with:
          go-version: "1.23"
          cache: true                                   

      - name: Run make fmt
        run: make fmt

      - name: Check for formatting diffs
        run: |
          if [ -n "$(git status --porcelain)" ]; then
            echo "::error::make fmt generated changes; please run 'make fmt' and commit the results."
            git diff
            exit 1
          fi
````

## File: .github/workflows/codeql-scanning.yaml
````yaml
name: "codeql-scanning"

on:
  push:
    branches:
      - main
      - "release/*"
  pull_request:
  schedule:
    - cron: "0 9 * * *"

env:
  MISE_VERSION: 2024.12.14
  
jobs:
  CodeQL-Scanning:
    runs-on: ubuntu-latest

    permissions:
      contents: read
      security-events: write
      pull-requests: read

    steps:
      - name: Checkout repository
        uses: actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683 # 4.2.2
        with:
          submodules: recursive

      - name: Run shared CodeQL scan
        uses: Layr-Labs/security-shared-workflows/actions/codeql-scans@418d735c1c4e5cc650c8addaeb8909b36b9dca27
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
````

## File: .github/workflows/create.yml
````yaml
name: Devkit AVS Create Test

on:
  push:
    branches: [main]
  pull_request:
    branches: ["**"]

permissions:
  contents: read

env:
  FOUNDRY_PROFILE: ci

jobs:
  create-avs:
    strategy:
      fail-fast: true
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683 # v4.2.2
        with:
          submodules: recursive

      - name: Set up Go
        uses: actions/setup-go@d35c59abb061a4a6fb18e82ac0862c26744d6ab5 # v5.5.0
        with:
          go-version: "1.24"
        
      - name: Install Foundry
        uses: foundry-rs/foundry-toolchain@82dee4ba654bd2146511f85f0d013af94670c4de # v1.4.0
        with:
          version: stable
          
      - name: Install devkit CLI
        run: make install

      - name: Add ~/bin to PATH
        run: echo "$HOME/bin" >> $GITHUB_PATH
        
      - name: Run devkit avs create
        run: |
          devkit avs create my-awesome-avs

      - name: Verify AVS project created
        run: |
          if [ ! -f "./my-awesome-avs/config/config.yaml" ]; then
            echo "❌ AVS project config/config.yaml not found!"
            exit 1
          fi
          echo "✅ AVS project created successfully at ${GITHUB_WORKSPACE}/my-awesome-avs/"
````

## File: .github/workflows/devnet.yml
````yaml
name: Devnet Smoke Test

on:
  push:
    branches: [main]
  pull_request:
    branches: [ '**' ]

permissions:
  contents: read

env:
  FOUNDRY_PROFILE: ci
  L1_FORK_URL: ${{ secrets.L1_FORK_URL }}
  L2_FORK_URL: ${{ secrets.L2_FORK_URL }}

jobs:
  devnet-test:
    if: github.event.pull_request.head.repo.full_name == github.repository
    strategy:
      fail-fast: true
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repo
        uses: actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683 # v4.2.2
        with:
          submodules: recursive

      - name: Set up Go
        uses: actions/setup-go@d35c59abb061a4a6fb18e82ac0862c26744d6ab5 # v5.5.0
        with:
          go-version: '1.24'

      - name: Install Foundry
        uses: foundry-rs/foundry-toolchain@82dee4ba654bd2146511f85f0d013af94670c4de # v1.4.0
        with:
          version: stable

      - name: Install devkit CLI
        run: make install

      - name: Add ~/bin to PATH
        run: echo "$HOME/bin" >> $GITHUB_PATH

      - name: Create AVS project
        run: devkit avs create my-avs

      - name: Start devnet
        run: |
          cd ./my-avs/
          devkit avs devnet start &
          sleep 10 # wait for devnet to fully start

      - name: Check block number with cast (with retry)
        run: |
          for i in {1..10}; do
            bn=$(cast block-number --rpc-url http://localhost:8545 || echo "error")
            if [ "$bn" != "error" ]; then
              echo "Current block number: $bn"
              exit 0
            fi
            echo "Anvil not ready yet, retrying in 2s..."
            sleep 2
          done
          echo "Devnet didn't start properly after waiting"
          exit 1

      - name: Stop devnet
        run: |
          cd ./my-avs/
          devkit avs devnet stop
````

## File: .github/workflows/e2e.yml
````yaml
name: Devkit E2E Test

on:
  push:
    branches: [main]
  pull_request:
    branches: ["**"]

permissions:
  contents: read

env:
  FOUNDRY_PROFILE: ci
  L1_FORK_URL: ${{ secrets.L1_FORK_URL }}
  L2_FORK_URL: ${{ secrets.L2_FORK_URL }}

jobs:
  e2e:
    runs-on: ubuntu-latest
    if: github.event.pull_request.head.repo.full_name == github.repository
    steps:
      - name: Checkout repository
        uses: actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683 # v4.2.2
        with:
          submodules: recursive

      - name: Set up Go
        uses: actions/setup-go@d35c59abb061a4a6fb18e82ac0862c26744d6ab5 # v5.5.0
        with:
          go-version: "1.24"

      - name: Install Foundry
        uses: foundry-rs/foundry-toolchain@82dee4ba654bd2146511f85f0d013af94670c4de # v1.4.0
        with:
          version: stable

      - name: Install devkit CLI
        run: make install

      - name: Add ~/bin to PATH
        run: echo "$HOME/bin" >> $GITHUB_PATH

      - name: Run devkit avs create
        run: devkit avs create my-awesome-avs

      - name: Verify AVS project created
        run: |
          if [ ! -f "./my-awesome-avs/config/config.yaml" ]; then
            echo "❌ AVS project config/config.yaml not found!"
            exit 1
          fi
          echo "✅ AVS project created successfully at ${GITHUB_WORKSPACE}/my-awesome-avs/"

      - name: Run devkit avs build
        env:
          DOCKER_BUILDKIT: 1
        run: |
          cd ./my-awesome-avs/
          devkit avs build

      - name: Run devkit avs test
        run: |
          cd ./my-awesome-avs/
          devkit avs test

      - name: Start devnet
        run: |
          cd ./my-awesome-avs/
          devkit avs devnet start &
          # wait until executor and aggregator are available
          until nc -z localhost 9090 && nc -z localhost 8081; do
            sleep 1
          done

      - name: Check devnet RPC is live
        run: |
          for i in {1..10}; do
            bn=$(cast block-number --rpc-url http://localhost:8545 || echo "error")
            if [ "$bn" != "error" ]; then
              echo "Current block number: $bn"
              exit 0
            fi
            echo "Waiting for devnet... retrying in 2s"
            sleep 2
          done
          echo "❌ Devnet failed to start"
          exit 1

      - name: Call AVS and assert result is produced
        shell: bash
        run: |
          set -euo pipefail
          cd ./my-awesome-avs/

          # Stream stderr to log and capture to file
          devkit avs call -- signature="(uint256,string)" args='(5,"hello")' \
            1>/dev/null 2> >(tee call_stderr.log >&2) || true

          # Optional: normalize by stripping ANSI control codes
          sed -E 's/\x1B\[[0-9;]*[A-Za-z]//g' call_stderr.log > call_stderr.clean

          LOG="call_stderr.clean"

          # Fail fast on explicit timeout
          if grep -q "Timeout: TaskVerified() not seen" "$LOG"; then
            echo "❌ Timeout waiting for TaskVerified()"
            tail -n 200 "$LOG" || true
            exit 1
          fi

          # Ensure success marker is present
          if ! grep -q "TaskVerified event received:" "$LOG"; then
            echo "❌ No 'TaskVerified event received' marker found"
            tail -n 200 "$LOG" || true
            exit 1
          fi

          # Extract result bytes: " - result: 0x..."
          RESULT_BYTES="$(grep -m1 -E '^[[:space:]-]*TaskResult:' "$LOG" | sed 's/.*TaskResult:\s*//')"

          # Validate non-empty hex payload
          if [[ -z "${RESULT_BYTES}" ]] || ! [[ "${RESULT_BYTES}" =~ ^0x[0-9a-fA-F]*$ ]]; then
            echo "❌ Invalid or empty result bytes: '${RESULT_BYTES:-<empty>}'"
            tail -n 200 "$LOG" || true
            exit 1
          fi

          echo "✅ Result received: ${RESULT_BYTES}"

      - name: Verify stake table roots
        run: |
          cd ./my-awesome-avs/
          devkit avs transport verify

      - name: Set release metadata URI
        run: |
          cd ./my-awesome-avs/

          # Set URI for operator set 0
          devkit avs release uri \
            --metadata-uri "https://github.com/example/metadata-0.json" \
            --operator-set-id 0

          echo "✅ Set metadata URI for operator set 0"

          # Set URI for operator set 1
          devkit avs release uri \
            --metadata-uri "https://github.com/example/metadata-1.json" \
            --operator-set-id 1

          echo "✅ Set metadata URI for operator set 1"

      - name: Stop devnet
        run: |
          cd ./my-awesome-avs/
          devkit avs devnet stop
````

## File: .github/workflows/golangci-lint.yml
````yaml
name: lint

on:
  push:
    branches:
      - main
  pull_request:
    branches: ["**"]

permissions:
  contents: read

jobs:
  Lint:
    name: Lint
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repo
        uses: actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683 # v4.2.2

      - name: Set up Go
        uses: actions/setup-go@d35c59abb061a4a6fb18e82ac0862c26744d6ab5 # v5.5.0
        with:
          go-version: '1.23'

      - name: Clone hourglass-monorepo privately
        run: |
          go mod tidy

      - name: Run golangci-lint
        uses: golangci/golangci-lint-action@55c2c1448f86e01eaae002a5a3a9624417608d84
        with:
          version: latest
          args: --timeout 3m
````

## File: .github/workflows/release.yml
````yaml
name: Release (with lint and test)

on:
  push:
    tags:
      - "*"

permissions:
  contents: read

env:
  FOUNDRY_PROFILE: ci
  L1_FORK_URL: ${{ secrets.L1_FORK_URL }}
  L2_FORK_URL: ${{ secrets.L2_FORK_URL }}

jobs:
  lint:
    name: lint
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repo
        uses: actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683 # v4.2.2

      - name: Set up Go
        uses: actions/setup-go@d35c59abb061a4a6fb18e82ac0862c26744d6ab5 # v5.5.0
        with:
          go-version: '1.24.2'

      - name: Install dependencies
        run: |
          go mod tidy

      - name: Run golangci-lint
        uses: golangci/golangci-lint-action@55c2c1448f86e01eaae002a5a3a9624417608d84 # v6.5.2
        with:
          version: latest
          args: --timeout 3m
  test:
    name: test
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repo
        uses: actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683 # v4.2.2

      - name: Set up Go
        uses: actions/setup-go@d35c59abb061a4a6fb18e82ac0862c26744d6ab5 # v5.5.0
        with:
          go-version: '1.24.2'

      - name: run tests
        run: |
          go mod tidy
          make tests
  
  build-create-release:
    runs-on: ubuntu-latest
    needs: [lint, test]
    permissions:
      contents: write
      actions: read
    steps:
      - name: Checkout
        uses: actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683 # v4.2.2

      - name: Check and set release version
        env:
          REF: ${{ github.ref }}
        run: |
          ./scripts/version.sh $REF

      - name: Build binary
        env:
          RELEASE_BUCKET_NAME: ${{ secrets.RELEASE_BUCKET_NAME }}
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_REGION: ${{ secrets.AWS_REGION }}
          TELEMETRY_TOKEN: ${{ secrets.TELEMETRY_TOKEN }}
        run: |
          go mod tidy
          
          VERSION=$(cat VERSION | tr -d '[:space:]')
          echo "Building binary for version $VERSION"
          make release
          sudo chown -R $USER:$USER .
          ./scripts/bundleReleases.sh $VERSION
          
          # Create the content using a heredoc assigned to a variable
          RELEASE_BODY=$(cat << 'EOF'
          ## Downloads
          EOF
          )
          
          # Create a temporary file to build up the release body
          echo "$RELEASE_BODY" > release_body_temp.txt
          
          for asset_name in $(ls ./release | grep '.tar');
          do
          asset="./release/${asset_name}"
          echo "Uploading ${asset_name}..."
          aws s3 cp "$asset" "s3://${RELEASE_BUCKET_NAME}/$VERSION/"
          
          # append to the release body file with proper newlines
          echo "- [${asset_name}](https://s3.amazonaws.com/${RELEASE_BUCKET_NAME}/$VERSION/${asset_name})" >> release_body_temp.txt
          done
          
          # Read the complete release body from the file
          RELEASE_BODY=$(cat release_body_temp.txt)
          
          # Set it as an environment variable for later steps
          echo 'RELEASE_BODY<<EOF' >> $GITHUB_ENV
          echo "$RELEASE_BODY" >> $GITHUB_ENV
          echo 'EOF' >> $GITHUB_ENV

      - name: Create Release
        id: create_release
        uses: actions/create-release@0cb9c9b65d5d1901c1f53e5e66eaf4afd303e70e # v1.1.4
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          tag_name: ${{ github.ref }}
          release_name: Release ${{ github.ref }}
          draft: false
          prerelease: false
          body: ${{ env.RELEASE_BODY }}

      - name: Upload Release Asset
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          RELEASE_BUCKET_NAME: ${{ vars.RELEASE_BUCKET_NAME }}
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_REGION: ${{ secrets.AWS_REGION }}
        run: |
          set -x
          ls -al ./release
      
          echo "Upload URL: ${{ steps.create_release.outputs.upload_url }}"
          export upload_url=$(echo "${{ steps.create_release.outputs.upload_url }}" | sed -e "s/{?name,label}//")
      
          for asset_name in $(ls ./release | grep '.tar');
          do
            asset="./release/${asset_name}"
            echo "Uploading ${asset_name}..."
            curl --fail \
              -H "Authorization: token $GITHUB_TOKEN" \
              -H "Content-Type: $(file -b --mime-type "$asset")" \
              --data-binary @"$asset" \
              "${upload_url}?name=$asset_name"
          done

  smoke-test-binaries:
    needs: build-create-release 
    strategy:
      matrix:
        os: [macos-latest, ubuntu-latest]
        arch: [x64, arm64]
    runs-on: ${{ matrix.os }}
    steps:
      - name: Checkout repo @ tag
        uses: actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683 # v4.2.2

      - name: Read version
        id: ver
        run: |
          echo "VERSION=$(<VERSION)" >> $GITHUB_ENV

      - name: Setup QEMU (for arm64 on Linux runner)
        if: matrix.os == 'ubuntu-latest' && matrix.arch == 'arm64'
        uses: docker/setup-qemu-action@29109295f81e9208d7d86ff1c6c12d2833863392 # v3.6.0
        with:
          platforms: linux/arm64

      - name: Install devkit
        run: |
          set -euxo pipefail
          ver="${{ env.VERSION }}"
          case "${{ matrix.os }}-${{ matrix.arch }}" in
            "macos-latest-x64")   url="https://s3.amazonaws.com/eigenlayer-devkit-releases/${ver}/devkit-darwin-amd64-${ver}.tar.gz" ;;
            "macos-latest-arm64") url="https://s3.amazonaws.com/eigenlayer-devkit-releases/${ver}/devkit-darwin-arm64-${ver}.tar.gz" ;;
            "ubuntu-latest-x64")  url="https://s3.amazonaws.com/eigenlayer-devkit-releases/${ver}/devkit-linux-amd64-${ver}.tar.gz" ;;
            "ubuntu-latest-arm64")url="https://s3.amazonaws.com/eigenlayer-devkit-releases/${ver}/devkit-linux-arm64-${ver}.tar.gz" ;;
            *) echo "Unsupported combination"; exit 1 ;;
          esac
          mkdir -p "$HOME/bin"
          echo "::set-output name=url::$url"
          curl -fsSL "$url" | tar -x -C "$HOME/bin" -f -

      - name: Verify installation
        run: |
          export PATH="$HOME/bin:$PATH"
          # expected version from file
          ver="${{ env.VERSION }}"
          # extract the `devkit version` Version line
          installed=$(devkit version \
            | awk '/^Version:/ { print $2 }')
          if [[ "$installed" != "$ver" ]]; then
            echo "✖ version mismatch: expected $ver, got $installed"
            exit 1
          fi
          echo "✔ version $installed matches expected $ver"

      - name: Add ~/bin to PATH
        run: echo "$HOME/bin" >> $GITHUB_PATH

      - name: Install Homebrew (macOS -x64)
        if: matrix.os == 'macos-latest' && matrix.arch == 'x64'
        run: |
          # enable Rosetta (needed only on Apple Silicon hosts)
          sudo softwareupdate --install-rosetta --agree-to-license || true

          # install Intel Homebrew into /usr/local
          arch -x86_64 /bin/bash -c \
            "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

          # capture the brew-env exports into GITHUB_ENV
          arch -x86_64 /usr/local/bin/brew shellenv \
            | sed 's/^export //g' >> $GITHUB_ENV

          # alias brew via a shim
          mkdir -p $HOME/bin
          printf '%s\n' '#!/usr/bin/env bash' \
            'exec arch -x86_64 /usr/local/bin/brew "$@"' \
            > "$HOME/bin/brew"
          chmod +x "$HOME/bin/brew"

          # make sure our shim comes first
          echo "$HOME/bin" >> $GITHUB_PATH

          # verify brew is on PATH and running under x86_64
          which brew
          file "$(which brew)"
          brew --version

      - name: Set up Go
        uses: actions/setup-go@d35c59abb061a4a6fb18e82ac0862c26744d6ab5 # v5.5.0
        with:
          go-version: "1.24"

      - name: Install Foundry
        uses: foundry-rs/foundry-toolchain@82dee4ba654bd2146511f85f0d013af94670c4de # v1.4.0
        with:
          version: stable

      - name: Install Colima, Lima guestagents & Docker CLI (macOS)
        if: matrix.os == 'macos-latest'
        run: |
          # use the ARM-native Homebrew for host tools
          BREW_ARM=/opt/homebrew/bin/brew

          echo "Using ARM Homebrew at $BREW_ARM"

          # install Lima, Colima and Docker CLI natively
          $BREW_ARM install lima colima docker
          $BREW_ARM install lima-additional-guestagents

          # ensure ARM brews bin is on PATH for all later steps
          echo "/opt/homebrew/bin" >> $GITHUB_PATH
          echo "$HOME/bin" >> $GITHUB_PATH

          # sanity-check
          which colima
          file "$(which colima)"
          colima version
          which docker
          docker --version

      - name: Install Docker Compose plugin (macOS)
        if: matrix.os == 'macos-latest'
        env:
          GHA_ARCH: ${{ matrix.arch }}
        run: |
          # create plugin dir
          mkdir -p ~/.docker/cli-plugins

          # select binary according to arch
          case "$GHA_ARCH" in
            arm64) FILE=docker-compose-darwin-aarch64 ;;
            x64)   FILE=docker-compose-darwin-x86_64 ;;
            *)
              echo "Unsupported arch: $GHA_ARCH"
              exit 1
              ;;
          esac

          # download the Compose V2 binary
          curl -SL \
            "https://github.com/docker/compose/releases/download/v2.36.2/${FILE}" \
            -o ~/.docker/cli-plugins/docker-compose
          chmod +x ~/.docker/cli-plugins/docker-compose

          # verify
          docker compose version

      - name: Install Docker Buildx (macOS)
        if: matrix.os == 'macos-latest'
        run:  |
          brew install docker-buildx

          # ensure the CLI-plugins dir exists
          mkdir -p ~/.docker/cli-plugins

          # symlink the Homebrew buildx into Dockers plugin folder
          ln -sf "$(brew --prefix)/bin/docker-buildx" ~/.docker/cli-plugins/docker-buildx

          # install it as the default builder
          docker buildx install

          # verify
          docker buildx version

      - name: Start Colima under QEMU (macOS)
        if: matrix.os == 'macos-latest'
        run: |
          # boot the VM + Docker
          colima start \
            --vm-type qemu \
            --runtime docker \
            --arch x86_64 \
            --cpu 4 \
            --memory 8 \
            --disk 50 \
            --activate

      - name: Switch Docker context (macOS)
        if: matrix.os == 'macos-latest'
        run: docker context use colima

      - name: Link Docker socket for Docker CLI (macOS)
        if: matrix.os == 'macos-latest'
        run: sudo ln -sf $HOME/.colima/default/docker.sock /var/run/docker.sock

      - name: Verify Docker daemon (macOS)
        if: matrix.os == 'macos-latest'
        run: |
          for i in {1..30}; do
            docker info &>/dev/null && break
            echo "Waiting for Colima Docker context... ($i/30)"
            sleep 2
          done
          docker info

      - name: Run devkit avs create
        run: devkit avs create --disable-telemetry my-awesome-avs

      - name: Verify AVS project created
        run: |
          if [ ! -f "./my-awesome-avs/config/config.yaml" ]; then
            echo "❌ AVS project config/config.yaml not found!"
            exit 1
          fi
          echo "✅ AVS project created successfully at ${GITHUB_WORKSPACE}/my-awesome-avs/"

      - name: Link gomplate (macOS)
        if: matrix.os == 'macos-latest'
        run: |
          mkdir -p "${GOPATH:-$HOME/go}/bin"
          ln -sf "$(brew --prefix)/bin/gomplate" "${GOPATH:-$HOME/go}/bin/gomplate"

      - name: Run devkit avs build
        env:
          DOCKER_BUILDKIT: 1
        run: |
          cd ./my-awesome-avs/
          devkit avs build

      - name: Start devnet
        run: |
          cd ./my-awesome-avs/
          devkit avs devnet start &
          until nc -z localhost 9090 && nc -z localhost 8081; do sleep 1; done

      - name: Check devnet RPC is live
        run: |
          for i in {1..10}; do
            bn=$(cast block-number --rpc-url http://localhost:8545 || echo "error")
            if [ "$bn" != "error" ]; then
              echo "Current block number: $bn"
              exit 0
            fi
            echo "Waiting for devnet... retrying in 2s"
            sleep 2
          done
          echo "❌ Devnet failed to start"
          exit 1

      - name: Call AVS
        run: |
          cd ./my-awesome-avs/
          devkit avs call -- signature="(uint256,string)" args='(5,"hello")'

      - name: Stop devnet
        run: |
          cd ./my-awesome-avs/
          devkit avs devnet stop
````

## File: .github/workflows/tests.yml
````yaml
name: tests

on:
  push:
    branches:
      - main
  pull_request:
    branches: ["**"]

permissions:
  contents: read

env:
  L1_FORK_URL: ${{ secrets.L1_FORK_URL }}
  L2_FORK_URL: ${{ secrets.L2_FORK_URL }}
  
jobs:
  Test:
    name: Unit Test
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repo
        uses: actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683 # v4.2.2

      - name: Set up Go
        uses: actions/setup-go@d35c59abb061a4a6fb18e82ac0862c26744d6ab5 # v5.5.0
        with:
          go-version: '1.23'

      - name: Run Tests
        run: |
          go mod tidy
          make tests
````

## File: .github/CODEOWNERS
````
# Give the devex-cli team ownership over everything
* @Layr-Labs/devex-cli
````

## File: .github/pull_request_template.md
````markdown
<!-- 
    🚨 ATTENTION! 🚨 
    
    This PR template is REQUIRED. PRs not following this format will be closed without review.
    
    Requirements:
    - PR title must follow commit conventions: https://www.conventionalcommits.org/en/v1.0.0/
    - Label your PR with the correct type (e.g., 🐛 Bug, ✨ Enhancement, 🧪 Test, etc.)
    - Provide clear and specific details in each section
-->

**Motivation:**
<!--
Explain here the context, and why you're making that change. What is the problem you're trying to solve.
-->
**Modifications:**
<!--
Describe the modifications you've done from a high level. What are the key technical decisions and why were they made?
-->
**Result:**
<!--
*After your change, what will change.
-->
**Testing:**
<!--
*List testing procedures taken and useful artifacts.
-->
**Open questions:**
<!--
(optional) Any open questions or feedback on design desired?
-->
````

## File: autocomplete/bash_autocomplete
````
#!/bin/bash

_cli_bash_autocomplete() {
    if [[ "${COMP_WORDS[0]}" != "source" ]]; then
        local cur opts base
        COMPREPLY=()
        cur="${COMP_WORDS[COMP_CWORD]}"
        if [[ "$cur" == "-"* ]]; then
            opts=$( ${COMP_WORDS[@]:0:$COMP_CWORD} ${cur} --generate-bash-completion )
        else
            opts=$( ${COMP_WORDS[@]:0:$COMP_CWORD} --generate-bash-completion )
        fi
        COMPREPLY=( $(compgen -W "${opts}" -- ${cur}) )
        return 0
    fi
}

complete -o bashdefault -o default -o nospace -F _cli_bash_autocomplete $PROG
````

## File: autocomplete/zsh_autocomplete
````
#!/bin/zsh

_cli_zsh_autocomplete() {

  local -a opts
  local cur
  cur=${words[-1]}
  if [[ "$cur" == "-"* ]]; then
    opts=("${(@f)$(_CLI_ZSH_AUTOCOMPLETE_HACK=1 ${words[@]:0:#words-1} ${cur} --generate-bash-completion)}")
  else
    opts=("${(@f)$(_CLI_ZSH_AUTOCOMPLETE_HACK=1 ${words[@]:0:#words-1} --generate-bash-completion)}")
  fi

  if [[ "${opts[1]}" != "" ]]; then
    _describe 'completions' opts
    return 0
  fi

  return 1
}

compdef _cli_zsh_autocomplete $PROG
````

## File: config/configs/migrations/v0.0.1-v0.0.2.go
````go
package configMigrations
⋮----
import (
	"github.com/Layr-Labs/devkit-cli/pkg/migration"

	"gopkg.in/yaml.v3"
)
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/migration"
⋮----
"gopkg.in/yaml.v3"
⋮----
func Migration_0_0_1_to_0_0_2(user, old, new *yaml.Node) (*yaml.Node, error)
⋮----
// Add project_uuid field (empty string by default)
⋮----
// Add telemetry_enabled field (false by default)
⋮----
// Add template baseUrl that should be present (leave unchanged if different)
⋮----
// Add template version that should be present (leave unchanged if different)
⋮----
// bump version node
````

## File: config/configs/migrations/v0.0.2-v0.0.3.go
````go
package configMigrations
⋮----
import (
	"github.com/Layr-Labs/devkit-cli/pkg/migration"

	"gopkg.in/yaml.v3"
)
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/migration"
⋮----
"gopkg.in/yaml.v3"
⋮----
func Migration_0_0_2_to_0_0_3(user, old, new *yaml.Node) (*yaml.Node, error)
⋮----
// Add template version that should be present (leave unchanged if different)
⋮----
// bump version node
````

## File: config/configs/registry.go
````go
package configs
⋮----
import (
	_ "embed"
	"errors"
	"fmt"
	"path/filepath"

	configMigrations "github.com/Layr-Labs/devkit-cli/config/configs/migrations"
	"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
	"github.com/Layr-Labs/devkit-cli/pkg/migration"
)
⋮----
_ "embed"
"errors"
"fmt"
"path/filepath"
⋮----
configMigrations "github.com/Layr-Labs/devkit-cli/config/configs/migrations"
"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
"github.com/Layr-Labs/devkit-cli/pkg/migration"
⋮----
// Set the latest version
const LatestVersion = "0.0.3"
⋮----
// --
// Versioned configs
⋮----
//go:embed v0.0.1.yaml
var v0_0_1_default []byte
⋮----
//go:embed v0.0.2.yaml
var v0_0_2_default []byte
⋮----
//go:embed v0.0.3.yaml
var v0_0_3_default []byte
⋮----
// Map of context name -> content
var ConfigYamls = map[string][]byte{
	"0.0.1": v0_0_1_default,
	"0.0.2": v0_0_2_default,
	"0.0.3": v0_0_3_default,
}
⋮----
// Map of sequential migrations
var MigrationChain = []migration.MigrationStep{
	{
		From:    "0.0.1",
		To:      "0.0.2",
		Apply:   configMigrations.Migration_0_0_1_to_0_0_2,
		OldYAML: v0_0_1_default,
		NewYAML: v0_0_2_default,
	},
	{
		From:    "0.0.2",
		To:      "0.0.3",
		Apply:   configMigrations.Migration_0_0_2_to_0_0_3,
		OldYAML: v0_0_2_default,
		NewYAML: v0_0_3_default,
	},
}
⋮----
func MigrateConfig(logger iface.Logger) (int, error)
⋮----
// Set path for context yamls
⋮----
// Migrate the config
⋮----
// Check for already upto date and ignore
⋮----
// For any other error, migration has failed
⋮----
// If config was migrated
````

## File: config/configs/v0.0.1.yaml
````yaml
version: 0.0.1
config:
  project:
    name: "my-avs"
    version: "0.1.0"
    context: "devnet"
````

## File: config/configs/v0.0.2.yaml
````yaml
version: 0.0.2
config:
  project:
    name: "my-avs"
    version: "0.1.0"
    context: "devnet"
    project_uuid: ""
    telemetry_enabled: false
    templateBaseUrl: "https://github.com/Layr-Labs/hourglass-avs-template"
    templateVersion: "v0.0.10"
````

## File: config/configs/v0.0.3.yaml
````yaml
version: 0.0.3
config:
  project:
    name: "my-avs"
    version: "0.1.0"
    context: "devnet"
    project_uuid: ""
    templateBaseUrl: "https://github.com/Layr-Labs/hourglass-avs-template"
    templateVersion: "v0.0.14"
    templateLanguage: "go"
    telemetry_enabled: false
````

## File: config/contexts/migrations/v0.0.1-v0.0.2.go
````go
package contextMigrations
⋮----
import (
	"github.com/Layr-Labs/devkit-cli/pkg/migration"

	"gopkg.in/yaml.v3"
)
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/migration"
⋮----
"gopkg.in/yaml.v3"
⋮----
func Migration_0_0_1_to_0_0_2(user, old, new *yaml.Node) (*yaml.Node, error)
⋮----
// bump version node
````

## File: config/contexts/migrations/v0.0.2-v0.0.3.go
````go
package contextMigrations
⋮----
import (
	"github.com/Layr-Labs/devkit-cli/pkg/migration"

	"gopkg.in/yaml.v3"
)
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/migration"
⋮----
"gopkg.in/yaml.v3"
⋮----
func Migration_0_0_2_to_0_0_3(user, old, new *yaml.Node) (*yaml.Node, error)
⋮----
// build the key node and scalar node
⋮----
// clone the existing fork mapping, then append our new pair
⋮----
// bump version node
````

## File: config/contexts/migrations/v0.0.3-v0.0.4.go
````go
package contextMigrations
⋮----
import (
	"os"

	"github.com/Layr-Labs/devkit-cli/config"
	"github.com/Layr-Labs/devkit-cli/pkg/common"
	"github.com/Layr-Labs/devkit-cli/pkg/migration"

	"gopkg.in/yaml.v3"
)
⋮----
"os"
⋮----
"github.com/Layr-Labs/devkit-cli/config"
"github.com/Layr-Labs/devkit-cli/pkg/common"
"github.com/Layr-Labs/devkit-cli/pkg/migration"
⋮----
"gopkg.in/yaml.v3"
⋮----
func Migration_0_0_3_to_0_0_4(user, old, new *yaml.Node) (*yaml.Node, error)
⋮----
log, _ := common.GetLogger(true) // We don't have context for logger here. So using verbose logs as default for migrations.
// Extract eigenlayer section from new default
⋮----
// Check if context exists in user config, create if not
⋮----
// Something is wrong with user config, just return it unmodified
⋮----
// Add eigenlayer section to user config
⋮----
// Add the key with comment first
⋮----
// Pull users eigenlayer key node
⋮----
// Replace the key-value pairs in the context eigenlayer mapping
⋮----
// Write Zeus config to project root if it doesn't exist already
⋮----
// bump version node
````

## File: config/contexts/migrations/v0.0.4-v0.0.5.go
````go
package contextMigrations
⋮----
import (
	"github.com/Layr-Labs/devkit-cli/pkg/migration"

	"gopkg.in/yaml.v3"
)
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/migration"
⋮----
"gopkg.in/yaml.v3"
⋮----
func Migration_0_0_4_to_0_0_5(user, old, new *yaml.Node) (*yaml.Node, error)
⋮----
// Append comments+keys at bottom if missing
⋮----
// Upgrade the version
````

## File: config/contexts/migrations/v0.0.5-v0.0.6.go
````go
package contextMigrations
⋮----
import (
	"fmt"
	"os"
	"path/filepath"
	"strings"

	"github.com/Layr-Labs/devkit-cli/config"
	"github.com/Layr-Labs/devkit-cli/pkg/migration"

	"gopkg.in/yaml.v3"
)
⋮----
"fmt"
"os"
"path/filepath"
"strings"
⋮----
"github.com/Layr-Labs/devkit-cli/config"
"github.com/Layr-Labs/devkit-cli/pkg/migration"
⋮----
"gopkg.in/yaml.v3"
⋮----
func Migration_0_0_5_to_0_0_6(user, old, new *yaml.Node) (*yaml.Node, error)
⋮----
// Update fork block for L1 chain
⋮----
// Update fork block for L2 chain
⋮----
// Replace eigenlayer config with new L1/L2 structure(We are not preserving the addresses since we are migrating to holesky)
⋮----
// Get the new eigenlayer structure from v0.0.6 template
⋮----
// Remove stake field and add allocations for operator 2 (0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65)
⋮----
// Remove stake field for operator 3 (0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc)
⋮----
// Remove stake field for operator 4 (0x976EA74026E726554dB657fA54763abd0C3a0aa9)
⋮----
// Remove stake field for operator 5 (0x14dC79964da2C08b23698B3D3cc7Ca32193d9955)
⋮----
// Update keystore files with new versions
⋮----
// Insert stakers section after app_private_key and before operators
⋮----
// Find the position of app_private_key
var insertIndex = -1
⋮----
insertIndex = i + 2 // Insert after app_private_key (key + value)
⋮----
// Create stakers key and value nodes
⋮----
// Add artifacts at the end
⋮----
// --- Artifacts (at the end) ---
⋮----
// Only add artifacts if not present
⋮----
// Check if transporter already exists
⋮----
// Create key + value nodes
⋮----
// Insert after "chains"
⋮----
// Insert the transporter between before and after
⋮----
// Set back the content
⋮----
// Upgrade the version
⋮----
func updateKeystoreFiles() error
⋮----
// Get the project directory (assuming we're in the project root)
⋮----
// Ensure keystores directory exists
⋮----
// List of keystore files to update
⋮----
// Update each keystore file with the new version from the embedded files
⋮----
// Try to get content from embedded files - check both old and new naming conventions
⋮----
// Try the new naming convention
⋮----
// Write the updated content to the file
````

## File: config/contexts/migrations/v0.0.6-v0.0.7.go
````go
package contextMigrations
⋮----
import (
	"github.com/Layr-Labs/devkit-cli/pkg/migration"

	"gopkg.in/yaml.v3"
)
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/migration"
⋮----
"gopkg.in/yaml.v3"
⋮----
func Migration_0_0_6_to_0_0_7(user, old, new *yaml.Node) (*yaml.Node, error)
⋮----
// Update fork block for L1 chain
⋮----
// Update fork block for L2 chain
⋮----
// Update rpc url for l2 chain
⋮----
// Update chain id for l2 chain
⋮----
// Update the transporter private_key
⋮----
// Update the transporter bls_private_key
⋮----
// Update allocation_manager for l1 chain
⋮----
// Update delegation_manager for l1 chain
⋮----
// Update strategy_manager for l1 chain
⋮----
// Update bn254_table_calculator for l1 chain
⋮----
// Update cross_chain_manager for l1 chain
⋮----
// Update key_registrar for l1 chain
⋮----
// Update release_manager for l1 chain
⋮----
// Update operator_table_updater for l1 chain
⋮----
// Update bn254_certificate_verifier for l2 chain
⋮----
// Update operator_table_updater for l2 chain
⋮----
// Add ecdsa_certificate_verifier for l2 chain
⋮----
// Add deployed_l1_contracts section
⋮----
// Add deployed_l2_contracts section
⋮----
// Remove deployed_contracts section
⋮----
// Insert stakers section after app_private_key and before operators
⋮----
// Update or create artifact section (renamed from artifacts to artifact)
⋮----
// Find existing artifacts section
⋮----
// Create the proper artifact structure with artifactId field
⋮----
// Update the key name from "artifacts" to "artifact" and update the value
⋮----
// Add new artifact section if it doesn't exist
⋮----
// Upgrade the version
````

## File: config/contexts/migrations/v0.0.7-v0.0.8.go
````go
package contextMigrations
⋮----
import (
	"fmt"
	"os"
	"path/filepath"
	"strings"

	"github.com/Layr-Labs/devkit-cli/config"
	"github.com/Layr-Labs/devkit-cli/pkg/migration"

	"gopkg.in/yaml.v3"
)
⋮----
"fmt"
"os"
"path/filepath"
"strings"
⋮----
"github.com/Layr-Labs/devkit-cli/config"
"github.com/Layr-Labs/devkit-cli/pkg/migration"
⋮----
"gopkg.in/yaml.v3"
⋮----
func Migration_0_0_7_to_0_0_8(user, old, new *yaml.Node) (*yaml.Node, error)
⋮----
// Add ECDSA keystore fields to operators
⋮----
// Get the user's existing operators node
⋮----
// Clone to avoid modifying the original
⋮----
// Update each operator
⋮----
// Use operator index (1-based) for keystore naming
⋮----
// Check if this operator already has ECDSA keystore fields
⋮----
// Find the position after ecdsa_key to insert the new fields
⋮----
// Create new keystore fields
⋮----
// Insert the new fields
⋮----
// Update BLS keystore paths to new naming convention
⋮----
// Update each operator's BLS keystore path
⋮----
// Find and update bls_keystore_path
⋮----
// Update the path from operatorN.keystore.json to operatorN.bls.keystore.json
⋮----
// Extract operator number and update path
⋮----
// Migrate keystore files (rename BLS and add ECDSA)
⋮----
// Upgrade the version
⋮----
// migrateKeystoreFiles renames existing BLS keystores to new naming convention
// and adds ECDSA keystores from embedded files
func migrateKeystoreFiles() error
⋮----
// Get the project directory
⋮----
// Ensure keystores directory exists
⋮----
// No keystores directory, nothing to migrate
⋮----
// Migrate each operator's keystores
⋮----
// Old and new BLS keystore names
⋮----
// Rename BLS keystore if it exists with old name
⋮----
// File exists, rename it
⋮----
// Add ECDSA keystore from embedded files
⋮----
// Only create ECDSA keystore if it doesn't already exist
⋮----
// Get ECDSA keystore content from embedded files
⋮----
// ECDSA keystore not found in embedded files, skip
// This allows for graceful handling if some operators don't have ECDSA keystores
⋮----
// Write ECDSA keystore
````

## File: config/contexts/migrations/v0.0.8-v0.0.9.go
````go
package contextMigrations
⋮----
import (
	"github.com/Layr-Labs/devkit-cli/pkg/common"
	"github.com/Layr-Labs/devkit-cli/pkg/migration"

	"gopkg.in/yaml.v3"
)
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common"
"github.com/Layr-Labs/devkit-cli/pkg/migration"
⋮----
"gopkg.in/yaml.v3"
⋮----
func Migration_0_0_8_to_0_0_9(user, old, new *yaml.Node) (*yaml.Node, error)
⋮----
// Update L1 fork block
⋮----
// Update L2 fork block
⋮----
// Update L1 AllocationManager address
⋮----
// Update L1 DelegationManager address
⋮----
// Update L1 StrategyManager address
⋮----
// Update L1 ReleaseManager address
⋮----
// Update L1 CrossChainRegistry address
⋮----
// Update L1 OperatorTableUpdater address
⋮----
// Update L1 KeyRegistrar address
⋮----
// Update L1 TaskMailbox address
⋮----
// Update L2 TaskMailbox address
⋮----
// Update L2 OperatorTableUpdater address
⋮----
// Update L2 BN254CertificateVerifier address
⋮----
// Update L2 ECDSACertificateVerifier address
⋮----
// Update L1 BN254TableCalculator address (env aware - this will not be updated by zeus)
⋮----
// Update L1 ECDSATableCalculator middleware address (env aware - this will not be updated by zeus)
⋮----
// Upgrade the version
⋮----
func GetAddressByChainIdFromCtx(ctx *yaml.Node, mainnetAddress, sepoliaAddress string) *yaml.Node
⋮----
// check l1 chainId - if == 1 then use MAINNET address
````

## File: config/contexts/migrations/v0.0.9-v0.1.0.go
````go
package contextMigrations
⋮----
import (
	"fmt"
	"strings"

	"github.com/Layr-Labs/devkit-cli/pkg/common"
	"github.com/Layr-Labs/devkit-cli/pkg/migration"

	"gopkg.in/yaml.v3"
)
⋮----
"fmt"
"strings"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common"
"github.com/Layr-Labs/devkit-cli/pkg/migration"
⋮----
"gopkg.in/yaml.v3"
⋮----
func Migration_0_0_9_to_0_1_0(user, old, new *yaml.Node) (*yaml.Node, error)
⋮----
// Add missing strategy upgrade to move stETH from holesky to sepolia
const (
		oldStrat        = "0x7D704507b76571a51d9caE8AdDAbBFd0ba0e63d3"
		newSepoliaStrat = "0x8b29d91e67b013e855EaFe0ad704aC4Ab086a574"
		newMainnetStrat = "0x93c4b944d05dfe6df7645a86cd2206016c51564d"
	)
⋮----
// check l1 chainId - if == 1 then use MAINNET address
⋮----
// Patch all changes in context
⋮----
// Move Operators keystore to map
⋮----
// Fixed operatorSet IDs
⋮----
// build keystores
⋮----
// drop old flat fields and any preexisting keystore/keystores
⋮----
// write new keystores
⋮----
// Rewrite strategy_address in stakers[].deposits[]
⋮----
// node is a seq of stakers
⋮----
// Rewrite strategy_address in operators[].allocations[]
⋮----
// node is a seq of operators
⋮----
// Update L1 PermissionController address
⋮----
// Update L1 fork block
⋮----
// Update L2 fork block
⋮----
// Update BLS keystore files
⋮----
// Upgrade the version
````

## File: config/contexts/migrations/v0.1.0-v0.1.1.go
````go
package contextMigrations
⋮----
import (
	"github.com/Layr-Labs/devkit-cli/pkg/migration"
	"gopkg.in/yaml.v3"
)
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/migration"
"gopkg.in/yaml.v3"
⋮----
func Migration_0_1_0_to_0_1_1(user, old, new *yaml.Node) (*yaml.Node, error)
⋮----
// Update fork block heights to match ponos project
⋮----
// Update L1 fork block
⋮----
// Update L2 fork block
⋮----
// Upgrade the version
````

## File: config/contexts/registry.go
````go
package contexts
⋮----
import (
	_ "embed"
	"errors"
	"fmt"
	"os"
	"path/filepath"
	"strings"

	"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
	"github.com/Layr-Labs/devkit-cli/pkg/migration"

	contextMigrations "github.com/Layr-Labs/devkit-cli/config/contexts/migrations"
)
⋮----
_ "embed"
"errors"
"fmt"
"os"
"path/filepath"
"strings"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
"github.com/Layr-Labs/devkit-cli/pkg/migration"
⋮----
contextMigrations "github.com/Layr-Labs/devkit-cli/config/contexts/migrations"
⋮----
// Set the latest version
const LatestVersion = "0.1.1"
⋮----
// Array of default contexts to create in project
var DefaultContexts = [...]string{
	"devnet",
}
⋮----
// --
// Versioned contexts
⋮----
//go:embed v0.0.1.yaml
var v0_0_1_default []byte
⋮----
//go:embed v0.0.2.yaml
var v0_0_2_default []byte
⋮----
//go:embed v0.0.3.yaml
var v0_0_3_default []byte
⋮----
//go:embed v0.0.4.yaml
var v0_0_4_default []byte
⋮----
//go:embed v0.0.5.yaml
var v0_0_5_default []byte
⋮----
//go:embed v0.0.6.yaml
var v0_0_6_default []byte
⋮----
//go:embed v0.0.7.yaml
var v0_0_7_default []byte
⋮----
//go:embed v0.0.8.yaml
var v0_0_8_default []byte
⋮----
//go:embed v0.0.9.yaml
var v0_0_9_default []byte
⋮----
//go:embed v0.1.0.yaml
var v0_1_0_default []byte
⋮----
//go:embed v0.1.1.yaml
var v0_1_1_default []byte
⋮----
// Map of context name -> content
var ContextYamls = map[string][]byte{
	"0.0.1": v0_0_1_default,
	"0.0.2": v0_0_2_default,
	"0.0.3": v0_0_3_default,
	"0.0.4": v0_0_4_default,
	"0.0.5": v0_0_5_default,
	"0.0.6": v0_0_6_default,
	"0.0.7": v0_0_7_default,
	"0.0.8": v0_0_8_default,
	"0.0.9": v0_0_9_default,
	"0.1.0": v0_1_0_default,
	"0.1.1": v0_1_1_default,
}
⋮----
// Map of sequential migrations
var MigrationChain = []migration.MigrationStep{
	{
		From:    "0.0.1",
		To:      "0.0.2",
		Apply:   contextMigrations.Migration_0_0_1_to_0_0_2,
		OldYAML: v0_0_1_default,
		NewYAML: v0_0_2_default,
	},
	{
		From:    "0.0.2",
		To:      "0.0.3",
		Apply:   contextMigrations.Migration_0_0_2_to_0_0_3,
		OldYAML: v0_0_2_default,
		NewYAML: v0_0_3_default,
	},
	{
		From:    "0.0.3",
		To:      "0.0.4",
		Apply:   contextMigrations.Migration_0_0_3_to_0_0_4,
		OldYAML: v0_0_3_default,
		NewYAML: v0_0_4_default,
	},
	{
		From:    "0.0.4",
		To:      "0.0.5",
		Apply:   contextMigrations.Migration_0_0_4_to_0_0_5,
		OldYAML: v0_0_4_default,
		NewYAML: v0_0_5_default,
	},
	{
		From:    "0.0.5",
		To:      "0.0.6",
		Apply:   contextMigrations.Migration_0_0_5_to_0_0_6,
		OldYAML: v0_0_5_default,
		NewYAML: v0_0_6_default,
	},
	{
		From:    "0.0.6",
		To:      "0.0.7",
		Apply:   contextMigrations.Migration_0_0_6_to_0_0_7,
		OldYAML: v0_0_6_default,
		NewYAML: v0_0_7_default,
	},
	{
		From:    "0.0.7",
		To:      "0.0.8",
		Apply:   contextMigrations.Migration_0_0_7_to_0_0_8,
		OldYAML: v0_0_7_default,
		NewYAML: v0_0_8_default,
	},
	{
		From:    "0.0.8",
		To:      "0.0.9",
		Apply:   contextMigrations.Migration_0_0_8_to_0_0_9,
		OldYAML: v0_0_8_default,
		NewYAML: v0_0_9_default,
	},
	{
		From:    "0.0.9",
		To:      "0.1.0",
		Apply:   contextMigrations.Migration_0_0_9_to_0_1_0,
		OldYAML: v0_0_9_default,
		NewYAML: v0_1_0_default,
	},
	{
		From:    "0.1.0",
		To:      "0.1.1",
		Apply:   contextMigrations.Migration_0_1_0_to_0_1_1,
		OldYAML: v0_1_0_default,
		NewYAML: v0_1_1_default,
	},
}
⋮----
func MigrateContexts(logger iface.Logger) (int, error)
⋮----
// Count the number of contexts we migrate
⋮----
// Set path for context yamls
⋮----
// Read all contexts/*.yamls
⋮----
// Attempt to upgrade every entry
⋮----
// Migrate the context
⋮----
// Check for already upto date and ignore
⋮----
// For every other error, migration failed
⋮----
// If context was migrated
⋮----
// Incr number of contextsMigrated
⋮----
// If migration succeeds
````

## File: config/contexts/v0.0.1.yaml
````yaml
# Devnet context to be used for local deployments against Anvil chain
version: 0.0.1
context:
  # Name of the context
  name: "devnet"
  # Chains available to this context
  chains:
    l1: 
      chain_id: 31337
      rpc_url: "http://localhost:8545"
      fork:
        block: 22475020
        url: "https://eth.llamarpc.com"
    l2:
      chain_id: 31337
      rpc_url: "http://localhost:8545"
      fork:
        block: 22475020
        url: "https://eth.llamarpc.com"
  # All key material (BLS and ECDSA) within this file should be used for local testing ONLY
  # ECDSA keys used are from Anvil's private key set
  # BLS keystores are deterministically pre-generated and embedded. These are NOT derived from a secure seed
  # Available private keys for deploying
  deployer_private_key: "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80" # Anvil Private Key 0
  app_private_key: "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80" # Anvil Private Key 0
  # List of Operators and their private keys / stake details
  operators:
    - address: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
      ecdsa_key: "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80" # Anvil Private Key 0
      bls_keystore_path: "keystores/operator1.keystore.json"
      bls_keystore_password: "testpass"
      stake: "1000ETH"
    - address: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
      ecdsa_key: "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d" # Anvil Private Key 1
      bls_keystore_path: "keystores/operator2.keystore.json"
      bls_keystore_password: "testpass"
      stake: "1000ETH"
    - address: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"
      ecdsa_key: "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a" # Anvil Private Key 2
      bls_keystore_path: "keystores/operator3.keystore.json"
      bls_keystore_password: "testpass"
      stake: "1000ETH"
    - address: "0x90F79bf6EB2c4f870365E785982E1f101E93b906"
      ecdsa_key: "0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6" # Anvil Private Key 3
      bls_keystore_path: "keystores/operator4.keystore.json"
      bls_keystore_password: "testpass"
      stake: "1000ETH"
    - address: "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65"
      ecdsa_key: "0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a" # Anvil Private Key 4
      bls_keystore_path: "keystores/operator5.keystore.json"
      bls_keystore_password: "testpass"
      stake: "1000ETH"
  # AVS configuration
  avs:
    address: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
    avs_private_key: "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80" # Anvil Private Key 0
    metadata_url: "https://my-org.com/avs/metadata.json"
    registrar_address: "0x0123456789abcdef0123456789ABCDEF01234567"
````

## File: config/contexts/v0.0.2.yaml
````yaml
# Devnet context to be used for local deployments against Anvil chain
version: 0.0.2
context:
  # Name of the context
  name: "devnet"
  # Chains available to this context
  chains:
    l1: 
      chain_id: 31337
      rpc_url: "http://localhost:8545"
      fork:
        block: 22475020
        url: ""
    l2:
      chain_id: 31337
      rpc_url: "http://localhost:8545"
      fork:
        block: 22475020
        url: ""
  # All key material (BLS and ECDSA) within this file should be used for local testing ONLY
  # ECDSA keys used are from Anvil's private key set
  # BLS keystores are deterministically pre-generated and embedded. These are NOT derived from a secure seed
  # Available private keys for deploying
  deployer_private_key: "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80" # Anvil Private Key 0
  app_private_key: "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a" # Anvil Private Key 2
  # List of Operators and their private keys / stake details
  operators:
    - address: "0x90F79bf6EB2c4f870365E785982E1f101E93b906"
      ecdsa_key: "0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6" # Anvil Private Key 3
      bls_keystore_path: "keystores/operator1.keystore.json"
      bls_keystore_password: "testpass"
      stake: "1000ETH"
    - address: "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65"
      ecdsa_key: "0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a" # Anvil Private Key 4
      bls_keystore_path: "keystores/operator2.keystore.json"
      bls_keystore_password: "testpass"
      stake: "1000ETH"
    - address: "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc"
      ecdsa_key: "0x8b3a350cf5c34c9194ca85829a2df0ec3153be0318b5e2d3348e872092edffba" # Anvil Private Key 5
      bls_keystore_path: "keystores/operator3.keystore.json"
      bls_keystore_password: "testpass"
      stake: "1000ETH"
    - address: "0x976EA74026E726554dB657fA54763abd0C3a0aa9"
      ecdsa_key: "0x92db14e403b83dfe3df233f83dfa3a0d7096f21ca9b0d6d6b8d88b2b4ec1564e" # Anvil Private Key 6
      bls_keystore_path: "keystores/operator4.keystore.json"
      bls_keystore_password: "testpass"
      stake: "1000ETH"
    - address: "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955"
      ecdsa_key: "0x4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356" # Anvil Private Key 7
      bls_keystore_path: "keystores/operator5.keystore.json"
      bls_keystore_password: "testpass"
      stake: "1000ETH"
  # AVS configuration
  avs:
    address: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
    avs_private_key: "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d" # Anvil Private Key 1
    metadata_url: "https://my-org.com/avs/metadata.json"
    registrar_address: "0x0123456789abcdef0123456789ABCDEF01234567"
````

## File: config/contexts/v0.0.3.yaml
````yaml
# Devnet context to be used for local deployments against Anvil chain
version: 0.0.3
context:
  # Name of the context
  name: "devnet"
  # Chains available to this context
  chains:
    l1:
      chain_id: 31337
      rpc_url: "http://localhost:8545"
      fork:
        block: 22475020
        url: ""
        block_time: 3
    l2:
      chain_id: 31337
      rpc_url: "http://localhost:8545"
      fork:
        block: 22475020
        url: ""
        block_time: 3
  # All key material (BLS and ECDSA) within this file should be used for local testing ONLY
  # ECDSA keys used are from Anvil's private key set
  # BLS keystores are deterministically pre-generated and embedded. These are NOT derived from a secure seed
  # Available private keys for deploying
  deployer_private_key: "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80" # Anvil Private Key 0
  app_private_key: "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a" # Anvil Private Key 2
  # List of Operators and their private keys / stake details
  operators:
    - address: "0x90F79bf6EB2c4f870365E785982E1f101E93b906"
      ecdsa_key: "0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6" # Anvil Private Key 3
      bls_keystore_path: "keystores/operator1.keystore.json"
      bls_keystore_password: "testpass"
      stake: "1000ETH"
    - address: "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65"
      ecdsa_key: "0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a" # Anvil Private Key 4
      bls_keystore_path: "keystores/operator2.keystore.json"
      bls_keystore_password: "testpass"
      stake: "1000ETH"
    - address: "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc"
      ecdsa_key: "0x8b3a350cf5c34c9194ca85829a2df0ec3153be0318b5e2d3348e872092edffba" # Anvil Private Key 5
      bls_keystore_path: "keystores/operator3.keystore.json"
      bls_keystore_password: "testpass"
      stake: "1000ETH"
    - address: "0x976EA74026E726554dB657fA54763abd0C3a0aa9"
      ecdsa_key: "0x92db14e403b83dfe3df233f83dfa3a0d7096f21ca9b0d6d6b8d88b2b4ec1564e" # Anvil Private Key 6
      bls_keystore_path: "keystores/operator4.keystore.json"
      bls_keystore_password: "testpass"
      stake: "1000ETH"
    - address: "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955"
      ecdsa_key: "0x4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356" # Anvil Private Key 7
      bls_keystore_path: "keystores/operator5.keystore.json"
      bls_keystore_password: "testpass"
      stake: "1000ETH"
  # AVS configuration
  avs:
    address: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
    avs_private_key: "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d" # Anvil Private Key 1
    metadata_url: "https://my-org.com/avs/metadata.json"
    registrar_address: "0x0123456789abcdef0123456789ABCDEF01234567"
````

## File: config/contexts/v0.0.4.yaml
````yaml
# Devnet context to be used for local deployments against Anvil chain
version: 0.0.4
context:
  # Name of the context
  name: "devnet"
  # Chains available to this context
  chains:
    l1: 
      chain_id: 31337
      rpc_url: "http://localhost:8545"
      fork:
        block: 22475020
        url: ""
        block_time: 3
    l2:
      chain_id: 31337
      rpc_url: "http://localhost:8545"
      fork:
        block: 22475020
        url: ""
        block_time: 3
  # All key material (BLS and ECDSA) within this file should be used for local testing ONLY
  # ECDSA keys used are from Anvil's private key set
  # BLS keystores are deterministically pre-generated and embedded. These are NOT derived from a secure seed
  # Available private keys for deploying
  deployer_private_key: "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80" # Anvil Private Key 0
  app_private_key: "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a" # Anvil Private Key 2
  # List of Operators and their private keys / stake details
  operators:
    - address: "0x90F79bf6EB2c4f870365E785982E1f101E93b906"
      ecdsa_key: "0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6" # Anvil Private Key 3
      bls_keystore_path: "keystores/operator1.keystore.json"
      bls_keystore_password: "testpass"
      stake: "1000ETH"
    - address: "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65"
      ecdsa_key: "0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a" # Anvil Private Key 4
      bls_keystore_path: "keystores/operator2.keystore.json"
      bls_keystore_password: "testpass"
      stake: "1000ETH"
    - address: "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc"
      ecdsa_key: "0x8b3a350cf5c34c9194ca85829a2df0ec3153be0318b5e2d3348e872092edffba" # Anvil Private Key 5
      bls_keystore_path: "keystores/operator3.keystore.json"
      bls_keystore_password: "testpass"
      stake: "1000ETH"
    - address: "0x976EA74026E726554dB657fA54763abd0C3a0aa9"
      ecdsa_key: "0x92db14e403b83dfe3df233f83dfa3a0d7096f21ca9b0d6d6b8d88b2b4ec1564e" # Anvil Private Key 6
      bls_keystore_path: "keystores/operator4.keystore.json"
      bls_keystore_password: "testpass"
      stake: "1000ETH"
    - address: "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955"
      ecdsa_key: "0x4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356" # Anvil Private Key 7
      bls_keystore_path: "keystores/operator5.keystore.json"
      bls_keystore_password: "testpass"
      stake: "1000ETH"
  # AVS configuration
  avs:
    address: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
    avs_private_key: "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d" # Anvil Private Key 1
    metadata_url: "https://my-org.com/avs/metadata.json"
    registrar_address: "0x0123456789abcdef0123456789ABCDEF01234567"
  # Core EigenLayer contract addresses
  eigenlayer:
    allocation_manager: "0x948a420b8CC1d6BFd0B6087C2E7c344a2CD0bc39"
    delegation_manager: "0x39053D51B77DC0d36036Fc1fCc8Cb819df8Ef37A"
````

## File: config/contexts/v0.0.5.yaml
````yaml
# Devnet context to be used for local deployments against Anvil chain
version: 0.0.5
context:
  # Name of the context
  name: "devnet"
  # Chains available to this context
  chains:
    l1:
      chain_id: 31337
      rpc_url: "http://localhost:8545"
      fork:
        block: 22475020
        url: ""
        block_time: 3
    l2:
      chain_id: 31337
      rpc_url: "http://localhost:8545"
      fork:
        block: 22475020
        url: ""
        block_time: 3
  # All key material (BLS and ECDSA) within this file should be used for local testing ONLY
  # ECDSA keys used are from Anvil's private key set
  # BLS keystores are deterministically pre-generated and embedded. These are NOT derived from a secure seed
  # Available private keys for deploying
  deployer_private_key: "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80" # Anvil Private Key 0
  app_private_key: "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a" # Anvil Private Key 2
  # List of Operators and their private keys / stake details
  operators:
    - address: "0x90F79bf6EB2c4f870365E785982E1f101E93b906"
      ecdsa_key: "0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6" # Anvil Private Key 3
      bls_keystore_path: "keystores/operator1.keystore.json"
      bls_keystore_password: "testpass"
      stake: "1000ETH"
    - address: "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65"
      ecdsa_key: "0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a" # Anvil Private Key 4
      bls_keystore_path: "keystores/operator2.keystore.json"
      bls_keystore_password: "testpass"
      stake: "1000ETH"
    - address: "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc"
      ecdsa_key: "0x8b3a350cf5c34c9194ca85829a2df0ec3153be0318b5e2d3348e872092edffba" # Anvil Private Key 5
      bls_keystore_path: "keystores/operator3.keystore.json"
      bls_keystore_password: "testpass"
      stake: "1000ETH"
    - address: "0x976EA74026E726554dB657fA54763abd0C3a0aa9"
      ecdsa_key: "0x92db14e403b83dfe3df233f83dfa3a0d7096f21ca9b0d6d6b8d88b2b4ec1564e" # Anvil Private Key 6
      bls_keystore_path: "keystores/operator4.keystore.json"
      bls_keystore_password: "testpass"
      stake: "1000ETH"
    - address: "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955"
      ecdsa_key: "0x4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356" # Anvil Private Key 7
      bls_keystore_path: "keystores/operator5.keystore.json"
      bls_keystore_password: "testpass"
      stake: "1000ETH"
  # AVS configuration
  avs:
    address: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
    avs_private_key: "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d" # Anvil Private Key 1
    metadata_url: "https://my-org.com/avs/metadata.json"
    registrar_address: "0x0123456789abcdef0123456789ABCDEF01234567"
  # Core EigenLayer contract addresses
  eigenlayer:
    allocation_manager: "0x948a420b8CC1d6BFd0B6087C2E7c344a2CD0bc39"
    delegation_manager: "0x39053D51B77DC0d36036Fc1fCc8Cb819df8Ef37A" 
  # Contracts deployed on `devnet start`
  deployed_contracts: []
  # Operator Sets registered on `devnet start`
  operator_sets: []
  # Operators registered on `devnet start`
  operator_registrations: []
````

## File: config/contexts/v0.0.6.yaml
````yaml
# Devnet context to be used for local deployments against Anvil chain
version: 0.0.6
context:
  # Name of the context
  name: "devnet"
  # Chains available to this context
  chains:
    l1:
      chain_id: 31337
      rpc_url: "http://localhost:8545"
      fork:
        block: 4017700
        url: ""
        block_time: 3
    l2:
      chain_id: 31337
      rpc_url: "http://localhost:8545"
      fork:
        block: 4017700
        url: ""
        block_time: 3
  # Stake Root Transporter configuration
  transporter:
    schedule: "0 */2 * * *"
    private_key: "0x2ba58f64c57faa1073d63add89799f2a0101855a8b289b1330cb500758d5d1ee"
    bls_private_key: "0x2ba58f64c57faa1073d63add89799f2a0101855a8b289b1330cb500758d5d1ee"
    active_stake_roots: []
  # All key material (BLS and ECDSA) within this file should be used for local testing ONLY
  # ECDSA keys used are from Anvil's private key set
  # BLS keystores are deterministically pre-generated and embedded. These are NOT derived from a secure seed
  # Available private keys for deploying
  deployer_private_key: "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80" # Anvil Private Key 0
  app_private_key: "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a" # Anvil Private Key 2
  # List of stakers and their delegations 
  stakers:
    - address: "0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f"
      ecdsa_key: "0xdbda1821b80551c9d65939329250298aa3472ba22feea921c0cf5d620ea67b97" # Anvil 8
      deposits:
        - strategy_address: "0x7D704507b76571a51d9caE8AdDAbBFd0ba0e63d3"
          name: "stETH_Strategy"
          deposit_amount: "5ETH" # depositIntoStrategy amount 
      operator: "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65" # Operator to delegate the stake via delegationManager.delegateTo()
    - address: "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720" 
      ecdsa_key: "0x2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6"
      deposits:
        - strategy_address: "0x7D704507b76571a51d9caE8AdDAbBFd0ba0e63d3"
          name: "stETH_Strategy"
          deposit_amount: "5ETH" # depositIntoStrategy amount 
      operator: "0x90F79bf6EB2c4f870365E785982E1f101E93b906"
  # List of Operators and their private keys / stake details
  operators:
    - address: "0x90F79bf6EB2c4f870365E785982E1f101E93b906"
      ecdsa_key: "0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6" # Anvil Private Key 3
      bls_keystore_path: "keystores/operator1.keystore.json"
      bls_keystore_password: "testpass"
      allocations:
        - strategy_address: "0x7D704507b76571a51d9caE8AdDAbBFd0ba0e63d3"
          name: "stETH_Strategy"
          # Only allocate if these operator set IDs exist in the deployed operator_sets 
          operator_set_allocations:
            - operator_set: "0" 
              allocation_in_wads: "500000000000000000" # 5e17 i.e 50% of max allocation
            - operator_set: "1"
              allocation_in_wads: "500000000000000000" # 5e17 i.e 50% of max allocation
    - address: "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65"
      ecdsa_key: "0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a" # Anvil Private Key 4
      bls_keystore_path: "keystores/operator2.keystore.json"
      bls_keystore_password: "testpass"
      allocations:
        - strategy_address: "0x7D704507b76571a51d9caE8AdDAbBFd0ba0e63d3"
          name: "stETH_Strategy"
          # Only allocate if these operator set IDs exist in the deployed operator_sets 
          operator_set_allocations:
            - operator_set: "0" 
              allocation_in_wads: "500000000000000000" # 5e17 i.e 50% of max allocation
            - operator_set: "1"
              allocation_in_wads: "500000000000000000" # 5e17 i.e 50% of max allocation
    - address: "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc"
      ecdsa_key: "0x8b3a350cf5c34c9194ca85829a2df0ec3153be0318b5e2d3348e872092edffba" # Anvil Private Key 5
      bls_keystore_path: "keystores/operator3.keystore.json"
      bls_keystore_password: "testpass"
    - address: "0x976EA74026E726554dB657fA54763abd0C3a0aa9"
      ecdsa_key: "0x92db14e403b83dfe3df233f83dfa3a0d7096f21ca9b0d6d6b8d88b2b4ec1564e" # Anvil Private Key 6
      bls_keystore_path: "keystores/operator4.keystore.json"
      bls_keystore_password: "testpass"
    - address: "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955"
      ecdsa_key: "0x4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356" # Anvil Private Key 7
      bls_keystore_path: "keystores/operator5.keystore.json"
      bls_keystore_password: "testpass"
  # AVS configuration
  avs:
    address: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
    avs_private_key: "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d" # Anvil Private Key 1
    metadata_url: "https://my-org.com/avs/metadata.json"
    registrar_address: "0x0123456789abcdef0123456789ABCDEF01234567"
  # Core EigenLayer contract addresses
  eigenlayer:
    l1: 
      allocation_manager: "0xFdD5749e11977D60850E06bF5B13221Ad95eb6B4"
      delegation_manager: "0x75dfE5B44C2E530568001400D3f704bC8AE350CC" 
      strategy_manager: "0xdfB5f6CE42aAA7830E94ECFCcAd411beF4d4D5b6"
      bn254_table_calculator: "0x033af59c1b030Cc6eEE07B150FD97668497dc74b"
      cross_chain_registry: "0x0022d2014901F2AFBF5610dDFcd26afe2a65Ca6F"
      key_registrar: "0x1C84Bb62fE7791e173014A879C706445fa893BbE"
      release_manager: "0x323A9FcB2De80d04B5C4B0F72ee7799100D32F0F"
    l2: 
      bn254_certificate_verifier: "0xf462d03A82C1F3496B0DFe27E978318eD1720E1f"
      operator_table_updater: "0xd7230B89E5E2ed1FD068F0FF9198D7960243f12a"
    
  # Contracts deployed on `devnet start`
  deployed_contracts: []
  # Operator Sets registered on `devnet start`
  operator_sets: []
  # Operators registered on `devnet start`
  operator_registrations: []
  # Release artifacts
  artifacts:
````

## File: config/contexts/v0.0.7.yaml
````yaml
# Devnet context to be used for local deployments against Anvil chain
version: 0.0.7
context:
  # Name of the context
  name: "devnet"
  # Chains available to this context
  chains:
    l1:
      chain_id: 31337
      rpc_url: "http://localhost:8545"
      fork:
        block: 8713384
        url: ""
        block_time: 3
    l2:
      chain_id: 31338
      rpc_url: "http://localhost:9545"
      fork:
        block: 28069764
        url: ""
        block_time: 3
  # Stake Root Transporter configuration
  transporter:
    schedule: "0 */2 * * *"
    private_key: "0x5f8e6420b9cb0c940e3d3f8b99177980785906d16fb3571f70d7a05ecf5f2172"
    bls_private_key: "0x5f8e6420b9cb0c940e3d3f8b99177980785906d16fb3571f70d7a05ecf5f2172"
    active_stake_roots: []
  # All key material (BLS and ECDSA) within this file should be used for local testing ONLY
  # ECDSA keys used are from Anvil's private key set
  # BLS keystores are deterministically pre-generated and embedded. These are NOT derived from a secure seed
  # Available private keys for deploying
  deployer_private_key: "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80" # Anvil Private Key 0
  app_private_key: "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a" # Anvil Private Key 2
  # List of stakers and their delegations 
  stakers:
    - address: "0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f"
      ecdsa_key: "0xdbda1821b80551c9d65939329250298aa3472ba22feea921c0cf5d620ea67b97" # Anvil 8
      deposits:
        - strategy_address: "0x8b29d91e67b013e855EaFe0ad704aC4Ab086a574"
          name: "stETH_Strategy"
          deposit_amount: "5ETH" # depositIntoStrategy amount 
      operator: "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65" # Operator to delegate the stake via delegationManager.delegateTo()
    - address: "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720"
      ecdsa_key: "0x2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6"
      deposits:
        - strategy_address: "0x8b29d91e67b013e855EaFe0ad704aC4Ab086a574"
          name: "stETH_Strategy"
          deposit_amount: "5ETH" # depositIntoStrategy amount 
      operator: "0x90F79bf6EB2c4f870365E785982E1f101E93b906"
  # List of Operators and their private keys / stake details
  operators:
    - address: "0x90F79bf6EB2c4f870365E785982E1f101E93b906"
      ecdsa_key: "0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6" # Anvil Private Key 3
      bls_keystore_path: "keystores/operator1.keystore.json"
      bls_keystore_password: "testpass"
      allocations:
        - strategy_address: "0x8b29d91e67b013e855EaFe0ad704aC4Ab086a574"
          name: "stETH_Strategy"
          # Only allocate if these operator set IDs exist in the deployed operator_sets 
          operator_set_allocations:
            - operator_set: "0"
              allocation_in_wads: "500000000000000000" # 5e17 i.e 50% of max allocation
            - operator_set: "1"
              allocation_in_wads: "500000000000000000" # 5e17 i.e 50% of max allocation
    - address: "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65"
      ecdsa_key: "0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a" # Anvil Private Key 4
      bls_keystore_path: "keystores/operator2.keystore.json"
      bls_keystore_password: "testpass"
      allocations:
        - strategy_address: "0x8b29d91e67b013e855EaFe0ad704aC4Ab086a574"
          name: "stETH_Strategy"
          # Only allocate if these operator set IDs exist in the deployed operator_sets 
          operator_set_allocations:
            - operator_set: "0"
              allocation_in_wads: "500000000000000000" # 5e17 i.e 50% of max allocation
            - operator_set: "1"
              allocation_in_wads: "500000000000000000" # 5e17 i.e 50% of max allocation
    - address: "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc"
      ecdsa_key: "0x8b3a350cf5c34c9194ca85829a2df0ec3153be0318b5e2d3348e872092edffba" # Anvil Private Key 5
      bls_keystore_path: "keystores/operator3.keystore.json"
      bls_keystore_password: "testpass"
    - address: "0x976EA74026E726554dB657fA54763abd0C3a0aa9"
      ecdsa_key: "0x92db14e403b83dfe3df233f83dfa3a0d7096f21ca9b0d6d6b8d88b2b4ec1564e" # Anvil Private Key 6
      bls_keystore_path: "keystores/operator4.keystore.json"
      bls_keystore_password: "testpass"
    - address: "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955"
      ecdsa_key: "0x4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356" # Anvil Private Key 7
      bls_keystore_path: "keystores/operator5.keystore.json"
      bls_keystore_password: "testpass"
  # AVS configuration
  avs:
    address: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
    avs_private_key: "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d" # Anvil Private Key 1
    metadata_url: "https://my-org.com/avs/metadata.json"
    registrar_address: "0x0123456789abcdef0123456789ABCDEF01234567"
  # Core EigenLayer contract addresses
  eigenlayer:
    l1:
      allocation_manager: "0x42583067658071247ec8CE0A516A58f682002d07"
      delegation_manager: "0xD4A7E1Bd8015057293f0D0A557088c286942e84b"
      strategy_manager: "0x2E3D6c0744b10eb0A4e6F679F71554a39Ec47a5D"
      bn254_table_calculator: "0xc2c0bc13571aC5115709C332dc7AE666606b08E8"
      cross_chain_registry: "0xe850D8A178777b483D37fD492a476e3E6004C816"
      key_registrar: "0x78De554Ac8DfF368e3CAa73B3Df8AccCfD92928A"
      release_manager: "0xd9Cb89F1993292dEC2F973934bC63B0f2A702776"
      operator_table_updater: "0xE12C4cebd680a917271145eDbFB091B1BdEFD74D"
    l2:
      bn254_certificate_verifier: "0x998535833f3feE44ce720440E735554699f728a5"
      operator_table_updater: "0xE12C4cebd680a917271145eDbFB091B1BdEFD74D"
      ecdsa_certificate_verifier: "0xAD2F58A551bD0e77fa20b5531dA96eF440C392BF"
  # L1 Contracts deployed on `devnet start`
  deployed_l1_contracts: []
  # L2 Contracts deployed on `devnet start`
  deployed_l2_contracts: []
  # Operator Sets registered on `devnet start`
  operator_sets: []
  # Operators registered on `devnet start`
  operator_registrations: []
  # Release artifact
  artifact:
    artifactId: ""
    component: ""
    digest: ""
    registry: ""
    version: ""
````

## File: config/contexts/v0.0.8.yaml
````yaml
# Devnet context to be used for local deployments against Anvil chain
version: 0.0.8
context:
  # Name of the context
  name: "devnet"
  # Chains available to this context
  chains:
    l1:
      chain_id: 31337
      rpc_url: "http://localhost:8545"
      fork:
        block: 8713384
        url: ""
        block_time: 3
    l2:
      chain_id: 31338
      rpc_url: "http://localhost:9545"
      fork:
        block: 28069764
        url: ""
        block_time: 3
  # Stake Root Transporter configuration
  transporter:
    schedule: "0 */2 * * *"
    private_key: "0x5f8e6420b9cb0c940e3d3f8b99177980785906d16fb3571f70d7a05ecf5f2172"
    bls_private_key: "0x5f8e6420b9cb0c940e3d3f8b99177980785906d16fb3571f70d7a05ecf5f2172"
    active_stake_roots: []
  # All key material (BLS and ECDSA) within this file should be used for local testing ONLY
  # ECDSA keys used are from Anvil's private key set
  # BLS keystores are deterministically pre-generated and embedded. These are NOT derived from a secure seed
  # Available private keys for deploying
  deployer_private_key: "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80" # Anvil Private Key 0
  app_private_key: "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a" # Anvil Private Key 2
  # List of stakers and their delegations 
  stakers:
    - address: "0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f"
      ecdsa_key: "0xdbda1821b80551c9d65939329250298aa3472ba22feea921c0cf5d620ea67b97" # Anvil 8
      deposits:
        - strategy_address: "0x8b29d91e67b013e855EaFe0ad704aC4Ab086a574"
          name: "stETH_Strategy"
          deposit_amount: "5ETH" # depositIntoStrategy amount 
      operator: "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65" # Operator to delegate the stake via delegationManager.delegateTo()
    - address: "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720"
      ecdsa_key: "0x2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6"
      deposits:
        - strategy_address: "0x8b29d91e67b013e855EaFe0ad704aC4Ab086a574"
          name: "stETH_Strategy"
          deposit_amount: "5ETH" # depositIntoStrategy amount 
      operator: "0x90F79bf6EB2c4f870365E785982E1f101E93b906"
  # List of Operators and their private keys / stake details
  operators:
    - address: "0x90F79bf6EB2c4f870365E785982E1f101E93b906"
      ecdsa_key: "0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6" # Anvil Private Key 3
      ecdsa_keystore_path: "keystores/operator1.ecdsa.keystore.json"
      ecdsa_keystore_password: "testpass"
      bls_keystore_path: "keystores/operator1.bls.keystore.json"
      bls_keystore_password: "testpass"
      allocations:
        - strategy_address: "0x8b29d91e67b013e855EaFe0ad704aC4Ab086a574"
          name: "stETH_Strategy"
          # Only allocate if these operator set IDs exist in the deployed operator_sets 
          operator_set_allocations:
            - operator_set: "0"
              allocation_in_wads: "500000000000000000" # 5e17 i.e 50% of max allocation
            - operator_set: "1"
              allocation_in_wads: "500000000000000000" # 5e17 i.e 50% of max allocation
    - address: "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65"
      ecdsa_key: "0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a" # Anvil Private Key 4
      ecdsa_keystore_path: "keystores/operator2.ecdsa.keystore.json"
      ecdsa_keystore_password: "testpass"
      bls_keystore_path: "keystores/operator2.bls.keystore.json"
      bls_keystore_password: "testpass"
      allocations:
        - strategy_address: "0x8b29d91e67b013e855EaFe0ad704aC4Ab086a574"
          name: "stETH_Strategy"
          # Only allocate if these operator set IDs exist in the deployed operator_sets 
          operator_set_allocations:
            - operator_set: "0" 
              allocation_in_wads: "500000000000000000" # 5e17 i.e 50% of max allocation
            - operator_set: "1"
              allocation_in_wads: "500000000000000000" # 5e17 i.e 50% of max allocation
    - address: "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc"
      ecdsa_key: "0x8b3a350cf5c34c9194ca85829a2df0ec3153be0318b5e2d3348e872092edffba" # Anvil Private Key 5
      ecdsa_keystore_path: "keystores/operator3.ecdsa.keystore.json"
      ecdsa_keystore_password: "testpass"
      bls_keystore_path: "keystores/operator3.bls.keystore.json"
      bls_keystore_password: "testpass"
    - address: "0x976EA74026E726554dB657fA54763abd0C3a0aa9"
      ecdsa_key: "0x92db14e403b83dfe3df233f83dfa3a0d7096f21ca9b0d6d6b8d88b2b4ec1564e" # Anvil Private Key 6
      ecdsa_keystore_path: "keystores/operator4.ecdsa.keystore.json"
      ecdsa_keystore_password: "testpass"
      bls_keystore_path: "keystores/operator4.bls.keystore.json"
      bls_keystore_password: "testpass"
    - address: "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955"
      ecdsa_key: "0x4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356" # Anvil Private Key 7
      ecdsa_keystore_path: "keystores/operator5.ecdsa.keystore.json"
      ecdsa_keystore_password: "testpass"
      bls_keystore_path: "keystores/operator5.bls.keystore.json"
      bls_keystore_password: "testpass"
  # AVS configuration
  avs:
    address: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
    avs_private_key: "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d" # Anvil Private Key 1
    metadata_url: "https://my-org.com/avs/metadata.json"
    registrar_address: "0x0123456789abcdef0123456789ABCDEF01234567"
  # Core EigenLayer contract addresses
  eigenlayer:
    l1:
      allocation_manager: "0x42583067658071247ec8CE0A516A58f682002d07"
      delegation_manager: "0xD4A7E1Bd8015057293f0D0A557088c286942e84b"
      strategy_manager: "0x2E3D6c0744b10eb0A4e6F679F71554a39Ec47a5D"
      bn254_table_calculator: "0xc2c0bc13571aC5115709C332dc7AE666606b08E8"
      cross_chain_registry: "0xe850D8A178777b483D37fD492a476e3E6004C816"
      key_registrar: "0x78De554Ac8DfF368e3CAa73B3Df8AccCfD92928A"
      release_manager: "0xd9Cb89F1993292dEC2F973934bC63B0f2A702776"
      operator_table_updater: "0xE12C4cebd680a917271145eDbFB091B1BdEFD74D"
    l2:
      bn254_certificate_verifier: "0x998535833f3feE44ce720440E735554699f728a5"
      operator_table_updater: "0xE12C4cebd680a917271145eDbFB091B1BdEFD74D"
      ecdsa_certificate_verifier: "0xAD2F58A551bD0e77fa20b5531dA96eF440C392BF"
  # L1 Contracts deployed on `devnet start`
  deployed_l1_contracts: []
  # L2 Contracts deployed on `devnet start`
  deployed_l2_contracts: []
  # Operator Sets registered on `devnet start`
  operator_sets: []
  # Operators registered on `devnet start`
  operator_registrations: []
  # Release artifact
  artifact:
    artifactId: ""
    component: ""
    digest: ""
    registry: ""
    version: ""
````

## File: config/contexts/v0.0.9.yaml
````yaml
# Devnet context to be used for local deployments against Anvil chain
version: 0.0.9
context:
  # Name of the context
  name: "devnet"
  # Chains available to this context
  chains:
    l1:
      chain_id: 31337
      rpc_url: "http://localhost:8545"
      fork:
        block: 8836193
        url: ""
        block_time: 3
    l2:
      chain_id: 31338
      rpc_url: "http://localhost:9545"
      fork:
        block: 28820370
        url: ""
        block_time: 3
  # Stake Root Transporter configuration
  transporter:
    schedule: "0 */2 * * *"
    private_key: "0x5f8e6420b9cb0c940e3d3f8b99177980785906d16fb3571f70d7a05ecf5f2172"
    bls_private_key: "0x5f8e6420b9cb0c940e3d3f8b99177980785906d16fb3571f70d7a05ecf5f2172"
    active_stake_roots: []
  # All key material (BLS and ECDSA) within this file should be used for local testing ONLY
  # ECDSA keys used are from Anvil's private key set
  # BLS keystores are deterministically pre-generated and embedded. These are NOT derived from a secure seed
  # Available private keys for deploying
  deployer_private_key: "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80" # Anvil Private Key 0
  app_private_key: "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a" # Anvil Private Key 2
  # List of stakers and their delegations 
  stakers:
    - address: "0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f"
      ecdsa_key: "0xdbda1821b80551c9d65939329250298aa3472ba22feea921c0cf5d620ea67b97" # Anvil 8
      deposits:
        - strategy_address: "0x8b29d91e67b013e855EaFe0ad704aC4Ab086a574"
          name: "stETH_Strategy"
          deposit_amount: "5ETH" # depositIntoStrategy amount 
      operator: "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65" # Operator to delegate the stake via delegationManager.delegateTo()
    - address: "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720"
      ecdsa_key: "0x2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6"
      deposits:
        - strategy_address: "0x8b29d91e67b013e855EaFe0ad704aC4Ab086a574"
          name: "stETH_Strategy"
          deposit_amount: "5ETH" # depositIntoStrategy amount 
      operator: "0x90F79bf6EB2c4f870365E785982E1f101E93b906"
  # List of Operators and their private keys / stake details
  operators:
    - address: "0x90F79bf6EB2c4f870365E785982E1f101E93b906"
      ecdsa_key: "0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6" # Anvil Private Key 3
      ecdsa_keystore_path: "keystores/operator1.ecdsa.keystore.json"
      ecdsa_keystore_password: "testpass"
      bls_keystore_path: "keystores/operator1.bls.keystore.json"
      bls_keystore_password: "testpass"
      allocations:
        - strategy_address: "0x8b29d91e67b013e855EaFe0ad704aC4Ab086a574"
          name: "stETH_Strategy"
          # Only allocate if these operator set IDs exist in the deployed operator_sets 
          operator_set_allocations:
            - operator_set: "0"
              allocation_in_wads: "500000000000000000" # 5e17 i.e 50% of max allocation
            - operator_set: "1"
              allocation_in_wads: "500000000000000000" # 5e17 i.e 50% of max allocation
    - address: "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65"
      ecdsa_key: "0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a" # Anvil Private Key 4
      ecdsa_keystore_path: "keystores/operator2.ecdsa.keystore.json"
      ecdsa_keystore_password: "testpass"
      bls_keystore_path: "keystores/operator2.bls.keystore.json"
      bls_keystore_password: "testpass"
      allocations:
        - strategy_address: "0x8b29d91e67b013e855EaFe0ad704aC4Ab086a574"
          name: "stETH_Strategy"
          # Only allocate if these operator set IDs exist in the deployed operator_sets 
          operator_set_allocations:
            - operator_set: "0" 
              allocation_in_wads: "500000000000000000" # 5e17 i.e 50% of max allocation
            - operator_set: "1"
              allocation_in_wads: "500000000000000000" # 5e17 i.e 50% of max allocation
    - address: "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc"
      ecdsa_key: "0x8b3a350cf5c34c9194ca85829a2df0ec3153be0318b5e2d3348e872092edffba" # Anvil Private Key 5
      ecdsa_keystore_path: "keystores/operator3.ecdsa.keystore.json"
      ecdsa_keystore_password: "testpass"
      bls_keystore_path: "keystores/operator3.bls.keystore.json"
      bls_keystore_password: "testpass"
    - address: "0x976EA74026E726554dB657fA54763abd0C3a0aa9"
      ecdsa_key: "0x92db14e403b83dfe3df233f83dfa3a0d7096f21ca9b0d6d6b8d88b2b4ec1564e" # Anvil Private Key 6
      ecdsa_keystore_path: "keystores/operator4.ecdsa.keystore.json"
      ecdsa_keystore_password: "testpass"
      bls_keystore_path: "keystores/operator4.bls.keystore.json"
      bls_keystore_password: "testpass"
    - address: "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955"
      ecdsa_key: "0x4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356" # Anvil Private Key 7
      ecdsa_keystore_path: "keystores/operator5.ecdsa.keystore.json"
      ecdsa_keystore_password: "testpass"
      bls_keystore_path: "keystores/operator5.bls.keystore.json"
      bls_keystore_password: "testpass"
  # AVS configuration
  avs:
    address: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
    avs_private_key: "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d" # Anvil Private Key 1
    metadata_url: "https://my-org.com/avs/metadata.json"
    registrar_address: "0x0123456789abcdef0123456789ABCDEF01234567"
  # Core EigenLayer contract addresses
  eigenlayer:
    l1:
      allocation_manager: "0x42583067658071247ec8CE0A516A58f682002d07"
      delegation_manager: "0xD4A7E1Bd8015057293f0D0A557088c286942e84b"
      strategy_manager: "0x2E3D6c0744b10eb0A4e6F679F71554a39Ec47a5D"
      bn254_table_calculator: "0xa19E3B00cf4aC46B5e6dc0Bbb0Fb0c86D0D65603"
      ecdsa_table_calculator: "0xaCB5DE6aa94a1908E6FA577C2ade65065333B450"
      cross_chain_registry: "0x287381B1570d9048c4B4C7EC94d21dDb8Aa1352a"
      key_registrar: "0xA4dB30D08d8bbcA00D40600bee9F029984dB162a"
      release_manager: "0xd9Cb89F1993292dEC2F973934bC63B0f2A702776"
      operator_table_updater: "0xB02A15c6Bd0882b35e9936A9579f35FB26E11476"
      task_mailbox: "0xB99CC53e8db7018f557606C2a5B066527bF96b26"
    l2:
      bn254_certificate_verifier: "0xff58A373c18268F483C1F5cA03Cf885c0C43373a"
      operator_table_updater: "0xB02A15c6Bd0882b35e9936A9579f35FB26E11476"
      ecdsa_certificate_verifier: "0xb3Cd1A457dEa9A9A6F6406c6419B1c326670A96F"
      task_mailbox: "0xB99CC53e8db7018f557606C2a5B066527bF96b26"
  # L1 Contracts deployed on `devnet start`
  deployed_l1_contracts: []
  # L2 Contracts deployed on `devnet start`
  deployed_l2_contracts: []
  # Operator Sets registered on `devnet start`
  operator_sets: []
  # Operators registered on `devnet start`
  operator_registrations: []
  # Release artifact
  artifact:
    artifactId: ""
    component: ""
    digest: ""
    registry: ""
    version: ""
````

## File: config/contexts/v0.1.0.yaml
````yaml
# Devnet context to be used for local deployments against Anvil chain
version: 0.1.0
context:
  # Name of the context
  name: "devnet"
  # Chains available to this context
  chains:
    l1:
      chain_id: 31337
      rpc_url: "http://localhost:8545"
      fork:
        block: 9085290
        url: ""
        block_time: 3
    l2:
      chain_id: 31338
      rpc_url: "http://localhost:9545"
      fork:
        block: 30327360
        url: ""
        block_time: 3
  # Stake Root Transporter configuration
  transporter:
    schedule: "0 */2 * * *"
    private_key: "0x5f8e6420b9cb0c940e3d3f8b99177980785906d16fb3571f70d7a05ecf5f2172"
    bls_private_key: "0x5f8e6420b9cb0c940e3d3f8b99177980785906d16fb3571f70d7a05ecf5f2172"
    active_stake_roots: []
  # All key material (BLS and ECDSA) within this file should be used for local testing ONLY
  # ECDSA keys used are from Anvil's private key set
  # BLS keystores are deterministically pre-generated and embedded. These are NOT derived from a secure seed
  # Available private keys for deploying
  deployer_private_key: "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80" # Anvil Private Key 0
  app_private_key: "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a" # Anvil Private Key 2
  # List of stakers and their delegations 
  stakers:
    - address: "0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f"
      ecdsa_key: "0xdbda1821b80551c9d65939329250298aa3472ba22feea921c0cf5d620ea67b97" # Anvil 8
      deposits:
        - strategy_address: "0x8b29d91e67b013e855EaFe0ad704aC4Ab086a574"
          name: "stETH_Strategy"
          deposit_amount: "5ETH" # depositIntoStrategy amount 
      operator: "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65" # Operator to delegate the stake via delegationManager.delegateTo()
    - address: "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720"
      ecdsa_key: "0x2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6"
      deposits:
        - strategy_address: "0x8b29d91e67b013e855EaFe0ad704aC4Ab086a574"
          name: "stETH_Strategy"
          deposit_amount: "5ETH" # depositIntoStrategy amount 
      operator: "0x90F79bf6EB2c4f870365E785982E1f101E93b906"
  # List of Operators and their private keys / stake details
  operators:
    - address: "0x90F79bf6EB2c4f870365E785982E1f101E93b906"
      ecdsa_key: "0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6"
      keystores:
        - avs: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
          operatorSet: 0
          ecdsa_keystore_path: "keystores/operator1.ecdsa.keystore.json"
          ecdsa_keystore_password: "testpass"
          bls_keystore_path: "keystores/operator1.bls.keystore.json"
          bls_keystore_password: "testpass"
        - avs: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
          operatorSet: 1
          ecdsa_keystore_path: "keystores/operator1.ecdsa.keystore.json"
          ecdsa_keystore_password: "testpass"
          bls_keystore_path: "keystores/operator1.bls.keystore.json"
          bls_keystore_password: "testpass"
      allocations:
        - strategy_address: "0x8b29d91e67b013e855EaFe0ad704aC4Ab086a574"
          name: "stETH_Strategy"
          # Only allocate if these operator set IDs exist in the deployed operator_sets 
          operator_set_allocations:
            - operator_set: "0"
              allocation_in_wads: "500000000000000000" # 5e17 i.e 50% of max allocation
            - operator_set: "1"
              allocation_in_wads: "500000000000000000" # 5e17 i.e 50% of max allocation
    - address: "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65"
      ecdsa_key: "0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a" # Anvil Private Key 4
      keystores:
        - avs: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
          operatorSet: 0
          ecdsa_keystore_path: "keystores/operator2.ecdsa.keystore.json"
          ecdsa_keystore_password: "testpass"
          bls_keystore_path: "keystores/operator2.bls.keystore.json"
          bls_keystore_password: "testpass"
        - avs: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
          operatorSet: 1
          ecdsa_keystore_path: "keystores/operator2.ecdsa.keystore.json"
          ecdsa_keystore_password: "testpass"
          bls_keystore_path: "keystores/operator2.bls.keystore.json"
          bls_keystore_password: "testpass"
      allocations:
        - strategy_address: "0x8b29d91e67b013e855EaFe0ad704aC4Ab086a574"
          name: "stETH_Strategy"
          # Only allocate if these operator set IDs exist in the deployed operator_sets 
          operator_set_allocations:
            - operator_set: "0" 
              allocation_in_wads: "500000000000000000" # 5e17 i.e 50% of max allocation
            - operator_set: "1"
              allocation_in_wads: "500000000000000000" # 5e17 i.e 50% of max allocation
    - address: "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc"
      ecdsa_key: "0x8b3a350cf5c34c9194ca85829a2df0ec3153be0318b5e2d3348e872092edffba" # Anvil Private Key 5
      keystores:
        - avs: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
          operatorSet: 0
          ecdsa_keystore_path: "keystores/operator3.ecdsa.keystore.json"
          ecdsa_keystore_password: "testpass"
          bls_keystore_path: "keystores/operator3.bls.keystore.json"
          bls_keystore_password: "testpass"
        - avs: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
          operatorSet: 1
          ecdsa_keystore_path: "keystores/operator3.ecdsa.keystore.json"
          ecdsa_keystore_password: "testpass"
          bls_keystore_path: "keystores/operator3.bls.keystore.json"
          bls_keystore_password: "testpass"
    - address: "0x976EA74026E726554dB657fA54763abd0C3a0aa9"
      ecdsa_key: "0x92db14e403b83dfe3df233f83dfa3a0d7096f21ca9b0d6d6b8d88b2b4ec1564e" # Anvil Private Key 6
      keystores:
        - avs: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
          operatorSet: 0
          ecdsa_keystore_path: "keystores/operator4.ecdsa.keystore.json"
          ecdsa_keystore_password: "testpass"
          bls_keystore_path: "keystores/operator4.bls.keystore.json"
          bls_keystore_password: "testpass"
        - avs: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
          operatorSet: 1
          ecdsa_keystore_path: "keystores/operator4.ecdsa.keystore.json"
          ecdsa_keystore_password: "testpass"
          bls_keystore_path: "keystores/operator4.bls.keystore.json"
          bls_keystore_password: "testpass"
    - address: "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955"
      ecdsa_key: "0x4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356" # Anvil Private Key 7
      keystores:
        - avs: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
          operatorSet: 0
          ecdsa_keystore_path: "keystores/operator5.ecdsa.keystore.json"
          ecdsa_keystore_password: "testpass"
          bls_keystore_path: "keystores/operator5.bls.keystore.json"
          bls_keystore_password: "testpass"
        - avs: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
          operatorSet: 1
          ecdsa_keystore_path: "keystores/operator5.ecdsa.keystore.json"
          ecdsa_keystore_password: "testpass"
          bls_keystore_path: "keystores/operator5.bls.keystore.json"
          bls_keystore_password: "testpass"
  # AVS configuration
  avs:
    address: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
    avs_private_key: "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d" # Anvil Private Key 1
    metadata_url: "https://my-org.com/avs/metadata.json"
    registrar_address: "0x0123456789abcdef0123456789ABCDEF01234567"
  # Core EigenLayer contract addresses
  eigenlayer:
    l1:
      allocation_manager: "0x42583067658071247ec8CE0A516A58f682002d07"
      delegation_manager: "0xD4A7E1Bd8015057293f0D0A557088c286942e84b"
      strategy_manager: "0x2E3D6c0744b10eb0A4e6F679F71554a39Ec47a5D"
      bn254_table_calculator: "0xa19E3B00cf4aC46B5e6dc0Bbb0Fb0c86D0D65603"
      ecdsa_table_calculator: "0xaCB5DE6aa94a1908E6FA577C2ade65065333B450"
      cross_chain_registry: "0x287381B1570d9048c4B4C7EC94d21dDb8Aa1352a"
      key_registrar: "0xA4dB30D08d8bbcA00D40600bee9F029984dB162a"
      release_manager: "0xd9Cb89F1993292dEC2F973934bC63B0f2A702776"
      operator_table_updater: "0xB02A15c6Bd0882b35e9936A9579f35FB26E11476"
      task_mailbox: "0xB99CC53e8db7018f557606C2a5B066527bF96b26"
      permission_controller: "0x44632dfBdCb6D3E21EF613B0ca8A6A0c618F5a37"
    l2:
      bn254_certificate_verifier: "0xff58A373c18268F483C1F5cA03Cf885c0C43373a"
      operator_table_updater: "0xB02A15c6Bd0882b35e9936A9579f35FB26E11476"
      ecdsa_certificate_verifier: "0xb3Cd1A457dEa9A9A6F6406c6419B1c326670A96F"
      task_mailbox: "0xB99CC53e8db7018f557606C2a5B066527bF96b26"
  # L1 Contracts deployed on `devnet start`
  deployed_l1_contracts: []
  # L2 Contracts deployed on `devnet start`
  deployed_l2_contracts: []
  # Operator Sets registered on `devnet start`
  operator_sets: []
  # Operators registered on `devnet start`
  operator_registrations: []
  # Release artifact
  artifact:
    artifactId: ""
    component: ""
    digest: ""
    registry: ""
    version: ""
````

## File: config/contexts/v0.1.1.yaml
````yaml
# Devnet context to be used for local deployments against Anvil chain
version: 0.1.1
context:
  # Name of the context
  name: "devnet"
  # Chains available to this context
  chains:
    l1:
      chain_id: 31337
      rpc_url: "http://localhost:8545"
      fork:
        block: 9259079
        url: ""
        block_time: 3
    l2:
      chain_id: 31338
      rpc_url: "http://localhost:9545"
      fork:
        block: 31408197
        url: ""
        block_time: 3
  # Stake Root Transporter configuration
  transporter:
    schedule: "0 */2 * * *"
    private_key: "0x5f8e6420b9cb0c940e3d3f8b99177980785906d16fb3571f70d7a05ecf5f2172"
    bls_private_key: "0x5f8e6420b9cb0c940e3d3f8b99177980785906d16fb3571f70d7a05ecf5f2172"
    active_stake_roots: []
  # All key material (BLS and ECDSA) within this file should be used for local testing ONLY
  # ECDSA keys used are from Anvil's private key set
  # BLS keystores are deterministically pre-generated and embedded. These are NOT derived from a secure seed
  # Available private keys for deploying
  deployer_private_key: "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80" # Anvil Private Key 0
  app_private_key: "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a" # Anvil Private Key 2
  # List of stakers and their delegations 
  stakers:
    - address: "0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f"
      ecdsa_key: "0xdbda1821b80551c9d65939329250298aa3472ba22feea921c0cf5d620ea67b97" # Anvil 8
      deposits:
        - strategy_address: "0x8b29d91e67b013e855EaFe0ad704aC4Ab086a574"
          name: "stETH_Strategy"
          deposit_amount: "5ETH" # depositIntoStrategy amount 
      operator: "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65" # Operator to delegate the stake via delegationManager.delegateTo()
    - address: "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720"
      ecdsa_key: "0x2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6"
      deposits:
        - strategy_address: "0x8b29d91e67b013e855EaFe0ad704aC4Ab086a574"
          name: "stETH_Strategy"
          deposit_amount: "5ETH" # depositIntoStrategy amount 
      operator: "0x90F79bf6EB2c4f870365E785982E1f101E93b906"
  # List of Operators and their private keys / stake details
  operators:
    - address: "0x90F79bf6EB2c4f870365E785982E1f101E93b906"
      ecdsa_key: "0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6"
      keystores:
        - avs: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
          operatorSet: 0
          ecdsa_keystore_path: "keystores/operator1.ecdsa.keystore.json"
          ecdsa_keystore_password: "testpass"
          bls_keystore_path: "keystores/operator1.bls.keystore.json"
          bls_keystore_password: "testpass"
        - avs: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
          operatorSet: 1
          ecdsa_keystore_path: "keystores/operator1.ecdsa.keystore.json"
          ecdsa_keystore_password: "testpass"
          bls_keystore_path: "keystores/operator1.bls.keystore.json"
          bls_keystore_password: "testpass"
      allocations:
        - strategy_address: "0x8b29d91e67b013e855EaFe0ad704aC4Ab086a574"
          name: "stETH_Strategy"
          # Only allocate if these operator set IDs exist in the deployed operator_sets 
          operator_set_allocations:
            - operator_set: "0"
              allocation_in_wads: "500000000000000000" # 5e17 i.e 50% of max allocation
            - operator_set: "1"
              allocation_in_wads: "500000000000000000" # 5e17 i.e 50% of max allocation
    - address: "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65"
      ecdsa_key: "0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a" # Anvil Private Key 4
      keystores:
        - avs: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
          operatorSet: 0
          ecdsa_keystore_path: "keystores/operator2.ecdsa.keystore.json"
          ecdsa_keystore_password: "testpass"
          bls_keystore_path: "keystores/operator2.bls.keystore.json"
          bls_keystore_password: "testpass"
        - avs: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
          operatorSet: 1
          ecdsa_keystore_path: "keystores/operator2.ecdsa.keystore.json"
          ecdsa_keystore_password: "testpass"
          bls_keystore_path: "keystores/operator2.bls.keystore.json"
          bls_keystore_password: "testpass"
      allocations:
        - strategy_address: "0x8b29d91e67b013e855EaFe0ad704aC4Ab086a574"
          name: "stETH_Strategy"
          # Only allocate if these operator set IDs exist in the deployed operator_sets 
          operator_set_allocations:
            - operator_set: "0" 
              allocation_in_wads: "500000000000000000" # 5e17 i.e 50% of max allocation
            - operator_set: "1"
              allocation_in_wads: "500000000000000000" # 5e17 i.e 50% of max allocation
    - address: "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc"
      ecdsa_key: "0x8b3a350cf5c34c9194ca85829a2df0ec3153be0318b5e2d3348e872092edffba" # Anvil Private Key 5
      keystores:
        - avs: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
          operatorSet: 0
          ecdsa_keystore_path: "keystores/operator3.ecdsa.keystore.json"
          ecdsa_keystore_password: "testpass"
          bls_keystore_path: "keystores/operator3.bls.keystore.json"
          bls_keystore_password: "testpass"
        - avs: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
          operatorSet: 1
          ecdsa_keystore_path: "keystores/operator3.ecdsa.keystore.json"
          ecdsa_keystore_password: "testpass"
          bls_keystore_path: "keystores/operator3.bls.keystore.json"
          bls_keystore_password: "testpass"
    - address: "0x976EA74026E726554dB657fA54763abd0C3a0aa9"
      ecdsa_key: "0x92db14e403b83dfe3df233f83dfa3a0d7096f21ca9b0d6d6b8d88b2b4ec1564e" # Anvil Private Key 6
      keystores:
        - avs: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
          operatorSet: 0
          ecdsa_keystore_path: "keystores/operator4.ecdsa.keystore.json"
          ecdsa_keystore_password: "testpass"
          bls_keystore_path: "keystores/operator4.bls.keystore.json"
          bls_keystore_password: "testpass"
        - avs: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
          operatorSet: 1
          ecdsa_keystore_path: "keystores/operator4.ecdsa.keystore.json"
          ecdsa_keystore_password: "testpass"
          bls_keystore_path: "keystores/operator4.bls.keystore.json"
          bls_keystore_password: "testpass"
    - address: "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955"
      ecdsa_key: "0x4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356" # Anvil Private Key 7
      keystores:
        - avs: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
          operatorSet: 0
          ecdsa_keystore_path: "keystores/operator5.ecdsa.keystore.json"
          ecdsa_keystore_password: "testpass"
          bls_keystore_path: "keystores/operator5.bls.keystore.json"
          bls_keystore_password: "testpass"
        - avs: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
          operatorSet: 1
          ecdsa_keystore_path: "keystores/operator5.ecdsa.keystore.json"
          ecdsa_keystore_password: "testpass"
          bls_keystore_path: "keystores/operator5.bls.keystore.json"
          bls_keystore_password: "testpass"
  # AVS configuration
  avs:
    address: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
    avs_private_key: "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d" # Anvil Private Key 1
    metadata_url: "https://my-org.com/avs/metadata.json"
    registrar_address: "0x0123456789abcdef0123456789ABCDEF01234567"
  # Core EigenLayer contract addresses
  eigenlayer:
    l1:
      allocation_manager: "0x42583067658071247ec8CE0A516A58f682002d07"
      delegation_manager: "0xD4A7E1Bd8015057293f0D0A557088c286942e84b"
      strategy_manager: "0x2E3D6c0744b10eb0A4e6F679F71554a39Ec47a5D"
      bn254_table_calculator: "0xa19E3B00cf4aC46B5e6dc0Bbb0Fb0c86D0D65603"
      ecdsa_table_calculator: "0xaCB5DE6aa94a1908E6FA577C2ade65065333B450"
      cross_chain_registry: "0x287381B1570d9048c4B4C7EC94d21dDb8Aa1352a"
      key_registrar: "0xA4dB30D08d8bbcA00D40600bee9F029984dB162a"
      release_manager: "0xd9Cb89F1993292dEC2F973934bC63B0f2A702776"
      operator_table_updater: "0xB02A15c6Bd0882b35e9936A9579f35FB26E11476"
      task_mailbox: "0xB99CC53e8db7018f557606C2a5B066527bF96b26"
      permission_controller: "0x44632dfBdCb6D3E21EF613B0ca8A6A0c618F5a37"
    l2:
      bn254_certificate_verifier: "0xff58A373c18268F483C1F5cA03Cf885c0C43373a"
      operator_table_updater: "0xB02A15c6Bd0882b35e9936A9579f35FB26E11476"
      ecdsa_certificate_verifier: "0xb3Cd1A457dEa9A9A6F6406c6419B1c326670A96F"
      task_mailbox: "0xB99CC53e8db7018f557606C2a5B066527bF96b26"
  # L1 Contracts deployed on `devnet start`
  deployed_l1_contracts: []
  # L2 Contracts deployed on `devnet start`
  deployed_l2_contracts: []
  # Operator Sets registered on `devnet start`
  operator_sets: []
  # Operators registered on `devnet start`
  operator_registrations: []
  # Release artifact
  artifact:
    artifactId: ""
    component: ""
    digest: ""
    registry: ""
    version: ""
````

## File: config/keystores/operator1.bls.keystore.json
````json
{
  "crypto": {
    "kdf": {
      "function": "scrypt",
      "params": {
        "dklen": 32,
        "n": 262144,
        "p": 1,
        "r": 8,
        "salt": "d6f87d41f3e579f5c01842c97bd06a8d3ed2bbb927f1af0b0b84597ba8973462"
      },
      "message": ""
    },
    "checksum": {
      "function": "sha256",
      "params": {},
      "message": "edf33551b6dfcbcb9c1fd284b3df211121992694c896d07a6aa270f08bfad691"
    },
    "cipher": {
      "function": "aes-128-ctr",
      "params": {
        "iv": "f78c4113516550a1166f631bd17f17a5"
      },
      "message": "bc833e7f5d91f70fc1f452b19648b6c49976fe93d394789047ecc6ece6006fa6df0a4e63c885f26d514af5171d8c6c32ad5286be3ac6867df42921eca2ddd97a"
    }
  },
  "pubkey": "19fb7a235dbb9d09a549bde919fd738ad9eea8829462f90b0cb1d305497509fb2b1cb5c63fc2225c4e014ae056be73c568c34bbeadf37eaf019aec13e11f7e93136694c1eefb9b8853185ad57abb356edd4a0e8187dc35297a1adc26d05c6d062d64523c7380de3a4b9607035e5789544b453c408564b6ae57ee4ebb20c5f38e",
  "path": "m/1/0/0",
  "uuid": "64e38071-7634-496e-b10a-89cdf59ac3ab",
  "version": 4,
  "curveType": "bn254"
}
````

## File: config/keystores/operator1.ecdsa.keystore.json
````json
{
  "address": "90f79bf6eb2c4f870365e785982e1f101e93b906",
  "crypto": {
    "cipher": "aes-128-ctr",
    "ciphertext": "cb9721b2bb12f67f63eadcbc42e7a2ac5721b03dbe50d07c723cd7693921b477",
    "cipherparams": {
      "iv": "d3395f83b964967800b3071195cee867"
    },
    "kdf": "scrypt",
    "kdfparams": {
      "dklen": 32,
      "n": 262144,
      "p": 1,
      "r": 8,
      "salt": "0fe7be44e9d127275d57a0e841be14f0e722467d69136f28683c3a1ad8c98333"
    },
    "mac": "d43b0060ac1e5a95f66fc99493bf7bb0c180eee12aadfe389e5706b8bda42c64"
  },
  "id": "4df14231-53b3-49c4-8d29-823197cb217c",
  "version": 3
}
````

## File: config/keystores/operator2.bls.keystore.json
````json
{
  "crypto": {
    "kdf": {
      "function": "scrypt",
      "params": {
        "dklen": 32,
        "n": 262144,
        "p": 1,
        "r": 8,
        "salt": "943edb5c49e538b9e7707e87abda46ad5960c0568f465c9eb289b6d56eee50cf"
      },
      "message": ""
    },
    "checksum": {
      "function": "sha256",
      "params": {},
      "message": "a2d841d2182ed96d7d5f3fc663109c77b692229ea12cacfa9a1f569191360f39"
    },
    "cipher": {
      "function": "aes-128-ctr",
      "params": {
        "iv": "f113dda8133c9640ec7a08d21d5f8629"
      },
      "message": "6b7ec13bbe3091326f37b2a801a5d8b5c61c5d4214d1d75d944781ed68bc214f257e3cf9fc7daa9752d68c92e30cc106c35ff385af0c0b88a2fd1c84e9750957"
    }
  },
  "pubkey": "22585e9dde848ba29e014c9a2c8ab2e398bd9a0d136c2090d0c397f5175f489d0585466f0a0c2a5085879675dd345ad8602041c5b1aa14bf532060e62d595c610e82952b99729adb02023985f89973c29f115b4648d4d0a21c1c32a76027d6151407aaed9a860d41e610db40bfe89f47e022716f663a50c1a0b131eab581495e",
  "path": "m/1/0/0",
  "uuid": "d9bee745-5bb4-4946-a1c0-b6183a17138c",
  "version": 4,
  "curveType": "bn254"
}
````

## File: config/keystores/operator2.ecdsa.keystore.json
````json
{
  "address": "15d34aaf54267db7d7c367839aaf71a00a2c6a65",
  "crypto": {
    "cipher": "aes-128-ctr",
    "ciphertext": "e2376b84e186e148dbcaabd6ccce475b58e1ea0bf336dc44a7b431cda211a83e",
    "cipherparams": {
      "iv": "c94e317e7ff695f9aa637f6890b78d17"
    },
    "kdf": "scrypt",
    "kdfparams": {
      "dklen": 32,
      "n": 262144,
      "p": 1,
      "r": 8,
      "salt": "6c642b7154147826278bb6d7b6fdbc8415fb2858641fa8a4edc4b0b8f550fa7f"
    },
    "mac": "e8dc1ab58434fac3f76fc9dbf2ab0f720bbfa4e721e6763c9e982f55a5ef139a"
  },
  "id": "c25256a8-bd0b-41b6-b432-323cd26db0fc",
  "version": 3
}
````

## File: config/keystores/operator3.bls.keystore.json
````json
{
  "crypto": {
    "kdf": {
      "function": "scrypt",
      "params": {
        "dklen": 32,
        "n": 262144,
        "p": 1,
        "r": 8,
        "salt": "c9c35c33db1d672a5be63cc2006ee1d5c34c747c068b4cd41f1b3360b412939f"
      },
      "message": ""
    },
    "checksum": {
      "function": "sha256",
      "params": {},
      "message": "3b0156ae5750c7d6c343c0158199be41f7cc1d9fe5924473baec0b973c906eea"
    },
    "cipher": {
      "function": "aes-128-ctr",
      "params": {
        "iv": "0ee49004c22d1fafd963bb0bc4410e17"
      },
      "message": "6b6c27896adca59d564d550f04ffbd5d637a9ac05381db68e1d4d3a90547399ae58a39dbb8e8b4257c2fa8a3b11a1bbdf60f35d5faf120ad08fe7d986cc4dc0cb2bc2746621e7449cff6d2a7"
    }
  },
  "pubkey": "1726a24de8eb80b5cb2d94292b6c24bfd9f1277dbc9b98cbb8e12b4f59e3ea73127ffcedd665f59c0c111656c6228d52c201c912bdd6f884d3ad1a3bba1a7729102769c000aa16536d6b815b2073a918e9762a8d5d7dd870c0e1fd2eac72a3ec0ddd6d631960605d114037e2e6d994be47ec76769184e7128fd75a3f3465f7a2",
  "path": "m/1/0/0",
  "uuid": "57ec71d0-d208-4930-b63e-ec97f5ecc485",
  "version": 4,
  "curveType": "bn254"
}
````

## File: config/keystores/operator3.ecdsa.keystore.json
````json
{
  "address": "9965507d1a55bcc2695c58ba16fb37d819b0a4dc",
  "crypto": {
    "cipher": "aes-128-ctr",
    "ciphertext": "baedc9a338b8cfc18742e95bf76bb5344215d69a6978baf80d82c643e60b6de8",
    "cipherparams": {
      "iv": "ce362678c9a3252c25498910ab091d5c"
    },
    "kdf": "scrypt",
    "kdfparams": {
      "dklen": 32,
      "n": 262144,
      "p": 1,
      "r": 8,
      "salt": "e47a6427f37f7a847e25fc15041ffc6bacbb2710d16b94f4e3b05309bd0938a0"
    },
    "mac": "3a17346e4642a7f2b3eba2eff8e728998748ef21a93a2d6753630dcc1d970be3"
  },
  "id": "926b6b31-871f-4095-8341-c252cd7f6109",
  "version": 3
}
````

## File: config/keystores/operator4.bls.keystore.json
````json
{
  "crypto": {
    "kdf": {
      "function": "scrypt",
      "params": {
        "dklen": 32,
        "n": 262144,
        "p": 1,
        "r": 8,
        "salt": "4c7e1940ab39b77dd3cc5fdd46c528ce693ad5e92db6a039c645269d08f924c8"
      },
      "message": ""
    },
    "checksum": {
      "function": "sha256",
      "params": {},
      "message": "9d5287ea5fa4dbf637fbc4bf4594b5032fc31fc8e2d52a7aa1f6b0f4be9e09c0"
    },
    "cipher": {
      "function": "aes-128-ctr",
      "params": {
        "iv": "0079914f2bb7cc5896bd3031c9fcec2f"
      },
      "message": "0e5017c6d05d4c585014e93a66f18ca2ce30923e78edab3a104af814388ebc9d732b58b1842e20201545cf064bcb96bb4517888af0d2eea65f2c07bcb7bce00b0a3b686d34d29e919c15ad9af8"
    }
  },
  "pubkey": "047d85621de07791c99239575ed4bff825ddb0db93c778f828106177a23d9a801fce3590e2d5857514031b27aab45531fbbdfb545bf599a8b164ccf8ba5e23761e33fdebecf7503dc92cb2ddd4ac53b353a7ec0ba746b8156ffc806acad9eac6088069e7f46c7640ffa68875030bb7c12c80dab810fe9da89a5bcd6cb2e776ed",
  "path": "m/1/0/0",
  "uuid": "bb1cb479-acbe-46ba-a0bc-8628ac90a57d",
  "version": 4,
  "curveType": "bn254"
}
````

## File: config/keystores/operator4.ecdsa.keystore.json
````json
{
  "address": "976ea74026e726554db657fa54763abd0c3a0aa9",
  "crypto": {
    "cipher": "aes-128-ctr",
    "ciphertext": "6413921ec3a30c91e565883c466c064467498dc5eb311cf83d8fafaedf520298",
    "cipherparams": {
      "iv": "b2c27fd1ab886c523fbc1d2b9c935e06"
    },
    "kdf": "scrypt",
    "kdfparams": {
      "dklen": 32,
      "n": 262144,
      "p": 1,
      "r": 8,
      "salt": "c71a9874630f71400434722c42d0ea68552f911f88cb1aa97dc0b72255f9a173"
    },
    "mac": "2ae78f29e164723ea87a5b9b2d3dd9925f45e5883d0e165b30b87f13e6cf27ef"
  },
  "id": "fa0d87ff-2f03-4648-a453-c302b2acc371",
  "version": 3
}
````

## File: config/keystores/operator5.bls.keystore.json
````json
{
  "crypto": {
    "kdf": {
      "function": "scrypt",
      "params": {
        "dklen": 32,
        "n": 262144,
        "p": 1,
        "r": 8,
        "salt": "6a490e96747d7910f4b1676339a84008050acb42e1e17c995e32a14ff9623aca"
      },
      "message": ""
    },
    "checksum": {
      "function": "sha256",
      "params": {},
      "message": "8e4ab6c381324ca9dc3d42450cd4d15112d62ae93d8e101cb6817974d4aea64f"
    },
    "cipher": {
      "function": "aes-128-ctr",
      "params": {
        "iv": "088201eb8b542a54f03cdce955bd51d0"
      },
      "message": "2d0ffbf4e3977a69d482aa48b9759bcdce1a7fa9a7c457842d0b7a11e2d08a6b399a9b210455709eb111c18bfc269a4eb71f9ac6b2d6f2d472e825723af98219287f58f4dda7eb9e3a9a382e72"
    }
  },
  "pubkey": "2c924049048027681f78ccea164c502a480cb56df3d902bc25a1953828d5e3251678c81589fc694871d52b9dcbdda6179d7ef933eba0bee7348ec0f47ee3c6760eeb2bef80df113ef65facce1fc37fb184f37dc02c37b2f15768c4ddf6566d87302c07c98c6e3627f7bbd9d3cb7fa0939217ebe07fdac79e69c6cc51035159bb",
  "path": "m/1/0/0",
  "uuid": "53fa8abe-f23b-475a-b6fe-57647711937a",
  "version": 4,
  "curveType": "bn254"
}
````

## File: config/keystores/operator5.ecdsa.keystore.json
````json
{
  "address": "14dc79964da2c08b23698b3d3cc7ca32193d9955",
  "crypto": {
    "cipher": "aes-128-ctr",
    "ciphertext": "b02d5574fc9a2b813dd47b97a5ac51f84480dd22716f7bbfe72514a5f4b14176",
    "cipherparams": {
      "iv": "5dba5dc0c04577f5f9a4b5719258c317"
    },
    "kdf": "scrypt",
    "kdfparams": {
      "dklen": 32,
      "n": 262144,
      "p": 1,
      "r": 8,
      "salt": "a40f35d9349c56d6515ab02e04e0e58a90d9551685b72700e6b80a4235007477"
    },
    "mac": "9f4be0ed7757c85ee3e932c03bc3b8dcf4e3dde5027ad98253488c56223a23db"
  },
  "id": "ae4c9631-0cbc-49ab-a561-20b8030d3a93",
  "version": 3
}
````

## File: config/.env.example
````
# .env example 

# Ethereum sepolia fork URL used for AVS devnet
L1_FORK_URL=<RPC URL>

# Ethereum base sepolia fork URL used for AVS devnet
L2_FORK_URL=<RPC URL>
````

## File: config/.gitignore
````
# Binaries for programs and plugins
*.exe
*.exe~
*.dll
*.so
*.dylib
devkit

# Build outputs
/bin/
/out/
*.test

# Dependency directories (if you're not committing vendor)
vendor/

# Go module caches (optional, as these are local)
# /go/pkg/

# OS-specific files
.DS_Store
Thumbs.db

# Editor and IDE files
.vscode/
.idea/
*.swp

# Release outputs
temp_external/

# Internal upgrade directory
temp_internal/

# DevKit context configurations (only devnet.yaml is indexed)
config/contexts/**/*
!config/contexts/devnet.yaml

# Environment
.env
````

## File: config/.zeus
````
{
  "zeusHost": "https://github.com/Layr-Labs/eigenlayer-contracts-zeus-metadata"
}
````

## File: config/config_embeds.go
````go
package config
⋮----
import _ "embed"
⋮----
//go:embed templates.yaml
var TemplatesYaml string
⋮----
//go:embed .gitignore
var GitIgnore string
⋮----
//go:embed .env.example
var EnvExample string
⋮----
//go:embed .zeus
var ZeusConfig string
````

## File: config/config.yaml
````yaml
version: 0.0.1
config:
  project:
    name: "my-avs"
    version: "0.1.0"
    context: "devnet"
````

## File: config/keystore_embeds_test.go
````go
package config
⋮----
import (
	"encoding/json"
	"strings"
	"testing"

	"github.com/stretchr/testify/require"
)
⋮----
"encoding/json"
"strings"
"testing"
⋮----
"github.com/stretchr/testify/require"
⋮----
// KeystoreJSON represents the structure of a keystore file
type KeystoreJSON struct {
	Address string                 `json:"address"`
	Crypto  map[string]interface{} `json:"crypto"`
⋮----
func TestEmbeddedECDSAKeystores(t *testing.T)
⋮----
// List of expected ECDSA keystore files
⋮----
// Verify each ECDSA keystore exists and is valid
⋮----
// Verify it's valid JSON
var keystore KeystoreJSON
⋮----
// Verify keystore structure
⋮----
// Verify crypto section has required fields
⋮----
func TestEmbeddedBLSKeystores(t *testing.T)
⋮----
// List of expected BLS keystore files
⋮----
// Verify each BLS keystore exists and is valid
⋮----
var keystore map[string]interface{}
⋮----
// BLS keystores have a different structure
⋮----
func TestKeystoreNamingConvention(t *testing.T)
⋮----
// Verify all keystores follow the correct naming convention
⋮----
// ECDSA keystore naming convention
⋮----
// BLS keystore naming convention
⋮----
func TestAllOperatorsHaveBothKeystoreTypes(t *testing.T)
⋮----
// Verify each operator has both ECDSA and BLS keystores
⋮----
func TestECDSAKeystoreAddresses(t *testing.T)
⋮----
// Expected addresses for each operator (without 0x prefix, lowercase)
⋮----
// Keystore addresses are stored without 0x prefix and in lowercase
````

## File: config/keystore_embeds.go
````go
package config
⋮----
import _ "embed"
⋮----
//go:embed keystores/operator1.bls.keystore.json
var operator1Keystore string
⋮----
//go:embed keystores/operator2.bls.keystore.json
var operator2Keystore string
⋮----
//go:embed keystores/operator3.bls.keystore.json
var operator3Keystore string
⋮----
//go:embed keystores/operator4.bls.keystore.json
var operator4Keystore string
⋮----
//go:embed keystores/operator5.bls.keystore.json
var operator5Keystore string
⋮----
//go:embed keystores/operator1.ecdsa.keystore.json
var operator1ECDSAKeystore string
⋮----
//go:embed keystores/operator2.ecdsa.keystore.json
var operator2ECDSAKeystore string
⋮----
//go:embed keystores/operator3.ecdsa.keystore.json
var operator3ECDSAKeystore string
⋮----
//go:embed keystores/operator4.ecdsa.keystore.json
var operator4ECDSAKeystore string
⋮----
//go:embed keystores/operator5.ecdsa.keystore.json
var operator5ECDSAKeystore string
⋮----
// Map of context name → content
var KeystoreEmbeds = map[string]string{
	"operator1.bls.keystore.json": operator1Keystore,
	"operator2.bls.keystore.json": operator2Keystore,
	"operator3.bls.keystore.json": operator3Keystore,
	"operator4.bls.keystore.json": operator4Keystore,
	"operator5.bls.keystore.json": operator5Keystore,
	"operator1.ecdsa.keystore.json": operator1ECDSAKeystore,
	"operator2.ecdsa.keystore.json": operator2ECDSAKeystore,
	"operator3.ecdsa.keystore.json": operator3ECDSAKeystore,
	"operator4.ecdsa.keystore.json": operator4ECDSAKeystore,
	"operator5.ecdsa.keystore.json": operator5ECDSAKeystore,
}
````

## File: config/templates.yaml
````yaml
framework:
  hourglass:
    template: "https://github.com/Layr-Labs/hourglass-avs-template"
    version: "v0.1.0"
    languages:
      - go
      - ts
      - rust
````

## File: docker/anvil/devnetembed.go
````go
package assets
⋮----
import (
	_ "embed"
	"fmt"
	"os"
	"path/filepath"
)
⋮----
_ "embed"
"fmt"
"os"
"path/filepath"
⋮----
//go:embed docker-compose.yaml
var DockerCompose []byte
⋮----
// WriteDockerComposeToPath writes docker-compose.yaml to a fixed path.
func WriteDockerComposeToPath() (string, error)
⋮----
// Get project's absolute path
⋮----
// Store anvils docker-compose.yaml in devnet dir at project root
⋮----
// Write embed each devnet start to ensure any changes are propagated
````

## File: docker/anvil/docker-compose.yaml
````yaml
services:
  devkit-devnet-l1:
    image: ${FOUNDRY_IMAGE}
    container_name: ${L1_AVS_CONTAINER_NAME}
    entrypoint: anvil
    command: "--host 0.0.0.0 --fork-url ${L1_FORK_RPC_URL} --fork-block-number ${L1_FORK_BLOCK_NUMBER} ${L1_ANVIL_ARGS}"
    ports:
      - "${L1_DEVNET_PORT}:8545"
    extra_hosts:
      - "host.docker.internal:host-gateway"
  devkit-devnet-l2:
    image: ${FOUNDRY_IMAGE}
    container_name: ${L2_AVS_CONTAINER_NAME} 
    entrypoint: anvil
    command: "--host 0.0.0.0 --fork-url ${L2_FORK_RPC_URL} --fork-block-number ${L2_FORK_BLOCK_NUMBER} ${L2_ANVIL_ARGS}"
    ports:
      - "${L2_DEVNET_PORT}:8545"
    extra_hosts:
      - "host.docker.internal:host-gateway"
````

## File: internal/version/version.go
````go
package version
⋮----
var (
	Version string
	Commit  string
)
⋮----
func GetVersion() string
⋮----
func GetCommit() string
````

## File: pkg/commands/config/config_edit.go
````go
package config
⋮----
import (
	"context"
	"fmt"
	"io"
	"os"
	"os/exec"
	"path/filepath"
	"reflect"
	"strings"

	"github.com/Layr-Labs/devkit-cli/pkg/common"
	"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
	"github.com/Layr-Labs/devkit-cli/pkg/telemetry"
	"go.uber.org/zap"

	"github.com/urfave/cli/v2"
	"golang.org/x/text/cases"
	"golang.org/x/text/language"

	"sigs.k8s.io/yaml"
)
⋮----
"context"
"fmt"
"io"
"os"
"os/exec"
"path/filepath"
"reflect"
"strings"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common"
"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
"github.com/Layr-Labs/devkit-cli/pkg/telemetry"
"go.uber.org/zap"
⋮----
"github.com/urfave/cli/v2"
"golang.org/x/text/cases"
"golang.org/x/text/language"
⋮----
"sigs.k8s.io/yaml"
⋮----
// ConfigChange represents a change in a configuration field
type ConfigChange struct {
	Path     string
	OldValue interface{}
⋮----
// Iota based enum for types of config
type EditTarget int
⋮----
const (
	Config EditTarget = iota
	Context
)
⋮----
// Path to the config directory
var DefaultConfigPath = filepath.Join("config")
⋮----
// editConfig is the main entry point for the edit config functionality
func EditConfig(cCtx *cli.Context, configPath string, editTarget EditTarget, context string) error
⋮----
// Find an available editor
⋮----
// Create a backup of the current config
⋮----
// Open the editor and wait for it to close
⋮----
// Validate the edited config
⋮----
// Check for validation errs
⋮----
// Collect changes
⋮----
// Log changes
⋮----
// Send telemetry
⋮----
// findEditor looks for available text editors
func findEditor() (string, error)
⋮----
// Try to use the EDITOR environment variable
⋮----
// Try common editors in order of preference
⋮----
// backupConfig creates a backup of the current config
func backupConfig(configPath string, editTarget EditTarget, context string) (map[string]interface
⋮----
// Load the current config to compare later
var (
		currentConfig map[string]interface{}
		err           error
	)
⋮----
// Select the interface based on target
⋮----
// If there is any error loading the yaml
⋮----
// Read the raw file data
⋮----
// openEditor launches the editor for the config file
func openEditor(editorPath, filePath string, logger iface.Logger) error
⋮----
// ValidateConfig reads configPath into the appropriate struct based on editTarget,
// then runs requireNonZero on it, returning the raw bytes or an error.
func ValidateConfig(configPath string, editTarget EditTarget) ([]byte, error)
⋮----
// Either Config or ContextConfig
var val interface{}
⋮----
// Perform validations on the provided struct
⋮----
// Try unmarshalling as BaseConfig (config.yaml)
var cfg common.Config
⋮----
// Try unmarshalling as ContextConfig (devnet.yaml, sepolia.yaml)
var ctx common.ContextConfig
⋮----
// Verify known fields are present
⋮----
// restoreBackup restores the original file content
func restoreBackup(configPath string, backupData []byte) error
⋮----
// validateConfigChanges returns adds/removes/changes between two generic maps
func validateConfigChanges(
	originalYAML, updatedYAML []byte,
) ([]ConfigChange, error)
⋮----
// Ensure version string is present and unchanged
⋮----
// diffValues recurses into maps, slices and primitives.
func diffValues(path string, oldV, newV interface
⋮----
var out []ConfigChange
⋮----
// If oldV is map[interface{}]interface{}, turn into map[string]interface{}
⋮----
// nil/absent cases
⋮----
// different kinds -> replace
⋮----
// both map[string]interface{}
⋮----
// check keys in old
⋮----
// new-only keys
⋮----
var ov, nv interface{}
⋮----
// primitive or struct: DeepEqual
⋮----
// join concatenates path and field
func join(base, field string) string
⋮----
// logConfigChanges logs the configuration changes
func logConfigChanges(changes []ConfigChange, logger iface.Logger)
⋮----
// Group changes by section
⋮----
// Create a title caser
⋮----
// Log changes by section
⋮----
// formatAndLogChange formats and logs a single change
func formatAndLogChange(change ConfigChange, logger iface.Logger)
⋮----
// Additions
⋮----
// Removals
⋮----
// Updates (both non-nil)
⋮----
// Fallback for slices, maps, structs, etc.
⋮----
// sendConfigChangeTelemetry sends telemetry data for config changes
func sendConfigChangeTelemetry(ctx context.Context, changes []ConfigChange, logger iface.Logger)
⋮----
// Get metrics context
⋮----
// Add section change counts
⋮----
// Add individual changes (up to a reasonable limit)
maxChangesToInclude := 20 // Avoid sending too much data
⋮----
// Only include primitive values that can be reasonably serialized
⋮----
// Truncate long values
const maxValueLen = 50
⋮----
// Add section counts as properties
⋮----
// Add change count as a metric
````

## File: pkg/commands/config/config_test.go
````go
package config
⋮----
import (
	"bytes"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"testing"

	"github.com/Layr-Labs/devkit-cli/config/contexts"
	"github.com/Layr-Labs/devkit-cli/pkg/common"
	"github.com/Layr-Labs/devkit-cli/pkg/testutils"

	"github.com/stretchr/testify/require"
	"github.com/urfave/cli/v2"
)
⋮----
"bytes"
"os"
"os/exec"
"path/filepath"
"strings"
"testing"
⋮----
"github.com/Layr-Labs/devkit-cli/config/contexts"
"github.com/Layr-Labs/devkit-cli/pkg/common"
"github.com/Layr-Labs/devkit-cli/pkg/testutils"
⋮----
"github.com/stretchr/testify/require"
"github.com/urfave/cli/v2"
⋮----
func TestConfigCommand_ListOutput(t *testing.T)
⋮----
// Create config.yaml with embedded telemetry settings
⋮----
// 🔁 Change into the test directory
⋮----
// 🧪 Capture os.Stdout
var buf bytes.Buffer
⋮----
// ⚙️ Run the CLI app with nested subcommands and no-op logger
⋮----
// Execute the command's Before hook to set up logger context
⋮----
// 📤 Finish capturing output
⋮----
// output := stripANSI(buf.String())
⋮----
// ✅ Validating output
// require.Contains(t, output, "[project]")
// require.Contains(t, output, "[operator]")
// require.Contains(t, output, "[env]")
⋮----
// TestEditorDetection tests the logic of detecting available editors
func TestEditorDetection(t *testing.T)
⋮----
// Test with environment variable set
⋮----
// Test editor detection logic
⋮----
// This is informational, not a failure condition
⋮----
// TestBackupAndRestore tests the logic of backing up and restoring files
func TestBackupAndRestoreYAML(t *testing.T)
⋮----
// Backup
⋮----
// Modify
⋮----
// Restore
⋮----
// TestYAMLValidation tests the YAML validation logic
func TestValidateYAML(t *testing.T)
⋮----
// TestEditorLaunching tests the logic of launching an editor
func TestEditorLaunching(t *testing.T)
⋮----
// Test with a mock editor (echo)
⋮----
// Create test file
⋮----
// Create a command that would simulate an editor (echo appends to the file)
⋮----
var stdout, stderr bytes.Buffer
⋮----
// Test with shell to handle redirection
⋮----
// Check if the file was modified (this doesn't test waiting for editor to close)
````

## File: pkg/commands/config/config.go
````go
package config
⋮----
import (
	"fmt"
	"path/filepath"
	"strings"

	"github.com/Layr-Labs/devkit-cli/pkg/common"
	"gopkg.in/yaml.v3"

	"github.com/urfave/cli/v2"
)
⋮----
"fmt"
"path/filepath"
"strings"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common"
"gopkg.in/yaml.v3"
⋮----
"github.com/urfave/cli/v2"
⋮----
var Command = &cli.Command{
	Name:  "config",
	Usage: "Views or manages project-specific configuration (stored in config directory)",
	Flags: append([]cli.Flag{
		&cli.BoolFlag{
			Name:  "list",
			Usage: "Display all current project configuration settings",
		},
		&cli.BoolFlag{
			Name:  "edit",
			Usage: "Open config file in a text editor for manual editing",
		},
		&cli.StringSliceFlag{
			Name:  "set",
			Usage: "Set a value into the current projects configuration settings (--set project.name=value)",
		},
	}, common.GlobalFlags...),
	Action: func(cCtx *cli.Context) error {
		logger := common.LoggerFromContext(cCtx)

		// Identify the top level config .yaml
		cfgPath := filepath.Join("config", common.BaseConfig)

		// Open editor for the project level config
		if cCtx.Bool("edit") {
			logger.Info("Opening config file for editing...")
			return EditConfig(cCtx, cfgPath, Config, "")
		}

		// Get the sets
		items := cCtx.StringSlice("set")

		// Set values using dot.delim to navigate keys
		if len(items) > 0 {
			// Slice any position args to the items list
			items = append(items, cCtx.Args().Slice()...)

			// Load the config yaml
			rootDoc, err := common.LoadYAML(cfgPath)
			if err != nil {
				return fmt.Errorf("read config YAML: %w", err)
			}
			root := rootDoc.Content[0]
			configNode := common.GetChildByKey(root, "config")
			if configNode == nil {
				configNode = &yaml.Node{Kind: yaml.MappingNode}
				root.Content = append(root.Content,
					&yaml.Node{Kind: yaml.ScalarNode, Value: "config"},
					configNode,
				)
			}
			for _, item := range items {
				// Split into "key.path.to.field" and "value"
				idx := strings.LastIndex(item, "=")
				if idx < 0 {
					return fmt.Errorf("invalid --set syntax %q (want key=val)", item)
				}
				pathStr := item[:idx]
				val := item[idx+1:]

				// Break the key path into segments
				path := strings.Split(pathStr, ".")

				// Set val at path
				configNode, err = common.WriteToPath(configNode, path, val)
				if err != nil {
					return fmt.Errorf("setting value %s failed: %w", item, err)
				}
				logger.Info("Set %s = %s", pathStr, val)
			}
			if err := common.WriteYAML(cfgPath, rootDoc); err != nil {
				return fmt.Errorf("write config YAML: %w", err)
			}
			return nil
		}

		// list by default, if no flags are provided
		projectSettings, err := common.LoadProjectSettings()

		if err != nil {
			return fmt.Errorf("failed to load project settings to get telemetry status: %v", err)
		}

		// Load config
		config, err := common.LoadBaseConfigYaml()
		if err != nil {
			return fmt.Errorf("failed to load config and context config: %w", err)
		}

		// Log top level details
		logger.Info("Displaying current configuration... \n\n")
		logger.Info("Telemetry enabled: %t \n", projectSettings.TelemetryEnabled)
		logger.Info("Project: %s\n", config.Config.Project.Name)
		logger.Info("Version: %s\n\n", config.Config.Project.Version)

		// err = listConfig(config, projectSetting)
		err = common.ListYaml(cfgPath, logger)
		if err != nil {
			return fmt.Errorf("failed to list config %w", err)
		}
		return nil
	},
}
⋮----
// Identify the top level config .yaml
⋮----
// Open editor for the project level config
⋮----
// Get the sets
⋮----
// Set values using dot.delim to navigate keys
⋮----
// Slice any position args to the items list
⋮----
// Load the config yaml
⋮----
// Split into "key.path.to.field" and "value"
⋮----
// Break the key path into segments
⋮----
// Set val at path
⋮----
// list by default, if no flags are provided
⋮----
// Load config
⋮----
// Log top level details
⋮----
// err = listConfig(config, projectSetting)
````

## File: pkg/commands/context/context_create.go
````go
package context
⋮----
import (
	stdctx "context"
	"crypto/ecdsa"
	"fmt"
	"math/big"
	"os"
	"path/filepath"
	"regexp"
	"strings"

	"github.com/Layr-Labs/devkit-cli/config/contexts"
	"github.com/Layr-Labs/devkit-cli/pkg/common"
	"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
	"github.com/Layr-Labs/devkit-cli/pkg/common/output"
	"gopkg.in/yaml.v3"

	gethcrypto "github.com/ethereum/go-ethereum/crypto"
	"github.com/ethereum/go-ethereum/ethclient"

	"github.com/urfave/cli/v2"
)
⋮----
stdctx "context"
"crypto/ecdsa"
"fmt"
"math/big"
"os"
"path/filepath"
"regexp"
"strings"
⋮----
"github.com/Layr-Labs/devkit-cli/config/contexts"
"github.com/Layr-Labs/devkit-cli/pkg/common"
"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
"github.com/Layr-Labs/devkit-cli/pkg/common/output"
"gopkg.in/yaml.v3"
⋮----
gethcrypto "github.com/ethereum/go-ethereum/crypto"
"github.com/ethereum/go-ethereum/ethclient"
⋮----
"github.com/urfave/cli/v2"
⋮----
var ChainIDFromRPC = getChainIDFromRPC
⋮----
var CreateContextCommand = &cli.Command{
	Name:      "create",
	Usage:     "Create a new context",
	ArgsUsage: "devkit avs context create <name>",
	Flags: append([]cli.Flag{
		&cli.StringFlag{
			Name:  "context",
			Usage: "Select the context to work over",
		},
		&cli.BoolFlag{
			Name:  "overwrite",
			Usage: "Overwrite if the context already exists",
		},
		&cli.BoolFlag{
			Name:  "use",
			Usage: "Set as current context",
			Value: true,
		},
		&cli.StringFlag{
			Name:  "l1-rpc-url",
			Usage: "Set the L1 RPC URL for the context",
		},
		&cli.StringFlag{
			Name:  "l2-rpc-url",
			Usage: "Set the L2 RPC URL for the context",
		},
		&cli.StringFlag{
			Name:  "deployer-private-key",
			Usage: "Deployer private key for contracts on L1/L2",
		},
		&cli.StringFlag{
			Name:  "app-private-key",
			Usage: "Application owner private key used by AVS",
		},
		&cli.StringFlag{
			Name:  "avs-private-key",
			Usage: "AVS operator private key",
		},
		&cli.StringFlag{
			Name:  "avs-metadata-url",
			Usage: "Public JSON metadata URL for AVS",
		},
		&cli.StringFlag{
			Name:  "registrar-address",
			Usage: "Registrar contract address",
		},
	}, common.GlobalFlags...),
	Action: contextCreateAction,
}
⋮----
func contextCreateAction(cCtx *cli.Context) error
⋮----
// Use flag provided name
⋮----
// Get context name from arg
⋮----
// If no context is provided show help
⋮----
// Locate the context directory
⋮----
// Guard existence early
⋮----
// If re-creating devnet, copy latest and exit early
⋮----
// Path to the context.yaml file
⋮----
// Pull the latest context and set name
⋮----
// Write the new context
⋮----
// Set the current context in config
⋮----
// Load the new context
⋮----
var ctxDoc common.ContextConfig
⋮----
// Log creation
⋮----
// L1
⋮----
// L2
⋮----
// Keys and AVS basics
⋮----
// Build context
⋮----
// Persist and optionally make current
⋮----
// Load the context to update addresses with zeus
⋮----
// Place middleware addresses into context
⋮----
// Save all updates to the yaml file
⋮----
func ensureContextCreatable(cntxDir, ctxName string, overwrite bool) error
⋮----
func getL1RPCURL(cCtx *cli.Context) (string, error)
⋮----
func getChainIDFromRPC(rpcURL string, logger iface.Logger) (*big.Int, error)
⋮----
func getL2RPCURL(cCtx *cli.Context) (string, error)
⋮----
func getDeployerKey(cCtx *cli.Context) (string, error)
⋮----
func getAppKey(cCtx *cli.Context) (string, error)
⋮----
func getAVSSetup(cCtx *cli.Context) (*common.AvsConfig, error)
⋮----
func getAVSPrivateKey(cCtx *cli.Context) (string, error)
⋮----
func derivePublicKey(pkHex string) (string, error)
⋮----
func getAVSMetadataURL(cCtx *cli.Context) (string, error)
⋮----
func CreateContext(
	name string,
	l1ChainID int, l1RPCURL string,
	l2ChainID int, l2RPCURL string,
	deployerKey string, appKey string, avs *common.AvsConfig,
) *common.ContextConfig
⋮----
// Place an empty artifact record to be updated on release
⋮----
func saveContext(cntxDir, name string, ctx *common.ContextConfig, setCurrent bool, logger iface.Logger) error
⋮----
// write config/contexts/<name>.yaml
⋮----
// Set the current context in config
⋮----
func setCurrentContext(name string) error
⋮----
// Load base config, update project.context, persist
⋮----
func logContextCreated(logger iface.Logger, cntxDir, name string, ctx *common.ContextConfig, setCurrent bool)
⋮----
func strip0x(s string) string
⋮----
func validateRPCURL(input string) error
⋮----
func validatePrivateKey(input string) error
⋮----
func validateMetadataURL(input string) error
````

## File: pkg/commands/context/context_selection.go
````go
package context
⋮----
import (
	"fmt"
	"os"
	"path/filepath"
	"strings"

	tea "github.com/charmbracelet/bubbletea"
)
⋮----
"fmt"
"os"
"path/filepath"
"strings"
⋮----
tea "github.com/charmbracelet/bubbletea"
⋮----
// RunSelection is a variable alias for runSelection, so it can be stubbed in tests.
var RunSelection = runSelection
⋮----
type model struct {
	Label    string
	Choices  []string
	cursor   int
	selected int
}
⋮----
func (m model) Init() tea.Cmd
⋮----
func (m model) Update(msg tea.Msg) (tea.Model, tea.Cmd)
⋮----
func (m model) View() string
⋮----
var b strings.Builder
⋮----
func runSelection(label string, opts []string) (string, error)
⋮----
// NewModel creates a new bubbletea model with a label and options
func NewModel(label string, choices []string) model
⋮----
// ListContexts reads YAML contexts and returns user's selection
func ListContexts(contextDir string, isList bool) ([]string, error)
⋮----
var names []string
⋮----
var operation = "set"
````

## File: pkg/commands/context/context_test.go
````go
package context
⋮----
import (
	"flag"
	"fmt"
	"io"
	"math/big"
	"os"
	"path/filepath"
	"sort"
	"strings"
	"testing"

	"github.com/Layr-Labs/devkit-cli/pkg/common"
	"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
	"github.com/Layr-Labs/devkit-cli/pkg/common/logger"
	"github.com/stretchr/testify/require"
	"github.com/urfave/cli/v2"
	"gopkg.in/yaml.v3"
)
⋮----
"flag"
"fmt"
"io"
"math/big"
"os"
"path/filepath"
"sort"
"strings"
"testing"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common"
"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
"github.com/Layr-Labs/devkit-cli/pkg/common/logger"
"github.com/stretchr/testify/require"
"github.com/urfave/cli/v2"
"gopkg.in/yaml.v3"
⋮----
func setupCLIContext(cmd *cli.Command, args []string, flags map[string]string) *cli.Context
⋮----
// silence usage output during tests
⋮----
// Register command flags (and any globals you included in cmd.Flags)
⋮----
// Stable ordering and --key=value to avoid value miss-association
⋮----
// Create app with no-op logger and progress tracker
⋮----
// Execute the Before hook to set up the logger context
⋮----
func TestNewModelDefaults(t *testing.T)
⋮----
func TestCreateContextFunction(t *testing.T)
⋮----
// Persist and optionally make current
⋮----
func TestCreateContextCommand_CreatesFile(t *testing.T)
⋮----
// stub chain id resolver to avoid dialing RPC
⋮----
// return a consistent ID regardless of URL
⋮----
// chdir into temp workspace
⋮----
// build CLI context:
// - pass all flags to avoid prompts
// - --use=false so we do not try to update config/config.yaml
⋮----
// run
⋮----
// assert file
⋮----
func TestListContexts_NoDir(t *testing.T)
⋮----
func TestListContexts_EmptyDir(t *testing.T)
⋮----
func TestListContexts_Success(t *testing.T)
⋮----
func TestSetFlagWritesYAML(t *testing.T)
⋮----
// prepare temp config/contexts/test.yaml
⋮----
// set up CLI with --context test and --set project.name=new
⋮----
// execute
⋮----
// verify YAML updated
⋮----
var doc yaml.Node
⋮----
// navigate to context.project.name
⋮----
var found string
⋮----
func TestContextSetsGlobalContext(t *testing.T)
⋮----
// prepare temp config/config.yaml and a dummy context file
⋮----
// config.yaml
⋮----
// contexts/prod.yaml (must exist so Action doesn't error)
⋮----
// set up CLI with --context prod (no --list)
⋮----
// verify config.yaml has project.context=prod
⋮----
func TestSettingNonexistentContextFails(t *testing.T)
⋮----
// Prepare a temp project with a valid config.yaml but no contexts/foo.yaml
⋮----
// Create config/config.yaml
⋮----
// Create an empty contexts directory
⋮----
// Build CLI context for Command with --context=foo (which does not exist)
⋮----
// Switch into tmp so relative paths resolve
⋮----
// Execute
⋮----
// Check the error message suggests creating the context
````

## File: pkg/commands/context/context.go
````go
package context
⋮----
import (
	"fmt"
	"os"
	"path/filepath"
	"strings"

	"github.com/Layr-Labs/devkit-cli/pkg/commands/config"
	"github.com/Layr-Labs/devkit-cli/pkg/common"
	"gopkg.in/yaml.v3"

	"github.com/urfave/cli/v2"
)
⋮----
"fmt"
"os"
"path/filepath"
"strings"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/commands/config"
"github.com/Layr-Labs/devkit-cli/pkg/common"
"gopkg.in/yaml.v3"
⋮----
"github.com/urfave/cli/v2"
⋮----
var Command = &cli.Command{
	Name:  "context",
	Usage: "Views or manages context-specific configuration (stored in config/contexts directory)",
	Subcommands: []*cli.Command{
		CreateContextCommand,
	},
	Flags: append([]cli.Flag{
		&cli.StringFlag{
			Name:  "context",
			Usage: "Select the context to work over",
		},
		&cli.BoolFlag{
			Name:  "list",
			Usage: "Display all current context settings",
		},
		&cli.BoolFlag{
			Name:  "edit",
			Usage: "Open selected context file in a text editor for manual editing",
		},
		&cli.StringSliceFlag{
			Name:  "set",
			Usage: "Set a value into the current context settings (--set project.name=value)",
		},
	}, common.GlobalFlags...),
	Action: func(cCtx *cli.Context) error {
		logger := common.LoggerFromContext(cCtx)

		// Identify the context we are working against
		context := cCtx.String("context")
		// Locate the context directory
		contextDir := filepath.Join("config", "contexts")
		// Pull positional args
		args := cCtx.Args().Slice()
		// Get the sets
		items := cCtx.StringSlice("set")

		// Pull available contexts
		if cCtx.String("context") == "" && (len(args) == 0 || len(items) > 0) {
			// List available contexts
			ctx, err := ListContexts(contextDir, cCtx.Bool("list"))
			if err != nil {
				return fmt.Errorf("failed to list contexts %w", err)
			}
			// Place the selection
			context = ctx[0]
			// add empty line
			fmt.Println()
		} else if cCtx.String("context") == "" && len(cCtx.Args().Slice()) > 0 {
			// Select the last arg
			last := len(args) - 1
			// Only treat as context if its not a key=value
			if !strings.Contains(args[last], "=") {
				context = args[last]
				args = args[:last]
			}
		}

		// No context provided
		if context == "" {
			return fmt.Errorf("cannot proceed without a selected context")
		}

		// Path to the context.yaml file
		contextPath := filepath.Join(contextDir, fmt.Sprintf("%s.yaml", context))

		// Open editor for the context level config
		if cCtx.Bool("edit") {
			logger.Info("Opening context file for editing...")
			return config.EditConfig(cCtx, contextPath, config.Context, context)
		}

		// Set values using dot.delim to navigate keys
		if len(items) > 0 {
			// Slice any position args to the items list
			items = append(items, args...)

			// Load the context yaml
			rootDoc, err := common.LoadYAML(contextPath)
			if err != nil {
				return fmt.Errorf("read context YAML: %w", err)
			}
			root := rootDoc.Content[0]
			configNode := common.GetChildByKey(root, "context")
			if configNode == nil {
				configNode = &yaml.Node{Kind: yaml.MappingNode}
				root.Content = append(root.Content,
					&yaml.Node{Kind: yaml.ScalarNode, Value: "context"},
					configNode,
				)
			}
			for _, item := range items {
				// Split into "key.path.to.field" and "value"
				idx := strings.LastIndex(item, "=")
				if idx < 0 {
					return fmt.Errorf("invalid --set syntax %q (want key=val)", item)
				}
				pathStr := item[:idx]
				val := item[idx+1:]

				// Break the key path into segments
				path := strings.Split(pathStr, ".")

				// Set val at path
				configNode, err = common.WriteToPath(configNode, path, val)
				if err != nil {
					return fmt.Errorf("setting value %s failed: %w", item, err)
				}
				logger.Info("Set %s = %s", pathStr, val)
			}
			if err := common.WriteYAML(contextPath, rootDoc); err != nil {
				return fmt.Errorf("write context YAML: %w", err)
			}
			return nil
		}

		// Persist the chosen context into base config.yaml
		if !cCtx.Bool("list") {
			// Verify context file exists
			if _, err := os.Stat(contextPath); os.IsNotExist(err) {
				return fmt.Errorf("this context does not exist, create it with `devkit avs context create %s`", context)
			}
			cfgPath := filepath.Join("config", common.BaseConfig)

			// synthesize a single project.context assignment
			items := []string{"project.context=" + context}
			doc, err := common.LoadYAML(cfgPath)
			if err != nil {
				return fmt.Errorf("read base config: %w", err)
			}
			root := doc.Content[0]
			cfgNode := common.GetChildByKey(root, "config")
			if cfgNode == nil {
				cfgNode = &yaml.Node{Kind: yaml.MappingNode}
				root.Content = append(
					root.Content,
					&yaml.Node{Kind: yaml.ScalarNode, Value: "config"},
					cfgNode,
				)
			}
			for _, it := range items {
				parts := strings.SplitN(it, "=", 2)
				cfgNode, err = common.WriteToPath(cfgNode, strings.Split(parts[0], "."), parts[1])
				if err != nil {
					return fmt.Errorf("failed to set %s: %w", it, err)
				}
			}

			// Write the base config.yaml back to disk
			if err := common.WriteYAML(cfgPath, doc); err != nil {
				return fmt.Errorf("write config: %w", err)
			}
			logger.Info("Global context successfully set to %s", context)
			return nil
		}

		// List the context
		contextPath = filepath.Join(contextDir, fmt.Sprintf("%s.yaml", context))
		err := common.ListYaml(contextPath, logger)
		if err != nil {
			return fmt.Errorf("this context does not exist, create it with `devkit avs context create %s`", context)
		}

		return nil
	},
}
⋮----
// Identify the context we are working against
⋮----
// Locate the context directory
⋮----
// Pull positional args
⋮----
// Get the sets
⋮----
// Pull available contexts
⋮----
// List available contexts
⋮----
// Place the selection
⋮----
// add empty line
⋮----
// Select the last arg
⋮----
// Only treat as context if its not a key=value
⋮----
// No context provided
⋮----
// Path to the context.yaml file
⋮----
// Open editor for the context level config
⋮----
// Set values using dot.delim to navigate keys
⋮----
// Slice any position args to the items list
⋮----
// Load the context yaml
⋮----
// Split into "key.path.to.field" and "value"
⋮----
// Break the key path into segments
⋮----
// Set val at path
⋮----
// Persist the chosen context into base config.yaml
⋮----
// Verify context file exists
⋮----
// synthesize a single project.context assignment
⋮----
// Write the base config.yaml back to disk
⋮----
// List the context
````

## File: pkg/commands/keystore/create_keystore.go
````go
package keystore
⋮----
import (
	"errors"
	"fmt"
	"os"
	"path/filepath"
	"strings"

	"github.com/Layr-Labs/devkit-cli/pkg/common"
	"github.com/Layr-Labs/devkit-cli/pkg/common/iface"

	"github.com/Layr-Labs/crypto-libs/pkg/bn254"
	blskeystore "github.com/Layr-Labs/crypto-libs/pkg/keystore"
	"github.com/ethereum/go-ethereum/accounts/keystore"
	"github.com/ethereum/go-ethereum/crypto"
	"github.com/google/uuid"
	"github.com/urfave/cli/v2"
)
⋮----
"errors"
"fmt"
"os"
"path/filepath"
"strings"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common"
"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
⋮----
"github.com/Layr-Labs/crypto-libs/pkg/bn254"
blskeystore "github.com/Layr-Labs/crypto-libs/pkg/keystore"
"github.com/ethereum/go-ethereum/accounts/keystore"
"github.com/ethereum/go-ethereum/crypto"
"github.com/google/uuid"
"github.com/urfave/cli/v2"
⋮----
var CreateCommand = &cli.Command{
	Name:  "create",
	Usage: "Generates a BLS or ECDSA keystore JSON file for a private key",
	Flags: append([]cli.Flag{
		&cli.StringFlag{
			Name:     "key",
			Usage:    "Private key (BLS private key in large number format or ECDSA private key in hex format)",
			Required: true,
		},
		&cli.StringFlag{
			Name:     "path",
			Usage:    "Full path to save keystore file, including filename (e.g., ./operator_keys/operator1.json)",
			Required: true,
		},
		&cli.StringFlag{
			Name:     "type",
			Usage:    "Curve type ('bn254' for BLS or 'ecdsa' for ECDSA)",
			Required: true,
		},
		&cli.StringFlag{
			Name:  "password",
			Usage: `Password to encrypt the keystore file. Default password is "" `,
			Value: "",
		},
	}, common.GlobalFlags...),
	Action: func(cCtx *cli.Context) error {
		logger := common.LoggerFromContext(cCtx)

		privateKey := cCtx.String("key")
		path := cCtx.String("path")
		curve := cCtx.String("type")
		password := cCtx.String("password")

		logger.Debug("🔐 Starting keystore creation")
		logger.Debug("• Curve: %s", curve)
		logger.Debug("• Output Path: %s", path)

		switch curve {
		case "bn254":
			return CreateBLSKeystore(logger, privateKey, path, password, curve)
		case "ecdsa":
			return CreateECDSAKeystore(logger, privateKey, path, password)
		default:
			return fmt.Errorf("unsupported curve type: %s (supported: bn254, ecdsa)", curve)
		}
	},
}
⋮----
func CreateBLSKeystore(logger iface.Logger, privateKey, path, password, curve string) error
⋮----
func CreateECDSAKeystore(logger iface.Logger, privateKeyHex, path, password string) error
⋮----
// Clean the private key hex string
⋮----
// Convert hex string to ECDSA private key
⋮----
// Get the address from the private key
⋮----
// Create a new keystore Key structure
⋮----
// Encrypt the key
⋮----
// Write the encrypted key to file
⋮----
// Validate by trying to decrypt
⋮----
// Verify the address matches
````

## File: pkg/commands/keystore/keystore_test.go
````go
package keystore
⋮----
import (
	"bytes"
	"encoding/json"
	"io"
	"log"
	"os"
	"path/filepath"
	"testing"

	"github.com/Layr-Labs/devkit-cli/pkg/testutils"
	"github.com/stretchr/testify/require"
	"github.com/urfave/cli/v2"
)
⋮----
"bytes"
"encoding/json"
"io"
"log"
"os"
"path/filepath"
"testing"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/testutils"
"github.com/stretchr/testify/require"
"github.com/urfave/cli/v2"
⋮----
func TestKeystoreCreateAndRead(t *testing.T)
⋮----
// Create keystore with no-op logger
⋮----
// Execute the subcommand's Before hook to set up logger context
⋮----
// 🔒 Verify keystore file was created
⋮----
// Read keystore with no-op logger
⋮----
// 🧪 Capture logs via pipe
⋮----
// Close writer and restore
⋮----
log.SetOutput(os.Stderr) // Restore default log output
⋮----
// Read from pipe
var buf bytes.Buffer
⋮----
func TestECDSAKeystoreCreateAndRead(t *testing.T)
⋮----
// Test with 0x prefix
⋮----
// Create ECDSA keystore
⋮----
// Verify keystore file was created
⋮----
// Capture logs via pipe
⋮----
func TestECDSAKeystoreCreateWithoutPrefix(t *testing.T)
⋮----
// Test without 0x prefix
⋮----
// Verify it's a valid JSON file
⋮----
var keystore map[string]interface{}
⋮----
// Check it has the expected fields
⋮----
func TestKeystoreCreateInvalidType(t *testing.T)
⋮----
func TestECDSAKeystoreWrongPassword(t *testing.T)
⋮----
// Try to read with wrong password
````

## File: pkg/commands/keystore/keystore.go
````go
package keystore
⋮----
import (
	"github.com/urfave/cli/v2"
)
⋮----
"github.com/urfave/cli/v2"
⋮----
var KeystoreCommand = &cli.Command{
	Name:  "keystore",
	Usage: "Manage keystore operations",
	Subcommands: []*cli.Command{
		CreateCommand,
		ReadCommand,
	},
}
````

## File: pkg/commands/keystore/read_keystore.go
````go
package keystore
⋮----
import (
	"encoding/hex"
	"encoding/json"
	"fmt"
	"os"

	"github.com/Layr-Labs/crypto-libs/pkg/bn254"
	blskeystore "github.com/Layr-Labs/crypto-libs/pkg/keystore"
	"github.com/Layr-Labs/devkit-cli/pkg/common"
	ethkeystore "github.com/ethereum/go-ethereum/accounts/keystore"
	"github.com/urfave/cli/v2"
	"log"
)
⋮----
"encoding/hex"
"encoding/json"
"fmt"
"os"
⋮----
"github.com/Layr-Labs/crypto-libs/pkg/bn254"
blskeystore "github.com/Layr-Labs/crypto-libs/pkg/keystore"
"github.com/Layr-Labs/devkit-cli/pkg/common"
ethkeystore "github.com/ethereum/go-ethereum/accounts/keystore"
"github.com/urfave/cli/v2"
"log"
⋮----
var ReadCommand = &cli.Command{
	Name:  "read",
	Usage: "Print the private key from a given keystore file, password",
	Flags: append([]cli.Flag{
		&cli.StringFlag{
			Name:     "path",
			Usage:    "Path to the keystore JSON",
			Required: true,
		},
		&cli.StringFlag{
			Name:     "password",
			Usage:    "Password to decrypt the keystore file",
			Required: true,
		},
	}, common.GlobalFlags...),
	Action: func(cCtx *cli.Context) error {
		path := cCtx.String("path")
		password := cCtx.String("password")

		// Determine keystore type by checking the file content
		fileContent, err := os.ReadFile(path)
		if err != nil {
			return fmt.Errorf("failed to read keystore file: %w", err)
		}

		// Check if it's an ECDSA keystore (has "address" field)
		var jsonData map[string]interface{}
		if err := json.Unmarshal(fileContent, &jsonData); err != nil {
			return fmt.Errorf("failed to parse keystore JSON: %w", err)
		}

		if _, hasAddress := jsonData["address"]; hasAddress {
			// ECDSA keystore
			key, err := ethkeystore.DecryptKey(fileContent, password)
			if err != nil {
				return fmt.Errorf("failed to decrypt ECDSA keystore: %w", err)
			}

			privateKeyHex := hex.EncodeToString(key.PrivateKey.D.Bytes())
			log.Println("✅ ECDSA Keystore decrypted successfully")
			log.Println("")
			log.Println("🔑 Save this ECDSA private key in a secure location:")
			log.Printf("    0x%s\n", privateKeyHex)
			log.Println("")
		} else if _, hasPubkey := jsonData["pubkey"]; hasPubkey {
			// BLS keystore
			scheme := bn254.NewScheme()
			keystoreData, err := blskeystore.LoadKeystoreFile(path)
			if err != nil {
				return fmt.Errorf("failed to load BLS keystore file: %w", err)
			}

			privateKeyData, err := keystoreData.GetPrivateKey(password, scheme)
			if err != nil {
				return fmt.Errorf("failed to extract BLS private key: %w", err)
			}
			log.Println("✅ BLS Keystore decrypted successfully")
			log.Println("")
			log.Println("🔑 Save this BLS private key in a secure location:")
			log.Printf("    %s\n", privateKeyData.Bytes())
			log.Println("")
		} else {
			return fmt.Errorf("unknown keystore format")
		}

		return nil
	},
}
⋮----
// Determine keystore type by checking the file content
⋮----
// Check if it's an ECDSA keystore (has "address" field)
var jsonData map[string]interface{}
⋮----
// ECDSA keystore
⋮----
// BLS keystore
````

## File: pkg/commands/template/info_test.go
````go
package template
⋮----
import (
	"flag"
	"os"
	"path/filepath"
	"testing"

	"github.com/Layr-Labs/devkit-cli/pkg/common"
	"github.com/Layr-Labs/devkit-cli/pkg/testutils"
	"github.com/urfave/cli/v2"
)
⋮----
"flag"
"os"
"path/filepath"
"testing"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common"
"github.com/Layr-Labs/devkit-cli/pkg/testutils"
"github.com/urfave/cli/v2"
⋮----
func TestInfoCommand(t *testing.T)
⋮----
// Create a temporary directory for testing
⋮----
// Create config directory and config.yaml
⋮----
// Create config with template information
⋮----
// Create test context with no-op logger
⋮----
// Change to the test directory
⋮----
//nolint:errcheck
⋮----
// Test info command
⋮----
// Create a flag set and context with no-op logger
⋮----
// Execute the Before hook to set up the logger context
⋮----
// Run the info command
````

## File: pkg/commands/template/info.go
````go
package template
⋮----
import (
	"github.com/Layr-Labs/devkit-cli/pkg/common"
	"github.com/urfave/cli/v2"
)
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common"
"github.com/urfave/cli/v2"
⋮----
// InfoCommand defines the "template info" subcommand
var InfoCommand = &cli.Command{
	Name:  "info",
	Usage: "Display information about the current project template",
	Action: func(cCtx *cli.Context) error {
		// Get logger
		logger := common.LoggerFromContext(cCtx)

		// Get template information
		projectName, templateBaseURL, templateVersion, templateLanguage, err := GetTemplateInfo()
		if err != nil {
			return err
		}

		// Display template information
		logger.Info("Project template information:")
		if projectName != "" {
			logger.Info("  Project name: %s", projectName)
		}
		logger.Info("  Template URL: %s", templateBaseURL)
		logger.Info("  Version: %s", templateVersion)
		logger.Info("  Language: %s", templateLanguage)

		return nil
	},
}
⋮----
// Get logger
⋮----
// Get template information
⋮----
// Display template information
````

## File: pkg/commands/template/template_test.go
````go
package template
⋮----
import (
	"os"
	"path/filepath"
	"testing"

	"github.com/Layr-Labs/devkit-cli/pkg/common"
)
⋮----
"os"
"path/filepath"
"testing"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common"
⋮----
func TestGetTemplateInfo(t *testing.T)
⋮----
// Create a temporary directory for testing
⋮----
// Create config directory and config.yaml
⋮----
// Change to the test directory
⋮----
//nolint:errcheck
⋮----
// Test with template information
⋮----
// Test with template information
⋮----
// Test with no template info in config and falling back to hardcoded values
⋮----
// Update config content to remove template info
⋮----
// With the real implementation, we can't fully mock pkgtemplate.LoadConfig as it's not a variable,
// so we'll check that we at least get a fallback value
⋮----
// Most likely the hardcoded value from GetTemplateInfo()
⋮----
// Test with missing config file
⋮----
// Remove config file
````

## File: pkg/commands/template/template.go
````go
package template
⋮----
import (
	"fmt"
	"os"
	"path/filepath"

	"github.com/Layr-Labs/devkit-cli/pkg/common"
	"github.com/Layr-Labs/devkit-cli/pkg/template"
	"github.com/urfave/cli/v2"
	"gopkg.in/yaml.v3"
)
⋮----
"fmt"
"os"
"path/filepath"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common"
"github.com/Layr-Labs/devkit-cli/pkg/template"
"github.com/urfave/cli/v2"
"gopkg.in/yaml.v3"
⋮----
// GetTemplateInfo reads the template information from the project config
// Returns projectName, templateBaseURL, templateVersion, templateLanguage, error
func GetTemplateInfo() (string, string, string, string, error)
⋮----
// Check for config file
⋮----
// Read and parse config
⋮----
var configMap map[string]interface{}
⋮----
// Extract values with defaults
⋮----
// Navigate to config.project section and extract values
⋮----
// Use defaults if templateBaseURL is empty
⋮----
// Try to get from template config (optional)
⋮----
// GetTemplateInfoDefault returns default template information without requiring a config file
// Returns projectName, templateBaseURL, templateVersion, error
func GetTemplateInfoDefault() (string, string, string, string, error)
⋮----
// Default values
⋮----
// Try to load templates configuration
⋮----
// Default to "hourglass" framework and "go" language
⋮----
// Look up the default template URL
⋮----
// Use the default values
⋮----
// Helper function to get string value or return default
func getStringOrDefault(m map[string]interface
⋮----
// Command defines the main "template" command for template operations
var Command = &cli.Command{
	Name:  "template",
	Usage: "Manage project templates",
	Subcommands: []*cli.Command{
		InfoCommand,
		UpgradeCommand,
	},
}
````

## File: pkg/commands/template/upgrade_test.go
````go
package template
⋮----
import (
	"context"
	"flag"
	"fmt"
	"os"
	"path/filepath"
	"testing"

	"github.com/Layr-Labs/devkit-cli/pkg/common"
	"github.com/Layr-Labs/devkit-cli/pkg/template"
	"github.com/Layr-Labs/devkit-cli/pkg/testutils"
	"github.com/urfave/cli/v2"
	"gopkg.in/yaml.v3"
)
⋮----
"context"
"flag"
"fmt"
"os"
"path/filepath"
"testing"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common"
"github.com/Layr-Labs/devkit-cli/pkg/template"
"github.com/Layr-Labs/devkit-cli/pkg/testutils"
"github.com/urfave/cli/v2"
"gopkg.in/yaml.v3"
⋮----
// MockGitClient is a mock implementation of template.GitClient for testing
type MockGitClient struct {
	// In-memory mock script content
	mockUpgradeScript string
}
⋮----
// In-memory mock script content
⋮----
func (m *MockGitClient) Clone(ctx context.Context, repoURL, dest string) error
⋮----
// Create basic directory structure for a mock git repo
⋮----
func (m *MockGitClient) Checkout(ctx context.Context, repoDir, commit string) error
⋮----
// Create upgrade script in the target directory with mock content
⋮----
// MockGitClientGetter implements the gitClientGetter interface for testing
type MockGitClientGetter struct {
	client template.GitClient
}
⋮----
func (m *MockGitClientGetter) GetClient() template.GitClient
⋮----
// MockTemplateInfoGetter implements the templateInfoGetter interface for testing
type MockTemplateInfoGetter struct {
	projectName       string
	templateURL       string
	templateVersion   string
	templateLanguage  string
	shouldReturnError bool
}
⋮----
func (m *MockTemplateInfoGetter) GetInfo() (string, string, string, string, error)
⋮----
func (m *MockTemplateInfoGetter) GetInfoDefault() (string, string, string, string, error)
⋮----
func (m *MockTemplateInfoGetter) GetTemplateVersionFromConfig(arch, lang string) (string, error)
⋮----
func TestUpgradeCommand(t *testing.T)
⋮----
// Create a temporary directory for testing
⋮----
// Ensure test directory is clean
⋮----
// Create config directory and config.yaml
⋮----
// Create config with template information - using inline yaml
⋮----
// Create git repo in temp dir
⋮----
// Create mock template info getter
⋮----
// Create the test command with mocked dependencies
⋮----
// Create test context
⋮----
// Change to the test directory
⋮----
//nolint:errcheck
⋮----
// Test upgrade command with version flag
⋮----
// Discard changes between runs
⋮----
// Create a flag set and context with no-op logger
⋮----
// Create context with no-op logger and call Before hook
⋮----
// Execute the Before hook to set up the logger context
⋮----
// Run the upgrade command (which is our test command with mocks)
⋮----
// Verify config was updated with new version
⋮----
var configMap map[string]interface{}
⋮----
var templateVersion string
⋮----
// Test upgrade command without version flag
⋮----
// Create a flag set and context without version flag, with no-op logger
⋮----
// Test upgrade command with incompatible to devkit version
⋮----
// Run the upgrade command
⋮----
// Test with missing config file
⋮----
// Create a separate directory without a config file
⋮----
// Change to the no-config directory
⋮----
// Create mock with error response for GetTemplateInfo
⋮----
// Create command with error getter and no-op logger
⋮----
// Change back to the test directory
````

## File: pkg/commands/template/upgrade.go
````go
package template
⋮----
import (
	"fmt"
	"os"
	"path/filepath"
	"strings"

	progresslogger "github.com/Layr-Labs/devkit-cli/pkg/common/logger"

	"github.com/Layr-Labs/devkit-cli/pkg/common"
	"github.com/Layr-Labs/devkit-cli/pkg/template"
	"github.com/urfave/cli/v2"
	"gopkg.in/yaml.v3"
)
⋮----
"fmt"
"os"
"path/filepath"
"strings"
⋮----
progresslogger "github.com/Layr-Labs/devkit-cli/pkg/common/logger"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common"
"github.com/Layr-Labs/devkit-cli/pkg/template"
"github.com/urfave/cli/v2"
"gopkg.in/yaml.v3"
⋮----
// For testability, we'll define interfaces for our dependencies
type templateInfoGetter interface {
	GetInfo() (string, string, string, string, error)
	GetInfoDefault() (string, string, string, string, error)
	GetTemplateVersionFromConfig(arch, lang string) (string, error)
}
⋮----
// defaultTemplateInfoGetter implements templateInfoGetter using the real functions
type defaultTemplateInfoGetter struct{}
⋮----
func (g *defaultTemplateInfoGetter) GetInfo() (string, string, string, string, error)
⋮----
func (g *defaultTemplateInfoGetter) GetInfoDefault() (string, string, string, string, error)
⋮----
// GetTemplateVersionFromConfig returns the version field for a framework-specific template
// and validates that the requested language is present in the declared list.
// An empty Languages slice means “any language”.
func (g *defaultTemplateInfoGetter) GetTemplateVersionFromConfig(selectedTemplate, lang string) (string, error)
⋮----
// createUpgradeCommand creates an upgrade command with the given dependencies
func createUpgradeCommand(
	infoGetter templateInfoGetter,
) *cli.Command
⋮----
// Get logger
⋮----
// Get the requested version
⋮----
// Set requestedVersion to configs version (this is the latest this version of devkit is aware of)
⋮----
// Check again for nil requestedVersion after attempting to pull from template
⋮----
// Check if the requested version is valid and known to DevKit
⋮----
// Compare semver strings
⋮----
// On error log but don't exit
⋮----
// Return error and prevent upgrade
⋮----
// Get template information
⋮----
// If the template URL is missing, use the default URL from the getter function
⋮----
// Get project's absolute path
⋮----
// Create a gitClient for upgrade process
⋮----
// Check if working tree is clean before upgrading
⋮----
// Ensure .gitignore entry is present for tempInternal
⋮----
// Ensure parent exists
⋮----
// Create run-specific temp dir inside tempParent
⋮----
// Remove tempParent if it is empty after tempDir cleanup
⋮----
// Extract base URL without .git suffix for consistency
⋮----
// Fetch main template
⋮----
// Check if the upgrade script exists
⋮----
// Execute the upgrade script, passing the project path as an argument
⋮----
// Update the project's config to reflect the new template version
⋮----
var configMap map[string]interface{}
⋮----
// Update template version in config
⋮----
// Always update the template version
⋮----
// Also set the templateBaseUrl if it's missing
⋮----
// Use the non-.git version for the config
⋮----
// Write updated config
⋮----
// UpgradeCommand defines the "template upgrade" subcommand
var UpgradeCommand = createUpgradeCommand(
	&defaultTemplateInfoGetter{},
)
````

## File: pkg/commands/version/version.go
````go
package version
⋮----
import (
	"fmt"
	"github.com/Layr-Labs/devkit-cli/internal/version"
	"github.com/Layr-Labs/devkit-cli/pkg/common"

	"github.com/urfave/cli/v2"
)
⋮----
"fmt"
"github.com/Layr-Labs/devkit-cli/internal/version"
"github.com/Layr-Labs/devkit-cli/pkg/common"
⋮----
"github.com/urfave/cli/v2"
⋮----
// RunCommand defines the "run" command
var VersionCommand = &cli.Command{
	Name:  "version",
	Usage: "Print the version of the devkit",
	Flags: append([]cli.Flag{}, common.GlobalFlags...),
	Action: func(cCtx *cli.Context) error {
		// Invoke and return AVSRun
		return VersionRun(cCtx)
	},
}
⋮----
// Invoke and return AVSRun
⋮----
func VersionRun(cCtx *cli.Context) error
````

## File: pkg/commands/avs.go
````go
package commands
⋮----
import (
	"github.com/Layr-Labs/devkit-cli/pkg/commands/config"
	"github.com/Layr-Labs/devkit-cli/pkg/commands/context"
	"github.com/Layr-Labs/devkit-cli/pkg/commands/template"
	"github.com/urfave/cli/v2"
)
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/commands/config"
"github.com/Layr-Labs/devkit-cli/pkg/commands/context"
"github.com/Layr-Labs/devkit-cli/pkg/commands/template"
"github.com/urfave/cli/v2"
⋮----
var AVSCommand = &cli.Command{
	Name:  "avs",
	Usage: "Manage EigenCloud AVS (Autonomous Verifiable Services) projects",
	Subcommands: []*cli.Command{
		CreateCommand,
		config.Command,
		context.Command,
		BuildCommand,
		DevnetCommand,
		DeployCommand,
		TransportCommand,
		RunCommand,
		TestCommand,
		CallCommand,
		ReleaseCommand,
		template.Command,
	},
}
````

## File: pkg/commands/basic_e2e_test.go
````go
package commands
⋮----
import (
	"os"
	"os/exec"
	"path/filepath"
	"testing"

	"github.com/Layr-Labs/devkit-cli/config/configs"
	"github.com/Layr-Labs/devkit-cli/pkg/hooks"

	"github.com/stretchr/testify/assert"
	"github.com/urfave/cli/v2"
)
⋮----
"os"
"os/exec"
"path/filepath"
"testing"
⋮----
"github.com/Layr-Labs/devkit-cli/config/configs"
"github.com/Layr-Labs/devkit-cli/pkg/hooks"
⋮----
"github.com/stretchr/testify/assert"
"github.com/urfave/cli/v2"
⋮----
// TODO: Enhance this test to cover other commands and more complex scenarios
⋮----
func TestBasicE2E(t *testing.T)
⋮----
// Create a temporary project directory
⋮----
// Save current directory
⋮----
// Setup test project
⋮----
// Change to the project directory
⋮----
// Test env loading
⋮----
func setupBasicProject(t *testing.T, dir string)
⋮----
// Create project directory and required files
⋮----
// Create config directory
⋮----
// Create config.yaml (needed to identify project root)
⋮----
// Create .env file
⋮----
// Create build script
⋮----
func testEnvLoading(t *testing.T, dir string)
⋮----
// Backup and unset the original env var
⋮----
// Clear env var
⋮----
// 1. Simulate CLI context and run the Before hook
⋮----
// Verify that the env var is now set
⋮----
// Ref the scripts dir
⋮----
// 2. Run `bash -c ./build` and verify output
````

## File: pkg/commands/build_test.go
````go
package commands
⋮----
import (
	"context"
	"errors"
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"testing"
	"time"

	"github.com/Layr-Labs/devkit-cli/config/configs"
	"github.com/Layr-Labs/devkit-cli/config/contexts"
	"github.com/Layr-Labs/devkit-cli/pkg/common"
	"github.com/Layr-Labs/devkit-cli/pkg/common/devnet"
	"github.com/Layr-Labs/devkit-cli/pkg/testutils"

	"github.com/urfave/cli/v2"
)
⋮----
"context"
"errors"
"fmt"
"os"
"path/filepath"
"strings"
"testing"
"time"
⋮----
"github.com/Layr-Labs/devkit-cli/config/configs"
"github.com/Layr-Labs/devkit-cli/config/contexts"
"github.com/Layr-Labs/devkit-cli/pkg/common"
"github.com/Layr-Labs/devkit-cli/pkg/common/devnet"
"github.com/Layr-Labs/devkit-cli/pkg/testutils"
⋮----
"github.com/urfave/cli/v2"
⋮----
func TestBuildCommand(t *testing.T)
⋮----
// Create config directory and devnet.yaml
⋮----
// Create build script
⋮----
// Create contracts directory and its Makefile
⋮----
// Test the case where contracts directory doesn't exist
func TestBuildCommand_NoContracts(t *testing.T)
⋮----
func TestBuildCommand_ContextCancellation(t *testing.T)
⋮----
func TestBuildCommand_CustomTarget(t *testing.T)
⋮----
// Create custom userland build script
⋮----
// Ensure custom script captured the forwarded arguments
⋮----
// Context file should have been updated with custom artifact info
⋮----
func TestBuildCommand_CustomTargetMissing(t *testing.T)
````

## File: pkg/commands/build.go
````go
package commands
⋮----
import (
	"fmt"
	"os"
	"path/filepath"

	"github.com/Layr-Labs/devkit-cli/config/configs"
	"github.com/Layr-Labs/devkit-cli/config/contexts"
	"github.com/Layr-Labs/devkit-cli/pkg/common"

	"gopkg.in/yaml.v3"

	"github.com/urfave/cli/v2"
)
⋮----
"fmt"
"os"
"path/filepath"
⋮----
"github.com/Layr-Labs/devkit-cli/config/configs"
"github.com/Layr-Labs/devkit-cli/config/contexts"
"github.com/Layr-Labs/devkit-cli/pkg/common"
⋮----
"gopkg.in/yaml.v3"
⋮----
"github.com/urfave/cli/v2"
⋮----
// BuildCommand defines the "build" command
var BuildCommand = &cli.Command{
	Name:  "build",
	Usage: "Compiles AVS components (smart contracts via Foundry, Go binaries for operators/aggregators)",
	Flags: append([]cli.Flag{
		&cli.StringFlag{
			Name:  "context",
			Usage: "Select the context to use in this command (devnet, testnet or mainnet)",
		},
		&cli.StringFlag{
			Name:  "target",
			Usage: "Override the build script target (relative or absolute path)",
		},
	}, common.GlobalFlags...),
	Action: func(cCtx *cli.Context) error {
		logger := common.LoggerFromContext(cCtx)

		// Migrate config
		configsMigratedCount, err := configs.MigrateConfig(logger)
		if err != nil {
			logger.Error("config migration failed: %w", err)
		}
		if configsMigratedCount > 0 {
			logger.Info("configs migrated: %d", configsMigratedCount)
		}

		// Migrate contexts
		contextsMigratedCount, err := contexts.MigrateContexts(logger)
		if err != nil {
			logger.Error("context migrations failed: %w", err)
		}
		if contextsMigratedCount > 0 {
			logger.Info("contexts migrated: %d", contextsMigratedCount)
		}

		// Run scriptPath from cwd
		const dir = ""

		// Get the config (based on if we're in a test or not)
		var cfg *common.ConfigWithContextConfig

		// Load selected context
		contextName := cCtx.String("context")

		// Load config according to provided contextName
		if contextName == "" {
			cfg, contextName, err = common.LoadDefaultConfigWithContextConfig()
		} else {
			cfg, contextName, err = common.LoadConfigWithContextConfig(contextName)
		}
		if err != nil {
			return fmt.Errorf("failed to load configurations: %w", err)
		}

		// Pull template language from config
		language := cfg.Config.Project.TemplateLanguage
		if language == "" {
			language = "go"
		}

		// Log the type of project being ran
		logger.Info("Building %s AVS project", language)

		// Handle version increment
		version := cfg.Context[contextName].Artifact.Version
		if version == "" {
			version = "0"
		}

		logger.Debug("Project Name: %s", cfg.Config.Project.Name)
		logger.Debug("Building AVS components...")

		// Resolve target script (defaults to .devkit/scripts/build)
		defaultScript := filepath.Join(".devkit", "scripts", "build")
		scriptPath := defaultScript

		if override := cCtx.String("target"); override != "" {
			if filepath.IsAbs(override) {
				scriptPath = override
			} else {
				scriptPath = filepath.Join(".", filepath.Clean(override))
			}

			if _, statErr := os.Stat(scriptPath); statErr != nil {
				if os.IsNotExist(statErr) {
					return fmt.Errorf("custom build target not found: %s", scriptPath)
				}
				return fmt.Errorf("failed to access custom build target %s: %w", scriptPath, statErr)
			}

			logger.Info("Using custom build target: %s", scriptPath)
		}

		// Execute build via script with project name
		params := [][]byte{
			[]byte("--image"),
			[]byte(cfg.Config.Project.Name),
			[]byte("--tag"),
			[]byte(version),
			[]byte("--lang"),
			[]byte(language),
		}

		// Forward any additional positional arguments to the build script
		for _, arg := range cCtx.Args().Slice() {
			params = append(params, []byte(arg))
		}

		output, err := common.CallTemplateScript(cCtx.Context, logger, dir, scriptPath, common.ExpectJSONResponse, params...)
		if err != nil {
			logger.Error("Build script failed with error: %v", err)
			return fmt.Errorf("build failed: %w", err)
		}

		// Load the context yaml file
		contextPath := filepath.Join("config", "contexts", fmt.Sprintf("%s.yaml", contextName))
		contextNode, err := common.LoadYAML(contextPath)
		if err != nil {
			return fmt.Errorf("failed to load context yaml: %w", err)
		}

		// Get the root node (first content node)
		rootNode := contextNode.Content[0]

		// Get or create the context section
		contextSection := common.GetChildByKey(rootNode, "context")
		if contextSection == nil {
			contextSection = &yaml.Node{Kind: yaml.MappingNode}
			rootNode.Content = append(rootNode.Content,
				&yaml.Node{Kind: yaml.ScalarNode, Value: "context"},
				contextSection,
			)
		}

		// Update artifact in context
		if err := updateArtifactFromBuild(contextSection, output); err != nil {
			return fmt.Errorf("failed to update artifact: %w", err)
		}

		// Write the merged yaml back to file
		if err := common.WriteYAML(contextPath, contextNode); err != nil {
			return fmt.Errorf("failed to write merged yaml: %w", err)
		}

		logger.Info("Build completed successfully")
		return nil
	},
}
⋮----
// Migrate config
⋮----
// Migrate contexts
⋮----
// Run scriptPath from cwd
const dir = ""
⋮----
// Get the config (based on if we're in a test or not)
var cfg *common.ConfigWithContextConfig
⋮----
// Load selected context
⋮----
// Load config according to provided contextName
⋮----
// Pull template language from config
⋮----
// Log the type of project being ran
⋮----
// Handle version increment
⋮----
// Resolve target script (defaults to .devkit/scripts/build)
⋮----
// Execute build via script with project name
⋮----
// Forward any additional positional arguments to the build script
⋮----
// Load the context yaml file
⋮----
// Get the root node (first content node)
⋮----
// Get or create the context section
⋮----
// Update artifact in context
⋮----
// Write the merged yaml back to file
⋮----
// updateArtifactFromBuild updates the artifactId and component fields in the context yaml file
func updateArtifactFromBuild(contextSection *yaml.Node, buildOutput interface
⋮----
// Convert build output to map for easier access
⋮----
// Get or create artifact section
⋮----
// Update artifact fields from build output
⋮----
// Update artifactId if present
⋮----
// Update component if present
````

## File: pkg/commands/call_test.go
````go
package commands
⋮----
import (
	"context"
	"errors"
	"os"
	"path/filepath"
	"testing"
	"time"

	"github.com/Layr-Labs/devkit-cli/pkg/common/logger"
	"github.com/Layr-Labs/devkit-cli/pkg/testutils"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"github.com/urfave/cli/v2"
)
⋮----
"context"
"errors"
"os"
"path/filepath"
"testing"
"time"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common/logger"
"github.com/Layr-Labs/devkit-cli/pkg/testutils"
⋮----
"github.com/stretchr/testify/assert"
"github.com/stretchr/testify/require"
"github.com/urfave/cli/v2"
⋮----
func setupCallApp(t *testing.T) (tmpDir string, restore func(), app *cli.App, noopLogger *logger.NoopLogger)
⋮----
func TestCallCommand_ExecutesSuccessfully(t *testing.T)
⋮----
func TestCallCommand_MissingDevnetYAML(t *testing.T)
⋮----
func TestCallCommand_MissingParams(t *testing.T)
⋮----
func TestParseParams_MultipleParams(t *testing.T)
⋮----
func TestCallCommand_MalformedParams(t *testing.T)
⋮----
func TestCallCommand_MalformedYAML(t *testing.T)
⋮----
func TestCallCommand_MissingScript(t *testing.T)
⋮----
func TestCallCommand_ScriptReturnsNonZero(t *testing.T)
⋮----
func TestCallCommand_ScriptOutputsInvalidJSON(t *testing.T)
⋮----
// Check that the output was logged
⋮----
func TestCallCommand_Cancelled(t *testing.T)
````

## File: pkg/commands/call.go
````go
package commands
⋮----
import (
	"encoding/json"
	"fmt"
	"path/filepath"
	"strings"

	"github.com/Layr-Labs/devkit-cli/pkg/common"
	"github.com/Layr-Labs/devkit-cli/pkg/common/devnet"

	"github.com/urfave/cli/v2"
)
⋮----
"encoding/json"
"fmt"
"path/filepath"
"strings"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common"
"github.com/Layr-Labs/devkit-cli/pkg/common/devnet"
⋮----
"github.com/urfave/cli/v2"
⋮----
// CallCommand defines the "call" command
var CallCommand = &cli.Command{
	Name:  "call",
	Usage: "Submits tasks to the local devnet, triggers off-chain execution, and aggregates results",
	Flags: append([]cli.Flag{
		&cli.StringFlag{
			Name:  "context",
			Usage: "Select the context to use in this command (devnet, testnet or mainnet)",
		},
	}, common.GlobalFlags...),
	Action: func(cCtx *cli.Context) error {
		// Get logger
		logger := common.LoggerFromContext(cCtx)

		// Check for flagged contextName
		contextName := cCtx.String("context")

		// Set path for context yaml
		var err error
		var contextJSON []byte
		if contextName == "" {
			contextJSON, contextName, err = common.LoadDefaultRawContext()
		} else {
			contextJSON, contextName, err = common.LoadRawContext(contextName)
		}
		if err != nil {
			return fmt.Errorf("failed to load context: %w", err)
		}

		// Prevent runs when context is not devnet
		if contextName != devnet.DEVNET_CONTEXT {
			cmdParams := reconstructCommandParams(cCtx.Args().Slice())

			return fmt.Errorf(
				"call failed: `devkit avs call` only available on devnet - please run `devkit avs call --context devnet %s`",
				cmdParams,
			)
		}

		// Print task if verbose
		logger.Debug("Testing AVS tasks...")

		// Check that args are provided
		parts := cCtx.Args().Slice()
		if len(parts) == 0 {
			return fmt.Errorf("no parameters supplied")
		}

		// Run scriptPath from cwd
		const dir = ""

		// Set path for .devkit scripts
		scriptPath := filepath.Join(".devkit", "scripts", "call")

		// Parse the params from the provided args
		paramsMap, err := parseParams(strings.Join(parts, " "))
		if err != nil {
			return err
		}
		paramsJSON, err := json.Marshal(paramsMap)
		if err != nil {
			return err
		}

		// Run init on the template init script
		if _, err := common.CallTemplateScript(cCtx.Context, logger, dir, scriptPath, common.ExpectNonJSONResponse, contextJSON, paramsJSON); err != nil {
			return fmt.Errorf("call failed: %w", err)
		}

		logger.Info("Task execution completed successfully")
		return nil
	},
}
⋮----
// Get logger
⋮----
// Check for flagged contextName
⋮----
// Set path for context yaml
var err error
var contextJSON []byte
⋮----
// Prevent runs when context is not devnet
⋮----
// Print task if verbose
⋮----
// Check that args are provided
⋮----
// Run scriptPath from cwd
const dir = ""
⋮----
// Set path for .devkit scripts
⋮----
// Parse the params from the provided args
⋮----
// Run init on the template init script
⋮----
func parseParams(input string) (map[string]string, error)
⋮----
func reconstructQuotes(val string) string
⋮----
func reconstructCommandParams(argv []string) string
⋮----
var out []string
````

## File: pkg/commands/create_test.go
````go
package commands
⋮----
import (
	"context"

	"errors"
	"fmt"
	"os"
	"path/filepath"
	"testing"
	"time"

	"github.com/Layr-Labs/devkit-cli/config/configs"
	"github.com/Layr-Labs/devkit-cli/config/contexts"
	"github.com/Layr-Labs/devkit-cli/pkg/common"
	"github.com/Layr-Labs/devkit-cli/pkg/common/devnet"
	"github.com/Layr-Labs/devkit-cli/pkg/common/logger"
	"github.com/Layr-Labs/devkit-cli/pkg/template"
	"github.com/Layr-Labs/devkit-cli/pkg/testutils"

	"github.com/stretchr/testify/assert"
	"github.com/urfave/cli/v2"
)
⋮----
"context"
⋮----
"errors"
"fmt"
"os"
"path/filepath"
"testing"
"time"
⋮----
"github.com/Layr-Labs/devkit-cli/config/configs"
"github.com/Layr-Labs/devkit-cli/config/contexts"
"github.com/Layr-Labs/devkit-cli/pkg/common"
"github.com/Layr-Labs/devkit-cli/pkg/common/devnet"
"github.com/Layr-Labs/devkit-cli/pkg/common/logger"
"github.com/Layr-Labs/devkit-cli/pkg/template"
"github.com/Layr-Labs/devkit-cli/pkg/testutils"
⋮----
"github.com/stretchr/testify/assert"
"github.com/urfave/cli/v2"
⋮----
const contractsBasePath = ".devkit/contracts"
⋮----
func TestCreateCommand(t *testing.T)
⋮----
// Create config/config.yaml in current directory
⋮----
// Create config/context/devnet.yaml in current directory
⋮----
// Override default directory
⋮----
// Override Action for testing
⋮----
// Check if directory exists
⋮----
// Create project dir
⋮----
// Create contracts directory for testing
⋮----
// Load the current config
⋮----
// Test template URL lookup
⋮----
// Create config.yaml
⋮----
// Test cases
⋮----
// Verify file exists
⋮----
// Verify contracts directory exists
⋮----
// Test 3: Project exists (trying to create same project again)
⋮----
// Test 4: Test build after project creation
⋮----
// Create a mock Devkit in the contracts directory
⋮----
// Create build script
⋮----
// Change to project directory to test build
⋮----
// Test creating a project with mock template URLs
func TestCreateCommand_WithTemplates(t *testing.T)
⋮----
// Mock template URLs similar to what would be in the config
⋮----
// Create project directory structure
⋮----
// Create main directory and contracts directory
⋮----
// Verify the structure
⋮----
// Log (for test purposes only)
⋮----
func TestCreateCommand_ContextCancellation(t *testing.T)
````

## File: pkg/commands/create.go
````go
package commands
⋮----
import (
	"bytes"
	"fmt"
	"io/fs"
	"os"
	"os/exec"
	"path/filepath"
	"strings"

	project "github.com/Layr-Labs/devkit-cli"
	"github.com/Layr-Labs/devkit-cli/config"
	"github.com/Layr-Labs/devkit-cli/config/configs"
	"github.com/Layr-Labs/devkit-cli/config/contexts"
	"github.com/Layr-Labs/devkit-cli/pkg/common"
	"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
	progresslogger "github.com/Layr-Labs/devkit-cli/pkg/common/logger"
	"github.com/Layr-Labs/devkit-cli/pkg/template"

	"github.com/urfave/cli/v2"
	"gopkg.in/yaml.v3"
)
⋮----
"bytes"
"fmt"
"io/fs"
"os"
"os/exec"
"path/filepath"
"strings"
⋮----
project "github.com/Layr-Labs/devkit-cli"
"github.com/Layr-Labs/devkit-cli/config"
"github.com/Layr-Labs/devkit-cli/config/configs"
"github.com/Layr-Labs/devkit-cli/config/contexts"
"github.com/Layr-Labs/devkit-cli/pkg/common"
"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
progresslogger "github.com/Layr-Labs/devkit-cli/pkg/common/logger"
"github.com/Layr-Labs/devkit-cli/pkg/template"
⋮----
"github.com/urfave/cli/v2"
"gopkg.in/yaml.v3"
⋮----
// CreateCommand defines the "create" command
var CreateCommand = &cli.Command{
	Name:      "create",
	Usage:     "Initializes a new AVS project scaffold (Hourglass model)",
	ArgsUsage: "<project-name> [target-dir]",
	Flags: append([]cli.Flag{
		&cli.StringFlag{
			Name:  "dir",
			Usage: "Set output directory for the new project",
			Value: ".",
		},
		&cli.StringFlag{
			Name:  "lang",
			Usage: "Programming language to generate project files",
			Value: "go",
		},
		&cli.StringFlag{
			Name:  "template",
			Usage: "Specifies AVS architecture (task-based/hourglass, epoch-based, etc.)",
			Value: "hourglass",
		},
		&cli.StringFlag{
			Name:  "template-url",
			Usage: "Direct GitHub base URL to use as template (overrides templates.yml)",
		},
		&cli.StringFlag{
			Name:  "template-version",
			Usage: "Git ref (tag, commit, branch) for the template",
		},
		&cli.StringFlag{
			Name:  "env",
			Usage: "Chooses the environment (local, testnet, mainnet)",
			Value: "local",
		},
		&cli.BoolFlag{
			Name:  "overwrite",
			Usage: "Force overwrite if project directory already exists",
		},
	}, common.GlobalFlags...),
	Action: func(cCtx *cli.Context) error {
		// exit early if no project name is provided
		if cCtx.NArg() == 0 {
			return fmt.Errorf("project name is required\nUsage: avs create <project-name> [flags]")
		}
		projectName := cCtx.Args().First()
		dest := cCtx.Args().Get(1)

		// get logger
		logger, tracker := common.GetLoggerFromCLIContext(cCtx)

		// use dest from dir flag or positional
		var targetDir string
		if dest != "" {
			targetDir = dest
		} else {
			targetDir = cCtx.String("dir")
		}

		// ensure provided dir is absolute
		targetDir, err := filepath.Abs(filepath.Join(targetDir, projectName))
		if err != nil {
			return fmt.Errorf("failed to resolve absolute path for target directory: %w", err)
		}

		// in verbose mode, detail the situation
		logger.Debug("Creating new AVS project: %s", projectName)
		logger.Debug("Directory: %s", cCtx.String("dir"))
		logger.Debug("Template: %s", cCtx.String("template"))
		logger.Debug("Language: %s", cCtx.String("lang"))
		logger.Debug("Environment: %s", cCtx.String("env"))
		if cCtx.String("template-path") != "" {
			logger.Debug("Template Path: %s", cCtx.String("template-path"))
		}

		// Get template URLs
		mainBaseURL, mainVersion, mainLang, err := getTemplateURLs(cCtx)
		if err != nil {
			return err
		}

		// Create project directories
		if err := createProjectDir(logger, targetDir, cCtx.Bool("overwrite")); err != nil {
			return err
		}

		logger.Debug("Using template: %s", mainBaseURL)
		if mainVersion != "" {
			logger.Info("Template version: %s", mainVersion)
		}

		// Fetch main template
		fetcher := &template.GitFetcher{

			Client: template.NewGitClient(),
			Logger: *progresslogger.NewProgressLogger(
				logger,
				tracker,
			),
			Config: template.GitFetcherConfig{
				Verbose: cCtx.Bool("verbose"),
			},
		}
		if err := fetcher.Fetch(cCtx.Context, mainBaseURL, mainVersion, targetDir); err != nil {
			return fmt.Errorf("failed to fetch template from %s: %w", mainBaseURL, err)
		}

		// Copy DevKit README.md to templates README.md
		readMePath := filepath.Join(targetDir, "README.md")
		readMeTemplate, err := os.ReadFile(readMePath)
		if err != nil {
			logger.Warn("Project README.md is missing: %w", err)
		}
		readMeTemplate = append(readMeTemplate, project.RawReadme...)
		err = os.WriteFile(readMePath, readMeTemplate, 0644)
		if err != nil {
			return fmt.Errorf("failed to write README.md: %w", err)
		}

		// Set path for .devkit scripts
		scriptDir := filepath.Join(".devkit", "scripts")
		scriptPath := filepath.Join(scriptDir, "init")

		// Run init to install deps
		logger.Info("Installing template dependencies\n\n")

		// Run init on the template init script
		if _, err = common.CallTemplateScript(cCtx.Context, logger, targetDir, scriptPath, common.ExpectNonJSONResponse, []byte(mainLang)); err != nil {
			return fmt.Errorf("failed to initialize %s: %w", scriptPath, err)
		}

		// Tidy the logs
		logger.Debug("\nFinalising new project\n\n")

		// Write the example .env file
		err = os.WriteFile(filepath.Join(targetDir, ".env.example"), []byte(config.EnvExample), 0644)
		if err != nil {
			return fmt.Errorf("failed to write .env.example: %w", err)
		}

		// Get app environment for UUID
		appEnv, ok := common.AppEnvironmentFromContext(cCtx.Context)
		if !ok {
			return fmt.Errorf("could not determine application environment")
		}

		// Save the users user_uuid to global config
		if err := common.SaveUserId(appEnv.UserUUID); err != nil {
			return fmt.Errorf("failed to save global settings: %w", err)
		}

		// Get global telemetry preference
		globalTelemetryEnabled, err := common.GetGlobalTelemetryPreference()
		if err != nil {
			// If we can't get global preference, default to false for safety
			logger.Debug("Unable to get global telemetry preference, defaulting to false: %v", err)
		}

		// Use global preference if set, otherwise default to false
		telemetryEnabled := false
		if globalTelemetryEnabled != nil {
			telemetryEnabled = *globalTelemetryEnabled
		}

		// Copy config.yaml to the project directory with UUID and telemetry settings
		if err := copyDefaultConfigToProject(logger, targetDir, projectName, appEnv.ProjectUUID, mainBaseURL, mainVersion, mainLang, telemetryEnabled); err != nil {
			return fmt.Errorf("failed to initialize %s: %w", common.BaseConfig, err)
		}

		// Copies the default keystore json files in the keystores/ directory
		if err := copyDefaultKeystoresToProject(logger, targetDir); err != nil {
			return fmt.Errorf("failed to initialize keystores: %w", err)
		}

		// Copies the default .zeus file in the .zeus/ directory
		if err := copyZeusFileToProject(logger, targetDir); err != nil {
			return fmt.Errorf("failed to initialize .zeus: %w", err)
		}

		// Initialize git repository in the project directory
		if err := initGitRepo(cCtx, targetDir, logger); err != nil {
			logger.Warn("Failed to initialize Git repository in %s: %v", targetDir, err)
		}

		logger.Info("\nProject %s created successfully in %s. Run 'cd %s' to get started.", projectName, targetDir, targetDir)
		return nil
	},
}
⋮----
// exit early if no project name is provided
⋮----
// get logger
⋮----
// use dest from dir flag or positional
var targetDir string
⋮----
// ensure provided dir is absolute
⋮----
// in verbose mode, detail the situation
⋮----
// Get template URLs
⋮----
// Create project directories
⋮----
// Fetch main template
⋮----
// Copy DevKit README.md to templates README.md
⋮----
// Set path for .devkit scripts
⋮----
// Run init to install deps
⋮----
// Run init on the template init script
⋮----
// Tidy the logs
⋮----
// Write the example .env file
⋮----
// Get app environment for UUID
⋮----
// Save the users user_uuid to global config
⋮----
// Get global telemetry preference
⋮----
// If we can't get global preference, default to false for safety
⋮----
// Use global preference if set, otherwise default to false
⋮----
// Copy config.yaml to the project directory with UUID and telemetry settings
⋮----
// Copies the default keystore json files in the keystores/ directory
⋮----
// Copies the default .zeus file in the .zeus/ directory
⋮----
// Initialize git repository in the project directory
⋮----
func getTemplateURLs(cCtx *cli.Context) (string, string, string, error)
⋮----
// If overrides are omitted, get from config
⋮----
// If no baseUrl/version is provided use template defaults
⋮----
func createProjectDir(logger iface.Logger, targetDir string, overwrite bool) error
⋮----
// Check if directory exists and handle overwrite
⋮----
// Create main project directory
⋮----
// copyDefaultConfigToProject copies config to the project directory with updated project name, UUID, and telemetry settings
func copyDefaultConfigToProject(logger iface.Logger, targetDir, projectName, projectUUID string, templateBaseURL, templateVersion string, templatelanguage string, telemetryEnabled bool) error
⋮----
// Create and ensure target config directory exists
⋮----
// Read config.yaml from config embed
⋮----
// Unmarshal the YAML content into a map
var cfg common.Config
⋮----
// Marshal the modified configuration back to YAML
⋮----
// Write the updated config
⋮----
// Copy all context files
⋮----
// copy latest version of context to project for default contexts
⋮----
// Creates a keystores directory with default keystore json files
func copyDefaultKeystoresToProject(logger iface.Logger, targetDir string) error
⋮----
// Construct keystore dest
⋮----
// Create the destination keystore directory
⋮----
// Read files embedded keystore
⋮----
// Write files to destKeystoreDir
⋮----
// Copies the .zeus file to the project directory
func copyZeusFileToProject(logger iface.Logger, targetDir string) error
⋮----
// Destination .zeus file path
⋮----
// Read the embedded zeus config
⋮----
// initGitRepo initializes a new Git repository in the target directory.
func initGitRepo(ctx *cli.Context, targetDir string, logger iface.Logger) error
⋮----
// backup gitmodules before deleting .git
⋮----
// remove the old .git dir
⋮----
// reinstate gitmodules
⋮----
// remove remote origin from config
⋮----
// cleanup submodule backups
⋮----
// write a .gitignore into the new dir
⋮----
// add all changes and commit if identity is set
⋮----
// check for user.name and user.email
⋮----
// skip commit if no identity
⋮----
// backupSubmodules copies .git/modules and .git/config for later restoration
func backupSubmodules(targetDir string) error
⋮----
// backup .git/config
⋮----
// backup .git/modules directory
⋮----
// registerSubmodules restores .git/config and .git/modules for submodule recognition
func registerSubmodules(targetDir string) error
⋮----
// restore .git/config
⋮----
// erstore .git/modules directory
⋮----
// deleteBackup will delete the backup of .git/modules & .git/config
func deleteBackup(targetDir string) error
⋮----
// remove .git_modules_backup dir
⋮----
// remove .git_config_backup file
⋮----
// copyDir is a helper to copy src to dest
func copyDir(src string, dest string) error
⋮----
// ensure parent dir exists
⋮----
// copy file
````

## File: pkg/commands/deploy_actions.go
````go
package commands
⋮----
import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io/fs"
	"maps"
	"math/big"
	"os"
	"path/filepath"
	"strconv"
	"strings"
	"time"

	"github.com/Layr-Labs/crypto-libs/pkg/keystore"
	"github.com/Layr-Labs/devkit-cli/config/configs"
	"github.com/Layr-Labs/devkit-cli/config/contexts"
	"github.com/Layr-Labs/devkit-cli/pkg/common"
	"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
	allocationmanager "github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/AllocationManager"
	keyregistrar "github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/KeyRegistrar"
	ethcommon "github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/crypto"
	"github.com/ethereum/go-ethereum/ethclient"
	"github.com/urfave/cli/v2"
	"golang.org/x/text/cases"
	"golang.org/x/text/language"
	"gopkg.in/yaml.v3"
)
⋮----
"context"
"encoding/json"
"errors"
"fmt"
"io/fs"
"maps"
"math/big"
"os"
"path/filepath"
"strconv"
"strings"
"time"
⋮----
"github.com/Layr-Labs/crypto-libs/pkg/keystore"
"github.com/Layr-Labs/devkit-cli/config/configs"
"github.com/Layr-Labs/devkit-cli/config/contexts"
"github.com/Layr-Labs/devkit-cli/pkg/common"
"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
allocationmanager "github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/AllocationManager"
keyregistrar "github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/KeyRegistrar"
ethcommon "github.com/ethereum/go-ethereum/common"
"github.com/ethereum/go-ethereum/crypto"
"github.com/ethereum/go-ethereum/ethclient"
"github.com/urfave/cli/v2"
"golang.org/x/text/cases"
"golang.org/x/text/language"
"gopkg.in/yaml.v3"
⋮----
type DeployContractTransport struct {
	Name    string
	Address string
	ABI     string
}
⋮----
type DeployContractJson struct {
	Name      string      `json:"name"`
	Address   string      `json:"address"`
	ABI       interface{} `json:"abi"`
⋮----
type ChainInfo struct {
	ChainId int64 `json:"chainId"`
}
⋮----
func StartDeployL1Action(cCtx *cli.Context) error
⋮----
// Get logger
⋮----
// Extract vars
⋮----
// Migrate config
⋮----
// Migrate contexts
⋮----
// Load config for selected context
var cfg *common.ConfigWithContextConfig
⋮----
// Extract context details
⋮----
// Log the action
⋮----
// Fetch EigenLayer addresses using Zeus if requested
⋮----
// Write yaml back to project directory
⋮----
// Get chains node
⋮----
// Deploy the contracts after starting devnet unless skipped
⋮----
// Sleep for 1 second to make sure new context values have been written
⋮----
// Register AVS with EigenLayer
⋮----
// L1 Deployment complete
⋮----
func StartDeployL2Action(cCtx *cli.Context) error
⋮----
var err error
⋮----
// Get operatorSets, check curveType, use contractCaller to check getOperatorSetOwner()
⋮----
// Deploy L2 contracts after transporter has been ran and operatorSetOwner has been set
⋮----
func DeployL1ContractsAction(cCtx *cli.Context) error
⋮----
// Start timing execution runtime
⋮----
// Run scriptPath from cwd
const dir = ""
⋮----
// Set path for .devkit scripts
⋮----
// List of scripts we want to call and curry context through
⋮----
// Get contextName from flag (set from config if missing)
⋮----
// Check for context
⋮----
var yamlPath string
var rootNode, contextNode *yaml.Node
⋮----
// Loop scripts with cloned context
⋮----
// if no Operators are available skip registration
⋮----
// Log the script name that's about to be executed
⋮----
// Clone context node and convert to map
⋮----
// Check context is a map
⋮----
// Parse the provided params
⋮----
// Set path in scriptsDir
⋮----
// Expect a JSON response which we will curry to the next call and later save to context
⋮----
// Merge getOperatorSets result with context provided OperatorSets
⋮----
// Debug provided OperatorSets
⋮----
// Read existing operator_sets from context and normalize to map[id]obj
⋮----
// Normalize new results to map[id]obj
⋮----
// Merge by id - new wins
⋮----
// Convert back to []interface{} sorted by numeric id
⋮----
// Write back as array
⋮----
// Convert to node for merge
⋮----
// Merge output into original context node
⋮----
// Create output .json files for each of the deployed contracts
⋮----
var contractsList []DeployContractTransport
⋮----
// Get the chainId
⋮----
// Title line to split these logs from the main body for easy identification
⋮----
// Write yaml back to project directory
⋮----
// Measure how long we ran for
⋮----
func DeployL2ContractsAction(cCtx *cli.Context) error
⋮----
// Check if docker is running, else try to start it
⋮----
// Set context/default if missing
⋮----
func CheckOperatorSetOwnerIsSet(cCtx *cli.Context, envCtx common.ChainContextConfig, l2ChainCfg common.ChainConfig, client *ethclient.Client, logger iface.Logger) error
⋮----
// Collect AVS address
⋮----
// For each OperatorSets check if the transport has happened yet
⋮----
// Collect appropriate CertVerifier based on curveType
var certVerifierAddr string
⋮----
// Pass certVerifierAddr to contractCaller
⋮----
// Attempt to get owner from appropriate certVerifier
var owner ethcommon.Address
⋮----
// Test to make sure the transporter has ran before deploying to L2
⋮----
// Throw error if any of the operatorSets has not been registered yet
⋮----
func UpdateAVSMetadataAction(cCtx *cli.Context, logger iface.Logger) error
⋮----
func SetAVSRegistrarAction(cCtx *cli.Context, logger iface.Logger) error
⋮----
var registrarAddr ethcommon.Address
⋮----
func CreateAVSOperatorSetsAction(cCtx *cli.Context, logger iface.Logger) error
⋮----
func RegisterOperatorsToEigenLayerFromConfigAction(cCtx *cli.Context, logger iface.Logger) error
⋮----
func RegisterOperatorsToAvsFromConfigAction(cCtx *cli.Context, logger iface.Logger) error
⋮----
func FetchZeusAddressesAction(cCtx *cli.Context) error
⋮----
// Update the context with the fetched addresses
⋮----
func extractContractOutputs(cCtx *cli.Context, context string, contractsList []DeployContractTransport, chainId string) error
⋮----
// Push contract artefacts to ./contracts/outputs
⋮----
// Convert chainId to int
⋮----
// For each contract extract details and produce json file in outputs/<context>/<contract.name>.json
⋮----
// Skip storing artefacts if values are missing
⋮----
// Read the ABI file
⋮----
// if abi is missing then we cannot write outputs, skip to next entry
⋮----
// Temporary struct to pick only the "abi" field from the artifact
var abi struct {
			ABI interface{} `json:"abi"`
		}
⋮----
// Check if provided abi is valid
⋮----
// Build the output struct
⋮----
// Marshal with indentation
⋮----
// Write to ./contracts/outputs/<context>/<name>.json
⋮----
// ConfigureOpSetCurveType
func ConfigureOpSetCurveTypeAction(cCtx *cli.Context, logger iface.Logger) error
⋮----
// For each created operator set, configure the curve type
⋮----
// Determine the curve type constant
var curveTypeValue uint8
⋮----
// Default to BN254 if not specified
⋮----
// Check current curveType - throw if we are attempting to change it
⋮----
// Configure the curve type
⋮----
func CreateGenerationReservationAction(cCtx *cli.Context, logger iface.Logger) error
⋮----
// Wait 1 block
⋮----
// Create reservations for each opset
⋮----
// Select appropriate table calculator address
var tableCalculatorAddr string
⋮----
// Create reservation against appropriate TableCalculator
⋮----
func RegisterKeyInKeyRegistrarAction(cCtx *cli.Context, logger iface.Logger) error
⋮----
// Bind to keyRegistrar
⋮----
// Tx signer (EOA): hex string private key
⋮----
// Build the caller
⋮----
krAddr, // key registrar
⋮----
// We need the parsed *ecdsa.PrivateKey for ECDSA signing and address derivation
⋮----
// Discover curve type
⋮----
// keyData = 20-byte address
⋮----
// EIP-712 digest from contract
⋮----
// 65-byte r||s||v with v in {27,28}
⋮----
// Load BN254 key for this set
var blsKeystorePath, blsKeystorePassword string
⋮----
// Ensure [32]byte for the BLS signer
var digest [32]byte
````

## File: pkg/commands/deploy.go
````go
package commands
⋮----
import (
	"github.com/Layr-Labs/devkit-cli/pkg/common"
	"github.com/urfave/cli/v2"
)
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common"
"github.com/urfave/cli/v2"
⋮----
// DeployCommand defines the "deploy" command
var DeployCommand = &cli.Command{
	Name:  "deploy",
	Usage: "Deploy AVS components to specified network",
	Subcommands: []*cli.Command{
		{
			Name:  "contracts",
			Usage: "Deploy contracts to specified network",
			Subcommands: []*cli.Command{
				{
					Name:  "l1",
					Usage: "Deploy L1 contracts to specified network",
					Flags: append([]cli.Flag{
						&cli.StringFlag{
							Name:  "context",
							Usage: "Select the context to use in this command (devnet, testnet or mainnet)",
						},
						&cli.BoolFlag{
							Name:  "skip-setup",
							Usage: "Skip AVS setup steps (metadata update, registrar setup, etc.) after contract deployment",
							Value: false,
						},
						&cli.BoolFlag{
							Name:  "use-zeus",
							Usage: "Use Zeus CLI to fetch l1(*) and l2(*) core addresses",
							Value: true,
						},
					}, common.GlobalFlags...),
					Action: StartDeployL1Action,
				},
				{
					Name:  "l2",
					Usage: "Deploy L2 contracts to specified network",
					Flags: append([]cli.Flag{
						&cli.StringFlag{
							Name:  "context",
							Usage: "Select the context to use in this command (devnet, testnet or mainnet)",
						},
					}, common.GlobalFlags...),
					Action: StartDeployL2Action,
				},
			},
		},
	},
}
````

## File: pkg/commands/devnet_actions_test.go
````go
package commands
⋮----
import (
	"os"
	"path/filepath"
	"strings"
	"testing"

	"github.com/Layr-Labs/devkit-cli/pkg/common"
	"github.com/stretchr/testify/require"
)
⋮----
"os"
"path/filepath"
"strings"
"testing"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common"
"github.com/stretchr/testify/require"
⋮----
func TestLoadECDSAKeysFromKeystores(t *testing.T)
⋮----
// Test operator configurations
⋮----
// No keystore - use plaintext
⋮----
// No keystore paths - should use plaintext key
⋮----
// Test first operator with no keystore
⋮----
// Test second operator with non-existent keystore file
⋮----
// Test third operator with no keystore
⋮----
// Test operator with no key at all
⋮----
// Test operator with keystore path but no password - should use plaintext
⋮----
// No password provided
⋮----
func TestMixedBLSAndECDSAOperators(t *testing.T)
⋮----
// Create test directory and keystore files
⋮----
// Change to test directory
⋮----
// Test mixed operator configuration
⋮----
// No ECDSA keystore - uses plaintext
⋮----
// Use the actual embedded ECDSA keystore content (encrypted with "testpass")
⋮----
// Create BLS keystore (simplified for testing)
⋮----
// Write keystores
⋮----
// Test first operator can load ECDSA key from keystore
⋮----
// Verify BLS keystore also exists
⋮----
// Test second operator uses plaintext ECDSA
⋮----
// Verify BLS keystore exists
⋮----
func TestECDSAKeyNormalization(t *testing.T)
⋮----
// The function returns without 0x prefix
````

## File: pkg/commands/devnet_actions.go
````go
package commands
⋮----
import (
	"context"
	"crypto/rand"
	"encoding/binary"
	"encoding/hex"
	"errors"
	"fmt"
	"log"
	"math/big"
	"os"
	"os/exec"
	"os/signal"
	"path/filepath"
	"strconv"
	"strings"
	"sync"
	"syscall"
	"time"

	"github.com/Layr-Labs/devkit-cli/config/configs"
	"github.com/Layr-Labs/devkit-cli/config/contexts"
	"github.com/Layr-Labs/devkit-cli/pkg/common"
	"github.com/Layr-Labs/devkit-cli/pkg/common/devnet"
	"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
	ethkeystore "github.com/ethereum/go-ethereum/accounts/keystore"
	ethcommon "github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/crypto"
	"github.com/ethereum/go-ethereum/ethclient"
	"github.com/urfave/cli/v2"
)
⋮----
"context"
"crypto/rand"
"encoding/binary"
"encoding/hex"
"errors"
"fmt"
"log"
"math/big"
"os"
"os/exec"
"os/signal"
"path/filepath"
"strconv"
"strings"
"sync"
"syscall"
"time"
⋮----
"github.com/Layr-Labs/devkit-cli/config/configs"
"github.com/Layr-Labs/devkit-cli/config/contexts"
"github.com/Layr-Labs/devkit-cli/pkg/common"
"github.com/Layr-Labs/devkit-cli/pkg/common/devnet"
"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
ethkeystore "github.com/ethereum/go-ethereum/accounts/keystore"
ethcommon "github.com/ethereum/go-ethereum/common"
"github.com/ethereum/go-ethereum/crypto"
"github.com/ethereum/go-ethereum/ethclient"
"github.com/urfave/cli/v2"
⋮----
func StartDevnetAction(cCtx *cli.Context) error
⋮----
// Check if docker is running, else try to start it
⋮----
return err // propagate the cancellation directly
⋮----
// Get logger
⋮----
// Extract vars
⋮----
// Migrate config
⋮----
// Migrate contexts
⋮----
// Load config for selected context
var config *common.ConfigWithContextConfig
⋮----
// Prevent runs when context is not devnet
⋮----
// Load the context nodes
⋮----
// Extract context details
⋮----
// Fetch EigenLayer addresses using Zeus if requested
⋮----
// Write yaml back to project directory
⋮----
// Start timer
⋮----
// Docker-compose for anvil devnet
⋮----
// Error if the l1ForkUrl has not been modified
⋮----
// Error if the l2ForkUrl has not been modified
⋮----
// Ensure fork URL uses appropriate Docker host for container environments
⋮----
// Get the l1 block_time from env/config
⋮----
// Get the l2 block_time from env/config
⋮----
// Get the l1 chain_id from env/config
⋮----
// Get the l2 chain_id from env/config
⋮----
// Append config defined details to chainArgs for l1
⋮----
// Append config defined details to chainArgs for l2
⋮----
// Run docker compose up for anvil devnet
⋮----
// On cancel, stop the containers if we're not skipping deployContracts/avsRun and we're not persisting
⋮----
// Use background context to avoid cancellation issues during cleanup
⋮----
// Construct RPC url to pass to scripts for l1 and l2
⋮----
// Get chains node
⋮----
// Update RPC URLs for L1 chain
⋮----
// Update RPC URLs for L2 chain
⋮----
// Write yaml back to project directory
⋮----
// Sleep for 4 second to ensure the devnet is fully started
⋮----
// Fund the wallets defined in config on L1
⋮----
// Fund the wallets defined in config on L2
⋮----
// Fund stakers with strategy tokens
⋮----
var tokenAddresses []string
var tokenErr error
⋮----
// Sleep for 1 second to make sure wallets are funded
⋮----
// Deploy the contracts after starting devnet unless skipped
⋮----
// Check if docker is running, else try to start it
⋮----
// Call deploy L1 action within devnet context
⋮----
// Sleep for 1 second to make sure new context values have been written
⋮----
// Create a context that cancels on Ctrl-C (SIGINT) or docker/systemd stop (SIGTERM)
⋮----
// Set up waitGroup to handle bg scheduler
var wg sync.WaitGroup
⋮----
// Run Transport against schedule - exit when AVSRun exits
⋮----
// Post initial stake roots to L1
⋮----
// Shallow-copy cli.Context so that ScheduleTransport sees the new ctx
⋮----
// Run scheduler in the background
⋮----
// Sleep for 2 seconds
⋮----
// Deploy L2 contracts only if L1 contracts were also deployed
⋮----
// Start offchain AVS components after starting devnet and deploying contracts unless skipped
⋮----
// Wait for the scheduler and close on interrupt
⋮----
case <-ctx.Done(): // user interrupt -> stop scheduler, exit
case <-done: // scheduler ended on its own -> exit
⋮----
func StopDevnetAction(cCtx *cli.Context) error
⋮----
// Read flags
⋮----
// Should we stop all?
⋮----
// Get all running containers
⋮----
// Check if any of the args are provided
⋮----
// Stop both L1 and L2 containers
⋮----
// Stop only L1 container matching the port
⋮----
// Stop only L2 container matching the port
⋮----
// Stop both L1 and L2 containers for the project found on this port
⋮----
// Load config
var err error
var config *common.ConfigWithContextConfig
⋮----
// Stop both L1 and L2 containers
⋮----
func ListDevnetContainersAction(cCtx *cli.Context) error
⋮----
func DepositIntoStrategiesAction(cCtx *cli.Context, logger iface.Logger) error
⋮----
var cfg *common.ConfigWithContextConfig
var err error
⋮----
func DelegateToOperatorsAction(cCtx *cli.Context, logger iface.Logger) error
⋮----
// Load config according to provided contextName
⋮----
func extractHostPort(portStr string) string
⋮----
func registerOperatorEL(cCtx *cli.Context, operatorAddress string, logger iface.Logger) error
⋮----
var operatorPrivateKey string
var foundOperator bool
⋮----
// Try to load the ECDSA key
⋮----
func registerOperatorAVS(cCtx *cli.Context, logger iface.Logger, operatorAddress string, operatorSetID uint32, payloadHex string) error
⋮----
func depositIntoStrategy(cCtx *cli.Context, stakerSpec common.StakerSpec, logger iface.Logger) error
⋮----
func delegateToOperator(cCtx *cli.Context, stakerSpec common.StakerSpec, operator ethcommon.Address, logger iface.Logger) error
⋮----
// After depositing, delegate to the operator
// Extract the private key of the operator we are delegating to in order to create an approval signature
⋮----
// expiry is 10 minutes from now
⋮----
// generate a random salt
⋮----
// Create the approval signature
⋮----
func ModifyAllocationsAction(cCtx *cli.Context, logger iface.Logger) error
⋮----
// Load ECDSA key for operator
⋮----
func modifyAllocations(cCtx *cli.Context, operatorAddress string, operatorPrivateKey string, logger iface.Logger) error
⋮----
// Find the operator in config
var targetOperator *common.OperatorSpec
⋮----
// Check deployed operator sets from context
⋮----
// For each allocation in the operator config
⋮----
// For each operator set allocation within this allocation
⋮----
// Check if this operator set ID exists in  deployed operator_sets and contains this strategy
var strategyFound bool
⋮----
// Check if this operator set contains the strategy we're allocating to
⋮----
// Convert operatorSetID string to uint32
⋮----
// Build strategies array from matched operator set
⋮----
// Parse allocation amount to uint64
⋮----
func SetAllocationDelayAction(cCtx *cli.Context, logger iface.Logger) error
⋮----
// Instead of mining blocks(because it's infeasible for 126000 blocks(for mainnet) or 30 on sepolia), use anvil_setStorageAt to bypass ALLOCATION_CONFIGURATION_DELAY
// We need to manipulate the storage that tracks when allocation delays were set for each operator by modifying
// the effectBlock field in the AllocationDelayInfo struct.
⋮----
// For each operator, modify their AllocationDelayInfo struct
// Ref https://github.com/Layr-Labs/eigenlayer-contracts/blob/c08c9e849c27910f36f3ab746f3663a18838067f/src/contracts/core/AllocationManagerStorage.sol#L63
⋮----
// Calculate storage slot for _allocationDelayInfo mapping
// For mapping(address => struct), storage slot = keccak256(abi.encode(key, slot))
⋮----
// Define struct fields
var (
			delay        uint32 = 0                    // rightmost 4 bytes
			isSet        byte   = 0x00                 // 1 byte before delay
			pendingDelay uint32 = 0                    // 4 bytes before isSet
			effectBlock  uint32 = uint32(currentBlock) // 4 bytes before pendingDelay
⋮----
delay        uint32 = 0                    // rightmost 4 bytes
isSet        byte   = 0x00                 // 1 byte before delay
pendingDelay uint32 = 0                    // 4 bytes before isSet
effectBlock  uint32 = uint32(currentBlock) // 4 bytes before pendingDelay
⋮----
// Create a 32-byte array (filled with zeros)
⋮----
// Offset starts from the right
⋮----
// Set delay (4 bytes)
⋮----
// Set isSet (1 byte)
⋮----
// Set pendingDelay (4 bytes)
⋮----
// Set effectBlock (4 bytes)
⋮----
var setStorageResult interface{}
⋮----
func WhitelistChainIdInCrossRegistryAction(cCtx *cli.Context, logger iface.Logger) error
⋮----
// Skip this call if funding is disabled
⋮----
// whitelist l1 chain id in cross registry
⋮----
// whitelist l2 chain id in cross registry
⋮----
// stopContainerByPort stops a specific container (L1 or L2) running on the given port
func stopContainerByPort(cCtx *cli.Context, log iface.Logger, targetPort int, containerType string)
⋮----
// Check if this is the right container type (l1 or l2)
⋮----
(containerType == devnet.L1_CONTAINER_TYPE && !strings.Contains(containerName, devnet.L1_CONTAINER_TYPE) && !strings.Contains(containerName, devnet.L2_CONTAINER_TYPE)) { // fallback for old naming
⋮----
// stopBothContainersByPort stops both L1 and L2 containers for the project found on the given port
func stopBothContainersByPort(cCtx *cli.Context, log iface.Logger, targetPort int)
⋮----
projectsToStop := make(map[string]bool) // Track projects we've already stopped
⋮----
// Extract project name from container name
var projectName string
⋮----
// Fallback for old naming convention
⋮----
// If we haven't stopped this project yet, stop both L1 and L2 containers
⋮----
// loadOperatorECDSAKey loads an operator's ECDSA private key from keystore or plaintext
func loadOperatorECDSAKey(operator common.OperatorSpec) (string, error)
⋮----
// Check if ECDSA keystore is configured
⋮----
// Load from keystore
⋮----
// Fall back to plaintext key
````

## File: pkg/commands/devnet_test.go
````go
package commands
⋮----
import (
	"context"
	"net"
	"os"
	"os/exec"
	"path/filepath"
	"strconv"
	"strings"
	"testing"
	"time"

	"github.com/Layr-Labs/devkit-cli/pkg/common/devnet"
	"github.com/Layr-Labs/devkit-cli/pkg/testutils"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"github.com/urfave/cli/v2"
)
⋮----
"context"
"net"
"os"
"os/exec"
"path/filepath"
"strconv"
"strings"
"testing"
"time"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common/devnet"
"github.com/Layr-Labs/devkit-cli/pkg/testutils"
⋮----
"github.com/stretchr/testify/assert"
"github.com/stretchr/testify/require"
"github.com/urfave/cli/v2"
⋮----
// TestDevnetPortAvailability tests port availability checking
func TestDevnetPortAvailability(t *testing.T)
⋮----
// Find a free port
⋮----
// Port should be available after closing
⋮----
// Create a new listener on the same port
⋮----
// Port should not be available when occupied
⋮----
// TestDevnetPortConflictDetection tests port conflict detection without starting containers
func TestDevnetPortConflictDetection(t *testing.T)
⋮----
// Find an available port, then occupy it
⋮----
// Create test app
⋮----
return assert.AnError // Simulate port conflict error
⋮----
// Test with occupied port should fail
⋮----
// Clean up
⋮----
// TestDevnetConfigurationLoading tests configuration loading without starting containers
func TestDevnetConfigurationLoading(t *testing.T)
⋮----
// Create temporary project directory
⋮----
// Change to project directory
⋮----
// Test that we can load the devnet configuration
⋮----
// File should exist after creating AVS project
⋮----
// Test reading the configuration
⋮----
// Basic validation that it contains expected content
⋮----
// TestDevnetEnvironmentVariables tests environment variable handling
func TestDevnetEnvironmentVariables(t *testing.T)
⋮----
// Save original environment
⋮----
// Restore original environment
⋮----
// Test setting environment variables
⋮----
// TestDevnetCommandFlags tests command line flag parsing
func TestDevnetCommandFlags(t *testing.T)
⋮----
// Test flag values
⋮----
// TestDevnetDockerComposeGeneration tests Docker compose file generation
func TestDevnetDockerComposeGeneration(t *testing.T)
⋮----
// Test that we can generate the docker-compose file
⋮----
// File should exist
⋮----
// Read and validate content
⋮----
// TestDevnetRPCURLGeneration tests RPC URL generation
func TestDevnetRPCURLGeneration(t *testing.T)
⋮----
// TestDevnetContainerNames tests container name generation
func TestDevnetContainerNames(t *testing.T)
⋮----
// TestDevnetStopCommand tests the stop command logic
func TestDevnetStopCommand(t *testing.T)
⋮----
// Mock stop action - just validate flags are parsed correctly
⋮----
// Stop all containers
⋮----
// Stop specific containers based on ports
⋮----
// Test stop with specific ports
⋮----
// Test stop all
⋮----
// TestDevnetContextCancellation tests context cancellation handling
func TestDevnetContextCancellation(t *testing.T)
⋮----
// Simulate a long-running operation that should be cancelled
⋮----
return assert.AnError // Should not reach here
⋮----
// Cancel after a short delay
⋮----
// TestDevnetContainerStatusCheck tests container status checking without starting containers
func TestDevnetContainerStatusCheck(t *testing.T)
⋮----
// This test checks that the container status check command works
⋮----
// Command should succeed (even if no containers exist)
⋮----
// Output should be empty or contain container info
⋮----
// If containers exist, they should have devkit-devnet in the name
⋮----
// TestDevnetFlagValidation tests flag validation
func TestDevnetFlagValidation(t *testing.T)
⋮----
shouldError: false, // Should be handled by port availability check
⋮----
shouldError: false, // Should use defaults
⋮----
// Basic validation
````

## File: pkg/commands/devnet.go
````go
package commands
⋮----
import (
	"github.com/Layr-Labs/devkit-cli/pkg/common"
	"github.com/urfave/cli/v2"
)
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common"
"github.com/urfave/cli/v2"
⋮----
// DevnetCommand defines the "devnet" command
var DevnetCommand = &cli.Command{
	Name:  "devnet",
	Usage: "Manage local AVS development network (Docker-based)",
	Subcommands: []*cli.Command{
		{
			Name:  "start",
			Usage: "Starts Docker containers and deploys local contracts",
			Flags: append([]cli.Flag{
				&cli.StringFlag{
					Name:  "context",
					Usage: "Select the context to use in this command (devnet, testnet or mainnet)",
				},
				&cli.BoolFlag{
					Name:  "reset",
					Usage: "Wipe and restart the devnet from scratch",
				},
				&cli.StringFlag{
					Name:  "fork",
					Usage: "Fork from a specific chain (e.g. Base, OP)",
				},
				&cli.BoolFlag{
					Name:  "headless",
					Usage: "Run without showing logs or interactive TUI",
				},
				&cli.IntFlag{
					Name:  "l1-port",
					Usage: "Specify a custom port for local devnet L1",
					Value: 8545,
				},
				&cli.IntFlag{
					Name:  "l2-port",
					Usage: "Specify a custom port for local devnet L2",
					Value: 9545,
				},
				&cli.BoolFlag{
					Name:  "skip-avs-run",
					Usage: "Skip starting offchain AVS components",
					Value: false,
				},
				&cli.BoolFlag{
					Name:  "skip-transporter",
					Usage: "Skip starting/submitting Stake Root via transporter",
					Value: false,
				},
				&cli.BoolFlag{
					Name:  "skip-deploy-contracts",
					Usage: "Skip deploying contracts and only start local devnet",
					Value: false,
				},
				&cli.BoolFlag{
					Name:  "skip-setup",
					Usage: "Skip AVS setup steps (metadata update, registrar setup, etc.) after contract deployment",
					Value: false,
				},
				&cli.BoolFlag{
					Name:  "use-zeus",
					Usage: "Use Zeus CLI to fetch l1(sepolia) and l2(base sepolia) core addresses",
					Value: false,
				},
				&cli.BoolFlag{
					Name:  "persist",
					Usage: "Persist devnet containers unless stop is used explicitly",
					Value: false,
				},
			}, common.GlobalFlags...),
			Action: StartDevnetAction,
		},
		{
			Name:  "deploy-contracts",
			Usage: "Deploy all L1/L2 and AVS contracts to devnet",
			Flags: []cli.Flag{
				&cli.StringFlag{
					Name:  "context",
					Usage: "Select the context to use in this command (devnet, testnet or mainnet)",
				},
			},
			Action: DeployL1ContractsAction,
		},
		{
			Name:  "stop",
			Usage: "Stops and removes all containers and resources",
			Flags: []cli.Flag{
				&cli.StringFlag{
					Name:  "context",
					Usage: "Select the context to use in this command (devnet, testnet or mainnet)",
				},
				&cli.BoolFlag{
					Name:  "all",
					Usage: "Stop all running devnet containers",
					Value: true,
				},
				&cli.StringFlag{
					Name:  "project.name",
					Usage: "Stop containers associated with the given project name",
				},
				&cli.IntFlag{
					Name:  "l1-port",
					Usage: "Stop only the L1 container running on the specified port",
				},
				&cli.IntFlag{
					Name:  "l2-port",
					Usage: "Stop only the L2 container running on the specified port",
				},
			},
			Action: StopDevnetAction,
		},
		{
			Name:   "list",
			Usage:  "Lists all running devkit devnet containers with their ports",
			Action: ListDevnetContainersAction,
		},
		// TODO: Surface the following actions as separate commands:
		// - update-avs-metadata: Updates the AVS metadata URI on the devnet
		// - set-avs-registrar: Sets the AVS registrar address on the devnet
		// - create-avs-operator-sets: Creates AVS operator sets on the devnet
		// - register-operators-from-config: Registers operators defined in config to Eigenlayer and the AVS on the devnet
	},
}
⋮----
// TODO: Surface the following actions as separate commands:
// - update-avs-metadata: Updates the AVS metadata URI on the devnet
// - set-avs-registrar: Sets the AVS registrar address on the devnet
// - create-avs-operator-sets: Creates AVS operator sets on the devnet
// - register-operators-from-config: Registers operators defined in config to Eigenlayer and the AVS on the devnet
````

## File: pkg/commands/release_actions.go
````go
package commands
⋮----
import (
	"context"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"math/big"
	"os"
	"os/exec"
	"path/filepath"
	"strconv"
	"strings"
	"time"

	"github.com/Layr-Labs/devkit-cli/pkg/common"
	"github.com/Layr-Labs/devkit-cli/pkg/common/artifact"
	"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
	releasemanager "github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/ReleaseManager"
	ethcommon "github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/ethclient"
	"github.com/urfave/cli/v2"
	"gopkg.in/yaml.v3"
)
⋮----
"context"
"encoding/hex"
"encoding/json"
"fmt"
"math/big"
"os"
"os/exec"
"path/filepath"
"strconv"
"strings"
"time"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common"
"github.com/Layr-Labs/devkit-cli/pkg/common/artifact"
"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
releasemanager "github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/ReleaseManager"
ethcommon "github.com/ethereum/go-ethereum/common"
"github.com/ethereum/go-ethereum/ethclient"
"github.com/urfave/cli/v2"
"gopkg.in/yaml.v3"
⋮----
func publishReleaseAction(cCtx *cli.Context) error
⋮----
// Get values from flags
⋮----
// Get build artifact from context first to read registry URL and version
var err error
var cfg *common.ConfigWithContextConfig
⋮----
// Extract context details
⋮----
// Validate AVS address
⋮----
// Check if metadata URI is set for any operator set before proceeding
⋮----
// first time publishing, version is empty
⋮----
// Validate upgradeByTime is in the future
⋮----
// Call release.sh script to check if image has changed
⋮----
// Get registry from flag or context
⋮----
// Execute release script with version and registry
⋮----
// Add environment variable for context
⋮----
// Capture stdout to get the operator set mapping JSON
⋮----
// Script returned non-zero exit code, meaning image has changed
⋮----
// Parse the operator set mapping JSON from script output
⋮----
// Publish releases for each operator set
⋮----
// Only increment version after successful publishing
⋮----
// Update version in context
⋮----
// processOperatorSets processes each operator set and publishes releases on chain
func processOperatorSetsAndPublishReleaseOnChain(
	cCtx *cli.Context,
	logger iface.Logger,
	contextName string,
	operatorSetMapping map[string]OperatorSetRelease,
	avs string,
	upgradeByTime int64,
	registry string,
	version string,
) error
⋮----
// Create OCI artifact builder
⋮----
// Get AVS name from context for artifact naming
⋮----
// Get AVS name from project configuration
⋮----
// Create OCI artifact for runtime spec
⋮----
// Create and push OCI artifact
⋮----
// Update context with digest
⋮----
// Convert digest to bytes32
⋮----
// Create artifact for this operator set
⋮----
func incrementVersion(version string) (string, error)
⋮----
// version is a int
⋮----
// checkMetadataURIExists checks if metadata URI is set for at least one operator set
func checkMetadataURIExists(logger iface.Logger, contextName string, cfg *common.ConfigWithContextConfig, avsAddress string) error
⋮----
// Get L1 chain config
⋮----
// Connect to L1
⋮----
// Get AVS private key
⋮----
// Get contract addresses
⋮----
// Create contract caller
⋮----
// Check metadata URI for common operator sets (0 and 1)
⋮----
func publishReleaseToReleaseManagerAction(
	ctx context.Context,
	logger iface.Logger,
	contextName string,
	avs string,
	operatorSetId uint32,
	upgradeByTime int64,
	artifacts []releasemanager.IReleaseManagerTypesArtifact,
) error
⋮----
// Load config according to provided contextName
⋮----
// Trim 0x
⋮----
// setReleaseMetadataURIAction handles the "release uri" subcommand
func setReleaseMetadataURIAction(cCtx *cli.Context) error
⋮----
// Get AVS address from flag or context
var avsAddress string
⋮----
// Set release metadata URI
⋮----
// hexStringToBytes32 converts a hex string (like "sha256:abc123...") to [32]byte
func hexStringToBytes32(hexStr string) ([32]byte, error)
⋮----
var result [32]byte
⋮----
// Remove "sha256:" prefix if present
⋮----
// Decode hex string
⋮----
// Ensure we have exactly 32 bytes
⋮----
// parseOperatorSetMapping parses the JSON output from the release script
func parseOperatorSetMapping(jsonOutput string) (map[string]OperatorSetRelease, error)
⋮----
// Parse the JSON structure: {"0": {"digest": "...", "registry": "...", "runtimeSpec": "..."}, "1": {...}}
var releases map[string]OperatorSetRelease
⋮----
// Validate that we have at least one operator set
⋮----
// updateContextWithDigest updates the context YAML file with the digest after successful release
func updateContextWithDigest(contextName, digest string) error
⋮----
// Load the context yaml file
⋮----
// Get the root node (first content node)
⋮----
// Get the context section
⋮----
// Get or create artifacts section
⋮----
// Update digest field
⋮----
// Write the updated yaml back to file
⋮----
// updateContextWithVersion updates the context YAML file with the new version
func updateContextWithVersion(contextName, version string) error
⋮----
var yamlPath string
var rootNode, contextNode *yaml.Node
⋮----
// Get or create artifact section
⋮----
// Update version field
````

## File: pkg/commands/release.go
````go
package commands
⋮----
import (
	"github.com/Layr-Labs/devkit-cli/pkg/common"
	"github.com/urfave/cli/v2"
)
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common"
"github.com/urfave/cli/v2"
⋮----
// OperatorSetRelease represents the data for each operator set
type OperatorSetRelease struct {
	Digest      string `json:"digest"`
	Registry    string `json:"registry"`
	RuntimeSpec string `json:"runtimeSpec,omitempty"` // YAML content of the runtime spec
}
⋮----
RuntimeSpec string `json:"runtimeSpec,omitempty"` // YAML content of the runtime spec
⋮----
// ReleaseCommand defines the "release" command
var ReleaseCommand = &cli.Command{
	Name:  "release",
	Usage: "Manage AVS releases and artifacts",
	Subcommands: []*cli.Command{
		{
			Name:  "publish",
			Usage: "Publish a new AVS release",
			Flags: append(common.GlobalFlags, []cli.Flag{
				&cli.StringFlag{
					Name:  "context",
					Usage: "Select the context to use in this command (devnet, testnet or mainnet)",
				},
				&cli.Int64Flag{
					Name:     "upgrade-by-time",
					Usage:    "Unix timestamp by which the upgrade must be completed",
					Required: true,
				},
				&cli.StringFlag{
					Name:  "registry",
					Usage: "Registry to use for the release. If not provided, will use registry from context",
				},
			}...),
			Action: publishReleaseAction,
		},
		{
			Name:  "uri",
			Usage: "Set release metadata URI for an operator set",
			Flags: append(common.GlobalFlags, []cli.Flag{
				&cli.StringFlag{
					Name:  "context",
					Usage: "Select the context to use in this command (devnet, testnet or mainnet)",
				},
				&cli.StringFlag{
					Name:     "metadata-uri",
					Usage:    "Metadata URI to set for the release",
					Required: true,
				},
				&cli.UintFlag{
					Name:     "operator-set-id",
					Usage:    "Operator set ID",
					Required: true,
				},
				&cli.StringFlag{
					Name:  "avs-address",
					Usage: "AVS address (if not provided, will use from context)",
				},
			}...),
			Action: setReleaseMetadataURIAction,
		},
	},
}
````

## File: pkg/commands/run_test.go
````go
package commands
⋮----
import (
	"context"
	"errors"
	"os"
	"path/filepath"
	"testing"
	"time"

	"github.com/Layr-Labs/devkit-cli/pkg/common/logger"
	"github.com/Layr-Labs/devkit-cli/pkg/testutils"

	"github.com/stretchr/testify/assert"
	"github.com/urfave/cli/v2"
)
⋮----
"context"
"errors"
"os"
"path/filepath"
"testing"
"time"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common/logger"
"github.com/Layr-Labs/devkit-cli/pkg/testutils"
⋮----
"github.com/stretchr/testify/assert"
"github.com/urfave/cli/v2"
⋮----
func setupRunApp(t *testing.T) (tmpDir string, restoreWD func(), app *cli.App, noopLogger *logger.NoopLogger)
⋮----
func TestRunCommand_ExecutesSuccessfully(t *testing.T)
⋮----
// Check that the expected message was logged
⋮----
func TestRunCommand_MissingDevnetYAML(t *testing.T)
⋮----
func TestRunCommand_MalformedYAML(t *testing.T)
⋮----
func TestRunCommand_MissingScript(t *testing.T)
⋮----
func TestRunCommand_ScriptReturnsNonZero(t *testing.T)
⋮----
func TestRunCommand_ScriptOutputsInvalidJSON(t *testing.T)
⋮----
// Check that the output was logged
⋮----
func TestRunCommand_Cancelled(t *testing.T)
````

## File: pkg/commands/run.go
````go
package commands
⋮----
import (
	"fmt"
	"path/filepath"

	"github.com/Layr-Labs/devkit-cli/pkg/common"
	"github.com/Layr-Labs/devkit-cli/pkg/common/devnet"

	"github.com/urfave/cli/v2"
)
⋮----
"fmt"
"path/filepath"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common"
"github.com/Layr-Labs/devkit-cli/pkg/common/devnet"
⋮----
"github.com/urfave/cli/v2"
⋮----
// RunCommand defines the "run" command
var RunCommand = &cli.Command{
	Name:  "run",
	Usage: "Start offchain AVS components",
	Flags: append([]cli.Flag{
		&cli.StringFlag{
			Name:  "context",
			Usage: "Select the context to use in this command (devnet, testnet or mainnet)",
		},
	}, common.GlobalFlags...),
	Action: func(cCtx *cli.Context) error {
		// Invoke and return AVSRun
		return AVSRun(cCtx)
	},
}
⋮----
// Invoke and return AVSRun
⋮----
func AVSRun(cCtx *cli.Context) error
⋮----
// Get logger
⋮----
// Check for flagged contextName
⋮----
// Set path for context yaml
var err error
var contextJSON []byte
⋮----
// Prevent runs when context is not devnet
⋮----
// Print task if verbose
⋮----
// Load the config fetch templateLanguage
⋮----
// Pull template language from config
⋮----
// Log the type of project being ran
⋮----
// Run the script from root of project dir
// (@TODO (GD): this should always be the root of the project, but we need to do this everywhere (ie reading ctx/config etc))
const dir = ""
⋮----
// Set path for .devkit scripts
⋮----
// Run init on the template init script
````

## File: pkg/commands/telemetry.go
````go
package commands
⋮----
import (
	"fmt"

	"github.com/Layr-Labs/devkit-cli/pkg/common"
	"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
	"github.com/urfave/cli/v2"
)
⋮----
"fmt"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common"
"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
"github.com/urfave/cli/v2"
⋮----
// TelemetryCommand allows users to manage telemetry settings
var TelemetryCommand = &cli.Command{
	Name:  "telemetry",
	Usage: "Manage telemetry settings",
	Flags: []cli.Flag{
		&cli.BoolFlag{
			Name:  "enable",
			Usage: "Enable telemetry collection",
		},
		&cli.BoolFlag{
			Name:  "disable",
			Usage: "Disable telemetry collection",
		},
		&cli.BoolFlag{
			Name:  "status",
			Usage: "Show current telemetry status",
		},
		&cli.BoolFlag{
			Name:  "global",
			Usage: "Apply setting globally (affects all projects and global default)",
		},
	},
	Action: func(cCtx *cli.Context) error {
		logger := common.LoggerFromContext(cCtx)

		enable := cCtx.Bool("enable")
		disable := cCtx.Bool("disable")
		status := cCtx.Bool("status")
		global := cCtx.Bool("global")

		// Validate flags
		if (enable && disable) || (!enable && !disable && !status) {
			return fmt.Errorf("specify exactly one of --enable, --disable, or --status")
		}

		if status {
			return showTelemetryStatus(logger, global)
		}

		if enable {
			return enableTelemetry(logger, global)
		}

		if disable {
			return disableTelemetry(logger, global)
		}

		return nil
	},
}
⋮----
// Validate flags
⋮----
// displayGlobalTelemetryStatus shows the global telemetry preference status
func displayGlobalTelemetryStatus(logger iface.Logger, prefix string) error
⋮----
func showTelemetryStatus(logger iface.Logger, global bool) error
⋮----
// Show effective status (project takes precedence over global)
⋮----
// If not in a project, show global preference
⋮----
// Check if we're in a project and if there's a project-specific setting
⋮----
// Also show global setting for context
⋮----
// Not in project, show global
⋮----
func enableTelemetry(logger iface.Logger, global bool) error
⋮----
// Set global preference only
⋮----
// Set project-specific preference
⋮----
func disableTelemetry(logger iface.Logger, global bool) error
````

## File: pkg/commands/test_test.go
````go
package commands
⋮----
import (
	"context"
	"errors"
	"os"
	"path/filepath"
	"testing"
	"time"

	"github.com/Layr-Labs/devkit-cli/pkg/common/logger"
	"github.com/Layr-Labs/devkit-cli/pkg/testutils"

	"github.com/stretchr/testify/assert"
	"github.com/urfave/cli/v2"
)
⋮----
"context"
"errors"
"os"
"path/filepath"
"testing"
"time"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common/logger"
"github.com/Layr-Labs/devkit-cli/pkg/testutils"
⋮----
"github.com/stretchr/testify/assert"
"github.com/urfave/cli/v2"
⋮----
func setupTestApp(t *testing.T) (tmpDir string, restoreWD func(), app *cli.App, noopLogger *logger.NoopLogger)
⋮----
// Create the test script
⋮----
func TestTestCommand_ExecutesSuccessfully(t *testing.T)
⋮----
// Check that the expected message was logged
⋮----
func TestTestCommand_MissingDevnetYAML(t *testing.T)
⋮----
func TestTestCommand_MissingScript(t *testing.T)
⋮----
func TestTestCommand_ScriptReturnsNonZero(t *testing.T)
⋮----
func TestTestCommand_Cancelled(t *testing.T)
````

## File: pkg/commands/test.go
````go
package commands
⋮----
import (
	"fmt"
	"path/filepath"

	"github.com/Layr-Labs/devkit-cli/pkg/common"

	"github.com/urfave/cli/v2"
)
⋮----
"fmt"
"path/filepath"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common"
⋮----
"github.com/urfave/cli/v2"
⋮----
// TestCommand defines the "test" command
var TestCommand = &cli.Command{
	Name:  "test",
	Usage: "Run AVS tests",
	Flags: append([]cli.Flag{
		&cli.StringFlag{
			Name:  "context",
			Usage: "Select the context to use in this command (devnet, testnet or mainnet)",
		},
	}, common.GlobalFlags...),
	Action: func(cCtx *cli.Context) error {
		// Invoke and return AVSTest
		return AVSTest(cCtx)
	},
}
⋮----
// Invoke and return AVSTest
⋮----
func AVSTest(cCtx *cli.Context) error
⋮----
// Get logger
⋮----
// Print task if verbose
⋮----
// Run the script from root of project dir
const dir = ""
⋮----
// Set path for .devkit scripts
⋮----
// Check for flagged contextName
⋮----
// Set path for context yaml
var err error
var contextJSON []byte
⋮----
// Run test on the template test script
````

## File: pkg/commands/transporter_test.go
````go
package commands
⋮----
import (
	"context"
	"testing"
	"time"

	"github.com/robfig/cron/v3"
	"github.com/stretchr/testify/require"
	"github.com/urfave/cli/v2"
)
⋮----
"context"
"testing"
"time"
⋮----
"github.com/robfig/cron/v3"
"github.com/stretchr/testify/require"
"github.com/urfave/cli/v2"
⋮----
func TestScheduleTransport_InvalidCron(t *testing.T)
⋮----
// attempt to schedule with invalid cron expression
⋮----
func TestScheduleTransportWithParserAndFunc_Executes(t *testing.T)
⋮----
// pass in second aware parser
⋮----
// success
⋮----
func TestScheduleTransportWithParserAndFunc_ContextCancellationStopsScheduler(t *testing.T)
⋮----
// pass in minute aware parser
⋮----
// cancel early to test shutdown
⋮----
// wait and confirm function was not called
````

## File: pkg/commands/transporter.go
````go
package commands
⋮----
import (
	"context"
	"crypto/ecdsa"
	"fmt"
	"log"
	"math/big"
	"strconv"
	"strings"
	"time"

	"github.com/Layr-Labs/crypto-libs/pkg/bn254"
	"github.com/Layr-Labs/devkit-cli/pkg/common"
	"github.com/Layr-Labs/devkit-cli/pkg/common/devnet"
	"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
	"github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/ICrossChainRegistry"
	"github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/IOperatorTableUpdater"
	"github.com/urfave/cli/v2"
	"gopkg.in/yaml.v3"

	"github.com/Layr-Labs/multichain-go/pkg/blsSigner"
	"github.com/Layr-Labs/multichain-go/pkg/chainManager"
	"github.com/Layr-Labs/multichain-go/pkg/logger"
	"github.com/Layr-Labs/multichain-go/pkg/operatorTableCalculator"
	"github.com/Layr-Labs/multichain-go/pkg/transport"
	"github.com/Layr-Labs/multichain-go/pkg/txSigner"

	"github.com/ethereum/go-ethereum"
	"github.com/ethereum/go-ethereum/accounts/abi"
	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	ethcommon "github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/common/hexutil"
	"github.com/ethereum/go-ethereum/crypto"
	"github.com/ethereum/go-ethereum/ethclient"
	"github.com/ethereum/go-ethereum/rpc"

	"github.com/robfig/cron/v3"
)
⋮----
"context"
"crypto/ecdsa"
"fmt"
"log"
"math/big"
"strconv"
"strings"
"time"
⋮----
"github.com/Layr-Labs/crypto-libs/pkg/bn254"
"github.com/Layr-Labs/devkit-cli/pkg/common"
"github.com/Layr-Labs/devkit-cli/pkg/common/devnet"
"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
"github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/ICrossChainRegistry"
"github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/IOperatorTableUpdater"
"github.com/urfave/cli/v2"
"gopkg.in/yaml.v3"
⋮----
"github.com/Layr-Labs/multichain-go/pkg/blsSigner"
"github.com/Layr-Labs/multichain-go/pkg/chainManager"
"github.com/Layr-Labs/multichain-go/pkg/logger"
"github.com/Layr-Labs/multichain-go/pkg/operatorTableCalculator"
"github.com/Layr-Labs/multichain-go/pkg/transport"
"github.com/Layr-Labs/multichain-go/pkg/txSigner"
⋮----
"github.com/ethereum/go-ethereum"
"github.com/ethereum/go-ethereum/accounts/abi"
"github.com/ethereum/go-ethereum/accounts/abi/bind"
ethcommon "github.com/ethereum/go-ethereum/common"
"github.com/ethereum/go-ethereum/common/hexutil"
"github.com/ethereum/go-ethereum/crypto"
"github.com/ethereum/go-ethereum/ethclient"
"github.com/ethereum/go-ethereum/rpc"
⋮----
"github.com/robfig/cron/v3"
⋮----
type G1Point struct{ X, Y *big.Int }
type BN254OperatorInfo struct {
	Pubkey  G1Point
	Weights []*big.Int
}
⋮----
type Receipt struct {
	Status          hexutil.Uint64 `json:"status"`
	TransactionHash ethcommon.Hash `json:"transactionHash"`
}
⋮----
var TransportCommand = &cli.Command{
	Name:  "transport",
	Usage: "Transport Stake Root to L1",
	Subcommands: []*cli.Command{
		{
			Name:  "run",
			Usage: "Immediately transport stake root to L1",
			Flags: append([]cli.Flag{
				&cli.StringFlag{
					Name:  "context",
					Usage: "Select the context to use in this command (devnet, testnet or mainnet)",
				},
			}, common.GlobalFlags...),
			Action: func(cCtx *cli.Context) error {
				// Initial transport will take ownership and set a locally controller generator
				return Transport(cCtx, true)
			},
		},
		{
			Name:  "verify",
			Usage: "Verify that the context active_stake_roots match onchain state",
			Flags: append([]cli.Flag{
				&cli.StringFlag{
					Name:  "context",
					Usage: "Select the context to use in this command (devnet, testnet or mainnet)",
				},
			}, common.GlobalFlags...),
			Action: VerifyActiveStakeTableRoots,
		},
		{
			Name:  "schedule",
			Usage: "Schedule transport stake root to L1",
			Flags: append([]cli.Flag{
				&cli.StringFlag{
					Name:  "context",
					Usage: "Select the context to use in this command (devnet, testnet or mainnet)",
				},
				&cli.StringFlag{
					Name:  "cron-expr",
					Usage: "Specify a custom schedule to override config schedule",
					Value: "",
				},
			}, common.GlobalFlags...),
			Action: func(cCtx *cli.Context) error {
				// Extract vars
				contextName := cCtx.String("context")

				// Load config according to provided contextName
				var err error
				var cfg *common.ConfigWithContextConfig
				if contextName == "" {
					cfg, contextName, err = common.LoadDefaultConfigWithContextConfig()
				} else {
					cfg, contextName, err = common.LoadConfigWithContextConfig(contextName)
				}
				if err != nil {
					return fmt.Errorf("failed to load configurations for whitelist chain id in cross registry: %w", err)
				}

				// Extract context details
				envCtx, ok := cfg.Context[contextName]
				if !ok {
					return fmt.Errorf("context '%s' not found in configuration", contextName)
				}

				// Extract cron-expr from flag or context
				schedule := cCtx.String("cron-expr")
				if schedule == "" {
					schedule = envCtx.Transporter.Schedule
				}

				// Invoke ScheduleTransport with configured schedule
				err = ScheduleTransport(cCtx, schedule)
				if err != nil {
					return fmt.Errorf("ScheduleTransport failed: %v", err)
				}

				// Keep process alive
				select {}
			},
		},
	},
}
⋮----
// Initial transport will take ownership and set a locally controller generator
⋮----
// Extract vars
⋮----
// Load config according to provided contextName
var err error
var cfg *common.ConfigWithContextConfig
⋮----
// Extract context details
⋮----
// Extract cron-expr from flag or context
⋮----
// Invoke ScheduleTransport with configured schedule
⋮----
// Keep process alive
⋮----
func Transport(cCtx *cli.Context, initialRun bool) error
⋮----
// Get a raw zap logger to pass to operatorTableCalculator and transport
⋮----
// Get logger
⋮----
// Construct and collate all roots
⋮----
// Extract vars
⋮----
// Load config according to provided contextName
var cfg *common.ConfigWithContextConfig
⋮----
// Extract context details
⋮----
// Debug logging to check what's loaded
⋮----
// Get the values from env/config
⋮----
// Unpack chain config from context
⋮----
// Unpack chain details from chain configs
⋮----
// Attempt to advance blocks
⋮----
// Wait for one block to be mined
⋮----
// Check if private key is empty
⋮----
// Sync chains so that timestamps match on both anvil instances (for devnet)
⋮----
// Check if BLS private key is empty
⋮----
// On initial devnet Transport we take ownership of contracts and configure generator to use context keys
⋮----
// Transfer ownership to our context configured PrivateKey
⋮----
// Construct registry caller
⋮----
// Get chains from contract
⋮----
// Iterate and collect all roots for all chainIds
⋮----
// Ignore non devnet chainIds if checking devnet
⋮----
// Use provided OperatorTableUpdaterTransactor address
⋮----
// Update owner on OperatorTableUpdaterTransactor address
⋮----
// Read the current generator (avs,id) from OperatorTableUpdater
⋮----
// Move to a new unconfigered operatorSet
⋮----
// Connect to an ethClient to construct contractCaller
⋮----
// Construct contractCaller with KeyRegistrar
⋮----
// Derive BN254 keys from the hex string (no keystore files needed)
⋮----
// Extract key details
⋮----
// Encode keyData for KeyRegistrar from the PUBLIC key
⋮----
// Configure the curve type
⋮----
l1RpcUrl, // KeyRegistrar is on L1
⋮----
// EOA/operator address you want to register for this OperatorSet
⋮----
// Build the message hash per registrar rules and sign with BLS private key
⋮----
// Ensure [32]byte input to the signer
var digest [32]byte
⋮----
// Sign with BN254 key
⋮----
// Convert G1 point to abi.encode(uint256 x, uint256 y)
⋮----
// Register BLS key in KeyRegistrar with raw bytes
⋮----
// Get the certificateVerifier Addr on this chain
⋮----
// Update generator using the transporter BLS key
⋮----
// Perform global table transport
⋮----
// Provide chainIds to ignore for Devnets
var ignoreChainIds = []*big.Int{}
⋮----
// Transport globalTableRoot
⋮----
// Collect the provided roots
⋮----
// Write the roots to context (each time we process one)
⋮----
// Sleep before transporting AVSStakeTable
⋮----
// Fetch OperatorSets for AVSStakeTable transport
⋮----
// log success
⋮----
// Record StakeTableRoots in the context for later retrieval
func WriteStakeTableRootsToContext(cCtx *cli.Context, roots map[uint64][32]byte) error
⋮----
// Get flag selected contextName
⋮----
// Check for context
var yamlPath string
var rootNode, contextNode *yaml.Node
var err error
⋮----
// Navigate context to arrive at context.transporter.active_stake_roots
⋮----
// insert key-value into transporter
⋮----
// Force block style on activeRootsNode to prevent collapse
⋮----
// Construct index of the context stored roots
⋮----
// Append roots to the context
⋮----
// Check for entry for this chainId
⋮----
// Update stake_root field in existing node
⋮----
// If stake_root missing, insert it
⋮----
// Append new entry
⋮----
// Write the context back to disk
⋮----
// Get all stake table roots from appropriate OperatorTableUpdaters
func GetOnchainStakeTableRoots(cCtx *cli.Context) (map[uint64][32]byte, error)
⋮----
// Discover and collate all roots
⋮----
// Get a new chainManager
⋮----
// Configure L1 chain
⋮----
// Configure L2 chain
⋮----
// Construct registry caller
⋮----
// Get chains from contract
⋮----
// Iterate and collect all roots for all chainIds
⋮----
// Ignore non devnet chainIds if checking devnet
⋮----
// Use provided OperatorTableUpdaterTransactor address
⋮----
// Get the OperatorTableUpdaterTransactor at the provided chains address
⋮----
// Collect the current root from provided chainId
⋮----
// Collect the provided root
⋮----
// Print discovered roots
⋮----
// Verify the context stored ActiveStakeRoots match onchain state
func VerifyActiveStakeTableRoots(cCtx *cli.Context) error
⋮----
var contextNode *yaml.Node
⋮----
var chainID uint64
var rootBytes [32]byte
var foundCID, foundRoot bool
⋮----
// Fetch actual roots
⋮----
// Compare expectations to actual (use actual as map source to allow user to move chainId if req)
⋮----
// Schedule transport using the default parser and transportFunc
func ScheduleTransport(cCtx *cli.Context, cronExpr string) error
⋮----
// Validate cron expression
⋮----
// Run the scheduler with transport func
⋮----
// Schedule transport using custom parser and transportFunc
func ScheduleTransportWithParserAndFunc(cCtx *cli.Context, cronExpr string, parser cron.Parser, transportFunc func()) error
⋮----
// Call Transport() against cronExpr
⋮----
// Start the scheduled runner
⋮----
// If the Context closes, stop the scheduler
⋮----
// Impersonate the current owner and call *.transferOwnership(newOwner).
func transferOwnership(logger iface.Logger, rpcURL string, proxy ethcommon.Address, privateKey string)
⋮----
// Transporter private key - used to derive the new owner address
⋮----
// ABI with owner() and transferOwnership(address)
⋮----
// Read current owner
⋮----
// Impersonate the current owner and fund it
⋮----
// Pack transferOwnership(newOwner)
⋮----
// Send tx via eth_sendTransaction from the impersonated owner to the proxy
⋮----
var txHash ethcommon.Hash
⋮----
// Await for tx receipt
⋮----
// Verify
⋮----
// Impersonate the AVS and call KeyRegistrar.configureOperatorSet(opSet, curveType)
func configureCurveTypeAsAVS(
	ctx context.Context,
	logger iface.Logger,
	rpcURL string,
	keyRegistrar ethcommon.Address,
	avs ethcommon.Address,
	opSetId uint32,
	curveType uint8,
) error
⋮----
// Connect to provided RPC
⋮----
// Build minimal ABI
⋮----
// Tuple type to match (address avs, uint32 id)
type opSetT struct {
		Avs ethcommon.Address
		Id  uint32
	}
⋮----
// Read current curve type; skip if already set
⋮----
var out string
⋮----
// Send configureOperatorSet from the AVS
⋮----
// Construct tx to send from the AVS
⋮----
// Await receipt
⋮----
// Read BN254CertificateVerifier from TableUpdater
func readBN254CertificateVerifier(ctx context.Context, logger iface.Logger, rpcURL string, addr ethcommon.Address) ethcommon.Address
⋮----
// Minimal ABI: bn254CertificateVerifier() -> address bn254CertificateVerifier
⋮----
// Call calculateOperatorInfoLeaf via a bound contract
func calcOperatorInfoLeaf(
	ctx context.Context,
	logger iface.Logger,
	backend bind.ContractCaller,
	addr ethcommon.Address,
	info BN254OperatorInfo,
) ([32]byte, error)
⋮----
var outs []any
⋮----
var leaf [32]byte
⋮----
// Read OperatorTableUpdater.getGenerator() as a typed struct
func getGenerator(
	ctx context.Context,
	logger iface.Logger,
	cm chainManager.IChainManager,
	chainId *big.Int,
	tableUpdaterAddr ethcommon.Address,
) (IOperatorTableUpdater.OperatorSet, error)
⋮----
// Minimal ABI: getGenerator() -> (address avs, uint32 id)
⋮----
// Pack calldata
⋮----
// Do the eth_call
⋮----
// Use Outputs.Unpack, then cast
⋮----
// The decoder created an anonymous struct with the right fields
⋮----
// Update the generator onchain to verify against context provided BLS key
func updateGeneratorFromContext(
	ctx context.Context,
	logger iface.Logger,
	cm chainManager.IChainManager,
	chainId *big.Int,
	tableUpdaterAddr ethcommon.Address,
	certificateVerifierAddr ethcommon.Address,
	txSign txSigner.ITransactionSigner,
	blsHex string,
	gen IOperatorTableUpdater.OperatorSet,
) error
⋮----
// Derive BLS pubkey
⋮----
// One-operator info
⋮----
// Calculate the root leaf
⋮----
func readOwner(ctx context.Context, logger iface.Logger, c *rpc.Client, ab abi.ABI, proxy ethcommon.Address) ethcommon.Address
⋮----
func impersonate(ctx context.Context, logger iface.Logger, c *rpc.Client, who ethcommon.Address)
⋮----
var ok bool
⋮----
// Fund so it can pay gas
_ = c.CallContext(ctx, &ok, "anvil_setBalance", who.Hex(), "0x56BC75E2D63100000") // 100 ETH
⋮----
func stopImpersonate(ctx context.Context, c *rpc.Client, who ethcommon.Address)
⋮----
func mustABI(logger iface.Logger, s string) abi.ABI
⋮----
func mustKey(logger iface.Logger, hex string) *ecdsa.PrivateKey
⋮----
func mustWaitReceipt(ctx context.Context, logger iface.Logger, c *rpc.Client, h ethcommon.Hash)
⋮----
var receipt Receipt
⋮----
// Get reason
var trace map[string]any
````

## File: pkg/commands/upgrade_test.go
````go
package commands
⋮----
import (
	"archive/tar"
	"bytes"
	"compress/gzip"
	"net/http"
	"net/http/httptest"
	"os"
	"path/filepath"
	"testing"

	"github.com/Layr-Labs/devkit-cli/pkg/common/logger"
	"github.com/stretchr/testify/assert"
)
⋮----
"archive/tar"
"bytes"
"compress/gzip"
"net/http"
"net/http/httptest"
"os"
"path/filepath"
"testing"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common/logger"
"github.com/stretchr/testify/assert"
⋮----
func TestUpgrade_PerformUpgrade(t *testing.T)
⋮----
// Create a fake tar.gz containing a single dummy binary file
var buf bytes.Buffer
⋮----
// Start a test server that returns the tarball
⋮----
// Patch the URL builder temporarily (for testing)
⋮----
return ts.URL // fake URL instead of real S3
⋮----
func TestUpgrade_GetLatestVersionFromGitHub(t *testing.T)
⋮----
// Fake GitHub API server
⋮----
// Patch URL to use mock server
````

## File: pkg/commands/upgrade.go
````go
package commands
⋮----
import (
	"archive/tar"
	"compress/gzip"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"os/exec"
	"path/filepath"
	"runtime"
	"strings"

	"github.com/Layr-Labs/devkit-cli/internal/version"
	"github.com/Layr-Labs/devkit-cli/pkg/common"
	"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
	"github.com/urfave/cli/v2"
)
⋮----
"archive/tar"
"compress/gzip"
"encoding/json"
"fmt"
"io"
"net/http"
"os"
"os/exec"
"path/filepath"
"runtime"
"strings"
⋮----
"github.com/Layr-Labs/devkit-cli/internal/version"
"github.com/Layr-Labs/devkit-cli/pkg/common"
"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
"github.com/urfave/cli/v2"
⋮----
// LatestRelease defines the subset of GitHub release fields we care about
type LatestRelease struct {
	TagName      string `json:"tag_name"`
	TargetCommit string `json:"target_commitish"`
}
⋮----
// UpgradeCommand defines the CLI command to upgrade the devkit binary and templates
var UpgradeCommand = &cli.Command{
	Name:  "upgrade",
	Usage: "Upgrade devkit and template",
	Flags: append([]cli.Flag{
		&cli.StringFlag{
			Name:  "version",
			Usage: "Version to upgrade to (e.g. v0.0.8)",
			Value: "latest",
		},
	}, common.GlobalFlags...),
	Action: func(cCtx *cli.Context) error {
		return UpgradeDevkit(cCtx)
	},
}
⋮----
// buildDownloadURL generates the download URL for a specific version and platform
var buildDownloadURL = func(version, arch, distro string) string {
⋮----
// githubReleasesURL points to the latest GitHub release metadata
var githubReleasesURL = func(version string) string {
⋮----
// UpgradeDevkit resolves the latest version if needed and invokes PerformUpgrade to install the new version
func UpgradeDevkit(cCtx *cli.Context) error
⋮----
// Get current version
⋮----
// Get the version to be installed
⋮----
// Default requestedVersion to "latest"
⋮----
// Pull release details from github
⋮----
// Log upgrade
⋮----
// Avoid redundant upgrade
⋮----
// Determine install location
⋮----
// Perform the upgrade and source
⋮----
// PerformUpgrade downloads and installs the target version of the devkit binary.
// It supports both .tar.gz and raw .tar archive formats.
func PerformUpgrade(version, binDir string, logger iface.Logger) error
⋮----
// Detect format by content type and initialize appropriate tar reader
var tr *tar.Reader
⋮----
// Extract all files from the archive into the binDir
⋮----
// Validate and sanitize the archive entry path
⋮----
// GetLatestVersionFromGitHub queries the GitHub releases API and returns the latest tag and commit
func GetLatestVersionFromGitHub(version string) (string, string, error)
⋮----
var data LatestRelease
````

## File: pkg/common/artifact/oci_artifact_test.go
````go
package artifact
⋮----
import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"strings"
	"testing"
	"time"

	ocispec "github.com/opencontainers/image-spec/specs-go/v1"
	"oras.land/oras-go/v2/content/memory"
)
⋮----
"bytes"
"context"
"encoding/json"
"fmt"
"strings"
"testing"
"time"
⋮----
ocispec "github.com/opencontainers/image-spec/specs-go/v1"
"oras.land/oras-go/v2/content/memory"
⋮----
// mockLogger implements iface.Logger for testing
type mockLogger struct {
	messages []string
}
⋮----
func (m *mockLogger) Info(format string, args ...interface
⋮----
func (m *mockLogger) Error(format string, args ...interface
⋮----
func (m *mockLogger) Debug(format string, args ...interface
⋮----
func (m *mockLogger) Warn(format string, args ...interface
⋮----
func (m *mockLogger) Fatal(format string, args ...interface
⋮----
func (m *mockLogger) Title(title string, args ...any)
⋮----
func TestNewOCIArtifactBuilder(t *testing.T)
⋮----
func TestCreateConfigBlob(t *testing.T)
⋮----
// Verify it's valid JSON
var config map[string]interface{}
⋮----
// Check required fields
⋮----
// Check metadata exists
⋮----
// Verify metadata fields
⋮----
func TestAddToStore(t *testing.T)
⋮----
// Verify descriptor
⋮----
// Verify content can be fetched from store
⋮----
func TestComputeRuntimeSpecDigest(t *testing.T)
⋮----
func TestCreateEigenRuntimeArtifact_ManifestStructure(t *testing.T)
⋮----
// Create a test runtime spec
⋮----
// Create in-memory store and simulate the manifest creation
⋮----
// Add config
⋮----
// Add runtime spec
⋮----
// Create manifest
⋮----
// Create manifest map as in the actual implementation
⋮----
// Marshal and verify
⋮----
// Unmarshal to verify structure
var parsedManifest map[string]interface{}
⋮----
// Verify required fields
⋮----
// Verify config
⋮----
// Verify layers
⋮----
// Verify annotations exist
⋮----
func TestCreateEigenRuntimeArtifact_Errors(t *testing.T)
````

## File: pkg/common/artifact/oci_artifact.go
````go
package artifact
⋮----
import (
	"bytes"
	"context"
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"os"
	"time"

	"github.com/Layr-Labs/devkit-cli/internal/version"
	"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
	"github.com/docker/cli/cli/config"
	"github.com/docker/cli/cli/config/credentials"
	"github.com/opencontainers/go-digest"
	ocispec "github.com/opencontainers/image-spec/specs-go/v1"
	"oras.land/oras-go/v2"
	"oras.land/oras-go/v2/content/memory"
	"oras.land/oras-go/v2/registry/remote"
	"oras.land/oras-go/v2/registry/remote/auth"
)
⋮----
"bytes"
"context"
"crypto/sha256"
"encoding/hex"
"encoding/json"
"fmt"
"os"
"time"
⋮----
"github.com/Layr-Labs/devkit-cli/internal/version"
"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
"github.com/docker/cli/cli/config"
"github.com/docker/cli/cli/config/credentials"
"github.com/opencontainers/go-digest"
ocispec "github.com/opencontainers/image-spec/specs-go/v1"
"oras.land/oras-go/v2"
"oras.land/oras-go/v2/content/memory"
"oras.land/oras-go/v2/registry/remote"
"oras.land/oras-go/v2/registry/remote/auth"
⋮----
// OCIArtifactBuilder creates OCI artifacts for EigenRuntime specs
type OCIArtifactBuilder struct {
	logger iface.Logger
}
⋮----
// NewOCIArtifactBuilder creates a new OCI artifact builder
func NewOCIArtifactBuilder(logger iface.Logger) *OCIArtifactBuilder
⋮----
// CreateEigenRuntimeArtifact creates and pushes an OCI artifact containing the runtime spec
// Using oras-go for full OCI artifact support including custom media types and artifactType
//
// This implementation produces an OCI artifact with the following structure:
⋮----
//	{
//	  "schemaVersion": 2,
//	  "mediaType": "application/vnd.oci.image.manifest.v1+json",
//	  "artifactType": "application/vnd.eigenruntime.manifest.v1",
//	  "config": {
//	    "mediaType": "application/vnd.eigenruntime.manifest.config.v1+json",
//	    "digest": "sha256:<config-digest>",
//	    "size": <config-size>
//	  },
//	  "layers": [{
//	    "mediaType": "text/yaml",
//	    "digest": "sha256:<runtime-spec-digest>",
//	    "size": <spec-size>
//	  }],
//	  "annotations": {
//	    "org.opencontainers.image.source": "https://github.com/Layr-Labs/devkit-cli",
//	    "org.opencontainers.image.description": "EigenRuntime specification for <name>",
//	    "org.opencontainers.image.created": "<timestamp>",
//	    "io.eigenruntime.spec.version": "v1"
//	  }
//	}
func (b *OCIArtifactBuilder) CreateEigenRuntimeArtifact(
	runtimeSpec []byte,
	registry string,
	avsName string,
	tag string,
) (string, error)
⋮----
// Construct the full image reference
⋮----
// Create an in-memory store for building the artifact
⋮----
// Create the config JSON
⋮----
// Add config to store
⋮----
// Add runtime spec layer to store
⋮----
// Create the manifest
⋮----
// Create a proper manifest with schemaVersion
// We need to manually construct the JSON to ensure artifactType is preserved
⋮----
// Marshal the manifest
⋮----
// Add manifest to store
⋮----
// Tag the manifest in the memory store so oras.Copy can find it
⋮----
// Parse the repository reference
⋮----
// Set up authentication using Docker's credential store
⋮----
// Try to load Docker config
⋮----
// Return empty credentials for anonymous access
⋮----
// Try 1: Get auth directly from config file
⋮----
// Try 2: If that didn't work and we have a credential store, try the native store
⋮----
// For native store, normalize to the exact key used in GitHub Actions
⋮----
// Convert to oras auth.Credential
⋮----
// Handle token-based auth (e.g., for Docker Hub)
⋮----
// Use HTTPS by default
⋮----
// Push the artifact
⋮----
// Use oras.Copy to push the complete artifact graph from memory store to registry
// This preserves the artifactType and all custom media types in the manifest
// oras.Copy handles:
// - Walking the dependency graph from the manifest
// - Pushing all referenced blobs (config and layers)
// - Pushing the manifest itself with proper media type
// - Tagging the manifest in the registry
⋮----
// addToStore adds content to the memory store and returns its descriptor
func (b *OCIArtifactBuilder) addToStore(ctx context.Context, store *memory.Store, mediaType string, content []byte) (ocispec.Descriptor, error)
⋮----
// Calculate digest
⋮----
// Create descriptor
⋮----
// Push to store
⋮----
// createConfigBlob creates the OCI config JSON blob as specified in the TDD
func (b *OCIArtifactBuilder) createConfigBlob(name, tag string) []byte
⋮----
// TODO: parameterize to template.
⋮----
// This should never happen with the static structure above
⋮----
// getDevkitVersion returns the current DevKit version
func getDevkitVersion() string
⋮----
// ComputeRuntimeSpecDigest computes the SHA256 digest of a runtime spec
func ComputeRuntimeSpecDigest(runtimeSpec []byte) string
````

## File: pkg/common/artifact/README.md
````markdown
# OCI Artifact Package

This package provides functionality for creating and managing OCI (Open Container Initiative) artifacts specifically designed for EigenRuntime specifications. It uses the `oras-go` library to create standards-compliant OCI artifacts with custom media types.

## Overview

The `artifact` package enables DevKit to package EigenRuntime specifications as OCI artifacts, making them distributable through standard container registries like Docker Hub, GitHub Container Registry (GHCR), Amazon ECR, and others.

## Key Features

- **Standards-Compliant OCI Artifacts**: Creates artifacts that fully comply with the OCI specification
- **Custom Media Types**: Supports EigenRuntime-specific media types for configs and layers
- **Registry Authentication**: Integrates with Docker credential helpers for seamless authentication
- **In-Memory Construction**: Uses memory stores for efficient artifact building before pushing

## Architecture

### OCI Artifact Structure

The package creates OCI artifacts with the following manifest structure:

```json
{
  "schemaVersion": 2,
  "mediaType": "application/vnd.oci.image.manifest.v1+json",
  "artifactType": "application/vnd.eigenruntime.manifest.v1",
  "config": {
    "mediaType": "application/vnd.eigenruntime.manifest.config.v1+json",
    "digest": "sha256:<config-digest>",
    "size": <config-size>
  },
  "layers": [{
    "mediaType": "text/yaml",
    "digest": "sha256:<runtime-spec-digest>",
    "size": <spec-size>
  }],
  "annotations": {
    "org.opencontainers.image.source": "https://github.com/Layr-Labs/devkit-cli",
    "org.opencontainers.image.description": "EigenRuntime specification for <name>",
    "org.opencontainers.image.created": "<timestamp>",
    "io.eigenruntime.spec.version": "v1"
  }
}
```

### Config Blob Format

The config blob contains metadata about the EigenRuntime specification:

```json
{
  "formatVersion": "1.0",
  "eigenRuntimeAPIVersion": "v1",
  "kind": "template-type",
  "avsName": "<avs-name>",
  "validationSchema": "https://eigenruntime.io/schemas/template-type/v1/manifest.json",
  "metadata": {
    "createdAt": "2024-01-01T00:00:00Z",
    "releaseVersion": "<release-version>",
    "devkitVersion": "<devkit-version>"
  }
}
```

## Authentication

The package automatically uses Docker's credential helpers for authentication through `auth.DefaultClient`. This means:

1. It will use credentials from `~/.docker/config.json`
2. It supports Docker credential helpers (e.g., `docker-credential-desktop`, `docker-credential-ecr-login`)
3. No manual credential configuration is needed if you're already logged in via `docker login`
4. The DOCKER_CONFIG environment variable is respected if set

To authenticate with a registry, simply use `docker login` before running DevKit:
```bash
docker login ghcr.io
# or
docker login <your-registry>
```

## Troubleshooting

## Inspecting OCI Artifacts

**Important**: Don't use `docker pull` to inspect OCI artifacts, as Docker may transform the manifest for compatibility. Instead, use:

### Using oras CLI:
```bash
# Fetch the manifest
oras manifest fetch ghcr.io/myorg/my-avs:opset-0-v1

# Pull the artifact locally
oras pull ghcr.io/myorg/my-avs:opset-0-v1
```

### Using crane CLI:
```bash
# View the manifest
crane manifest ghcr.io/myorg/my-avs:opset-0-v1 | jq .

# Export the artifact
crane export ghcr.io/myorg/my-avs:opset-0-v1 - | tar -tv
```

These tools preserve the original OCI artifact structure, including the `artifactType` field and proper media types.

## Registry Compatibility

All major registries support OCI artifacts with `artifactType`. However, some registry web UIs may display artifacts differently than their actual stored format:

### Verifying Your Artifact

To see the actual OCI artifact manifest stored in the registry:

```bash
# Use oras to inspect the manifest
oras manifest fetch ghcr.io/myorg/my-avs:tag | jq .

# Or use crane
crane manifest ghcr.io/myorg/my-avs:tag | jq .

# Even docker shows the correct manifest
docker manifest inspect ghcr.io/myorg/my-avs:tag | jq .
```

```json
{
  "schemaVersion": 2,
  "mediaType": "application/vnd.oci.image.manifest.v1+json",
  "artifactType": "application/vnd.eigenruntime.manifest.v1",
  "config": {
    "mediaType": "application/vnd.eigenruntime.manifest.config.v1+json",
    "digest": "sha256:...",
    "size": 323
  },
  "layers": [{
    "mediaType": "text/yaml",
    "digest": "sha256:...",
    "size": 663
  }],
  "annotations": {
    "org.opencontainers.image.source": "https://github.com/Layr-Labs/devkit-cli",
    "org.opencontainers.image.description": "EigenRuntime specification for ...",
    "org.opencontainers.image.created": "2025-01-01T00:00:00Z",
    "io.eigenruntime.spec.version": "v1"
  }
}
```
````

## File: pkg/common/contracts/eigen.go
````go
package contracts
⋮----
const EIGEN_CONTRACT_ABI = `[{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"unwrap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]`
````

## File: pkg/common/contracts/erc20.go
````go
package contracts
⋮----
import (
	"math/big"
	"strings"

	"github.com/ethereum/go-ethereum/accounts/abi"
	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/ethclient"

	crosschainregistry "github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/CrossChainRegistry"
)
⋮----
"math/big"
"strings"
⋮----
"github.com/ethereum/go-ethereum/accounts/abi"
"github.com/ethereum/go-ethereum/accounts/abi/bind"
"github.com/ethereum/go-ethereum/common"
"github.com/ethereum/go-ethereum/ethclient"
⋮----
crosschainregistry "github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/CrossChainRegistry"
⋮----
// Standard ERC20 ABI
const ERC20ABI = `[
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [{"name": "", "type": "string"}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [{"name": "", "type": "string"}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [{"name": "", "type": "uint8"}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [{"name": "", "type": "uint256"}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [{"name": "_owner", "type": "address"}],
		"name": "balanceOf",
		"outputs": [{"name": "balance", "type": "uint256"}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{"name": "_to", "type": "address"},
			{"name": "_value", "type": "uint256"}
		],
		"name": "transfer",
		"outputs": [{"name": "", "type": "bool"}],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{"name": "_from", "type": "address"},
			{"name": "_to", "type": "address"},
			{"name": "_value", "type": "uint256"}
		],
		"name": "transferFrom",
		"outputs": [{"name": "", "type": "bool"}],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{"name": "_spender", "type": "address"},
			{"name": "_value", "type": "uint256"}
		],
		"name": "approve",
		"outputs": [{"name": "", "type": "bool"}],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{"name": "_owner", "type": "address"},
			{"name": "_spender", "type": "address"}
		],
		"name": "allowance",
		"outputs": [{"name": "", "type": "uint256"}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{"indexed": true, "name": "from", "type": "address"},
			{"indexed": true, "name": "to", "type": "address"},
			{"indexed": false, "name": "value", "type": "uint256"}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{"indexed": true, "name": "owner", "type": "address"},
			{"indexed": true, "name": "spender", "type": "address"},
			{"indexed": false, "name": "value", "type": "uint256"}
		],
		"name": "Approval",
		"type": "event"
	}
]`
⋮----
// NewERC20Contract creates a new ERC20 contract instance
func NewERC20Contract(address common.Address, client *ethclient.Client) (*bind.BoundContract, error)
⋮----
// GetERC20ABI returns the parsed ERC20 ABI
func GetERC20ABI() (abi.ABI, error)
⋮----
// PackTransferCall creates the call data for an ERC20 transfer
func PackTransferCall(to common.Address, amount *big.Int) ([]byte, error)
⋮----
// PackAddChainIDsToWhitelistCall creates the call data for CrossChainRegistry addChainIDsToWhitelist
func PackAddChainIDsToWhitelistCall(chainIds []*big.Int, operatorTableUpdaters []common.Address) ([]byte, error)
````

## File: pkg/common/contracts/registry.go
````go
package contracts
⋮----
import (
	"fmt"

	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/ethclient"

	// EigenLayer contract bindings
	allocationmanager "github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/AllocationManager"
	crosschainregistry "github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/CrossChainRegistry"
	delegationmanager "github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/DelegationManager"
	istrategy "github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/IStrategy"
	keyregistrar "github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/KeyRegistrar"
	releasemanager "github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/ReleaseManager"
	strategymanager "github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/StrategyManager"
)
⋮----
"fmt"
⋮----
"github.com/ethereum/go-ethereum/accounts/abi/bind"
"github.com/ethereum/go-ethereum/common"
"github.com/ethereum/go-ethereum/ethclient"
⋮----
// EigenLayer contract bindings
allocationmanager "github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/AllocationManager"
crosschainregistry "github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/CrossChainRegistry"
delegationmanager "github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/DelegationManager"
istrategy "github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/IStrategy"
keyregistrar "github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/KeyRegistrar"
releasemanager "github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/ReleaseManager"
strategymanager "github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/StrategyManager"
⋮----
// ContractType represents different contract types
type ContractType string
⋮----
const (
	AllocationManagerContract        ContractType = "AllocationManager"
	DelegationManagerContract        ContractType = "DelegationManager"
	StrategyManagerContract          ContractType = "StrategyManager"
	StrategyContract                 ContractType = "Strategy"
	ERC20Contract                    ContractType = "ERC20"
	KeyRegistrarContract             ContractType = "KeyRegistrar"
	CrossChainRegistryContract       ContractType = "CrossChainRegistry"
	ReleaseManagerContract           ContractType = "ReleaseManager"
	BN254CertificateVerifierContract ContractType = "BN254CertificateVerifier"
	ECDSACertificateVerifierContract ContractType = "ECDSACertificateVerifier"
)
⋮----
// ContractInfo holds metadata about a contract
type ContractInfo struct {
	Name        string
	Type        ContractType
	Address     common.Address
	Description string
}
⋮----
// ContractRegistry manages contract instances and metadata
type ContractRegistry struct {
	client    *ethclient.Client
	contracts map[ContractType]map[common.Address]*ContractInstance
	metadata  map[common.Address]ContractInfo
}
⋮----
// ContractInstance holds a contract instance with its metadata
type ContractInstance struct {
	Info     ContractInfo
	Instance interface{}
⋮----
// NewContractRegistry creates a new contract registry
func NewContractRegistry(client *ethclient.Client) *ContractRegistry
⋮----
// RegisterContract registers a contract with the registry
func (cr *ContractRegistry) RegisterContract(info ContractInfo) error
⋮----
// Create the contract instance based on type
⋮----
// GetContract retrieves a contract instance by type and address
func (cr *ContractRegistry) GetContract(contractType ContractType, address common.Address) (*ContractInstance, error)
⋮----
// GetAllocationManager returns an AllocationManager instance
func (cr *ContractRegistry) GetAllocationManager(address common.Address) (*allocationmanager.AllocationManager, error)
⋮----
// GetDelegationManager returns a DelegationManager instance
func (cr *ContractRegistry) GetDelegationManager(address common.Address) (*delegationmanager.DelegationManager, error)
⋮----
// GetStrategyManager returns a StrategyManager instance
func (cr *ContractRegistry) GetStrategyManager(address common.Address) (*strategymanager.StrategyManager, error)
⋮----
// GetStrategy returns an IStrategy instance
func (cr *ContractRegistry) GetStrategy(address common.Address) (*istrategy.IStrategy, error)
⋮----
// GetKeyRegistrar returns a KeyRegistrar instance
func (cr *ContractRegistry) GetKeyRegistrar(address common.Address) (*keyregistrar.KeyRegistrar, error)
⋮----
// GetCrossChainRegistry returns a CrossChainRegistry instance
func (cr *ContractRegistry) GetCrossChainRegistry(address common.Address) (*crosschainregistry.CrossChainRegistry, error)
⋮----
// GetERC20 returns an ERC20 bound contract instance
func (cr *ContractRegistry) GetERC20(address common.Address) (*bind.BoundContract, error)
⋮----
// GetReleaseManager returns a ReleaseManager instance
func (cr *ContractRegistry) GetReleaseManager(address common.Address) (*releasemanager.ReleaseManager, error)
⋮----
// ListContracts returns all registered contracts of a specific type
func (cr *ContractRegistry) ListContracts(contractType ContractType) []ContractInfo
⋮----
var contracts []ContractInfo
⋮----
// createContractInstance creates the appropriate contract instance based on type
func (cr *ContractRegistry) createContractInstance(info ContractInfo) (interface
⋮----
// RegistryBuilder helps build a registry with predefined contracts
type RegistryBuilder struct {
	registry *ContractRegistry
}
⋮----
// NewRegistryBuilder creates a new registry builder
func NewRegistryBuilder(client *ethclient.Client) *RegistryBuilder
⋮----
// AddEigenLayerCore adds the core EigenLayer contracts
func (rb *RegistryBuilder) AddEigenLayerCore(
	allocationManagerAddr, delegationManagerAddr, strategyManagerAddr common.Address, keystoreRegistrarAddr common.Address, crossChainRegistryAddr common.Address, releaseManagerAddr common.Address,
) (*RegistryBuilder, error)
⋮----
// Register AllocationManager
⋮----
// Register DelegationManager
⋮----
// Register StrategyManager
⋮----
// AddStrategy adds a strategy contract
func (rb *RegistryBuilder) AddStrategy(address common.Address, name string) (*RegistryBuilder, error)
⋮----
// AddERC20 adds an ERC20 token contract
func (rb *RegistryBuilder) AddERC20(address common.Address, symbol string) (*RegistryBuilder, error)
⋮----
func (rb *RegistryBuilder) AddReleaseManager(address common.Address) (*RegistryBuilder, error)
⋮----
// Build returns the constructed registry
func (rb *RegistryBuilder) Build() *ContractRegistry
````

## File: pkg/common/contracts/steth.go
````go
package contracts
⋮----
const ST_ETH_CONTRACT_ABI = `[{"constant":false,"inputs":[{"name":"_referral","type":"address"}],"name":"submit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"}]`
````

## File: pkg/common/devnet/constants.go
````go
package devnet
⋮----
// Foundry Image Date : 21 April 2025
const FOUNDRY_IMAGE = "ghcr.io/foundry-rs/foundry:stable"
const L1_CHAIN_ARGS = "--gas-limit 140000000 --base-fee 0 --gas-price 1000000 --no-rate-limit"
const L2_CHAIN_ARGS = "--gas-limit 140000000 --base-fee 0 --gas-price 1000000 --no-rate-limit"
⋮----
const FUND_VALUE = "1000000000000000000"
const DEVNET_CONTEXT = "devnet"
const ANVIL_1_KEY = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
const ANVIL_2_KEY = "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d"
⋮----
// Ref https://github.com/Layr-Labs/eigenlayer-contracts/blob/c08c9e849c27910f36f3ab746f3663a18838067f/src/contracts/core/AllocationManagerStorage.sol#L63
const ALLOCATION_DELAY_INFO_SLOT = 155
⋮----
// Curve type constants for KeyRegistrar
const CURVE_TYPE_KEY_REGISTRAR_UNKNOWN = 0
const CURVE_TYPE_KEY_REGISTRAR_ECDSA = 1
const CURVE_TYPE_KEY_REGISTRAR_BN254 = 2
⋮----
const EIGEN_CONTRACT_ADDRESS = "0x3B78576F7D6837500bA3De27A60c7f594934027E"
⋮----
const ST_ETH_TOKEN_ADDRESS = "0x00c71b0fCadE911B2feeE9912DE4Fe19eB04ca56"
const B_EIGEN_TOKEN_ADDRESS = "0x275cCf9Be51f4a6C94aBa6114cdf2a4c45B9cb27"
const STRATEGY_TOKEN_FUNDING_AMOUNT_BY_LARGE_HOLDER_IN_ETH = 1000
⋮----
const DEFAULT_L1_FORK_URL = "https://rpc.sepolia.ethpandaops.io"
const DEFAULT_L2_FORK_URL = "https://base-sepolia.gateway.tenderly.co"
⋮----
const L1_CONTAINER_NAME_PREFIX = "devkit-devnet-l1-"
const L2_CONTAINER_NAME_PREFIX = "devkit-devnet-l2-"
⋮----
const L1_CONTAINER_TYPE = "l1"
const L2_CONTAINER_TYPE = "l2"
⋮----
const DEFAULT_L1_ANVIL_CHAINID = 31337
const DEFAULT_L2_ANVIL_CHAINID = 31338
⋮----
const DEFAULT_L1_ANVIL_RPCURL = "http://localhost:8545"
const DEFAULT_L2_ANVIL_RPCURL = "http://localhost:9545"
````

## File: pkg/common/devnet/embed.go
````go
package devnet
⋮----
import (
	"log"

	"github.com/Layr-Labs/devkit-cli/docker/anvil"
)
⋮----
"log"
⋮----
"github.com/Layr-Labs/devkit-cli/docker/anvil"
⋮----
// WriteEmbeddedArtifacts writes the embedded docker-compose.yaml.
// Returns the paths to the written files.
func WriteEmbeddedArtifacts() (composePath string)
⋮----
var err error
````

## File: pkg/common/devnet/funding.go
````go
package devnet
⋮----
import (
	"context"
	"crypto/ecdsa"
	"fmt"
	"log"
	"math/big"
	"os"
	"strconv"
	"strings"

	devkitcommon "github.com/Layr-Labs/devkit-cli/pkg/common"
	"github.com/Layr-Labs/devkit-cli/pkg/common/contracts"
	"github.com/Layr-Labs/devkit-cli/pkg/common/iface"

	"github.com/ethereum/go-ethereum/accounts/abi"
	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	"github.com/ethereum/go-ethereum/accounts/keystore"

	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/core/types"
	"github.com/ethereum/go-ethereum/crypto"
	"github.com/ethereum/go-ethereum/ethclient"
	"github.com/ethereum/go-ethereum/rpc"
)
⋮----
"context"
"crypto/ecdsa"
"fmt"
"log"
"math/big"
"os"
"strconv"
"strings"
⋮----
devkitcommon "github.com/Layr-Labs/devkit-cli/pkg/common"
"github.com/Layr-Labs/devkit-cli/pkg/common/contracts"
"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
⋮----
"github.com/ethereum/go-ethereum/accounts/abi"
"github.com/ethereum/go-ethereum/accounts/abi/bind"
"github.com/ethereum/go-ethereum/accounts/keystore"
⋮----
"github.com/ethereum/go-ethereum/common"
"github.com/ethereum/go-ethereum/core/types"
"github.com/ethereum/go-ethereum/crypto"
"github.com/ethereum/go-ethereum/ethclient"
"github.com/ethereum/go-ethereum/rpc"
⋮----
// TokenFunding represents a token transfer configuration
type TokenFunding struct {
	TokenName     string         `json:"token_name"`
	HolderAddress common.Address `json:"holder_address"`
	Amount        *big.Int       `json:"amount"`
}
⋮----
// Common Sepolia token holders with large balances - mapped by token address
var DefaultTokenHolders = map[common.Address]TokenFunding{
	common.HexToAddress(ST_ETH_TOKEN_ADDRESS): { // stETH token address
		TokenName:     "stETH",
		HolderAddress: common.HexToAddress("0xC8088abD2FdaF4819230EB0FdA2D9766FDF9F409"),                                    // Large stETH holder
		Amount:        new(big.Int).Mul(big.NewInt(STRATEGY_TOKEN_FUNDING_AMOUNT_BY_LARGE_HOLDER_IN_ETH), big.NewInt(1e18)), // 1000 tokens
	},
	common.HexToAddress(B_EIGEN_TOKEN_ADDRESS): { // bEIGEN token address
		TokenName:     "bEIGEN",
		HolderAddress: common.HexToAddress("0x5f8C207382426D3f7F248E6321Cf93B34e66d6b9"),                                    // Large EIGEN holder that calls unwrap() to get bEIGEN
		Amount:        new(big.Int).Mul(big.NewInt(STRATEGY_TOKEN_FUNDING_AMOUNT_BY_LARGE_HOLDER_IN_ETH), big.NewInt(1e18)), // 1000 tokens
	},
}
⋮----
common.HexToAddress(ST_ETH_TOKEN_ADDRESS): { // stETH token address
⋮----
HolderAddress: common.HexToAddress("0xC8088abD2FdaF4819230EB0FdA2D9766FDF9F409"),                                    // Large stETH holder
Amount:        new(big.Int).Mul(big.NewInt(STRATEGY_TOKEN_FUNDING_AMOUNT_BY_LARGE_HOLDER_IN_ETH), big.NewInt(1e18)), // 1000 tokens
⋮----
common.HexToAddress(B_EIGEN_TOKEN_ADDRESS): { // bEIGEN token address
⋮----
HolderAddress: common.HexToAddress("0x5f8C207382426D3f7F248E6321Cf93B34e66d6b9"),                                    // Large EIGEN holder that calls unwrap() to get bEIGEN
⋮----
// FundStakerWithTokens funds staker with strategy tokens using impersonation
func FundStakerWithTokens(ctx context.Context, ethClient *ethclient.Client, rpcClient *rpc.Client, stakerAddress common.Address, tokenFunding TokenFunding, tokenAddress common.Address, rpcURL string) error
⋮----
// For bEIGEN, we need to call unwrap() on the EIGEN contract first
// to convert EIGEN tokens to bEIGEN tokens
⋮----
// Parse EIGEN unwrap ABI
⋮----
// Start impersonating the token holder for unwrap call
⋮----
// Get gas price
⋮----
// Encode unwrap function call
⋮----
// eth balance of holder address
⋮----
// if holder balance < 0.1 ether, fund it
⋮----
// Send unwrap transaction from impersonated account using RPC for impersonated accounts
var unwrapTxHash common.Hash
⋮----
"gas":      "0x30d40", // 200000 in hex
⋮----
// Wait for unwrap transaction receipt
⋮----
// Stop impersonating for unwrap (we'll impersonate again for transfer)
⋮----
// Get config
⋮----
// Start impersonating the token holder
⋮----
// stake eth to get stETH , call submit(address _referral) with referral as 0 address with ETH value to get stETh back
// create call from abi
⋮----
// Send submit transaction from impersonated account using RPC
var submitTxHash common.Hash
⋮----
// Wait for submit transaction receipt
⋮----
// transfer stETH to staker
⋮----
// Send transfer transaction from impersonated account using RPC
var transferTxHash common.Hash
⋮----
// Wait for transfer transaction receipt
⋮----
// Stop impersonating for transfer
⋮----
// FundStakersWithStrategyTokens funds all stakers with the specified strategy tokens
func FundStakersWithStrategyTokens(cfg *devkitcommon.ConfigWithContextConfig, rpcURL string, tokenAddresses []string) error
⋮----
// Connect to RPC
⋮----
// Fund each staker with each requested token
⋮----
// waitForTransaction waits for a transaction to be mined
func waitForTransaction(ctx context.Context, client *ethclient.Client, txHash common.Hash) (*types.Receipt, error)
⋮----
// If error is "not found", continue waiting
⋮----
// Small delay before retrying
⋮----
// FundWallets sends ETH to a list of addresses
// Only funds wallets with balance < 0.3 ether.
func FundWalletsDevnet(cfg *devkitcommon.ConfigWithContextConfig, rpcURL string) error
⋮----
// All operator keys from [operator]
// We only intend to fund for devnet, so hardcoding to `CONTEXT` is fine
⋮----
var privateKey *ecdsa.PrivateKey
⋮----
// Check if ECDSA keystore is configured
⋮----
// Load from keystore
⋮----
// Fall back to plaintext key
⋮----
var err error
⋮----
// Fund transporter
⋮----
func fundIfNeeded(ethClient *ethclient.Client, to common.Address, fromKey string) error
⋮----
threshold.SetString("300000000000000000", 10) // 0.3 ETH in wei
⋮----
value, _ := new(big.Int).SetString(FUND_VALUE, 10) // 1 ETH in wei
⋮----
// Get the nonce for the sender
⋮----
// Check sender's balance
⋮----
// Calculate total cost (value + gas)
⋮----
nil, // data
⋮----
// Get chain ID
⋮----
// Sign the transaction with the latest signer
⋮----
// Wait for transaction to be mined using bind.WaitMined
⋮----
// GetUnderlyingTokenAddressesFromStrategies extracts all unique underlying token addresses from strategy contracts
func GetUnderlyingTokenAddressesFromStrategies(cfg *devkitcommon.ConfigWithContextConfig, rpcURL string, logger iface.Logger) ([]string, error)
⋮----
// Connect to ETH client
⋮----
// Get EigenLayer contract addresses from config
⋮----
// Create a ContractCaller with proper registry
⋮----
big.NewInt(1), // Chain ID doesn't matter for read operations
⋮----
var tokenAddresses []string
⋮----
// Register and process strategies for all operators
⋮----
// Register strategies from this operator's allocations
⋮----
// Get underlying tokens for each allocation
⋮----
// Call underlyingToken() on the strategy contract using the binding
⋮----
// Add to unique set
````

## File: pkg/common/devnet/getters.go
````go
package devnet
⋮----
import (
	"fmt"
	"os"
	"strconv"

	"github.com/Layr-Labs/devkit-cli/pkg/common"
	"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
)
⋮----
"fmt"
"os"
"strconv"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common"
"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
⋮----
// GetL1DevnetChainArgsOrDefault extracts and formats the chain arguments for devnet.
// Falls back to L1_CHAIN_ARGS constant if value is empty.
func GetL1DevnetChainArgsOrDefault(cfg *common.ConfigWithContextConfig) string
⋮----
args := []string{} // TODO(nova) : Get chain args from config.yaml ?  For now using default
⋮----
// GetL2DevnetChainArgsOrDefault extracts and formats the chain arguments for devnet.
// Falls back to L2_CHAIN_ARGS constant if value is empty.
func GetL2DevnetChainArgsOrDefault(cfg *common.ConfigWithContextConfig) string
⋮----
// GetDevnetChainImageOrDefault returns the devnet chain image,
// falling back to FOUNDRY_IMAGE if not provided.
func GetDevnetChainImageOrDefault(cfg *common.ConfigWithContextConfig) string
⋮----
image := "" // TODO(nova): Get Foundry image from config.yaml ? For now using default
⋮----
func FileExistsInRoot(filename string) bool
⋮----
// Assumes current working directory is the root of the project
⋮----
func GetDevnetChainIdOrDefault(cfg *common.ConfigWithContextConfig, chainName string, logger iface.Logger) (int, error)
⋮----
// Check in env first for L1 chain id
⋮----
// Check in env first for L2 chain id
⋮----
// Fallback to context defined value or DefaultAnvilChainId if undefined
⋮----
func GetDevnetBlockTimeOrDefault(cfg *common.ConfigWithContextConfig, chainName string) (int, error)
⋮----
// Check in env first for L1 block time
⋮----
// Check in env first for l2 block time
⋮----
// Fallback to context defined value or 12s if undefined
⋮----
func GetDevnetRPCUrlDefault(cfg *common.ConfigWithContextConfig, chainName string) (string, error)
⋮----
// Check in env first for L1 RPC url
⋮----
// Check in env first for L2 RPC url
⋮----
// Fallback to context defined value
⋮----
// GetL1Port returns the L1 devnet port (default port + 0)
func GetL1Port(basePort int) int
⋮----
// GetL2Port returns the L2 devnet port (default port + 1)
func GetL2Port(basePort int) int
⋮----
// GetL1RPCURL returns the L1 RPC URL for the given port
func GetL1RPCURL(basePort int) string
⋮----
// GetL2RPCURL returns the L2 RPC URL for the given port
func GetL2RPCURL(basePort int) string
````

## File: pkg/common/devnet/logging.go
````go
package devnet
⋮----
const (
	Blue   = "\033[34m"
	Cyan   = "\033[36m"
	Green  = "\033[32m"
	Yellow = "\033[33m"
	Reset  = "\033[0m"
)
````

## File: pkg/common/devnet/utils.go
````go
package devnet
⋮----
import (
	"context"
	"fmt"
	"net"
	"net/url"
	"os"
	"os/exec"
	"regexp"
	"runtime"
	"strconv"
	"strings"
	"time"

	"github.com/Layr-Labs/devkit-cli/pkg/common"
	"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
	"github.com/ethereum/go-ethereum/rpc"
	"github.com/urfave/cli/v2"
)
⋮----
"context"
"fmt"
"net"
"net/url"
"os"
"os/exec"
"regexp"
"runtime"
"strconv"
"strings"
"time"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common"
"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
"github.com/ethereum/go-ethereum/rpc"
"github.com/urfave/cli/v2"
⋮----
// IsPortAvailable checks if a TCP port is not already bound by another service.
func IsPortAvailable(port int) bool
⋮----
// If dialing fails, port is likely available
⋮----
// / Stops the container and removes it
func StopAndRemoveContainer(cCtx *cli.Context, containerName string)
⋮----
// GetDockerPsDevnetArgs returns the arguments needed to list all running
// devkit devnet Docker containers along with their exposed ports.
// It filters containers by name prefix ("devkit-devnet") and formats
// the output to show container name and port mappings in a readable form.
func GetDockerPsDevnetArgs() []string
⋮----
// GetDockerHost returns the appropriate Docker host based on environment and platform.
// Uses DOCKERS_HOST environment variable if set, otherwise detects OS:
// - Linux: defaults to 172.17.0.1 (Docker containers can access host via localhost)
// - macOS/Windows: defaults to host.docker.internal (required for Docker Desktop)
func GetDockerHost() string
⋮----
// Detect OS and set appropriate default
⋮----
// EnsureDockerHost replaces localhost/127.0.0.1 in URLs with the appropriate Docker host.
// Only replaces when localhost/127.0.0.1 are the actual hostname, not substrings.
// This ensures URLs work correctly when passed to Docker containers across platforms.
func EnsureDockerHost(inputUrl string) string
⋮----
// Handle edge cases first: bare localhost/127.0.0.1 strings
⋮----
// Parse the URL to work with components safely
⋮----
// If URL parsing fails, fall back to regex-based replacement
⋮----
// Extract hostname (without port)
⋮----
// Handle the case where URL parsing succeeded but hostname is empty
// This happens with strings like "localhost:8545" (parsed as scheme:opaque)
⋮----
// Check if the scheme is localhost or 127.0.0.1 (meaning it was parsed as scheme:opaque)
⋮----
// Reconstruct as host:port format
⋮----
// If hostname is empty but it's not the scheme:opaque case, fall back to regex
⋮----
// Only replace if hostname is exactly localhost or 127.0.0.1
⋮----
// Replace just the hostname part
⋮----
// Return original URL if hostname doesn't match
⋮----
// ensureDockerHostRegex provides regex-based fallback for malformed URLs
func ensureDockerHostRegex(inputUrl string, dockerHost string) string
⋮----
// Pattern to match URLs with schemes (http, https, ws, wss) followed by localhost
// This ensures we only rewrite actual localhost URLs, not subdomains like "api.localhost.company.com"
⋮----
// Pattern to match malformed scheme-like strings with localhost/127.0.0.1
// This handles cases like "ht tp://localhost" or "ht\x00tp://localhost"
⋮----
// Pattern to match standalone localhost (no scheme) at start of string or after whitespace/equals
// This avoids matching localhost as part of a larger domain name
⋮----
// Replace scheme-based localhost URLs
⋮----
// Replace scheme-based 127.0.0.1 URLs
⋮----
// Replace malformed scheme localhost patterns
⋮----
// Replace malformed scheme 127.0.0.1 patterns
⋮----
// Replace standalone localhost patterns
⋮----
// Replace standalone 127.0.0.1 patterns
⋮----
// GetRPCURL returns the RPC URL for accessing the devnet container from the host.
// This should always use localhost since it's for host→container communication
func GetRPCURL(port int) string
⋮----
// GetL2BlockByNumber retrieves the timestamp of a specific L2 block by its number.
func GetL2BlockByNumber(ctx *cli.Context, l2RpcUrl string, blockNumber uint64, logger iface.Logger) (string, error)
⋮----
var blockResult map[string]interface{}
⋮----
// Convert hex timestamp to decimal string
⋮----
func AdvanceBlocks(ctx *cli.Context, l1RpcUrl string, numBlocks uint64) error
⋮----
// Connect to provided client
⋮----
// Advance numBlocks blocks on client
⋮----
func IntToHex(u uint64) string
⋮----
func AdvanceBlocksToTS(client *rpc.Client, name string, fromTS, toTS uint64) error
⋮----
// Skip if already at or past target
⋮----
// Set next block timestamp exactly, then mine once - supported by Hardhat, Ganache, and Anvil
⋮----
// Evm_mine with explicit timestamp - Hardhat supports evm_mine with { timestamp }
⋮----
// Increase time by delta then mine once - supported by Hardhat, Ganache, Anvil
⋮----
// Set number of blocks to move each iteration
const blocksPerBatch = 1
⋮----
// While timestamps are out of sync mine blocksPerBatch at a time
⋮----
func GetTimestamp(client *rpc.Client, name string) (uint64, error)
⋮----
// Collect the block height for provided client
var block map[string]interface{}
⋮----
func SyncL1L2Timestamps(ctx *cli.Context, l1RpcUrl string, l2RpcUrl string) error
⋮----
// Define how much buffer to allow for timestamp proximity
const tsBuffer = 12
⋮----
// Connect to l1
⋮----
// Connect to l2
⋮----
// Get l1 and l2 current timestamps
⋮----
// Advance one or the other until we reach sync
⋮----
// Already in sync
````

## File: pkg/common/iface/logger.go
````go
package iface
⋮----
type Logger interface {
	Title(msg string, args ...any)
	Info(msg string, args ...any)
	Warn(msg string, args ...any)
	Error(msg string, args ...any)
	Debug(msg string, args ...any)
}
⋮----
type ProgressLogger interface {
	Title(msg string, args ...any)
	Info(msg string, args ...any)
	Warn(msg string, args ...any)
	Error(msg string, args ...any)
	Progress(name string, percent int, displayText string)
	PrintProgress()
	ClearProgress()
}
````

## File: pkg/common/iface/progress.go
````go
package iface
⋮----
// ProgressRow is a snapshot of a completed progress update.
type ProgressRow struct {
	Module string
	Pct    int
	Label  string
}
⋮----
type ProgressTracker interface {
	ProgressRows() []ProgressRow
	Set(id string, pct int, label string)
	Render()
	Clear()
}
⋮----
type ProgressInfo struct {
	Percentage  int
	DisplayText string
	Timestamp   string
}
````

## File: pkg/common/logger/basic_logger.go
````go
package logger
⋮----
import (
	"fmt"
	"log"
	"strings"
)
⋮----
"fmt"
"log"
"strings"
⋮----
type BasicLogger struct {
	verbose bool
}
⋮----
func NewLogger(verbose bool) *BasicLogger
⋮----
func (l *BasicLogger) Title(msg string, args ...any)
⋮----
// format the message once
⋮----
// split into lines
⋮----
// print the lines with log
⋮----
func (l *BasicLogger) Info(msg string, args ...any)
⋮----
func (l *BasicLogger) Warn(msg string, args ...any)
⋮----
func (l *BasicLogger) Error(msg string, args ...any)
⋮----
func (l *BasicLogger) Debug(msg string, args ...any)
⋮----
// skip debug when !verbose
````

## File: pkg/common/logger/noop_logger_test.go
````go
package logger
⋮----
import (
	"sync"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)
⋮----
"sync"
"testing"
⋮----
"github.com/stretchr/testify/assert"
"github.com/stretchr/testify/require"
⋮----
func TestNoopLogger_Interface(t *testing.T)
⋮----
// Verify that NoopLogger implements the Logger interface
var _ interface {
		Title(msg string, args ...any)
		Info(msg string, args ...any)
		Warn(msg string, args ...any)
		Error(msg string, args ...any)
		Debug(msg string, args ...any)
	} = &NoopLogger{}
⋮----
func TestNoopLogger_NewNoopLogger(t *testing.T)
⋮----
func TestNoopLogger_LoggingMethods(t *testing.T)
⋮----
// Test each logging method
⋮----
// Verify entries were captured
⋮----
// Check each entry
⋮----
func TestNoopLogger_EmptyMessages(t *testing.T)
⋮----
// Test empty messages are ignored for Info, Warn, Error, Debug
⋮----
// Title should still be captured even if empty
⋮----
func TestNoopLogger_GetEntriesByLevel(t *testing.T)
⋮----
// Test filtering by level
⋮----
func TestNoopLogger_GetMessages(t *testing.T)
⋮----
func TestNoopLogger_GetMessagesByLevel(t *testing.T)
⋮----
func TestNoopLogger_Clear(t *testing.T)
⋮----
func TestNoopLogger_Contains(t *testing.T)
⋮----
// Test general contains
⋮----
// Test partial matches
⋮----
func TestNoopLogger_ContainsLevel(t *testing.T)
⋮----
// Test level-specific contains
⋮----
// Test cross-level (should return false)
⋮----
// Test non-existent text
⋮----
func TestNoopLogger_ConcurrentSafety(t *testing.T)
⋮----
const numGoroutines = 100
const messagesPerGoroutine = 10
⋮----
var wg sync.WaitGroup
⋮----
// Start multiple goroutines writing to the logger
⋮----
// Start a goroutine reading from the logger
⋮----
// Verify all messages were captured
expectedCount := numGoroutines * messagesPerGoroutine * 2 // 2 message types per iteration
⋮----
// Test clearing while reading
var clearWg sync.WaitGroup
⋮----
// After clear, should have 0 entries
⋮----
func TestNoopLogger_MessageFormatting(t *testing.T)
⋮----
// Test format strings with various argument types
⋮----
// Example test showing typical usage in unit tests
func TestNoopLogger_UsageExample(t *testing.T)
⋮----
// Create logger for test
⋮----
// Simulate some function that uses logging
⋮----
// Execute the function
⋮----
// Assert expected log messages
⋮----
// Verify message order
⋮----
// Test specific level filtering
````

## File: pkg/common/logger/noop_logger.go
````go
package logger
⋮----
import (
	"fmt"
	"strings"
	"sync"

	"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
)
⋮----
"fmt"
"strings"
"sync"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
⋮----
// LogEntry represents a single log entry with level and message
type LogEntry struct {
	Level   string
	Message string
}
⋮----
// NoopLogger implements the Logger interface but doesn't output anything.
// Instead, it buffers all log messages for testing assertions.
// It is safe for concurrent use.
type NoopLogger struct {
	mu      sync.RWMutex
	entries []LogEntry
}
⋮----
// NewNoopLogger creates a new no-op logger for testing
func NewNoopLogger() *NoopLogger
⋮----
// Title implements the Logger interface - buffers title messages
func (l *NoopLogger) Title(msg string, args ...any)
⋮----
// Info implements the Logger interface - buffers info messages
func (l *NoopLogger) Info(msg string, args ...any)
⋮----
// Warn implements the Logger interface - buffers warning messages
func (l *NoopLogger) Warn(msg string, args ...any)
⋮----
// Error implements the Logger interface - buffers error messages
func (l *NoopLogger) Error(msg string, args ...any)
⋮----
// Debug implements the Logger interface - buffers debug messages
func (l *NoopLogger) Debug(msg string, args ...any)
⋮----
// addEntry safely adds a log entry to the buffer
func (l *NoopLogger) addEntry(level, message string)
⋮----
// GetEntries returns a copy of all buffered log entries
func (l *NoopLogger) GetEntries() []LogEntry
⋮----
// GetEntriesByLevel returns all entries for a specific log level
func (l *NoopLogger) GetEntriesByLevel(level string) []LogEntry
⋮----
var filtered []LogEntry
⋮----
// GetMessages returns all buffered messages as strings
func (l *NoopLogger) GetMessages() []string
⋮----
// GetMessagesByLevel returns all messages for a specific log level
func (l *NoopLogger) GetMessagesByLevel(level string) []string
⋮----
var messages []string
⋮----
// Clear removes all buffered entries
func (l *NoopLogger) Clear()
⋮----
// Len returns the number of buffered entries
func (l *NoopLogger) Len() int
⋮----
// Contains checks if any log entry contains the specified text
func (l *NoopLogger) Contains(text string) bool
⋮----
// ContainsLevel checks if any log entry with the specified level contains the text
func (l *NoopLogger) ContainsLevel(level, text string) bool
⋮----
// NoopProgressTracker is a progress tracker that does nothing (for testing)
type NoopProgressTracker struct{}
⋮----
// NewNoopProgressTracker creates a new no-op progress tracker
func NewNoopProgressTracker() *NoopProgressTracker
⋮----
// ProgressRows returns an empty slice
func (n *NoopProgressTracker) ProgressRows() []iface.ProgressRow
⋮----
// Set does nothing
func (n *NoopProgressTracker) Set(id string, pct int, label string)
⋮----
// No-op
⋮----
// Render does nothing
func (n *NoopProgressTracker) Render()
⋮----
// Clear does nothing
````

## File: pkg/common/logger/progress_logger.go
````go
package logger
⋮----
import (
	"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
)
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
⋮----
type ProgressLogger struct {
	base    iface.Logger          // core Zap logger
	tracker iface.ProgressTracker // TTY or Log tracker
}
⋮----
base    iface.Logger          // core Zap logger
tracker iface.ProgressTracker // TTY or Log tracker
⋮----
func NewProgressLogger(base iface.Logger, tracker iface.ProgressTracker) *ProgressLogger
⋮----
func (p *ProgressLogger) ProgressRows() []iface.ProgressRow
⋮----
func (p *ProgressLogger) Title(msg string, args ...any)
⋮----
func (p *ProgressLogger) Info(msg string, args ...any)
⋮----
func (p *ProgressLogger) Warn(msg string, args ...any)
⋮----
func (p *ProgressLogger) Error(msg string, args ...any)
⋮----
func (p *ProgressLogger) SetProgress(name string, percent int, displayText string)
⋮----
func (p *ProgressLogger) PrintProgress()
⋮----
func (p *ProgressLogger) ClearProgress()
````

## File: pkg/common/logger/zap_logger.go
````go
package logger
⋮----
import (
	"fmt"
	"strings"

	"go.uber.org/zap"
)
⋮----
"fmt"
"strings"
⋮----
"go.uber.org/zap"
⋮----
type ZapLogger struct {
	log *zap.SugaredLogger
}
⋮----
func NewZapLogger(verbose bool) *ZapLogger
⋮----
var logger *zap.Logger
⋮----
func (l *ZapLogger) Title(msg string, args ...any)
⋮----
// format the message once
⋮----
// split into lines
⋮----
// print the lines with log
⋮----
func (l *ZapLogger) Info(msg string, args ...any)
⋮----
func (l *ZapLogger) Warn(msg string, args ...any)
⋮----
func (l *ZapLogger) Error(msg string, args ...any)
⋮----
func (l *ZapLogger) Debug(msg string, args ...any)
````

## File: pkg/common/output/prompt.go
````go
package output
⋮----
import "github.com/AlecAivazis/survey/v2"
⋮----
// Confirm prompts the user to confirm an action with a yes/no question.
func Confirm(prompt string) (bool, error)
⋮----
// InputHiddenString prompts the user to input a string. The input is hidden from the user.
// The validator is used to validate the input. The help text is displayed to the user when they ask for help.
// There is no default value.
func InputHiddenString(prompt, help string, validator func(string) error) (string, error)
⋮----
var result string
⋮----
// InputString prompts the user to input a string. The input is visible to the user.
⋮----
// If defaultValue is not empty, it will be used as the default value.
func InputString(prompt, help, defaultValue string, validator func(string) error) (string, error)
⋮----
var opts []survey.AskOpt
````

## File: pkg/common/progress/decect_tty.go
````go
package progress
⋮----
import (
	"os"

	"golang.org/x/term"
)
⋮----
"os"
⋮----
"golang.org/x/term"
⋮----
func IsTTY() bool
````

## File: pkg/common/progress/log_progress.go
````go
package progress
⋮----
import (
	"fmt"
	"sync"

	"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
)
⋮----
"fmt"
"sync"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
⋮----
type LogProgressTracker struct {
	mu         sync.Mutex
	logger     iface.Logger
	progress   map[string]*iface.ProgressInfo
	order      []string
	maxTracked int
}
⋮----
func NewLogProgressTracker(max int, logger iface.Logger) *LogProgressTracker
⋮----
// ProgressRows returns all progress entries, in the order they completed.
// It is safe to call from multiple goroutines.
func (s *LogProgressTracker) ProgressRows() []iface.ProgressRow
⋮----
func (s *LogProgressTracker) Set(id string, pct int, label string)
⋮----
// end early if this has already reached 100%
⋮----
// print to logger on first 100% progress report
⋮----
func (s *LogProgressTracker) Render()
⋮----
// no-op - only print on 100% at Set
⋮----
func (s *LogProgressTracker) Clear()
````

## File: pkg/common/progress/tty_progress.go
````go
package progress
⋮----
import (
	"time"

	"github.com/Layr-Labs/devkit-cli/pkg/common/iface"

	"fmt"
	"os"
	"strings"
	"sync"
)
⋮----
"time"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
⋮----
"fmt"
"os"
"strings"
"sync"
⋮----
type TTYProgressTracker struct {
	mu         sync.Mutex
	progress   map[string]*iface.ProgressInfo
	order      []string
	maxTracked int
	linesDrawn int
	target     *os.File
}
⋮----
func NewTTYProgressTracker(max int, target *os.File) *TTYProgressTracker
⋮----
// ProgressRows returns all progress entries, in the order they completed.
// It is safe to call from multiple goroutines.
func (s *TTYProgressTracker) ProgressRows() []iface.ProgressRow
⋮----
func (t *TTYProgressTracker) Set(id string, pct int, label string)
⋮----
func (t *TTYProgressTracker) Render()
⋮----
func (t *TTYProgressTracker) Clear()
⋮----
// print timestamp line on clear
⋮----
func buildBar(pct int) string
````

## File: pkg/common/config_test.go
````go
package common_test
⋮----
import (
	"fmt"

	"github.com/Layr-Labs/devkit-cli/config/configs"
	"github.com/Layr-Labs/devkit-cli/config/contexts"

	"os"
	"path/filepath"
	"testing"

	"github.com/Layr-Labs/devkit-cli/pkg/common"

	"github.com/stretchr/testify/assert"
	"sigs.k8s.io/yaml"
)
⋮----
"fmt"
⋮----
"github.com/Layr-Labs/devkit-cli/config/configs"
"github.com/Layr-Labs/devkit-cli/config/contexts"
⋮----
"os"
"path/filepath"
"testing"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common"
⋮----
"github.com/stretchr/testify/assert"
"sigs.k8s.io/yaml"
⋮----
func TestLoadConfigWithContextConfig_FromCopiedTempFile(t *testing.T)
⋮----
// Setup temp directory
⋮----
// Copy config/config.yaml to tempDir
⋮----
// Copy config/contexts/devnet.yaml to tempDir/config/contexts
⋮----
// Run loader with the new base path
⋮----
// In v0.0.6, operators use allocations instead of stake
⋮----
// Test stakers parsing - verify that stakers configuration is loaded correctly
⋮----
// Test deposits structure
⋮----
// Test first deposit
⋮----
// Test operator delegation
⋮----
// Test second staker
⋮----
func LoadConfigWithContextConfigFromPath(contextName string, config_directory_path string) (*common.ConfigWithContextConfig, error)
⋮----
// Load base config
⋮----
var cfg common.ConfigWithContextConfig
⋮----
// Load requested context file
⋮----
// We expect the context file to have a top-level `context:` block
var wrapper struct {
		Context common.ChainContextConfig `yaml:"context"`
	}
````

## File: pkg/common/config.go
````go
package common
⋮----
import (
	"encoding/json"
	"fmt"
	"os"
	"path"
	"path/filepath"
	"reflect"
	"strings"

	"gopkg.in/yaml.v3"
)
⋮----
"encoding/json"
"fmt"
"os"
"path"
"path/filepath"
"reflect"
"strings"
⋮----
"gopkg.in/yaml.v3"
⋮----
const DefaultConfigWithContextConfigPath = "config"
⋮----
type ConfigBlock struct {
	Project ProjectConfig `json:"project" yaml:"project"`
}
⋮----
type ProjectConfig struct {
	Name             string `json:"name" yaml:"name"`
	Version          string `json:"version" yaml:"version"`
	Context          string `json:"context" yaml:"context"`
	ProjectUUID      string `json:"project_uuid,omitempty" yaml:"project_uuid,omitempty"`
	TelemetryEnabled bool   `json:"telemetry_enabled" yaml:"telemetry_enabled"`
	TemplateBaseURL  string `json:"templateBaseUrl,omitempty" yaml:"templateBaseUrl,omitempty"`
	TemplateVersion  string `json:"templateVersion,omitempty" yaml:"templateVersion,omitempty"`
	TemplateLanguage string `json:"templatelanguage,omitempty" yaml:"templatelanguage,omitempty"`
}
⋮----
type ForkConfig struct {
	Url       string `json:"url" yaml:"url"`
	Block     int    `json:"block" yaml:"block"`
	BlockTime int    `json:"block_time" yaml:"block_time"`
}
⋮----
type OperatorSpec struct {
	Address     string               `json:"address" yaml:"address"`
	ECDSAKey    string               `json:"ecdsa_key,omitempty" yaml:"ecdsa_key,omitempty"`
	Stake       string               `json:"stake,omitempty" yaml:"stake,omitempty"`
	Keystores   []OperatorKeystores  `json:"keystores,omitempty" yaml:"keystores,omitempty"`
	Allocations []OperatorAllocation `json:"allocations,omitempty" yaml:"allocations,omitempty"`
}
⋮----
// OperatorKeystore defines keystore data available to an operator
type OperatorKeystores struct {
	AVSAddress            string `json:"avs,omitempty" yaml:"avs,omitempty"`
	OperatorSet           uint64 `json:"operatorSet,omitempty" yaml:"operatorSet,omitempty"`
	ECDSAKeystorePath     string `json:"ecdsa_keystore_path,omitempty" yaml:"ecdsa_keystore_path,omitempty"`
	ECDSAKeystorePassword string `json:"ecdsa_keystore_password,omitempty" yaml:"ecdsa_keystore_password,omitempty"`
	BlsKeystorePath       string `json:"bls_keystore_path" yaml:"bls_keystore_path"`
	BlsKeystorePassword   string `json:"bls_keystore_password" yaml:"bls_keystore_password"`
}
⋮----
// OperatorAllocation defines strategy allocation for an operator
type OperatorAllocation struct {
	StrategyAddress        string                  `json:"strategy_address" yaml:"strategy_address"`
	Name                   string                  `json:"name" yaml:"name"`
	OperatorSetAllocations []OperatorSetAllocation `json:"operator_set_allocations" yaml:"operator_set_allocations"`
}
⋮----
// OperatorSetAllocation defines allocation for a specific operator set
type OperatorSetAllocation struct {
	OperatorSet      string `json:"operator_set" yaml:"operator_set"`
	AllocationInWads string `json:"allocation_in_wads" yaml:"allocation_in_wads"`
}
⋮----
// StakerSpec defines a staker configuration with address, key, and deposits
type StakerSpec struct {
	StakerAddress   string           `json:"address" yaml:"address"`
	StakerECDSAKey  string           `json:"ecdsa_key" yaml:"ecdsa_key"`
	Deposits        []StakerDeposits `json:"deposits" yaml:"deposits"`
	OperatorAddress string           `json:"operator" yaml:"operator"`
}
⋮----
// StakerDeposits defines a deposit to a strategy
type StakerDeposits struct {
	StrategyAddress string `json:"strategy_address" yaml:"strategy_address"`
	Name            string `json:"name" yaml:"name"`
	DepositAmount   string `json:"deposit_amount" yaml:"deposit_amount"`
}
⋮----
type AvsConfig struct {
	Address          string `json:"address" yaml:"address"`
	MetadataUri      string `json:"metadata_url" yaml:"metadata_url"`
	AVSPrivateKey    string `json:"avs_private_key" yaml:"avs_private_key"`
	RegistrarAddress string `json:"registrar_address" yaml:"registrar_address"`
}
⋮----
type EigenLayerConfig struct {
	L1 EigenLayerL1Config `json:"l1" yaml:"l1"`
	L2 EigenLayerL2Config `json:"l2" yaml:"l2"`
}
⋮----
type EigenLayerL1Config struct {
	AllocationManager    string `json:"allocation_manager" yaml:"allocation_manager"`
	DelegationManager    string `json:"delegation_manager" yaml:"delegation_manager"`
	StrategyManager      string `json:"strategy_manager" yaml:"strategy_manager"`
	BN254TableCalculator string `json:"bn254_table_calculator" yaml:"bn254_table_calculator"`
	ECDSATableCalculator string `json:"ecdsa_table_calculator" yaml:"ecdsa_table_calculator"`
	CrossChainRegistry   string `json:"cross_chain_registry" yaml:"cross_chain_registry"`
	KeyRegistrar         string `json:"key_registrar" yaml:"key_registrar"`
	ReleaseManager       string `json:"release_manager" yaml:"release_manager"`
	OperatorTableUpdater string `json:"operator_table_updater" yaml:"operator_table_updater"`
	TaskMailbox          string `json:"task_mailbox" yaml:"task_mailbox"`
	PermissionController string `json:"permission_controller" yaml:"permission_controller"`
}
⋮----
type EigenLayerL2Config struct {
	BN254CertificateVerifier string `json:"bn254_certificate_verifier" yaml:"bn254_certificate_verifier"`
	ECDSACertificateVerifier string `json:"ecdsa_certificate_verifier" yaml:"ecdsa_certificate_verifier"`
	OperatorTableUpdater     string `json:"operator_table_updater" yaml:"operator_table_updater"`
	TaskMailbox              string `json:"task_mailbox" yaml:"task_mailbox"`
}
⋮----
type ChainConfig struct {
	ChainID int         `json:"chain_id" yaml:"chain_id"`
	RPCURL  string      `json:"rpc_url" yaml:"rpc_url"`
	Fork    *ForkConfig `json:"fork,omitempty" yaml:"fork,omitempty"`
}
⋮----
type DeployedL1Contracts struct {
	Name    string `json:"name" yaml:"name"`
	Address string `json:"address" yaml:"address"`
	Abi     string `json:"abi" yaml:"abi"`
}
⋮----
type DeployedL2Contracts struct {
	Name    string `json:"name" yaml:"name"`
	Address string `json:"address" yaml:"address"`
	Abi     string `json:"abi" yaml:"abi"`
}
⋮----
type ConfigWithContextConfig struct {
	Config  ConfigBlock                   `json:"config" yaml:"config"`
	Context map[string]ChainContextConfig `json:"context" yaml:"context"`
}
⋮----
type Config struct {
	Version string      `json:"version" yaml:"version"`
	Config  ConfigBlock `json:"config" yaml:"config"`
}
⋮----
type ContextConfig struct {
	Version string             `json:"version" yaml:"version"`
	Context ChainContextConfig `json:"context" yaml:"context"`
}
⋮----
// CurveType represents the cryptographic curve type for operator sets
type CurveType string
⋮----
const (
	UnknownCurve CurveType = "UNKNOWN"
	BN254Curve   CurveType = "BN254"
	ECDSACurve   CurveType = "ECDSA"
)
⋮----
type OperatorSet struct {
	OperatorSetID uint64     `json:"operator_set_id" yaml:"operator_set_id"`
	Strategies    []Strategy `json:"strategies" yaml:"strategies"`
	CurveType     CurveType  `json:"curve_type" yaml:"curve_type"`
}
⋮----
type Strategy struct {
	StrategyAddress string `json:"strategy" yaml:"strategy"`
}
⋮----
type OperatorRegistration struct {
	Address       string `json:"address" yaml:"address"`
	OperatorSetID uint64 `json:"operator_set_id" yaml:"operator_set_id"`
	Payload       string `json:"payload" yaml:"payload"`
}
⋮----
type StakeRootEntry struct {
	ChainID   uint64 `yaml:"chain_id" json:"chain_id"`
	StakeRoot string `yaml:"stake_root" json:"stake_root"`
}
⋮----
type Transporter struct {
	Schedule         string           `json:"schedule" yaml:"schedule"`
	PrivateKey       string           `json:"private_key" yaml:"private_key"`
	BlsPrivateKey    string           `json:"bls_private_key" yaml:"bls_private_key"`
	ActiveStakeRoots []StakeRootEntry `json:"active_stake_roots,omitempty" yaml:"active_stake_roots,omitempty"`
}
⋮----
// ArtifactConfig defines the structure for release artifacts
type ArtifactConfig struct {
	ArtifactId string `json:"artifactId" yaml:"artifactId"`
	Component  string `json:"component" yaml:"component"`
	Digest     string `json:"digest" yaml:"digest"`
	Registry   string `json:"registry" yaml:"registry"`
	Version    string `json:"version" yaml:"version"`
}
⋮----
type ChainContextConfig struct {
	Name                  string                 `json:"name" yaml:"name"`
	Chains                map[string]ChainConfig `json:"chains" yaml:"chains"`
	Transporter           Transporter            `json:"transporter,omitempty" yaml:"transporter,omitempty"`
	DeployerPrivateKey    string                 `json:"deployer_private_key" yaml:"deployer_private_key"`
	AppDeployerPrivateKey string                 `json:"app_private_key" yaml:"app_private_key"`
	Stakers               []StakerSpec           `json:"stakers" yaml:"stakers"`
	Operators             []OperatorSpec         `json:"operators" yaml:"operators"`
	Avs                   AvsConfig              `json:"avs" yaml:"avs"`
	EigenLayer            *EigenLayerConfig      `json:"eigenlayer" yaml:"eigenlayer"`
	DeployedL1Contracts   []DeployedL1Contracts  `json:"deployed_l1_contracts" yaml:"deployed_l1_contracts"`
	DeployedL2Contracts   []DeployedL2Contracts  `json:"deployed_l2_contracts" yaml:"deployed_l2_contracts"`
	OperatorSets          []OperatorSet          `json:"operator_sets" yaml:"operator_sets"`
	OperatorRegistrations []OperatorRegistration `json:"operator_registrations" yaml:"operator_registrations"`
	Artifact              *ArtifactConfig        `json:"artifact" yaml:"artifact"`
}
⋮----
func LoadBaseConfig() (map[string]interface
⋮----
var cfg map[string]interface{}
⋮----
func LoadContextConfig(ctxName string) (map[string]interface
⋮----
// Default to devnet
⋮----
var ctx map[string]interface{}
⋮----
func LoadBaseConfigYaml() (*Config, error)
⋮----
var cfg *Config
⋮----
func LoadDefaultConfigWithContextConfig() (*ConfigWithContextConfig, string, error)
⋮----
// Load the projects config
⋮----
// If there is any error loading the yaml
⋮----
// Default to project selected context
⋮----
// Return the selected context
⋮----
func LoadConfigWithContextConfig(contextName string) (*ConfigWithContextConfig, string, error)
⋮----
// Load base config
⋮----
var cfg ConfigWithContextConfig
⋮----
// Load requested context file
⋮----
var wrapper struct {
		Version string             `yaml:"version"`
		Context ChainContextConfig `yaml:"context"`
	}
⋮----
func LoadDefaultContext() (string, *yaml.Node, *yaml.Node, string, error)
⋮----
func LoadConfig() (string, *yaml.Node, *yaml.Node, error)
⋮----
// Set path for context yaml
⋮----
// Load YAML as *yaml.Node
⋮----
// YAML is parsed into a DocumentNode:
//   - rootNode.Content[0] is the top-level MappingNode
//   - It contains the 'config' mapping we're interested in
⋮----
// Navigate context to arrive at config node
⋮----
func LoadContext(contextName string) (string, *yaml.Node, *yaml.Node, string, error)
⋮----
//   - It contains the 'context' mapping we're interested in
⋮----
// Navigate context to arrive at context node
⋮----
func LoadDefaultRawContext() ([]byte, string, error)
⋮----
func LoadRawContext(contextName string) ([]byte, string, error)
⋮----
// Load the current config according to selected context
⋮----
var ctxMap map[string]interface{}
⋮----
func LoadDefaultRawConfigWithContext() ([]byte, string, error)
⋮----
func LoadRawConfigWithContext(contextName string) ([]byte, string, error)
⋮----
// Load the base config
⋮----
var cfgMap map[string]interface{}
⋮----
func RequireNonZero(s interface
⋮----
// skip private or omitempty-tagged fields
⋮----
// if nested struct, recurse
````

## File: pkg/common/constants.go
````go
package common
⋮----
// Project structure constants
const (
	// L1 and L2 config names
	L1 = "l1"
	L2 = "l2"

	// ContractsDir is the subdirectory name for contract components
	ContractsDir = "contracts"

	// Makefile is the name of the makefile used for root level operations
	Makefile = "Makefile"

	// ContractsMakefile is the name of the makefile used for contract level operations
	ContractsMakefile = "Makefile"

	// GlobalConfigFile is the name of the global YAML used to store global config details (eg, user_id)
⋮----
// L1 and L2 config names
⋮----
// ContractsDir is the subdirectory name for contract components
⋮----
// Makefile is the name of the makefile used for root level operations
⋮----
// ContractsMakefile is the name of the makefile used for contract level operations
⋮----
// GlobalConfigFile is the name of the global YAML used to store global config details (eg, user_id)
⋮----
// Filename for devkit project config
⋮----
// Filename for zeus config
⋮----
// Docker open timeout
⋮----
// Docker open retry interval in milliseconds
⋮----
// CrossChainRegistryOwnerAddress is the address of the owner of the cross chain registry
⋮----
// Curve type constants/enums for KeyRegistrar
⋮----
// These are fallback EigenLayer deployment addresses when not specified in context (seploia)
⋮----
// These are fallback EigenLayer Middleware deployment addresses when not specified in context
⋮----
// These are L2 fallback addresses
⋮----
// These are fallback EigenLayer deployment addresses when not specified in context (mainnet)
````

## File: pkg/common/context.go
````go
package common
⋮----
import (
	"context"
	"fmt"
	"os"
	"os/signal"
	"path/filepath"
	"runtime"
	"syscall"

	"github.com/google/uuid"
	"github.com/urfave/cli/v2"
)
⋮----
"context"
"fmt"
"os"
"os/signal"
"path/filepath"
"runtime"
"syscall"
⋮----
"github.com/google/uuid"
"github.com/urfave/cli/v2"
⋮----
// Embedded devkit version from release
var embeddedDevkitReleaseVersion = "Development"
⋮----
// WithShutdown creates a new context that will be cancelled on SIGTERM/SIGINT
func WithShutdown(ctx context.Context) context.Context
⋮----
type appEnvironmentContextKey struct{}
⋮----
type AppEnvironment struct {
	CLIVersion  string
	OS          string
	Arch        string
	ProjectUUID string
	UserUUID    string
}
⋮----
func NewAppEnvironment(os, arch, projectUuid, userUuid string) *AppEnvironment
⋮----
func WithAppEnvironment(ctx *cli.Context)
⋮----
func withAppEnvironmentFromLocation(ctx *cli.Context, location string)
⋮----
func withAppEnvironment(ctx context.Context, appEnvironment *AppEnvironment) context.Context
⋮----
func AppEnvironmentFromContext(ctx context.Context) (*AppEnvironment, bool)
````

## File: pkg/common/contract_caller.go
````go
package common
⋮----
import (
	"bytes"
	"context"
	"crypto/ecdsa"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"math/big"
	"strings"

	"github.com/Layr-Labs/devkit-cli/pkg/common/contracts"
	"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
	allocationmanager "github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/AllocationManager"
	crosschainregistry "github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/CrossChainRegistry"
	"github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/DelegationManager"
	keyregistrar "github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/KeyRegistrar"
	releasemanager "github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/ReleaseManager"
	"github.com/ethereum/go-ethereum/accounts/abi"
	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/core/types"
	"github.com/ethereum/go-ethereum/crypto"
	"github.com/ethereum/go-ethereum/ethclient"
)
⋮----
"bytes"
"context"
"crypto/ecdsa"
"encoding/hex"
"encoding/json"
"fmt"
"math/big"
"strings"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common/contracts"
"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
allocationmanager "github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/AllocationManager"
crosschainregistry "github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/CrossChainRegistry"
"github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/DelegationManager"
keyregistrar "github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/KeyRegistrar"
releasemanager "github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/ReleaseManager"
"github.com/ethereum/go-ethereum/accounts/abi"
"github.com/ethereum/go-ethereum/accounts/abi/bind"
"github.com/ethereum/go-ethereum/common"
"github.com/ethereum/go-ethereum/core/types"
"github.com/ethereum/go-ethereum/crypto"
"github.com/ethereum/go-ethereum/ethclient"
⋮----
// ContractCaller provides a high-level interface for interacting with contracts
type ContractCaller struct {
	registry               *contracts.ContractRegistry
	ethclient              *ethclient.Client
	privateKey             *ecdsa.PrivateKey
	chainID                *big.Int
	logger                 iface.Logger
	allocationManagerAddr  common.Address
	delegationManagerAddr  common.Address
	strategyManagerAddr    common.Address
	keyRegistrarAddr       common.Address
	crossChainRegistryAddr common.Address
	releaseManagerAddr     common.Address
	certVerifier           common.Address
}
⋮----
func NewContractCaller(privateKeyHex string, chainID *big.Int, client *ethclient.Client, allocationManagerAddr, delegationManagerAddr, strategyManagerAddr, keyRegistrarAddr, crossChainRegistryAddr, releaseManagerAddr, certVerifierAddr common.Address, logger iface.Logger) (*ContractCaller, error)
⋮----
// Build contract registry with core EigenLayer contracts
⋮----
func (cc *ContractCaller) buildTxOpts() (*bind.TransactOpts, error)
⋮----
func (cc *ContractCaller) SendAndWaitForTransaction(
	ctx context.Context,
	txDescription string,
	fn func() (*types.Transaction, error),
) error
⋮----
func (cc *ContractCaller) UpdateAVSMetadata(ctx context.Context, avsAddress common.Address, metadataURI string) error
⋮----
// SetAVSRegistrar sets the registrar address for an AVS
func (cc *ContractCaller) SetAVSRegistrar(ctx context.Context, avsAddress, registrarAddress common.Address) error
⋮----
func (cc *ContractCaller) CreateOperatorSets(ctx context.Context, avsAddress common.Address, createSetParams []allocationmanager.IAllocationManagerTypesCreateSetParams) error
⋮----
// Filter out existing operator sets
var filteredParams []allocationmanager.IAllocationManagerTypesCreateSetParams
⋮----
func (cc *ContractCaller) RegisterAsOperator(ctx context.Context, operatorAddress common.Address, allocationDelay uint32, metadataURI string) error
⋮----
func (cc *ContractCaller) RegisterForOperatorSets(ctx context.Context, operatorAddress, avsAddress common.Address, operatorSetIDs []uint32, payload []byte) error
⋮----
func (cc *ContractCaller) DepositIntoStrategy(ctx context.Context, strategyAddress common.Address, amount *big.Int) error
⋮----
// Get or register the strategy contract
⋮----
// Strategy not registered, add it to registry
⋮----
// Get or register the ERC20 token contract
⋮----
// ERC20 not registered, add it to registry
⋮----
// approve the strategy manager to spend the underlying tokens
⋮----
func (cc *ContractCaller) DelegateToOperator(ctx context.Context, operatorAddress common.Address, signature DelegationManager.ISignatureUtilsMixinTypesSignatureWithExpiry, approverSalt [32]byte) error
⋮----
func (cc *ContractCaller) CreateApprovalSignature(ctx context.Context, stakerAddress common.Address, operatorAddress common.Address, approverAddress common.Address, approverPrivateKey string, approverSalt [32]byte, expiry *big.Int) (DelegationManager.ISignatureUtilsMixinTypesSignatureWithExpiry, error)
⋮----
// calculateDelegationApprovalDigestHash
⋮----
// Convert private key from hex string to *ecdsa.PrivateKey
⋮----
// sign the digest hash - convert [32]byte to []byte
⋮----
// EigenLayer contracts use OpenZeppelin's SignatureChecker which expects recovery ID 27/28
// crypto.Sign returns [R || S || V] where V is 0 or 1
// OpenZeppelin's ECDSA library expects V to be 27 or 28
⋮----
// Create the signature with expiry structure
⋮----
func (cc *ContractCaller) ModifyAllocations(ctx context.Context, operatorAddress common.Address, operatorPrivateKey string, strategies []common.Address, newMagnitudes []uint64, avsAddress common.Address, opSetId uint32, logger iface.Logger) error
⋮----
func IsValidABI(v interface
⋮----
b, err := json.Marshal(v) // serialize ABI field
⋮----
_, err = abi.JSON(bytes.NewReader(b)) // parse it
⋮----
// RegisterStrategiesFromConfig registers all strategy contracts found in the configuration
func (cc *ContractCaller) RegisterStrategiesFromConfig(cfg *OperatorSpec) error
⋮----
// RegisterTokensFromStrategies registers all underlying token contracts from strategies
func (cc *ContractCaller) RegisterTokensFromStrategies(cfg *OperatorSpec) error
⋮----
// Get strategy contract
⋮----
// Get underlying token address
⋮----
// Register the token contract
⋮----
func (cc *ContractCaller) ConfigureOpSetCurveType(ctx context.Context, avsAddress common.Address, opSetId uint32, curveType uint8) error
⋮----
// End early if operatorSet is already configured with curveType
⋮----
func (cc *ContractCaller) CreateGenerationReservation(ctx context.Context, opSetId uint32, operatorTableCalculator common.Address, avsAddress common.Address) error
⋮----
func (cc *ContractCaller) WhitelistChainIdInCrossRegistry(ctx context.Context, operatorTableUpdater common.Address, chainId uint64) error
⋮----
var (
		err      error
		gasPrice *big.Int
		receipt  *types.Receipt
	)
⋮----
// Get RPC client from ethclient
⋮----
// Check if owner already has sufficient balance
⋮----
// Only fund if balance is less than 0.1 ETH
minBalance := big.NewInt(100000000000000000) // 0.1 ETH in wei
⋮----
// Use anvil_setBalance RPC method
err = rpcClient.Call(nil, "anvil_setBalance", ownerCrossChainRegistry.Hex(), "0x8AC7230489E80000") // 10 ETH in hex
⋮----
// Get gas price
⋮----
// Get the ABI from the metadata
⋮----
// Pack the function call data
⋮----
// Send addChainIDsToWhitelist transaction from impersonated account using RPC
var txHash common.Hash
⋮----
"gas":      "0x30d40", // 200000 in hex
⋮----
// Force the tx to be mined
⋮----
// Wait for transaction receipt
⋮----
// Check for reverted tx and print receipt
⋮----
func (cc *ContractCaller) RegisterKeyInKeyRegistrar(
	ctx context.Context,
	operatorAddress common.Address,
	avsAddress common.Address,
	opSetId uint32,
	keyData []byte,
	signature []byte,
) error
⋮----
// GetRegistry returns the contract registry for external access
func (cc *ContractCaller) GetRegistry() *contracts.ContractRegistry
⋮----
func (cc *ContractCaller) PublishRelease(ctx context.Context, avsAddress common.Address, artifacts []releasemanager.IReleaseManagerTypesArtifact, operatorSetId uint32, upgradeByTime uint32) error
⋮----
func (cc *ContractCaller) GetReleaseMetadataUri(avsAddress common.Address, operatorSetId uint32) (string, error)
⋮----
func (cc *ContractCaller) SetReleaseMetadata(
	ctx context.Context,
	metadataUri string,
	avsAddress common.Address,
	operatorSetId uint32,
) error
⋮----
// abi.encode(uint256 x, uint256 y)
func (cc *ContractCaller) PackUint256Pair(x, y *big.Int) ([]byte, error)
````

## File: pkg/common/dockerutils.go
````go
package common
⋮----
import (
	"context"
	"fmt"
	"os/exec"
	"runtime"
	"time"

	"github.com/docker/docker/client"
	"github.com/urfave/cli/v2"
)
⋮----
"context"
"fmt"
"os/exec"
"runtime"
"time"
⋮----
"github.com/docker/docker/client"
"github.com/urfave/cli/v2"
⋮----
// EnsureDockerIsRunning checks if Docker is running and attempts to launch Docker Desktop if not.
func EnsureDockerIsRunning(cCtx *cli.Context) error
⋮----
// In CI, don't attempt to auto-start Docker. Assume it's pre-installed and running.
⋮----
var lastErr error
⋮----
func isDockerRunning(ctx context.Context, pingTimeout time.Duration) error
⋮----
// Check if docker is installed
func isDockerInstalled() bool
````

## File: pkg/common/flags.go
````go
package common
⋮----
import "github.com/urfave/cli/v2"
⋮----
// GlobalFlags defines flags that apply to the entire application (global flags).
var GlobalFlags = []cli.Flag{
	&cli.BoolFlag{
		Name:    "verbose",
		Aliases: []string{"v"},
		Usage:   "Enable verbose logging",
	},
	&cli.BoolFlag{
		Name:  "enable-telemetry",
		Usage: "Enable telemetry collection on first run without prompting",
	},
	&cli.BoolFlag{
		Name:  "disable-telemetry",
		Usage: "Disable telemetry collection on first run without prompting",
	},
}
````

## File: pkg/common/getters.go
````go
package common
⋮----
import (
	"fmt"
	"os"
)
⋮----
"fmt"
"os"
⋮----
func GetForkUrlDefault(contextName string, cfg *ConfigWithContextConfig, chainName string) (string, error)
⋮----
// Check in env first for L1 fork url
⋮----
// Check in env first for L2 fork url
⋮----
// Fallback to context defined value
⋮----
// GetEigenLayerAddresses returns EigenLayer L1 addresses from the context config
// Falls back to constants if not found in context
func GetEigenLayerAddresses(contextName string, cfg *ConfigWithContextConfig) (allocationManager, delegationManager, strategyManager, keyRegistrar, crossChainRegistry, bn254TableCalculator, ecdsaTableCalculator, releaseManager string)
⋮----
// Default addresses according to context to return incase of bad context
⋮----
// Return constants for undefined context
⋮----
// Return constants for missing context
⋮----
// Switch based on contexts chainId
⋮----
// Default each address to constant if missing from discovered context
⋮----
func GetAddressByChainId(chainId int, mainnetAddress, sepoliaAddress string) string
````

## File: pkg/common/global_config_test.go
````go
package common
⋮----
import (
	"os"
	"path/filepath"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)
⋮----
"os"
"path/filepath"
"testing"
⋮----
"github.com/stretchr/testify/assert"
"github.com/stretchr/testify/require"
⋮----
func TestGlobalConfig(t *testing.T)
⋮----
// Override XDG_CONFIG_HOME for testing
⋮----
// Save a config
⋮----
// Load it back
⋮----
// Initially should be nil
⋮----
// Set to true
⋮----
// Set to false
⋮----
// Should be true initially
⋮----
// Mark as complete
⋮----
// Should be false now
⋮----
func TestGlobalConfigWithHomeDir(t *testing.T)
⋮----
// Test fallback to home directory when XDG_CONFIG_HOME is not set
⋮----
// Helper function to create a pointer to a bool
func boolPtr(b bool) *bool
````

## File: pkg/common/global_config.go
````go
package common
⋮----
import (
	"fmt"
	"os"
	"path/filepath"

	"gopkg.in/yaml.v3"
)
⋮----
"fmt"
"os"
"path/filepath"
⋮----
"gopkg.in/yaml.v3"
⋮----
// GlobalConfig contains user-level configuration that persists across all devkit usage
type GlobalConfig struct {
	// FirstRun tracks if this is the user's first time running devkit
	FirstRun bool `yaml:"first_run"`
	// TelemetryEnabled stores the user's global telemetry preference
	TelemetryEnabled *bool `yaml:"telemetry_enabled,omitempty"`
	// The users uuid to identify user across projects
	UserUUID string `yaml:"user_uuid"`
}
⋮----
// FirstRun tracks if this is the user's first time running devkit
⋮----
// TelemetryEnabled stores the user's global telemetry preference
⋮----
// The users uuid to identify user across projects
⋮----
// GetGlobalConfigDir returns the XDG-compliant directory where global devkit config should be stored
func GetGlobalConfigDir() (string, error)
⋮----
// First check XDG_CONFIG_HOME
⋮----
var baseDir string
⋮----
// Fall back to ~/.config
⋮----
// GetGlobalConfigPath returns the full path to the global config file
func GetGlobalConfigPath() (string, error)
⋮----
// LoadGlobalConfig loads the global configuration, creating defaults if needed
func LoadGlobalConfig() (*GlobalConfig, error)
⋮----
// If we can't determine config path (e.g., no home directory),
// return first-run defaults so the CLI doesn't fail completely
⋮----
// If file doesn't exist, return defaults for first run
⋮----
var config GlobalConfig
⋮----
// SaveGlobalConfig saves the global configuration to disk
func SaveGlobalConfig(config *GlobalConfig) error
⋮----
// Ensure directory exists
⋮----
// GetGlobalTelemetryPreference returns the global telemetry preference
func GetGlobalTelemetryPreference() (*bool, error)
⋮----
// SetGlobalTelemetryPreference sets the global telemetry preference
func SetGlobalTelemetryPreference(enabled bool) error
⋮----
config.FirstRun = false // No longer first run after setting preference
⋮----
// MarkFirstRunComplete marks that the first run has been completed
func MarkFirstRunComplete() error
⋮----
// IsFirstRun checks if this is the user's first time running devkit
func IsFirstRun() (bool, error)
````

## File: pkg/common/project_config_test.go
````go
package common
⋮----
import (
	"context"
	"os"
	"path/filepath"
	"runtime"
	"testing"

	"github.com/google/uuid"
	"github.com/stretchr/testify/assert"
	"github.com/urfave/cli/v2"
	"gopkg.in/yaml.v3"
)
⋮----
"context"
"os"
"path/filepath"
"runtime"
"testing"
⋮----
"github.com/google/uuid"
"github.com/stretchr/testify/assert"
"github.com/urfave/cli/v2"
"gopkg.in/yaml.v3"
⋮----
func TestSaveAndLoadProjectSettings(t *testing.T)
⋮----
// Create temp dir for test with config structure
⋮----
// Create a basic config.yaml file first
⋮----
// Test saving project settings
⋮----
// Verify config.yaml was updated
⋮----
// Set current directory to temp dir to test loading
⋮----
// Test loading project settings
⋮----
// Verify settings content
⋮----
func TestGetProjectUUIDFromLocation_ValidFile(t *testing.T)
⋮----
// Create config.yaml format
⋮----
func TestGetProjectUUIDFromLocation_FileMissing(t *testing.T)
⋮----
func TestLoadProjectSettings_InvalidYAML(t *testing.T)
⋮----
func TestIsTelemetryEnabled_TrueAndFalse(t *testing.T)
⋮----
// Write "true" config
⋮----
// Write "false" config
⋮----
// Test telemetry enabled
⋮----
func TestIsTelemetryEnabled_FileMissing(t *testing.T)
⋮----
func writeTempConfig(t *testing.T, content string) string
⋮----
func TestGetProjectUUID_WhenUUIDIsPresent(t *testing.T)
⋮----
func TestGetProjectUUID_WhenConfigMissing(t *testing.T)
⋮----
func TestWithAppEnvironment_GeneratesUUIDWhenMissing(t *testing.T)
⋮----
func TestWithAppEnvironment_UsesUUIDFromConfig(t *testing.T)
⋮----
// Test the new migration functionality
func TestConfigStructureWithNewFields(t *testing.T)
⋮----
// Create config.yaml with new structure
⋮----
// Test loading the config
````

## File: pkg/common/project_config.go
````go
package common
⋮----
import (
	"fmt"
	"os"
	"path/filepath"

	"gopkg.in/yaml.v3"
)
⋮----
"fmt"
"os"
"path/filepath"
⋮----
"gopkg.in/yaml.v3"
⋮----
// ProjectSettings contains the project-level configuration
type ProjectSettings struct {
	ProjectUUID      string `yaml:"project_uuid"`
	TelemetryEnabled bool   `yaml:"telemetry_enabled"`
}
⋮----
// SaveProjectIdAndTelemetryToggle saves project settings to config.yaml
func SaveProjectIdAndTelemetryToggle(projectDir string, projectUuid string, telemetryEnabled bool) error
⋮----
// Load existing config.yaml
⋮----
// Update project fields
⋮----
// Save back to config.yaml
⋮----
// SetProjectTelemetry sets telemetry preference for the current project only
func SetProjectTelemetry(enabled bool) error
⋮----
// Find project directory by looking for config/config.yaml
⋮----
// Update only telemetry setting
⋮----
// FindProjectRoot searches upward from current directory to find config/config.yaml
func FindProjectRoot() (string, error)
⋮----
// Search upward for config/config.yaml
⋮----
// Reached filesystem root
⋮----
// GetEffectiveTelemetryPreference returns the effective telemetry preference
// Project setting takes precedence over global setting
func GetEffectiveTelemetryPreference() (bool, error)
⋮----
// First try to get project-specific setting
⋮----
// Fall back to global setting
⋮----
// If no global preference set, default to false
⋮----
// loadConfigFromPath loads the complete config.yaml structure
func loadConfigFromPath(configPath string) (*Config, error)
⋮----
var config Config
⋮----
// saveConfigToPath saves the complete config.yaml structure
func saveConfigToPath(configPath string, config *Config) error
⋮----
// LoadProjectSettings loads project settings from config.yaml
func LoadProjectSettings() (*ProjectSettings, error)
⋮----
// GetProjectUUID returns the project UUID from config.yaml or empty string if not found
func GetProjectUUID() string
⋮----
// IsTelemetryEnabled returns whether telemetry is enabled for the project
// It checks both global and project-level preferences, with project taking precedence
func IsTelemetryEnabled() bool
⋮----
// Use the effective preference which handles precedence correctly
⋮----
// Helper functions for testing
func isTelemetryEnabledAtPath(location string) bool
⋮----
// For testing: load config.yaml at specific path and check telemetry setting
⋮----
return false // Config doesn't exist, assume telemetry disabled
⋮----
func getProjectUUIDFromLocation(location string) string
````

## File: pkg/common/scripts_caller_test.go
````go
package common
⋮----
import (
	"context"
	"encoding/json"
	"os"
	"path/filepath"
	"reflect"
	"testing"

	"github.com/Layr-Labs/devkit-cli/pkg/common/logger"
)
⋮----
"context"
"encoding/json"
"os"
"path/filepath"
"reflect"
"testing"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common/logger"
⋮----
func TestCallTemplateScript(t *testing.T)
⋮----
// JSON response case
⋮----
// Parse the provided params
⋮----
// Run the json_echo script
⋮----
// Assert known structure
⋮----
// Non-JSON response case
⋮----
// Run the text_echo script
⋮----
// Empty response case
⋮----
// Run the empty script expecting JSON (this should generate a warning)
⋮----
// Check logger buffer for warning instead of capturing stdout
````

## File: pkg/common/scripts_caller.go
````go
package common
⋮----
import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"os"
	"os/exec"
	"syscall"

	"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
)
⋮----
"bytes"
"context"
"encoding/json"
"errors"
"fmt"
"os"
"os/exec"
"syscall"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
⋮----
type ResponseExpectation int
⋮----
const (
	ExpectNonJSONResponse ResponseExpectation = iota
	ExpectJSONResponse
)
⋮----
func CallTemplateScript(cmdCtx context.Context, logger iface.Logger, dir string, scriptPath string, expect ResponseExpectation, params ...[]byte) (map[string]interface
⋮----
// Convert byte params to strings
⋮----
// Prepare the command
var stdout bytes.Buffer
⋮----
// Run the command in its own group
⋮----
// When context is canceled, forward SIGINT (but only if the process is running)
⋮----
// Exec the command
⋮----
// if its an ExitError, check if it was killed by a signal
var exitErr *exec.ExitError
⋮----
// killed by signal -> treat as cancellation
⋮----
// nonzero exit code
⋮----
// Clean and validate stdout
⋮----
// Return the result as JSON if expected
⋮----
// End early for empty response
⋮----
// Unmarshal response and return unless err
var result map[string]interface{}
⋮----
// Log the raw stdout
````

## File: pkg/common/telemetry_prompt_test.go
````go
package common
⋮----
import (
	"os"
	"testing"

	"github.com/Layr-Labs/devkit-cli/pkg/common/logger"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)
⋮----
"os"
"testing"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common/logger"
"github.com/stretchr/testify/assert"
"github.com/stretchr/testify/require"
⋮----
func TestTelemetryPromptWithOptions(t *testing.T)
⋮----
// t.Run("SkipPromptInCI disables telemetry in CI", func(t *testing.T) {
// 	// Set CI environment variable
// 	originalCI := os.Getenv("CI")
// 	defer func() {
// 		if originalCI != "" {
// 			os.Setenv("CI", originalCI)
// 		} else {
// 			os.Unsetenv("CI")
// 		}
// 	}()
// 	os.Setenv("CI", "true")
⋮----
// 	opts := TelemetryPromptOptions{
// 		SkipPromptInCI: true,
// 	}
⋮----
// 	enabled, err := TelemetryPromptWithOptions(logger, opts)
// 	require.NoError(t, err)
// 	assert.False(t, enabled)
// })
⋮----
// Set CI environment variable
⋮----
func TestIsStdinAvailable(t *testing.T)
⋮----
// This test is environment-dependent and mainly for verification
// In a real terminal, stdin should be available
// In CI or non-interactive environments, it may not be
⋮----
// We can't make strong assertions here since it depends on the test environment
// but we can verify the function doesn't panic
⋮----
func TestHandleFirstRunTelemetryPromptWithOptions(t *testing.T)
⋮----
// This test would need to set up a mock environment
// For now, just verify the function signature works
⋮----
// The actual behavior depends on the global config state
// We're just verifying the function doesn't panic
````

## File: pkg/common/telemetry_prompt.go
````go
package common
⋮----
import (
	"fmt"
	"os"

	"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
)
⋮----
"fmt"
"os"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
⋮----
// TelemetryPromptOptions controls how the telemetry prompt behaves
type TelemetryPromptOptions struct {
	// EnableTelemetry automatically enables telemetry without prompting (for --enable-telemetry flag)
	EnableTelemetry bool
	// DisableTelemetry automatically disables telemetry without prompting (for --disable-telemetry flag)
	DisableTelemetry bool
	// SkipPromptInCI skips the prompt in CI environments (defaults to disabled)
	SkipPromptInCI bool
}
⋮----
// EnableTelemetry automatically enables telemetry without prompting (for --enable-telemetry flag)
⋮----
// DisableTelemetry automatically disables telemetry without prompting (for --disable-telemetry flag)
⋮----
// SkipPromptInCI skips the prompt in CI environments (defaults to disabled)
⋮----
// TelemetryPromptWithOptions presents the telemetry opt-in dialog with configurable behavior
func TelemetryPromptWithOptions(logger iface.Logger, opts TelemetryPromptOptions) (bool, error)
⋮----
// Handle explicit enable/disable flags first (they take precedence over everything)
⋮----
// // Check if we're in a CI environment and should skip prompting
// if opts.SkipPromptInCI && isCI() {
// 	logger.Debug("Skipping telemetry prompt in CI environment, defaulting to disabled")
// 	fmt.Println("⚠️  Detected CI environment - telemetry disabled by default")
// 	fmt.Println("   You can enable it later with: devkit telemetry --enable --global")
// 	fmt.Println()
// 	return false, nil
// }
⋮----
// // Display telemetry information
// displayTelemetryInfo()
⋮----
// // Check if stdin is available (not in a non-interactive environment)
// if !isStdinAvailable() {
// 	logger.Debug("No stdin available, defaulting telemetry to disabled")
// 	fmt.Println("⚠️  Non-interactive environment detected - telemetry disabled by default")
⋮----
// fmt.Print("Would you like to enable telemetry? [Y/n]: ")
⋮----
// reader := bufio.NewReader(os.Stdin)
// response, err := reader.ReadString('\n')
// if err != nil {
// 	return false, fmt.Errorf("failed to read user input: %w", err)
⋮----
// response = strings.ToLower(strings.TrimSpace(response))
⋮----
// // Default to yes if empty response, no if they explicitly say no
// enabled := response == "" || response == "y" || response == "Y" || response == "yes" || response == "Yes"
⋮----
// if enabled {
// 	fmt.Println("✅ Telemetry enabled. Thank you for helping improve DevKit!")
// } else {
// 	fmt.Println("❌ Telemetry disabled. You can enable it later if you change your mind.")
⋮----
// fmt.Println()
⋮----
// displayTelemetryInfo shows the telemetry information banner
func displayTelemetryInfo()
⋮----
// isStdinAvailable checks if stdin is available for reading user input
func isStdinAvailable() bool
⋮----
// Check if stdin is connected to a terminal
⋮----
// HandleFirstRunTelemetryPrompt checks if this is a first run and prompts for telemetry
// Returns the telemetry preference (true/false) and whether this was a first run
func HandleFirstRunTelemetryPrompt(logger iface.Logger) (bool, bool, error)
⋮----
// HandleFirstRunTelemetryPromptWithOptions handles first run with configurable options
func HandleFirstRunTelemetryPromptWithOptions(logger iface.Logger, opts TelemetryPromptOptions) (bool, bool, error)
⋮----
// Check if this is the first run
⋮----
// Don't fail the entire command, just assume not first run
⋮----
// If not first run, get existing global preference
⋮----
// No preference set, default to false
⋮----
// Telemetry is configurable, show the prompt
⋮----
// Default to disabled if prompt fails
⋮----
// Save the preference globally
⋮----
// Mark first run as complete and save version info
⋮----
// markFirstRunCompleteWithVersion marks first run complete and records version
func markFirstRunCompleteWithVersion() error
````

## File: pkg/common/user_config_test.go
````go
package common
⋮----
import (
	"os"
	"path/filepath"
	"testing"

	"gopkg.in/yaml.v3"
)
⋮----
"os"
"path/filepath"
"testing"
⋮----
"gopkg.in/yaml.v3"
⋮----
func TestSaveUserIdAndLoadGlobalConfig(t *testing.T)
⋮----
// Set XDG_CONFIG_HOME to a temp directory
⋮----
// Get the global config dir so that we can create it
⋮----
const id1 = "uuid-1234"
// Save first UUID
⋮----
// Path where config should be
⋮----
// Check file exists
⋮----
// Load and verify content
⋮----
var s struct {
		UserUUID string `yaml:"user_uuid"`
	}
⋮----
// Save a new UUID: since existing settings loads fine, code preserves the old UUID
const id2 = "uuid-5678"
⋮----
// Reload
⋮----
func TestGetUserUUIDFromGlobalConfig_Empty(t *testing.T)
⋮----
// Save original environment
⋮----
// Clean up after test
⋮----
// Unset XDG_CONFIG_HOME and set HOME to a temp directory with no config
⋮----
// Now getUserUUIDFromGlobalConfig should return empty string since no config exists
⋮----
func TestLoadGlobalConfig_MalformedYAML(t *testing.T)
⋮----
// Set XDG_CONFIG_HOME to temp
⋮----
// Create config dir and invalid YAML
⋮----
// Load should error
⋮----
// SaveUserId should overwrite malformed and succeed
const id = "uuid-0000"
⋮----
// Verify valid YAML now
⋮----
func TestSaveUserId_PermissionsError(t *testing.T)
⋮----
// Create file where directory should be to block MkdirAll
⋮----
// Now SaveUserId should fail on MkdirAll
⋮----
func TestSaveUserId_WriteFileError(t *testing.T)
⋮----
// Create directory and make it read-only
⋮----
// Attempt write should fail
````

## File: pkg/common/user_config.go
````go
package common
⋮----
import (
	"fmt"
	"os"
	"path/filepath"

	"gopkg.in/yaml.v3"
)
⋮----
"fmt"
"os"
"path/filepath"
⋮----
"gopkg.in/yaml.v3"
⋮----
// SaveUserId saves user settings to the global config, but preserves existing UUID if present
func SaveUserId(userUuid string) error
⋮----
// Try to load existing settings first to preserve UUID if it exists
var settings GlobalConfig
⋮----
// Create new settings with provided UUID
⋮----
// Get the global config dir so that we can create it
⋮----
// Create global dir
⋮----
func getUserUUIDFromGlobalConfig() string
````

## File: pkg/common/utils_test.go
````go
package common
⋮----
import (
	"math/big"
	"reflect"
	"testing"

	"github.com/urfave/cli/v2"
)
⋮----
"math/big"
"reflect"
"testing"
⋮----
"github.com/urfave/cli/v2"
⋮----
func TestIsVerboseEnabled(t *testing.T)
⋮----
func TestGetLogger_ReturnsLoggerAndTracker(t *testing.T)
⋮----
func isValidLogger(typ string) bool
⋮----
func isValidTracker(typ string) bool
⋮----
func TestParseETHAmount(t *testing.T)
⋮----
expected string // Expected result in wei as string
⋮----
expected: "5000000000000000000", // 5 * 10^18
⋮----
expected: "1500000000000000000", // 1.5 * 10^18
⋮----
expected: "10000000000000000000", // 10 * 10^18
⋮----
expected: "2500000000000000000", // 2.5 * 10^18
⋮----
expected: "1000000000000000000", // 1 * 10^18
````

## File: pkg/common/utils.go
````go
package common
⋮----
import (
	"context"
	"fmt"
	"math/big"
	"os"
	"regexp"
	"strconv"
	"strings"

	"github.com/Layr-Labs/crypto-libs/pkg/bn254"
	"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
	"github.com/Layr-Labs/devkit-cli/pkg/common/logger"
	"github.com/Layr-Labs/devkit-cli/pkg/common/progress"
	"github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/BN254CertificateVerifier"
	"github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/ECDSACertificateVerifier"
	"github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/IKeyRegistrar"
	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/rpc"
	"github.com/urfave/cli/v2"
)
⋮----
"context"
"fmt"
"math/big"
"os"
"regexp"
"strconv"
"strings"
⋮----
"github.com/Layr-Labs/crypto-libs/pkg/bn254"
"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
"github.com/Layr-Labs/devkit-cli/pkg/common/logger"
"github.com/Layr-Labs/devkit-cli/pkg/common/progress"
"github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/BN254CertificateVerifier"
"github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/ECDSACertificateVerifier"
"github.com/Layr-Labs/eigenlayer-contracts/pkg/bindings/IKeyRegistrar"
"github.com/ethereum/go-ethereum/accounts/abi/bind"
"github.com/ethereum/go-ethereum/common"
"github.com/ethereum/go-ethereum/rpc"
"github.com/urfave/cli/v2"
⋮----
// loggerContextKey is used to store the logger in the context
type loggerContextKey struct{}
⋮----
// progressTrackerContextKey is used to store the progress tracker in the context
type progressTrackerContextKey struct{}
⋮----
// RexExp to match semver strings
var semverRegex = regexp.MustCompile(`^v?\d+\.\d+\.\d+$`)
⋮----
// IsVerboseEnabled checks if either the CLI --verbose flag is set,
// or config.yaml has [log] level = "debug"
func IsVerboseEnabled(cCtx *cli.Context, cfg *ConfigWithContextConfig) bool
⋮----
// Check CLI flag
⋮----
// Check config.yaml config
// level := strings.ToLower(strings.TrimSpace(cfg.Log.Level))  // TODO(nova): Get log level debug from config.yaml also . For now only using the cli flag
// return level == "debug"
⋮----
// GetLoggerFromCLIContext creates a logger based on the CLI context
// It checks the verbose flag and returns the appropriate logger
func GetLoggerFromCLIContext(cCtx *cli.Context) (iface.Logger, iface.ProgressTracker)
⋮----
// Get logger for the env we're in
func GetLogger(verbose bool) (iface.Logger, iface.ProgressTracker)
⋮----
var log iface.Logger
var tracker iface.ProgressTracker
⋮----
// isCI checks if the code is running in a CI environment like GitHub Actions.
func isCI() bool
⋮----
// WithLogger stores the logger in the context
func WithLogger(ctx context.Context, logger iface.Logger) context.Context
⋮----
// WithProgressTracker stores the progress tracker in the context
func WithProgressTracker(ctx context.Context, tracker iface.ProgressTracker) context.Context
⋮----
// LoggerFromContext retrieves the logger from the context
// If no logger is found, it returns a non-verbose logger as fallback
func LoggerFromContext(cCtx *cli.Context) iface.Logger
⋮----
// Fallback to logger according to verbose flag if not found in context
⋮----
// ProgressTrackerFromContext retrieves the progress tracker from the context
// If no tracker is found, it returns a non-verbose tracker as fallback
func ProgressTrackerFromContext(ctx context.Context) iface.ProgressTracker
⋮----
// Fallback to non-verbose tracker if not found in context
⋮----
// ParseETHAmount parses ETH amount strings like "5ETH", "10.5ETH", "1000000000000000000" (wei)
// Returns the amount in wei as *big.Int
func ParseETHAmount(amountStr string) (*big.Int, error)
⋮----
// Remove any whitespace
⋮----
// Check if it ends with "ETH"
⋮----
// Remove the "ETH" suffix (case insensitive)
⋮----
// Parse the numeric part as float64 to handle decimals like "1.5ETH"
⋮----
// Convert ETH to wei (multiply by 10^18)
// Use big.Float to handle the large numbers properly
⋮----
// Convert to big.Int
⋮----
// If no "ETH" suffix, assume it's already in wei
⋮----
// ImpersonateAccount enables impersonation of an account on Anvil
func ImpersonateAccount(client *rpc.Client, address common.Address) error
⋮----
var result interface{}
⋮----
// StopImpersonatingAccount disables impersonation of an account on Anvil
func StopImpersonatingAccount(client *rpc.Client, address common.Address) error
⋮----
func (cc *ContractCaller) GetOperatorRegistrationMessageHash(
	ctx context.Context,
	operatorAddress common.Address,
	avsAddress common.Address,
	operatorSetId uint32,
	keyData []byte,
) ([32]byte, error)
⋮----
func (cc *ContractCaller) GetBN254OperatorSetOwner(
	ctx context.Context,
	avsAddress common.Address,
	operatorSetId uint32,
) (common.Address, error)
⋮----
func (cc *ContractCaller) GetECDSAOperatorSetOwner(
	ctx context.Context,
	avsAddress common.Address,
	operatorSetId uint32,
) (common.Address, error)
⋮----
func (cc *ContractCaller) EncodeBN254KeyData(pubKey *bn254.PublicKey) ([]byte, error)
⋮----
// Convert G1 point
⋮----
// Convert to IKeyRegistrar G2 point format
⋮----
// IsSemver checks if a version string is valid
func IsSemver(s string) bool
⋮----
// ParseVersion converts version string like "0.0.5" to comparable integers
func ParseVersion(v string) (major, minor, patch int, err error)
⋮----
// CompareVersions returns true if v1 > v2
func CompareVersions(v1, v2 string) (bool, error)
⋮----
// PeelBoolFromFlags reports whether a boolean CLI flag is set anywhere in args,
// It supports these forms:
//
//	--verbose
//	--verbose=true|false|1|0|yes|no|t|f
//	--verbose true|false|1|0|yes|no|t|f
//	-v
//	-v=true|false|1|0|yes|no|t|f
//	-v true|false|1|0|yes|no|t|f
⋮----
// The last occurrence wins. If a flag is present without an explicit value, it is treated as true.
func PeelBoolFromFlags(args []string, longFlag, shortFlag string) bool
⋮----
// isBoolLiteral parses common truthy and falsy string literals.
⋮----
// Exact long or short flag, possibly followed by a separate value token.
⋮----
// If the next token exists and is a boolean literal, consume it.
⋮----
i++ // consume the value token
⋮----
// No explicit value provided. Presence implies true.
⋮----
// Equals form for the long flag, for example --verbose=true.
⋮----
// Treat unknown values as presence implies true.
⋮----
// Equals form for the short flag, for example -v=false.
````

## File: pkg/common/yaml_test.go
````go
package common
⋮----
import (
	"encoding/json"
	"os"
	"reflect"
	"testing"

	"gopkg.in/yaml.v3"
)
⋮----
"encoding/json"
"os"
"reflect"
"testing"
⋮----
"gopkg.in/yaml.v3"
⋮----
func TestInterfaceNodeRoundTrip(t *testing.T)
func TestCloneNode(t *testing.T)
⋮----
func TestDeepMerge(t *testing.T)
⋮----
func TestGetChildByKey(t *testing.T)
⋮----
func TestLoadWriteYAML(t *testing.T)
⋮----
// Empty file test
⋮----
// acceptable
⋮----
// Non-mapping root node (e.g. array root)
⋮----
func TestInterfaceToNode_Nil(t *testing.T)
⋮----
func TestNodeToInterface_Nil(t *testing.T)
⋮----
func TestCloneNode_Nil(t *testing.T)
⋮----
func TestDeepMerge_BothNil(t *testing.T)
⋮----
func TestDeepMerge_EitherNil(t *testing.T)
⋮----
func TestGetChildByKey_NilNode(t *testing.T)
⋮----
func TestLoadYAML_InvalidYAML(t *testing.T)
⋮----
func TestWriteToPath_SequenceIndex(t *testing.T)
⋮----
// start with two-item list under "ops"
⋮----
// overwrite index 1
⋮----
// append a third entry
⋮----
func TestWriteToPath_BracketIndex(t *testing.T)
⋮----
func TestWriteToPath_FilterByKey(t *testing.T)
⋮----
func TestWriteToPath_MappingCreation(t *testing.T)
⋮----
func TestToStringID(t *testing.T)
⋮----
func TestNormalizeToKeyedMap_FromSlice(t *testing.T)
⋮----
func TestNormalizeToKeyedMap_FromMap(t *testing.T)
⋮----
func TestMapToSortedSlice(t *testing.T)
⋮----
// should be sorted numerically first: 2, 10, then "a"
````

## File: pkg/common/yaml.go
````go
package common
⋮----
import (
	"bytes"
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"regexp"
	"sort"
	"strconv"
	"strings"

	"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
	"gopkg.in/yaml.v3"
)
⋮----
"bytes"
"encoding/json"
"fmt"
"os"
"path/filepath"
"regexp"
"sort"
"strconv"
"strings"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
"gopkg.in/yaml.v3"
⋮----
// HandlerFunc defines operations on a YAML node
type HandlerFunc func(node *yaml.Node, last bool, val string) (*yaml.Node, error)
⋮----
// Set up regex patterns to match bracketed index/filters in path
var (
	idxRe  = regexp.MustCompile(`^(\w+)\[(\d+)\]$`)
⋮----
// LoadYAML reads a YAML file from the given path and unmarshals it into a *yaml.Node
func LoadYAML(path string) (*yaml.Node, error)
⋮----
var node yaml.Node
⋮----
// LoadMap loads the YAML file at path into a map[string]interface{}
func LoadMap(path string) (map[string]interface
⋮----
// YamlToMap unmarshals your YAML into interface{}, normalizes all maps, and returns the top‐level map[string]interface{}
func YamlToMap(b []byte) (map[string]interface
⋮----
var raw interface{}
⋮----
// Normalize will walk any nested map[interface{}]interface{} -> map[string]interface{}, and also recurse into []interface{}
func Normalize(i interface
⋮----
// WriteYAML encodes a *yaml.Node to YAML and writes it to the specified file path
func WriteYAML(path string, node *yaml.Node) error
⋮----
// WriteMap takes a map[string]interface{} and writes it back to a file
func WriteMap(path string, m map[string]interface
⋮----
// InterfaceToNode converts a Go value (typically map[string]interface{}) into a *yaml.Node
func InterfaceToNode(v interface
⋮----
// NodeToInterface converts a *yaml.Node back into a Go interface{}
func NodeToInterface(node *yaml.Node) (interface
⋮----
var out interface{}
⋮----
// Normalizes YAML-parsed structures
func CleanYAML(v interface
⋮----
// GetChildByKey returns the value node associated with the given key from a MappingNode
func GetChildByKey(node *yaml.Node, path string) *yaml.Node
⋮----
// map lookup part before any index
⋮----
// CloneNode performs a deep copy of a *yaml.Node, including its content and comments
func CloneNode(n *yaml.Node) *yaml.Node
⋮----
// DeepMerge merges two *yaml.Node trees recursively
//
// - If both nodes are MappingNodes, their keys are merged:
//   - Matching keys: recurse if both values are maps, else src replaces dst
//   - New keys in src are appended to dst
⋮----
// - For non-mapping nodes, src replaces dst
// - All merged values are deep-cloned to avoid shared references
func DeepMerge(dst, src *yaml.Node) *yaml.Node
⋮----
// ListYaml prints the contents of a YAML file to stdout, preserving order and comments.
// It rejects non-.yaml/.yml extensions and surfaces precise errors.
func ListYaml(filePath string, logger iface.Logger) error
⋮----
// verify file exists and is regular
⋮----
// ensure extension is .yaml or .yml
⋮----
// load the raw YAML node tree so we preserve ordering
⋮----
// header
⋮----
// encode the node back to YAML on stdout, preserving order & comments
⋮----
// SetMappingValue sets mapNode[keyNode.Value] = valNode, replacing existing or appending if missing.
func SetMappingValue(mapNode, keyNode, valNode *yaml.Node)
⋮----
// Ensure mapNode is a MappingNode
⋮----
// Scan existing entries (Content holds [key, value, key, value, …])
⋮----
// replace the paired value node
⋮----
// Not found: append key and value
⋮----
// WriteToPath sets or overwrites a value in the YAML tree given a dot-delimited path.
func WriteToPath(root *yaml.Node, path []string, val string) (*yaml.Node, error)
⋮----
// Ensure the provided value is clean
⋮----
// WorkingNode is our cursor as we descend the tree
⋮----
// Move through the path 1 segment at a time
⋮----
// Attempt to match indexed bracket path (operators[0]...)
⋮----
// Attempt to match on an indexed path (operators.0...)
⋮----
// Attempt to match filter path (operators[address=123]...)
⋮----
// Fallback to mapping (.key)
⋮----
// ToStringID converts a value of various numeric or string types into a string ID.
func ToStringID(value any) string
⋮----
case float64: // JSON numbers default to float64
⋮----
case json.Number: // when decoder.UseNumber(true) is set
⋮----
// NormalizeToKeyedMap converts a slice or map of objects into a map keyed by the given field.
func NormalizeToKeyedMap(input any, idField string) map[string]map[string]any
⋮----
id = mapKey // fallback to key if idField missing
⋮----
// MapToSortedSlice converts a keyed map back to a slice sorted by numeric id if possible.
func MapToSortedSlice(keyed map[string]map[string]any) []any
⋮----
type keyedObj struct {
		idStr   string
		idNum   int64
		hasNum  bool
		payload map[string]any
	}
⋮----
return objs[i].hasNum // numeric ids before non-numeric
⋮----
// sanitizeValue trims quotes from user input
func sanitizeValue(val string) string
⋮----
// tryBracketIndex detects foo[2]
func tryBracketIndex(root *yaml.Node, seg string) (HandlerFunc, *yaml.Node)
⋮----
// bracketHandler returns a handler for bracketed index
func bracketHandler(idx int) HandlerFunc
⋮----
// Append if targeting next index
⋮----
// tryNumericIndex detects .0 on a sequence
func tryNumericIndex(root *yaml.Node, seg string) (HandlerFunc, *yaml.Node)
⋮----
// numericHandler handles numeric segment on a sequence
func numericHandler(idx int) HandlerFunc
⋮----
// Append if next index
⋮----
// tryFilterSeq detects foo[key=val]
func tryFilterSeq(root *yaml.Node, seg string) (HandlerFunc, *yaml.Node)
⋮----
// filterHandler returns a handler for filter-by-key
func filterHandler(fk, fv string) HandlerFunc
⋮----
// handleMapping handles map key creation or overwrite
func handleMapping(root *yaml.Node, key string, last bool, val string) (*yaml.Node, error)
⋮----
// appendKeyValue appends a new key/value pair
func appendKeyValue(root *yaml.Node, key, val string) *yaml.Node
⋮----
// writeScalar overwrites a node with a scalar value, preserving int vs string
func writeScalar(node *yaml.Node, val string) (*yaml.Node, error)
⋮----
// integer literal
⋮----
// explicit string
````

## File: pkg/common/zeus.go
````go
package common
⋮----
import (
	"bufio"
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"os"
	"os/exec"
	"regexp"

	"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
	"gopkg.in/yaml.v3"
)
⋮----
"bufio"
"bytes"
"context"
"encoding/json"
"fmt"
"os"
"os/exec"
"regexp"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
"gopkg.in/yaml.v3"
⋮----
// L1ZeusAddressData represents the addresses returned by zeus list command
type L1ZeusAddressData struct {
	AllocationManager    string `json:"allocationManager"`
	DelegationManager    string `json:"delegationManager"`
	StrategyManager      string `json:"strategyManager"`
	CrossChainRegistry   string `json:"crossChainRegistry"`
	KeyRegistrar         string `json:"keyRegistrar"`
	ReleaseManager       string `json:"releaseManager"`
	OperatorTableUpdater string `json:"operatorTableUpdater"`
	TaskMailbox          string `json:"taskMailbox"`
	PermissionController string `json:"permissionController"`
}
⋮----
type L2ZeusAddressData struct {
	OperatorTableUpdater     string `json:"operatorTableUpdater"`
	ECDSACertificateVerifier string `json:"ecdsaCertificateVerifier"`
	BN254CertificateVerifier string `json:"bn254CertificateVerifier"`
	TaskMailbox              string `json:"taskMailbox"`
}
⋮----
// GetZeusAddresses runs the zeus env show commands and extracts core EigenLayer addresses.
func GetZeusAddresses(ctx context.Context, logger iface.Logger, contextName string) (*L1ZeusAddressData, *L2ZeusAddressData, error)
⋮----
var (
		l1Raw, l2Raw []byte
		err          error
	)
⋮----
// Default zeus env to sepolia for testnet/devnet
⋮----
// Override with mainnet envs
⋮----
// Run L1
⋮----
// Run L2
⋮----
// Parse the JSON outputs
var (
		l1ZeusData map[string]interface{}
		l2ZeusData map[string]interface{}
	)
⋮----
// Extract addresses
⋮----
// L1 keys
⋮----
// L2 keys
⋮----
// UpdateContextWithZeusAddresses updates the context configuration with addresses from Zeus
func UpdateContextWithZeusAddresses(context context.Context, logger iface.Logger, contextMap *yaml.Node, contextName string) error
⋮----
// contextMap must be the mapping node for "context". Guard it.
⋮----
// eigenlayer: {}
⋮----
// l1: {}
⋮----
// l2: {}
⋮----
// Prepare nodes for L1 contracts
⋮----
// Replace existing or append new entries in l1 section
⋮----
// Prepare nodes for L2 contracts
⋮----
// Replace existing or append new entries in l2 section
⋮----
func runZeusJSON(ctx context.Context, env string) ([]byte, error)
⋮----
// Keep stdout clean. Do not merge stderr.
var stdout, stderr bytes.Buffer
⋮----
// Reduce noise from Zeus if it supports these envs.
// They are harmless if unknown.
⋮----
// Clean stdout and extract the first JSON value
⋮----
// Remove ANSI escapes and lines starting with '+' (xtrace), preserve the rest.
func sanitizeCLIJSON(b []byte) []byte
⋮----
var out []byte
⋮----
// Return the first complete top-level JSON object or array from text.
func extractFirstTopLevelJSON(in []byte) ([]byte, error)
⋮----
func truncate(s string, n int) string
⋮----
// ensureMapping finds key under parent mapping and ensures its value node is a mapping.
// It returns the value node (which will be a *yaml.Node{Kind: MappingNode}).
func ensureMapping(parent *yaml.Node, key string) *yaml.Node
⋮----
// search existing pair
⋮----
// replace with an empty mapping
⋮----
// create new key: value: {}
````

## File: pkg/hooks/hooks_test.go
````go
package hooks
⋮----
import (
	"context"
	"errors"
	"fmt"
	"runtime"
	"testing"

	"github.com/Layr-Labs/devkit-cli/pkg/telemetry"

	"github.com/urfave/cli/v2"
)
⋮----
"context"
"errors"
"fmt"
"runtime"
"testing"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/telemetry"
⋮----
"github.com/urfave/cli/v2"
⋮----
// mockTelemetryClient is a test implementation of the telemetry.Client interface
type mockTelemetryClient struct {
	metrics []telemetry.Metric
}
⋮----
func (m *mockTelemetryClient) AddMetric(_ context.Context, metric telemetry.Metric) error
⋮----
func (m *mockTelemetryClient) Close() error
⋮----
// MockWithTelemetry is a test version of WithMetricEmission that uses a provided client
func MockWithTelemetry(action cli.ActionFunc, mockClient telemetry.Client) cli.ActionFunc
⋮----
// Use the mock client directly instead of setupTelemetry
⋮----
// Create metrics context
⋮----
// Add base properties
⋮----
// Add command flags as properties
⋮----
// Track command invocation
⋮----
// Execute the wrapped action and capture result
⋮----
// emit metrics
⋮----
func TestAddMetric(t *testing.T)
⋮----
// Create a mock telemetry client
⋮----
// Create context with telemetry client
⋮----
// Add a custom metric
⋮----
// Verify metrics were tracked
⋮----
// Check dimensions
⋮----
func TestWithTelemetry(t *testing.T)
⋮----
// Create a CLI context
⋮----
// Properly set up the Command
⋮----
// Create context
⋮----
// Create a wrapped action
⋮----
// Use our mock version instead of the real WithMetricEmission
⋮----
// Run the wrapped action
⋮----
// Verify events were tracked (invoked and success)
⋮----
// Check invoked event
⋮----
// Check success event
⋮----
// Check duration event
⋮----
func TestWithTelemetryError(t *testing.T)
⋮----
// Set up the command
⋮----
// Create a wrapped action that returns an error
⋮----
// Use our mock version
⋮----
// Verify events were tracked (invoked and fail)
⋮----
// Check fail event
⋮----
// Check error message in event properties
````

## File: pkg/hooks/hooks.go
````go
package hooks
⋮----
import (
	"fmt"
	"os"
	"time"

	"github.com/Layr-Labs/devkit-cli/pkg/common"
	"github.com/Layr-Labs/devkit-cli/pkg/common/devnet"
	"github.com/Layr-Labs/devkit-cli/pkg/common/logger"
	"github.com/Layr-Labs/devkit-cli/pkg/telemetry"

	"github.com/joho/godotenv"
	"github.com/urfave/cli/v2"
)
⋮----
"fmt"
"os"
"time"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common"
"github.com/Layr-Labs/devkit-cli/pkg/common/devnet"
"github.com/Layr-Labs/devkit-cli/pkg/common/logger"
"github.com/Layr-Labs/devkit-cli/pkg/telemetry"
⋮----
"github.com/joho/godotenv"
"github.com/urfave/cli/v2"
⋮----
// EnvFile is the name of the environment file
const EnvFile = ".env"
const namespace = "DevKit"
⋮----
type ActionChain struct {
	Processors []func(action cli.ActionFunc) cli.ActionFunc
}
⋮----
// NewActionChain creates a new action chain
func NewActionChain() *ActionChain
⋮----
// Use appends a new processor to the chain
func (ac *ActionChain) Use(processor func(action cli.ActionFunc) cli.ActionFunc)
⋮----
func (ac *ActionChain) Wrap(action cli.ActionFunc) cli.ActionFunc
⋮----
func ApplyMiddleware(commands []*cli.Command, chain *ActionChain)
⋮----
func getFlagValue(ctx *cli.Context, name string) interface
⋮----
func collectFlagValues(ctx *cli.Context) map[string]interface
⋮----
// App-level flags
⋮----
// Command-level flags
⋮----
func setupTelemetry(cCtx *cli.Context) telemetry.Client
⋮----
// Get effective telemetry preference (project takes precedence over global)
⋮----
// If telemetry is disabled, return noop client
⋮----
// WithFirstRunTelemetryPrompt handles first-run telemetry setup
func WithFirstRunTelemetryPrompt(cCtx *cli.Context) error
⋮----
// Check if this is the first run
⋮----
return nil // Don't fail the command, just skip the prompt
⋮----
return nil // Not first run, continue normally
⋮----
// Check for global flags that control telemetry prompt behavior
⋮----
SkipPromptInCI:   true, // Always skip in CI environments
⋮----
// Show telemetry prompt with options and get user choice
⋮----
// If prompt fails, mark first run complete but don't set telemetry preference
⋮----
// Save the user's choice globally
⋮----
// Still mark first run complete even if save fails
⋮----
// First run handling complete
⋮----
func WithMetricEmission(action cli.ActionFunc) cli.ActionFunc
⋮----
// Run command action
⋮----
// emit result metrics
⋮----
func emitTelemetryMetrics(ctx *cli.Context, actionError error)
⋮----
func LoadEnvFile(ctx *cli.Context) error
⋮----
// Skip loading .env for the create command
⋮----
// loadEnvFile loads environment variables from .env file if it exists
// Silently succeeds if no .env file is found
func loadEnvFile() error
⋮----
// Check if .env file exists in current directory
⋮----
return nil // .env doesn't exist, just return without error
⋮----
// Load .env file
⋮----
func WithCommandMetricsContext(ctx *cli.Context) error
⋮----
// Check for flagged contextName
⋮----
// Check config for contextName
var err error
⋮----
// If there is an error pulling the context, assume we're in devnet
⋮----
// Set context_name in metrics
⋮----
// Set appEnv details in metrics
⋮----
// Set flags in metrics
````

## File: pkg/migration/migrator_test.go
````go
package migration
⋮----
import (
	"errors"
	"testing"

	"gopkg.in/yaml.v3"
)
⋮----
"errors"
"testing"
⋮----
"gopkg.in/yaml.v3"
⋮----
// helper to parse YAML into *yaml.Node
func testNode(t *testing.T, input string) *yaml.Node
⋮----
var node yaml.Node
⋮----
// unwrap DocumentNode
⋮----
func TestResolveNode(t *testing.T)
⋮----
// scalar
⋮----
// nested
⋮----
// list
⋮----
func TestCloneNode(t *testing.T)
⋮----
// modify clone
⋮----
func TestPatchEngine_Apply(t *testing.T)
⋮----
func TestMigrateNode_AlreadyUpToDate(t *testing.T)
⋮----
// empty chain
````

## File: pkg/migration/migrator.go
````go
package migration
⋮----
import (
	"bytes"
	"errors"
	"fmt"
	"strconv"
	"strings"

	"github.com/Layr-Labs/devkit-cli/pkg/common"
	"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
	"gopkg.in/yaml.v3"
)
⋮----
"bytes"
"errors"
"fmt"
"strconv"
"strings"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common"
"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
"gopkg.in/yaml.v3"
⋮----
// PatchCondition defines a node-level condition
type PatchCondition interface {
	// ShouldApply returns true if the userNode should be patched based on oldNode
	ShouldApply(userNode, oldNode *yaml.Node) bool
}
⋮----
// ShouldApply returns true if the userNode should be patched based on oldNode
⋮----
// Available conditions
type Always struct{}
type Exists struct{}
type IfUnchanged struct{}
⋮----
// Always applies unconditionally
func (Always) ShouldApply(_, _ *yaml.Node) bool
⋮----
// Exists applies only if the userNode is present
⋮----
// IfUnchanged applies only if userNode equals oldNode
⋮----
// Which node to use as the starting point for a replacement
type Base int
⋮----
// Enum for available Base options
const (
	BaseAuto Base = iota // default when omitted
	BaseNew
	BaseUser
	BaseOld
)
⋮----
BaseAuto Base = iota // default when omitted
⋮----
// PatchRule defines a YAML node patch rule
type PatchRule struct {
	// Path: sequence of map keys or sequence indices (as strings)
	Path []string
	// Condition: returns true if the patch should apply
	Condition PatchCondition
	// Transform: optional node-level transformation on the new node
	Transform func(newNode *yaml.Node) *yaml.Node
	// Remove: if true, delete the node instead of patching
	Remove bool
	// Which node to base the patch on
	Base Base
}
⋮----
// Path: sequence of map keys or sequence indices (as strings)
⋮----
// Condition: returns true if the patch should apply
⋮----
// Transform: optional node-level transformation on the new node
⋮----
// Remove: if true, delete the node instead of patching
⋮----
// Which node to base the patch on
⋮----
// MigrationStep represents one version-to-version migration
type MigrationStep struct {
	From    string
	To      string
	Apply   func(user, oldDef, newDef *yaml.Node) (*yaml.Node, error)
	OldYAML []byte
	NewYAML []byte
}
⋮----
// PatchEngine applies a set of PatchRule against a user YAML AST preserving order, comments, and anchors
type PatchEngine struct {
	Old   *yaml.Node
	New   *yaml.Node
	User  *yaml.Node
	Rules []PatchRule
}
⋮----
// VersionGreaterThan uses semantic dot-separated compare for strings
type VersionComparator func(string, string) bool
⋮----
// Known errors which we can ignore
var ErrAlreadyUpToDate = errors.New("already up to date")
⋮----
// Apply walks each rule, and when Condition is met, either removes the node or replaces it with a (transformed) copy
func (e *PatchEngine) Apply() error
⋮----
// chose the base node to use for patch operation
⋮----
// insert uses New by default
⋮----
// legacy behavior picks newNode
⋮----
// transforms default to User
⋮----
// Overwrite existing value for last key
⋮----
// Missing node - insert once
⋮----
// check if we should apply (compare users to old)
⋮----
// if deleting
⋮----
// choose replacement
⋮----
// overwrite in place
⋮----
// Run all migrations after current version upto latestVersion according to migrationChain
func MigrateYaml(logger iface.Logger, path string, latestVersion string, migrationChain []MigrationStep) error
⋮----
// Load as YAML AST
⋮----
// Extract version scalar
⋮----
// Continue and don't say anything if the user version is latest
⋮----
// Perform node-based migration
⋮----
// Write AST back to disk
⋮----
// MigrateNode runs all MigrationStep from 'from' to 'to' on the provided user YAML AST, returning the migrated AST
func MigrateNode(
	user *yaml.Node,
	from, to string,
	chain []MigrationStep,
) (*yaml.Node, error)
⋮----
// End early if from == to
⋮----
var err error
⋮----
// ResolveNode walks the YAML AST following path segments and returns the node or nil
func ResolveNode(root *yaml.Node, path []string) *yaml.Node
⋮----
// if DocumentNode, unwrap
⋮----
// CloneNode deep-copies a *yaml.Node, preserving comments and anchors
func CloneNode(n *yaml.Node) *yaml.Node
⋮----
// EnsureKeyWithComment adds “# comment\nkey:” (with an empty sequence value) if key missing
func EnsureKeyWithComment(root *yaml.Node, path []string, comment string)
⋮----
// locate parent mapping
⋮----
// skip if key already present
⋮----
// append key (with comment) + empty seq
⋮----
// findParent locates the parent mapping or sequence node and the index/key position
func findParent(root *yaml.Node, path []string) (*yaml.Node, int)
⋮----
// walk strictly through all but the last segment
⋮----
// next node is value
⋮----
// missing mapping key, return nil and assert missing to caller
⋮----
// invalid or out-of-range index, return nil and assert missing to caller
⋮----
// cannot descend further, return nil and assert missing to caller
⋮----
// curr is parent of target
⋮----
// mapping parent
⋮----
// parent exists but key is missing
⋮----
// sequence parent
⋮----
// parent is sequence but target index missing
⋮----
// insertNode inserts a key/value pair from a mapping or an element from a sequence
func insertNode(parent *yaml.Node, idx int, key string, value *yaml.Node)
⋮----
// deleteNode removes a key/value pair from a mapping or an element from a sequence
func deleteNode(parent *yaml.Node, idx int)
⋮----
// remove key and value
⋮----
// remove element
⋮----
func versionLessThan(v1, v2 string) bool
⋮----
func versionGreaterThan(v1, v2 string) bool
````

## File: pkg/telemetry/metric.go
````go
package telemetry
⋮----
import (
	"context"
	"errors"
	"time"
)
⋮----
"context"
"errors"
"time"
⋮----
// MetricsContext holds all metrics collected during command execution
type MetricsContext struct {
	StartTime  time.Time         `json:"start_time"`
	Metrics    []Metric          `json:"metrics"`
	Properties map[string]string `json:"properties"`
}
⋮----
// Metric represents a single metric with its value and dimensions
type Metric struct {
	Value      float64           `json:"value"`
	Name       string            `json:"name"`
	Dimensions map[string]string `json:"dimensions"`
}
⋮----
// metricsContextKey is used to store the metrics context
type metricsContextKey struct{}
⋮----
// WithMetricsContext returns a new context with the metrics context
func WithMetricsContext(ctx context.Context, metrics *MetricsContext) context.Context
⋮----
// MetricsFromContext retrieves the metrics context
func MetricsFromContext(ctx context.Context) (*MetricsContext, error)
⋮----
// NewMetricsContext creates a new metrics context
func NewMetricsContext() *MetricsContext
⋮----
// AddMetric adds a new metric to the context without dimensions
func (m *MetricsContext) AddMetric(name string, value float64)
⋮----
// AddMetricWithDimensions adds a new metric to the context with dimensions
func (m *MetricsContext) AddMetricWithDimensions(name string, value float64, dimensions map[string]string)
````

## File: pkg/telemetry/noop.go
````go
package telemetry
⋮----
import "context"
⋮----
// NoopClient implements the Client interface with no-op methods
type NoopClient struct{}
⋮----
// NewNoopClient creates a new no-op client
func NewNoopClient() *NoopClient
⋮----
// AddMetric implements the Client interface
func (c *NoopClient) AddMetric(_ context.Context, _ Metric) error
⋮----
// Close implements the Client interface
func (c *NoopClient) Close() error
⋮----
// IsNoopClient checks if the client is a NoopClient (disabled telemetry)
func IsNoopClient(client Client) bool
````

## File: pkg/telemetry/posthog.go
````go
package telemetry
⋮----
import (
	"context"
	"os"

	"github.com/Layr-Labs/devkit-cli/pkg/common"

	"github.com/posthog/posthog-go"
	"gopkg.in/yaml.v3"
)
⋮----
"context"
"os"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common"
⋮----
"github.com/posthog/posthog-go"
"gopkg.in/yaml.v3"
⋮----
// PostHogClient implements the Client interface using PostHog
type PostHogClient struct {
	namespace      string
	client         posthog.Client
	appEnvironment *common.AppEnvironment
}
⋮----
// NewPostHogClient creates a new PostHog client
func NewPostHogClient(environment *common.AppEnvironment, namespace string) (*PostHogClient, error)
⋮----
// No API key available, return noop client without error
⋮----
// AddMetric implements the Client interface
func (c *PostHogClient) AddMetric(_ context.Context, metric Metric) error
⋮----
// Create properties map starting with base properties
⋮----
// Add metric value
⋮----
// Add metric dimensions
⋮----
// Never return errors from telemetry operations
⋮----
// Close implements the Client interface
func (c *PostHogClient) Close() error
⋮----
// Ignore any errors from Close operations
⋮----
func getPostHogAPIKey() string
⋮----
// Priority order:
// 1. Environment variable
// 2. Project config file
// 3. Embedded key (set at build time)
// Check environment variable first
⋮----
// Check project config file next (config/config.yaml)
⋮----
// Parse the full config structure to extract the key
var config struct {
			Config struct {
				Project struct {
					PostHogAPIKey string `yaml:"posthog_api_key"`
				} `yaml:"project"`
			} `yaml:"config"`
		}
⋮----
// return embedded key if no overrides provided
⋮----
func getPostHogEndpoint() string
````

## File: pkg/telemetry/telemetry_test.go
````go
package telemetry
⋮----
import (
	"context"
	"testing"

	"github.com/Layr-Labs/devkit-cli/pkg/common"
)
⋮----
"context"
"testing"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common"
⋮----
func TestNoopClient(t *testing.T)
⋮----
// Test AddMetric doesn't panic
⋮----
// Test Close doesn't panic
⋮----
func TestContext(t *testing.T)
⋮----
func TestProperties(t *testing.T)
````

## File: pkg/telemetry/telemetry.go
````go
package telemetry
⋮----
import (
	"context"
)
⋮----
"context"
⋮----
// Embedded devkit telemetry api key from release
var embeddedTelemetryApiKey string
⋮----
// Client defines the interface for telemetry operations
type Client interface {
	// AddMetric emits a single metric
	AddMetric(ctx context.Context, metric Metric) error
	// Close cleans up any resources
	Close() error
}
⋮----
// AddMetric emits a single metric
⋮----
// Close cleans up any resources
⋮----
type clientContextKey struct{}
⋮----
// ContextWithClient returns a new context with the telemetry client
func ContextWithClient(ctx context.Context, client Client) context.Context
⋮----
// ClientFromContext retrieves the telemetry client from context
func ClientFromContext(ctx context.Context) (Client, bool)
````

## File: pkg/template/config_test.go
````go
package template
⋮----
import (
	"testing"
)
⋮----
"testing"
⋮----
func TestLoadConfig(t *testing.T)
⋮----
// Test template URL lookup
⋮----
// Test non-existent architecture
⋮----
// Test non-existent language
````

## File: pkg/template/config.go
````go
package template
⋮----
import (
	"fmt"

	"github.com/Layr-Labs/devkit-cli/config"

	"gopkg.in/yaml.v3"
)
⋮----
"fmt"
⋮----
"github.com/Layr-Labs/devkit-cli/config"
⋮----
"gopkg.in/yaml.v3"
⋮----
type Config struct {
	Framework map[string]FrameworkSpec `yaml:"framework"`
}
⋮----
type FrameworkSpec struct {
	Template  string   `yaml:"template"`
	Version   string   `yaml:"version"`
	Languages []string `yaml:"languages"`
}
⋮----
func LoadConfig() (*Config, error)
⋮----
// pull from embedded string
⋮----
var config Config
⋮----
// GetTemplateURLs returns template URL & version for the requested framework + language.
// Fails fast if the framework does not exist, the template URL is blank, or the
// language is not declared in the framework's Languages slice.
func GetTemplateURLs(config *Config, framework, lang string) (string, string, error)
⋮----
// Language gate – only enforce if Languages slice is populated
````

## File: pkg/template/git_client_test.go
````go
package template_test
⋮----
import (
	"bytes"
	"context"
	"errors"
	"fmt"
	"os/exec"
	"path/filepath"
	"regexp"
	"strings"
	"testing"

	"github.com/Layr-Labs/devkit-cli/pkg/template"
)
⋮----
"bytes"
"context"
"errors"
"fmt"
"os/exec"
"path/filepath"
"regexp"
"strings"
"testing"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/template"
⋮----
// RunnerFunc is an adapter to let us define Runner inline
type RunnerFunc func(ctx context.Context, name string, args ...string) *exec.Cmd
⋮----
func (f RunnerFunc) CommandContext(ctx context.Context, name string, args ...string) *exec.Cmd
⋮----
// errReader always returns an error on Read
type errReader struct{}
⋮----
func (errReader) Read(_ []byte) (int, error)
⋮----
// In-memory reporter for assertions
type recordingReporter struct {
	events []template.CloneEvent
}
⋮----
func (r *recordingReporter) Report(ev template.CloneEvent)
⋮----
// makeClientWithOutput gives us a real GitClient with default regexps and a mock Runner
func makeClientWithOutput(output string) *template.GitClient
⋮----
// stub Runner: any CommandContext returns a Cmd that just writes `output` to stderr
⋮----
func TestParseCloneOutput_AllEvents(t *testing.T)
⋮----
// top-level progress
⋮----
// submodule discovery
⋮----
// enter submodule
⋮----
// We expect exactly 5 events in sequence:
// - top-level progress 10%
// - submodule discovered
// - submodule clone start
// - submodule progress 0%
// - submodule progress 100%
⋮----
var (
		foundTop10      bool
		foundDiscovery  bool
		foundCloneStart bool
		foundSubm0      bool
		foundSubm100    bool
	)
⋮----
func TestParseCloneOutput_TrimPath(t *testing.T)
⋮----
// Should have one SubmoduleCloneStart event and progress set to 0
⋮----
func TestParseCloneOutput_ScanError(t *testing.T)
⋮----
// Simulate a reader that fails mid-scan
⋮----
func TestClone_WithMockProgress(t *testing.T)
⋮----
// Make a Runner that prints two progress lines then succeeds
⋮----
// Ensure we saw progress event at 42% and final 100% for top-level
````

## File: pkg/template/git_client.go
````go
package template
⋮----
import (
	"bufio"
	"bytes"
	"context"
	"fmt"
	"io"
	"os"
	"os/exec"
	"path/filepath"
	"regexp"
	"strings"
)
⋮----
"bufio"
"bytes"
"context"
"fmt"
"io"
"os"
"os/exec"
"path/filepath"
"regexp"
"strings"
⋮----
// CloneEventType enumerates the kinds of things git clone can tell us
type CloneEventType int
⋮----
const (
	EventSubmoduleDiscovered CloneEventType = iota
	EventSubmoduleCloneStart
	EventProgress
	EventCloneComplete
	EventCloneFailed
)
⋮----
// CloneEvent is a single “thing that happened” during clone
type CloneEvent struct {
	Type     CloneEventType
	Parent   string // for submodule events
	Module   string // current module path
	Name     string // submodule name or module path
	URL      string // for discovery
	Ref      string // current ref we are cloning from
	Progress int    // 0–100
}
⋮----
Parent   string // for submodule events
Module   string // current module path
Name     string // submodule name or module path
URL      string // for discovery
Ref      string // current ref we are cloning from
Progress int    // 0–100
⋮----
// Reporter consumes CloneEvents
type Reporter interface {
	Report(CloneEvent)
}
⋮----
// Runner lets us inject/mock command execution in tests
type Runner interface {
	// CommandContext mirrors exec.CommandContext
	CommandContext(ctx context.Context, name string, args ...string) *exec.Cmd
}
⋮----
// CommandContext mirrors exec.CommandContext
⋮----
// execRunner is the real-world Runner
type execRunner struct{}
⋮----
func (execRunner) CommandContext(ctx context.Context, name string, args ...string) *exec.Cmd
⋮----
// GitClient does our actual clone + parsing
type GitClient struct {
	Runner         Runner
	ReceivingRegex *regexp.Regexp
	CloningRegex   *regexp.Regexp
	SubmoduleRegex *regexp.Regexp
}
⋮----
// NewGitClient builds a GitClient using the real exec
func NewGitClient() *GitClient
⋮----
// NewGitClientWithRunner enables injecting a custom Runner (e.g. in tests)
func NewGitClientWithRunner(r Runner) *GitClient
⋮----
// Clone runs the following to enable clones from SHAs, tags and branches:
//   - git clone --no-checkout --depth 1 <repoURL> <dest>
//   - git -C <dest> checkout --quiet <ref>
//   - git -C <dest> submodule update --init --recursive --progress
func (g *GitClient) Clone(
	ctx context.Context,
	repoURL, ref, dest string,
	config GitFetcherConfig,
	reporter Reporter,
) error
⋮----
// Derive a short name for the top-level module
⋮----
// Plain clone (no --depth, no parsing)
⋮----
// In verbose mode print git logs directly
⋮----
// Report progress to reporter to handle structured logging
⋮----
// parse the initial clone progress into events
⋮----
// Checkout the desired ref after cloning to pull submodules from the correct refs
⋮----
// Report failure
⋮----
// If checkout fails, remove the .git folder so user isn't left in a broken state
⋮----
// return err
⋮----
// Force a 100% report for the top-level repo (in case parse missed it)
⋮----
// Recursive submodule update with progress
⋮----
// If verbose, print git logs directly
⋮----
// this will emit EventProgress etc. as submodules download
⋮----
// Notify done
⋮----
// ParseCloneOutput scans gits progress output and emits events
func (g *GitClient) ParseCloneOutput(r io.Reader, rep Reporter, dest string, ref string) error
⋮----
// Submodule discovery
⋮----
// New clone path
⋮----
// Finish previous module
⋮----
// Percent progress
⋮----
var pct int
⋮----
func (g *GitClient) GitIsClean() (bool, error)
⋮----
var out bytes.Buffer
⋮----
func (g *GitClient) EnsureGitignoreEntry(path, entry string) error
⋮----
// Create .gitignore if missing
⋮----
// Check if entry exists
⋮----
return nil // already present
⋮----
// Append entry
⋮----
func (g *GitClient) Commit(file, msg string) error
````

## File: pkg/template/git_fetcher_test.go
````go
package template_test
⋮----
import (
	"context"
	"os"
	"os/exec"
	"path/filepath"
	"sync"
	"testing"

	"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
	"github.com/Layr-Labs/devkit-cli/pkg/common/logger"
	"github.com/Layr-Labs/devkit-cli/pkg/common/progress"
	"github.com/Layr-Labs/devkit-cli/pkg/template"
)
⋮----
"context"
"os"
"os/exec"
"path/filepath"
"sync"
"testing"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
"github.com/Layr-Labs/devkit-cli/pkg/common/logger"
"github.com/Layr-Labs/devkit-cli/pkg/common/progress"
"github.com/Layr-Labs/devkit-cli/pkg/template"
⋮----
// mockRunnerSuccess always returns a Cmd that exits 0
type mockRunnerSuccess struct{}
⋮----
func (mockRunnerSuccess) CommandContext(_ context.Context, _ string, _ ...string) *exec.Cmd
⋮----
// mockRunnerFail always returns a Cmd that exits 1
type mockRunnerFail struct{}
⋮----
// mockRunnerProgress emits "git clone"-style progress on stderr
type mockRunnerProgress struct{}
⋮----
// This shell script writes two progress lines then exits 0
⋮----
// spyTrackerDedup records only the latest Set() per module.
type spyTrackerDedup struct {
	mu    sync.Mutex
	order []string
	byID  map[string]struct {
		Pct   int
		Label string
	}
⋮----
func newSpyTrackerDedup() *spyTrackerDedup
⋮----
func (s *spyTrackerDedup) Set(id string, pct int, label string)
⋮----
func (s *spyTrackerDedup) Render()
⋮----
func (s *spyTrackerDedup) Clear()
⋮----
func (s *spyTrackerDedup) ProgressRows() []iface.ProgressRow
⋮----
// getFetcherWithRunner returns a GitFetcher and its underlying LogProgressTracker.
func getFetcherWithRunner(r template.Runner) (*template.GitFetcher, *spyTrackerDedup)
⋮----
// Inject our spyTracker instead of the real one:
⋮----
func TestFetchSucceedsWithMockRunner(t *testing.T)
⋮----
func TestFetchFailsWhenCloneFails(t *testing.T)
⋮----
func TestReporterGetsProgressEvents(t *testing.T)
⋮----
// Build a client that emits 50% then 100% on stderr
⋮----
// Inspect the tracker: it only logs on 100%
⋮----
// Expectations after successful run
⋮----
// TestCloneRealRepo integration test
func TestCloneRealRepo(t *testing.T)
⋮----
// Use the default hourglass go template
⋮----
// Use real runner
⋮----
// Set-up gitFetcher with real client
⋮----
// Attempt a real clone
⋮----
// Verify .git exists
⋮----
// Verify at least one known submodule folder exists
⋮----
// Verify we saw at least one 100% record
````

## File: pkg/template/git_fetcher.go
````go
package template
⋮----
import (
	"context"
	"fmt"

	"github.com/Layr-Labs/devkit-cli/pkg/common/logger"
)
⋮----
"context"
"fmt"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common/logger"
⋮----
// GitFetcherConfig holds options; we only care about Verbose here
type GitFetcherConfig struct {
	Verbose bool
}
⋮----
// TODO: implement metric transport
type GitMetrics interface {
	CloneStarted(repo string)
	CloneFinished(repo string, err error)
}
⋮----
// GitFetcher wraps clone with metrics and reporting
type GitFetcher struct {
	Client  *GitClient
	Metrics GitMetrics
	Config  GitFetcherConfig
	Logger  logger.ProgressLogger
}
⋮----
func (f *GitFetcher) Fetch(ctx context.Context, repoURL, ref, targetDir string) error
⋮----
// Print job initiation
⋮----
// Report to metrics
⋮----
// Build a reporter that knows how to drive our ProgressLogger
var reporter Reporter
⋮----
// Initiate clone
⋮----
// Print job completion
````

## File: pkg/template/git_reporter_test.go
````go
package template_test
⋮----
import (
	"strings"
	"testing"

	"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
	"github.com/Layr-Labs/devkit-cli/pkg/common/logger"
	"github.com/Layr-Labs/devkit-cli/pkg/template"
)
⋮----
"strings"
"testing"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common/iface"
"github.com/Layr-Labs/devkit-cli/pkg/common/logger"
"github.com/Layr-Labs/devkit-cli/pkg/template"
⋮----
type mockTracker struct {
	// Percentage by module
	perc   map[string]int
	label  map[string]string
	clears int
}
⋮----
// Percentage by module
⋮----
func newMockTracker() *mockTracker
⋮----
// Set is called by ProgressLogger.SetProgress
func (f *mockTracker) Set(id string, pct int, displayText string)
⋮----
// record only the max pct seen
⋮----
// Render is no-op here
func (f *mockTracker) Render()
⋮----
// Clear is called when progress is cleared
func (f *mockTracker) Clear()
⋮----
// ProgressRows is a no-op here
func (s *mockTracker) ProgressRows() []iface.ProgressRow
⋮----
func TestCloneReporterEndToEnd(t *testing.T)
⋮----
// Create the reporter for a repo named "foo"
⋮----
// Simulate events
⋮----
// After completion, we expect:
// - For repo root "foo": final percentage 100
// - For modA: final percentage 100
⋮----
// We also expect that the displayText for foo contains the ref
⋮----
// And that Clear was called at least once (at end)
⋮----
func TestCloneReporterSubmoduleDiscoveryGrouping(t *testing.T)
⋮----
// Two discoveries under same parent, then start
⋮----
// Now trigger the clone start: should flush both
⋮----
// That flush should have called Clear() once
⋮----
func TestCloneReporterFallbackRootProgress(t *testing.T)
⋮----
// Emit a Progress event with Module=""
⋮----
// We should have seen update to 33%
````

## File: pkg/template/git_reporter.go
````go
package template
⋮----
import (
	"fmt"
	"path/filepath"
	"strings"

	"github.com/Layr-Labs/devkit-cli/pkg/common/logger"
)
⋮----
"fmt"
"path/filepath"
"strings"
⋮----
"github.com/Layr-Labs/devkit-cli/pkg/common/logger"
⋮----
type SubmoduleReport struct {
	Name string
	Dest string
	URL  string
}
⋮----
// cloneReporter implements Reporter and knows how to render submodules + progress for clones
type cloneReporter struct {
	logger     logger.ProgressLogger
	repoName   string
	parent     string
	final      string
	discovered []SubmoduleReport
	metrics    GitMetrics
}
⋮----
func NewCloneReporter(repoURL string, lg logger.ProgressLogger, m GitMetrics) Reporter
⋮----
func (r *cloneReporter) Report(e CloneEvent)
⋮----
// Clear prev progress before starting next set
⋮----
// Print submodule discoveries
⋮----
// Log all details of the discovery
⋮----
// Set progress to report all at 0 at start of cloning layer
⋮----
// Spacing line
⋮----
// Clear discoveries after printing
````

## File: pkg/testutils/utils.go
````go
package testutils
⋮----
import (
	"bytes"
	"context"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"testing"

	"github.com/Layr-Labs/devkit-cli/config/configs"
	"github.com/Layr-Labs/devkit-cli/config/contexts"
	"github.com/Layr-Labs/devkit-cli/pkg/common"
	"github.com/Layr-Labs/devkit-cli/pkg/common/logger"

	"github.com/urfave/cli/v2"
)
⋮----
"bytes"
"context"
"fmt"
"os"
"os/exec"
"path/filepath"
"testing"
⋮----
"github.com/Layr-Labs/devkit-cli/config/configs"
"github.com/Layr-Labs/devkit-cli/config/contexts"
"github.com/Layr-Labs/devkit-cli/pkg/common"
"github.com/Layr-Labs/devkit-cli/pkg/common/logger"
⋮----
"github.com/urfave/cli/v2"
⋮----
type ctxKey string
⋮----
// ConfigContextKey identifies the ConfigWithContextConfig in context
const ConfigContextKey ctxKey = "ConfigWithContextConfig"
⋮----
func WithTestConfig(cmd *cli.Command) *cli.Command
⋮----
// WithTestConfigAndNoopLogger sets up a test configuration and no-op logger for silent testing
func WithTestConfigAndNoopLogger(cmd *cli.Command) *cli.Command
⋮----
// Create no-op logger and progress tracker
⋮----
// CreateTestAppWithNoopLoggerAndAccess creates a CLI app with no-op logger and returns both app and logger
func CreateTestAppWithNoopLoggerAndAccess(name string, flags []cli.Flag, action cli.ActionFunc) (*cli.App, *logger.NoopLogger)
⋮----
// Use the same logger instance
⋮----
// WithTestConfigAndNoopLoggerAndAccess sets up test config and no-op logger, returning both command and logger
func WithTestConfigAndNoopLoggerAndAccess(cmd *cli.Command) (*cli.Command, *logger.NoopLogger)
⋮----
// helper to create a temp AVS project dir with config.yaml copied
func CreateTempAVSProject(t *testing.T) (string, error)
⋮----
// Create config/ directory
⋮----
// Copy config.yaml
⋮----
// Create config/contexts directory
⋮----
// Set fork_urls as envs only if not already set (fallback behavior)
⋮----
os.Setenv("L1_FORK_URL", "https://ethereum-holesky.publicnode.com") // Ethereum Holesky for L1
⋮----
os.Setenv("L2_FORK_URL", "https://base-sepolia.gateway.tenderly.co") // Base Sepolia for L2
⋮----
// Copy devnet.yaml context file
⋮----
// Create build script
⋮----
func FindSubcommandByName(name string, commands []*cli.Command) *cli.Command
⋮----
func CaptureOutput(fn func()) (stdout string, stderr string)
⋮----
// Get the logger
⋮----
// Capture stdout
⋮----
var buf bytes.Buffer
⋮----
// Run target code
⋮----
// Restore
⋮----
func TestGitCall(repoDir string, cmds [][]string) error
⋮----
func TestGitInit(repoDir string) error
⋮----
// Init git repo
⋮----
func TestGitDiscardChanges(repoDir string) error
⋮----
// Discard changes in working tree
````

## File: scripts/bundleReleases.sh
````bash
#!/usr/bin/env bash

VERSION=$1

if [[ -z $VERSION ]]; then
    echo "Usage: $0 <version>"
    exit 1
fi


for i in $(ls release); do
    fileName="devkit-${i}-${VERSION}.tar.gz"

    tar -cvf "./release/${fileName}" -C "./release/${i}/" devkit
done
````

## File: scripts/version.sh
````bash
#!/usr/bin/env bash

REF=$1

versionFile=$(cat VERSION | tr -d '[:space:]')
echo "Using version '${versionFile}'"
if [[ $REF == refs/tags/* ]]; then
    # check if versionFile equals the tag.
    if [[ $versionFile != "${REF#refs/tags/}" ]]; then
      echo "Version in VERSION file does not match the tag"
      exit 1
    fi
    echo "Version correctly matches tag"
else
    # if this isnt a release, add the commit hash to the end of the version
    v=$(git rev-parse --short HEAD)
    updatedVersion="${versionFile}+${v}"
    echo "Updated version to '${updatedVersion}'"
    echo -n $updatedVersion > VERSION
fi
````

## File: test/integration/migration/keystores/operator1.bls.keystore.json
````json
{
  "crypto": {
    "kdf": {
      "function": "scrypt",
      "params": {
        "dklen": 32,
        "n": 262144,
        "p": 1,
        "r": 8,
        "salt": "d6f87d41f3e579f5c01842c97bd06a8d3ed2bbb927f1af0b0b84597ba8973462"
      },
      "message": ""
    },
    "checksum": {
      "function": "sha256",
      "params": {},
      "message": "edf33551b6dfcbcb9c1fd284b3df211121992694c896d07a6aa270f08bfad691"
    },
    "cipher": {
      "function": "aes-128-ctr",
      "params": {
        "iv": "f78c4113516550a1166f631bd17f17a5"
      },
      "message": "bc833e7f5d91f70fc1f452b19648b6c49976fe93d394789047ecc6ece6006fa6df0a4e63c885f26d514af5171d8c6c32ad5286be3ac6867df42921eca2ddd97a"
    }
  },
  "pubkey": "19fb7a235dbb9d09a549bde919fd738ad9eea8829462f90b0cb1d305497509fb2b1cb5c63fc2225c4e014ae056be73c568c34bbeadf37eaf019aec13e11f7e93136694c1eefb9b8853185ad57abb356edd4a0e8187dc35297a1adc26d05c6d062d64523c7380de3a4b9607035e5789544b453c408564b6ae57ee4ebb20c5f38e",
  "path": "m/1/0/0",
  "uuid": "64e38071-7634-496e-b10a-89cdf59ac3ab",
  "version": 4,
  "curveType": "bn254"
}
````

## File: test/integration/migration/keystores/operator1.ecdsa.keystore.json
````json
{
  "address": "90f79bf6eb2c4f870365e785982e1f101e93b906",
  "crypto": {
    "cipher": "aes-128-ctr",
    "ciphertext": "cb9721b2bb12f67f63eadcbc42e7a2ac5721b03dbe50d07c723cd7693921b477",
    "cipherparams": {
      "iv": "d3395f83b964967800b3071195cee867"
    },
    "kdf": "scrypt",
    "kdfparams": {
      "dklen": 32,
      "n": 262144,
      "p": 1,
      "r": 8,
      "salt": "0fe7be44e9d127275d57a0e841be14f0e722467d69136f28683c3a1ad8c98333"
    },
    "mac": "d43b0060ac1e5a95f66fc99493bf7bb0c180eee12aadfe389e5706b8bda42c64"
  },
  "id": "4df14231-53b3-49c4-8d29-823197cb217c",
  "version": 3
}
````

## File: test/integration/migration/keystores/operator2.bls.keystore.json
````json
{
  "crypto": {
    "kdf": {
      "function": "scrypt",
      "params": {
        "dklen": 32,
        "n": 262144,
        "p": 1,
        "r": 8,
        "salt": "943edb5c49e538b9e7707e87abda46ad5960c0568f465c9eb289b6d56eee50cf"
      },
      "message": ""
    },
    "checksum": {
      "function": "sha256",
      "params": {},
      "message": "a2d841d2182ed96d7d5f3fc663109c77b692229ea12cacfa9a1f569191360f39"
    },
    "cipher": {
      "function": "aes-128-ctr",
      "params": {
        "iv": "f113dda8133c9640ec7a08d21d5f8629"
      },
      "message": "6b7ec13bbe3091326f37b2a801a5d8b5c61c5d4214d1d75d944781ed68bc214f257e3cf9fc7daa9752d68c92e30cc106c35ff385af0c0b88a2fd1c84e9750957"
    }
  },
  "pubkey": "22585e9dde848ba29e014c9a2c8ab2e398bd9a0d136c2090d0c397f5175f489d0585466f0a0c2a5085879675dd345ad8602041c5b1aa14bf532060e62d595c610e82952b99729adb02023985f89973c29f115b4648d4d0a21c1c32a76027d6151407aaed9a860d41e610db40bfe89f47e022716f663a50c1a0b131eab581495e",
  "path": "m/1/0/0",
  "uuid": "d9bee745-5bb4-4946-a1c0-b6183a17138c",
  "version": 4,
  "curveType": "bn254"
}
````

## File: test/integration/migration/keystores/operator2.ecdsa.keystore.json
````json
{
  "address": "15d34aaf54267db7d7c367839aaf71a00a2c6a65",
  "crypto": {
    "cipher": "aes-128-ctr",
    "ciphertext": "e2376b84e186e148dbcaabd6ccce475b58e1ea0bf336dc44a7b431cda211a83e",
    "cipherparams": {
      "iv": "c94e317e7ff695f9aa637f6890b78d17"
    },
    "kdf": "scrypt",
    "kdfparams": {
      "dklen": 32,
      "n": 262144,
      "p": 1,
      "r": 8,
      "salt": "6c642b7154147826278bb6d7b6fdbc8415fb2858641fa8a4edc4b0b8f550fa7f"
    },
    "mac": "e8dc1ab58434fac3f76fc9dbf2ab0f720bbfa4e721e6763c9e982f55a5ef139a"
  },
  "id": "c25256a8-bd0b-41b6-b432-323cd26db0fc",
  "version": 3
}
````

## File: test/integration/migration/keystores/operator3.bls.keystore.json
````json
{
  "crypto": {
    "kdf": {
      "function": "scrypt",
      "params": {
        "dklen": 32,
        "n": 262144,
        "p": 1,
        "r": 8,
        "salt": "c9c35c33db1d672a5be63cc2006ee1d5c34c747c068b4cd41f1b3360b412939f"
      },
      "message": ""
    },
    "checksum": {
      "function": "sha256",
      "params": {},
      "message": "3b0156ae5750c7d6c343c0158199be41f7cc1d9fe5924473baec0b973c906eea"
    },
    "cipher": {
      "function": "aes-128-ctr",
      "params": {
        "iv": "0ee49004c22d1fafd963bb0bc4410e17"
      },
      "message": "6b6c27896adca59d564d550f04ffbd5d637a9ac05381db68e1d4d3a90547399ae58a39dbb8e8b4257c2fa8a3b11a1bbdf60f35d5faf120ad08fe7d986cc4dc0cb2bc2746621e7449cff6d2a7"
    }
  },
  "pubkey": "1726a24de8eb80b5cb2d94292b6c24bfd9f1277dbc9b98cbb8e12b4f59e3ea73127ffcedd665f59c0c111656c6228d52c201c912bdd6f884d3ad1a3bba1a7729102769c000aa16536d6b815b2073a918e9762a8d5d7dd870c0e1fd2eac72a3ec0ddd6d631960605d114037e2e6d994be47ec76769184e7128fd75a3f3465f7a2",
  "path": "m/1/0/0",
  "uuid": "57ec71d0-d208-4930-b63e-ec97f5ecc485",
  "version": 4,
  "curveType": "bn254"
}
````

## File: test/integration/migration/keystores/operator3.ecdsa.keystore.json
````json
{
  "address": "9965507d1a55bcc2695c58ba16fb37d819b0a4dc",
  "crypto": {
    "cipher": "aes-128-ctr",
    "ciphertext": "baedc9a338b8cfc18742e95bf76bb5344215d69a6978baf80d82c643e60b6de8",
    "cipherparams": {
      "iv": "ce362678c9a3252c25498910ab091d5c"
    },
    "kdf": "scrypt",
    "kdfparams": {
      "dklen": 32,
      "n": 262144,
      "p": 1,
      "r": 8,
      "salt": "e47a6427f37f7a847e25fc15041ffc6bacbb2710d16b94f4e3b05309bd0938a0"
    },
    "mac": "3a17346e4642a7f2b3eba2eff8e728998748ef21a93a2d6753630dcc1d970be3"
  },
  "id": "926b6b31-871f-4095-8341-c252cd7f6109",
  "version": 3
}
````

## File: test/integration/migration/keystores/operator4.bls.keystore.json
````json
{
  "crypto": {
    "kdf": {
      "function": "scrypt",
      "params": {
        "dklen": 32,
        "n": 262144,
        "p": 1,
        "r": 8,
        "salt": "4c7e1940ab39b77dd3cc5fdd46c528ce693ad5e92db6a039c645269d08f924c8"
      },
      "message": ""
    },
    "checksum": {
      "function": "sha256",
      "params": {},
      "message": "9d5287ea5fa4dbf637fbc4bf4594b5032fc31fc8e2d52a7aa1f6b0f4be9e09c0"
    },
    "cipher": {
      "function": "aes-128-ctr",
      "params": {
        "iv": "0079914f2bb7cc5896bd3031c9fcec2f"
      },
      "message": "0e5017c6d05d4c585014e93a66f18ca2ce30923e78edab3a104af814388ebc9d732b58b1842e20201545cf064bcb96bb4517888af0d2eea65f2c07bcb7bce00b0a3b686d34d29e919c15ad9af8"
    }
  },
  "pubkey": "047d85621de07791c99239575ed4bff825ddb0db93c778f828106177a23d9a801fce3590e2d5857514031b27aab45531fbbdfb545bf599a8b164ccf8ba5e23761e33fdebecf7503dc92cb2ddd4ac53b353a7ec0ba746b8156ffc806acad9eac6088069e7f46c7640ffa68875030bb7c12c80dab810fe9da89a5bcd6cb2e776ed",
  "path": "m/1/0/0",
  "uuid": "bb1cb479-acbe-46ba-a0bc-8628ac90a57d",
  "version": 4,
  "curveType": "bn254"
}
````

## File: test/integration/migration/keystores/operator4.ecdsa.keystore.json
````json
{
  "address": "976ea74026e726554db657fa54763abd0c3a0aa9",
  "crypto": {
    "cipher": "aes-128-ctr",
    "ciphertext": "6413921ec3a30c91e565883c466c064467498dc5eb311cf83d8fafaedf520298",
    "cipherparams": {
      "iv": "b2c27fd1ab886c523fbc1d2b9c935e06"
    },
    "kdf": "scrypt",
    "kdfparams": {
      "dklen": 32,
      "n": 262144,
      "p": 1,
      "r": 8,
      "salt": "c71a9874630f71400434722c42d0ea68552f911f88cb1aa97dc0b72255f9a173"
    },
    "mac": "2ae78f29e164723ea87a5b9b2d3dd9925f45e5883d0e165b30b87f13e6cf27ef"
  },
  "id": "fa0d87ff-2f03-4648-a453-c302b2acc371",
  "version": 3
}
````

## File: test/integration/migration/keystores/operator5.bls.keystore.json
````json
{
  "crypto": {
    "kdf": {
      "function": "scrypt",
      "params": {
        "dklen": 32,
        "n": 262144,
        "p": 1,
        "r": 8,
        "salt": "6a490e96747d7910f4b1676339a84008050acb42e1e17c995e32a14ff9623aca"
      },
      "message": ""
    },
    "checksum": {
      "function": "sha256",
      "params": {},
      "message": "8e4ab6c381324ca9dc3d42450cd4d15112d62ae93d8e101cb6817974d4aea64f"
    },
    "cipher": {
      "function": "aes-128-ctr",
      "params": {
        "iv": "088201eb8b542a54f03cdce955bd51d0"
      },
      "message": "2d0ffbf4e3977a69d482aa48b9759bcdce1a7fa9a7c457842d0b7a11e2d08a6b399a9b210455709eb111c18bfc269a4eb71f9ac6b2d6f2d472e825723af98219287f58f4dda7eb9e3a9a382e72"
    }
  },
  "pubkey": "2c924049048027681f78ccea164c502a480cb56df3d902bc25a1953828d5e3251678c81589fc694871d52b9dcbdda6179d7ef933eba0bee7348ec0f47ee3c6760eeb2bef80df113ef65facce1fc37fb184f37dc02c37b2f15768c4ddf6566d87302c07c98c6e3627f7bbd9d3cb7fa0939217ebe07fdac79e69c6cc51035159bb",
  "path": "m/1/0/0",
  "uuid": "53fa8abe-f23b-475a-b6fe-57647711937a",
  "version": 4,
  "curveType": "bn254"
}
````

## File: test/integration/migration/keystores/operator5.ecdsa.keystore.json
````json
{
  "address": "14dc79964da2c08b23698b3d3cc7ca32193d9955",
  "crypto": {
    "cipher": "aes-128-ctr",
    "ciphertext": "b02d5574fc9a2b813dd47b97a5ac51f84480dd22716f7bbfe72514a5f4b14176",
    "cipherparams": {
      "iv": "5dba5dc0c04577f5f9a4b5719258c317"
    },
    "kdf": "scrypt",
    "kdfparams": {
      "dklen": 32,
      "n": 262144,
      "p": 1,
      "r": 8,
      "salt": "a40f35d9349c56d6515ab02e04e0e58a90d9551685b72700e6b80a4235007477"
    },
    "mac": "9f4be0ed7757c85ee3e932c03bc3b8dcf4e3dde5027ad98253488c56223a23db"
  },
  "id": "ae4c9631-0cbc-49ab-a561-20b8030d3a93",
  "version": 3
}
````

## File: test/integration/migration/.zeus
````
{
  "zeusHost": "https://github.com/Layr-Labs/eigenlayer-contracts-zeus-metadata"
}
````

## File: test/integration/migration/avs_context_0_1_0_to_0_1_1_test.go
````go
package migration_test
⋮----
import (
	"testing"

	"github.com/Layr-Labs/devkit-cli/config/contexts"
	"github.com/Layr-Labs/devkit-cli/pkg/migration"
)
⋮----
"testing"
⋮----
"github.com/Layr-Labs/devkit-cli/config/contexts"
"github.com/Layr-Labs/devkit-cli/pkg/migration"
⋮----
func TestMigration_0_1_0_to_0_1_1(t *testing.T)
⋮----
// Test YAML with old block heights
⋮----
// locate the 0.1.0 -> 0.1.1 step from the chain
var step migration.MigrationStep
⋮----
// Check that other fields are not modified
````

## File: test/integration/migration/avs_context_migration_test.go
````go
package migration_test
⋮----
import (
	"fmt"
	"testing"

	"github.com/Layr-Labs/devkit-cli/config/configs"
	configMigrations "github.com/Layr-Labs/devkit-cli/config/configs/migrations"
	"github.com/Layr-Labs/devkit-cli/config/contexts"
	"github.com/Layr-Labs/devkit-cli/pkg/migration"
	"gopkg.in/yaml.v3"
)
⋮----
"fmt"
"testing"
⋮----
"github.com/Layr-Labs/devkit-cli/config/configs"
configMigrations "github.com/Layr-Labs/devkit-cli/config/configs/migrations"
"github.com/Layr-Labs/devkit-cli/config/contexts"
"github.com/Layr-Labs/devkit-cli/pkg/migration"
"gopkg.in/yaml.v3"
⋮----
// helper to parse YAML into *yaml.Node
func testNode(t *testing.T, input string) *yaml.Node
⋮----
var node yaml.Node
⋮----
// unwrap DocumentNode
⋮----
func TestConfigMigration_0_0_1_to_0_0_2(t *testing.T)
⋮----
// Use the embedded v0.0.1 content as our starting point and upgrade to v0.0.2
⋮----
// TestAVSContextMigration_0_0_1_to_0_0_2 tests the specific migration from version 0.0.1 to 0.0.2
// using the actual migration files from config/contexts/
func TestAVSContextMigration_0_0_1_to_0_0_2(t *testing.T)
⋮----
// Use the embedded v0.0.1 content as our starting point
⋮----
// Parse YAML nodes
⋮----
// Get the actual migration step from the contexts package
var migrationStep migration.MigrationStep
⋮----
// Execute migration using the actual migration chain
⋮----
// Verify the migration results
⋮----
// Since the user's operator 0 values match the old default values,
// the migration will update them to the new default values (this is correct behavior)
⋮----
// Since the user's AVS values match the old default values,
⋮----
// AVS private key should be updated to new default value
⋮----
// Chain IDs
⋮----
// RPC URLs
⋮----
// Fork block
⋮----
// TestAVSContextMigration_0_0_1_to_0_0_2_CustomValues tests migration when user has custom values
// that differ from defaults - these should be preserved
func TestAVSContextMigration_0_0_1_to_0_0_2_CustomValues(t *testing.T)
⋮----
// This represents a user's devnet.yaml file with CUSTOM values (different from defaults)
⋮----
// Custom operator 0 values should be preserved (they differ from old defaults)
⋮----
// Custom AVS values should be preserved (they differ from old defaults)
⋮----
// TestAVSContextMigration_0_0_2_to_0_0_3 tests the migration from version 0.0.2 to 0.0.3
func TestAVSContextMigration_0_0_2_to_0_0_3(t *testing.T)
⋮----
// Use the embedded v0.0.2 content as our starting point
⋮----
// Execute migration
⋮----
// Verify results
⋮----
// TestAVSContextMigration_0_0_3_to_0_0_4 tests the migration from version 0.0.3 to 0.0.4
// which adds the eigenlayer section with contract addresses
func TestAVSContextMigration_0_0_3_to_0_0_4(t *testing.T)
⋮----
// Use the embedded v0.0.3 content as our starting point
⋮----
// Get the actual migration step
⋮----
// Check specific contract addresses
⋮----
// Ensure existing configs aren't affected
⋮----
// TestAVSContextMigration_0_0_4_to_0_0_5 tests the migration from version 0.0.4 to 0.0.5
// which adds deployed_contracts, operator_sets, and operator_registrations sections
func TestAVSContextMigration_0_0_4_to_0_0_5(t *testing.T)
⋮----
// Use the embedded v0.0.4 content as our starting point
⋮----
// TestAVSContextMigration_0_0_5_to_0_0_6 tests the migration from version 0.0.5 to 0.0.6
// which updates fork blocks, adds strategy_manager, and converts stake to allocations
func TestAVSContextMigration_0_0_5_to_0_0_6(t *testing.T)
⋮----
// Use the embedded v0.0.5 content as our starting point
⋮----
// Check that operator 0 (first operator) has allocations structure
⋮----
// Check first allocation details
⋮----
// Check operator set allocation
⋮----
// The migration replaces entire operator structures, but may leave empty stake fields
⋮----
// Check that operator 1 also has stETH strategy allocation (same as operator 0)
⋮----
// Operators 2, 3, 4 should have no meaningful allocations
⋮----
// If allocations exist, check that they're empty (no items in the sequence)
⋮----
// But they should still be there as operator objects
⋮----
// Check that eigenlayer now has L1/L2 structure
⋮----
// Check L2 contracts exist
⋮----
// Check that operator sets are preserved
⋮----
var keys []string
⋮----
// TestAVSContextMigration_0_0_6_to_0_0_7 tests the migration from version 0.0.6 to 0.0.7
// which adds the artifact section
func TestAVSContextMigration_0_0_6_to_0_0_7(t *testing.T)
⋮----
// Use the embedded v0.0.6 content as our starting point
⋮----
// TestAVSContextMigration_0_0_7_to_0_0_8 tests the migration that adds ECDSA keystore support
func TestAVSContextMigration_0_0_7_to_0_0_8(t *testing.T)
⋮----
// Use v0.0.7 content as starting point
⋮----
// Check first operator has ECDSA keystore fields
⋮----
// Check for ECDSA keystore path
⋮----
// Check for ECDSA keystore password
⋮----
// Check second operator
⋮----
// Check first operator's BLS keystore path
⋮----
// Check that existing operator fields are preserved
⋮----
// Check address is preserved
⋮----
// Check ECDSA key is preserved
⋮----
// Check allocations are preserved
⋮----
// TestAVSContextMigration_0_0_7_to_0_0_8_WithCustomValues tests migration with custom operator values
func TestAVSContextMigration_0_0_7_to_0_0_8_WithCustomValues(t *testing.T)
⋮----
// Create a custom v0.0.7 YAML with some custom values
⋮----
// Get the migration step
⋮----
// Check first operator with custom values
⋮----
// Custom address preserved
⋮----
// Custom ECDSA key preserved
⋮----
// BLS keystore path updated even for custom paths if they match the pattern
⋮----
// Custom field preserved
⋮----
// ECDSA keystore fields added based on position
⋮----
// Check second operator with standard path
⋮----
// Custom values preserved
⋮----
// ECDSA keystore fields added
⋮----
// Check third operator
⋮----
// Has ECDSA keystore fields based on position
⋮----
func TestAVSContextMigration_0_0_8_to_0_0_9_PatchesAndAddsSkipSetup(t *testing.T)
⋮----
// v0.0.8 input with existing structure and old values
const in = `version: 0.0.8
context:
  name: "pre-009"
  chains:
    l1:
      fork:
        block: "11111111"
    l2:
      fork:
        block: "22222222"
  eigenlayer:
    l1:
      cross_chain_registry: "0xOLD_L1_C_C_R"
      operator_table_updater: "0xOLD_L1_O_T_U"
      key_registrar: "0xOLD_L1_K_R"
      bn254_table_calculator: "0xOLD_L1_BN254_T_C"
      ecdsa_table_calculator: "0xOLD_L1_ECDSA_T_C"
    l2:
      task_mailbox: "0xOLD_L2_T_M"
      operator_table_updater: "0xOLD_L2_O_T_U"
      bn254_certificate_verifier: "0xOLD_L2_BN254_C_V"
      ecdsa_certificate_verifier: "0xOLD_L2_ECDSA_C_V"
  avs:
    address: "0xAVS"
`
⋮----
// find the step 0.0.8 -> 0.0.9
var step migration.MigrationStep
⋮----
// print migrated YAML for debugging
⋮----
func TestAVSContextMigration_0_0_9_to_0_1_0_FixedOpSets(t *testing.T)
⋮----
// v0.0.9 input with flat keystore fields
⋮----
// locate the 0.0.9 -> 0.1.0 step from the chain
⋮----
// preserved fields
⋮----
// old flat fields removed
⋮----
// new keystores
⋮----
if ks == nil || ks.Kind != 2 /* yaml.SequenceNode */ || len(ks.Content) != 2 {
⋮----
// entry 1: operatorSet 0
⋮----
// entry 2: operatorSet 1, suffix .2
⋮----
// verify suffixing on operator2
⋮----
func TestAVSContextMigration_0_0_9_to_0_1_0_StrategyAddressRewrite(t *testing.T)
⋮----
const (
		oldStrat = "0x7D704507b76571a51d9caE8AdDAbBFd0ba0e63d3"
		// lowercased variant exercises case-insensitive match
		oldStratLower = "0x7d704507b76571a51d9cae8addabbfd0ba0e63d3"
		newStrat      = "0x8b29d91e67b013e855EaFe0ad704aC4Ab086a574"
		otherStrat    = "0x0000000000000000000000000000000000000001"
	)
⋮----
// lowercased variant exercises case-insensitive match
⋮----
// Minimal 0.0.9 doc with both stakers.deposits and operators.allocations
⋮----
// version
⋮----
// stakers[].deposits[].strategy_address rewritten
⋮----
// non matching untouched
⋮----
// operators[].allocations[].strategy_address rewritten
⋮----
// sanity: keystore reshape still happened for OP1
⋮----
// TestAVSContextMigration_FullChain tests migrating through the entire chain from 0.0.1 to 0.0.8
func TestAVSContextMigration_FullChain(t *testing.T)
⋮----
// Execute migration through the entire chain to 0.0.8 (latest version with ECDSA support)
⋮----
// Verify final state
⋮----
// Check that block_time was added (from 0.0.2→0.0.3)
⋮----
// Check that eigenlayer was added (from 0.0.3→0.0.4)
⋮----
// Check that tracking sections were added and evolved (from 0.0.4→0.0.5→0.0.7)
// deployed_contracts was added in 0.0.4→0.0.5 but removed in 0.0.6→0.0.7
⋮----
// Check that L1/L2 specific tracking sections were added (from 0.0.6→0.0.7)
⋮----
// Check that strategy_manager was added (from 0.0.5→0.0.6)
⋮----
// Check that the original stake was converted to allocations structure
⋮----
// Verify stake field is completely removed or empty
⋮----
// Check that ECDSA keystore fields were added (from 0.0.7→0.0.8)
⋮----
// Check BLS keystore path updated to new convention
````

## File: .gitignore
````
# Binaries for programs and plugins
*.exe
*.exe~
*.dll
*.so
*.dylib
devkit

# Build outputs
/bin/
/out/
*.test

# Dependency directories (if you're not committing vendor)
vendor/

# Go module caches (optional, as these are local)
# /go/pkg/

# OS-specific files
.DS_Store
Thumbs.db

# Editor and IDE files
.vscode/
.idea/
*.swp

# Release outputs
temp_external/
/test-projects
.cursor/execution-plans
{$
````

## File: .pre-commit-config.yaml
````yaml
default_stages: [pre-commit,pre-push]

repos:
  - repo: https://github.com/golangci/golangci-lint
    rev: v1.64.8
    hooks:
      - id: golangci-lint
        name: golangci-lint
        entry: golangci-lint run
        types: [go]
        pass_filenames: false
        args: ["--timeout=1m"]
````

## File: .zeus
````
{
  "zeusHost": "https://github.com/Layr-Labs/eigenlayer-contracts-zeus-metadata"
}
````

## File: CLAUDE.md
````markdown
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

EigenLayer DevKit is a CLI toolkit for scaffolding, developing, and testing EigenLayer Autonomous Verifiable Services (AVS). It's built in Go and focuses on the Hourglass task-based architecture. The DevKit is currently in closed alpha and intended for local experimentation and development only.

## Common Development Commands

### Building and Testing
```bash
# Build the CLI binary
make build

# Run all tests (may be slow)
make tests

# Run fast tests (skips slow integration tests) 
make tests-fast

# Install binary to ~/bin/ and set up shell completion
make install

# Format code
make fmt

# Run linter
make lint

# Clean up build artifacts
make clean
```

### Testing the CLI
After building, test the CLI:
```bash
./bin/devkit --help
./bin/devkit avs --help
```

### Cross-platform Builds
```bash
# Build for specific platforms
make build/darwin-arm64
make build/darwin-amd64  
make build/linux-arm64
make build/linux-amd64

# Build all platforms
make release
```

## Architecture Overview

### CLI Command Structure
The CLI is built with `urfave/cli/v2` and organized hierarchically:
- **Main entry**: `cmd/devkit/main.go`
- **Core commands**: All under `devkit avs` subcommand
- **Command implementations**: `pkg/commands/` directory

Key commands:
- `devkit avs create` - Scaffold new AVS projects from templates
- `devkit avs build` - Compile contracts and binaries via template scripts
- `devkit avs devnet` - Manage local Docker-based development networks
- `devkit avs call` - Simulate task execution
- `devkit avs config/context` - Configuration management

### Configuration System
Multi-layered configuration with migration support:

1. **Global Config** (`~/.config/devkit/config.yaml`): User preferences, telemetry settings
2. **Project Config** (`config/config.yaml`): Project metadata, template info
3. **Context Config** (`config/contexts/{context}.yaml`): Environment-specific settings (devnet, testnet, mainnet)

**Current Versions**: Config v0.0.2, Context v0.0.6

The system includes automatic migrations between versions via `pkg/migration/` that preserve user customizations.

### Template System Architecture
Projects are scaffolded from versioned Git templates:
- **Template registry**: `config/templates.yaml` defines available templates
- **Template fetching**: `pkg/template/git_fetcher.go` handles Git operations
- **Project initialization**: Templates provide `.devkit/scripts/init` for setup
- **Build/run integration**: Templates provide `.devkit/scripts/build` and `.devkit/scripts/run`

### Devnet System
The devnet management system (`pkg/commands/devnet.go`) provides:
- Local Docker-based Anvil chains with EigenLayer state forked from Holesky
- Automated contract deployment (L1/L2)
- Pre-funded test operators with BLS keystores
- AVS registration and operator management

### Package Organization
- **`pkg/commands/`**: CLI command implementations
- **`pkg/common/`**: Shared utilities, configuration, contracts, logging
- **`pkg/template/`**: Git-based template management
- **`pkg/telemetry/`**: PostHog analytics integration  
- **`pkg/migration/`**: Configuration migration system
- **`pkg/hooks/`**: Command lifecycle hooks

## Key Dependencies

- **Go 1.23.6+** required
- **EigenLayer contracts**: `github.com/Layr-Labs/eigenlayer-contracts`
- **Hourglass AVS**: `github.com/Layr-Labs/hourglass-monorepo/ponos`
- **External tools**: Docker, Foundry, Zeus (npm package `@layr-labs/zeus@1.5.2`)

## Development Environment Setup

1. Install prerequisites: Docker, Foundry, Go 1.23.6+, make, jq, yq
2. Clone repository and run `make install`
3. Zeus is automatically installed as npm global package during `make install`

## Testing Patterns

- Unit tests use standard Go testing
- Integration tests may require Docker and external dependencies
- Use `make tests-fast` for quick feedback during development
- Integration tests in `test/integration/` directory

## Configuration Migration

When adding new configuration fields:
1. Update config structs in `pkg/common/`
2. Create migration in `config/configs/migrations/` or `config/contexts/migrations/`
3. Update embedded config versions in `config/`
4. Test migration with existing project configs

## Template Development

Templates must provide:
- `.devkit/scripts/init` - Project initialization
- `.devkit/scripts/build` - Build script for contracts/binaries
- `.devkit/scripts/run` - Run script for AVS components
- Standard Go project structure for task-based architecture

## Telemetry System

Optional PostHog-based telemetry with:
- Global and project-level opt-in/opt-out
- Privacy-conscious data collection
- CI environment auto-detection (defaults to disabled)
````

## File: embeds.go
````go
package project
⋮----
import _ "embed"
⋮----
//go:embed README.md
var RawReadme []byte
````

## File: go.mod
````
module github.com/Layr-Labs/devkit-cli

go 1.23.6

toolchain go1.24.2

replace github.com/Layr-Labs/devkit-cli => ./

require (
	github.com/Layr-Labs/eigenlayer-contracts v1.8.0-testnet-final.0.20250922221242-73644e201541
	github.com/Layr-Labs/multichain-go v0.0.13
	github.com/google/uuid v1.6.0
	github.com/joho/godotenv v1.5.1
	github.com/opencontainers/go-digest v1.0.0
	github.com/opencontainers/image-spec v1.1.1
	github.com/posthog/posthog-go v1.4.10
	github.com/robfig/cron/v3 v3.0.1
	github.com/urfave/cli/v2 v2.27.6
	golang.org/x/text v0.26.0
	gopkg.in/yaml.v3 v3.0.1
	oras.land/oras-go/v2 v2.3.1
	sigs.k8s.io/yaml v1.4.0
)

require (
	github.com/Microsoft/go-winio v0.6.2 // indirect
	github.com/aws/aws-sdk-go v1.55.7 // indirect
	github.com/aymanbagabas/go-osc52/v2 v2.0.1 // indirect
	github.com/bits-and-blooms/bitset v1.22.0 // indirect
	github.com/charmbracelet/colorprofile v0.2.3-0.20250311203215-f60798e515dc // indirect
	github.com/charmbracelet/lipgloss v1.1.0 // indirect
	github.com/charmbracelet/x/ansi v0.8.0 // indirect
	github.com/charmbracelet/x/cellbuf v0.0.13-0.20250311204145-2c3ea96c31dd // indirect
	github.com/charmbracelet/x/term v0.2.1 // indirect
	github.com/consensys/gnark-crypto v0.18.0 // indirect
	github.com/containerd/log v0.1.0 // indirect
	github.com/crate-crypto/go-eth-kzg v1.3.0 // indirect
	github.com/crate-crypto/go-ipa v0.0.0-20240724233137-53bbb0ceb27a // indirect
	github.com/creack/pty v1.1.18 // indirect
	github.com/davecgh/go-spew v1.1.2-0.20180830191138-d8f796af33cc // indirect
	github.com/deckarep/golang-set/v2 v2.8.0 // indirect
	github.com/decred/dcrd/dcrec/secp256k1/v4 v4.4.0 // indirect
	github.com/distribution/reference v0.6.0 // indirect
	github.com/docker/docker-credential-helpers v0.9.3 // indirect
	github.com/docker/go-connections v0.5.0 // indirect
	github.com/docker/go-units v0.5.0 // indirect
	github.com/erikgeiser/coninput v0.0.0-20211004153227-1c3628e74d0f // indirect
	github.com/ethereum/c-kzg-4844/v2 v2.1.1 // indirect
	github.com/ethereum/go-verkle v0.2.2 // indirect
	github.com/felixge/httpsnoop v1.0.4 // indirect
	github.com/fsnotify/fsnotify v1.9.0 // indirect
	github.com/go-logr/logr v1.4.2 // indirect
	github.com/go-logr/stdr v1.2.2 // indirect
	github.com/go-ole/go-ole v1.3.0 // indirect
	github.com/gogo/protobuf v1.3.2 // indirect
	github.com/gorilla/websocket v1.5.3 // indirect
	github.com/holiman/uint256 v1.3.2 // indirect
	github.com/iden3/go-iden3-crypto v0.0.17 // indirect
	github.com/jmespath/go-jmespath v0.4.0 // indirect
	github.com/kballard/go-shellquote v0.0.0-20180428030007-95032a82bc51 // indirect
	github.com/klauspost/compress v1.16.5 // indirect
	github.com/lucasb-eyer/go-colorful v1.2.0 // indirect
	github.com/mattn/go-colorable v0.1.13 // indirect
	github.com/mattn/go-isatty v0.0.20 // indirect
	github.com/mattn/go-localereader v0.0.1 // indirect
	github.com/mattn/go-runewidth v0.0.16 // indirect
	github.com/mgutz/ansi v0.0.0-20170206155736-9520e82c474b // indirect
	github.com/moby/docker-image-spec v1.3.1 // indirect
	github.com/moby/sys/atomicwriter v0.1.0 // indirect
	github.com/moby/term v0.5.2 // indirect
	github.com/morikuni/aec v1.0.0 // indirect
	github.com/muesli/ansi v0.0.0-20230316100256-276c6243b2f6 // indirect
	github.com/muesli/cancelreader v0.2.2 // indirect
	github.com/muesli/termenv v0.16.0 // indirect
	github.com/pkg/errors v0.9.1 // indirect
	github.com/pmezard/go-difflib v1.0.1-0.20181226105442-5d4384ee4fb2 // indirect
	github.com/rivo/uniseg v0.4.7 // indirect
	github.com/shirou/gopsutil v3.21.11+incompatible // indirect
	github.com/sirupsen/logrus v1.9.3 // indirect
	github.com/stretchr/objx v0.5.2 // indirect
	github.com/supranational/blst v0.3.15 // indirect
	github.com/tklauser/go-sysconf v0.3.15 // indirect
	github.com/tklauser/numcpus v0.10.0 // indirect
	github.com/wealdtech/go-merkletree/v2 v2.6.1 // indirect
	github.com/xo/terminfo v0.0.0-20220910002029-abceb7e1c41e // indirect
	github.com/yusufpapurcu/wmi v1.2.4 // indirect
	go.opentelemetry.io/auto/sdk v1.1.0 // indirect
	go.opentelemetry.io/contrib/instrumentation/net/http/otelhttp v0.54.0 // indirect
	go.opentelemetry.io/otel v1.36.0 // indirect
	go.opentelemetry.io/otel/exporters/otlp/otlptrace v1.36.0 // indirect
	go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracehttp v1.30.0 // indirect
	go.opentelemetry.io/otel/metric v1.36.0 // indirect
	go.opentelemetry.io/otel/sdk v1.36.0 // indirect
	go.opentelemetry.io/otel/trace v1.36.0 // indirect
	go.opentelemetry.io/proto/otlp v1.6.0 // indirect
	go.uber.org/multierr v1.11.0 // indirect
	golang.org/x/crypto v0.39.0 // indirect
	golang.org/x/exp v0.0.0-20240325151524-a685a6edb6d8 // indirect
	golang.org/x/sync v0.16.0 // indirect
	golang.org/x/sys v0.33.0 // indirect
	google.golang.org/protobuf v1.36.6 // indirect
	gotest.tools/v3 v3.5.2 // indirect
)

require (
	github.com/AlecAivazis/survey/v2 v2.3.7
	github.com/Layr-Labs/crypto-libs v0.0.4
	github.com/charmbracelet/bubbletea v1.3.5
	github.com/cpuguy83/go-md2man/v2 v2.0.5 // indirect
	github.com/docker/cli v24.0.7+incompatible
	github.com/docker/docker v28.1.1+incompatible
	github.com/ethereum/go-ethereum v1.15.11
	github.com/russross/blackfriday/v2 v2.1.0 // indirect
	github.com/stretchr/testify v1.10.0
	github.com/xrash/smetrics v0.0.0-20240521201337-686a1a2994c1 // indirect
	go.uber.org/zap v1.27.0
	golang.org/x/term v0.32.0
)
````

## File: install-devkit.sh
````bash
#!/bin/bash

set -e

# DevKit version
DEVKIT_VERSION=$(curl -fsSL https://raw.githubusercontent.com/Layr-Labs/devkit-cli/main/VERSION)
DEVKIT_BASE_URL="https://s3.amazonaws.com/eigenlayer-devkit-releases"

# Detect platform
OS=$(uname -s | tr '[:upper:]' '[:lower:]')
ARCH=$(uname -m)

case $OS in
    darwin) OS="darwin" ;;
    linux) OS="linux" ;;
    *) echo "Error: Unsupported OS: $OS"; exit 1 ;;
esac

case $ARCH in
    x86_64|amd64) ARCH="amd64" ;;
    arm64|aarch64) ARCH="arm64" ;;
    *) echo "Error: Unsupported architecture: $ARCH"; exit 1 ;;
esac

PLATFORM="${OS}-${ARCH}"

# Prompt for installation directory
if [[ -t 0 ]]; then
    # Interactive terminal available
    echo "Where would you like to install DevKit?"
    echo "1) $HOME/bin (recommended)"
    echo "2) /usr/local/bin (system-wide, requires sudo)"
    echo "3) Custom path"
    read -p "Enter choice (1-3) [1]: " choice
else
    # Non-interactive (piped), use default
    echo "Installing to $HOME/bin (default for non-interactive install)"
    choice=1
fi

case ${choice:-1} in
    1) INSTALL_DIR="$HOME/bin" ;;
    2) INSTALL_DIR="/usr/local/bin" ;;
    3) 
        read -p "Enter custom path: " INSTALL_DIR
        if [[ -z "$INSTALL_DIR" ]]; then
            echo "Error: No path provided"
            exit 1
        fi
        ;;
    *) echo "Invalid choice"; exit 1 ;;
esac

# Create directory if it doesn't exist
if [[ "$INSTALL_DIR" == "/usr/local/bin" ]]; then
    sudo mkdir -p "$INSTALL_DIR"
else
    mkdir -p "$INSTALL_DIR"
fi

# Download and install
DEVKIT_URL="${DEVKIT_BASE_URL}/${DEVKIT_VERSION}/devkit-${PLATFORM}-${DEVKIT_VERSION}.tar.gz"
echo "Downloading DevKit ${DEVKIT_VERSION} for ${PLATFORM}..."

if [[ "$INSTALL_DIR" == "/usr/local/bin" ]]; then
    curl -sL "$DEVKIT_URL" | sudo tar -x -C "$INSTALL_DIR" -f -
else
    curl -sL "$DEVKIT_URL" | tar -x -C "$INSTALL_DIR" -f -
fi

echo "✅ DevKit installed to $INSTALL_DIR/devkit"

# Add to PATH if needed
if [[ "$INSTALL_DIR" == "$HOME/bin" ]] && [[ ":$PATH:" != *":$HOME/bin:"* ]]; then
    echo "💡 Add $HOME/bin to your PATH:"
    echo "   echo 'export PATH=\"\$HOME/bin:\$PATH\"' >> ~/.$(basename $SHELL)rc"
fi

echo "🚀 Verify installation: $INSTALL_DIR/devkit --help"
````

## File: LICENSE
````
MIT License

Copyright (c) 2025 Layr-Labs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
````

## File: Makefile
````
.PHONY: help build test fmt lint install clean test-telemetry

APP_NAME=devkit

VERSION_PKG=github.com/Layr-Labs/devkit-cli/internal/version
TELEMETRY_PKG=github.com/Layr-Labs/devkit-cli/pkg/telemetry
COMMON_PKG=github.com/Layr-Labs/devkit-cli/pkg/common

LD_FLAGS=\
  -X '$(VERSION_PKG).Version=$(shell cat VERSION)' \
  -X '$(VERSION_PKG).Commit=$(shell git rev-parse --short HEAD)' \
  -X '$(TELEMETRY_PKG).embeddedTelemetryApiKey=$${TELEMETRY_TOKEN}' \
  -X '$(COMMON_PKG).embeddedDevkitReleaseVersion=$(shell cat VERSION)'

GO_PACKAGES=./pkg/... ./cmd/...
ALL_FLAGS=
GO_FLAGS=-ldflags "$(LD_FLAGS)"
GO=$(shell which go)
BIN=./bin

help: ## Show available commands
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

build: ## Build the binary
	@go build $(GO_FLAGS) -o $(BIN)/$(APP_NAME) cmd/$(APP_NAME)/main.go

tests: ## Run tests
	$(GO) test -v ./... -p 1

tests-fast: ## Run fast tests (skip slow integration tests)
	$(GO) test -v ./... -p 1 -timeout 5m -short

fmt: ## Format code
	@go fmt $(GO_PACKAGES)

lint: ## Run linter
	@go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest
	@golangci-lint run $(GO_PACKAGES)

install: build ## Install binary and completion scripts
	@mkdir -p ~/bin
	@cp $(BIN)/$(APP_NAME) ~/bin/
	@if ! npm list -g @layr-labs/zeus@1.5.9 >/dev/null 2>&1; then \
		echo "Installing @layr-labs/zeus@1.5.9..."; \
		npm install -g @layr-labs/zeus@1.5.9; \
	fi
	@mkdir -p ~/.local/share/bash-completion/completions
	@mkdir -p ~/.zsh/completions
	@cp autocomplete/bash_autocomplete ~/.local/share/bash-completion/completions/devkit
	@cp autocomplete/zsh_autocomplete ~/.zsh/completions/_devkit
	@if [ "$(shell echo $$SHELL)" = "/bin/zsh" ] || [ "$(shell echo $$SHELL)" = "/usr/bin/zsh" ]; then \
		if ! grep -q "# DevKit CLI completions" ~/.zshrc 2>/dev/null; then \
			echo "" >> ~/.zshrc; \
			echo "# DevKit CLI completions" >> ~/.zshrc; \
			echo "fpath=(~/.zsh/completions \$$fpath)" >> ~/.zshrc; \
			echo "autoload -U compinit && compinit" >> ~/.zshrc; \
			echo "PROG=devkit" >> ~/.zshrc; \
			echo "source ~/.zsh/completions/_devkit" >> ~/.zshrc; \
			echo "Restart your shell or Run: source ~/.zshrc to enable completions in current shell"; \
		fi; \
	elif [ "$(shell echo $$SHELL)" = "/bin/bash" ] || [ "$(shell echo $$SHELL)" = "/usr/bin/bash" ]; then \
		if ! grep -q "# DevKit CLI completions" ~/.bashrc 2>/dev/null; then \
			echo "" >> ~/.bashrc; \
			echo "# DevKit CLI completions" >> ~/.bashrc; \
			echo "PROG=devkit" >> ~/.bashrc; \
			echo "source ~/.local/share/bash-completion/completions/devkit" >> ~/.bashrc; \
			echo "Restart your shell or Run: source ~/.bashrc to enable completions in current shell"; \
		fi; \
	fi
	@echo ""

install-completion: ## Install shell completion for current session
	@if [ "$(shell echo $$0)" = "zsh" ] || [ "$(shell echo $$SHELL)" = "/bin/zsh" ] || [ "$(shell echo $$SHELL)" = "/usr/bin/zsh" ]; then \
		echo "Setting up Zsh completion for current session..."; \
		echo "Run: PROG=devkit source $(PWD)/autocomplete/zsh_autocomplete"; \
	else \
		echo "Setting up Bash completion for current session..."; \
		echo "Run: PROG=devkit source $(PWD)/autocomplete/bash_autocomplete"; \
	fi

clean: ## Remove binary
	@rm -f $(APP_NAME) ~/bin/$(APP_NAME) 

build/darwin-arm64:
	CGO_ENABLED=0 GOOS=darwin GOARCH=arm64 $(ALL_FLAGS) $(GO) build $(GO_FLAGS) -o release/darwin-arm64/devkit cmd/$(APP_NAME)/main.go

build/darwin-amd64:
	CGO_ENABLED=0 GOOS=darwin GOARCH=amd64 $(ALL_FLAGS) $(GO) build $(GO_FLAGS) -o release/darwin-amd64/devkit cmd/$(APP_NAME)/main.go

build/linux-arm64:
	CGO_ENABLED=0 GOOS=linux GOARCH=arm64 $(ALL_FLAGS) $(GO) build $(GO_FLAGS) -o release/linux-arm64/devkit cmd/$(APP_NAME)/main.go

build/linux-amd64:
	CGO_ENABLED=0 GOOS=linux GOARCH=amd64 $(ALL_FLAGS) $(GO) build $(GO_FLAGS) -o release/linux-amd64/devkit cmd/$(APP_NAME)/main.go


.PHONY: release
release:
	$(MAKE) build/darwin-arm64
	$(MAKE) build/darwin-amd64
	$(MAKE) build/linux-arm64
	$(MAKE) build/linux-amd64
````

## File: README.md
````markdown
## ⚠️ Disclaimer: Unaudited Code
EigenCloud DevKit has not been audited. Users are strongly discouraged from pushing generated projects to remote repositories without reviewing and sanitizing sensitive configuration files (e.g. devnet.yaml), which may contain private keys or other sensitive material.

# EigenCloud Development Kit (DevKit) 🚀

**A CLI toolkit for scaffolding, developing, and testing EigenLayer Autonomous Verifiable Services (AVS).**

EigenCloud DevKit streamlines AVS development, enabling you to:
* Quickly scaffold projects
* Compile contracts
* Run local networks
* Simulate tasks

Use DevKit to get from AVS idea to Proof of Concept with a local testing environment that includes task simulation.

> **Note:** The current DevKit features support local experimentation, development, and testing of AVS using the Hourglass task-based framework. We're actively expanding capabilities, so if there's a gap for your scenario, check out our roadmap to see what's coming, or let us know what would support you in building AVS.

## 📦 Installation

**Quick Install (Recommended):**
```bash
curl -fsSL https://raw.githubusercontent.com/Layr-Labs/devkit-cli/main/install-devkit.sh | bash
```

**Manual Installation:**

Download the binary for your platform:
```bash
# macOS (Apple Silicon)
mkdir -p $HOME/bin && curl -sL https://s3.amazonaws.com/eigenlayer-devkit-releases/v0.1.0-preview.9.rc/devkit-darwin-arm64-v0.1.0-preview.9.rc.tar.gz | tar -x -C "$HOME/bin" -f -

# macOS (Intel)
mkdir -p $HOME/bin && curl -sL https://s3.amazonaws.com/eigenlayer-devkit-releases/v0.1.0-preview.9.rc/devkit-darwin-amd64-v0.1.0-preview.9.rc.tar.gz | tar -x -C "$HOME/bin" -f -

# Linux (x86_64 / AMD64)
mkdir -p $HOME/bin && curl -sL https://s3.amazonaws.com/eigenlayer-devkit-releases/v0.1.0-preview.9.rc/devkit-linux-amd64-v0.1.0-preview.9.rc.tar.gz | tar -x -C "$HOME/bin" -f -

# Linux (ARM64 / aarch64)
mkdir -p $HOME/bin && curl -sL https://s3.amazonaws.com/eigenlayer-devkit-releases/v0.1.0-preview.9.rc/devkit-linux-arm64-v0.1.0-preview.9.rc.tar.gz | tar -x -C "$HOME/bin" -f -
```

Add to your PATH:
```bash
export PATH=$PATH:~/bin
```

**Install from Source:**
```bash
git clone https://github.com/Layr-Labs/devkit-cli
cd devkit-cli
make install
```

**Verify Installation:**
```bash
devkit --help
```

![EigenCloud DevKit User Flow](assets/devkit-user-flow.png)

## 🌟 Key Commands Overview

| Command              | Description                                                  |
|----------------------|--------------------------------------------------------------|
| `devkit avs create`  | Scaffold a new AVS project                                   |
| `devkit avs config`  | Configure your Project (`config/config.yaml`)                |
| `devkit avs context` | Configure your environment and AVS (`config/devnet.yaml`...) |
| `devkit avs build`   | Compile AVS smart contracts and binaries                     |
| `devkit avs test`    | Run Go and Forge tests for your AVS                          |
| `devkit avs devnet`  | Manage local development network                             |
| `devkit avs release` | Release your AVS application for use by operators            |
| `devkit avs call`    | Simulate AVS task execution locally                          |


---

## 🚦 Getting Started

### ✅ Prerequisites

* [Docker (latest)](https://docs.docker.com/engine/install/)
* [Foundry (latest)](https://book.getfoundry.sh/getting-started/installation)
* [Go (v1.23.6)](https://go.dev/doc/install)
* [Gomplate (v4)](https://docs.gomplate.ca/installing/)
* [make (v4.3)](https://formulae.brew.sh/formula/make)
* [jq (v1.7.1)](https://jqlang.org/download/)
* [yq (v4.35.1)](https://github.com/mikefarah/yq/#install)
* [zeus (v1.5.2)](https://github.com/Layr-Labs/zeus)

On macOS and Debian, running the following command installs all required dependencies and version numbers automatically. For other OSs, manual installation of software prerequisites is required:

```bash
devkit avs create my-avs-project ./
```




### 🔧 Shell Completion (Optional)

Tab completion for devkit commands is automatically set up when you install with `make install`.

**If you installed from source with `make install`:**
- Completion is automatically configured and enabled! Test it immediately:
```bash
devkit <TAB>          # Should show: avs, keystore, version
devkit avs <TAB>      # Should show subcommands
```

**If you downloaded the binary directly, manual setup:**

**For Zsh (recommended for macOS):**
```bash
# Add to your ~/.zshrc:
PROG=devkit
source <(curl -s https://raw.githubusercontent.com/Layr-Labs/devkit-cli/main/autocomplete/zsh_autocomplete)

exec zsh
```

**For Bash:**
```bash
# Add to your ~/.bashrc or ~/.bash_profile:
PROG=devkit
source <(curl -s https://raw.githubusercontent.com/Layr-Labs/devkit-cli/main/autocomplete/bash_autocomplete)

source ~/.bashrc
```

**For local development/testing:**
```bash
# If you have the devkit-cli repo locally
cd /path/to/devkit-cli
PROG=devkit source autocomplete/zsh_autocomplete  # for zsh
PROG=devkit source autocomplete/bash_autocomplete # for bash
```

After setup, you can use tab completion:
```bash
devkit <TAB>          # Shows: avs, keystore, version
devkit avs <TAB>      # Shows: create, config, context, build, devnet, run, call, release, template
devkit avs cr<TAB>    # Completes to: devkit avs create
```

---

## 🚧 Step-by-Step Guide

### 1️⃣ Create a New AVS Project (`devkit avs create`)

Sets up a new AVS project with the recommended structure, configuration files, and boilerplate code. This helps you get started quickly without needing to manually organize files or determine a layout. Details:

* Initializes a new project based on the default Hourglass task-based architecture in Go. Refer to [here](https://github.com/Layr-Labs/hourglass-avs-template?tab=readme-ov-file#what-is-hourglass) for details on the Hourglass architecture.
* Generates boilerplate code and default configuration.

Projects are created by default in the current directory from where the below command is called.

```bash
devkit avs create my-avs-project ./
cd my-avs-project
# If dependencies were installed during the creation process, you will need to source your bash/zsh profile:
#  - if you use bashrc
source ~/.bashrc
#  - if you use bash_profile
source ~/.bash_profile
#  - if you use zshrc
source ~/.zshrc
#  - if you use zprofile
source ~/.zprofile
```

> Note: Projects are created with a specific template version. You can view your current template version with `devkit avs template info` and upgrade later using `devkit avs template upgrade`.

> [!IMPORTANT]
> All subsequent `devkit avs` commands must be run from the root of your AVS project—the directory containing the [config](https://github.com/Layr-Labs/devkit-cli/tree/main/config) folder. The `config` folder contains the base `config.yaml` with the `contexts` folder which houses the respective context yaml files, example `devnet.yaml`.

<!-- Put in section about editing main.go file to replace comments with your actual business logic
-->

### 2️⃣ Implement Your AVS Task Logic (`main.go`)
After scaffolding your project, navigate into the project directory and begin implementing your AVS-specific logic. The core logic for task validation and execution lives in the `main.go` file inside the cmd folder:

```bash
cd my-avs-project/cmd
```

Within `main.go`, you'll find two critical methods on the `TaskWorker` type:
- **`HandleTask(*TaskRequest)`**  
  This is where you implement your AVS's core business logic. It processes an incoming task and returns a `TaskResponse`. Replace the placeholder comment with the actual logic you want to run during task execution.

- **`ValidateTask(*TaskRequest)`**  
  This method allows you to pre-validate a task before executing it. Use this to ensure your task meets your AVS's criteria (e.g., argument format, access control, etc.).

These functions will be invoked automatically when using `devkit avs call`, enabling you to quickly test and iterate on your AVS logic.

> **💡 Tip:**  
> You can add logging inside these methods using the `tw.logger.Sugar().Infow(...)` lines to debug and inspect task input and output during development.

### 3️⃣ Set RPC Endpoint URL

Set the `*_FORK_URL` values to **Ethereum Sepolia** and **Base Sepolia** RPC **archive node** endpoint URLs. These endpoints are needed to fork the appropriate chain state (testnet) to your local environment (devnet) for testing. Please note the following important details:
- Only the **Sepolia** testnet is supported at this time.
- The RPC endpoint should be an **archive** node, not a _full_ node. More context is available [here](https://www.quicknode.com/guides/infrastructure/node-setup/ethereum-full-node-vs-archive-node).
- For initial testing purposes we recommend setting `L1_FORK_URL` to **Ethereum Sepolia** and `L2_FORK_URL` to **Base Sepolia**.

```bash
cp .env.example .env
# edit `.env` and set your L1_FORK_URL and L2_FORK_URL to point to your RPC endpoints
```

You are welcome to use any reliable RPC provider (e.g. QuickNode, Alchemy).



### 4️⃣ Build Your AVS (`devkit avs build`)

Compiles your AVS contracts and offchain binaries. Required before running a devnet or simulating tasks to ensure all components are built and ready.

* Compiles smart contracts using Foundry.
* Builds operator, aggregator, and AVS logic binaries.

Ensure you're in your project directory before running:

```bash
devkit avs build
```

### 5️⃣ Test Your AVS (`devkit avs test`)

Runs both off-chain unit tests and on-chain contract tests for your AVS. This command ensures your business logic and smart contracts are functioning correctly before deployment.

* Executes Go tests for your offchain AVS logic
* Runs Forge tests for your smart contracts

Run this from your project directory:

```bash
devkit avs test
```

Both test suites must pass for the command to succeed.

### 6️⃣ Launch Local DevNet (`devkit avs devnet`)

Starts a local devnet to simulate the full AVS environment. This step deploys contracts, registers operators, and runs offchain infrastructure, allowing you to test and iterate without needing to interact with testnet or mainnet.

* Forks Ethereum sepolia using a fork URL (provided by you) and a block number. These URLs CAN be set in the `config/context/devnet.yaml`, but we recommend placing them in a `.env` file which will take precedence over `config/context/devnet.yaml`. Please see `.env.example`.
* Automatically funds wallets (`operator_keys` and `submit_wallet`) if balances are below `10 ether`.
* Setup required `AVS` contracts.
* Register `AVS` and `Operators`.

In your project directory, run:

```bash
devkit avs devnet start
```

> [!IMPORTANT]
> Please ensure your Docker daemon is running before running this command.

DevNet management commands:

| Command | Description                                                             |
| ------- | -------------------------------------------                             |
| `start` | Start local Docker containers and contracts                             |
| `stop`  | Stop and remove containers from the AVS project   |
| `list`  | List active containers and their ports                                  |
| `stop --all`  | Stops all devkit devnet containers that are currently running                                  |
| `stop --project.name`  | Stops the specific project's devnet                                  |
| `stop --port`  | Stops the specific port e.g.: `stop --port 8545`                                  |

### 7️⃣ Simulate Task Execution (`devkit avs call`)

Triggers task execution through your AVS, simulating how a task would be submitted, processed, and validated. Useful for testing end-to-end behavior of your logic in a local environment.

* Simulate the full lifecycle of task submission and execution.
* Validate both off-chain and on-chain logic.
* Review detailed execution results.

Run this from your project directory:

```bash
devkit avs call signature="(uint256,string)" args='(5,"hello")'
```

Optionally, submit tasks directly to the on-chain TaskMailbox contract via a frontend or another method for more realistic testing scenarios.

### 8️⃣ Publish AVS Release (`devkit avs release`)

Publishes your AVS release to the EigenLayer ReleaseManager contract, making it available for operators to upgrade to.

* Publishes multi-architecture container images to the registry(linux/amd64,linux/arm64)
* Publishes release artifacts to the ReleaseManager contract.

Before publishing a release, ensure you have:
1. Built your AVS with `devkit avs build`
2. A running devnet
3. Properly configured registry in your context (or specify the command parameter)
4. **Set release metadata URI** for your operator sets (see below)

> [!IMPORTANT]
> You must set a release metadata URI before publishing releases. The metadata URI provides important information about your release to operators.

#### Setting Release Metadata URI

Before publishing a release, set the metadata URI for your operator sets:

```bash
# Set metadata URI for operator set 0
devkit avs release uri --metadata-uri "https://example.com/metadata.json" --operator-set-id 0

# Set metadata URI for operator set 1
devkit avs release uri --metadata-uri "https://example.com/metadata.json" --operator-set-id 1
```

**Required Flags:**
- `--metadata-uri`: The URI pointing to your release metadata
- `--operator-set-id`: The operator set ID to configure

**Optional Flags:**
- `--avs-address`: AVS address (uses context if not provided)

#### Publishing a Release

Run this from your project directory:
> [!IMPORTANT]
> The upgrade-by-time must be in the future. Operators will have until this timestamp to upgrade to the new version.
> Devnet must be running before publishing.

```bash
devkit avs release publish  --upgrade-by-time 1750000000
```

**Required Flags:**
- `--upgrade-by-time`: Unix timestamp by which operators must upgrade

**Optional Flags:**
- `--registry`: Registry for the release (defaults to context)

Example
```bash
devkit avs release publish \
  --upgrade-by-time <future-timestamp> \
  --registry <ghcr.io/avs-release-example>
```


---

## Optional Commands


### Configure Your AVS (`devkit avs config` & `devkit avs context`)

Configure both project-level and context-specific settings via the following files:

- **`config.yaml`**  
  Defines project-wide settings such as AVS name, version, and available context names.  
- **`contexts/<context>.yaml`**  
  Contains environment-specific settings for a given context (e.g., `devnet`), including the Ethereum fork URL, block height, operator keys, AVS keys, and other runtime parameters.

You can view or modify these configurations using the DevKit CLI or by editing the `config.yaml` or the `contexts/*.yaml` files manually.

---

> [!IMPORTANT]
> All `devkit avs` commands must be run from the **root of your AVS project** — the directory containing the `config` folder.

#### View current settings

- **Project-level**  
  ```bash  
  devkit avs config --list
  ```

- **Context-specific**  
  ```bash  
  devkit avs context --list  
  devkit avs context --context devnet --list  
  ```

#### Edit settings directly via CLI

- **Project-level**  
  ```bash  
  devkit avs config --edit  
  ```

- **Context-specific**  
  ```bash  
  devkit avs context --edit  
  devkit avs context --context devnet --edit  
  ```

#### Set values via CLI flags

- **Project-level**
  ```bash
  devkit avs config --set project.name="My new name" project.version="0.0.2"
  ```

- **Context-specific**
  ```bash
  devkit avs context --set operators.0.address="0xabc..." operators.0.ecdsa_key="0x123..."
  devkit avs context --context devnet --set operators.0.address="0xabc..." operators.0.ecdsa_key="0x123..."
  ```





### Start offchain AVS infrastructure (`devkit avs run`)

Run your offchain AVS components locally.

* Initializes the Aggregator and Executor Hourglass processes.

This step is optional. The devkit `devkit avs devnet start` command already starts these components. However, you may choose to run this separately if you want to start the offchain processes without launching a local devnet — for example, when testing against a testnet deployment.

> Note: Testnet support is not yet implemented, but this command is structured to support such workflows in the future.

```bash
devkit avs run
```

### Deploy AVS Contracts (`devkit avs devnet deploy-contracts`)

Deploy your AVS's onchain contracts independently of the full devnet setup.

This step is **optional**. The `devkit avs devnet start` command already handles contract deployment as part of its full setup. However, you may choose to run this command separately if you want to deploy contracts without launching a local devnet — for example, when preparing for a testnet deployment.

> Note: Testnet support is not yet implemented, but this command is structured to support such workflows in the future.

```bash
devkit avs devnet deploy-contracts
```

### Create Operator Keys (`devkit avs keystore`)
Create and read keystores for both BLS (BN254) and ECDSA private keys using the CLI.

#### Creating keystores

- **Create a BLS keystore**:
```bash
devkit keystore create --type bn254 --key <bls-private-key> --path ./keystores/operator1.bls.keystore.json --password testpass
```

- **Create an ECDSA keystore**:
```bash
devkit keystore create --type ecdsa --key 0x<ecdsa-private-key-hex> --path ./keystores/operator1.ecdsa.keystore.json --password testpass
```

#### Reading keystores

The read command automatically detects the keystore type (BLS or ECDSA) and decrypts it accordingly:

- **Read a BLS keystore**:
```bash
devkit keystore read --path ./keystores/operator1.bls.keystore.json --password testpass
```

- **Read an ECDSA keystore**:
```bash
devkit keystore read --path ./keystores/operator1.ecdsa.keystore.json --password testpass
```

**Flag Descriptions**
- **`key`**: Private key (for create command)
  - For BLS: Private key in BigInt format (e.g., `5581406963073749409396003982472073860082401912942283565679225591782850437460`)
  - For ECDSA: Private key in hex format with or without 0x prefix (e.g., `0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6`)
- **`path`**: Full path to the keystore file including filename
  - BLS keystores use `.bls.keystore.json` naming convention (e.g., `./keystores/operator1.bls.keystore.json`)
  - ECDSA keystores use `.ecdsa.keystore.json` naming convention (e.g., `./keystores/operator1.ecdsa.keystore.json`)
- **`password`**: Password to encrypt/decrypt the keystore
- **`type`**: Curve type for keystore creation (`bn254` for BLS or `ecdsa` for ECDSA). **Required for create command only**

**Notes:**
- The read command automatically detects keystore type based on the JSON structure
- ECDSA keystores use the standard Ethereum keystore format (Web3 Secret Storage Definition v3)
- BLS keystores use a custom format for BN254 curve keys

### Template Management (`devkit avs template`)

Manage your project templates to stay up-to-date with the latest features and improvements.

* View current template information
* Upgrade your project to a newer template version

Subcommands:

| Command | Description |
| ------- | ----------- |
| `info` | Display information about the current project template |
| `upgrade` | Upgrade project to a newer template version |

View template information:
```bash
devkit avs template info
```

Upgrade to a specific template version (`"latest"`, tag, branch, or commit hash):
```bash
devkit avs template upgrade --version v1.0.0
```

### 📖 Logging (`--verbose`)

<!-- 
@TODO: bring this back when we reintroduce config log levels
Configure logging levels through `config.yaml`:

```yaml
log:
  level: info  # Options: "info", "debug", "warn", "error"
``` -->

To enable detailed logging during commands:

```bash
devkit avs build --verbose
```

---

## Deploying to Testnet (v0.1.0+)

As of **v0.1.0**, DevKit supports deploying AVS contracts to public testnets. This is the next step after local development and testing.

### Create a Testnet Context

You must create a separate context for your testnet deployment:

```bash
devkit avs context create --context testnet
```

> **Tip:**  
> Use reliable archive RPC endpoints for both L1 and L2 chains.

---

### Deploy AVS Contracts to Testnet

Once the `testnet` context is configured and active, you can deploy to each chain:

- **Deploy L1 contracts**:
```bash
devkit avs deploy contracts l1
```

- **Deploy L2 contracts**:
```bash
devkit avs deploy contracts l2
```

> Both commands will use the RPC URLs and keys from your active context.

---

### Next Steps After Deployment
- Verify contract addresses in your testnet context file.
- Register operators and run your AVS offchain services pointing to your testnet deployment (for hourglass, [use hgctl](https://github.com/Layr-Labs/hourglass-monorepo/tree/master/hgctl-go)).
- Register metadata for your OperatorSets using `devkit avs release uri --metadata-uri "<metadata-uri>" --operator-set-id <operator-set-id>`  
- Optionally, publish a release for operators using `devkit avs release publish --upgrade-by-time <unix-timestamp>`.


## Upgrade Process


### Upgrading the Devkit CLI

To upgrade the Devkit CLI to the latest version, you can use the `devkit upgrade` command.

```bash
# installs the latest version of devkit 
devkit upgrade
```

To move to a specific release, find the [target release](https://github.com/Layr-Labs/devkit-cli/releases) you want to install and run:

```bash
devkit upgrade --version <target-version>
```

### Upgrading your template

To upgrade the template you created your project with (by calling `devkit avs create`) you can use the `devkit avs template` subcommands.

```bash
# installs the latest template version known to devkit
devkit avs template upgrade
```

**_View which version you're currently using_**

```bash
devkit avs template info

2025/05/22 14:42:36 Project template information:
2025/05/22 14:42:36   Project name: <your project>
2025/05/22 14:42:36   Template URL: https://github.com/Layr-Labs/hourglass-avs-template
2025/05/22 14:42:36   Version: v0.0.13
```

**_Upgrade to a newer version_**

To upgrade to a newer version you can run:

```bash
devkit avs template upgrade --version <version>
```

More often than not, you'll want to use the tag corresponding to your template's release. You may also provide a branch name or commit hash to upgrade to.

_Please consult your template's docs for further information on how the upgrade process works._

---

## Telemetry 

DevKit includes optional telemetry to help us improve the developer experience. We collect anonymous usage data about commands used, performance metrics, and error patterns - but never personal information, code content, or sensitive data.

### 🎯 First-Time Setup

When you first run DevKit, you'll see a telemetry consent prompt:

```
🎯 Welcome to EigenLayer DevKit!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 Help us improve DevKit by sharing anonymous usage data
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We'd like to collect anonymous usage data to help us improve DevKit.

This includes:
  • Commands used (e.g., 'devkit avs create', 'devkit avs build')
  • Error counts and types (to identify common issues)
  • Performance metrics (command execution times)
  • System information (OS, architecture)

We do NOT collect:
  • Personal information
  • Private keys or sensitive data

You can change this setting anytime with:
  devkit telemetry --enable   # Enable telemetry
  devkit telemetry --disable  # Disable telemetry

Would you like to enable telemetry? [Y/n]:
```

Your choice is saved globally and will be inherited by all future projects.

#### 🤖 Non-Interactive Environments

For CI/CD pipelines and automated environments, DevKit provides several options:

**Enable telemetry without prompting:**
```bash
devkit --enable-telemetry avs create my-project 
```

**Disable telemetry without prompting:**
```bash
devkit --disable-telemetry avs create my-project 
```

**CI environments** (when `CI=true` environment variable is set):
- DevKit automatically detects CI environments and defaults to disabled telemetry
- No prompting occurs, preventing pipeline hangs
- You can still explicitly enable with `--enable-telemetry` if desired

**Non-interactive terminals:**
- DevKit detects when stdin is unavailable and skips prompting
- Defaults to disabled telemetry with informational messages

### 📊 What Data We Collect

**✅ We collect:**
- Command names (e.g., `devkit avs create`, `devkit avs build`)
- Success/failure rates and error types
- Command execution duration
- Operating system and architecture
- Anonymous project identifiers (UUIDs)

**❌ We do NOT collect:**
- Personal information or identifiable data
- Code content, file names, or project details
- Private keys, passwords, or sensitive data

### 🛠 Managing Telemetry Settings

#### Global Settings (affects all projects)

```bash
# Enable telemetry globally (new projects inherit this)
devkit telemetry --enable --global

# Disable telemetry globally  
devkit telemetry --disable --global

# Check global telemetry status
devkit telemetry --status --global
```

#### Project-Level Settings (current project only)

```bash
# Enable telemetry for current project only
devkit telemetry --enable

# Disable telemetry for current project only
devkit telemetry --disable

# Check current project telemetry status
devkit telemetry --status
```

### 📋 How Telemetry Precedence Works

1. **Project setting exists?** → Use project setting
2. **No project setting?** → Use global setting  
3. **No settings at all?** → Default to disabled

This means:
- You can set a global default for all projects
- Individual projects can override the global setting
- Existing projects keep their current settings when you change global settings

### 📁 Configuration Files

**Global config:** `~/.config/devkit/config.yaml`
```yaml
first_run: false
telemetry_enabled: true
```

**Project config:** `<project-dir>/.config.devkit.yml`
```yaml
project_uuid: "12345678-1234-1234-1234-123456789abc"
telemetry_enabled: true
```

### 🔄 Common Workflows

**Set global default for your organization:**
```bash
# Disable telemetry for all future projects
devkit telemetry --disable --global
```

**Override for a specific project:**
```bash
# In project directory - enable telemetry just for this project
cd my-avs-project
devkit telemetry --enable
```

**Check what's actually being used:**
```bash
# Shows both project and global settings for context
devkit telemetry --status
```


### 🏢 Enterprise Usage

For enterprise environments, you can:

1. **Set organization-wide defaults** by configuring global settings
2. **Override per-project** as needed for specific teams or compliance requirements
3. **Completely disable** telemetry with `devkit telemetry --disable --global`

The telemetry system respects both user choice and organizational policies.

## 🔧 Compatibility Notes
- **Linux**: Primarily tested on Debian/Ubuntu only.
- **macOS**: Supports both Intel and Apple Silicon

## 🤝 Contributing

Contributions are welcome! Please open an issue to discuss significant changes before submitting a pull request.

## Troubleshooting / Debugging

- If you want to debug any transaction failure, try using `--verbose` flag with the command, to get tx_hash in your logs.

- Devnet automatically stops when `Ctrl + C` is pressed or any `fatal error` is encountered. This can lead to problems while debugging using the transaction hash as  state is lost. To persist devnet , so it doesn't stop unlesss you explicitly call `devkit avs devnet stop ` , use the `--persist` flag . Example : 
```bash
devkit avs devnet start --verbose --persist
```
 
## 🙋 Help (Support)
Please post any questions or concerns to the [Issues](https://github.com/Layr-Labs/devkit-cli/issues) tab in this repo. We will respond to your issue as soon as our team has capacity, however we are not yet able to offer an SLA for response times. Please do not use this project for Production, Mainnet, or time sensitive use cases at this time.

---

## For DevKit Maintainers: DevKit Release Process
To release a new version of the CLI, follow the steps below:
> Note: You need to have write permission to this repo to release a new version.

1. Checkout the main branch and pull the latest changes:
    ```bash
    git checkout main
    git pull origin main
    ```
2. In your local clone, create a new release tag using the following command:
    ```bash
    git tag v<version> -m "Release v<version>"
    ```
3. Push the tag to the repository using the following command:
    ```bash
    git push origin v<version>
    ```

4. This will automatically start the release process in the [GitHub Actions](https://github.com/Layr-Labs/eigenlayer-cli/actions/workflows/release.yml) and will create a draft release to the [GitHub Releases](https://github.com/Layr-Labs/eigenlayer-cli/releases) with all the required binaries and assets
5. Check the release notes and add any notable changes and publish the release
````

## File: VERSION
````
v0.1.0-preview.9.rc
````
