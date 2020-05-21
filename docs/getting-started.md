---
id: getting-started
title: 快速上手
---

## 介绍

shuvi 是前端应用开发的解决方案，整合了现代工具链，专注于提升开发体验和效率。

## 使用

创建项目

```sh
mkdir my-app & cd my-app
npm init -y
```

安装 shuvi

```sh
install shuvi@beta
```

创建 `src/pages` 目录, 并生成一个 hello world 页面
```sh
mkdir -p src/pages
cat <<EOF >> /src/pages/index.js
export default () => <div>hello, world</div>
EOF
```

在 `package.json` 种添加脚本
```json
{
  "scripts": {
    "dev": "shuvi dev",
    "build": "shuvi build",
    "serve": "shuvi serve"
  }
}
```

启动项目
```sh
npm start
```
