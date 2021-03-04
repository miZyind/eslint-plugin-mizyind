export = {
  env: { node: true },
  parserOptions: {
    project: 'tsconfig.json',
  },
  plugins: ['mizyind'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/all',
    'plugin:prettier/recommended',
  ],
  rules: {
    /* Custom */
    'mizyind/filename': 'error',
    /* Possible Errors [https://eslint.org/docs/rules/#possible-errors] */
    'no-await-in-loop': 'error',
    'no-console': ['warn', { allow: ['error'] }],
    'no-template-curly-in-string': 'error',
    'require-atomic-updates': 'error',
    /* Best Practices [https://eslint.org/docs/rules/#best-practices] */
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    complexity: 'error',
    curly: 'error',
    'default-case': 'error',
    eqeqeq: 'error',
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    'guard-for-in': 'error',
    'no-constructor-return': 'error',
    'no-else-return': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'prefer-named-capture-group': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    radix: ['error', 'as-needed'],
    'require-unicode-regexp': 'error',
    'vars-on-top': 'error',
    'wrap-iife': 'error',
    yoda: 'error',
    /* Variables [https://eslint.org/docs/rules/#variables] */
    'no-undef-init': 'error',
    'no-undefined': 'error',
    /* Stylistic Issues [https://eslint.org/docs/rules/#stylistic-issues] */
    'capitalized-comments': 'error',
    'multiline-comment-style': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-lonely-if': 'error',
    'no-multi-assign': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-restricted-syntax': [
      'error',
      'WithStatement',
      'DoWhileStatement',
      "BinaryExpression[operator='in']",
    ],
    'no-unneeded-ternary': 'error',
    'one-var': ['error', 'never'],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['const', 'let'],
      },
      {
        blankLine: 'always',
        prev: ['const', 'let'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let'],
        next: ['const', 'let'],
      },
    ],
    'prefer-object-spread': 'error',
    'spaced-comment': ['error', 'always', { block: { balanced: true } }],
    /* ECMAScript 6 [https://eslint.org/docs/rules/#ecmascript-6] */
    'arrow-body-style': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'symbol-description': 'error',
    /* TypeScript Supported Rules */
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          String: {
            message: 'Use string instead',
            fixWith: 'string',
          },
          Boolean: {
            message: 'Use boolean instead',
            fixWith: 'boolean',
          },
          Number: {
            message: 'Use number instead',
            fixWith: 'number',
          },
          Symbol: {
            message: 'Use symbol instead',
            fixWith: 'symbol',
          },
          Object: {
            message:
              'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.',
          },
          '{}': {
            message: '`{}` actually means "any non-nullish value".',
          },
        },
        extendDefaults: false,
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { disallowTypeAnnotations: false },
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      { accessibility: 'no-public' },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-extraneous-class': [
      'error',
      { allowWithDecorator: true },
    ],
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: false },
    ],
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/promise-function-async': [
      'error',
      {
        checkArrowFunctions: false,
        checkFunctionDeclarations: true,
        checkFunctionExpressions: true,
        checkMethodDeclarations: true,
      },
    ],
    '@typescript-eslint/typedef': 'off',
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      { allowNumber: true, allowNullish: true },
    ],
    '@typescript-eslint/no-invalid-void-type': 'off',
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      {
        ignoreArrowShorthand: true,
      },
    ],
    /* TypeScript Extension Rules */
    '@typescript-eslint/no-magic-numbers': [
      'error',
      {
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
      },
    ],
    /* TypeScript Naming Convention */
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
        format: ['camelCase'],
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'parameter',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'property',
        format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'],
      },
      {
        selector: 'property',
        filter: '^__html$',
        format: null,
      },
      {
        selector: 'enumMember',
        format: ['PascalCase'],
      },
      {
        selector: 'class',
        format: ['PascalCase'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
      },
      {
        selector: 'enum',
        format: ['PascalCase'],
      },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
      },
    ],
  },
};
