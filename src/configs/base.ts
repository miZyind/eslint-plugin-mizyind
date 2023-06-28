const custom = { regex: 'Id$', match: false };

export = {
  env: { node: true },
  settings: {
    'import/resolver': { node: {}, typescript: { alwaysTryTypes: true } },
  },
  parserOptions: { project: 'tsconfig.json' },
  plugins: ['mizyind'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/all',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  rules: {
    /* Custom */
    'mizyind/filename': 'error',
    /* Possible Problems [https://eslint.org/docs/rules/#possible-problems] */
    'array-callback-return': 'error',
    'no-await-in-loop': 'error',
    'no-constant-binary-expression': 'off', // Unnecessary for Typescript
    'no-constructor-return': 'error',
    'no-self-compare': 'off', // @typescript-eslint/no-unnecessary-condition
    'no-template-curly-in-string': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable-loop': 'error',
    'require-atomic-updates': 'error',
    /* Suggestions [https://eslint.org/docs/rules/#suggestions] */
    'accessor-pairs': 'error',
    'arrow-body-style': 'error',
    'block-scoped-var': 'error',
    'capitalized-comments': 'error',
    'class-methods-use-this': 'off', // Unnecessary, too strict
    complexity: 'error',
    'consistent-return': 'off', // Unnecessary for Typescript
    'consistent-this': 'off', // @typescript-eslint/no-this-alias
    curly: 'off', // Unnecessary for Prettier
    'default-case': 'error',
    'default-case-last': 'off', // @typescript-eslint/default-param-last
    'dot-notation': 'off', // @typescript-eslint/dot-notation
    eqeqeq: 'error',
    'func-name-matching': 'error',
    'func-names': 'error', // Unnecessary, too strict
    'func-style': 'off', // Unnecessary, too strict
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    'guard-for-in': 'error',
    'id-denylist': 'off', // Unnecessary, too strict
    'id-length': 'off', // Unnecessary, too strict
    'id-match': 'off', // @typescript-eslint/naming-convention
    'init-declarations': 'off', // @typescript-eslint/init-declarations
    'max-classes-per-file': 'off', // Unnecessary, too strict
    'max-depth': 'error',
    'max-lines': 'off', // Unnecessary, too strict
    'max-lines-per-function': 'off', // Unnecessary, too strict
    'max-nested-callbacks': 'error',
    'max-params': 'off', // Unnecessary, too strict
    'max-statements': 'off', // Unnecessary, too strict
    'multiline-comment-style': 'error',
    'new-cap': 'off', // @typescript-eslint/naming-convention
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-confusing-arrow': 'off', // Unnecessary for Prettier
    'no-console': ['warn', { allow: ['error', 'time', 'timeEnd'] }],
    'no-continue': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'off', // @typescript-eslint/no-empty-function
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'off', // @typescript-eslint/no-implied-eval
    'no-inline-comments': 'off', // Unnecessary, too strict
    'no-invalid-this': 'off', // @typescript-eslint/no-invalid-this
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off', // @typescript-eslint/no-magic-numbers
    'no-mixed-operators': 'off', // Unnecessary for Prettier
    'no-multi-assign': 'error',
    'no-multi-str': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-plusplus': 'off', // Unnecessary, too strict
    'no-proto': 'error',
    'no-restricted-exports': 'off', // Unnecessary, too strict
    'no-restricted-globals': 'off', // Unnecessary, too strict
    'no-restricted-imports': 'off', // Unnecessary, too strict
    'no-restricted-properties': 'off', // Unnecessary, too strict
    'no-restricted-syntax': [
      'error',
      'WithStatement',
      'DoWhileStatement',
      "BinaryExpression[operator='in']",
    ],
    'no-return-assign': 'error',
    'no-return-await': 'off', // @typescript-eslint/return-await
    'no-script-url': 'error',
    'no-sequences': 'error',
    'no-shadow': 'off', // @typescript-eslint/no-shadow
    'no-ternary': 'off', // Unnecessary, too strict
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-underscore-dangle': 'off', // Unnecessary, too strict
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'off', // Unnecessary, too strict
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'off', // @typescript-eslint/no-useless-constructor
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': ['error', { allowAsStatement: true }],
    'no-warning-comments': 'off', // Unnecessary, too strict
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': 'off', // Unnecessary for Prettier
    'operator-assignment': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'prefer-exponentiation-operator': 'error',
    'prefer-named-capture-group': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-object-has-own': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': 'off', // Unnecessary for Prettier
    radix: ['error', 'as-needed'],
    'require-await': 'off', // @typescript-eslint/require-await
    'require-unicode-regexp': 'error',
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'sort-keys': 'off', // Unnecessary, too strict
    'sort-vars': 'off', // Unnecessary, too strict
    'spaced-comment': ['error', 'always', { block: { balanced: true } }],
    strict: 'off', // Unnecessary for TypeScript
    'symbol-description': 'error',
    'vars-on-top': 'error',
    yoda: 'error',
    /* Layout & Formatting [https://eslint.org/docs/rules/#layout-formatting] */
    'array-bracket-newline': 'off', // Unnecessary for Prettier
    'array-bracket-spacing': 'off', // Unnecessary for Prettier
    'array-element-newline': 'off', // Unnecessary for Prettier
    'arrow-parens': 'off', // Unnecessary for Prettier
    'arrow-spacing': 'off', // Unnecessary for Prettier
    'block-spacing': 'off', // Unnecessary for Prettier
    'brace-style': 'off', // Unnecessary for Prettier
    'comma-dangle': 'off', // Unnecessary for Prettier
    'comma-spacing': 'off', // Unnecessary for Prettier
    'comma-style': 'off', // Unnecessary for Prettier
    'computed-property-spacing': 'off', // Unnecessary for Prettier
    'dot-location': 'off', // Unnecessary for Prettier
    'eol-last': 'off', // Unnecessary for Prettier
    'func-call-spacing': 'off', // Unnecessary for Prettier
    'function-call-argument-newline': 'off', // Unnecessary for Prettier
    'function-paren-newline': 'off', // Unnecessary for Prettier
    'generator-star-spacing': 'off', // Unnecessary for Prettier
    'implicit-arrow-linebreak': 'off', // Unnecessary for Prettier
    indent: 'off', // Unnecessary for Prettier
    'jsx-quotes': 'off', // Unnecessary for Prettier
    'key-spacing': 'off', // Unnecessary for Prettier
    'keyword-spacing': 'off', // Unnecessary for Prettier
    'line-comment-position': 'off', // Unnecessary, too strict
    'linebreak-style': 'off', // Unnecessary for Prettier
    'lines-around-comment': 'off', // Unnecessary for Prettier
    'lines-between-class-members': 'off', // @typescript-eslint/lines-between-class-members
    'max-len': 'off', // Unnecessary for Prettier
    'max-statements-per-line': 'off', // Unnecessary, too strict
    'multiline-ternary': 'off', // Unnecessary for Prettier
    'new-parens': 'off', // Unnecessary for Prettier
    'newline-per-chained-call': 'off', // Unnecessary for Prettier
    'no-extra-parens': 'off', // Unnecessary for Prettier
    'no-multi-spaces': 'off', // Unnecessary for Prettier
    'no-multiple-empty-lines': 'off', // Unnecessary for Prettier
    'no-tabs': 'off', // Unnecessary for Prettier
    'no-trailing-spaces': 'off', // Unnecessary for Prettier
    'no-whitespace-before-property': 'off', // Unnecessary for Prettier
    'nonblock-statement-body-position': 'off', // Unnecessary for Prettier
    'object-curly-newline': 'off', // Unnecessary for Prettier
    'object-curly-spacing': 'off', // Unnecessary for Prettier
    'object-property-newline': 'off', // Unnecessary for Prettier
    'operator-linebreak': 'off', // Unnecessary for Prettier
    'padded-blocks': 'off', // Unnecessary for Prettier
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'class',
      },
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
    quotes: 'off', // Unnecessary for Prettier
    'rest-spread-spacing': 'off', // Unnecessary for Prettier
    semi: 'off', // Unnecessary for Prettier
    'semi-spacing': 'off', // Unnecessary for Prettier
    'semi-style': 'off', // Unnecessary for Prettier
    'space-before-blocks': 'off', // Unnecessary for Prettier
    'space-before-function-paren': 'off', // Unnecessary for Prettier
    'space-in-parens': 'off', // Unnecessary for Prettier
    'space-infix-ops': 'off', // Unnecessary for Prettier
    'space-unary-ops': 'off', // Unnecessary for Prettier
    'switch-colon-spacing': 'off', // Unnecessary for Prettier
    'template-curly-spacing': 'off', // Unnecessary for Prettier
    'template-tag-spacing': 'off', // Unnecessary for Prettier
    'unicode-bom': 'off', // Unnecessary for Prettier
    'wrap-iife': 'off', // Unnecessary for Prettier
    'wrap-regex': 'off', // Unnecessary for Prettier
    'yield-star-spacing': 'off', // Unnecessary for Prettier
    /* Import Rules [https://github.com/import-js/eslint-plugin-import] */
    'import/no-named-as-default': 'off',
    /* TypeScript Supported Rules [https://typescript-eslint.io/rules/#supported-rules] */
    '@typescript-eslint/ban-types': [
      'error',
      { types: { Function: false }, extendDefaults: true },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { disallowTypeAnnotations: false },
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      { accessibility: 'no-public' },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off', // @typescript-eslint/explicit-function-return-type
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      { exceptAfterOverload: true },
    ],
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
        custom,
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
        custom,
      },
      {
        selector: 'parameter',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
        custom,
      },
      {
        selector: 'property',
        format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'],
        custom,
      },
      {
        selector: 'property',
        filter: '^(__html|x-forwarded-for|cognito:groups)$',
        format: null,
      },
      {
        selector: 'objectLiteralProperty',
        format: null,
      },
      {
        selector: 'enumMember',
        format: ['PascalCase'],
        custom,
      },
      {
        selector: 'class',
        format: ['PascalCase'],
        custom,
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom,
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
        custom,
      },
      {
        selector: 'enum',
        format: ['PascalCase'],
        custom,
      },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        custom,
      },
    ],
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      { ignoreArrowShorthand: true },
    ],
    '@typescript-eslint/no-extraneous-class': [
      'error',
      { allowWithDecorator: true },
    ],
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: false },
    ],
    '@typescript-eslint/no-type-alias': 'off', // Unnecessary, it causes unreadable and impractical
    '@typescript-eslint/no-unsafe-call': 'off', // Unnecessary, third party library compatibility
    '@typescript-eslint/no-invalid-void-type': 'off', // Conflict with @typescript-eslint/no-misused-promises
    '@typescript-eslint/no-magic-numbers': [
      'error',
      {
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
      },
    ],
    '@typescript-eslint/no-redeclare': [
      'error',
      { ignoreDeclarationMerge: true },
    ],
    '@typescript-eslint/non-nullable-type-assertion-style': 'off', // Unnecessary for stricter TypeScript compiler options
    '@typescript-eslint/parameter-properties': [
      'error',
      { prefer: 'parameter-property' },
    ],
    '@typescript-eslint/prefer-readonly-parameter-types': 'off', // Unnecessary, too strict
    '@typescript-eslint/promise-function-async': [
      'error',
      {
        checkArrowFunctions: false,
        checkFunctionDeclarations: true,
        checkFunctionExpressions: true,
        checkMethodDeclarations: true,
      },
    ],
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      { allowNumber: true, allowNullish: true },
    ],
    '@typescript-eslint/typedef': 'off', // Unnecessary for stricter TypeScript compiler options
    '@typescript-eslint/no-unsafe-enum-comparison': 'off', // Unnecessary for stricter TypeScript compiler options
  },
};
