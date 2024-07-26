const base = require('./base');
const react = require('./react');
const compat = new (require('@eslint/eslintrc').FlatCompat)();

module.exports = [
  ...base,
  ...react,
  ...compat.extends(
    'plugin:@next/next/recommended',
    'plugin:prettier/recommended',
  ),
  {
    rules: {
      '@next/next/no-css-tags': 'error',
      '@next/next/no-sync-scripts': 'error',
      '@next/next/no-html-link-for-pages': 'error',
      '@next/next/no-img-element': 'error',
      '@next/next/no-head-element': 'error',
      '@next/next/no-unwanted-polyfillio': 'error',
      '@next/next/no-page-custom-font': 'error',
      '@next/next/no-title-in-document-head': 'error',
      '@next/next/google-font-display': 'error',
      '@next/next/google-font-preconnect': 'error',
      '@next/next/next-script-for-ga': 'error',
      '@next/next/no-document-import-in-page': 'error',
      '@next/next/no-head-import-in-document': 'error',
      '@next/next/no-script-component-in-head': 'error',
      '@next/next/no-typos': 'error',
      '@next/next/no-duplicate-head': 'error',
      '@next/next/inline-script-id': 'error',
      '@next/next/no-before-interactive-script-outside-document': 'error',
      '@next/next/no-assign-module-variable': 'error',
      '@stylistic/jsx/jsx-newline': ['error', { prevent: true }], // Override Prettier's default behavior
    },
  },
];
