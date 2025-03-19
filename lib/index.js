import meta from '../package.json' with { type: 'json' };
import baseConfig from './configs/base.js';
import nativeConfig from './configs/native.js';
import nextConfig from './configs/next.js';
import typescriptConfig from './configs/typescript.js';
import filename from './rules/filename.js';

const mizyind = {
  meta: { name: meta.name, version: meta.version },
  configs: {
    base: baseConfig,
    native: nativeConfig,
    next: nextConfig,
    typescript: typescriptConfig,
  },
  rules: { filename },
};

mizyind.configs.base.push({ plugins: { mizyind } });
mizyind.configs.native.push({ plugins: { mizyind } });
mizyind.configs.next.push({ plugins: { mizyind } });
mizyind.configs.typescript.push({ plugins: { mizyind } });

export const { base, native, next, typescript } = mizyind.configs;
export default mizyind;
