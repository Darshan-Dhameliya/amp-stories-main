import { e as createAstro, f as createComponent, r as renderTemplate, n as renderComponent, l as renderHead, m as maybeRenderHead, h as addAttribute, u as unescapeHTML, o as renderSlot } from '../../chunks/astro/server_B2ar_6ro.mjs';
/* empty css                                     */
import { d as db } from '../../chunks/firebase_CQtSvTd8.mjs';
import { query, collection, where, limit, getDocs } from 'firebase/firestore';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://your-story-site.vercel.app");
const $$StoryLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$StoryLayout;
  const { title, poster, slug } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site || "http://localhost:4321");
  const schemaData = {
    "@context": "http://schema.org",
    "@type": "NewsArticle",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalURL.href
    },
    "headline": title.substring(0, 110),
    "image": [poster],
    "datePublished": (/* @__PURE__ */ new Date()).toISOString(),
    // In a real app, store this in JSON
    "dateModified": (/* @__PURE__ */ new Date()).toISOString(),
    "author": {
      "@type": "Organization",
      "name": "Web Story Platform"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Web Story Platform",
      "logo": {
        "@type": "ImageObject",
        "url": new URL("/logo.png", canonicalURL).href
      }
    }
  };
  return renderTemplate(_a || (_a = __template(['<html amp lang="en" data-astro-cid-oaqs7v6q> <head><meta charset="utf-8"><title>', '</title><meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1"><meta name="description"', '><!-- AMP Scripts --><script async src="https://cdn.ampproject.org/v0.js"><\/script><script async custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js"><\/script><!-- Canonical --><link rel="canonical"', '><!-- Schema.org for Google Discovery --><script type="application/ld+json">', '<\/script><!-- Open Graph / SEO --><meta property="og:title"', '><meta property="og:type" content="article"><meta property="og:url"', '><meta property="og:image"', ">", "<noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>", "</head> <body data-astro-cid-oaqs7v6q> ", " </body> </html>"])), title, addAttribute(title, "content"), addAttribute(canonicalURL, "href"), unescapeHTML(JSON.stringify(schemaData)), addAttribute(title, "content"), addAttribute(canonicalURL, "content"), addAttribute(poster, "content"), maybeRenderHead(), renderHead(), renderComponent($$result, "amp-story", "amp-story", { "standalone": true, "title": title, "publisher": "Web Story Platform", "publisher-logo-src": "/logo.png", "poster-portrait-src": poster, "data-astro-cid-oaqs7v6q": true }, { "default": () => renderTemplate` ${renderSlot($$result, $$slots["default"])} ` }));
}, "/Users/darshandhameliya/Downloads/amp-stories-main/src/layouts/StoryLayout.astro", void 0);

const $$Astro$1 = createAstro("https://your-story-site.vercel.app");
const $$StoryPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$StoryPage;
  const { id, image, title, subtitle, ctaText, ctaLink } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "amp-story-page", "amp-story-page", { "id": id, "data-astro-cid-fjd3bvuv": true }, { "default": () => renderTemplate` ${renderComponent($$result, "amp-story-grid-layer", "amp-story-grid-layer", { "template": "fill", "data-astro-cid-fjd3bvuv": true }, { "default": () => renderTemplate` ${renderComponent($$result, "amp-img", "amp-img", { "src": image, "width": "720", "height": "1280", "layout": "responsive", "data-astro-cid-fjd3bvuv": true })} ` })} ${renderComponent($$result, "amp-story-grid-layer", "amp-story-grid-layer", { "template": "vertical", "data-astro-cid-fjd3bvuv": true }, { "default": () => renderTemplate` ${maybeRenderHead()}<div class="content-wrapper" data-astro-cid-fjd3bvuv> <h1 animate-in="fly-in-left" animate-in-delay="0.3s" data-astro-cid-fjd3bvuv>${title}</h1> ${subtitle && renderTemplate`<p animate-in="fade-in" animate-in-delay="0.6s" data-astro-cid-fjd3bvuv>${subtitle}</p>`} </div> ` })} ${ctaLink && ctaText && renderTemplate`${renderComponent($$result, "amp-story-page-outlink", "amp-story-page-outlink", { "layout": "nodisplay", "data-astro-cid-fjd3bvuv": true }, { "default": () => renderTemplate` <a${addAttribute(ctaLink, "href")} data-astro-cid-fjd3bvuv>${ctaText}</a> ` })}`} ` })} `;
}, "/Users/darshandhameliya/Downloads/amp-stories-main/src/components/StoryPage.astro", void 0);

const $$Astro = createAstro("https://your-story-site.vercel.app");
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  let story = null;
  try {
    const q = query(collection(db, "stories"), where("slug", "==", slug), limit(1));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      story = querySnapshot.docs[0].data();
    }
  } catch (e) {
    console.error("Error fetching story:", e);
  }
  if (!story) {
    return new Response(null, {
      status: 404,
      statusText: "Not found"
    });
  }
  const ctaLink = story.ctaLinks?.global || "#";
  return renderTemplate`${renderComponent($$result, "StoryLayout", $$StoryLayout, { "title": story.title, "poster": story.coverImage, "slug": slug }, { "default": async ($$result2) => renderTemplate`${story.slides?.map((slide, index) => renderTemplate`${renderComponent($$result2, "StoryPage", $$StoryPage, { "id": `page-${index}`, "image": slide.imageUrl, "title": slide.title, "subtitle": slide.subtitle, "ctaText": slide.ctaText, "ctaLink": index === story.slides.length - 1 ? ctaLink : void 0 })}`)}` })}`;
}, "/Users/darshandhameliya/Downloads/amp-stories-main/src/pages/stories/[slug].astro", void 0);

const $$file = "/Users/darshandhameliya/Downloads/amp-stories-main/src/pages/stories/[slug].astro";
const $$url = "/stories/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
