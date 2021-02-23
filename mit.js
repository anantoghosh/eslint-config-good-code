'use strict';

module.exports = {
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      extends: [
        'eslint-config-good-code/rules/eslint-rules',
        'eslint-config-good-code/rules/typescript-rules',
        'eslint-config-good-code/rules/unicorn-rules',
      ],
      overrides: [
        {
          files: ['**/*.tsx'],
          extends: ['./rules/jsx-rules'],
        },
      ],
    },
  ],
};
