# 代码规范

无论是个人独立开发还是多人协作开发的项目，制定一套统一的代码规范至关重要。保持良好的代码规范不仅能减少你在开发时遇到的语法错误，还增加了代码的可读性。通常，在项目开发的初期引入代码规范是一个明智的选择。

## ESLint

[ESLint](https://cn.eslint.org/) 是在 ECMAScript/JavaScript 代码中识别和报告模式匹配的工具，它的目标是保证代码的一致性和避免错误。Venus 使用了 [`@vue/eslint-config-airbnb`](https://github.com/vuejs/eslint-config-airbnb) 来帮助你预设一些 ESLint 规则，你仍然可以编辑根目录下的 `.eslintrc.js` 来修改规则。

## 配合 VS Code

要想让你的编辑器智能地帮你完成代码检测和自动修复，你需要安装这些插件：[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)、[Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)、[Beautify css/sass/scss/less](https://marketplace.visualstudio.com/items?itemName=michelemelluso.code-beautifier)。

然后在 VS Code 的配置文件中加入一下配置：
```json
"editor.formatOnSave": true,
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
"vetur.format.enable": true,
"vetur.format.defaultFormatter.html": "js-beautify-html",
"vetur.format.defaultFormatterOptions": {
  "wrap_attributes": "preserve-aligned"
},
"vetur.validation.templateProps": true,
"vetur.format.defaultFormatter.js": "vscode-typescript",
"javascript.validate.enable": false,
"[vue]": {
  "editor.defaultFormatter": "octref.vetur"
}
```

接下来的开发中，你就获得了保存文件即格式化代码的能力了，而不用自己手动修复一个个错误。
