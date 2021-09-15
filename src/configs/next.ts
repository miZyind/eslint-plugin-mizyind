export = {
  env: { node: true, browser: true },
  settings: {
    react: { version: 'detect' },
    'import/resolver': { node: {}, typescript: { alwaysTryTypes: true } },
  },
  extends: [
    './configs/base',
    'plugin:react/all',
    'plugin:react-hooks/recommended',
    'plugin:@next/next/core-web-vitals',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-interface': [
      'error',
      { allowSingleExtends: true },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    // Unnecessary
    'react/sort-comp': 'off',
    'react/jsx-newline': 'off',
    'react/jsx-sort-props': 'off',
    'react/jsx-no-literals': 'off',
    'react/require-optimization': 'off',
    'react/forbid-component-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    // Unnecessary after React 16.14
    'react/react-in-jsx-scope': 'off',
    // Unnecessary while using TypeScript
    'react/require-default-props': 'off',
    // Verify the list of the dependencies for Hooks like useEffect and similar
    'react-hooks/exhaustive-deps': 'error',
    // Context API supports
    'react/jsx-max-depth': ['error', { max: 3 }],
    // NextJS strict mode
    '@next/next/no-css-tags': 'error',
    '@next/next/no-sync-scripts': 'error',
    '@next/next/no-html-link-for-pages': 'error',
    '@next/next/no-img-element': 'error',
    '@next/next/no-unwanted-polyfillio': 'error',
    '@next/next/no-page-custom-font': 'error',
    '@next/next/no-title-in-document-head': 'error',
    '@next/next/google-font-display': 'error',
    '@next/next/google-font-preconnect': 'error',
    '@next/next/link-passhref': 'error',
    '@next/next/next-script-for-ga': 'error',
    '@next/next/no-typos': 'error',
  },
};
