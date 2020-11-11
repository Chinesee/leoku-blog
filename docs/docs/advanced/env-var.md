# 环境变量

[环境变量](https://cli.vuejs.org/zh/guide/mode-and-env.html#模式) 为你提供了一个根据不同的编译环境生成不同值的全局变量的机制，可以让你灵活地切换应用的状态。根据规定，自定义的环境变量必须以 `VUE_APP` 开头，否则将无法生效。

## `VUE_APP_PAGE_TITLE`

网站的一级标题。比如设为“Venus Admin”时，每个路由的网页标题的后面都会带上一级标题，格式为：`xxx - Venus Admin`。

## `VUE_APP_ROUTER_MODE`

vue-router 的路由模式，只能设为 `history` 或 `hash`，如果不设则默认使用 `history`。

## `VUE_APP_BASE_API`

API 接口的主机域名，比如你的后端接口服务启动在 `http://localhost:7001`，则应将此变量设为 `http://localhost:7001`。

## `VUE_APP_REQUEST_BASE_URL`

接口统一标识。比如设为 `/api` 时，当你请求如 `/users` 这样的接口时，会变为 `/api/users`。

## `VUE_APP_PUBLIC_PATH`

如果要部署到类似「码云 Pages」或「GitHub Pages」，则设为仓库名称。

## `VUE_APP_OUTPUT_DIR`

打包后的文件输出的路径。
