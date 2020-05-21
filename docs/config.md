---
id: config
title: 配置
---

## env

- Type: `object`
- Default: `{}`

配置打包时替换的环境变量值。例如：
```js
module.exports = {
  env: {
    customKey: 'my-value',
  }
}
```

在代码种可通过 `process.env.customKey` 访问：

```jsx
function Page() {
  return <h1>The value of customKey is: {process.env.customKey}</h1>
}

export default Page
```

## outputPath

- Type: `string`
- Default: `dist`

指定输出路径。

## publicPath

- Type: `string`
- Default: `/_shuvi`

配置静态资源的 `publicPath`。此路径会被添加到静态文件的访问路径前。

## plugins

- Type: `Plugin[]`
- Default: `[]`

配置插件。

```js
module.exports = {
  plugins: [
    // npm 依赖
    'plugin',
    // 相对路径
    './plugin',
    // 绝对路径
    `${__dirname}/plugin.js`,
    // 配置选项
    ['plugin', { optionA: 'valueA' }],
    // inline plugin
    api => {
      // do something with api
    }
  ],
};
```

## proxy

- Type: `object`
- Default: `undefined`

配置代理。

```js
module.exports = {
  proxy: {
    '/api': {
      'target': 'http://api.host.com/',
      'pathRewrite': { '^/api' : '' },
    },
  },
```

## runtimeConfig

设置运行时变量。示例：
```js
module.exports = {
  env: {
    staticFolder: '/static',
  }
}
```

通过如下方式访问：
```js
import { getRuntimeConfig } from '@shuvi/app'

const { staticFolder } = getRuntimeConfig()
// Will be available on both server-side and client-side
console.log(publicRuntimeConfig.staticFolder)

export default function MyImage() {
  return (
    <div>
      <img src={`${publicRuntimeConfig.staticFolder}/logo.png`} alt="logo" />
    </div>
  )
}
```

## rootDir

- Type: `string`
- Default: `process.cwd()`

设置应用程序的根目录。

## router

- Type: `object`
- Default: `{ history: 'auto' }`

```js
module.exports = {
  router: {
    hisotry: 'auto', // 'auto' | 'browser' | 'hash'
  },
};
```
* 当 `hisotry` 为 `auto` 时，启用了 ssr 则为 `browser`，反之则为 `hash`。


## routes

- Type: `Route[]`
- Default: `undefined`

配置和 `react-router` 基本一致。

```js
module.exports = {
  routes: [
    {
      path: '/',
      component: 'index',
      routes: [
        { path: '/hello', redirect: '/path/to/hello' },
        { path: '/user', component: 'user' },
      ],
    },
  ],
};
```

相对路径会基于 `src/pages` 目录解析。

## ssr

- Type: `boolean`
- Default: `true`

配置是否开启服务端渲染。
