/* eslint-disable import/no-anonymous-default-export */
import prettier from 'eslint-plugin-prettier';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import cssModules from 'eslint-plugin-css-modules';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'prettier',
    'plugin:css-modules/recommended',
    'plugin:prettier/recommended',
  ),
  {
    plugins: {
      prettier,
      'css-modules': cssModules,
    },

    rules: {
      'prettier/prettier': [
        'warn',
        {
          singleQuote: true,
          jsxSingleQuote: true,
        },
      ],
      'css-modules/no-unused-class': 'warn',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
];
