---
id: serverPlugin-api
title: ServerPlugin API
sidebar_position: 2
---

To create a serverPlugin, use

```ts
import { createServerPlugin } from 'shuvi'
```

## Context

The context stores a series of useful data and utils and can be visit in the last parameter of every hook handler.

The context of serverPlugin has all the fields of the context of corePlugin, and the following field.

#### `serverPluginRunner`

An object containing every hook runner.

Example:
```ts
context.serverPluginRunner[hookName]()              // if initialValue and extraArg are void
context.serverPluginRunner[hookName](extraArg)      // if initialValue is void
context.serverPluginRunner[hookName](initialValue)  // if extraArg is void
```

### `onListen`

will executed on server listening.

- hookType: `AsyncParallelHook`
- initialValue: `{ port: number; hostname?: string }`
- extraArg: `void`
- returnType: `void`

### `addProxy`

add local api proxy, usually works at development mode.
- hookType: `AsyncParallelHook`
- initialValue: `void`
- extraArg: `void`
- returnType: [ProxyOptions](https://github.com/chimurai/http-proxy-middleware#http-proxy-options) | [ProxyOptions](https://github.com/chimurai/http-proxy-middleware#http-proxy-options)[]

Example:
```ts
export default createServerPlugin({
  addProxy: () => {
    const isDev = process.env.NODE_ENV === 'development'
    return isDev ? {
      context: (pathname) => /^\/api/.test(pathname),
      target: process.env.API_HOST,
    } : []
  }
})
```

### `addMiddleware`

add server middlewares with express-style.

- hookType: `AsyncParallelHook`
- initialValue: `void`
- extraArg: `void`
- returnType: `IServerMiddleware | IServerMiddleware[]`
  ```ts
  type IServerMiddleware = IMiddlewareHandler | 
    { 
      path: string; 
      handler: IMiddlewareHandler 
    };

  type IMiddlewareHandler = 
    (res: IRequest, req: http.ServerResponse, next: (err?: any) => void)
      => void | Promise<void>

  interface IRequest extends http.IIncomingMessage {
    url: string;
    pathname: string;
    query: Record<string, any>;
    params: Record<string, any>;;
    headers: http.IncomingHttpHeaders;
  }

  interface IResponse extends http.ServerResponse {}
  ```

Example:
```ts
export default createServerPlugin({
  addProxy: () => [{
    path: 'test',
    handler: (_, _, next) => {
      console.log(1);
      next();
    }
  }]
})
```

### `renderToHTML`

modify how to render app component to html

- hookType: `AsyncSeriesWaterfallHook`
- initialValue: `IRenderToHTML`
  ```ts
  type IRenderToHTML = (
    req: http.IncomingMessage,
    res: http.ServerResponse
  ) => Promise<string | null>;
  ```
- extraArg: `void`

Example:
```ts
export default createServerPlugin({
  renderToHTML: renderToHTML => {
    return async (req, res) => {
      const html = await renderToHTML(req, res);
      console.log('custom-renderToHTML', html);
      return html;
    };
  }
})
```

### `pageData`

Add properties to `pageData` object.

- hookType: `AsyncParallelHook`
- initialValue: `void`
- extraArg: `AppContext` (same as [RuntimePlugin API/getAppContext](./runtimePlugin-api.md#getappcontext))
- returnType: `Record<string, unknown>`

Example:
```ts
export default createServerPlugin({
  pageData: appContext => {
    const { test } = appContext;
    return {
      test
    };
  }
})
```

## Extending types

The type of serverPlugin hooks can be extended as the following example:

```ts title="types.d.ts"
declare module '@shuvi/runtime' {
  export interface CustomServerPluginHooks {
    extendedHookExample: typeof extendedHookExample
  }
}
```