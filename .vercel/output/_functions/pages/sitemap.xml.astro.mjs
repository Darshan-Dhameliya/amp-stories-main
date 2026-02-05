import { d as db } from '../chunks/firebase_CQtSvTd8.mjs';
import { getDocs, collection } from 'firebase/firestore';
export { renderers } from '../renderers.mjs';

const prerender = false;
async function GET({ site }) {
  const stories = [];
  try {
    const querySnapshot = await getDocs(collection(db, "stories"));
    querySnapshot.forEach((doc) => {
      stories.push(doc.data());
    });
  } catch (e) {
    console.error("Error fetching stories for sitemap:", e);
  }
  const baseUrl = site || "https://your-story-site.vercel.app";
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  ${stories.map(
    (story) => `
  <url>
    <loc>${new URL(`stories/${story.slug}`, baseUrl).href}</loc>
    <lastmod>${story.createdAt?.toDate ? story.createdAt.toDate().toISOString() : (/* @__PURE__ */ new Date()).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  ).join("")}
</urlset>`;
  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=600, stale-while-revalidate=1200"
    }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
