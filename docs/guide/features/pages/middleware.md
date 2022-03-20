---
id: middleware
title: Middleware
---

# Middleware

Middleware enables you to use code over configuration. This gives you full flexibility in shuvi, because you can run code before a request is completed. 

Based on the user's incoming request, you can modify the response by rewriting, redirecting, adding headers.

## Usage

Middleware is created by using a `middleware` function that lives inside a `_middleware` file.

1. Create a `_middleware.ts` file under your `/pages` directory.

1. Finally, export a middleware function from the `_middleware.ts` file.

```jsx
// pages/_middleware.ts

import { RuntimeServer } from '@shuvi/runtime'

export function middleware(req, res, next) {
  console.log('req.url :', req.url);
  return next();
}
```

## Execution Order

If your Middleware is created in `/pages/_middleware.ts`, it will run on all routes within the `/pages` directory. The below example assumes you have `about.tsx` and `teams.tsx` routes.

```bash
- package.json
- /pages
    _middleware.ts # Will run on all routes under /pages
    index.tsx
    about.tsx
    teams.tsx
```

If you _do_ have sub-directories with nested routes, Middleware will run from the top down. For example, if you have `/pages/about/_middleware.ts` and `/pages/about/team/_middleware.ts`, `/about` will run first and then `/about/team`. The below example shows how this works with a nested routing structure.

```bash
- package.json
- /pages
    index.tsx
    - /about
      _middleware.ts # Will run first
      about.tsx
      - /teams
        _middleware.ts # Will run second
        teams.tsx
```
