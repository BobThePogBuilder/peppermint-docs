---
title: Troubleshooting Checklist
description: A checklist of common issues to review before seeking additional help.
---


Use this checklist to troubleshoot common issues before reaching out for support. Each item provides a key step in identifying or resolving potential issues.

---

- [ ] **Port Forwarding**  
  - Did you ensure proper port forwarding? Check if the necessary ports are correctly forwarded, regardless of whether it’s for local or external network access.

- [ ] **Domain/IP Configuration**  
  - Have you assigned the correct domain name, or if on a local network, are you using the correct local IP address?

- [ ] **Firewall Rules (UFW)**  
  - Did you confirm that the required ports are open on your machine? Use `ufw status` to verify and modify rules if necessary.

- [ ] **Docker Container Health**  
  - Have you checked the health status of your Docker containers? Ensure each container is running as expected.

- [ ] **Log Files**  
  - Did you review the log files for any errors or warnings? Checking logs can reveal configuration issues or overlooked errors.

- [ ] **Spearmint Easy Installer**  
  - If issues persist, try reinstalling with the Spearmint Easy Installer to ensure a clean setup.

- [ ] **System Resource Availability**  
  - Are there sufficient system resources (CPU, memory, storage) available for all running services? Limited resources can lead to unexpected behavior.

- [ ] **Service Dependencies**  
  - Confirm that all dependent services are running and configured correctly. Some services rely on others to function.

- [ ] **Network Configuration**  
  - Check your network settings for any misconfigurations that could impact connectivity, especially if using a virtual network setup.

- [ ] **Updated Software Versions**  
  - Ensure you’re running the latest versions of all required software and dependencies to avoid issues caused by outdated components.

- [ ] **System Reboot**  
  - If all else fails, consider rebooting the system, as this can sometimes resolve unexpected issues.

---

## Additional Checks
- [ ] **Database Connection**  
  - Verify the database connection settings for Peppermint SH, ensuring that the credentials and connection details are accurate.

- [ ] **Web Server Configuration**  
  - Check your web server configuration (Nginx, Apache, etc.) to ensure it’s correctly set up to serve Peppermint SH.

- [ ] **API Endpoints**  
  - Confirm that API endpoints are functioning properly, especially if Peppermint SH relies on external APIs.

- [ ] **Permissions and Access Rights**  
  - Make sure that file permissions and user access rights are correctly configured for Peppermint SH directories and files.

- [ ] **SMTP/Email Settings**  
  - For ticket notifications, confirm that the SMTP/email settings are correctly configured.

---

### Need Additional Help?

If you've completed all these checks and are still facing issues, please reach out to support with detailed information about the steps you've taken. This will help in providing faster and more accurate assistance.

- Visit our [GitHub page](https://github.com/Peppermint-Lab/peppermint) to report issues or browse existing discussions.
- Join our [Discord community](https://discord.gg/cyj86Ncygn) for real-time support and to connect with other users and contributors.

We're here to help!
