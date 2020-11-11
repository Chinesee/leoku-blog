# 开始使用

## 写在前面

我们希望你了解关于 HTML、CSS 和 JavaScript 的中级知识，并清楚 Vue.js 的语法，否则使用本项目可能不是一个明智的选择。在你动手开发之前，请先阅读本文档相关的章节，这或许能为你解决不少问题。

## 准备工作

运行 Venus 需要具备以下开发环境：[yarn](https://yarnpkg.com/)、[node](https://nodejs.org/en/) 和 [git](https://git-scm.com/)，我们假设你已经了解相关的知识。

## 基础模板 <Badge text="推荐"/>

本项目内置了许多功能，这些功能你也许不会用到。为此，我们准备了一个只包含核心功能的[基础模板](https://github.com/Chinesee/venus-starter)以供你进行更个性化的开发。

## 目录结构

将项目下载到本地后，你应该能看到以下的目录结构。
```sh
├── __tests__                 # jest 测试用例
├── public
│   ├── favicon.ico           # 网页标题图标
│   └── index.html            # 网页的入口文件
├── src
│   ├── api                   # 数据接口
│   ├── assets                # 多媒体资源
│   ├── components            # 业务通用组件
│   ├── directives            # Vue 自定义指令
│   ├── layouts               # 通用布局
│   ├── mock                  # 模拟数据
│   ├── plugins               # 第三方插件
│   ├── router                # 路由配置
│   ├── store                 # 数据仓库
│   ├── utils                 # 工具函数
│   ├── views                 # 页面视图
│   ├── App.vue               # 主组件，用于挂载其他视图
│   └── main.js               # 全局 JS
├── .env                      # 环境变量
├── .env.development          # 环境变量（开发环境）
├── .eslintrc.js              # eslint 配置
├── babel.config.js           # babel 配置
├── jest.config.js            # jest 配置
├── package.json                    
├── README.md
├── tailwind.config.js        # tailwind 配置
└── vue.config.js             # vue-cli 配置
```

## 运行项目
### 安装依赖
```sh
# npm 方式：
npm install

# 如果你使用 yarn，则为：
yarn install
```

### 启动项目
```sh
npm run start
# 或者
yarn start
```

如无意外，打开浏览器访问 [http://localhost:8000]()，就能看到以下界面：