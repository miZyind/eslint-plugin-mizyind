const rule = require('../lib/rules/filename');
const { RuleTester } = require('eslint');
const tester = new RuleTester();
const code = 'foo()';
const Message = {
  DoesNotMatchStandard: 'DoesNotMatchStandard',
  DoesNotMatchLanguageCode: 'DoesNotMatchLanguageCode',
};

tester.run('filename', rule, {
  valid: [
    { code, filename: 'foo.js' },
    { code, filename: 'foo.constant.js' },
    { code, filename: 'foo.error.js' },
    { code, filename: 'i18n.js' },
    { code, filename: 'e2e-test.js' },
    { code, filename: '/entites/foo.entity.js' },
    { code, filename: '/dtos/foo.dto.js' },
    { code, filename: '/guards/foo.guard.js' },
    { code, filename: '/responses/foo.response.js' },
    { code, filename: '/strategies/foo.strategy.js' },
    { code, filename: '/pages/_app.jsx' },
    { code, filename: '/pages/_document.jsx' },
    { code, filename: '/pages/user/[id].jsx' },
    { code, filename: '/pages/api/auth/[...nextauth].jsx' },
    { code, filename: '/i18n/en.js' },
    { code, filename: '/i18n/en-US.js' },
  ],
  invalid: [
    {
      code,
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
