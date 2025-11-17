# Quantum Parsimony Hub - Deployment Guide

## 🚀 Deployment Options

The Quantum Parsimony Hub can be deployed to multiple platforms. Choose the one that works best for you:

---

## Option 1: GitHub Pages (Recommended - Free)

### Automatic Deployment
The repository is already configured with GitHub Actions for automatic deployment.

### Setup Steps:
1. **Enable GitHub Pages:**
   - Go to: https://github.com/bengoechea/quantumparsimony/settings/pages
   - Under "Build and deployment":
     - Source: Select "GitHub Actions"
   - Save the settings

2. **Trigger Deployment:**
   - The workflow will automatically run on every push to `main` branch
   - Or manually trigger it from the Actions tab

3. **Access Your Site:**
   - Once deployed, your site will be available at:
   - **https://bengoechea.github.io/quantumparsimony/**

### Manual Deployment (Alternative):
```bash
# Build the project
npm run build

# Install GitHub Pages deployment tool
npm install -g gh-pages

# Deploy to GitHub Pages
gh-pages -d dist
```

---

## Option 2: Vercel (Fast & Easy)

### One-Click Deploy:
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bengoechea/quantumparsimony)

### Manual Setup:
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Import `bengoechea/quantumparsimony`
5. Vercel will auto-detect Vite configuration
6. Click "Deploy"

**Your site will be live at:** `https://quantumparsimony.vercel.app` (or custom domain)

### CLI Deployment:
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd /home/user/webapp
vercel

# For production
vercel --prod
```

---

## Option 3: Netlify (User-Friendly)

### Drag & Drop Deploy:
1. Build the project locally:
   ```bash
   npm run build
   ```
2. Go to https://app.netlify.com/drop
3. Drag the `dist` folder to the upload area
4. Your site is live!

### Git Integration:
1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub and select `bengoechea/quantumparsimony`
4. Build settings (auto-detected from netlify.toml):
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy"

**Your site will be live at:** `https://quantumparsimony.netlify.app` (or custom domain)

### CLI Deployment:
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy --prod
```

---

## Option 4: Cloudflare Pages

### Setup:
1. Go to https://pages.cloudflare.com
2. Sign in and click "Create a project"
3. Connect to GitHub and select `bengoechea/quantumparsimony`
4. Configure build:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Click "Save and Deploy"

**Your site will be live at:** `https://quantumparsimony.pages.dev`

---

## Option 5: Other Platforms

### Railway:
```bash
railway login
railway init
railway up
```

### Render:
1. Go to https://render.com
2. New → Static Site
3. Connect GitHub repository
4. Build: `npm run build`
5. Publish: `dist`

### AWS Amplify:
1. Go to AWS Amplify Console
2. Connect repository
3. Auto-detected Vite settings
4. Deploy

---

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Access at http://localhost:3000
```

---

## 📦 Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

The built files will be in the `dist` directory.

---

## 🌐 Custom Domain Setup

### GitHub Pages:
1. Go to repository settings → Pages
2. Add custom domain under "Custom domain"
3. Update DNS records:
   ```
   Type: CNAME
   Host: www (or @)
   Value: bengoechea.github.io
   ```

### Vercel:
1. Go to project settings → Domains
2. Add your domain
3. Follow DNS configuration instructions

### Netlify:
1. Go to site settings → Domain management
2. Add custom domain
3. Configure DNS or use Netlify DNS

---

## ✅ Recommended: GitHub Pages

**Why GitHub Pages:**
- ✅ Free hosting
- ✅ Automatic deployment via GitHub Actions
- ✅ SSL/HTTPS included
- ✅ Direct integration with repository
- ✅ No account signup needed (already using GitHub)
- ✅ Version controlled deployments

**Expected URL:** https://bengoechea.github.io/quantumparsimony/

---

## 🔍 Troubleshooting

### GitHub Pages not showing:
1. Check Actions tab for deployment status
2. Verify Pages is enabled in settings
3. Ensure source is set to "GitHub Actions"
4. Check if workflow ran successfully

### Build errors:
```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 errors on refresh:
- Handled by SPA routing in all deployment configs
- Verify redirects are configured (already done in config files)

---

## 📊 Deployment Status

### Current Status:
- ✅ Code pushed to GitHub
- ✅ GitHub Actions workflow configured
- ✅ Vercel configuration ready
- ✅ Netlify configuration ready
- ✅ Build tested and working
- ⏳ Awaiting GitHub Pages enablement

### Next Steps:
1. Enable GitHub Pages in repository settings
2. Wait for automatic deployment (2-3 minutes)
3. Access your site at the GitHub Pages URL
4. (Optional) Configure custom domain

---

## 🎉 Success Checklist

After deployment, verify:
- [ ] Site loads correctly
- [ ] All 7 pages accessible
- [ ] Navigation works
- [ ] Styling appears correctly
- [ ] Responsive on mobile
- [ ] No console errors
- [ ] All links functional

---

## 📞 Support

If you encounter issues:
1. Check deployment logs in your platform
2. Verify build succeeds locally: `npm run build`
3. Check browser console for errors
4. Review platform-specific documentation

---

## 🔄 Continuous Deployment

All platforms support automatic deployment:
- **GitHub Pages:** Push to `main` branch
- **Vercel:** Push to any branch (auto-deploys)
- **Netlify:** Push to `main` branch
- **Cloudflare:** Push to production branch

Every code change will automatically deploy to your live site!

---

**Your Quantum Parsimony Hub is ready to share with the world! 🚀**
