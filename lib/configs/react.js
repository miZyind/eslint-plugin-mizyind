const globals = require('globals').browser;
const typescript = require('./typescript');
const compat = new (require('@eslint/eslintrc').FlatCompat)();

module.exports = [
  ...typescript,
  ...compat.extends('plugin:react/all', 'plugin:react-hooks/recommended'),
  {
    languageOptions: { globals },
    settings: { react: { version: 'detect' } },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off', // Unnecessary for React
      '@typescript-eslint/no-empty-interface': [
        'error',
        { allowSingleExtends: true },
      ],
      'react/prop-types': 'off', // Unnecessary for TypeScript
      'react/forbid-component-props': 'off', // Unnecessary, too strict
      'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
      'react/jsx-max-depth': ['error', { max: 5 }],
      'react/jsx-newline': 'off', // @stylistic/jsx/jsx-newline
      'react/jsx-no-literals': 'off', // Unnecessary, too strict
      'react/jsx-props-no-spreading': 'off', // Unnecessary, too strict
      'react/jsx-sort-props': 'off', // Unnecessary, too strict
      'react/react-in-jsx-scope': 'off', // Unnecessary for React 17+
      'react/require-default-props': 'off', // Unnecessary for TypeScript
      'react/prefer-read-only-props': 'off', // Unnecessary for TypeScript
      'react-hooks/exhaustive-deps': 'error',
    },
  },
];
