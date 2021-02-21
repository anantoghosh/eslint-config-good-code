module.exports = {
  'max-lines': [
    'error',
    { max: 350, skipBlankLines: true, skipComments: true },
  ],
  'max-nested-callbacks': ['error', { max: 5 }],
  'max-depth': ['error', 6],

  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'variable',
      format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      leadingUnderscore: 'allow',
      trailingUnderscore: 'allow',
    },
  ],
};
