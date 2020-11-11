# 使用 CDN 资源

当你的网站部署在宽带较小的服务器时，资源的加载会明显增加首页白屏的时间，即网页在首次下载资源完毕前未渲染任何内容，处于假死状态。这种情况下，你应该考虑使用 CDN 来加快资源的下载速度。

在不使用 CDN 资源情况下，我们引入的第三方依赖都会经过 webpack 处理，这样会增加应用的构建速度。

## 选择合适的 CDN

我们选择免费的 CDN，比如：[jsDelivr](https://www.jsdelivr.com/)、[unpkg](https://unpkg.com/)。当然，你也可以搭建自己的 CDN。

## 配置 CDN 外链

将以下代码添加进 `vue.config.js`。
```js
const IS_PROD = process.env.NODE_ENV === 'production'

const assetsCDN = {
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    vuex: 'Vuex',
    axios: 'axios',
  },
  css: [],
  js: [
    // 请注意顺序，vue.js 应该位列在首位，以便首先加载 vue
    '//cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js',
    '//cdn.jsdelivr.net/npm/vue-router@3.1.6/dist/vue-router.min.js',
    '//cdn.jsdelivr.net/npm/vuex@3.1.3/dist/vuex.min.js',
    '//cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js',
  ],
}

module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        if (IS_PROD) {
          // 传递给 index.html 模板
          args[0].cdn = assetsCDN
        }
        return args
      })
  },

  configureWebpack: (config) => {
    if (IS_PROD) {
      config.externals = {
        ...config.externals,
        ...assetsCDN.externals,
      }
    }
  },
}
```

之后在 `public/index.html` 注入外链。
```html
<head>
  <!-- 引入样式 -->
  <% for(var css of htmlWebpackPlugin.options.cdn.css) { %>
    <link rel="stylesheet" href="<%=css%>">
  <% } %>
</head>

<body>
  <!-- 引入 JS -->
  <% for(var js of htmlWebpackPlugin.options.cdn.js) { %>
    <script src="<%=js%>"></script>
  <% } %>
</body>
```