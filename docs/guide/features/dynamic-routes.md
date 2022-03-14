---
id: dynamic-routes
title: dynamic routes
description: Dynamic Routes are pages and apis that allow you to add custom params to your URLs.
---

# Dynamic Routes


Defining routes by using predefined paths is not always enough for complex applications. In shuvi you can add brackets to a page (`[param]`) to create a dynamic route (a.k.a. url slugs, pretty urls, and others).

Consider the following page `pages/post/[pid].js`:

```jsx
import { useCurrentRoute } from '@shuvi/app'

const Post = () => {
  const { params } = useCurrentRoute()
  const { pid } = params;

  return <p>Post: {pid}</p>
}

export default Post
```

Any route like `/post/1`, `/post/abc`, etc. will be matched by `pages/post/[pid].js`. 

For example, the route `/post/abc` will have the following `params` object:

```json
{ "pid": "abc" }
```

Similarly, the route `/post/abc?foo=bar` will have the following `params` and `query` object:

```javascript
// params
{"pid": "abc"}
// query
{ "foo": "bar" }
```

Multiple dynamic route segments work the same way. The page `pages/post/[pid]/[comment].js` will match the route `/post/abc/a-comment` and its `params` object will be:

```json
{ "pid": "abc", "comment": "a-comment" }
```

### Catch all routes

Dynamic routes can be extended to catch all paths by adding three dots (`...`) inside the brackets. For example:

- `pages/post/[...slug].js` matches `/post/a`, but also `/post/a/b`, `/post/a/b/c` and so on.

> **Note**: You can use names other than `slug`, such as: `[...param]`

Matched parameters will be sent as a query parameter (`slug` in the example) to the page, and it will always be an array, so, the path `/post/a` will have the following `params` object:

```json
{ "slug": ["a"] }
```

And in the case of `/post/a/b`, and any other matching path, new parameters will be added to the array, like so:

```json
{ "slug": ["a", "b"] }
```

### Optional catch all routes

Catch all routes can be made optional by including the parameter in double brackets (`[[...slug]]`).

For example, `pages/post/[[...slug]].js` will match `/post`, `/post/a`, `/post/a/b`, and so on.

The main difference between catch all and optional catch all routes is that with optional, the route without the parameter is also matched (`/post` in the example above).

The `params` objects are as follows:

```json
{ } // GET `/post` (empty object)
{ "slug": ["a"] } // `GET /post/a` (single-element array)
{ "slug": ["a", "b"] } // `GET /post/a/b` (multi-element array)
```

## general rules

files under `src/pages`, file path `pages/*/*.js`

| path                           | route                    | matched url                              |
| ------------------------------ | ------------------------ | ---------------------------------------- |
| pages/post/create.js           | /post/create             | /post/create                             |
| pages/post/[pid].js            | /post/:pid               | /post/1, /post/abc                       |
| pages/post/[[pid]].js          | /post/:pid?              | /post, /post/1, /post/abc                |
| pages/post/[...pid].js         | /post/:pid+              | /post/1/2, /post/a/b/c                   |
| pages/post/[[...pid]].js       | /post/:pid*              | /post, /post/1/2, /post/a/b/c            |


files under `src/apis`, file path `apis/*/*.js`
```tip
route prefix can be defined in `shuviConfig` `apiConfig.prefix`, default string`'api'`
```

| path                           | route                        | matched url                                  |
| ------------------------------ | ---------------------------- | -------------------------------------------- |
| apis/post/create.js            | /api/post/create             | /api/post/create                             |
| apis/post/[pid].js             | /api/post/:pid               | /api/post/1, /api/post/abc                   |
| apis/post/[[pid]].js           | /api/post/:pid?              | /api/post, /api/post/1, /api/post/abc        |
| apis/post/[...pid].js          | /api/post/:pid+              | /api/post/1/2, /api/post/a/b/c               |
| apis/post/[[...pid]].js        | /api/post/:pid*              | /api/post, /api/post/1/2, /api/post/a/b/c    |
