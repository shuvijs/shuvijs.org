---
sidebar_position: 05
id: Api Routes
---

## API Routes

API routes provide a solution to build your **API** with shuvi.

Any file inside the folder `src/routes`, each api is associated with a route based on its file name. They are server-side only bundles and won't increase your client-side bundle size.


| path                          | route                        | matched url                                  |
|-------------------------------| ---------------------------- | -------------------------------------------- |
| routes/api/post/create.js     | /api/post/create             | /api/post/create                             |
| routes/api/post/[pid].js      | /api/post/:pid               | /api/post/1, /api/post/abc                   |
| routes/api/post/[[pid]].js    | /api/post/:pid?              | /api/post, /api/post/1, /api/post/abc        |
| routes/api/post/[...pid].js   | /api/post/:pid+              | /api/post/1/2, /api/post/a/b/c               |
| routes/api/post/[[...pid]].js | /api/post/:pid*              | /api/post, /api/post/1/2, /api/post/a/b/c    |

For example, the following API route `routes/api/user.js` returns a `json` response with a status code of `200`:

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

> Details of `RuntimeServer.IApiRequestHandler` types is [here](../api/runtime/modules/RuntimeServer.md#iapirequesthandler)

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
