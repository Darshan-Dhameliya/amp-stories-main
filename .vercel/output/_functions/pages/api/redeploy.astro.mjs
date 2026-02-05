export { renderers } from '../../renderers.mjs';

const POST = async () => {
  const HOOK_URL = "https://api.vercel.com/v1/integrations/deploy/prj_Y9PBUCaOqLozzKYCVGgAQeqhW9ie/oZEQ4Z0Wi8";
  try {
    const response = await fetch(HOOK_URL, {
      method: "POST"
    });
    if (response.ok) {
      return new Response(
        JSON.stringify({ success: true, message: "Redeploy triggered!" }),
        { status: 200 }
      );
    } else {
      const errorText = await response.text();
      return new Response(JSON.stringify({ error: errorText }), {
        status: 500
      });
    }
  } catch (error) {
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
