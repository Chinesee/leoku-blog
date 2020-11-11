# 可执行命令

## `npm run serve`

启动一个本地服务，启动完成后在浏览器中访问 `http://localhost:8080/` 来展示你的页面，通常用于本地开发。默认的端口号为 8080，如端口被占用，则会自动切换，具体是多少请看执行此命令的终端。

## `npm run build`

在生产环境下编译项目，默认情况下会将文件输出到项目根目录下的 `dist` 文件夹中。

## `npm run build:analyze`

与 `npm run build` 类似，但会生成一份可视化的依赖结构树形图，可帮助你了解依赖包中的内容，以便优化项目。该功能由 [`webpack-bundle-analyzer`](https://www.npmjs.com/package/webpack-bundle-analyzer) 提供。

## `npm run build:modern`

与 `npm run build` 类似，但使用现代模式构建应用，为现代浏览器交付原生支持的 ES2015 代码，并生成一个兼容老浏览器的包用来自动回退，详见 [Vue CLI 现代模式](https://cli.vuejs.org/zh/guide/browser-compatibility.html#现代模式)。

## `npm run lint`

检查并修复代码中的格式问题。

## `npm run test`

执行单元测试用例。
