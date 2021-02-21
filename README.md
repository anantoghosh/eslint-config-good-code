# eslint-config-good-code ✨

> A shared strict eslint configuration for typescript (>=3.8) projects.

This package defines a strict eslint config to prevent code smells and promote maintainable coding practices.  
It combines recommend settings from eslint, typescript-eslint, unicorn, sonarjs and further enables more rules.


## Installation
*Before installation make sure your project has eslint and typescript available.*

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

## Acknowledgment

This project was made possible due to the incredible work done on the following projects:

- [eslint](https://eslint.org/)
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


