# 主题与样式

Venus 使用 [`SCSS`](https://www.sass.hk/) 作为 CSS 扩展语言。在 CSS 框架上，选择了 [`Tailwind CSS`](https://tailwindcss.com/)。

## 文件结构

Venus 中所有的样式文件都放置在 `@/assets/scss` 下。
```sh
assets
├── scss
│   ├── common.scss              # 全局通用样式
│   ├── highlight.scss           # 代码块高亮样式
│   ├── reset.scss               # 全局覆盖样式
│   ├── tailwind.scss            # tailwind 的样式配置
│   └── variables.scss           # 全局样式变量
```

## 全局样式变量
通过配置 `vue.config.js` 中的 `css.loaderOptions` 选项，你这样向所有 Scss/Less 样式传入共享的全局变量：
```js
css: {
  loaderOptions: {
    scss: {
      prependData: '@import "@/assets/scss/variables.scss";',
    },
    less: {
      lessOptions: {
        modifyVars: {
          'primary-color': '#6485ff',
          ...
        },
        javascriptEnabled: true,
      },
    },
  }
}
```

## 样式兼容

Venus 已为你自动添加样式的浏览器前缀，你可以编辑 `package.json` 的 [browserslist](https://cli.vuejs.org/zh/guide/browser-compatibility.html#browserslist) 字段来确定需要转译的 JavaScript 特性和需要添加的 CSS 浏览器前缀。
