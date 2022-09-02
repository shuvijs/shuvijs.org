---
id: plugin
title: Plugin
sidebar_position: 05
---

## What is plugin?

Shuvi.js has a built-in plugin system, which connects the running process of the entire framework through a series of lifecycle hooks, and allows developers and users to add custom behaviors to the hooks to add more functions.

There are 3 types of plugins which are corePlugin, serverPlugin and runtimePlugin.

- corePlugin: modify the process of building
- serverPlugin: modify bahavior of the server
- runtimePlugin: modify or extend runtime component and context

## Write plugins

These plugins can be used alone or in combination to achieve certain functions.

For example, if we want to develop a plugin that automatically introduce redux store to the app, all these 3 plugins are needed together to make this feature work.

No matter which plugins are used in **the final plugin**, we hope that **the final plugin** can provide a unified and convenient way of exporting and configuring.

In this way, we stipulate a specification for writing **the final plugins**, that.

A plugin is a collection of files as the following.


```
pluginDirectory/
├── index.js
├── server.js
├── runtime.js
└── types.d.ts
```

`index.js`, `server.js` and `runtime.js` represent corePlugin, serverPlugin and runtimePlugin.

`types.d.ts` describes what types are extended by this plugin.

These files are not completely required, but are used as needed.

Each plugin file exports a plugin instance object which is created by corresponding creater.

The plugins could be also configured with options. In this way, each plugin exports a function that receives the passed options and returns plugin instance.

If a plugin is provided as an npm package, these 4 files should be listed on 'exports' field at `package.json` as the following.

```json
{
  "exports": {
    ".": "./dist/index.js",
    "./server": "./dist/server.js",,
    "./runtime": "./dist/runtime.js",,
    "./types": "./dist/types.js",
  }
}
```

### CorePlugin

`index.js` exports corePlugin

Example:

```ts title="index.js"
const { createCorePlugin } = require('shuvi')

module.exports = createCorePlugin({
  afterInit: (context) => {
    // do something
  }
}, {
  name: 'corePlugin'
})

// or with options
module.exports = (options) => createCorePlugin({
  afterInit: (context) => {
    // do something
  }
}, {
  name: 'corePlugin'
})
```

### ServerPlugin
`server.js` exports serverPlugin

Example:

```ts title="server.js"
const { createServerPlugin } = require('shuvi')

module.exports = createServerPlugin({
  onListen: ({ port, hostname }, context) => {
    // do something
  }
}, {
  name: 'serverPlugin'
})

// or with options

module.exports = (options) => createServerPlugin({
  onListen: ({ port, hostname }, context) => {
    // do something
  }
}, {
  name: 'serverPlugin'
})

```

### RuntimePlugin
`runtime.js` exports runtimePlugin

Example:

```ts title="runtime.js"
const { createPlugin } = require('@shuvi/platform-shared/lib/runtime')

module.exports = createPlugin({
  init: () => {
    // do something
  }
}, {
  name: 'runtimePlugin'
})

// or with options
module.exports = (options) => createPlugin({
  init: () => {
    // do something
  }
}, {
  name: 'runtimePlugin'
})

```

### Extended Type Declaration & TypeScript Support
If plugin extends some of the plugin hooks or interface, a `types.d.ts` is needed to ensure types correct elsewhere. It means that the extended types will also be useful for `custom-runtime`, `custom-server` and `custom-document`.

And we recommend you to write plugins with TypeScript to get a better writing experience.

```ts title="hooks.ts"
import { createSyncHook } from '@shuvi/hook'
export const extendedHook = createSyncHook<void>()

```

```ts title="server.ts"
import { createServerPlugin } from 'shuvi'
import { extendedHook } from './hooks'

export default createServerPlugin({
  setup({ addHooks } => {
    addHooks({ extendedHook })
  }),
  pageData: appContext => {
    const { test } = appContext;
    return {
      test
    };
  }
})
```

```ts title="runtime.ts"
import { createPlugin } from '@shuvi/platform-shared/lib/runtime'
export default createPlugin({
  getAppContext: ctx => {
    ctx.test = 'test'
    return ctx;
  }
});
```

```ts title="types.ts (will be 'types.d.ts' after compiled)"
import { extendedHook } from './hooks'

declare module '@shuvi/runtime' {
  export interface CustomServerPluginHooks {
    extendedHook: typeof extendedHook
  }

  export interface CustomAppContext {
    test: string
  }
}
```

The above is a complete example with TypeScript. This plugin has a serverPlugin and a runtimePlugin. The serverPlugin extended a `extendedHook`, and the runtimePlugin added a property to `appContext` through the hook `getAppContext`. And the relevant type extensions are also declared in `types.ts` which will be compiled as `types.d.ts`.


:::info About module formats
CorePlugin and serverPlugin is needed to be commonjs modules as they will be executed as shuvi starts without being compiling. While runtimePlugins could be whatever es module or commonjs modules because they will be compiled during building of the application.
:::

:::warning About options
If plugin options are set, they will be passed into every plugin generator and get the actual plugin instance. But runtimePlugins runs on client side so that options must be serializable variable.
:::

For more detailed plugin api, please refer to [reference/plugin](../reference/plugin/hook-api.md).

## Configure plugins
As long as plugin is ready, those plugins could be configured at `shuvi.config.js`.

If the plugin is a package, please ensure it is installed in the project.
```js title="shuvi.config.js"
export default {
  plugins: [
    'path/to/pluginDirectory',
    'plugin-package-name'
  ]
```

If plugins have options, they should be configured as
```js title="shuvi.config.js"
export default {
  plugins: [
    ['path/to/pluginDirectory', 'options'],
    ['plugin-package-name', { options: { someFields: 'someFields' } }]
  ]
}
```

For more detailed plugin configuring api, please refer to [api/shuvi.config.js/plugin](../reference/config.md#plugins).

