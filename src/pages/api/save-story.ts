import type { APIRoute } from "astro";
import fs from "node:fs/promises";
import path from "node:path";

const storiesPath = path.join(process.cwd(), "src/data/stories.json");

export const POST: APIRoute = async ({ request }) => {
  try {
    const newStory = await request.json();

    // Read existing stories
    let stories = [];
    try {
      const fileContent = await fs.readFile(storiesPath, "utf-8");
      stories = JSON.parse(fileContent);
    } catch (e) {
      // File might not exist yet, which is fine
      stories = [];
    }

    // Check if slug exists
    const exists = stories.find((s: any) => s.slug === newStory.slug);
    if (exists) {
      return new Response("Slug already exists", { status: 400 });
    }

    // Append new story
    stories.push(newStory);

    // Write back to file
    await fs.writeFile(storiesPath, JSON.stringify(stories, null, 2));

    return new Response(
      JSON.stringify({ success: true, slug: newStory.slug }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error("Error saving story:", error);
    return new Response(JSON.stringify({ error: "Failed to save story" }), {
      status: 500,
    });
  }
};
