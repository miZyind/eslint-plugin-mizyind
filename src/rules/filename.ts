import kebabCase from 'lodash.kebabcase';
import { basename, dirname, extname, resolve } from 'path';

import { createRule } from '../utils/create-rule';
import { hasValue } from '../utils/type-guard';

export const enum Message {
  DoesNotMatchStandard = 'DoesNotMatchStandard',
}

export default createRule({
  name: 'filename',
  meta: {
    type: 'problem',
    docs: {
      category: 'Possible Errors',
      description: `Enforces files' naming conventions`,
      recommended: 'error',
    },
    messages: {
      [Message.DoesNotMatchStandard]: `Filename '{{original}}' should be '{{standard}}'`,
    },
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    const filenameWithPath = context.getFilename();
    const specialDirList = [
      // NextJS
      { name: 'pages', whitelist: ['_app', '_document'] },
      // NestJS
      { name: 'entities', suffix: 'entity' },
      { name: 'dtos', suffix: 'dto' },
      { name: 'responses', suffix: 'response' },
    ];

    return {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Program(node): void {
        const dirName = basename(dirname(resolve(filenameWithPath)));
        const ext = extname(filenameWithPath);
        const original = basename(filenameWithPath);
        const [prefix, suffix] = basename(filenameWithPath, ext).split('.') as [
          string,
          string | undefined,
        ];
        const standardPrefix = kebabCase(prefix);
        const isValidPrefix = prefix === standardPrefix;
        const hasSuffix = hasValue(suffix);
        const standardSuffix = suffix?.toLowerCase() ?? '';
        const isValidSuffix =
          typeof suffix === 'undefined' || suffix === suffix.toLowerCase();
        const specialDir = specialDirList.find(({ name }) => name === dirName);

        if (hasValue(specialDir)) {
          if (
            hasValue(specialDir.whitelist) &&
            specialDir.whitelist.includes(prefix)
          ) {
            return;
          }

          if (hasValue(specialDir.suffix)) {
            const standardDirSuffix = specialDir.suffix;
            const isValid =
              isValidPrefix && isValidSuffix && suffix === standardDirSuffix;

            if (!isValid) {
              return context.report({
                node,
                messageId: Message.DoesNotMatchStandard,
                data: {
                  original,
                  standard: `${standardPrefix}.${standardDirSuffix}${ext}`,
                },
              });
            }
          }
        }

        if (isValidPrefix && !isValidSuffix) {
          return context.report({
            node,
            messageId: Message.DoesNotMatchStandard,
            data: {
              original,
              standard: `${standardPrefix}.${standardSuffix}${ext}`,
            },
          });
        }

        if (!isValidPrefix && hasSuffix) {
          return context.report({
            node,
            messageId: Message.DoesNotMatchStandard,
            data: {
              original,
              standard: `${standardPrefix}.${standardSuffix}${ext}`,
            },
          });
        }

        if (!isValidPrefix && !hasSuffix) {
          return context.report({
            node,
            messageId: Message.DoesNotMatchStandard,
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
