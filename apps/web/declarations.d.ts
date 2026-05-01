declare module "*.css";
declare module "daisyui";

interface CloudflareEnv {
  API: { fetch: typeof fetch };
  ENVIRONMENT: string;
  BACKEND_API_URL: string;
  INTERNAL_SECRET: string;
}
