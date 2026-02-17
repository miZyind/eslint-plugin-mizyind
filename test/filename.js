import { RuleTester } from 'eslint';
import test from 'node:test';

import rule from '../lib/rules/filename.js';

RuleTester.it = test.it;
RuleTester.itOnly = test.it.only;
RuleTester.afterAll = test.after;
RuleTester.describe = test.describe;

const tester = new RuleTester();
const code = 'foo()';
const Message = {
  DoesNotMatchStandard: 'DoesNotMatchStandard',
  DoesNotMatchLanguageCode: 'DoesNotMatchLanguageCode',
};
const filenames = [
  'foo.js',
  'foo.constant.js',
  'foo.error.js',
  'i18n.js',
  'e2e-test.js',
  '/entites/foo.entity.js',
  '/dtos/foo.dto.js',
  '/guards/foo.guard.js',
  '/responses/foo.response.js',
  '/strategies/foo.strategy.js',
  '/pages/_app.jsx',
  '/pages/_document.jsx',
  '/pages/user/[id].jsx',
  '/pages/api/auth/[...nextauth].jsx',
  '/i18n/en.js',
  '/i18n/en-US.js',
];

tester.run('filename', rule, {
  valid: filenames.map((v) => ({ code, name: v, filename: v })),
  invalid: [
    {
      code,
      name: 'fooBar.js',
      filename: 'fooBar.js',
      errors: [
        {
          messageId: Message.DoesNotMatchStandard,
          data: { filename: 'fooBar.js', standard: 'foo-bar.js' },
        },
      ],
    },
    {
      code,
      name: 'fooBar.constant.js',
      filename: 'fooBar.constant.js',
      errors: [
        {
          messageId: Message.DoesNotMatchStandard,
          data: {
            filename: 'fooBar.constant.js',
            standard: 'foo-bar.constant.js',
          },
        },
      ],
    },
    {
      code,
      name: 'fooBar.error.js',
      filename: 'fooBar.error.js',
      errors: [
        {
          messageId: Message.DoesNotMatchStandard,
          data: { filename: 'fooBar.error.js', standard: 'foo-bar.error.js' },
        },
      ],
    },
    {
      code,
      name: '/entities/foo.js',
      filename: '/entities/foo.js',
      errors: [
        {
          messageId: Message.DoesNotMatchStandard,
          data: { filename: 'foo.js', standard: 'foo.entity.js' },
        },
      ],
    },
    {
      code,
      name: '/dtos/foo.js',
      filename: '/dtos/foo.js',
      errors: [
        {
          messageId: Message.DoesNotMatchStandard,
          data: { filename: 'foo.js', standard: 'foo.dto.js' },
        },
      ],
    },
    {
      code,
      name: '/guards/foo.js',
      filename: '/guards/foo.js',
      errors: [
        {
          messageId: Message.DoesNotMatchStandard,
          data: { filename: 'foo.js', standard: 'foo.guard.js' },
        },
      ],
    },
    {
      code,
      name: '/responses/foo.js',
      filename: '/responses/foo.js',
      errors: [
        {
          messageId: Message.DoesNotMatchStandard,
          data: { filename: 'foo.js', standard: 'foo.response.js' },
        },
      ],
    },
    {
      code,
      name: '/strategies/foo.js',
      filename: '/strategies/foo.js',
      errors: [
        {
          messageId: Message.DoesNotMatchStandard,
          data: { filename: 'foo.js', standard: 'foo.strategy.js' },
        },
      ],
    },
    {
      code,
      name: '/components/_app.jsx',
      filename: '/components/_app.jsx',
      errors: [
        {
          messageId: Message.DoesNotMatchStandard,
          data: { filename: '_app.jsx', standard: 'app.jsx' },
        },
      ],
    },
    {
      code,
      name: '/components/_document.jsx',
      filename: '/components/_document.jsx',
      errors: [
        {
          messageId: Message.DoesNotMatchStandard,
          data: { filename: '_document.jsx', standard: 'document.jsx' },
        },
      ],
    },
    {
      code,
      name: '/i18n/en-us.js',
      filename: '/i18n/en-us.js',
      errors: [
        {
          messageId: Message.DoesNotMatchLanguageCode,
          data: { filename: 'en-us' },
        },
      ],
    },
  ],
});
