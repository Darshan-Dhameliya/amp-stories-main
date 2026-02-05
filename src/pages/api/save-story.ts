import type { APIRoute } from "astro";
import fs from "node:fs/promises";
import path from "node:path";
import { Octokit } from "@octokit/rest";

// Environment variables
const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN;
const REPO_OWNER = import.meta.env.REPO_OWNER;
const REPO_NAME = import.meta.env.REPO_NAME;
const FILE_PATH = "src/data/stories.json"; // Path in repo

const localStoriesPath = path.join(process.cwd(), "src/data/stories.json");

export const POST: APIRoute = async ({ request }) => {
  try {
    const newStory = await request.json();

    // ---------------------------------------------------------
    // STRATEGY 1: LOCAL DEVELOPMENT (File System)
    // ---------------------------------------------------------
    if (import.meta.env.DEV) {
      let stories = [];
      try {
        const fileContent = await fs.readFile(localStoriesPath, "utf-8");
        stories = JSON.parse(fileContent);
      } catch (e) {
        stories = [];
      }

      // Check duplicate
      if (stories.find((s: any) => s.slug === newStory.slug)) {
        return new Response("Slug already exists", { status: 400 });
      }

      stories.push(newStory);
      await fs.writeFile(localStoriesPath, JSON.stringify(stories, null, 2));

      return new Response(JSON.stringify({ success: true, mode: "local" }), {
        status: 200,
      });
    }

    // ---------------------------------------------------------
    // STRATEGY 2: PRODUCTION (GitHub API)
    // ---------------------------------------------------------
    if (!GITHUB_TOKEN || !REPO_OWNER || !REPO_NAME) {
      return new Response("Missing GitHub configuration in .env", {
        status: 500,
      });
    }

    const octokit = new Octokit({ auth: GITHUB_TOKEN });

    // 1. Get current file content (SHA is needed to update)
    let sha;
    let stories = [];

    try {
      const { data } = await octokit.repos.getContent({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        path: FILE_PATH,
      });

      if ("content" in data && data.content) {
        // Decode Base64
        const content = Buffer.from(data.content, "base64").toString("utf-8");
        stories = JSON.parse(content);
        sha = data.sha;
      }
    } catch (e) {
      console.log("File not found, creating new.");
    }

    // 2. Check duplicate
    if (stories.find((s: any) => s.slug === newStory.slug)) {
      return new Response("Slug already exists", { status: 400 });
    }

    // 3. Append and Encode
    stories.push(newStory);
    const newContent = Buffer.from(JSON.stringify(stories, null, 2)).toString(
      "base64",
    );

    // 4. Commit to GitHub
    await octokit.repos.createOrUpdateFileContents({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      path: FILE_PATH,
      message: `feat: add story "${newStory.title}" via Admin UI`,
      content: newContent,
      sha: sha, // Required if updating
    });

    return new Response(JSON.stringify({ success: true, mode: "github" }), {
      status: 200,
    });
  } catch (error: any) {
    console.error("Error saving story:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
};
