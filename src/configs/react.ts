export = {
  settings: {
    react: { version: 'detect' },
    'import/resolver': { node: {}, typescript: { alwaysTryTypes: true } },
  },
  extends: [
    './configs/base',
    'plugin:react/all',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off', // Unnecessary for React
    '@typescript-eslint/no-empty-interface': [
      'error',
      { allowSingleExtends: true },
    ],
    'react/forbid-component-props': 'off', // Unnecessary, too strict
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/jsx-max-depth': ['error', { max: 5 }],
    'react/jsx-newline': ['error', { prevent: true }],
    'react/jsx-no-literals': 'off', // Unnecessary, too strict
    'react/jsx-props-no-spreading': 'off', // Unnecessary, too strict
    'react/jsx-sort-props': 'off', // Unnecessary, too strict
    'react/react-in-jsx-scope': 'off', // Unnecessary for React 17+
    'react/require-default-props': 'off', // Unnecessary for TypeScript
    'react-hooks/exhaustive-deps': 'error',
  },
};
