---
id: corePlugin-api
title: CorePlugin API
sidebar_position: 1
---

To create a corePlugin, use

```ts
import { createCorePlugin } from 'shuvi'
```

## Context

The context stores a series of useful data and utils and can be visit in the last parameter of every hook handler. 

#### `mode`

Current NodeEnv mode

- type: `'development' | 'production'`
  
#### `paths`

A series of path viriables.

- type: `IPaths`
  ```ts
  interface IPaths {
    rootDir: string;
    buildDir: string;
    // dir to store shuvi's artifacts
    privateDir: string;
    // dir to store shuvi generated src files
    appDir: string;
    // dir to runtime libraries
    runtimeDir: string;
    //resources file
    resources: string;
    // user src dir
    srcDir: string;
    // functional dirs
    pagesDir: string;
    // api dirs
    apisDir: string;
    publicDir: string;
  }
  ```

#### `config`

Current shuvi config

- type: [API Reference / shuvi.config.js](./../config.md)

#### `phase`

Current working phase

- type:
  ```ts
  type IPhase =
  | 'PHASE_PRODUCTION_BUILD'
  | 'PHASE_PRODUCTION_SERVER'
  | 'PHASE_DEVELOPMENT_SERVER'
  | 'PHASE_INSPECT_WEBPACK'
  ```

### assetPublicPath

publicPath

- type: `string`

#### `pluginRunner`

An object containing every hook runner.

Example:
```ts
context.pluginRunner[hookName]()              // if initialValue and extraArg are void
context.pluginRunner[hookName](extraArg)      // if initialValue is void
context.pluginRunner[hookName](initialValue)  // if extraArg is void
```

#### `resolveAppFile`

A util method a resolve files under `paths.appDir`.

- type:
  ```ts
  (...paths: string[]) => string
  ```

#### `resolveUserFile`

A util method a resolve files under `paths.srcDir`.

- type:
  ```ts
  (...paths: string[]) => string
  ```

#### `resolveBuildFile`

A util method a resolve files under `paths.buildDir`.

- type:
  ```ts
  (...paths: string[]) => string
  ```

#### `resolvePublicFile`

A util method a resolve files under `paths.publicDir`.

- type:
  ```ts
  (...paths: string[]) => string
  ```

#### `getAssetPublicUrl`

A util method a resolve files under `assetPublicPath`.

- type:
  ```ts
  (...paths: string[]) => string
  ```

## Hooks
### `afterInit`

will be executed after internal api initializes.

- hookType: `AsyncParallelHook`
- initialValue: `void`
- extraArg: `void`

### `afterBuild`

will be executed after `shuvi build` is done.

- hookType: `AsyncParallelHook`
- initialValue: `void`
- extraArg: `void`
- 
### `afterDestroy`
will be executed after shuvi process ends.

- hookType: `AsyncParallelHook`
- initialValue: `void`
- extraArg: `void`
- 
### `afterBundlerDone`
will be executed after all webpack bundler target are done.

- hookType: `AsyncParallelHook`
- initialValue: `BundlerDoneExtra`
  ```ts
  type BundlerDoneExtra = {
    first: boolean;
    stats: webpack.MultiStats;
  };
  ```
- extraArg: `void`


### `afterBundlerTargetDone`
will be executed after each webpack bundler target is done.

- hookType: `AsyncParallelHook`
- initialValue: `BundlerTargetDoneExtra`
  ```ts
  type BundlerTargetDoneExtra = {
    first: boolean;
    name: string;
    stats: webpack.Stats;
  };
  ```
- extraArg: `void`

### `configWebpack`

Will be executed at bundler initializing to config every webpack bundler target. Different targets can be identified by `name`.

- hookType: `AsyncSeriesWaterfallHook`
- initialValue: `WebpackChain`
- extraArg: `ConfigWebpackAssistant`
  ```ts
  type ConfigWebpackAssistant = {
    name: string;
    mode: 'development' | 'production';
    webpack: Webpack;
    helpers: {
      addExternals: (chain: WebpackChain, externalsFn: ExternalsFunction) => void;
    };
  };

  type ExternalsFunction = (
    data: { context: string; request: string },
    callback: (err: Error | null, result: string | undefined) => void
  ) => void;
  ```
### `addExtraTarget`

Add extra webpack bundler target.

- hookType: `AsyncParallelHook`
- initialValue: `ExtraTargetAssistant`
  ```ts
  type ExtraTargetAssistant = {
    createConfig(options: IWebpackConfigOptions): WebpackChain;
    mode: 'development' | 'production';
    webpack: Webpack;
  };

  interface IWebpackConfigOptions {
    name: string;
    node: boolean;
    entry: {
      [x: string]: string | string[];
    };
    include?: string[];
    outputDir: string;
    webpackHelpers: {
      addExternals: (chain: WebpackChain, externalsFn: ExternalsFunction) => void;
    };;
  }
  ```
- extraArg: `void`
- returnType: `Target`
  ```ts
  interface Target {
    name: string;
    chain: WebpackChain;
  }
  ```

### `addResource`

To add runtime resources. Usually, these resources can be visit by server through `'@shuvi/service/lib/resources'`.

- hookType: `AsyncParallelHook`
- initialValue: `void`
- extraArg: `void`
- returnType: `Resources | Resources[]`
  ```ts
  type Resources = [string, string | undefined]
  ```
### `addRuntimeFile`

To add runtime files before bundler starts. Usually, these files will be placed under participate in the compiling. These files will be added to `./shuvi/app/files` and could be visited through `'@shuvi/app/files/${name}'`

- hookType: `AsyncParallelHook`
- initialValue: `void`
- extraArg: `AddRuntimeFileUtils`
  ```ts
  type AddRuntimeFileUtils = {
    createFile: (options: CreateFileOption) => FileOptions;
    getAllFiles: (dependencies: string | string[]) => string[];
  };

  type CreateFileOption = {
    name: string;
    content: () => string;
    dependencies?: string | string[];
  };
  ```
- returnType: `FileOptions | FileOptions[]`
  
### `addRuntimeService`
To add runtime services or library for user. These services can be used through `'@shuvi/runtime'` or  `'@shuvi/runtime/${filepath}'`

- hookType: `AsyncParallelHook`
- initialValue: `void`
- extraArg: `void`
- returnType: `RuntimeService | RuntimeService[]`
  ```ts
  type RuntimeService = {
    source: string;
    exported: string;
    filepath?: string;
  };
  ```

### `appRoutes`

To modify app routes

- hookType: `AsyncSeriesWaterfallHook`
- initialValue: `IUserRouteConfig`
- extraArg: `void`

  ```ts
  interface IUserRouteConfig {
    children?: IUserRouteConfig[];
    name?: string;
    component?: string;
    middlewares?: string[];
    redirect?: string;
    path: string;
    id?: string;
  }
  ```
- extraArg: `void`


## Extending types

The type of corePlugin hooks can be extended as the following example:

```ts title="types.d.ts"
declare module '@shuvi/runtime' {
  export interface CustomCorePluginHooks {
    extendedHookExample: typeof extendedHookExample
  }
}
```

