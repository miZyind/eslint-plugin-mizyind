import kebabCase from 'lodash.kebabcase';
import { basename, dirname, extname, resolve } from 'path';

import { createRule } from '../utils/create-rule';
import { hasValue } from '../utils/type-guard';

function replaceAll(input: string, search: string, replace: string): string {
  return input.replace(new RegExp(search, 'gu'), replace);
}

function getStandardPrefix(
  specialPrefixList: string[],
  prefix: string,
): string {
  const mask = '0000000000';
  const specialPrefix = specialPrefixList.find((sp) => prefix.includes(sp));

  if (hasValue(specialPrefix)) {
    const maskedPrefix = replaceAll(prefix, specialPrefix, mask);

    return replaceAll(kebabCase(maskedPrefix), mask, specialPrefix);
  }

  return kebabCase(prefix);
}

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
    const specialPrefixList = ['e2e'];
    const specialDirList = [
      // NextJS
      { name: 'pages', whitelist: ['_app', '_document'] },
      // NestJS
      { name: 'entities', suffix: 'entity' },
      { name: 'dtos', suffix: 'dto' },
      { name: 'guards', suffix: 'guard' },
      { name: 'responses', suffix: 'response' },
      { name: 'strategies', suffix: 'strategy' },
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
        const standardPrefix = getStandardPrefix(specialPrefixList, prefix);
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
              context.report({
                node,
                messageId: Message.DoesNotMatchStandard,
                data: {
                  original,
                  standard: `${standardPrefix}.${standardDirSuffix}${ext}`,
                },
              });

              return;
            }
          }
        }

        if (isValidPrefix && !isValidSuffix) {
          context.report({
            node,
            messageId: Message.DoesNotMatchStandard,
            data: {
              original,
              standard: `${standardPrefix}.${standardSuffix}${ext}`,
            },
          });

          return;
        }

        if (!isValidPrefix && hasSuffix) {
          context.report({
            node,
            messageId: Message.DoesNotMatchStandard,
            data: {
              original,
              standard: `${standardPrefix}.${standardSuffix}${ext}`,
            },
          });

          return;
        }

        if (!isValidPrefix && !hasSuffix) {
          context.report({
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
