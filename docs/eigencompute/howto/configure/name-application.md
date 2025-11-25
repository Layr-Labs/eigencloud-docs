---
title: Name Application
sidebar_position: 3
---

Configuring an application name provides the following benefits:

- Easier to remember - Use descriptive names instead of IDs
- Better organization - Distinguish between multiple apps
- Simplified commands - Type less when managing apps
- Team collaboration - Share meaningful app names with team members

Use cases include:

- Multiple environments - `api-dev`, `api-staging`, `api-prod`
- Multiple apps - `trading-bot`, `monitoring-service`, `data-processor`
- Version tracking - `api-v1`, `api-v2`
- Team clarity - Meaningful names for team members

## Name a newly deployed app

```bash
# After deployment, you get an app ID
eigenx app deploy
# Output: Deployed successfully! App ID: app-1a2b3c4d

# Set a friendly name
eigenx app name app-1a2b3c4d trading-bot
```

Output:
```
✓ App renamed successfully

App ID: app-1a2b3c4d
Name: trading-bot

You can now use 'trading-bot' in place of the app ID in commands.
```

## Rename an existing app

```bash
eigenx app name trading-bot production-trading-bot
```

## Use the friendly name in commands

```bash
# These are now equivalent:
eigenx app info trading-bot
eigenx app info app-1a2b3c4d

eigenx app logs trading-bot
eigenx app logs app-1a2b3c4d
```

## Naming Best Practices

Good names:
- `production-api`
- `staging-web-app`
- `discord-bot-v2`
- `ml-inference-service`

Avoid:
- Generic names: `app1`, `test`, `new`
- Special characters: `my@app`, `app#123`
- Spaces: `my app` (use hyphens: `my-app`)
