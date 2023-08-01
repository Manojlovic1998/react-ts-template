module.exports = {
  root: true,
  // Run environments
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  // Parser Configuration
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  // Installed Plugins
  plugins: ["react-refresh", "@typescript-eslint"],
  // Code Expectations/rules
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },

  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    ".devcontainer",
    ".github",
    ".husky",
  ],
};
