# 权限控制

权限控制对于一个中后台系统来说不可或缺，那么在 Venus 中是如何进行权限控制的呢？

## 权限路由

在[路由和菜单](/docs/dev/router-and-nav)一节中我们提到过，所有需要根据权限生成的路由都应该被定义在 `@/router/router.js` 的 `asyncRoutes` 数组中，里面的每个路由项都对应着一个权限标识，将这些标识与用户自身的权限标识一一比对，就能得到权限路由了。

具体的实现步骤如下：
1. 用户登录时得到一个 `token`，token 存储了登录信息和登录时效，登录成功后用户将跳转到首页

2. 路由跳转时触发 [`router.beforeEach`](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#全局前置守卫) 方法，该方法内首先确认用户是否拥有 token，如果有则通过 `store.dispatch('getUserInfo')` 获取用户的信息，否则将重定向回登录页。

3. 在用户信息中提取 `permissions` 并传递给 `store.dispatch('generateRoutes', permissions)`，然后就能得到对应权限的路由

4. 调用 `router.addRoutes()` 将过滤好权限的路由动态地添加到路由表中

5. 鉴权结束，开始渲染菜单

## 权限指令

为了更灵活地控制权限，Venus 还封装了一个 vue 指令：`v-auth`，你可以向该指令传递字符串或数组，像这样使用：
```vue
<div v-auth="'admin'">Admin</div>
<div v-auth="['admin', 'editor']">Admin and Editor</div>
```

在不方便使用指令的地方，可以使用全局方法 `$auth`，传递的参数与指令一致：
```vue
<div v-if="$auth('admin')">Admin</div>
<div v-if="$auth(['admin', 'editor'])">Admin and Editor</div>
```