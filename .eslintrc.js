module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    project: "./tsconfig.json",
    sourceType: "module"
  },
  plugins: ["react", "prettier", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  rules: {}
};
