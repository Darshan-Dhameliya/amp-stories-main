import { e as createAstro, f as createComponent, h as addAttribute, l as renderHead, r as renderTemplate } from '../chunks/astro/server_B2ar_6ro.mjs';
/* empty css                                 */
import { d as db } from '../chunks/firebase_CQtSvTd8.mjs';
import { query, collection, orderBy, getDocs } from 'firebase/firestore';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://your-story-site.vercel.app");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const stories = [];
  try {
    const q = query(collection(db, "stories"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      stories.push({ id: doc.id, ...doc.data() });
    });
  } catch (e) {
    console.error("Error fetching stories:", e);
  }
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Web Stories</title>${renderHead()}</head> <body class="bg-zinc-900 text-white min-h-screen p-6 font-sans"> <div class="max-w-7xl mx-auto"> <div class="flex justify-between items-center mb-10"> <h1 class="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
Featured Stories
</h1> <a href="/admin" class="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"> <span>+</span> Create Story
</a> </div> ${stories.length === 0 ? renderTemplate`<div class="text-center py-20 text-zinc-500">
No stories found. Create your first one!
</div>` : renderTemplate`<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"> ${stories.map((story) => renderTemplate`<a${addAttribute(`/stories/${story.slug}`, "href")} class="group relative bg-zinc-800 rounded-xl overflow-hidden hover:-translate-y-1 transition-transform duration-200 block shadow-lg"> <div class="aspect-[9/16] w-full overflow-hidden"> <img${addAttribute(story.coverImage, "src")}${addAttribute(story.title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"> </div> <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-4"> <h2 class="text-white font-bold text-lg leading-tight line-clamp-2">${story.title}</h2> <span class="text-xs text-zinc-300 mt-2 flex items-center gap-1"> <span>${story.slides?.length || 0} slides</span> <span class="w-1 h-1 bg-zinc-500 rounded-full"></span> <span>AMP</span> </span> </div> </a>`)} </div>`} </div> </body></html>`;
}, "/Users/darshandhameliya/Downloads/amp-stories-main/src/pages/index.astro", void 0);

const $$file = "/Users/darshandhameliya/Downloads/amp-stories-main/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
