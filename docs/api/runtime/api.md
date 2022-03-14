---
id: api
title: API
sidebar_position: 2
---



## 基本 API

### head

为文档的 `head` 添加子元素:

```js
import { Head } from "@shuvi/app";

function IndexPage() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p>Hello world!</p>
    </div>
  );
}

export default IndexPage;
```

### dynamic

动态加载组件。

**常见使用场景**：组件体积太大，不适合直接计入 bundle 中，以免影响首屏加载速度。例如：某组件 HugeA 包含巨大的实现 / 依赖了巨大的三方库，且该组件 HugeA 的使用不在首屏显示范围内，可被单独拆出。这时候，`dynamic` 就该上场了。

**为什么使用 `dynamic`**：封装了使用一个异步组件需要做的状态维护工作，开发者可以更专注于自己的业务组件开发，而不必关心 code spliting、async module loading 等等技术细节。

通常搭配 [动态 import 语法](https://github.com/tc39/proposal-dynamic-import) 使用。

**使用异步组件**

```js
import React from "react";
const AsyncComponent = dynamic(() => import("./Component"));

// 像使用普通组件一样即可
// dynamic 为你做:
// 1. 异步加载该模块的 bundle
// 2. 加载期间 显示 loading（可定制）
// 3. 异步组件加载完毕后，显示异步组件
export default () => {
  return <AsyncComponent />;
};
```

**封装一个异步组件**

```js
import { dynamic } from "@shuvi/app";

export default dynamic(async () => {
  // 这里的注释 webpackChunkName 可以指导 webpack 将该组件 HugeA 以这个名字单独拆出去
  const { default: HugeA } = await import(
    /* webpackChunkName: "external_A" */ "./HugeA"
  );
  return HugeA;
});
```

## 路由

### router

可用于获取当前路由信息，

```js
import { router } from "@shuvi/app";
```

可用于路由跳转，

```js
import { router } from "@shuvi/app";

// 跳转到指定路由
router.push("/list");

// 带参数跳转到指定路由
router.push("/list?a=b");
router.push({
  pathname: "/list",
  search: "?a=b"
});

// 跳转到上一个路由
history.goBack();

// 监听路由改变
router.onChange(() => {
  window.ga("send", "pageview");
});
```

### Link

链接组件，例如：

```tsx
import { Link } from "@shuvi/app";

export default () => {
  return (
    <div>
      {/* 点击跳转到指定 /about 路由 */}
      <Link to="/about">About</Link>

      {/* 点击跳转到指定 /courses 路由，
          附带 query { sort: 'name' }
      */}
      <Link to="/courses?sort=name">Courses</Link>

      {/* 点击跳转到指定 /list 路由，
          附带 query: { sort: 'name' }
          附带 hash: 'the-hash'
          附带 state: { fromDashboard: true }
      */}
      <Link
        to={{
          pathname: "/list",
          search: "?sort=name",
          hash: "#the-hash",
          state: { fromDashboard: true }
        }}
      >
        List
      </Link>

      {/* 点击跳转到指定 /profile 路由，
          附带所有当前 location 上的参数
      */}
      <Link
        to={location => {
          return { ...location, pathname: "/profile" };
        }}
      />

      {/* 点击跳转到指定 /courses 路由，
          但会替换当前 history stack 中的记录
      */}
      <Link to="/courses" replace />

      {/* 
          innerRef 允许你获取基础组件（这里应该就是 a 标签或者 null）
      */}
      <Link
        to="/courses"
        innerRef={node => {
          // `node` refers to the mounted DOM element
          // or null when unmounted
        }}
      />
    </div>
  );
};
```

### useHistory

hooks，获取 `history` 对象

```tsx
import { useHistory } from "@shuvi/app";

export default () => {
  const history = useHistory();
  return (
    <div>
      <ul>
        <li>history: {history.action}</li>
      </ul>
    </div>
  );
};
```

### useLocation

hooks，获取 `location` 对象

```tsx
import { useLocation } from "@shuvi/app";

export default () => {
  const location = useLocation();
  return (
    <div>
      <ul>
        <li>location: {location.pathname}</li>
      </ul>
    </div>
  );
};
```

### useParams

hooks，获取 `params` 对象。 `params` 对象为动态路由（例如：`/users/:id`）里的参数键值对。

```tsx
import { useParams } from "@shuvi/app";

export default () => {
  const params = useParams();
  return (
    <div>
      <ul>
        <li>params: {JSON.stringify(params)}</li>
      </ul>
    </div>
  );
};
```

### useRouteMatch

获取当前路由的匹配信息。

```tsx
import { useRouteMatch } from "@shuvi/app";

export default () => {
  const match = useRouteMatch();
  return (
    <div>
      <ul>
        <li>match: {JSON.stringify(match.params)}</li>
      </ul>
    </div>
  );
};
```

## Nodejs API

```js
// server.js
const { createServer } = require("http");
const { parse } = require("url");
const shuvi = require("shuvi");

const dev = process.env.NODE_ENV !== "production";
const app = shuvi({ dev });

try {
  await app.listen(3000);
  console.log(`Ready on http://localhost:${port}`);
} catch (err) {
  console.error(err);
  process.exit(1);
}
```
