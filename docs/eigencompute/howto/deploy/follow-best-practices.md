---
title: Follow Best Practices
sidebar_position: 5
---

## Deployment Best Practices

### Security

**1. Use public variables for transparency**

```bash
# .env
VERSION_PUBLIC=1.0.0
NETWORK_PUBLIC=sepolia
SECRET_API_KEY=secret-here  # Private
```

**2. Rotate secrets regularly**

```bash
# Update API keys periodically
vim .env
eigenx app upgrade my-app
```

### Reliability

**1. Health checks in your app**

```javascript
// Example health endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', version: process.env.VERSION_PUBLIC })
})
```

**2. Graceful shutdown**

```javascript
process.on('SIGTERM', async () => {
  console.log('SIGTERM received, shutting down gracefully')
  await cleanup()
  process.exit(0)
})
```

**3. Logging**

```javascript
console.log('App started')
console.error('Error occurred:', error)
// Logs are visible via: eigenx app logs
```
