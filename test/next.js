import { ESLint } from 'eslint';
import assert from 'node:assert/strict';
import { dirname, join } from 'node:path';
import { describe, it } from 'node:test';
import { fileURLToPath } from 'node:url';
import { next } from '../lib/index.js';

const cwd = join(dirname(fileURLToPath(import.meta.url)), 'fixtures/next');
const eslint = new ESLint({
  cwd,
  overrideConfigFile: true,
  overrideConfig: [
    ...next,
    {
      languageOptions: { parserOptions: { tsconfigRootDir: cwd } },
      settings: { react: { version: '19' } }, // Fixture has no react package to detect
    },
  ],
});
const ruleIds = (result) => result.messages.map((m) => m.ruleId);

describe('next config', () => {
  it('lints a valid page without errors', async () => {
    const [result] = await eslint.lintFiles(['pages/index.tsx']);

    assert.deepEqual(result.messages, []);
  });

  it('reports next, react and mizyind rules on an invalid page', async () => {
    const [result] = await eslint.lintFiles(['pages/badPage.tsx']);
    const ids = ruleIds(result);

    assert.equal(result.fatalErrorCount, 0);
    assert.ok(ids.includes('@next/next/no-img-element'), ids.join(', '));
    assert.ok(ids.includes('mizyind/filename'), ids.join(', '));
  });
});
