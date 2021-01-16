module.exports = {
  root: true,
  extends: ['plugin:vue/recommended', '@vue/prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 2,
    'vue/no-unused-components': 1,
    'vue/attribute-hyphenation': 2,
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'UNIQUE',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
        alphabetical: false,
      },
    ],
  },
}
