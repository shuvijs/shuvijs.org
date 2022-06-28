---
sidebar_position: 03
id: Dynamic Routes
---

Defining routes by using predefined paths is not always enough for complex applications. In shuvi you can add brackets to a page (`[param]`) to create a dynamic route (a.k.a. url slugs, pretty urls, and others).

Consider the following page `routes/post/[pid]/page.js`:

```jsx
import { useCurrentRoute } from '@shuvi/app'

const Post = () => {
  const { params } = useCurrentRoute()
  const { pid } = params;

  return <p>Post: {pid}</p>
}

export default Post
```

Any route like `/post/1`, `/post/abc`, etc. will be matched by `routes/post/[pid]/page.js`.

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

Multiple dynamic route segments work the same way. The page `routes/post/[pid]/[comment]/page.js` will match the route `/post/abc/a-comment` and its `params` object will be:

```json
{ "pid": "abc", "comment": "a-comment" }
```

## Catch all routes

Dynamic routes can be extended to catch all paths by adding three dots (`...`) inside the brackets. For example:

- `routes/post/[...slug].js` matches `/post/a`, but also `/post/a/b`, `/post/a/b/c` and so on.

> **Note**: You can use names other than `slug`, such as: `[...param]`

Matched parameters will be sent as a query parameter (`slug` in the example) to the page, and it will always be an array, so, the path `/post/a` will have the following `params` object:

```json
{ "slug": ["a"] }
```

And in the case of `/post/a/b`, and any other matching path, new parameters will be added to the array, like so:

```json
{ "slug": ["a", "b"] }
```

## Optional catch all routes

Catch all routes can be made optional by including the parameter in double brackets (`[[...slug]]`).

For example, `routes/post/[[...slug]]/page.js` will match `/post`, `/post/a`, `/post/a/b`, and so on.

The main difference between catch all and optional catch all routes is that with optional, the route without the parameter is also matched (`/post` in the example above).

The `params` objects are as follows:

```javascript
{ } // GET `/post` (empty object)
{ "slug": ["a"] } // `GET /post/a` (single-element array)
{ "slug": ["a", "b"] } // `GET /post/a/b` (multi-element array)
```

## general rules

files under `src/routes`, file path `routes/*/*.js`

| path                          | route                    | matched url                              |
|-------------------------------| ------------------------ | ---------------------------------------- |
| routes/post/create/page.js    | /post/create             | /post/create                             |
| routes/post/[pid]/page.js      | /post/:pid               | /post/1, /post/abc                       |
| routes/post/[[pid]]/page.js    | /post/:pid?              | /post, /post/1, /post/abc                |
| routes/post/[...pid]/page.js   | /post/:pid+              | /post/1/2, /post/a/b/c                   |
| routes/post/[[...pid]]/page.js | /post/:pid*              | /post, /post/1/2, /post/a/b/c            |

> [details about matched rules](./router-match-rules)

