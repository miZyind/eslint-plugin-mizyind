import prettier from 'eslint-plugin-prettier/recommended';

import { FlatCompat } from '@eslint/eslintrc';

import base from './base.js';
import react from './react.js';

export default [
  ...base,
  ...react,
  ...new FlatCompat().extends('plugin:react-native/all'),
  prettier,
  {
    rules: {
      'import-x/namespace': 'off', // Unnecessary for React Native
      'react-native/sort-styles': 'off', // Unnecessary, too strict
      '@stylistic/jsx-newline': ['error', { prevent: true }], // Override Prettier's default behavior
    },
  },
];
