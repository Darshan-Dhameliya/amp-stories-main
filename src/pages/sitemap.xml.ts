import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export const prerender = false;

export async function GET({ site }: { site: string }) {
  const stories: any[] = [];
  try {
    const querySnapshot = await getDocs(collection(db, "stories"));
    querySnapshot.forEach((doc) => {
      stories.push(doc.data());
    });
  } catch (e) {
    console.error("Error fetching stories for sitemap:", e);
  }

  // Fallback if site is not defined in config
  const baseUrl = site || "https://awesome-amp-stories.vercel.app";

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  ${stories
    .map(
      (story) => `
  <url>
    <loc>${new URL(`stories/${story.slug}`, baseUrl).href}</loc>
    <lastmod>${story.createdAt?.toDate ? story.createdAt.toDate().toISOString() : new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`,
    )
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=600, stale-while-revalidate=1200",
    },
  });
}
