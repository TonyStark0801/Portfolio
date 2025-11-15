# Deployment Guide

## Deploying to Vercel

Your portfolio is already set up for Vercel deployment. Since you mentioned the project is already hosted on Vercel, any commits will automatically trigger a new deployment.

### Steps:

1. **Move to the new portfolio directory**:
   ```bash
   cd /Users/shubham37.mishra/Portfolio/portfolio-v2
   ```

2. **Initialize git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "New modern portfolio with Next.js 15"
   ```

3. **Push to your repository**:
   ```bash
   git remote add origin <your-repo-url>
   git branch -M main
   git push -u origin main
   ```

4. **Vercel will automatically**:
   - Detect the Next.js project
   - Install dependencies
   - Build the project
   - Deploy to production

## Local Testing Before Deployment

Always test locally before deploying:

```bash
# Development mode
npm run dev

# Production build test
npm run build
npm start
```

## Environment Variables

No environment variables are required for this portfolio. All data is static and configured in the `/data` directory.

## Custom Domain

To add a custom domain:
1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow Vercel's DNS configuration instructions

## Updating Content

After deployment, to update content:
1. Edit files in `/data` directory
2. Commit and push changes
3. Vercel will automatically redeploy

That's it! Your portfolio is now live! 🚀
