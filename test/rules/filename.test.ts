import { ESLintUtils } from '@typescript-eslint/experimental-utils';

import rule, { Message } from '../../src/rules/filename';

const tester = new ESLintUtils.RuleTester({
  parser: '@typescript-eslint/parser',
});

const code = 'foo()';

tester.run('filename', rule, {
  valid: [
    { code, filename: 'foo.js' },
    { code, filename: 'foo.constant.js' },
    { code, filename: 'foo.error.js' },
    { code, filename: '/entites/foo.entity.js' },
    { code, filename: '/dtos/foo.dto.js' },
    { code, filename: '/guards/foo.guard.js' },
    { code, filename: '/responses/foo.response.js' },
    { code, filename: '/strategies/foo.strategy.js' },
    { code, filename: '/pages/_app.jsx' },
    { code, filename: '/pages/_document.jsx' },
    { code, filename: '/configs/e2e-test.js' },
    { code, filename: '/configs/e2e-e2e-test.js' },
  ],
  invalid: [
    {
      code,
      filename: 'fooBar.js',
      errors: [
        {
          messageId: Message.DoesNotMatchStandard,
          data: { original: 'fooBar.js', standard: 'foo-bar.js' },
        },
      ],
    },
    {
      code,
      filename: 'fooBar.constant.js',
      errors: [
        {
          messageId: Message.DoesNotMatchStandard,
          data: {
            original: 'fooBar.constant.js',
            standard: 'foo-bar.constant.js',
          },
        },
      ],
    },
    {
      code,
      filename: 'fooBar.error.js',
      errors: [
        {
          messageId: Message.DoesNotMatchStandard,
          data: { original: 'fooBar.error.js', standard: 'foo-bar.error.js' },
        },
      ],
    },
    {
      code,
      filename: '/entities/foo.js',
      errors: [
        {
          messageId: Message.DoesNotMatchStandard,
          data: { original: 'foo.js', standard: 'foo.entity.js' },
        },
      ],
    },
    {
      code,
      filename: '/dtos/foo.js',
      errors: [
        {
          messageId: Message.DoesNotMatchStandard,
          data: { original: 'foo.js', standard: 'foo.dto.js' },
        },
      ],
    },
    {
      code,
      filename: '/guards/foo.js',
      errors: [
        {
          messageId: Message.DoesNotMatchStandard,
          data: { original: 'foo.js', standard: 'foo.guard.js' },
        },
      ],
    },
    {
      code,
      filename: '/responses/foo.js',
      errors: [
        {
          messageId: Message.DoesNotMatchStandard,
          data: { original: 'foo.js', standard: 'foo.response.js' },
        },
      ],
    },
    {
      code,
      filename: '/strategies/foo.js',
      errors: [
        {
          messageId: Message.DoesNotMatchStandard,
          data: { original: 'foo.js', standard: 'foo.strategy.js' },
        },
      ],
    },
    {
      code,
      filename: '/components/_app.jsx',
      errors: [
        {
          messageId: Message.DoesNotMatchStandard,
          data: { original: '_app.jsx', standard: 'app.jsx' },
        },
      ],
    },
    {
      code,
      filename: '/components/_document.jsx',
      errors: [
        {
          messageId: Message.DoesNotMatchStandard,
          data: { original: '_document.jsx', standard: 'document.jsx' },
        },
      ],
    },
  ],
});
