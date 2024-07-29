const base = require('./base');
const tslint = require('typescript-eslint');
const parser = require('@typescript-eslint/parser');
const stylisticTS = require('@stylistic/eslint-plugin-ts');
const compat = new (require('@eslint/eslintrc').FlatCompat)();
const custom = { regex: 'Id$', match: false };

module.exports = [
  ...base,
  ...tslint.configs.all,
  ...compat.extends(
    'plugin:import-x/typescript',
    'plugin:prettier/recommended',
  ),
  {
    ignores: ['eslint.config.js'],
    languageOptions: {
      parser,
      parserOptions: { project: 'tsconfig.json' },
    },
    plugins: { '@stylistic/ts': stylisticTS },
    settings: { 'import-x/resolver': { node: true, typescript: true } },
    rules: {
      /* Possible Problems [https://eslint.org/docs/rules/#possible-problems] */
      'no-constant-binary-expression': 'off', // Unnecessary for Typescript
      'no-self-compare': 'off', // @typescript-eslint/no-unnecessary-condition
      /* Suggestions [https://eslint.org/docs/rules/#suggestions] */
      'consistent-return': 'off', // Unnecessary for Typescript
      'consistent-this': 'off', // @typescript-eslint/no-this-alias
      'default-case-last': 'off', // @typescript-eslint/default-param-last
      'dot-notation': 'off', // @typescript-eslint/dot-notation
      'id-match': 'off', // @typescript-eslint/naming-convention
      'init-declarations': 'off', // @typescript-eslint/init-declarations
      'new-cap': 'off', // @typescript-eslint/naming-convention
      'no-empty-function': 'off', // @typescript-eslint/no-empty-function
      'no-implied-eval': 'off', // @typescript-eslint/no-implied-eval
      'no-invalid-this': 'off', // @typescript-eslint/no-invalid-this
      'no-magic-numbers': 'off', // @typescript-eslint/no-magic-numbers
      'no-return-await': 'off', // @typescript-eslint/return-await
      'no-shadow': 'off', // @typescript-eslint/no-shadow
      'no-useless-constructor': 'off', // @typescript-eslint/no-useless-constructor
      'require-await': 'off', // @typescript-eslint/require-await
      strict: 'off', // Unnecessary for TypeScript
      /* ESLint Stylistic [https://eslint.style/packages/default] */
      '@stylistic/ts/lines-between-class-members': 'error',
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
      '@typescript-eslint/lines-between-class-members': 'off', // @stylistic/ts/lines-between-class-members
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
        {
          selector: 'import',
          format: ['PascalCase', 'camelCase'],
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
      '@typescript-eslint/no-unnecessary-type-parameters': 'off', // Unnecessary, too strict
      '@typescript-eslint/no-unsafe-enum-comparison': 'off', // Unnecessary for stricter TypeScript compiler options
      '@typescript-eslint/class-methods-use-this': 'off', // Unnecessary, too strict
      '@typescript-eslint/max-params': 'off', // Unnecessary, too strict
      '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off', // Unnecessary, too strict
      '@typescript-eslint/require-array-sort-compare': 'off', // Unnecessary, too strict
      '@typescript-eslint/consistent-return': 'off', // Unnecessary, too strict
      '@typescript-eslint/no-empty-object-type': [
        'error',
        { allowInterfaces: 'with-single-extends' },
      ],
    },
  },
];
