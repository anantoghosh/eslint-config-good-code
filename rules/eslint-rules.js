module.exports = {
  rules: {
    // Already checked by @typescript/no-unnecessary-condition
    'no-constant-condition': 'off',

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
  },
  extends: ['eslint:recommended'],
};
