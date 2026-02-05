import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  // IMPORTANT: Replace this with your actual domain when you deploy!
  site: "https://your-story-site.vercel.app",
  output: "server", // Essential for instant Firestore updates
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
