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
