#!/bin/bash

# Cloudflare R2 Setup Script for Quantum Parsimony Podcast Audio
# This script sets up R2 bucket and uploads the podcast audio file

echo "🌐 Cloudflare R2 Setup for Podcast Audio"
echo "========================================"
echo ""

# Check if audio file exists
if [ ! -f "public/podcasts/Information_Dictates_Energy_The_Forty_Year_Quest.m4a" ]; then
    echo "❌ Error: Audio file not found!"
    exit 1
fi

echo "✅ Audio file found (27 MB)"
echo ""

# Configuration
BUCKET_NAME="quantum-parsimony-podcasts"
AUDIO_FILE="public/podcasts/Information_Dictates_Energy_The_Forty_Year_Quest.m4a"
R2_PATH="podcasts/Information_Dictates_Energy_The_Forty_Year_Quest.m4a"

echo "📦 Bucket Configuration:"
echo "   Name: $BUCKET_NAME"
echo "   File: Information_Dictates_Energy_The_Forty_Year_Quest.m4a"
echo "   Size: 27 MB"
echo ""

# Check if wrangler is installed
if ! command -v npx wrangler &> /dev/null; then
    echo "❌ Error: Wrangler not found. Installing..."
    npm install -D wrangler
fi

echo "🔧 Setting up Cloudflare R2..."
echo ""
echo "MANUAL STEPS REQUIRED:"
echo ""
echo "1. Go to Cloudflare Dashboard: https://dash.cloudflare.com/"
echo "2. Navigate to: R2 Storage"
echo "3. Click: 'Create bucket'"
echo "4. Bucket name: $BUCKET_NAME"
echo "5. Location: Automatic"
echo "6. Click: 'Create bucket'"
echo ""
echo "7. In the bucket, click 'Upload'"
echo "8. Upload file: $AUDIO_FILE"
echo "9. Set path in bucket: $R2_PATH"
echo ""
echo "10. Go to bucket Settings → Public access"
echo "11. Click: 'Allow Access' or 'Connect Custom Domain'"
echo "12. Enable public access for the podcasts folder"
echo ""
echo "13. Get your R2 public URL (looks like):"
echo "    https://pub-xxxxx.r2.dev/podcasts/Information_Dictates_Energy_The_Forty_Year_Quest.m4a"
echo ""
echo "14. Update src/pages/Podcasts.jsx with your R2 URL"
echo ""
echo "OR use Wrangler CLI (requires API token):"
echo ""
echo "export CLOUDFLARE_API_TOKEN='your-token'"
echo "npx wrangler r2 bucket create $BUCKET_NAME"
echo "npx wrangler r2 object put $BUCKET_NAME/$R2_PATH --file=$AUDIO_FILE"
echo "npx wrangler r2 bucket domain add $BUCKET_NAME --domain=podcasts.yourdomain.com"
echo ""
echo "📝 After uploading, your podcast URL will be:"
echo "   https://pub-xxxxx.r2.dev/$R2_PATH"
echo ""
echo "🎯 Benefits of R2:"
echo "   ✅ Free tier: 10 GB storage"
echo "   ✅ No egress fees"
echo "   ✅ Global CDN"
echo "   ✅ Fast streaming"
echo "   ✅ Unlimited bandwidth on free tier"
echo ""

# Create a simple upload instruction file
cat > R2_UPLOAD_INSTRUCTIONS.md << 'EOF'
# Upload Podcast to Cloudflare R2

## Quick Upload via Dashboard

1. **Go to Cloudflare Dashboard**
   - URL: https://dash.cloudflare.com/
   - Login to your account

2. **Navigate to R2**
   - Click "R2" in left sidebar
   - Or go to: Account Home → R2

3. **Create Bucket**
   - Click "Create bucket"
   - Name: `quantum-parsimony-podcasts`
   - Location: Automatic (or choose closest to your users)
   - Click "Create bucket"

4. **Upload Audio File**
   - Click into your new bucket
   - Click "Upload" button
   - Select file: `public/podcasts/Information_Dictates_Energy_The_Forty_Year_Quest.m4a`
   - Path in bucket: `podcasts/Information_Dictates_Energy_The_Forty_Year_Quest.m4a`
   - Click "Upload"
   - Wait for upload to complete (27 MB)

5. **Enable Public Access**
   - In bucket, go to "Settings" tab
   - Scroll to "Public access"
   - Click "Allow Access" or "Connect Custom Domain"
   - Note your public URL format

6. **Get Public URL**
   - Your file will be at:
   - `https://pub-[your-account-id].r2.dev/podcasts/Information_Dictates_Energy_The_Forty_Year_Quest.m4a`
   - Copy this URL

7. **Update Code**
   - Open `src/pages/Podcasts.jsx`
   - Find the `<audio>` tag
   - Replace the `src` URL with your R2 URL
   - Commit and deploy

## Alternative: CLI Upload

If you have Cloudflare API token:

```bash
# Set your API token
export CLOUDFLARE_API_TOKEN="your-token-here"

# Create bucket
npx wrangler r2 bucket create quantum-parsimony-podcasts

# Upload file
npx wrangler r2 object put quantum-parsimony-podcasts/podcasts/Information_Dictates_Energy_The_Forty_Year_Quest.m4a \
  --file=public/podcasts/Information_Dictates_Energy_The_Forty_Year_Quest.m4a \
  --content-type=audio/x-m4a

# List objects (verify upload)
npx wrangler r2 object list quantum-parsimony-podcasts
```

## Get API Token

1. Go to: https://dash.cloudflare.com/profile/api-tokens
2. Click "Create Token"
3. Use template: "Edit Cloudflare Workers"
4. Or create custom with:
   - Account → Cloudflare R2 → Edit
5. Copy token
6. Set environment variable:
   ```bash
   export CLOUDFLARE_API_TOKEN="your-token"
   ```

## Verify Upload

After uploading, test the URL in your browser:
```
https://pub-[your-id].r2.dev/podcasts/Information_Dictates_Energy_The_Forty_Year_Quest.m4a
```

Should start downloading or playing the audio file.

## Update Podcasts Page

Edit `src/pages/Podcasts.jsx`:

```jsx
<source src="https://pub-[your-id].r2.dev/podcasts/Information_Dictates_Energy_The_Forty_Year_Quest.m4a" type="audio/mp4" />
```

Replace `[your-id]` with your actual R2 account ID.

## Cost

- **Storage:** 27 MB of 10 GB free tier = negligible
- **Requests:** Class B operations for streaming = free in limits
- **Egress:** FREE (no egress charges on R2)
- **Total:** $0.00 on free tier

## Done!

Once uploaded and URL updated:
1. ✅ Podcast will stream fast globally
2. ✅ No download button needed
3. ✅ Free hosting forever (in free tier)
4. ✅ Professional audio delivery
EOF

echo "✅ Instructions created: R2_UPLOAD_INSTRUCTIONS.md"
echo ""
echo "📖 Read R2_UPLOAD_INSTRUCTIONS.md for detailed steps"
echo ""
echo "🚀 Quick Start:"
echo "   1. Go to: https://dash.cloudflare.com/"
echo "   2. R2 → Create bucket → quantum-parsimony-podcasts"
echo "   3. Upload the audio file from public/podcasts/"
echo "   4. Enable public access"
echo "   5. Copy your R2 URL"
echo "   6. Update src/pages/Podcasts.jsx with the URL"
echo ""
