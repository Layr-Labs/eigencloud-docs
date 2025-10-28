---
title: Enable TLS when Deploying to Vercel
sidebar_position: 2
---

Vercel requires TLS/HTTPS. 

## Prerequisites

Custom domain available.

## Configure TLS

1. In Vercel, go to Settings and Domains, and enter the custom domain. A CNAME is provided. 

2. In your DNS provider settings, configure DNS by creating an A record pointing to your instance IP:

    * Type: A
    * Name: yourdomain.com
    * Value: Obtain IP address from `eigenx app info`

3. Run:
   ```
   eigenx app configure tls 
   ```

4. Add TLS environment variables to `.env`:
   ```
   cat .env.example.tls >> .env
   ```
   
5. Configure the required variables: 

    ```
    # Required
    DOMAIN=yourdomain.com
    APP_PORT=3000
    # Recommended for first deployment
    ENABLE_CADDY_LOGS=true
    ACME_STAGING=true  # Use staging certificates initially
    ```

The configured TLS routes traffic from ports 80 and 443 to the `APP_PORT`.

