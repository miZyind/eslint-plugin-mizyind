import { ESLintUtils } from '@typescript-eslint/experimental-utils';

export const createRule = ESLintUtils.RuleCreator(
  (name) =>
    `https://github.com/miZyind/eslint-plugin-mizyind/blob/master/docs/rules/${name}.md`,
);
