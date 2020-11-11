# 布局

页面布局采用了常规的做法，整体上划分为页头（Header）、左侧导航菜单（Sider）、页脚（Footer）以及内容区（View）。这种布局能够清晰地反映出导航和内容的关系，降低用户的使用难度。

![Venus 布局](https://gitee.com/chinesee/images/raw/master/img/img_035.png)

## 布局文件

在 Venus 中，页面布局被抽象到一个单文件组件（.vue）中，我们称它为布局文件（没什么特殊，就是一个 vue 文件）。为了方便管理，我们把布局文件单独放置在 [`@/layouts`]() 下。
```vue {4-6,10-12,15-17,20-22}
<template>
  <main>
    <!-- 侧边栏 -->
    <aside>
      <app-sider />
    </aside>

    <section>
      <!-- 顶部导航 -->
      <header>
        <app-header />
      </header>

      <!-- 内容区域 -->
      <main>
        <router-view />
      </main>

      <!-- 页脚 -->
      <footer>
        <app-footer />
      </footer>
    </section>
  </main>
</template>
```

## 配置路由
要应用布局，你需要在路由配置文件中为每个路由的 `component` 指定 `layout`。当然，你可以为不同的路由配置不同的布局。
```js
import MainLayout from '@/layouts/MainLayout.vue'
import UserLayout from '@/layouts/UserLayout.vue'
import MyPage from '@/views/pages/MyPage.vue'

const routes = [
  {
    path: '/main',
    component: MainLayout,
    children: [
      {
        path: 'my-page',
        component: MyPage,
      },
    ],
  },
  {
    path: '/user',
    component: UserLayout,
    ...
  },
]
```

在上面的示例代码中，当 /main/my-page 匹配成功时，`MyPage` 会被渲染在`MainLayout`的 `<router-view />` 中。如果你不理解为什么会这样，那么请阅读 vue-router 的[嵌套路由](https://router.vuejs.org/zh/guide/essentials/nested-routes.html)。

## 移动端适配
:::warning Emmm...
遗憾的是，Venus 目前并不支持移动端。由于移动端不适合复杂的数据处理操作，所以如果由移动端替代桌面端，那将是一场灾难。出于这种考虑，我们没有对所有的布局容器进行移动端适配，而是仅仅使用`媒体查询`来完成一些响应式布局。
:::