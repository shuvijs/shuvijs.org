---
sidebar_position: 1
id: Routes
---

Shuvi provides a file system-based convention routing rule.
Read the agreed files from **src/routes** in the project root directory,
such as page.js, **`layout.js`**, **`api.js`**, **`middleware.js`**.
Which produces the corresponding **`React Component`** routing hierarchy.

## Generate routing paths

The names of the directories under src/routes determine the rules for generating routes

**Example**:

```
src
└── routes
    ├── page.jsx ───────────────── /
    ├── categories
    │   ├── page.jsx ───────────── /categories
    │   ├── $categoryId
    │   │   └── page.jsx ───────── /categories/:categoryId
    ├── articles
    │   ├── page.jsx ───────────── /articles
    │   ├── $articleId
    │   │   ├── page.jsx ───────── /articles/:articleId
    │   │   └── $commentId
    │   │       └── page.jsx ───── /articles/:articleId/:commentId
    │   ├── layout.jsx
    ├── tags
    │   ├── page.jsx ───────────── /tags
    ├── setting
    │   ├── page.jsx ───────────── /setting
    │   ├── accountInfo
    │   │   └── page.jsx ───────── /setting/accountInfo
    │   ├── preference
    │   │   └── page.jsx ───────── /setting/preference
    │   ├── others
    │   │   └── $
    │   │       └── page.jsx ───── /setting/others/*
    │   └── layout.jsx
    └── layout.jsx
```

## Generate dynamic paths

Defining routes by using predefined paths is not always enough for complex applications.
In shuvi you can add brackets to a directory name (`$param`) to create a dynamic route (a.k.a. url slugs, pretty urls, and others).

Consider the following directory `routes/post/$postId`:

Any route like `/post/traveling`, `/post/hiking`, etc. will be matched by `routes/post/$postId`.

For example, the route `/post/traveling` will have the following `params` object:

```json
{ "postId": "traveling" }
```

Similarly, the route `/post/traveling?language=en` will have the following `params` and `query` object:

```json lines
// params
{"postId": "traveling"}
// query
{ "language": "en" }
```

Multiple dynamic route segments work the same way. The page `routes/post/$postId/$commentId` will match the route `/post/traveling/randomCommentId` and its `params` object will be:

```json
{ "postId": "traveling", "commentId": "randomCommentId" }
```

### Splats

Dynamic routes could deal with any URL by naming a fold `$`. It will match the value in the rest of URL to the end.

- `routes/setting/others/$` matches `/setting/others`, but also `/setting/others/background`, `/setting/others/background/color`, `/setting/others/resolution` and so on.

You could get matched params in the loader function

```js
import { Loader } from "@shuvi/runtime";

export const loader: Loader = async (ctx) => {
  ctx.params["*"]; // "" or "background" or "background/color"
};

export default App;
```

or using the hook revealed from `shuvi` out of the box

```jsx
import { useParams } from "@shuvi/runtime";

function App() {
  const params = useParams();
  params["*"]; // "" or "background" or "background/color"
}

export default App;
```

### General rules

| path                       | route                | matched url                                                                        |
| -------------------------- | -------------------- | ---------------------------------------------------------------------------------- |
| routes/tags                | /tags                | /tags                                                                              |
| routes/articles/$articleId | /articles/:articleId | /articles/traveling, /articles/hiking                                              |
| routes/setting/others/$    | /setting/others/\*   | /setting/others, /setting/others/any-routes, /setting/others/any-routes/any/routes |

> [details about matched rules](#Match rules)

## Generate routing endpoints

### Page routes

The directory name determines the path, page.js determines the rendered content.
`page.js` should export a **`React component`** by default.page.js is leaf node in the routing tree，
Can be nested in any folder.

> Note that all future examples will use the .js extension.
> The extension of the routing file is not limited to **`.js`**, but can also be **`.ts`**, **`.tsx`**, and **`.jsx`**.

#### Usage

1. Create a `page.js` file under your `routes` directory.
2. Finally, export a React component function from the `page.js` file by default.

#### Example

```jsx
export default function Index() {
  return <div>index</div>;
}
```

```jsx
export default function Index() {
  return <div>a-b</div>;
}
```

### Layout routes

Layout is suitable for scenarios that require nested routing.
Similar to the `<router-view>` of `Vue-router` and `<Outlet>` of `Remix`

Layout can be understood as a more advanced page, it has all the capabilities of page,
and has the ability to share areas without repeated rendering and scheduling of sub-routes.

#### Usage

1. Create a `layout.js` file under your `routes` directory.
2. Finally, export a React component function from the `layout.js` file by default.
3. Use 'RouterView Component' to render your child routes

#### Example

A small example of a shared top navigation bar.

**`src/routes/dashboard/layout.js`** → `/dashboard`

```jsx
import { RouterView } from "@shuvi/runtime";

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
  );
}
```

**`src/routes/dashboard/categories/page.js`** → `/dashboard/categories`

```jsx
export default function () {
  return <div>categories</div>;
}
```

**`src/routes/dashboard/articles/page.js`** → `/dashboard/articles`

```jsx
export default function () {
  return <div>articles</div>;
}
```

**`src/routes/dashboard/tags/page.js`** → `/dashboard/tags`

```jsx
export default function () {
  return <div>tags</div>;
}
```

**`src/routes/dashboard/page.js`** → `/dashboard` can be used as index route.

```jsx
export default function () {
  return <div>index</div>;
}
```

Now,
accessing any sub-route under /dashboard/ will render the matching layout and page together.
When the route changes, the layout will not be unmounted.
Implemented regional component sharing

> **Notice**: Layout and page do not conflict with dynamic segment and can be freely combined.

### API routes

API routes provide a solution to build your **API** with shuvi.

Any file inside the folder `src/routes`, each api is associated with a route based on its file name. They are server-side only bundles and won't increase your client-side bundle size.

| path                          | route            | matched url                                                     |
| ----------------------------- | ---------------- | --------------------------------------------------------------- |
| routes/api/post/create/api.js | /api/post/create | /api/post/create                                                |
| routes/api/post/$pid/api.js   | /api/post/:pid   | /api/post/1, /api/post/abc                                      |
| routes/api/post/$/api.js      | /api/post/\*     | /api/post, /api/post/1, /api/post/1/2, /api/post/abc/other/path |

#### Usage

1. Create a `api.js` file under your `routes` directory.
2. Finally, export an api function from the `api.js` file by default.

#### Example

For example, the following API route `routes/api/user/api.js` returns a `json` response with a status code of `200`:

```js
export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
```

For an API route to work, you need to export a function as default (a.k.a **request handler**), which then receives the following parameters:

- `req`: An instance of [http.IncomingMessage](https://nodejs.org/api/http.html#http_class_http_incomingmessage), plus some [enhanced request](#enhanced-request)
- `res`: An instance of [http.ServerResponse](https://nodejs.org/api/http.html#http_class_http_serverresponse), plus some [enhanced response](#enhanced-response)

To handle different HTTP methods in an API route, you can use `req.method` in your request handler, like so:

```ts
import { RuntimeServer } from "@shuvi/runtime";
const apiHandler: RuntimeServer.IApiRequestHandler = function handler(
  req,
  res
) {
  if (req.method === "POST") {
    // Process a POST request
  } else {
    // Handle any other HTTP method
  }
};
export default apiHandler;
```

> Details of `RuntimeServer.IApiRequestHandler` types is [here](../old-reference/runtime/modules/RuntimeServer.md#iapirequesthandler)

To fetch API endpoints, take a look into any of the examples at the start of this section.

#### enhanced request

API routes provide built in middlewares which parse the incoming request (`req`). Those middlewares are:

- `req.cookies` - An object containing the cookies sent by the request. Defaults to `{}`
- `req.query` - An object containing the [query string](https://en.wikipedia.org/wiki/Query_string). Defaults to `{}`
- `req.body` - An object containing the body parsed by `content-type`, or `null` if no body was sent

#### Custom config

The `apiConfig` object includes all configs available for API routes.

Every API route can export a `config` object to change the default configs, which are the following:

```js
export const config = {
  apiConfig: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};
```

`bodyParser` Enables body parsing, you can disable it if you want to consume it as a `Stream`:

```js
export const config = {
  apiConfig: {
    bodyParser: false,
  },
};
```

`bodyParser.sizeLimit` is the maximum size allowed for the parsed body, in any format supported by [bytes](https://github.com/visionmedia/bytes.js), like so:

```js
export const config = {
  apiConfig: {
    bodyParser: {
      sizeLimit: "500kb",
    },
  },
};
```

#### enhanced response

The response (`res`) includes a set of Express.js-like methods to improve the developer experience and increase the speed of creating new API endpoints, take a look at the following example:

```js
export default function handler(req, res) {
  res.status(200).json({ name: "shuvi" });
}
```

The included helpers are:

- `res.status(code)` - A function to set the status code. `code` must be a valid [HTTP status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
- `res.json(body)` - Sends a JSON response. `body` must be a [serialiazable object](https://developer.mozilla.org/en-US/docs/Glossary/Serialization)
- `res.send(body)` - Sends the HTTP response. `body` can be a `string`, an `object` or a `Buffer`
- `res.redirect([status,] path)` - Redirects to a specified path or URL. `status` must be a valid [HTTP status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes). If not specified, `status` defaults to "307" "Temporary redirect".

> Notice: api.js and page.js are conflicting, when both exist, only page.js will be enabled.
