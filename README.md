# eslint-plugin-mizyind

[![NodeJS](https://img.shields.io/node/v/eslint-plugin-mizyind?style=for-the-badge&label=&color=339933&logo=node.js&logoColor=fff)](https://nodejs.org)
[![NPM](https://img.shields.io/npm/v/eslint-plugin-mizyind?style=for-the-badge&label=&color=cb3837&logo=npm)](https://www.npmjs.com/package/eslint-plugin-mizyind)
[![Yarn](https://img.shields.io/badge/-~=1.22-2c8ebb?style=for-the-badge&label=&logo=yarn&logoColor=fff)](https://classic.yarnpkg.com)
[![Jest](https://img.shields.io/npm/dependency-version/eslint-plugin-mizyind/dev/jest?style=for-the-badge&label=&color=c21325&logo=jest)](https://jestjs.io)
[![TypeScript](https://img.shields.io/npm/dependency-version/eslint-plugin-mizyind/dev/typescript?style=for-the-badge&label=&color=007acc&logo=typescript&logoColor=fff)](https://www.typescriptlang.org)
[![Prettier](https://img.shields.io/npm/dependency-version/eslint-plugin-mizyind/prettier?style=for-the-badge&label=&color=f7b93e&logo=prettier&logoColor=000)](https://prettier.io)
[![ESLint](https://img.shields.io/npm/dependency-version/eslint-plugin-mizyind/eslint?style=for-the-badge&label=&color=4b32c3&logo=eslint&logoColor=fff)](https://eslint.org)

This package provides miZyind's custom lint rules and tools.

## 🔮 Base Usage

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

## 🔮 React Usage

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

## 📜 Supported Rules

| Name                                           | Description                        |
|------------------------------------------------|------------------------------------|
| [`mizyind/filename`](docs/rules/filename.md)   | Enforces files' naming conventions |

## 🖋 Author

miZyind <mizyind@gmail.com>

## 📇 License

Licensed under the [MIT](LICENSE) License.
