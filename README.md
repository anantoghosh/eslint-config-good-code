# eslint-config-good-code ✨ [![npm version](https://img.shields.io/npm/v/eslint-config-good-code)](https://www.npmjs.com/package/eslint-config-good-code)

> A shared strict eslint configuration for typescript (>=3.8) projects.

This package defines a strict eslint config to prevent code smells and promote maintainable coding practices.  
It combines recommend settings from eslint, typescript-eslint, unicorn, sonarjs and further enables more rules.

## Installation

_Before installation make sure your project has eslint (>=7) and typescript (>=3.8) available._

Step 1: Install the required packages

```sh
npm i -D eslint-config-good-code @typescript-eslint/eslint-plugin eslint-plugin-sonarjs eslint-plugin-unicorn
```

Step 2: Extend the config in your app package.json

```js
  "eslintConfig": {
    "extends": [
      "eslint-config-good-code"
    ]
  }
```

## Principles

- Typescript only (with tsx) - No react, jest, a11y etc. rules. Use in any kind of project.
- No stylistic rules.
- No conflicting or double enforced rules.
- No enforcing of rules which typescript can already prevent.
- _(future) Multiple configurations - Allow a developer to choose what's required._
- _(future) Modular config - Allow customization per project._

## Acknowledgment

This project was made possible due to the incredible work done on the following projects:

- [eslint](https://eslint.org/)
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
