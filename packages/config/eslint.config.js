import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

export default tseslint.config(js.configs.recommended, ...tseslint.configs.recommended, {
  languageOptions: {
    globals: {
      process: 'readonly',
      console: 'readonly',
      fetch: 'readonly',
      crypto: 'readonly',
      Headers: 'readonly',
      Request: 'readonly',
      Response: 'readonly',
      URL: 'readonly',
      AbortController: 'readonly',
      AbortSignal: 'readonly',
      TextEncoder: 'readonly',
      TextDecoder: 'readonly',
      atob: 'readonly',
      btoa: 'readonly',
      structuredClone: 'readonly',
    },
  },
  plugins: {
    'unused-imports': unusedImports,
    import: importPlugin,
  },
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
});
