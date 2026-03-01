import js from '@eslint/js';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    ignores: ['node_modules', 'lib', 'dist', 'storybook-static']
  },
  js.configs.recommended,
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      globals: globals.browser
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': hooksPlugin,
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      ...hooksPlugin.configs.recommended.rules,
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
];
