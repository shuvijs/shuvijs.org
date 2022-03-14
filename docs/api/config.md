---
id: config
title: shuvi.config.js
sidebar_position: 4
---

# Config

Shuvi uses a **`shuvi.config.js`** or **`shuvi.config.ts`** under root directory to customize project configurations.
The config is an object and its type can be inferred by a `defineConfig` method:

```typescript title="shuvi.config.js"
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

todo: need to update

## presets

- Type: `Presets[]`
- Default: `[]`

Config a set of plugins.

## proxy

- Type: `object`
- Default: `undefined`

Config Api proxies.

```js title="shuvi.config.js"
export default {
  proxy: {
    '/api': {
      'target': 'http://api.host.com/',
      'pathRewrite': { '^/api' : '' },
    },
  },
```

## runtimeConfig

Set runtime variables which can be read on both server-side and client-side.

```js title="shuvi.config.js"
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

```js title="shuvi.config.js"
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

```ts
export interface Route {
  children?: Route[];
  name?: string;
  component?: string;      
  middlewares?: string[];
  redirect?: string;
  path: string;
  id?: string;
}
```

Specify page routes expicitly instead of using convention routing.

```js title="shuvi.config.js"
export default {
  routes: [
    {
      path: '/',
      component: 'index',
      children: [
        { path: '/hello', redirect: '/path/to/hello' },
        { path: '/user', component: 'user' },
      ],
    },
  ],
};
```

The `path` will be resolved based on `src/pages` directory.


## apiRoutes

- Type: `ApiRoute[]`
- Default: `undefined`

```ts
export interface ApiRoute {
  path: string;
  apiModule: string;
}
```

Specify api routes expicitly instead of using convention routing.

## platform

- Type: `Platform[]`
- Default: 
  ```js
  {
    name: 'web',
    framework: 'react',
    target: 'ssr'
  }
  ```
```ts
export interface Platform {
  name: string;
  framework?: string;
  target?: string;
}
```

Specify what platform and framework are used in this project.
Need to update.

## target

- Type: `'ssr'`, `'spa'`
- Default: `undefined`
  
If set, this options will be an alias of
```
{
  name: 'web',
  framework: 'react',
  target
}
```

## analyze
- Type: `Boolean`
- Default: `false`

Set true to enable Webpack Bundle Analyzer.

## experimental
- Type: `Object`
- Default: `undefined`

Enable series of expermental features.

### experimental.parcelCss
- type: `Boolean`
  
Set true to use parcel-css-loader
