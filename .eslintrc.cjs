module.exports = {
  root: true,
  ignorePatterns: ["**/node_modules", ".yarn"],
  env: {
    commonjs: true,
    es2020: true,
    jest: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["import", "jest"],
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/explicit-function-return-type": [
      "warn",
      {
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
        allowExpressions: true,
      },
    ],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-namespace": "warn",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-use-before-define": ["error", { functions: false, classes: false }],
    "@typescript-eslint/no-var-requires": "warn",
    "no-duplicate-imports": "error",
    "no-empty": "warn",
  },
};
