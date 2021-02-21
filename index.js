'use strict';

const commonRules = require('./common-rules');
const jsxRules = require('./jsx-rules');

module.exports = {
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'sonarjs', 'unicorn'],
      parserOptions: {
        project: './tsconfig.json',
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:unicorn/recommended',
        'plugin:sonarjs/recommended',
      ],
      rules: {
        ...commonRules,
      },
      overrides: [
        {
          files: ['**/*.tsx'],
          rules: {
            ...jsxRules,
          },
        },
      ],
    },
  ],
};
