import { getRequestContext } from "@cloudflare/next-on-pages";
import { NextRequest } from "next/server";

export const runtime = "edge";

async function handleRequest(request: NextRequest) {
  const context = getRequestContext();
  const env = context.env as CloudflareEnv;

  const url = new URL(request.url);
  const path = url.pathname.replace(/^\/api/, "");

  // Use the backend URL from environment
  const backendUrl = env.BACKEND_API_URL || "http://localhost:8787";
  const internalSecret = env.INTERNAL_SECRET;

  // Construct the target URL (keeping the /api prefix for the backend)
  const targetUrl = new URL(`${backendUrl}/api${path}${url.search}`);

  const internalHeaders = new Headers(request.headers);

  // Add the secret to bypass Cloudflare Access
  if (internalSecret) {
    internalHeaders.set("X-Internal-Secret", internalSecret);
  }

  // Remove the host header to avoid mismatches
  internalHeaders.delete("host");

  try {
    let response: Response;

    // Use Service Binding if available (bypasses Cloudflare Access)
    if (env.API && typeof env.API.fetch === "function") {
      console.log("Using Service Binding for internal request");
      response = await env.API.fetch(targetUrl.toString(), {
        method: request.method,
        headers: internalHeaders,
        body: request.body,
        // @ts-expect-error - duplex is required for streaming bodies in Edge Runtime
        duplex: "half",
      });
    } else {
      console.log("Using public fetch for request to:", targetUrl.toString());
      response = await fetch(targetUrl.toString(), {
        method: request.method,
        headers: internalHeaders,
        body: request.body,
        // @ts-expect-error - duplex is required for streaming bodies in Edge Runtime
        duplex: "half",
      });
    }

    // Create a new response to return to the client
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });
  } catch (error) {
    console.error("Proxy error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export const GET = handleRequest;
export const POST = handleRequest;
export const PUT = handleRequest;
export const DELETE = handleRequest;
export const PATCH = handleRequest;
export const OPTIONS = handleRequest;
