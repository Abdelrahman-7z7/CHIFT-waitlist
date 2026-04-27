import baseConfig from "./packages/config/eslint.config.js";

export default [
  ...baseConfig,
  {
    ignores: ["node_modules/**", "dist/**", ".turbo/**"],
  },
];
