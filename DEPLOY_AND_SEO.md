# 🚀 Vercel + Firestore: The Ultimate Free Story Factory

This setup gives you **Instant Updates**. When you save a story in the Admin Panel, it is live **immediately** without any rebuild or redeploy!

## 1. Deploying to Vercel

1.  **Push to GitHub**:
    Ensure your latest code is committed and pushed to your repo.
    ```bash
    git add .
    git commit -m "Switch to Vercel SSR"
    git push origin main
    ```

2.  **Import to Vercel**:
    *   Go to [vercel.com](https://vercel.com)
    *   Click "Add New..." -> "Project".
    *   Select your `amp-stories-main` repository.
    *   **Framework**: Astro (should be auto-detected).
    *   **Environment Variables**: You MUST add your Firebase keys here!
        *   `PUBLIC_FIREBASE_API_KEY`
        *   `PUBLIC_FIREBASE_AUTH_DOMAIN`
        *   `PUBLIC_FIREBASE_PROJECT_ID`
        *   `PUBLIC_FIREBASE_STORAGE_BUCKET`
        *   `PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
        *   `PUBLIC_FIREBASE_APP_ID`

3.  **Click Deploy**.

## 2. Setting Up SEO Discovery

1.  Once you have your live Vercel URL (e.g., `https://awesome-amp-stories.vercel.app`), update your `astro.config.mjs`:
    ```javascript
    site: "https://awesome-amp-stories.vercel.app", 
    ```
2.  Commit and push this change. Vercel will rebuild the sitemap with your correct domain.

## 3. Google Discovery

### A. Verify with Google Search Console
1.  Add your Vercel URL as a new property.
2.  Submit your sitemap: `https://awesome-amp-stories.vercel.app/sitemap-index.xml`.

### B. Validating AMP
1.  Take any of your live story URLs (e.g., `.../stories/my-story`).
2.  Test it at [search.google.com/test/amp](https://search.google.com/test/amp). It should show "Valid AMP Story".

---

**Summary of Workflow:**
1.  Go to `https://awesome-amp-stories.vercel.app/admin`.
2.  Create/Import a Story.
3.  Click **Save**.
4.  **Boom!** View it live at `https://awesome-amp-stories.vercel.app/stories/slug` instantly. No terminal needed!
