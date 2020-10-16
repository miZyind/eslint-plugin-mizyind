# eslint-plugin-mizyind

[![NodeJS](https://img.shields.io/node/v/eslint-plugin-mizyind?style=for-the-badge&label=&color=339933&logo=node.js&logoColor=fff)](https://nodejs.org)
[![NPM](https://img.shields.io/npm/v/eslint-plugin-mizyind?style=for-the-badge&label=&color=cb3837&logo=npm)](https://www.npmjs.com/package/eslint-plugin-mizyind)
[![TypeScript](https://img.shields.io/npm/dependency-version/eslint-plugin-mizyind/dev/typescript?style=for-the-badge&label=&color=007acc&logo=typescript)](https://www.typescriptlang.org)
[![ESLint](https://img.shields.io/npm/dependency-version/eslint-plugin-mizyind/eslint?style=for-the-badge&label=&color=4b32c3&logo=eslint&logoColor=fff)](https://eslint.org)
[![Prettier](https://img.shields.io/npm/dependency-version/mizyind/eslint-plugin-mizyind/prettier?style=for-the-badge&label=&color=f7b93e&logo=prettier&logoColor=fff)](https://prettier.io)
[![License](https://img.shields.io/badge/LIC.-mit-404040?style=for-the-badge&labelColor=000)](https://github.com/miZyind/eslint-plugin-mizyind/blob/master/LICENSE)

This package provides miZyind's custom lint rules and tools.

## Base Usage

Install `eslint-plugin-mizyind` package only:
```bash
$ npm install eslint-plugin-mizyind --save-dev

OR

$ yarn add eslint-plugin-mizyind -D
```

Add corresponding config to the extends section of your ESLint configuration:
```json
{
  "extends": [
    "plugin:mizyind/base"
  ]
}
```

## React Usage

Install all dependencies:
```bash
$ npm install eslint-plugin-react \
              eslint-plugin-react-hooks \
              eslint-plugin-mizyind \
              --save-dev

OR

$ yarn add eslint-plugin-react \
           eslint-plugin-react-hooks \
           eslint-plugin-mizyind \
           -D
```

Add corresponding config to the extends section of your ESLint configuration:
```json
{
  "extends": [
    "plugin:mizyind/react"
  ]
}
```

## Supported Rules

| Name                                           | Description                        |
|------------------------------------------------|------------------------------------|
| [`mizyind/filename`](docs/rules/filename.md)   | Enforces files' naming conventions |

## Author

miZyind <mizyind@gmail.com>

## LICENSE

Licensed under the [MIT](LICENSE) License.
