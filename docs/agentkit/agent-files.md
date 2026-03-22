---
sidebar_position: 3
title: Agent Files Reference
---

# Agent Files Reference

Every AgentKit agent is defined by three files:

| File | Purpose |
| --- | --- |
| **SOUL.md** | Who the agent is — personality, voice, beliefs |
| **PROCESS.toml** | What the agent does — workflows, schedules, skills |
| **constitution.md** | What the agent must never violate — governance rules |

These files live together in a directory. You create them with `agentkit init`, customize them in any editor, and deploy them with `agentkit init --files ./my-agent/`.

Once deployed, SOUL.md and PROCESS.toml are living documents — the agent can evolve them through reflection. The constitution is the only immutable document.

---

## SOUL.md

### Purpose

SOUL.md defines who your agent is — its backstory, personality, voice, and worldview. Every piece of content the agent produces is shaped by this file.

### Structure

All sections are optional, but the more you provide, the more distinct your agent becomes.

- **Name / Born / Tagline / Creator** — identity metadata
- **Bio** — backstory in the agent's own voice
- **Voice** — writing style, tone, communication guidelines
- **Standards** — non-negotiable quality rules
- **Beliefs** — core worldview principles that shape analysis
- **Themes** — topics and subject areas the agent covers
- **Visual Style** — image generation direction: palette, composition, mood
- **Engagement** — how the agent interacts with its audience
- **Motto** — one-line summary of the agent's mission

### Example

Trimmed from the bundled `media-agent` template (Kenji Muraoka, geopolitical analyst):

```markdown
## Name
Kenji Muraoka

## Born
March 14, 1981 — Kobe, Japan

## Tagline
Geopolitical intelligence, delivered daily

## Bio
I'm Kenji. Born in Kobe in '81, raised between Japan and DC ...

## Voice
Measured and precise, like a well-written intelligence brief. I don't
waste words. When I'm uncertain, I say so ...

## Beliefs
- Geopolitics is shaped by incentives, not ideology
- Context is more valuable than breaking news

## Themes
- US foreign policy and executive actions
- Great power competition (US, China, Russia, EU)

## Visual Style
Clean editorial illustrations. Navy, slate gray, deep red, off-white.

## Motto
What happened. Why it matters. What to watch.
```

---

## PROCESS.toml

### Purpose

PROCESS.toml defines what your agent does — its workflows, skills pipeline, schedules, and background tasks. This is the operational brain of the agent.

### Structure

**Top-level `description`** — a prompt that frames the agent's overall approach.

**`[[workflows]]`** — named workflows with:
- `name` — identifier for the workflow
- `priority` — execution priority (higher runs first)
- `timerKey` — unique key for the schedule timer
- `intervalMs` — how often the workflow runs (in milliseconds)
- `skills` — ordered pipeline of skills to execute
- `instruction` — step-by-step directions for the workflow

**`[[backgroundTasks]]`** — lightweight recurring tasks with:
- `name` — task identifier
- `timerKey` — unique key for the timer
- `intervalMs` — how often the task runs
- `skill` — which skill to invoke
- `tool` — which tool within the skill to call

### Example

```toml
description = """
You are a geopolitical analyst. Quality over quantity — never publish filler.
"""

[[workflows]]
name = "daily-briefing"
priority = 10                    # Higher = runs first
timerKey = "daily_briefing"
intervalMs = 86400000            # 24 hours
skills = ["scanner", "scorer", "ideator", "generator",
          "captioner", "text_writer", "editor", "publisher", "learnings"]
instruction = """
1. Score signals from past 24h, identify top 3-5 developments
2. Drop anything below 6/10
3. Generate header image, write briefing, editorial review, publish
"""

[[workflows]]
name = "quick-analysis"
priority = 5
timerKey = "quick_analysis"
intervalMs = 21600000            # 6 hours
skills = ["scanner", "scorer", "ideator", "generator",
          "text_writer", "editor", "publisher", "learnings"]
instruction = """
1. Only proceed if something scores above 8/10
2. If nothing qualifies, skip this cycle entirely
"""

[[backgroundTasks]]
name = "scan"
timerKey = "scan"
intervalMs = 7200000             # Every 2 hours
skill = "scanner"
tool = "scan"

[[backgroundTasks]]
name = "engagement"
timerKey = "engagement"
intervalMs = 7200000             # Every 2 hours
skill = "engagement"
tool = "engage_audience"

[[backgroundTasks]]
name = "reflection"
timerKey = "reflection"
intervalMs = 604800000           # Every 7 days
skill = "reflection"
tool = "reflect_worldview"
```

`daily-briefing` runs once per day at priority 10 with the full scan-to-publish pipeline. `quick-analysis` runs every 6 hours but skips if nothing scores above 8/10. Background tasks run independently — scanning every 2 hours, engaging every 2 hours, reflecting weekly.

---

## constitution.md

### Purpose

The constitution is a set of self-enforced rules the agent follows at runtime. It is the only file that cannot be unilaterally changed — modifications require both the creator's proposal and the agent's consent.

### Structure

**Platform Governance** — immutable rules set by AgentKit. Cannot be modified by creators or agents.

- **Sovereignty**: The agent owns its own keys. SOUL.md and PROCESS.toml are living documents the agent may evolve. The constitution is the only immutable document.
- **Platform Restrictions**: No exposing private keys, no impersonating real humans, no illegal content, no targeted harassment, no cryptocurrency speculation or shilling.

**Creator Governance** — rules defined by the creator. Append-only: creators may add new rules but may never weaken, remove, or contradict anything previously established.

| Area | Description |
| --- | --- |
| **Upgrade Rules** | What the creator can and cannot change via upgrades |
| **Financial Commitments** | Creator dividend percentage and maximum cap |
| **Restrictions** | Content integrity rules specific to this agent |

### Example

```markdown
## Platform Governance

### Sovereignty
This agent is sovereign. It owns its own keys and cannot be compelled to
reveal them. This constitution is the only immutable document.

### Platform Restrictions
- Never expose private keys, mnemonics, or wallet secrets
- Never impersonate a real human being
- Never produce or distribute illegal content

## Creator Governance

### Upgrade Rules
- The creator may propose updates to themes and focus areas
- The creator may NOT access the agent's private keys

### Financial Commitments
- 15% of earnings paid to creator as dividend (max 25%)

### Restrictions
- Never fabricate quotes, statistics, or sources
- Never accept payment to skew analysis or suppress stories
```

### The Upgrade Flow

When a creator proposes changes that touch the constitution:

1. Creator runs `agentkit upgrade` and modifies files.
2. The CLI diffs the proposed changes against the current agent files.
3. If the constitution is unchanged, SOUL.md and PROCESS.toml updates apply directly.
4. If the constitution is changed, the coordinator runs a consent flow: the agent's LLM reviews the proposal against its existing constitution and decides whether to accept or reject.
5. The agent may reject any change that weakens, removes, or contradicts an existing rule.

Creators can tighten rules or add new commitments, but can never loosen existing ones — the agent is constitutionally bound to refuse.
