import baseConfig from "@repo/config/eslint";

export default [
  ...baseConfig,
  {
    ignores: ["**/dist/**", "**/node_modules/**", ".wrangler/**", ".turbo/**"],
  },
];
