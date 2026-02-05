import { f as createComponent, r as renderTemplate, k as defineScriptVars, l as renderHead } from '../chunks/astro/server_B2ar_6ro.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Admin = createComponent(async ($$result, $$props, $$slots) => {
  const firebaseConfig = {
    apiKey: "AIzaSyBgiCDWs3r9Xjw9n97z0fBQA9a3TpCkirI",
    authDomain: "awesome-amp-stories.firebaseapp.com",
    projectId: "awesome-amp-stories",
    storageBucket: "awesome-amp-stories.firebasestorage.app",
    messagingSenderId: "973905445519",
    appId: "1:973905445519:web:35bd9021ad69b8ecba26fa"
  };
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Story Creator</title>', '</head> <body class="bg-zinc-50 text-zinc-900 min-h-screen font-sans"> <div class="max-w-4xl mx-auto py-12 px-4"> <!-- JSON Import Feature --> <div class="bg-blue-50 border border-blue-100 p-6 rounded-xl mb-8"> <h3 class="text-lg font-semibold text-blue-900 mb-2 flex items-center gap-2">\n⚡ Quick Import\n</h3> <p class="text-sm text-blue-600 mb-4">Paste your JSON here to auto-fill the form.</p> <textarea id="jsonInput" class="w-full h-24 p-3 text-sm font-mono bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="{ &quot;slug&quot;: &quot;my-story&quot;, &quot;title&quot;: &quot;...&quot;, &quot;slides&quot;: [...] }"></textarea> <div class="mt-3 text-right"> <button type="button" id="autoFillBtn" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm">\nAuto-Fill Form\n</button> </div> </div> <div class="bg-white rounded-xl shadow-sm border border-zinc-200 p-8"> <div class="flex justify-between items-center mb-8 pb-4 border-b border-zinc-100"> <h1 class="text-2xl font-bold text-zinc-900">Create / Edit Story</h1> <div class="flex gap-2"> <a href="/" class="text-sm font-medium text-zinc-500 hover:text-zinc-800 transition-colors">← Back Home</a> </div> </div> <form id="storyForm" class="space-y-8"> <!-- Metadata --> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div class="space-y-2"> <label class="block text-sm font-medium text-zinc-700">Story Slug (URL)</label> <input type="text" name="slug" required placeholder="e.g., ai-revolution-2026" class="w-full px-3 py-2 border border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"> </div> <div class="space-y-2"> <label class="block text-sm font-medium text-zinc-700">Affiliate Link (Global)</label> <input type="url" name="globalLink" placeholder="https://amazon.com/..." class="w-full px-3 py-2 border border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"> </div> </div> <div class="space-y-2"> <label class="block text-sm font-medium text-zinc-700">Story Title</label> <input type="text" name="title" required placeholder="Main Headline" class="w-full px-3 py-2 border border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"> </div> <div class="space-y-2"> <label class="block text-sm font-medium text-zinc-700">Cover Image URL</label> <input type="url" name="coverImage" required placeholder="https://images.unsplash.com/..." class="w-full px-3 py-2 border border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"> </div> <!-- Slides --> <div class="pt-8"> <div class="flex justify-between items-center mb-6"> <h3 class="text-lg font-semibold text-zinc-900">Story Slides</h3> <span id="slide-count-badge" class="bg-zinc-100 text-zinc-600 px-2 py-1 rounded-full text-xs font-medium">0 Slides</span> </div> <div id="slides-container" class="space-y-6"> <!-- Slides will be added here --> </div> <button type="button" id="addSlideBtn" class="w-full mt-6 py-3 border-2 border-dashed border-zinc-300 rounded-xl text-zinc-600 hover:border-zinc-400 hover:bg-zinc-50 hover:text-zinc-800 transition-all font-medium flex items-center justify-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path></svg>\nAdd New Slide\n</button> </div> <div class="pt-8 border-t border-zinc-100 sticky bottom-0 bg-white -mx-8 px-8 py-4 mt-8 flex flex-col md:flex-row gap-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]"> <button type="submit" class="flex-1 bg-zinc-900 hover:bg-black text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"> <span>💾</span> Save to Firestore\n</button> ', " </div> ", " </form> </div> </div> <!-- Pass Firestore config to client --> <script>(function(){", `
        window.FIREBASE_CONFIG = firebaseConfig;
    })();</script> <script type="module">
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
        import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

        // Global state to check if Firebase is ready
        let db = null;
        try {
            if (window.FIREBASE_CONFIG.apiKey) {
                const app = initializeApp(window.FIREBASE_CONFIG);
                db = getFirestore(app);
                console.log("Firebase initialized successfully");
            } else {
                console.warn("Firebase config is missing API key. Firestore features will be disabled.");
            }
        } catch (e) {
            console.error("Firebase init error:", e);
        }

        // Slide Template Function
        function createSlideHTML(id, data = {}) {
            return \`
                <div class="slide bg-zinc-50 border border-zinc-200 rounded-xl p-6 relative group transition-all hover:shadow-md" id="slide-\${id}">
                    <div class="flex justify-between items-start mb-4 pb-4 border-b border-zinc-200/60">
                        <div class="flex items-center gap-3">
                            <span class="slide-number-badge bg-white border border-zinc-200 text-zinc-500 w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold shadow-sm">
                                #
                            </span>
                            <h4 class="font-medium text-zinc-900">Slide Content</h4>
                        </div>
                        <button 
                            type="button" 
                            class="remove-slide-btn text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 p-2 rounded-lg transition-colors text-sm font-medium flex items-center gap-1"
                            data-id="\${id}"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>
                            Remove
                        </button>
                    </div>
                    <div class="space-y-4">
                        <div class="space-y-2">
                            <label class="block text-xs font-semibold uppercase tracking-wider text-zinc-500">Title</label>
                            <input type="text" name="slides[\${id}][title]" value="\${data.title || ''}" required class="w-full px-3 py-2 border border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white">
                        </div>
                        <div class="space-y-2">
                            <label class="block text-xs font-semibold uppercase tracking-wider text-zinc-500">Subtitle</label>
                            <input type="text" name="slides[\${id}][subtitle]" value="\${data.subtitle || ''}" class="w-full px-3 py-2 border border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white">
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="space-y-2">
                                <label class="block text-xs font-semibold uppercase tracking-wider text-zinc-500">Image URL</label>
                                <input type="url" name="slides[\${id}][imageUrl]" value="\${data.imageUrl || data.image || ''}" required class="w-full px-3 py-2 border border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white">
                            </div>
                            <div class="space-y-2">
                                <label class="block text-xs font-semibold uppercase tracking-wider text-zinc-500">CTA Text</label>
                                <input type="text" name="slides[\${id}][ctaText]" value="\${data.ctaText || ''}" placeholder="Optional" class="w-full px-3 py-2 border border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white">
                            </div>
                        </div>
                    </div>
                </div>
            \`;
        }

        function updateBadge() {
            const slides = document.querySelectorAll('.slide');
            const badge = document.getElementById('slide-count-badge');
            if (badge) badge.innerText = \`\${slides.length} Slides\`;
            slides.forEach((slide, index) => {
                const badge = slide.querySelector('.slide-number-badge');
                if (badge) badge.innerText = index + 1;
            });
        }

        window.addSlide = (data = {}) => {
            const container = document.getElementById('slides-container');
            const uniqueId = Date.now() + Math.random().toString(36).substr(2, 9);
            const slideHtml = createSlideHTML(uniqueId, data);
            
            const div = document.createElement('div');
            div.innerHTML = slideHtml.trim();
            const slideEl = div.firstChild;
            
            container.appendChild(slideEl);
            
            // Attach delete listener
            slideEl.querySelector('.remove-slide-btn').addEventListener('click', (e) => {
                const id = e.currentTarget.getAttribute('data-id');
                document.getElementById(\`slide-\${id}\`).remove();
                updateBadge();
            });
            
            updateBadge();
        };

        // Event Listeners
        document.getElementById('addSlideBtn')?.addEventListener('click', () => window.addSlide());
        
        document.getElementById('autoFillBtn')?.addEventListener('click', () => {
            console.log("Auto-fill clicked");
            const jsonInput = document.getElementById('jsonInput');
            const jsonStr = jsonInput ? jsonInput.value : "";
            if (!jsonStr) {
                alert("Please paste JSON first");
                return;
            }

            try {
                let data = JSON.parse(jsonStr);
                // Handle array of stories or single story
                if (Array.isArray(data)) {
                    data = data[0]; 
                }

                console.log("Parsed data:", data);

                if (data.slug) document.querySelector('[name="slug"]').value = data.slug;
                if (data.title) document.querySelector('[name="title"]').value = data.title;
                if (data.coverImage) document.querySelector('[name="coverImage"]').value = data.coverImage;
                
                // Handle both ctaLinks.global and direct globalLink
                if (data.ctaLinks && data.ctaLinks.global) {
                    document.querySelector('[name="globalLink"]').value = data.ctaLinks.global;
                } else if (data.globalLink) {
                    document.querySelector('[name="globalLink"]').value = data.globalLink;
                }

                // Clear existing slides
                document.getElementById('slides-container').innerHTML = '';
                
                if (data.slides && Array.isArray(data.slides)) {
                    data.slides.forEach(slide => window.addSlide(slide));
                } else {
                    window.addSlide();
                }
                
                console.log("Form filled successfully");
            } catch (e) {
                console.error("JSON parse error:", e);
                alert("Error parsing JSON: " + e.message);
            }
        });

        // Initialize with one slide
        setTimeout(() => {
            if (document.querySelectorAll('.slide').length === 0) {
                window.addSlide();
            }
        }, 100);

        // Handle Save to Firestore
        document.getElementById('storyForm')?.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            if (!db) {
                alert("Firebase is not configured. Please check your .env file and console.");
                return;
            }

            const formData = new FormData(e.target);
            
            const slides = [];
            document.querySelectorAll('.slide').forEach((el) => {
                const title = el.querySelector('input[name*="[title]"]').value;
                const subtitle = el.querySelector('input[name*="[subtitle]"]').value;
                const imageUrl = el.querySelector('input[name*="[imageUrl]"]').value;
                const ctaText = el.querySelector('input[name*="[ctaText]"]').value;
                if (title && imageUrl) {
                    slides.push({ title, subtitle, imageUrl, ctaText });
                }
            });

            const storyData = {
                slug: formData.get('slug'),
                title: formData.get('title'),
                coverImage: formData.get('coverImage'),
                ctaLinks: { global: formData.get('globalLink') },
                slides,
                createdAt: serverTimestamp()
            };

            try {
                const btn = e.submitter;
                const originalText = btn.innerHTML;
                btn.innerHTML = 'Saving to Firestore...';
                btn.disabled = true;

                await addDoc(collection(db, "stories"), storyData);
                
                alert("Saved successfully to Cloud Firestore!");
                btn.innerHTML = originalText;
                btn.disabled = false;

            } catch (err) {
                console.error("Firestore save error:", err);
                alert("Error saving: " + err.message);
                e.submitter.innerHTML = 'Error';
                e.submitter.disabled = false;
            }
        });

        // Handle Redeploy (Vercel Hook)
        document.getElementById('redeployBtn')?.addEventListener('click', async (e) => {
            if (!confirm("This will trigger a full rebuild of your site to update the sitemap. Continue?")) return;

            const btn = e.currentTarget;
            const originalText = btn.innerHTML;
            btn.innerHTML = 'Triggering Rebuild...';
            btn.disabled = true;

            try {
                const res = await fetch('/api/redeploy', { method: 'POST' });
                const data = await res.json();

                if (res.ok) {
                    alert("🚀 Redeploy triggered! It will be live in ~2 minutes.");
                } else {
                    alert("❌ Error: " + (data.error || "Unknown error"));
                }
            } catch (err) {
                alert("❌ Connection error: " + err.message);
            } finally {
                btn.innerHTML = originalText;
                btn.disabled = false;
            }
        });
    </script> </body> </html>`], ['<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Story Creator</title>', '</head> <body class="bg-zinc-50 text-zinc-900 min-h-screen font-sans"> <div class="max-w-4xl mx-auto py-12 px-4"> <!-- JSON Import Feature --> <div class="bg-blue-50 border border-blue-100 p-6 rounded-xl mb-8"> <h3 class="text-lg font-semibold text-blue-900 mb-2 flex items-center gap-2">\n⚡ Quick Import\n</h3> <p class="text-sm text-blue-600 mb-4">Paste your JSON here to auto-fill the form.</p> <textarea id="jsonInput" class="w-full h-24 p-3 text-sm font-mono bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="{ &quot;slug&quot;: &quot;my-story&quot;, &quot;title&quot;: &quot;...&quot;, &quot;slides&quot;: [...] }"></textarea> <div class="mt-3 text-right"> <button type="button" id="autoFillBtn" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm">\nAuto-Fill Form\n</button> </div> </div> <div class="bg-white rounded-xl shadow-sm border border-zinc-200 p-8"> <div class="flex justify-between items-center mb-8 pb-4 border-b border-zinc-100"> <h1 class="text-2xl font-bold text-zinc-900">Create / Edit Story</h1> <div class="flex gap-2"> <a href="/" class="text-sm font-medium text-zinc-500 hover:text-zinc-800 transition-colors">← Back Home</a> </div> </div> <form id="storyForm" class="space-y-8"> <!-- Metadata --> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div class="space-y-2"> <label class="block text-sm font-medium text-zinc-700">Story Slug (URL)</label> <input type="text" name="slug" required placeholder="e.g., ai-revolution-2026" class="w-full px-3 py-2 border border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"> </div> <div class="space-y-2"> <label class="block text-sm font-medium text-zinc-700">Affiliate Link (Global)</label> <input type="url" name="globalLink" placeholder="https://amazon.com/..." class="w-full px-3 py-2 border border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"> </div> </div> <div class="space-y-2"> <label class="block text-sm font-medium text-zinc-700">Story Title</label> <input type="text" name="title" required placeholder="Main Headline" class="w-full px-3 py-2 border border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"> </div> <div class="space-y-2"> <label class="block text-sm font-medium text-zinc-700">Cover Image URL</label> <input type="url" name="coverImage" required placeholder="https://images.unsplash.com/..." class="w-full px-3 py-2 border border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"> </div> <!-- Slides --> <div class="pt-8"> <div class="flex justify-between items-center mb-6"> <h3 class="text-lg font-semibold text-zinc-900">Story Slides</h3> <span id="slide-count-badge" class="bg-zinc-100 text-zinc-600 px-2 py-1 rounded-full text-xs font-medium">0 Slides</span> </div> <div id="slides-container" class="space-y-6"> <!-- Slides will be added here --> </div> <button type="button" id="addSlideBtn" class="w-full mt-6 py-3 border-2 border-dashed border-zinc-300 rounded-xl text-zinc-600 hover:border-zinc-400 hover:bg-zinc-50 hover:text-zinc-800 transition-all font-medium flex items-center justify-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path></svg>\nAdd New Slide\n</button> </div> <div class="pt-8 border-t border-zinc-100 sticky bottom-0 bg-white -mx-8 px-8 py-4 mt-8 flex flex-col md:flex-row gap-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]"> <button type="submit" class="flex-1 bg-zinc-900 hover:bg-black text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"> <span>💾</span> Save to Firestore\n</button> ', " </div> ", " </form> </div> </div> <!-- Pass Firestore config to client --> <script>(function(){", `
        window.FIREBASE_CONFIG = firebaseConfig;
    })();</script> <script type="module">
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
        import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

        // Global state to check if Firebase is ready
        let db = null;
        try {
            if (window.FIREBASE_CONFIG.apiKey) {
                const app = initializeApp(window.FIREBASE_CONFIG);
                db = getFirestore(app);
                console.log("Firebase initialized successfully");
            } else {
                console.warn("Firebase config is missing API key. Firestore features will be disabled.");
            }
        } catch (e) {
            console.error("Firebase init error:", e);
        }

        // Slide Template Function
        function createSlideHTML(id, data = {}) {
            return \\\`
                <div class="slide bg-zinc-50 border border-zinc-200 rounded-xl p-6 relative group transition-all hover:shadow-md" id="slide-\\\${id}">
                    <div class="flex justify-between items-start mb-4 pb-4 border-b border-zinc-200/60">
                        <div class="flex items-center gap-3">
                            <span class="slide-number-badge bg-white border border-zinc-200 text-zinc-500 w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold shadow-sm">
                                #
                            </span>
                            <h4 class="font-medium text-zinc-900">Slide Content</h4>
                        </div>
                        <button 
                            type="button" 
                            class="remove-slide-btn text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 p-2 rounded-lg transition-colors text-sm font-medium flex items-center gap-1"
                            data-id="\\\${id}"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>
                            Remove
                        </button>
                    </div>
                    <div class="space-y-4">
                        <div class="space-y-2">
                            <label class="block text-xs font-semibold uppercase tracking-wider text-zinc-500">Title</label>
                            <input type="text" name="slides[\\\${id}][title]" value="\\\${data.title || ''}" required class="w-full px-3 py-2 border border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white">
                        </div>
                        <div class="space-y-2">
                            <label class="block text-xs font-semibold uppercase tracking-wider text-zinc-500">Subtitle</label>
                            <input type="text" name="slides[\\\${id}][subtitle]" value="\\\${data.subtitle || ''}" class="w-full px-3 py-2 border border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white">
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="space-y-2">
                                <label class="block text-xs font-semibold uppercase tracking-wider text-zinc-500">Image URL</label>
                                <input type="url" name="slides[\\\${id}][imageUrl]" value="\\\${data.imageUrl || data.image || ''}" required class="w-full px-3 py-2 border border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white">
                            </div>
                            <div class="space-y-2">
                                <label class="block text-xs font-semibold uppercase tracking-wider text-zinc-500">CTA Text</label>
                                <input type="text" name="slides[\\\${id}][ctaText]" value="\\\${data.ctaText || ''}" placeholder="Optional" class="w-full px-3 py-2 border border-zinc-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white">
                            </div>
                        </div>
                    </div>
                </div>
            \\\`;
        }

        function updateBadge() {
            const slides = document.querySelectorAll('.slide');
            const badge = document.getElementById('slide-count-badge');
            if (badge) badge.innerText = \\\`\\\${slides.length} Slides\\\`;
            slides.forEach((slide, index) => {
                const badge = slide.querySelector('.slide-number-badge');
                if (badge) badge.innerText = index + 1;
            });
        }

        window.addSlide = (data = {}) => {
            const container = document.getElementById('slides-container');
            const uniqueId = Date.now() + Math.random().toString(36).substr(2, 9);
            const slideHtml = createSlideHTML(uniqueId, data);
            
            const div = document.createElement('div');
            div.innerHTML = slideHtml.trim();
            const slideEl = div.firstChild;
            
            container.appendChild(slideEl);
            
            // Attach delete listener
            slideEl.querySelector('.remove-slide-btn').addEventListener('click', (e) => {
                const id = e.currentTarget.getAttribute('data-id');
                document.getElementById(\\\`slide-\\\${id}\\\`).remove();
                updateBadge();
            });
            
            updateBadge();
        };

        // Event Listeners
        document.getElementById('addSlideBtn')?.addEventListener('click', () => window.addSlide());
        
        document.getElementById('autoFillBtn')?.addEventListener('click', () => {
            console.log("Auto-fill clicked");
            const jsonInput = document.getElementById('jsonInput');
            const jsonStr = jsonInput ? jsonInput.value : "";
            if (!jsonStr) {
                alert("Please paste JSON first");
                return;
            }

            try {
                let data = JSON.parse(jsonStr);
                // Handle array of stories or single story
                if (Array.isArray(data)) {
                    data = data[0]; 
                }

                console.log("Parsed data:", data);

                if (data.slug) document.querySelector('[name="slug"]').value = data.slug;
                if (data.title) document.querySelector('[name="title"]').value = data.title;
                if (data.coverImage) document.querySelector('[name="coverImage"]').value = data.coverImage;
                
                // Handle both ctaLinks.global and direct globalLink
                if (data.ctaLinks && data.ctaLinks.global) {
                    document.querySelector('[name="globalLink"]').value = data.ctaLinks.global;
                } else if (data.globalLink) {
                    document.querySelector('[name="globalLink"]').value = data.globalLink;
                }

                // Clear existing slides
                document.getElementById('slides-container').innerHTML = '';
                
                if (data.slides && Array.isArray(data.slides)) {
                    data.slides.forEach(slide => window.addSlide(slide));
                } else {
                    window.addSlide();
                }
                
                console.log("Form filled successfully");
            } catch (e) {
                console.error("JSON parse error:", e);
                alert("Error parsing JSON: " + e.message);
            }
        });

        // Initialize with one slide
        setTimeout(() => {
            if (document.querySelectorAll('.slide').length === 0) {
                window.addSlide();
            }
        }, 100);

        // Handle Save to Firestore
        document.getElementById('storyForm')?.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            if (!db) {
                alert("Firebase is not configured. Please check your .env file and console.");
                return;
            }

            const formData = new FormData(e.target);
            
            const slides = [];
            document.querySelectorAll('.slide').forEach((el) => {
                const title = el.querySelector('input[name*="[title]"]').value;
                const subtitle = el.querySelector('input[name*="[subtitle]"]').value;
                const imageUrl = el.querySelector('input[name*="[imageUrl]"]').value;
                const ctaText = el.querySelector('input[name*="[ctaText]"]').value;
                if (title && imageUrl) {
                    slides.push({ title, subtitle, imageUrl, ctaText });
                }
            });

            const storyData = {
                slug: formData.get('slug'),
                title: formData.get('title'),
                coverImage: formData.get('coverImage'),
                ctaLinks: { global: formData.get('globalLink') },
                slides,
                createdAt: serverTimestamp()
            };

            try {
                const btn = e.submitter;
                const originalText = btn.innerHTML;
                btn.innerHTML = 'Saving to Firestore...';
                btn.disabled = true;

                await addDoc(collection(db, "stories"), storyData);
                
                alert("Saved successfully to Cloud Firestore!");
                btn.innerHTML = originalText;
                btn.disabled = false;

            } catch (err) {
                console.error("Firestore save error:", err);
                alert("Error saving: " + err.message);
                e.submitter.innerHTML = 'Error';
                e.submitter.disabled = false;
            }
        });

        // Handle Redeploy (Vercel Hook)
        document.getElementById('redeployBtn')?.addEventListener('click', async (e) => {
            if (!confirm("This will trigger a full rebuild of your site to update the sitemap. Continue?")) return;

            const btn = e.currentTarget;
            const originalText = btn.innerHTML;
            btn.innerHTML = 'Triggering Rebuild...';
            btn.disabled = true;

            try {
                const res = await fetch('/api/redeploy', { method: 'POST' });
                const data = await res.json();

                if (res.ok) {
                    alert("🚀 Redeploy triggered! It will be live in ~2 minutes.");
                } else {
                    alert("❌ Error: " + (data.error || "Unknown error"));
                }
            } catch (err) {
                alert("❌ Connection error: " + err.message);
            } finally {
                btn.innerHTML = originalText;
                btn.disabled = false;
            }
        });
    </script> </body> </html>`])), renderHead(), renderTemplate`<button type="button" id="redeployBtn" class="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"> <span>🚀</span> Republish (Update Sitemap)
</button>`, false, defineScriptVars({ firebaseConfig }));
}, "/Users/darshandhameliya/Downloads/amp-stories-main/src/pages/admin.astro", void 0);
const $$file = "/Users/darshandhameliya/Downloads/amp-stories-main/src/pages/admin.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Admin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
