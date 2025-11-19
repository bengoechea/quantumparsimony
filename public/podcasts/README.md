# Podcast Audio Files

## 📁 Directory Purpose

This directory contains audio files for the Quantum Parsimony Hub podcasts section.

## 🎙️ Current Episodes

### Information Dictates Energy: The Forty Year Quest
- **File:** `Information_Dictates_Energy_The_Forty_Year_Quest.m4a`
- **Duration:** ~45 minutes
- **Size:** 27 MB
- **Format:** M4A (AAC audio)

## 🚀 Deployment Instructions

### For Cloudflare Pages

Since the audio file is **27 MB** (large for git), you have two options:

#### Option 1: Upload Separately After Deployment

1. Deploy your site to Cloudflare Pages normally
2. After deployment, manually upload the audio file:
   - Go to your Cloudflare Pages project
   - Navigate to the deployment
   - Use Cloudflare Workers or R2 to serve the file
   
#### Option 2: Use External Hosting

Host the audio file on a CDN or cloud storage:

**Services to consider:**
- **Cloudflare R2** (recommended - free tier, fast)
- **AWS S3** (reliable, pay as you go)
- **Google Cloud Storage** (generous free tier)
- **Backblaze B2** (affordable, S3-compatible)
- **Archive.org** (free for public content)

**Steps:**
1. Upload `Information_Dictates_Energy_The_Forty_Year_Quest.m4a` to your chosen service
2. Get the public URL
3. Update `src/pages/Podcasts.jsx`:
   ```jsx
   <source src="YOUR_CDN_URL_HERE" type="audio/x-m4a" />
   ```

#### Option 3: Git LFS (Large File Storage)

If you want to keep files in git:

```bash
# Install git-lfs
git lfs install

# Track audio files
git lfs track "*.m4a"

# Add and commit
git add .gitattributes
git add public/podcasts/*.m4a
git commit -m "Add podcast audio via LFS"
```

## 📝 Current Setup

The Podcasts page (`src/pages/Podcasts.jsx`) is configured to:
- Serve audio from `/podcasts/` path
- Provide inline player with controls
- Offer download option
- Include full episode description and notes

## 🔧 Adding New Episodes

To add new podcast episodes:

1. **Add audio file** to `public/podcasts/`
2. **Update** `src/pages/Podcasts.jsx` with new episode info
3. **Upload separately** to CDN if file is large (> 10 MB)
4. **Update audio source URLs** to point to CDN if needed

## 💡 Recommended: Cloudflare R2

**Why Cloudflare R2:**
- Free tier: 10 GB storage, 10 million Class A operations/month
- No egress fees (unlike S3)
- Fast global distribution
- Easy integration with Cloudflare Pages
- S3-compatible API

**Setup:**
1. Go to Cloudflare Dashboard → R2
2. Create bucket: `quantum-parsimony-podcasts`
3. Upload audio files
4. Make bucket public or use signed URLs
5. Update audio URLs in code

## 📊 File Size Guidelines

For optimal user experience:

| Size | Recommendation |
|------|----------------|
| < 5 MB | Include in git/deploy |
| 5-25 MB | Use CDN or separate upload |
| > 25 MB | Definitely use CDN |

Current file (27 MB) → **Use CDN or separate hosting**

## 🎯 Current Status

- ✅ Podcast page created
- ✅ Audio player integrated
- ✅ Episode notes and description complete
- ⏳ Audio file needs external hosting for production
- 📝 Update source URL once hosted

## 🔗 Helpful Links

- [Cloudflare R2 Docs](https://developers.cloudflare.com/r2/)
- [Git LFS Documentation](https://git-lfs.github.com/)
- [AWS S3 Pricing](https://aws.amazon.com/s3/pricing/)
- [Archive.org Upload](https://archive.org/create/)
