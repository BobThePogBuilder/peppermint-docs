---
title: How to Install Peppermint with Docker (Official Method)
description: Step-by-step guide to installing Peppermint with Docker
---


## Requirements

- **Docker**
- **Docker Compose**

---

## Installation Steps
 
---
### 🛠️ Step 1: Create the `docker-compose.yml` file

Create a `docker-compose.yml` file in your project directory, and paste the following code. Make any necessary adjustments to suit your environment and configuration.


```docker
version: "3.1"

services:
  peppermint_postgres:
    container_name: peppermint_postgres
    image: postgres:latest
    restart: always
    volumes:
      - pgdata:/var/lib/postgresql/data
    environment:
      POSTGRES_USER: peppermint
      POSTGRES_PASSWORD: 1234
      POSTGRES_DB: peppermint

  peppermint:
    container_name: peppermint
    image: pepperlabs/peppermint:latest
    ports:
      - 3000:3000
      - 5003:5003
    restart: always
    depends_on:
      - peppermint_postgres
    environment:
      DB_USERNAME: "peppermint"
      DB_PASSWORD: "1234"
      DB_HOST: "peppermint_postgres"
      SECRET: 'peppermint4life'

volumes:
 pgdata:
```
### 🖥️ Step 2: Launch the Peppermint Containers

Once the `docker-compose.yml` file is set up, run the following command to start the containers:

```bash
docker-compose up -d
```

After starting, you can access the application by navigating to http://your-server-ip:3000 in your web browser.

### 🔑 Default Admin Login Credentials

To log in as the admin, use the following default credentials:

- **Email**: `admin@admin.com`
- **Password**: `1234`

> ⚠️ **Important**: For security reasons, it’s strongly recommended to change the default password after your initial login.

## Done

That's it! Your Peppermint installation is complete and ready to use. 

You can now start managing tickets and exploring the platform. Enjoy the enhanced efficiency and streamlined support experience with Peppermint!

## Issues

If you encounter any issues or need assistance, feel free to:

- Visit our [GitHub page](https://github.com/Peppermint-Lab/peppermint) to report issues or browse existing discussions.
- Join our [Discord community](https://discord.gg/cyj86Ncygn) for real-time support and to connect with other users and contributors.

We're here to help!

