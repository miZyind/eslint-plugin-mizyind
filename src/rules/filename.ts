import kebabCase from 'lodash.kebabcase';
import { basename, dirname, extname, resolve } from 'path';

import { ESLintUtils } from '@typescript-eslint/experimental-utils';

export default ESLintUtils.RuleCreator((name) => name)({
  name: 'filename',
  meta: {
    type: 'problem',
    docs: {
      category: 'Possible Errors',
      description: `Enforces files' naming conventions`,
      recommended: 'error',
    },
    messages: {
      doesNotMatchStandard: `Filename '{{original}}' should be '{{standard}}'`,
    },
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    const filenameWithPath = context.getFilename();
    const strictDirList = [
      { dir: 'entities', suffix: 'entity' },
      { dir: 'dtos', suffix: 'dto' },
      { dir: 'responses', suffix: 'response' },
    ];

    return {
      Program(node): void {
        const parentDir = basename(dirname(resolve(filenameWithPath)));
        const ext = extname(filenameWithPath);
        const original = basename(filenameWithPath);
        const filenameWithoutExt = basename(filenameWithPath, ext);
        const [prefix, suffix] = filenameWithoutExt.split('.') as [
          string,
          string | undefined,
        ];
        const standardPrefix = kebabCase(prefix);
        const isValidPrefix = prefix === standardPrefix;
        const hasSuffix = typeof suffix !== 'undefined';
        const standardSuffix = suffix?.toLowerCase() ?? '';
        const isValidSuffix =
          !hasSuffix ||
          (typeof suffix !== 'undefined' && suffix === suffix.toLowerCase());
        const matchedParentDir = strictDirList.find(
          ({ dir }) => dir === parentDir,
        );

        if (typeof matchedParentDir !== 'undefined') {
          const standardDirSuffix = matchedParentDir.suffix;
          const isValid =
            isValidPrefix && isValidSuffix && suffix === standardDirSuffix;

          if (!isValid) {
            return context.report({
              node,
              messageId: 'doesNotMatchStandard',
              data: {
                original,
                standard: `${standardPrefix}.${standardDirSuffix}${ext}`,
              },
            });
          }
        }

        if (isValidPrefix && !isValidSuffix) {
          return context.report({
            node,
            messageId: 'doesNotMatchStandard',
            data: {
              original,
              standard: `${standardPrefix}.${standardSuffix}${ext}`,
            },
          });
        }

        if (!isValidPrefix && hasSuffix) {
          return context.report({
            node,
            messageId: 'doesNotMatchStandard',
            data: {
              original,
              standard: `${standardPrefix}.${standardSuffix}${ext}`,
            },
          });
        }

        if (!isValidPrefix && !hasSuffix) {
          return context.report({
            node,
            messageId: 'doesNotMatchStandard',
            data: {
              original,
              standard: `${standardPrefix}${ext}`,
            },
          });
        }
      },
    };
  },
});
