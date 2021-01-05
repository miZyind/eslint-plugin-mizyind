export = {
  settings: { react: { version: 'detect' } },
  extends: [
    './configs/base',
    'plugin:react/all',
    'prettier/react',
    'plugin:react-hooks/recommended',
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
    'react/require-optimization': 'off',
    'react/forbid-component-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    // Unnecessary after React 16.14
    'react/react-in-jsx-scope': 'off',
    // Unnecessary while using TypeScript
    'react/require-default-props': 'off',
    // Verify the list of the dependencies for Hooks like useEffect and similar
    'react-hooks/exhaustive-deps': 'error',
  },
};
