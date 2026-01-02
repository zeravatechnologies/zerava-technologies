---
description: Steps to deploy Zerava Technologies to Vercel and set up a custom domain.
---

# 🚀 Deployment Guide: Zerava Technologies on Vercel

Follow these steps to take your AI-powered website from your local machine to the live web with your own domain name.

## 1. Prepare for Deployment
- Make sure all your changes are saved.
- Ensure you have a [GitHub account](https://github.com/).

## 2. Push to GitHub (Recommended)
This is the best way to host because Vercel will automatically update your site whenever you make a code change.
1. Create a new **Public** or **Private** repository on GitHub named `zerava-website`.
2. In your terminal (inside the project folder), run:
   ```powershell
   git init
   git add .
   git commit -m "Initial commit: Zerava AI Website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/zerava-website.git
   git push -u origin main
   ```

## 3. Connect to Vercel
1. Go to [Vercel.com](https://vercel.com/) and sign up using your **GitHub** account.
2. Click **"Add New"** > **"Project"**.
3. Import your `zerava-website` repository.
4. Vercel will automatically detect **Vite** as the framework.
5. Click **"Deploy"**. Your site will be live at a `*.vercel.app` URL within a minute!

## 4. Setting Up Your Custom Domain
1. In your Vercel Project Dashboard, go to **Settings** > **Domains**.
2. Type your domain name (e.g., `zerava.com`) and click **Add**.
3. Vercel will show you the **DNS Records** you need to add to your domain registrar (GoDaddy, Namecheap, etc.):
   - **A Record**: Set `Value` to `76.76.21.21`.
   - **CNAME Record** (for `www`): Set `Value` to `cname.vercel-dns.com`.
4. Wait for the DNS to propagate (usually 5–60 minutes). Vercel will automatically issue a **free SSL certificate** (the green lock icon).

## 5. Alternative: Deploy via Vercel CLI (No GitHub)
If you don't want to use GitHub, you can deploy directly from your terminal:
1. Install Vercel CLI: `npm install -g vercel`
2. Run the command: `vercel`
3. Follow the prompts to log in and deploy.
