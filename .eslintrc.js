module.exports = {
  root: true,
  extends: [
    'plugin:vue/essential',
  ],

  rules: {
    'vue/no-unused-components': 1,
    'vue/attribute-hyphenation': 2,
    'no-param-reassign': ['error', { props: false }],
    'object-shorthand': ['error', 'always'],
    'no-unused-vars': 1,
    'no-unused-expressions': 0,
    'max-len': 0,
    'global-require': 0,
    'import/no-extraneous-dependencies': 0,
    'comma-dangle': ['error', 'always-multiline'],
    semi: ['error', 'never'],
    camelcase: 'off',
    quotes: ['error', 'single'],
  },
}
