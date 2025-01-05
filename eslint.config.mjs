import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";
import nextPlugin from "@next/eslint-plugin-next";

export default [
  {
    files: ["**/*.{ts,tsx}"],
  },
  {
    ignores: [
      // Dependencies
      "**/node_modules/",

      // Build outputs
      "**/.next/",
      "**/out/",
      "**/dist/",
      "**/build/",

      // Config file
      "next.config.js",
    ],
  },
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2022,
        ...globals.node,
      },
    },
  },
  eslint.configs.recommended,
  {
    plugins: {
      react: reactPlugin,
      "@next/next": nextPlugin,
      prettier: eslintPluginPrettier,
    },
  },
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
];
