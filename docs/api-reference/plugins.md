---
id: plugins
title: Plugins
---

## Overview

Shuvi has 3 types of plugin which are corePlugin, serverPlugin and runtimePlugin.

Each plugin consists of a series of hooks.

## Hook

The basic unit of plugin.

There are 5 types of hook. Each of them is an pipline that constrains how a series of hook handlers work.

More detailed, every hook has a `use` and a `run` method. The outside hook logic could be describe as a hook handler and could be added by `use` method.

After adding hook handlers, hook could be called to run these hook logic through `run` method and get the result.

The following is an easiest example of `SyncHook`.

Example:
```ts title="easiest-example.ts"
import { createSyncHook } from '@shuvi/hook'
const hook = createSyncHook<void>();
hook.use(() => {
  console.log(1)
})
hook.use(() => {
  console.log(2)
})
hook.run()
// will log 1
// will log 2
```

Generally, every hook conceptually has 3 values: `initialValue`, `extraArg` and `returnValue`. For a hook handler, `initialValue` and `extraArg` are first 2 parameters and `returnValue` is the return value. The `extraArg` is an assistant parameter. When a hook runs, `initialValue` and `extraArg` shoule be passed as parameters. And `returnValue` will be processed according to the type of hook.

In the following example, a `SyncHook` that `initialValue`, `extraArg` and `returnValue` are all number type is defined. When this hook runs, each of return value of the handlers is collected as an array to be the final result.

Example:
```ts title="3-value-example.ts"
import { createSyncHook } from '@shuvi/hook'
const hook = createSyncHook<number, number, number>();
hook.use((initialValue, extraArg) => {
  return initialValue + extraArg
})
hook.use((initialValue, extraArg) => {
  return initialValue + extraArg + 1
})
const result = hook.run(1, 2)
console.log(result)
// log [3, 4]
```


### SyncHook

The easiest hook. Every hook handler should be sync function. When a `SyncHook` runs, every hook handler will be executed in turn and each of return value of the handlers is collected as an array to be the result.

- hook type: 
  ```ts
  SyncHook<I = void, E = void, R = void>
  ```
- handler type: 
  ```ts
  RemoveVoidParameters<(initalValue: I, extraArg: E) => R>
  ```
- runner type:
  ```ts
  RemoveVoidParameters<(initalValue: I, extraArg: E) => R[]>
  ```
:::info About `Remove Void Parameters`
The type `RemoveVoidParameters` will remove void parameters of the passed-in type to optimize TypeScript writing experience.
:::

Example:
```ts title="SyncHook-example.ts"
import { createSyncHook } from '@shuvi/hook'
const hook1 = createSyncHook<number, number, number>();
const hook2 = createSyncHook<number, void>();

hook1.use((i, e) => {
  return i + e + 1
})
hook1.use((i, e) => {
  return i + e + 2
})
const result = hook1.run(1, 2)
// result will be [4, 5]

hook2.use((i) => {
  console.log(i + 1)
})
hook2.use((i) => {
  console.log(i + 2)
})
hook2.run(1)
// log 2
// log 3
```

### SyncBailHook

When a syncBailHook runs, every hook handler will be executed in turn. If a hook handler returns a non-undefined value, the process will abort and the return value will be the result of the hook.


- hook type: 
  ```ts
  SyncBailHook<I = void, E = void, R = I>
  ```
- handler type: 
  ```ts
  RemoveVoidParameters<(initalValue: I, extraArg: E) => R | void | undefined>
  ```
- runner type:
  ```ts
  RemoveVoidParameters<(initalValue: I, extraArg: E) => R | void | undefined>
  ```

Example:
```ts title="SyncBailHook-example.ts"
import { createSyncHook } from '@shuvi/hook'
const hook = createSyncBailHook<number, void>();
hook.use((i) => {
  // do not return
  console.log('1st handler')
})
hook.use((i, e) => {
  console.log('2nd handler')
  return i + 1
})
hook.use((i) => {
  // do not return
  console.log('3rd handler')
})
const result = hook.run(1)
// log '1st handler'
// log '2nd handler'
// result will be 2
```

### SyncWaterfallHook

When a `SyncWaterfallHook` runs, every hook handler will be executed in turn. The type of `initialValue` and `returnValue` are the same. The return value of the previous hook handler will be the initial value of the next hook handler. And the return value of the last hook handler will be the result of the hook.

- hook type: 
  ```ts
  SyncWaterfallHook<I, E = void>
  ```
- handler type: 
  ```ts
  RemoveVoidParameters<(initalValue: I, extraArg: E) => I>
  ```
- runner type:
  ```ts
  RemoveVoidParameters<(initalValue: I, extraArg: E) => I>
  ```

Example:
```ts title="SyncWaterfallHook-example.ts"
import { createSyncWaterfallHook } from '@shuvi/hook'
const hook = createSyncWaterfallHook<number, void>();
hook.use((i) => i + 1)
hook.use((i) => i + 2)
hook.use((i) => i + 3)

const result = hook.run(1)
// result will be 7
```

### AsyncParallelHook

Almost same as `SyncHook`, but hook handler could be async function. When the hook runs, each of return value of the async handlers is collected as an array to be the result.

- hook type: 
  ```ts
  AsyncParallelHook<I = void, E = void, R = void>
  ```
- handler type: 
  ```ts
  RemoveVoidParameters<(initalValue: I, extraArg: E) => R | Promise<R>>
  ```
- runner type:
  ```ts
  RemoveVoidParameters<(initalValue: I, extraArg: E) => Promise<R[]>>
  ```

Example:
```ts title="AsyncParallelHook-example.ts"
import { createSyncHook } from '@shuvi/hook'
const hook1 = createAsyncParallelHook<number, number, number>();
const hook2 = createAsyncParallelHook<number, void>();

hook1.use(async (i, e) => {
  return i + e + 1
})
hook1.use((i, e) => {
  return i + e + 2
})
const result = await hook1.run(1, 2)
// result will be [4, 5]

hook2.use(async (i) => {
  console.log(i + 1)
})
hook2.use((i) => {
  console.log(i + 2)
})
await hook2.run(1)
// log 2
// log 3
```

### AsyncSeriesWaterfallHook

Almost same as `SyncWaterfallHook`, but hook handler could be async function.

- hook type: 
  ```ts
  AsyncSeriesWaterfallHook<I, E = void>
  ```
- handler type: 
  ```ts
  RemoveVoidParameters<(initalValue: I, extraArg: E) => I | Promise<I>>
  ```
- runner type:
  ```ts
  RemoveVoidParameters<(initalValue: I, extraArg: E) => Promise<I>>
  ```

Example:
```ts title="AsyncWaterfallHook-example.ts"
import { createAsyncWaterfallHook } from '@shuvi/hook'
const hook = createAsyncWaterfallHook<number, void>();
hook.use((i) => i + 1)
hook.use(async (i) => i + 2)
hook.use((i) => i + 3)

const result = await hook.run(1)
// result will be 7
```

## HookManager

### Overview

Hook manager can manage a series of hooks and provide more functions such as setting context and extending hooks. In this way, a plugin mechanism can be established based on the hook manager.


- `HookManager` instance type:
  ```ts
  type HookManager<HM extends HookMap, C, EHM extends HookMap> = {
    createPlugin: (
      pluginHandlers: IPluginHandlers<HM & EHM, C> & {
        setup?: Setup<EHM>;
      },
      options?: PluginOptions
    ) => IPluginInstance<HM & EHM, C>;
    usePlugin: (...plugins: IPluginInstance<HM & EHM, C>[]) => void;
    runner: RunnerType<HM, EHM>;
    setContext: (context: C) => void;
    clear: () => void;
    addHooks: (hook: Partial<EHM>) => void;
    hooks: HM | (HM & EHM);
    getPlugins: () => IPluginInstance<HM & EHM, C>[];
  };
  ```
- `createHookManager` type:
  ```ts
  <HM extends HookMap, C = void, EHM extends HookMap = {}>(
    hookMap: HM, 
    hasContext: boolean = true
  ) => HookManager<HM, C, EHM>
  ```

The function `createHookManager` receives a hookMap which is an object containing a series of hooks, and returns a `HookManager` instance.

A single hook can `use` hook handlers and `run` to get result. A hook manger can also use collections of handlers of various hooks by `usePlugin`, and run each hook to get result by `runner[hookName]`.

And the `collections of handlers of various hooks`, is the so-called plugin.


### Basic Usage

The following is an example:

```ts
const hook1 = createSyncHook<void>();
const hook2 = createSyncHook<number>()
const hooks = { hook1, hook2 };

const manager = createHookManager<typeof hooks, Context>(hooks);
const { createPlugin, setContext, usePlugin, runner } = group;

let number = 1;
const plugin1 = createPlugin({
  hook1: () => {
    number++
  },
  hook2: (i) => {
    console.log(i + 1)
  }
})

const plugin2 = createPlugin({
  hook1: () => {
    number++
  },
  hook2: (i) => {
    console.log(i + 2)
  }
})

usePlugin(plugin1, plugin2);
runner.hook1();
console.log(number)
// log 3
runner.hook2(1);
// log 2
// log 3
```

In this example, a plugin can be created by `createPlugin` method, and can be applied by `usePlugin` method.

Specific hook can be executed by corresponding property of the `runner`. All plugins will be initialized as the first time `runner` is executed.


### Context


Hook manager introduces an important concept, the context, which must be set before any `runner` being executed and can be visit as the last parameter of the hook handler.

```ts
const hook = createSyncHook<number>()
const hooks = { hook };

type Context = {
  hello: number
}

const manager = createHookManager<typeof hooks, Context>(hooks);
const { createPlugin, setContext, usePlugin, runner } = group;

let number = 1;
const plugin2 = createPlugin({
  hook: (i, context) => {
    console.log(i + context.hello + 1)
  }
})

usePlugin(plugin1, plugin2);
setContext({ hello: 1 });
runner.hook2(1);
// log 3
```

:::info About `Remove Void Parameters`
As well as single hooks, the type `RemoveVoidParameters` will remove void parameters in the handlers of `hookManager`, including the `context` parameter.
:::

### Extending Hooks
hooks can be extended by `addHooks` method which can be visited through `setup` method in the first parameter of `createPlugin`. In this way, system functions can also be extended in plugins.

```ts
let hookNumber = 0;
let extraHookNumber = 1;
const hook = createSyncHook<number>();
const extraHook = createSyncHook<number>();

const baseHooks = { hook };
const extraHooks = { extraHook };

const group = createHookManager<typeof baseHooks, void, typeof extraHooks>(
  baseHooks,
  false
);
const { createPlugin, usePlugin, runner, addHooks } = group;
const plugin = createPlugin({
  setup: ({ addHooks } => {
    addHooks(extraHooks)
  })
  hook: (i) => {
    hookNumber += i;
  },
  extraHook: (i) => {
    extraHookNumber *= i;
  }
});
runner.hook(1)
console.log(hookNumber)
// log 1
runner.extraHook(2)
console.log(extraHookNumber)
// log 2
```
## corePlugin

### ICorePluginContext
```ts
type IPluginContext = {
  mode: 'development' | 'production';
  paths: IPaths;
  config: Config;
  phase: IPhase;
  pluginRunner: PluginRunner;
  assetPublicPath: string;
  resolveAppFile(...paths: string[]): string;
  resolveUserFile(...paths: string[]): string;
  resolveBuildFile(...paths: string[]): string;
  resolvePublicFile(...paths: string[]): string;
  getAssetPublicUrl(...paths: string[]): string;
};

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

type IPhase =
  | 'PHASE_PRODUCTION_BUILD'
  | 'PHASE_PRODUCTION_SERVER'
  | 'PHASE_DEVELOPMENT_SERVER'
  | 'PHASE_INSPECT_WEBPACK';

```

### afterInit

will be executed after internal api initializes.

- hookType: `AsyncParallelHook`
- initialValue: `void`
- extraArg: `void`

### afterBuild

will be executed after `shuvi build` is done.

- hookType: `AsyncParallelHook`
- initialValue: `void`
- extraArg: `void`
- 
### afterDestroy
will be executed after shuvi process ends.

- hookType: `AsyncParallelHook`
- initialValue: `void`
- extraArg: `void`
### afterBundlerDone
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
### afterBundlerTargetDone
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

### configWebpack
will be executed at bundler initializing to config each of webpack bundler targets

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
### addExtraTarget
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

### addResource
to add runtime resources.

- hookType: `AsyncParallelHook`
- initialValue: `void`
- extraArg: `void`
- returnType: `Resources | Resources[]`
  ```ts
  type Resources = [string, string | undefined]
  ```
### addRuntimeFile
to add runtime files before bundler starts.

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
  
### addRuntimeService
to add runtime services for user

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

## serverPlugin

### onListen

will executed on server listening.

- hookType: `AsyncParallelHook`
- initialValue: `{ port: number; hostname?: string }`
- extraArg: `void`
- returnType: `void`

### addProxy

add local api proxy, usually works at development mode.
- hookType: `AsyncParallelHook`
- initialValue: `void`
- extraArg: `void`
- returnType: `IProxy`

### addMiddleware



## runtimePlugin

### 