import fs from 'node:fs/promises';
import nodePath from 'node:path';
import { Octokit } from '@octokit/rest';
export { renderers } from '../../renderers.mjs';

const GITHUB_TOKEN = undefined                            ;
const REPO_OWNER = undefined                          ;
const REPO_NAME = undefined                         ;
const FILE_PATH = "src/data/stories.json";
const localStoriesPath = nodePath.join(process.cwd(), "src/data/stories.json");
const POST = async ({ request }) => {
  try {
    const newStory = await request.json();
    if (false) ;
    if (!GITHUB_TOKEN || !REPO_OWNER || !REPO_NAME) {
      return new Response("Missing GitHub configuration in .env", {
        status: 500
      });
    }
    const octokit = new Octokit({ auth: GITHUB_TOKEN });
    let sha;
    let stories = [];
    try {
      const { data } = await octokit.repos.getContent({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        path: FILE_PATH
      });
      if ("content" in data && data.content) {
        const content = Buffer.from(data.content, "base64").toString("utf-8");
        stories = JSON.parse(content);
        sha = data.sha;
      }
    } catch (e) {
      console.log("File not found, creating new.");
    }
    if (stories.find((s) => s.slug === newStory.slug)) {
      return new Response("Slug already exists", { status: 400 });
    }
    stories.push(newStory);
    const newContent = Buffer.from(JSON.stringify(stories, null, 2)).toString(
      "base64"
    );
    await octokit.repos.createOrUpdateFileContents({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      path: FILE_PATH,
      message: `feat: add story "${newStory.title}" via Admin UI`,
      content: newContent,
      sha
      // Required if updating
    });
    return new Response(JSON.stringify({ success: true, mode: "github" }), {
      status: 200
    });
  } catch (error) {
    console.error("Error saving story:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
