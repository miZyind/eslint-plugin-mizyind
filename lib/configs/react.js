module.exports = [
  ...require('./typescript'),
  ...new (require('@eslint/eslintrc').FlatCompat)().extends(
    'plugin:react/all',
    'plugin:prettier/recommended',
  ),
  {
    languageOptions: { globals: require('globals').browser },
    plugins: {
      'react-hooks': require('@eslint/compat').fixupPluginRules(
        require('eslint-plugin-react-hooks'),
      ),
      '@stylistic/jsx': require('@stylistic/eslint-plugin-jsx'),
    },
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
      'react/jsx-max-depth': ['error', { max: 6 }],
      'react/jsx-no-literals': 'off', // Unnecessary, too strict
      'react/jsx-props-no-spreading': 'off', // Unnecessary, too strict
      'react/jsx-sort-props': 'off', // Unnecessary, too strict
      'react/react-in-jsx-scope': 'off', // Unnecessary for React 17+
      'react/require-default-props': 'off', // Unnecessary for TypeScript
      'react/prefer-read-only-props': 'off', // Unnecessary for TypeScript
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      '@stylistic/jsx/jsx-newline': ['error', { prevent: true }], // Override Prettier's default behavior
    },
  },
];
