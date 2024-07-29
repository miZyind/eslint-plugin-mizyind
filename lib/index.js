const { name, version } = require('../package.json');
const mizyind = {
  meta: { name, version },
  configs: {
    base: require('./configs/base'),
    native: require('./configs/native'),
    next: require('./configs/next'),
    typescript: require('./configs/typescript'),
  },
  rules: { filename: require('./rules/filename') },
};

mizyind.configs.base.push({ plugins: { mizyind } });
mizyind.configs.native.push({ plugins: { mizyind } });
mizyind.configs.next.push({ plugins: { mizyind } });
mizyind.configs.typescript.push({ plugins: { mizyind } });

module.exports = mizyind;
