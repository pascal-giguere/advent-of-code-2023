module.exports = {
  root: true,
  ignorePatterns: ['**/node_modules', '.yarn'],
  env: {
    commonjs: true,
    es2020: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false }],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
        allowExpressions: true,
      },
    ],
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/no-namespace': 'warn',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-empty': 'warn',
    'no-duplicate-imports': 'error',
  },
};
