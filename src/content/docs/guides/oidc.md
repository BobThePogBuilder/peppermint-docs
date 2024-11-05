---
title: OpenID Connect (OIDC) Setup Guide
description: A guide for configuring OpenID Connect (OIDC) authentication with Peppermint
---

### How to Use OpenID Connect (OIDC) for Authentication

This guide will walk you through the process of using OpenID Connect (OIDC) for authentication in Peppermint. Follow these steps to configure and start using OIDC for secure user authentication.

## Requirements 
- Set the client type to **PUBLIC** in your OIDC provider.
- Obtain the **OIDC well-known configuration URL**.
- **OIDC Client ID** from your OIDC provider.

---

## Steps for OIDC Setup

### Step 1: Logging In with OIDC

1. Go to the application’s login page, where you'll see options for logging in, including OIDC.
2. Click the **OIDC login** button. You’ll be redirected to the OIDC provider's login page.
3. Enter your credentials on the provider's login page (e.g., email, password, or any other supported method).
4. After successful authentication, you’ll be redirected back to the application. If this is your first login, you may be taken to an onboarding page.

---

### Step 2: Managing OIDC Settings (Admin Only)

Admins can manage OIDC settings within the admin panel.

1. Log in with admin credentials and go to the **Admin Panel**.
2. In the **Authentication Settings** section, select **OIDC** as the provider type.
3. Enter the necessary details:
   - **Issuer**: The well-known configuration URL of your OIDC provider.
   - **Client ID**: Provided by your OIDC provider.
   - **Redirect URI**: The URI to which the OIDC provider will redirect after successful authentication.
4. Click **Save** to apply the new OIDC configuration.

> **Note:** To remove the OIDC configuration, click the **Delete** button in the admin panel.

---

### Step 3: Troubleshooting Common Issues

- **Account Not Found**: If you encounter an "Account Not Found" error, your account might not be configured for OIDC. Contact your admin for assistance.
- **Error During Login**: If an error occurs during login, try again. If the issue persists, contact support for help.

By following these steps, you can set up and use OIDC for authentication with Peppermint. If you need further assistance, please reach out to your admin or support team.

## Issues

If you encounter any issues or need assistance, feel free to:

- Visit our [GitHub page](https://github.com/Peppermint-Lab/peppermint) to report issues or browse existing discussions.
- Join our [Discord community](https://discord.gg/cyj86Ncygn) for real-time support and to connect with other users and contributors.

We're here to help!