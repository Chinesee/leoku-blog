const path = require('path')

// Theme API.
module.exports = (options, ctx) => {
  const { themeConfig, siteConfig } = ctx

  // resolve algolia
  const isAlgoliaSearch =
    themeConfig.algolia ||
    Object.keys((siteConfig.locales && themeConfig.locales) || {}).some(
      base => themeConfig.locales[base].algolia
    )

  const enableSmoothScroll = themeConfig.smoothScroll === true

  return {
    alias() {
      return {
        '@AlgoliaSearchBox': isAlgoliaSearch
          ? path.resolve(__dirname, 'components/AlgoliaSearchBox.vue')
          : path.resolve(__dirname, 'noopModule.js'),
      }
    },

    plugins: [
      ['@vuepress/active-header-links', options.activeHeaderLinks],
      '@vuepress/search',
      '@vuepress/plugin-nprogress',
      '@vuepress/last-updated',
      [
        'container',
        {
          type: 'tip',
          defaultTitle: {
            '/': '提示',
            '/en/': 'TIP',
          },
        },
      ],
      [
        'container',
        {
          type: 'warning',
          defaultTitle: {
            '/': '注意',
            '/en/': 'WARNING',
          },
        },
      ],
      [
        'container',
        {
          type: 'danger',
          defaultTitle: {
            '/': '警告',
            '/en/': 'WARNING',
          },
        },
      ],
      [
        'container',
        {
          type: 'details',
          before: info =>
            `<details class="custom-block details">${
              info ? `<summary>${info}</summary>` : ''
            }\n`,
          after: () => '</details>\n',
        },
      ],
      ['smooth-scroll', enableSmoothScroll],
    ],
  }
}
