---
id: page-component
title: Page Component
sidebar_position: 1
---

## 页面级数据获取

每个页面可能有单独的数据预获取逻辑，这里我们会获取页面组件上的 `getInitialProps` 静态方法，执行后将结果注入到该页面组件的 `props` 中，例如：

```jsx
function Page({ title }) {
  return <div>{title}</div>;
}

Page.getInitialProps = async ctx => {
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve({
          title: "Hello World"
        }),
      1e3
    );
  });
};

export default Page;
```

## `context` 对象

`getInitialProps` 接受一个 `context` 对象, 包含如下属性：

- `isServer` - 是否运行在服务端
- `pathname` - 当前 url 的路径
- `query` - 路由路径参数
- `params` - url 请求参数
- `redirect` - 重定向函数
  - `redirect('/target')` 
  - `redirect(301, '/target')`
- `appContext` - 应用上下文对象，伴随者整个应用的生命周期
  - `req` - HTTP request object (server only)



 - ctx Tom
   
 - matchRoutes Tom
 - getRuntimeConfig Tom
 - getPageData Tom
 - App Tom
 - Head Tom
 - dynamic Tom
 - useParams, Tom
 - useRouter, Tom
 - useCurrentRoute, Tom
 - Link, Tom
 - RouterView, Tom
 - withRouter Tom
