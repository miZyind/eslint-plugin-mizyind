export = {
  env: { 'react-native/react-native': true },
  extends: [
    './configs/base',
    './configs/react',
    'plugin:react-native/all',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/jsx-newline': ['error', { prevent: true }], // Override Prettier's default behavior
    'import/namespace': 'off', // Unnecessary for React Native
    'react-native/sort-styles': 'off', // Unnecessary, too strict
  },
};
