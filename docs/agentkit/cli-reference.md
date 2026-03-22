---
sidebar_position: 4
title: CLI Reference
---

# CLI Reference

Complete command reference for the `agentkit` CLI.

## agentkit init

Create and deploy a new agent. This is the default command when running `agentkit` with no arguments. Launches an interactive designer unless `--template` or `--files` is provided.

### Usage

```
agentkit init [flags]
agentkit [flags]
```

### Flags

- `--template <name>` — Template name to deploy (skips interactive designer)
- `--files <dir>` — Directory containing agent markdown files
- `--env <file>` — Path to .env file with credentials or full deploy profile
- `--subdomain <label>` — Agent subdomain, skips interactive prompt (headless only)
- `--wallet <address>` — Override default local funding wallet (headless only)
- `--plan <id>` — Compute plan SKU id, skips plan selection (headless only)
- `--verbose` — Enable verbose logging

### Examples

```bash
# Interactive mode — opens the agent designer
agentkit

# Deploy from a template
agentkit init --template media-agent --env .env

# Fully headless deploy from local files
agentkit init --files ./my-agent --env ./deploy.env \
  --subdomain my-agent --plan g1-standard-2s
```

---

## agentkit list

List your deployed agents with their current status, subdomain, and compute plan.

### Usage

```
agentkit list
```

---

## agentkit upgrade

Propose an upgrade to a running agent. Can upgrade the template code, agent configuration files, or both.

### Usage

```
agentkit upgrade [flags]
```

### Flags

- `--upgrade-template` — Upgrade to the latest template code
- `--env <file>` — Path to .env file with updated credentials
- `--verbose` — Enable verbose logging

### Examples

```bash
# Upgrade an agent to the latest template pin
agentkit upgrade --upgrade-template

# Upgrade with new environment variables
agentkit upgrade --env ./updated.env
```

---

## agentkit logs

Stream recent log output for a selected agent.

### Usage

```
agentkit logs
```

---

## agentkit status

Check agent health. Reports current state and offers to restart agents that have stopped or failed.

### Usage

```
agentkit status
```

---

## agentkit topup

Purchase additional credits for an existing agent.

### Usage

```
agentkit topup
```

Select an agent, enter a USDC amount, and confirm the on-chain transaction.

---

## agentkit firmware

Update running agents to the latest template pin. Applies upstream template patches without changing agent configuration files.

### Usage

```
agentkit firmware
```

---

## agentkit update

Download and install the latest CLI binary.

### Usage

```
agentkit update [flags]
```

### Flags

- `--version <version>` — Install a specific CLI release instead of latest
- `--yes` — Auto-confirm without prompting

### Examples

```bash
# Update to latest
agentkit update --yes

# Pin to a specific release
agentkit update --version 0.0.17
```

---

## Deploy Profile (.env)

The `--env` flag accepts a `.env` file containing platform credentials and custom variables. Recognized keys:

| Key | Description |
|-----|-------------|
| `TWITTER_API_KEY` | Twitter OAuth API key |
| `TWITTER_API_SECRET` | Twitter OAuth API secret |
| `TWITTER_ACCESS_TOKEN` | Twitter user access token |
| `TWITTER_ACCESS_SECRET` | Twitter user access secret |
| `SUBSTACK_EMAIL` | Substack account email |
| `SUBSTACK_PASSWORD` | Substack account password |

Templates may define additional custom keys. Include any extra variables your agent needs in the same file.

## Compute Plans

Pass a SKU id to `--plan` during headless init to skip the interactive plan selector. See [Credits and Billing](./credits-and-billing.md) for tiers, SKUs, and pricing.
