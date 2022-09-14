---
id: general
title: General
---

For custom configuration of Shuvi.js, you can create a `shuvi.config.js` or `shuvi.config.ts` file in the root of your project directory (next to `package.json`).

`shuvi.config.js` is a regular Node.js module, not a JSON file. It gets used by the Shuvi.js server and build phases, and it's not included in the browser build.

## Environment Variables

Add environment variables to the JavaScript bundle

```ts
// file: shuvi.config.js
export default {
  env: {
    customKey: "my-value",
  },
};

// file: src/home/page.js
function Page() {
  return <h1>The value of customKey is: {process.env.customKey}</h1>;
}

export default Page;
```

## Runtime Configuration

Add runtime configuration to your app.

Place any server-only runtime config under `serverRuntimeConfig`.

Anything accessible to both client and server-side code should be under `publicRuntimeConfig`.

```ts
export default {
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: "secret",
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: "/static",
  },
};
```

To get access to the runtime configs in your app:

```tsx
import { getRuntimeConfig } from "shuvi/runtime";

const { mySecret, staticFolder } = getRuntimeConfig();
// Will only be available on the server-side
console.log(mySecret);
// Will be available on both server-side and client-side
console.log(staticFolder);

function MyImage() {
  return (
    <div>
      <img src={`${staticFolder}/logo.png`} alt="logo" />
    </div>
  );
}

export default MyImage;
```

## Server-Side Rendering

Whether to enable Server-Side Rendering. Defaults to `true`.

```ts
export default {
  ssr: false,
};
```

## Router

Whey you build applications without a backed server. You need to set `router.history` to `hash`.

```ts
export default {
  router: {
    history: "hash", // hash or browser
  },
};
```

## Convention Routes

Shuvi.js exposes some options that give you some control over how convention routes will work.

```ts
export default {
  conventionRoutes: {
    // his is an array of globs (via minimatch) that Shuvi will match to files while reading your routes directory. If a file matches, it will be ignored.
    exclude: ['**/components'];
  };
};
```

## Build directory

Defaults to `"build"`.

```ts
export default {
  outputPath: "dist",
};
```

## Asset Prefix

The URL prefix of the browser build with a trailing slash. Defaults to "/". This is the path the browser will use to find assets.

```ts
export default {
  publicPath: "https://cdn.com/",
};
```

## Proxying API Requests

If your frontend app and the backend API server are not running on the same host, you will need to proxy API requests to the API server during development. This option will be ignored in production.

```ts
export default {
  proxy: {
    "/api/*": {
      target: "http://example.com/api/v1/*",
      changeOrigin: true,
    },
  },
};
```
