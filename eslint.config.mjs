import js from '@eslint/js';
import globals from 'globals';
import markdown from '@eslint/markdown';
import frontmatterTitle from './eslint-local-rules/frontmatter-title.mjs';

export default [
  {
    ...js.configs.recommended,
    files: ['**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs'],
  },
  {
    files: ['**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.node,
    },
  },
  {
    files: ['**/*.jsx'],
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: globals.browser,
    },
  },
  {
    ignores: [
      'node_modules/',
      'out/',
      '.cache/',
      'webpack/',
      'examples/',
      'pages/api',
      'pages/docs/api',
      'pages/docs/loaders',
      'pages/docs/plugins',
      'pages/about/governance',
      'pages/404.md',
      'pages/index.md',
      'pages/blog/index.md',
      'pages/about/sponsors.md',
    ],
  },
  {
    files: ['pages/**/*.md'],
    plugins: {
      markdown,
      local: {
        rules: {
          'frontmatter-title': frontmatterTitle,
        },
      },
    },
    language: 'markdown/commonmark',
    rules: {
      'local/frontmatter-title': 'error',
    },
  },
];
