---
id: shuvi-runtime-app
title: "@shuvi/runtime/app"
---

## InitFunction

```ts
function init(): void | Promise<void>;
```

## AppContextFunction

```ts
function appContext(appContext: AppContext): void | Promise<void>;
```

- see [AppContext](./shuvi-runtime.md#appcontext)

## AppComponentFunction

```ts
function appComponent<T>(App: T, appContext: AppContext): Promise<T>;
```

- see [AppContext](./shuvi-runtime.md#appcontext)

## DisposeFunction

```ts
function dispose(): void | Promise<void>;
```
