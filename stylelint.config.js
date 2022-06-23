module.exports = {
  plugins: ['stylelint-prettier'],
  extends: [
    'stylelint-config-property-sort-order-smacss',
    'stylelint-config-recommended-scss',
    'stylelint-prettier/recommended',
    'stylelint-config-prettier'
  ],
  rules: {
    'prettier/prettier': true,
    'no-empty-source': null,
    'color-hex-length': 'short',
    'length-zero-no-unit': true,
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements', 'default-namespace']
      }
    ],
    'shorthand-property-no-redundant-values': true
  }
};
