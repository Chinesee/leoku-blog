# 构建和发布

## 构建应用

运行 `npm run build` 会得到 `dist` 文件夹，里面是编译好的 js、css、index.html 以及一些资源文件，你可以将这些构建好的内容部署到任何静态文件服务器中，但要确保正确的 [publicPath](https://cli.vuejs.org/zh/config/#publicpath)。

## 本地预览

在部署到服务器之前，你可以先在本地预览已经打包构建好的应用，通过启动一个 HTTP 服务器（如 [serve](https://github.com/vercel/serve)）你可以访问 `dist` 里的静态文件。注意：以 `file://` 协议直接打开 `dist/index.html` 是不会工作的。
```sh
# 全局安装 serve
npm install -g serve
# 你可以在 dist 目录下运行：
serve
# 也可以指定 dist 目录
# -s 参数的意思是将其架设在 Single-Page Application 模式下
serve -s dist
```

## 平台部署

如果你只想简单地把应用部署到 GitHub 上，那么请阅读本站的博客 —— [如何将 Vue 应用部署到 GitHub Pages](/blog/deploy-vue-app-to-github-pages)。

其他平台的部署请参考 Vue CLI 的[平台部署指南](https://cli.vuejs.org/zh/guide/deployment.html#%E5%B9%B3%E5%8F%B0%E6%8C%87%E5%8D%97)。
