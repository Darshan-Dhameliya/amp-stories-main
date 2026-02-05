import type { APIRoute } from "astro";

export const POST: APIRoute = async () => {
  const HOOK_URL = import.meta.env.VERCEL_DEPLOY_HOOK_URL;

  if (!HOOK_URL) {
    return new Response(
      JSON.stringify({
        error:
          "VERCEL_DEPLOY_HOOK_URL not configured in environment variables.",
      }),
      { status: 500 },
    );
  }

  try {
    const response = await fetch(HOOK_URL, {
      method: "POST",
    });

    if (response.ok) {
      return new Response(
        JSON.stringify({ success: true, message: "Redeploy triggered!" }),
        { status: 200 },
      );
    } else {
      const errorText = await response.text();
      return new Response(JSON.stringify({ error: errorText }), {
        status: 500,
      });
    }
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
};
