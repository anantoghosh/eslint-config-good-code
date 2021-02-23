module.exports = {
  rules: {
    'sonarjs/prefer-immediate-return': 'off',
    'sonarjs/no-redundant-boolean': 'off',
    'sonarjs/prefer-object-literal': 'off',
    'sonarjs/no-collapsible-if': 'off',
  },
  plugins: ['sonarjs'],
  extends: ['plugin:sonarjs/recommended'],
};
