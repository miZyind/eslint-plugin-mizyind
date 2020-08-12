# eslint-plugin-mizyind

This package provides miZyind's custom lint.

## Peer Dependencies

- ESLint >= 7

## Installation

You'll first need to install [ESLint](http://eslint.org):

```bash
$ npm install eslint --save-dev

OR

$ yarn add eslint -D
```

Then install this plugin:

```bash
$ npm install eslint-plugin-mizyind --save-dev

OR

$ yarn add eslint-plugin-mizyind -D
```

## Usage

Add `mizyind` to the plugins section of your ESLint configuration, then configure the rules you want to use under the rules section.

```json
{
  "plugins": ["mizyind"],
  "rules": {
    "mizyind/rule-name": "error"
  }
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
