import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
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
      // SERVER/CLIENT are compile-time defines from doc-kit, not real globals.
      globals: { ...globals.browser, SERVER: 'readonly', CLIENT: 'readonly' },
    },
  },
  {
    ignores: ['node_modules/', 'out/', '.cache/', 'webpack/', 'pages/api'],
  },
];
