export = {
  env: { 'react-native/react-native': true },
  extends: [
    './configs/react',
    'plugin:react-native/all',
    'plugin:prettier/recommended',
  ],
  rules: {
    'import/namespace': 'off', // Unnecessary for React Native
    'react-native/sort-styles': 'off', // Unnecessary, too strict
  },
};
