---
sidebar_position: 03
id: Middleware
---

Middleware enables you to use code over configuration. This gives you full flexibility in shuvi, because you can run code before a request is completed.

Based on the user's incoming request, you can modify the response by rewriting, redirecting, adding headers.

## Usage

Middleware is created by using a `middleware` function that lives inside a `middleware.js` file.

1. Create a `middleware.ts` file under your `routes` directory.

1. Finally, export a middleware function from the `middleware.ts` file.

```tsx
// routes/middleware.ts

import { RuntimeServer } from '@shuvi/runtime'

export const middleware:RuntimeServer.IRequestHandlerWithNext = function (req, res, next) {
  console.log('req.url :', req.url);
  return next();
}
```
> Details of `RuntimeServer.IRequestHandlerWithNext` types is [here](../../api/runtime/modules/RuntimeServer.md#irequesthandlerwithnext)

## Execution Order

If your Middleware is created in `/src/routes/middleware.ts`, it will run on all routes within the `routes` directory. The below example assumes you have `routes/about/page.tsx` and `routes/teams/page.tsx` routes.

```bash
- package.json
- /routes
    middleware.ts # Will run on all routes under /routes
    page.tsx
    about
      page.tsx
    teams
      page.tsx
```

If you _do_ have sub-directories with nested routes, middleware will run from the top down. For example, if you have `routes/about/middleware.ts` and `routes/about/team/middleware.ts`, `/about` will run first and then `/about/team`. The below example show how this works with a nested routing structure.

```bash
- package.json
- /routes
    page.tsx
    - /about
      middleware.ts # Will run first
      about
        page.tsx
      - /teams
          middleware.ts # Will run second
          page.tsx
```

## Config

You can also define middleware routing in shuvi.config.js.

**example**:

```js
// shuvi.config.js
export default {
  middlewareRoutes: [
    // start with /a
    {
      path: '/a/:rest*',
      middlewares: ['a/m.js']
    },
    // only /a/a1
    {
      path: '/a/a1',
      middlewares: ['a/a1/m.js']
    },
    // catch all
    {
      path: '/',
      middlewares: ['m.js']
    }
  ]
};
```
