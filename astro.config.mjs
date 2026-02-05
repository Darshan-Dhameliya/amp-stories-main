import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  // Updated with your actual live URL
  site: "https://amp-stories-main.vercel.app",
  output: "server",
  adapter: vercel({
    // WE MUST DISABLE THIS for AMP stories because it injects scripts that break validation
    webAnalytics: {
      enabled: false,
    },
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
