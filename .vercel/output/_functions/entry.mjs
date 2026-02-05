import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DdhkBgJ4.mjs';
import { manifest } from './manifest_rNrI3nM0.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin.astro.mjs');
const _page2 = () => import('./pages/api/redeploy.astro.mjs');
const _page3 = () => import('./pages/api/save-story.astro.mjs');
const _page4 = () => import('./pages/sitemap.xml.astro.mjs');
const _page5 = () => import('./pages/stories/_slug_.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.17.1_@types+node@20.19.31_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30.2_rollup@4.57.1_typescript@5.9.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/admin.astro", _page1],
    ["src/pages/api/redeploy.ts", _page2],
    ["src/pages/api/save-story.ts", _page3],
    ["src/pages/sitemap.xml.ts", _page4],
    ["src/pages/stories/[slug].astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d11426c6-8fa1-4b48-bca0-9dff737f0224",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
