import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

/**
 * @see https://nextjs.org/docs/app/api-reference/config/eslint
 * @type {import('eslint').Linter.Config[]}
 */
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
