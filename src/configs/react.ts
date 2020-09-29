export = {
  extends: './configs/recommended',
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-interface': [
      'error',
      { allowSingleExtends: true },
    ],
  },
};
