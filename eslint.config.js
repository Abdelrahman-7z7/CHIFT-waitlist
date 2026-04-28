import baseConfig from "./packages/config/eslint.config.js";

export default [
  ...baseConfig,
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.turbo/**",
      "**/.next/**",
      "**/.wrangler/**",
      "**/out/**",
      "**/public/**",
      "apps/docs/.astro/**",
      "apps/docs/src/env.d.ts",
    ],
  },
];
