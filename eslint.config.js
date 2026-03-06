const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/.expo/**', '**/.next/**'],
  },
  // Mobile
  ...compat.extends('eslint-config-expo', 'eslint-config-prettier').map((config) => ({
    ...config,
    files: ['mobile/**/*.{js,jsx,ts,tsx}'],
  })),
  // Web
  ...compat
    .extends('eslint-config-next/core-web-vitals', 'eslint-config-prettier')
    .map((config) => ({
      ...config,
      files: ['web/**/*.{js,jsx,ts,tsx}'],
    })),
  // Backend
  {
    files: ['backend/**/*.ts'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      prettier: require('eslint-plugin-prettier'),
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
];
