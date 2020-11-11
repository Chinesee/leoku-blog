# 网络请求

受益于 Vue 带来的前端和服务端分离的开发模式，我们可以更加关注如何利用数据来渲染页面。前端只需要编写 API，通过 API 向服务端发起请求来获取数据并展示。做这件事的方法有好几种，而使用基于 promise 的 HTTP 客户端 [axios](https://github.com/axios/axios) 则是其中非常流行的一种。

## 封装 API

使用 axios 我们可以很轻松地设置 `拦截器`、`错误处理`、`超时处理` 等功能。为了对接口进行统一的处理，在 `@/plugins/axios.js` 文件中我们创建了一个唯一的 axios 实例并将其导出。接下来，我们就可以通过引入 axios 实例来创建接口函数，像这样：
```js
// @/api/user.js
import request from '@/plugins/axios'

export function getUserInfo(params) {
  return request({
    url: '/user/info',
    method: 'get',
    params,
  })
}
```

所有的接口都被放在 `@/api` 下，按模块进行组织。

然后你就可以在 vue 组件中导入 API
```js
// @/views/User.vue
import { getUserInfo } from '@/api/user'

export default {
  created() {
    this.getUserInfo()
  },

  methods: {
    async getUserInfo() {
      const result = await getUserInfo({ ... })
    }
  }
}
```

## 模拟请求

很多时候你不想依赖后端服务来构建你的应用，你可能只想创建自己的模拟数据来加快开发速度，[
Mock.js](http://mockjs.com/) 能帮你做到这点。

使用 `Mock.js` 不需要修改既有的接口，它可以拦截 Ajax 请求，然后返回模拟的响应数据，你只需关注如何创建模拟数据即可。

### 使用方法

在项目根目录下创建这样的文件： `mock/index.js`，然后在里面编写配置：
```js
import Mock from 'mockjs'

// 定义你想拦截的请求接口
Mock.mock('/user/info', 'get', { /* 自定义的模拟数据 */ })

Mock.setup()
```

要使其生效，你还需要在 `main.js` 中导入刚刚写好的配置：
```js
// main.js
import '@/mock'
```

更多用法请查阅 [Mock.js 示例](http://mockjs.com/examples.html)


### 关闭模拟请求

将 `import '@/mock'` 移除即可。
