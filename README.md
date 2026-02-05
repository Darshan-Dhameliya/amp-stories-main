# 🚀 AMP Stories Platform

A lightweight, high-performance Web Stories platform built with **Astro**.
Completely static, powered by JSON, and deployed anywhere.

## ✨ Features

*   **⚡ Zero-JS Runtime**: Built with Astro for maximum performance.
*   **📱 AMP Valid**: 100% compliant Web Stories out of the box.
*   **📄 JSON Powered**: Manage all your stories in a single `stories.json` file.
*   **🎨 Customizable**: Easy-to-style components using standard CSS.

## 🛠️ Quick Start

1.  **Install Dependencies**
    ```bash
    pnpm install
    ```

2.  **Start Development Server**
    ```bash
    pnpm dev
    ```
    Your site will be live at `http://localhost:4321`

3.  **Build for Production**
    ```bash
    pnpm build
    ```

## 📝 Managing Content

All stories are defined in `src/data/stories.json`.

**Example Structure:**
```json
[
  {
    "slug": "my-amazing-story",
    "title": "My Amazing Story",
    "coverImage": "https://example.com/cover.jpg",
    "ctaLinks": {
      "global": "https://example.com/link"
    },
    "slides": [
      {
        "title": "Slide 1",
        "subtitle": "Welcome to my story",
        "imageUrl": "https://example.com/image1.jpg",
        "ctaText": "Learn More"
      }
    ]
  }
]
```

## 📂 Project Structure

```
/
├── public/             # Static assets (logo, favicon)
├── src/
│   ├── components/     # Astro components
│   ├── data/           
│   │   └── stories.json # Content Database
│   ├── layouts/        # AMP Layouts
│   └── pages/          # File-based routing
│       ├── index.astro # Homepage
│       └── stories/
│           └── [slug].astro # Story Renderer
├── astro.config.mjs    # Configuration
└── package.json
```

## 🚀 Deployment

Since this is a static site, you can deploy it anywhere!

*   **Vercel / Netlify / Cloudflare Pages**: Connect your repo and it will auto-detect Astro.
*   **Static Hosting**: Run `pnpm build` and upload the `dist/` folder.
