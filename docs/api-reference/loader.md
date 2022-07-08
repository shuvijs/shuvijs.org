---
id: loader
title: Loader
sidebar_position: 6
---

# Loader

See what is loader at [Data Fetching](../guide/data-fetching.md)

## `useLoaderData` Type:
```ts
type UseLoaderData = <T = any>() => T
```

## `loader` Type:

```ts
type Loader<T extends {} = {}> = (
  loaderContenxt: IRouteLoaderContext
) => Promise<T | Response | void | undefined> | T | Response | void | undefined;
```

## loaderContenxt

loaderContenxt is an object containing several useful properties and methods.

### `isServer`

Indicating if current loader is being executed on server side

- type `boolean`

### `pathname`

Current url path

- type `string`

Example:

> If current url is `/xx/yy?hello=world&test=123`,    
> `pathname` will be `/xx/yy`

### `query`

The query object of current url.

- type `object`


Example:

> If current url is `/xx/yy?hello=world&test=123`,     
> `query` will be
> ```js
> {
>   hello: 'world',
>   test: '123'
> }
> ```

### `params`

The params of current url.

If matched routes contains dynamic route, the params of dynamic route will be parsed as this `params` object.

- type `object`

Example:
> If the route is set as `/:foo/:bar` and the current url is `/xx/yy?hello=world&test=123`
> `params` will be
> ```js
> {
>   foo: 'xx',
>   bar: 'yy'
> }
> ```

### `redirect`

make a redirect to another path.

- type
  ```ts
  (toPath: string, status?: number = 302) => Response
  ```

Example:
```tsx
import { Loader } from '@shuvi/runtime';
export const loader: Loader = async ({ redirect }) => {
  return redirect('/target', 301)
};
```

### `error`

Make a redirect to error page.

- type
  ```ts
  (body?: string, statusCode?: number = 500) => Response
  ```

Example:
```tsx
import { Loader } from '@shuvi/runtime';
export const loader: Loader = async ({ redirect }) => {
  return error('not found', 404)
};
```

### `appContext`

Application context object, which is accessiable during the entire lifecycle of application

- type [AppContext](../api-reference/plugin/runtimePlugin-api#getappcontext)
  

### `req`

Current request information. Only available on server side.

- type [http.IncomingMessage](https://nodejs.org/api/http.html#http_class_http_incomingmessage)


