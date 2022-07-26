---
sidebar_position: 02
id: Routes
---

Shuvi provides a file system-based convention routing rule.
Read the agreed files from **src/routes** in the project root directory,
such as page.js, **`layout.js`**, **`api.js`**, **`middleware.js`**.
Which produces the corresponding **`React Component`** routing hierarchy.

## Conventions rules

The names of the directories under src/routes determine the rules for generating routes

**Example**:

| directory path  | route path |
|-----------------|------------|
| src/routes/     | /          |
| src/routes/a    | /a         |
| src/routes/a/a1 | /a/a1      |
| src/routes/b    | /b         |
| src/routes/b/b1 | /b/b1      |
| src/routes/b/b2 | /b/b2      |




## Dynamic rules

Defining routes by using predefined paths is not always enough for complex applications.
In shuvi you can add brackets to a directory name (`[param]`) to create a dynamic route (a.k.a. url slugs, pretty urls, and others).

Consider the following directory `routes/post/[pid]`:

Any route like `/post/1`, `/post/abc`, etc. will be matched by `routes/post/[pid]`.


For example, the route `/post/abc` will have the following `params` object:

```json
{ "pid": "abc" }
```

Similarly, the route `/post/abc?foo=bar` will have the following `params` and `query` object:

```json lines
// params
{"pid": "abc"}
// query
{ "foo": "bar" }
```

Multiple dynamic route segments work the same way. The page `routes/post/[pid]/[comment]` will match the route `/post/abc/a-comment` and its `params` object will be:

```json
{ "pid": "abc", "comment": "a-comment" }
```


### Catch all routes

Dynamic routes can be extended to catch all paths by adding three dots (`...`) inside the brackets. For example:

- `routes/post/[...slug]` matches `/post/a`, but also `/post/a/b`, `/post/a/b/c` and so on.

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

For example, `routes/post/[[...slug]]` will match `/post`, `/post/a`, `/post/a/b`, and so on.

The main difference between catch all and optional catch all routes is that with optional, the route without the parameter is also matched (`/post` in the example above).

The `params` objects are as follows:

```json lines
{ "slug": [] } // GET `/post` (empty array)
{ "slug": ["a"] } // `GET /post/a` (single-element array)
{ "slug": ["a", "b"] } // `GET /post/a/b` (multi-element array)
```

### general rules


| path                   | route        | matched url                   |
|------------------------|--------------|-------------------------------|
| routes/post/create     | /post/create | /post/create                  |
| routes/post/[pid]      | /post/:pid   | /post/1, /post/abc            |
| routes/post/[[pid]]    | /post/:pid?  | /post, /post/1, /post/abc     |
| routes/post/[...pid]   | /post/:pid+  | /post/1/2, /post/a/b/c        |
| routes/post/[[...pid]] | /post/:pid*  | /post, /post/1/2, /post/a/b/c |

> [details about matched rules](#Match rules)

## Page routes


The directory name determines the path, page.js determines the rendered content.
`page.js` should export a **`React component`** by default.page.js is leaf node in the routing tree，
Can be nested in any folder.

> Note that all future examples will use the .js extension.
> The extension of the routing file is not limited to **`.js`**, but can also be **`.ts`**, **`.tsx`**, and **`.jsx`**.


### Usage

1. Create a `page.js` file under your `routes` directory.
2. Finally, export a React component function from the `page.js` file by default.


### Example


```jsx
export default function Index() {
  return <div>index</div>
}
```

```jsx
export default function Index() {
  return <div>a-b</div>
}
```

## Layout


Layout is suitable for scenarios that require nested routing.
Similar to the `<router-view>` of `Vue-router`.

Layout can be understood as a more advanced page, it has all the capabilities of page,
and has the ability to share areas without repeated rendering and scheduling of sub-routes.

### Usage


1. Create a `layout.js` file under your `routes` directory.
2. Finally, export a React component function from the `layout.js` file by default.
3. Use 'RouterView Component' to render your child routes


### Example

A small example of a shared top navigation bar.

**`src/routes/dashboard/layout.js`** → `/dashboard`
```jsx
import { RouterView } from '@shuvi/runtime';

export default function Layout() {
  return (
    <div>
      <header>
        <h1>dashboard</h1>
        <nav>
          <Link to="categories">categories</Link>
          <Link to="articles">articles</Link>
          <Link to="tags">tags</Link>
        </nav>
      </header>
      <main>
        <RouterView />
      </main>
    </div>
  )
}
```

**`src/routes/dashboard/categories/page.js`** → `/dashboard/categories`

```jsx
export default function () {
  return <div>categories</div>
}
```
**`src/routes/dashboard/articles/page.js`** → `/dashboard/articles`

```jsx
export default function () {
  return <div>articles</div>
}
```
**`src/routes/dashboard/tags/page.js`** → `/dashboard/tags`

```jsx
export default function () {
  return <div>tags</div>
}
```

**`src/routes/dashboard/page.js`** → `/dashboard` can be used as index route.

```jsx
export default function () {
  return <div>index</div>
}
```

Now,
accessing any sub-route under /dashboard/ will render the matching layout and page together.
When the route changes, the layout will not be unmounted.
Implemented regional component sharing

> **Notice**: Layout and page do not conflict with dynamic segment and can be freely combined.


## API routes

API routes provide a solution to build your **API** with shuvi.

Any file inside the folder `src/routes`, each api is associated with a route based on its file name. They are server-side only bundles and won't increase your client-side bundle size.


| path                              | route            | matched url                               |
|-----------------------------------|------------------|-------------------------------------------|
| routes/api/post/create/api.js     | /api/post/create | /api/post/create                          |
| routes/api/post/[pid]/api.js      | /api/post/:pid   | /api/post/1, /api/post/abc                |
| routes/api/post/[[pid]]/api.js    | /api/post/:pid?  | /api/post, /api/post/1, /api/post/abc     |
| routes/api/post/[...pid]/api.js   | /api/post/:pid+  | /api/post/1/2, /api/post/a/b/c            |
| routes/api/post/[[...pid]]/api.js | /api/post/:pid*  | /api/post, /api/post/1/2, /api/post/a/b/c |


### Usage

1. Create a `api.js` file under your `routes` directory.
2. Finally, export an api function from the `api.js` file by default.

### Example

For example, the following API route `routes/api/user/api.js` returns a `json` response with a status code of `200`:

```js
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
```

For an API route to work, you need to export a function as default (a.k.a **request handler**), which then receives the following parameters:

- `req`: An instance of [http.IncomingMessage](https://nodejs.org/api/http.html#http_class_http_incomingmessage), plus some [enhanced request](#enhanced-request)
- `res`: An instance of [http.ServerResponse](https://nodejs.org/api/http.html#http_class_http_serverresponse), plus some [enhanced response](#enhanced-response)

To handle different HTTP methods in an API route, you can use `req.method` in your request handler, like so:

```ts
import { RuntimeServer } from '@shuvi/runtime'
const apiHandler: RuntimeServer.IApiRequestHandler = function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
  }
}
export default apiHandler
```

> Details of `RuntimeServer.IApiRequestHandler` types is [here](../api-reference/runtime/modules/RuntimeServer.md#iapirequesthandler)

To fetch API endpoints, take a look into any of the examples at the start of this section.

### enhanced request

API routes provide built in middlewares which parse the incoming request (`req`). Those middlewares are:

- `req.cookies` - An object containing the cookies sent by the request. Defaults to `{}`
- `req.query` - An object containing the [query string](https://en.wikipedia.org/wiki/Query_string). Defaults to `{}`
- `req.body` - An object containing the body parsed by `content-type`, or `null` if no body was sent

### Custom config

The `apiConfig` object includes all configs available for API routes.

Every API route can export a `config` object to change the default configs, which are the following:

```js
export const config = {
  apiConfig: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}
```

`bodyParser` Enables body parsing, you can disable it if you want to consume it as a `Stream`:

```js
export const config = {
  apiConfig: {
    bodyParser: false,
  },
}
```

`bodyParser.sizeLimit` is the maximum size allowed for the parsed body, in any format supported by [bytes](https://github.com/visionmedia/bytes.js), like so:

```js
export const config = {
  apiConfig: {
    bodyParser: {
      sizeLimit: '500kb',
    },
  },
}
```

### enhanced response

The response (`res`) includes a set of Express.js-like methods to improve the developer experience and increase the speed of creating new API endpoints, take a look at the following example:

```js
export default function handler(req, res) {
  res.status(200).json({ name: 'shuvi' })
}
```

The included helpers are:

- `res.status(code)` - A function to set the status code. `code` must be a valid [HTTP status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
- `res.json(body)` - Sends a JSON response. `body` must be a [serialiazable object](https://developer.mozilla.org/en-US/docs/Glossary/Serialization)
- `res.send(body)` - Sends the HTTP response. `body` can be a `string`, an `object` or a `Buffer`
- `res.redirect([status,] path)` - Redirects to a specified path or URL. `status` must be a valid [HTTP status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes). If not specified, `status` defaults to "307" "Temporary redirect".

> Notice: api.js and page.js are conflicting, when both exist, only page.js will be enabled.


## Middleware routes


Middleware enables you to use code over configuration. This gives you full flexibility in shuvi, because you can run code before a request is completed.

Based on the user's incoming request, you can modify the response by rewriting, redirecting, adding headers.

### Usage


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
> Details of `RuntimeServer.IRequestHandlerWithNext` types is [here](../api-reference/runtime/modules/RuntimeServer.md#irequesthandlerwithnext)

### Execution Order

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

### Config

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


## Match rules


1. A _param_ is denoted by a colon `:`
1. colon `:` is **necessary** for _param_

When a route is matched, the value of its _params_ will be exposed as `params`.

```js
const User = {
  template: '<div>User {{ $route.params.id }}</div>',
}
// these are passed to `createRouter`
const routes = [
  // dynamic segments start with a colon
  { path: '/users/:id', component: User },
]
```

You can have multiple _params_ in the same route, and they will map to corresponding fields on `params`. Examples:

| pattern                        | matched path             | params                                   |
| ------------------------------ | ------------------------ | ---------------------------------------- |
| /users/:username               | /users/eduardo           | `{ username: 'eduardo' }`                |
| /users/:username/posts/:postId | /users/eduardo/posts/123 | `{ username: 'eduardo', postId: '123' }` |

### Custom Regexp in params

```javascript
const routes = [
  // /:productName -> matches /o,/p
  { path: '/:productName' },
]
```

In some scenarios we don't want to add that static section `/o`/`p`. However, `orderId` is always a number while `productName` can be anything, so we can specify a custom regexp for a param in parentheses:

```js
const routes = [
  // /:orderId -> matches only numbers
  { path: '/:orderId(\\d+)' },
  // /:productName -> matches anything else
  { path: '/:productName' },
]
```

Now, going to `/25` will match `/:orderId` while going to anything else will match `/:productName`. The order of the `routes` array doesn't even matter!

> Make sure to **escape backslashes (\\)** like we did with `\d` (becomes `\\d`) to actually pass the backslash character in a string in JavaScript.

### Repeatable params

If you need to match routes with multiple sections like `/first/second/third`, you should mark a param as repeatable with `*` (0 or more) and `+` (1 or more):

```js
const routes = [
  // /:chapters -> matches /one, /one/two, /one/two/three, etc
  { path: '/:chapters+' },
  // /:chapters -> matches /, /one, /one/two, /one/two/three, etc
  { path: '/:chapters*' },
]
```

```js
// given { path: '/:chapters*', name: 'chapters' },
router.resolve({ name: 'chapters', params: { chapters: [] } }).href
// produces /
router.resolve({ name: 'chapters', params: { chapters: ['a', 'b'] } }).href
// produces /a/b

// given { path: '/:chapters+', name: 'chapters' },
router.resolve({ name: 'chapters', params: { chapters: [] } }).href
// throws an Error because `chapters` is empty
```

These can also be combined with custom Regexp by adding them **after the closing parentheses**:

```js
const routes = [
  // only match numbers
  // matches /1, /1/2, etc
  { path: '/:chapters(\\d+)+' },
  // matches /, /1, /1/2, etc
  { path: '/:chapters(\\d+)*' },
]
```

### Optional parameters

You can also mark a parameter as optional by using the `?` modifier (0 or 1):

```js
const routes = [
  // will match /users and /users/posva
  { path: '/users/:userId?' },
  // will match /users and /users/42
  { path: '/users/:userId(\\d+)?' },
]
```

Note that `*` technically also marks a parameter as optional but `?` parameters cannot be repeated.

### Catch all / 404 Not found Route

```js
const routes = [
  // will match /user/... and put it under `$route.params._other`
  { path: '/user/:_other(.*)', name: 'NotFound', component: NotFound },
  // will match /user, /user/... and put it under `$route.params._other`
  { path: '/user/:_other(.*)?', name: 'NotFound', component: NotFound },
  // will match anything starting with `/user-` and put it under `$route.params.afterUser`
  { path: '/user-:afterUser(.*)', component: UserGeneric },
]
```

### different between math all
| pattern                        | matched path             | \$route.params                           |
| ------------------------------ | ------------------------ | ---------------------------------------- |
| /:chapters*                    | /one                     | `{ chapters: ['one'] }`                  |
| /:chapters(.*)                 | /one                     | `{ chapters: 'one' }`                   |

This will give you an array of params instead of a string and will also require you to pass an array when using named routes:

### Debugging

If you need to dig how your routes are transformed into Regexp to understand why a route isn't being matched or, to report a bug, you can use the [path ranker tool](https://paths.esm.dev/?p=AAMeJSyAwR4UbFDAFxAcAGAIJXMAAA..#). It supports sharing your routes through the URL.

## On demand transpilation


Each route is a dynamic entry in shuvi. Some optimizations based on it.

1. On demand transpilation when Developer visit a route

    1. not yet visit /about
        ```javascript
        //empty route
        export default function(){
          return null
        }
        ```
    1. when visit /about
         ```javascript
         //about route is compiling...
         ```
    2.  after compiled, about route will be replace to empty route by [fast fresh](./fast-refresh.md).
          ```javascript
         //about route
         export default function(){
           return <div>about</div>
         }
         ```
2. Each route is lazy entry in production. it is on demand loaded when user visit a route.
