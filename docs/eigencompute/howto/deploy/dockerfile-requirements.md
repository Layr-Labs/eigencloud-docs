---
title: Dockerfile Requirements
sidebar_position: 3
---

```dockerfile
# Must target linux/amd64
FROM --platform=linux/amd64 node:18

# Must run as root (TEE requirement)
USER root

# Application code
WORKDIR /app
COPY . .
RUN npm install

CMD ["npm", "start"]
```