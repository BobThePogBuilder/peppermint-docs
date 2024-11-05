---
title: Setting Up a Local Development Environment for Peppermint
description: A simplified setup guide for Peppermint Local Development Environment
---

# Project Setup Guide

Welcome to the project! This guide will help you set up Peppermint on your local machine for development purposes.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Operating System**: Windows, macOS, or Linux
- **Node.js**: Version 14.x or higher
- **npm**: Version 6.x or higher
- **Git**: Version control system
- **Database**: PostgreSQL or MySQL – Ensure it’s installed and running

---

## Installation

Follow these steps to set up the project:

```bash
# Step 1: Clone the Repository
git clone https://github.com/your-username/your-project.git

# Step 2: Navigate to the Project Directory
cd your-project

# Step 3: Install Dependencies
npm install

# Step 4: Set Up Environment Variables
# Create a .env file in the root directory and add necessary environment variables
# You can use the .env.example file as a reference
echo "DATABASE_URL=your-database-url" >> .env
echo "API_KEY=your-api-key" >> .env

# Step 5: Database Setup (if required)
# Run this command to set up the database
npm run db:setup

# Step 6: Start the Development Server
npm start

# The application should now be running on http://localhost:3000

# Step 7: Running Tests
# To run tests, use the following command:
npm test

# Running tests helps ensure everything is functioning correctly in your local setup.

# With this setup, you’re ready to start developing on Peppermint! 

```

## Issues

If you encounter any issues or need assistance, feel free to:

- Visit our [GitHub page](https://github.com/Peppermint-Lab/peppermint) to report issues or browse existing discussions.
- Join our [Discord community](https://discord.gg/cyj86Ncygn) for real-time support and to connect with other users and contributors.

We're here to help!