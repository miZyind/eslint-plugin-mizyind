export = {
  env: { 'react-native/react-native': true },
  settings: {
    react: { version: 'detect' },
    'import/resolver': { node: {}, typescript: { alwaysTryTypes: true } },
  },
  extends: [
    './configs/base',
    'plugin:react/all',
    'plugin:react-hooks/recommended',
    'plugin:react-native/all',
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
    'react/jsx-max-depth': ['error', { max: 5 }],
    // Unnecessary for React Native
    'import/namespace': 'off',
    'react-native/sort-styles': 'off',
  },
};
