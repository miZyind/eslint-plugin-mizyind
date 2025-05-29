import importX from 'eslint-plugin-import-x';
import prettier from 'eslint-plugin-prettier/recommended';
import { globalIgnores } from 'eslint/config';
import globals from 'globals';

import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';

export default [
  globalIgnores(['eslint.config.mjs']),
  eslint.configs.recommended,
  importX.flatConfigs.recommended,
  prettier,
  {
    languageOptions: { ecmaVersion: 'latest', globals: globals.node },
    plugins: { '@stylistic': stylistic },
    settings: { 'import-x/resolver': { node: true, typescript: true } },
    rules: {
      /* Custom */
      'mizyind/filename': 'error',
      /* Possible Problems [https://eslint.org/docs/rules/#possible-problems] */
      'array-callback-return': 'error',
      'no-await-in-loop': 'error',
      'no-constant-binary-expression': 'error', // Unnecessary for Typescript
      'no-constructor-return': 'error',
      'no-self-compare': 'error', // @typescript-eslint/no-unnecessary-condition
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
      'consistent-return': 'error', // Unnecessary for Typescript
      'consistent-this': 'error', // @typescript-eslint/no-this-alias
      curly: 'off', // Unnecessary for Prettier
      'default-case': 'error',
      'default-case-last': 'error', // @typescript-eslint/default-param-last
      'dot-notation': 'error', // @typescript-eslint/dot-notation
      eqeqeq: 'error',
      'func-name-matching': 'error',
      'func-names': 'error',
      'func-style': 'off', // Unnecessary, too strict
      'grouped-accessor-pairs': ['error', 'getBeforeSet'],
      'guard-for-in': 'error',
      'id-denylist': 'off', // Unnecessary, too strict
      'id-length': 'off', // Unnecessary, too strict
      'id-match': 'off', // @typescript-eslint/naming-convention
      'init-declarations': 'error', // @typescript-eslint/init-declarations
      'max-classes-per-file': 'off', // Unnecessary, too strict
      'max-depth': 'error',
      'max-lines': 'off', // Unnecessary, too strict
      'max-lines-per-function': 'off', // Unnecessary, too strict
      'max-nested-callbacks': 'error',
      'max-params': 'off', // Unnecessary, too strict
      'max-statements': 'off', // Unnecessary, too strict
      'multiline-comment-style': 'error',
      'new-cap': 'error', // @typescript-eslint/naming-convention
      'no-alert': 'error',
      'no-array-constructor': 'error',
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-confusing-arrow': 'off', // Unnecessary for Prettier
      'no-console': ['warn', { allow: ['error', 'time', 'timeEnd'] }],
      'no-continue': 'error',
      'no-div-regex': 'error',
      'no-else-return': 'error',
      'no-empty-function': 'error', // @typescript-eslint/no-empty-function
      'no-eq-null': 'error',
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-label': 'error',
      'no-floating-decimal': 'error',
      'no-implicit-coercion': 'error',
      'no-implicit-globals': 'error',
      'no-implied-eval': 'error', // @typescript-eslint/no-implied-eval
      'no-inline-comments': 'off', // Unnecessary, too strict
      'no-invalid-this': 'error', // @typescript-eslint/no-invalid-this
      'no-iterator': 'error',
      'no-label-var': 'error',
      'no-labels': 'error',
      'no-lone-blocks': 'error',
      'no-lonely-if': 'error',
      'no-loop-func': 'error',
      'no-magic-numbers': ['error', { enforceConst: true }], // @typescript-eslint/no-magic-numbers
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
      'no-return-await': 'error', // @typescript-eslint/return-await
      'no-script-url': 'error',
      'no-sequences': 'error',
      'no-shadow': 'error', // @typescript-eslint/no-shadow
      'no-ternary': 'off', // Unnecessary, too strict
      'no-throw-literal': 'error',
      'no-undef-init': 'error',
      'no-undefined': 'error',
      'no-underscore-dangle': 'off', // Unnecessary, too strict
      'no-unneeded-ternary': 'error',
      'no-useless-call': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-concat': 'error',
      'no-useless-constructor': 'error', // @typescript-eslint/no-useless-constructor
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
      'require-await': 'error', // @typescript-eslint/require-await
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
      /* ESLint Stylistic [https://eslint.style/packages/default] */
      '@stylistic/lines-between-class-members': 'error',
      '@stylistic/padding-line-between-statements': [
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
      /* Import Rules [https://github.com/import-js/eslint-plugin-import] */
      'import-x/no-named-as-default': 'off',
      'import-x/no-named-as-default-member': 'off',
      'import-x/no-amd': 'error',
      'import-x/no-dynamic-require': 'error',
      'import-x/no-self-import': 'error',
      'import-x/no-useless-path-segments': 'error',
      'import-x/no-webpack-loader-syntax': 'error',
    },
  },
];
