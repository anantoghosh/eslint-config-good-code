module.exports = {
  rules: {
    'unicorn/no-abusive-eslint-disable': 'off',

    // query selector is more verbose for typescript
    'unicorn/prefer-query-selector': 'off',

    // Dependent on developer
    'unicorn/filename-case': 'off',

    // Stylistic rule
    'unicorn/empty-brace-spaces': 'off',

    // Issue with prettier
    'unicorn/no-nested-ternary': 'off',

    /* unicorn extra rules */
    'unicorn/prefer-ternary': ['error', 'only-single-line'],
    'unicorn/custom-error-definition': ['error'],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          err: false,
          params: false,
          props: false,
          dev: false,
          ref: false,
          env: false,
          var: false,
        },
      },
    ],
  },
  plugins: ['unicorn'],
  extends: ['plugin:unicorn/recommended'],
};
