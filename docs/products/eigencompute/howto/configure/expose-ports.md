---
title: Expose Ports
sidebar_position: 4
---

This guide explains how to configure network ports for your EigenCompute applications, enabling them to receive incoming connections.

## Overview

EigenCompute applications run in secure Docker containers. To make your application accessible over the internet, you need to:

1. **Expose ports in your Dockerfile** using the `EXPOSE` directive
2. **Bind your application** to the correct port in your code
3. **(Optional) Configure TLS/HTTPS** for production domains

## Basic Port Configuration

### The EXPOSE Directive

Add the `EXPOSE` directive to your Dockerfile to specify which port(s) your application listens on:

```dockerfile
FROM --platform=linux/amd64 node:18
USER root
WORKDIR /app
COPY . .
RUN npm install

# Expose port 3000 for HTTP traffic
EXPOSE 3000

CMD ["npm", "start"]
```

### Exposing Multiple Ports

If your application needs multiple ports (e.g., main service + metrics endpoint):

```dockerfile
# Expose multiple individual ports
EXPOSE 3000
EXPOSE 9090
```

### Exposing Port Ranges

For applications that need a range of ports:

```dockerfile
# Expose ports 8000 through 8010
EXPOSE 8000-8010
```

## Application Binding

Your application code must bind to `0.0.0.0` (all interfaces) to be accessible.

## HTTPS with Custom Domains

For production applications with custom domains, you'll need to configure TLS in addition to exposing ports.

See the [TLS configuration guide](../../get-started/quickstart.md#configure-tlshttps-optional) for complete setup instructions.

## Troubleshooting

### "Cannot reach my application"

Check that:
1. Your Dockerfile includes `EXPOSE <port>`
2. Your app binds to `0.0.0.0`, not `localhost` or `127.0.0.1`
3. The port matches between `EXPOSE`, app binding, and `APP_PORT` (if using TLS)

### "Connection refused"

Your application may not be listening on the expected port:
- Check application logs: `eigenx app logs`
- Verify the port in your application startup logs
- Ensure no port conflicts if running multiple services

### Port Already in Use

If you see "port already in use" errors:
- Check for multiple services binding to the same port
- Ensure your application shuts down gracefully
- Use `eigenx app restart` to force a clean restart

## Related Documentation

- [Quickstart Guide](../../get-started/quickstart.md) - Complete deployment walkthrough
- [TLS Configuration](../../get-started/quickstart.md#configure-tlshttps-optional) - Setting up HTTPS with custom domains
- [Deployment Reference](../../reference/cli-commands/deployment.md) - Dockerfile requirements
- [Monitoring](../../reference/cli-commands/monitoring.md) - Viewing application logs