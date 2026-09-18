import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "**/*.js",
  ]),
  {
    rules: {
      // The app consumes locale dictionaries with intentionally dynamic shapes.
      "@typescript-eslint/no-explicit-any": "off",
      // Admin navigation includes full-page and external-style anchors by design.
      "@next/next/no-html-link-for-pages": "off",
      // Server-rendered date filtering is intentionally evaluated per request.
      "react-hooks/purity": "off",
      "react/no-unescaped-entities": "off",
    },
  },
]);

export default eslintConfig;
