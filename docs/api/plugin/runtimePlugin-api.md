---
id: runtimePlugin-api
title: RuntimePlugin API
sidebar_position: 3
---

To create a runtimePlugin, use

```ts
import { createRuntimePlugin } from '@shuvi/platform-shared/lib/runtime'
```

## Context

Currently runtimePlugin has no context.

## Hooks

### `init`

will be executed when runtime component inits.

- hookType: `AsyncParallelHook`
- initialValue: `void`
- extraArg: `void`
- returnType: `void`

### `getAppContext`

modify appContext

- hookType: `AsyncSeriesWaterfallHook`
- initialValue: `AppContext`
  ```ts
  interface AppContext extends CustomAppContext {
    store?: any;
    pageData?: any;
  }
  ```
- extraArg: `void`

- type extending: `AppContext` can be extended. And its type shoule be extended as the following example:
  ```ts title="runtime.ts"
  export default createRuntimePlugin({
    appContext: (appContext) => {
      appContext.test = 'test'
    }
  })
  ```
  ```ts title="types.ts"
  declare module '@shuvi/runtime' {
    export interface CustomAppContext {
      test: string
    }
  }
  ```


### `getAppComponent`

modify user custom app component

- hookType: `AsyncSeriesWaterfallHook`
- initialValue: `any` (React root component)
- extraArg: `AppContext`

Example:
```ts
export default createRuntimePlugin({
  getAppComponent: UserApp => {
    function AppComponent(props) {
      return (
        <div>
          <div>This is getAppComponent</div>
          <UserApp {...props} />
        </div>
      );
    }
    if (UserApp.getInitialProps)
      AppComponent.getInitialProps = UserApp.getInitialProps;
    return AppComponent;
  }
})
```

### `getRootAppComponent`

modify original root app component

- hookType: `AsyncSeriesWaterfallHook`
- initialValue: `any` (React root component)
- extraArg: `AppContext`

Example:
```tsx
export default createRuntimePlugin({
  getRootAppComponent: App => {
    function RootAppComponent(props) {
      return (
        <div>
          <div>This is getRootAppComponent</div>
          <App {...props} />
        </div>
      );
    }
    if (App.getInitialProps)
      RootAppComponent.getInitialProps = App.getInitialProps;
    return RootAppComponent;
  }
})
```

:::info Differences between the two hooks
Please refer to [Guides/Custom App](../../guides/custom-behaviors/custom-app-context.md)
:::

### `dispose`

will be executed when runtime component disposes.


- hookType: `AsyncParallelHook`
- initialValue: `void`
- extraArg: `void`
- returnType: `void`

## Extending types

The type of `AppContext` can be extended as the following example:

```ts title="types.d.ts"
declare module '@shuvi/runtime' {
  export interface CustomAppContext {
    someNewField: any
  }
}
```
