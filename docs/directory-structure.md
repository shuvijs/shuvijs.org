---
id: directory-structure
title: 目录结构
---

shuvi 项目的目录结构如下:

```
  .
  ├── .shuvi
  ├── shuvi.config.js
  ├── public
  ├── dist
  └── src
      ├── pages
          └── index.jsx
      └── app.js
      └── document.js
```

## 根目录

### .shuvi 目录

临时文件目录，比如入口文件、路由等，都会被临时生成到这里。**不要提交 `.shuvi` 目录到 git 仓库，他们会在 `shuvi dev` 和 `shuvi build` 时被删除并重新生成。**

### shuvi.config.js

配置文件，可以修改 shuvi 选项和配置插件。

### dist 目录

默认的构建输出目录。

### public 目录

此目录下所有文件会被 copy 到输出路径。

## `/src` 目录

### pages 目录

约定式路由目录。

### app.js

根组件，所有路由的渲染都会经过这里。

### document.js

控制文档的内容。
