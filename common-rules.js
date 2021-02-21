module.exports = {
  /* Disabled Recommended */
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/no-unused-vars': 'off',
  '@typescript-eslint/no-empty-function': 'off',

  'sonarjs/prefer-immediate-return': 'off',
  'sonarjs/no-redundant-boolean': 'off',
  'sonarjs/prefer-object-literal': 'off',
  'sonarjs/no-collapsible-if': 'off',

  'unicorn/no-abusive-eslint-disable': 'off',
  'unicorn/filename-case': 'off',
  'unicorn/empty-brace-spaces': 'off',
  'unicorn/no-nested-ternary': 'off',

  /* eslint extra rules */
  'max-lines': [
    'error',
    { max: 300, skipBlankLines: true, skipComments: true },
  ],
  'max-nested-callbacks': ['error', { max: 4 }],
  'max-params': ['error', { max: 4 }],
  'max-depth': ['error', 5],
  'max-statements': ['error', 15, { ignoreTopLevelFunctions: true }],
  'no-lonely-if': 'error',
  'no-unneeded-ternary': 'error',
  'no-var': 'error',
  'eqeqeq': 'error',
  'no-else-return': 'error',
  'no-implicit-coercion': 'error',
  'no-extra-bind': 'error',
  'no-unmodified-loop-condition': 'error',
  'radix': 'error',
  'yoda': 'error',
  'prefer-const': 'error',
  'no-nested-ternary': 'error',

  /* @typescript-eslint extra rules */
  '@typescript-eslint/array-type': 'error',
  '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
  '@typescript-eslint/consistent-type-assertions': 'error',
  '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
  '@typescript-eslint/consistent-type-imports': 'error',
  '@typescript-eslint/explicit-member-accessibility': [
    'error',
    { accessibility: 'no-public' },
  ],
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'variable',
      modifiers: ['destructured'],
      format: null,
    },
  ],
  '@typescript-eslint/method-signature-style': ['error', 'property'],
  '@typescript-eslint/no-base-to-string': 'error',
  '@typescript-eslint/no-confusing-void-expression': [
    'error',
    { ignoreArrowShorthand: true },
  ],
  '@typescript-eslint/no-extraneous-class': 'error',
  '@typescript-eslint/no-implicit-any-catch': 'error',
  '@typescript-eslint/no-invalid-void-type': 'error',
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': [
    'error',
    {
      allowComparingNullableBooleansToTrue: false,
      allowComparingNullableBooleansToFalse: false,
    },
  ],
  '@typescript-eslint/no-unnecessary-condition': 'error',
  '@typescript-eslint/no-unnecessary-type-arguments': 'error',
  '@typescript-eslint/no-unnecessary-type-constraint': 'error',
  '@typescript-eslint/prefer-for-of': 'error',
  '@typescript-eslint/prefer-includes': 'error',
  '@typescript-eslint/prefer-literal-enum-member': 'error',
  '@typescript-eslint/prefer-nullish-coalescing': 'error',
  '@typescript-eslint/prefer-optional-chain': 'error',
  '@typescript-eslint/prefer-reduce-type-parameter': 'error',
  '@typescript-eslint/prefer-string-starts-ends-with': 'error',
  '@typescript-eslint/promise-function-async': 'error',
  '@typescript-eslint/prefer-readonly': 'error',
  '@typescript-eslint/prefer-readonly-parameter-types': [
    'error',
    { checkParameterProperties: false, ignoreInferredTypes: true },
  ],
  '@typescript-eslint/require-array-sort-compare': [
    'error',
    {
      ignoreStringArrays: true,
    },
  ],
  '@typescript-eslint/strict-boolean-expressions': 'error',
  '@typescript-eslint/switch-exhaustiveness-check': 'error',
  '@typescript-eslint/unified-signatures': 'error',

  // eslint compatible
  'dot-notation': 'off',
  '@typescript-eslint/dot-notation': 'error',

  'no-duplicate-imports': 'off',
  '@typescript-eslint/no-duplicate-imports': 'error',

  'no-invalid-this': 'off',
  '@typescript-eslint/no-invalid-this': 'error',

  'no-loop-func': 'off',
  '@typescript-eslint/no-loop-func': 'error',

  'no-loss-of-precision': 'off',
  '@typescript-eslint/no-loss-of-precision': 'error',

  'no-magic-numbers': 'off',
  '@typescript-eslint/no-magic-numbers': [
    'error',
    {
      ignore: [0, 1, -1, 60, 1000],
      ignoreEnums: true,
      ignoreNumericLiteralTypes: true,
      ignoreReadonlyClassProperties: true,
      ignoreArrayIndexes: true,
      ignoreDefaultValues: true,
      enforceConst: true,
    },
  ],

  'no-shadow': 'off',
  '@typescript-eslint/no-shadow': 'error',

  'no-unused-expressions': 'off',
  '@typescript-eslint/no-unused-expressions': 'error',

  'no-throw-literal': 'off',
  '@typescript-eslint/no-throw-literal': 'error',

  'no-return-await': 'off',
  '@typescript-eslint/return-await': 'error',

  /* unicorn extra rules */
  'unicorn/prefer-ternary': ['error', 'only-single-line'],
  'unicorn/prevent-abbreviations': [
    'error',
    {
      replacements: {
        params: false,
        props: false,
        dev: false,
        ref: false,
        env: false,
        var: false,
      },
    },
  ],
};
