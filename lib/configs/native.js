const base = require('./base');
const react = require('./react');
const compat = new (require('@eslint/eslintrc').FlatCompat)();

module.exports = [
  ...base,
  ...react,
  ...compat.extends('plugin:react-native/all', 'plugin:prettier/recommended'),
  {
    rules: {
      'import-x/namespace': 'off', // Unnecessary for React Native
      'react-native/sort-styles': 'off', // Unnecessary, too strict
      '@stylistic/jsx/jsx-newline': ['error', { prevent: true }], // Override Prettier's default behavior
    },
  },
];
