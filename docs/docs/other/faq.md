# 常见问题

## node-sass 安装失败

请看这个[解决方法](https://github.com/lmk123/blog/issues/28)。

## 如何添加路径别名

像这样配置你的 `vue.config.js`：
```js
chainWebpack: (config) => {
  config.resolve.alias
    .set('@img', '@/assets/images')
    .set('@comp', '@/components')
}
```

## 了解更多 Vue 的技巧

请阅读我们的 [Blog](/blog/)，里面会不定期更新有关 Vue 的最佳实践和有趣示例。

## 想和开发者保持联系

搜索微信号：leoku_new 加好友 ：）。
