import kebabCase from 'lodash.kebabcase';
import minimatch from 'minimatch';
import { basename, dirname, extname } from 'path';

import { createRule } from '../utils/create-rule';

function getStandardPrefix(prefix: string): string {
  const mask = '0000000000';
  const special = ['e2e', 'i18n'].find((value) => prefix.includes(value));

  return typeof special === 'string'
    ? kebabCase(prefix.replaceAll(special, mask)).replaceAll(mask, special)
    : kebabCase(prefix);
}

export const enum Message {
  DoesNotMatchStandard = 'DoesNotMatchStandard',
  DoesNotMatchLanguageCode = 'DoesNotMatchLanguageCode',
}

export default createRule({
  name: 'filename',
  meta: {
    type: 'problem',
    docs: {
      description: `Enforces files' naming conventions`,
      recommended: 'error',
    },
    messages: {
      [Message.DoesNotMatchStandard]: `Filename '{{filename}}' should be '{{standard}}'`,
      [Message.DoesNotMatchLanguageCode]: `Language filename must be a valid language code, for example, en-US, zh-TW. Received: '{{filename}}'`,
    },
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    const path = context.getFilename();
    const filename = basename(path);
    const extension = extname(path);
    const dir = basename(dirname(path));
    const [prefix, suffix] = basename(path, extension).split('.');
    const standardPrefix = getStandardPrefix(prefix);
    const requiredSuffix = [
      { dir: 'entities', standard: 'entity' },
      { dir: 'dtos', standard: 'dto' },
      { dir: 'guards', standard: 'guard' },
      { dir: 'responses', standard: 'response' },
      { dir: 'strategies', standard: 'strategy' },
    ].find((rule) => rule.dir === dir);
    const isAllowed = [
      '**/pages/_app.*',
      '**/pages/_document.*',
      '**/pages/**/\\[id\\].*',
    ].some((pattern) => minimatch(path, pattern));
    const isValidPrefix = prefix === standardPrefix;
    const isValidSuffix = !requiredSuffix || suffix === requiredSuffix.standard;

    return {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Program(node): void {
        if (isAllowed) {
          return;
        }
        if (dir === 'i18n') {
          if (/^[a-z]{2}-[A-Z]{2}$/gu.test(prefix)) {
            return;
          }

          context.report({
            node,
            messageId: Message.DoesNotMatchLanguageCode,
            data: { filename: prefix },
          });
        }
        if (requiredSuffix && (!isValidPrefix || !isValidSuffix)) {
          context.report({
            node,
            messageId: Message.DoesNotMatchStandard,
            data: {
              filename,
              standard: `${standardPrefix}.${requiredSuffix.standard}${extension}`,
            },
          });
        } else if (!isValidPrefix && suffix) {
          context.report({
            node,
            messageId: Message.DoesNotMatchStandard,
            data: {
              filename,
              standard: `${standardPrefix}.${suffix.toLowerCase()}${extension}`,
            },
          });
        } else if (!isValidPrefix) {
          context.report({
            node,
            messageId: Message.DoesNotMatchStandard,
            data: {
              filename,
              standard: `${standardPrefix}${extension}`,
            },
          });
        }
      },
    };
  },
});
