---
id: plugin
title: Plugin
---

# Config

Shuvi uses a **`shuvi.config.js`** or **`shuvi.config.ts`** under root directory to customize different bahavior.
The config is an object and its type can be infered by a `defineConfig` method:

```typescript  title="shuvi.config.js"
import { defineConfig } from 'shuvi'

export default defineConfig({
  ssr: true
})
```


## ssr

- Type: `boolean`
- Default: `true`

Config whether to enable server rendering.


## outputPath

- Type: `string`
- Default: `'dist'`

Specify output directory of the bundled files.

## publicPath

- Type: `string`
- Default: `'/_shuvi'`


Config publicPath of assets. This option is an equivalent of `output.publicPath` in Webpack.


## plugins

- Type: `Plugin[]`
- Default: `[]`

Config plugins

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

Config Api proxies.

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

Set runtime variables which can be read on both server-side and client-side.

```js
// shuvi.config.js
export default {
  runtimeConfig: {
    staticFolder: '/static',
  }
}
```

These runtimeConfig could be read via:
```js
import { getRuntimeConfig } from '@shuvi/app'

const { staticFolder } = getRuntimeConfig()
// Will be available on both server-side and client-side
console.log(staticFolder)

export default function MyImage() {
  return (
    <div>
      <img src={`${staticFolder}/logo.png`} alt="logo" />
    </div>
  )
}
```

## rootDir

- Type: `string`
- Default: `process.cwd()`

Set root directory of the application.

## router

- Type: `object`
- Default: `{ history: 'auto' }`

Set router options. There is one option `history` indicates historyMode of the router.

```js
export default {
  router: {
    hisotry: 'auto', // 'auto' | 'browser' | 'hash'
  },
};
```
* While `hisotry` set to `auto`, it will be `browser` when `ssr` is `true` and `hash` when `ssr` is `false`.


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


