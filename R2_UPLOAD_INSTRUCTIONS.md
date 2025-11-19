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
