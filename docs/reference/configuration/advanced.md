---
id: advanced
title: Advanced
---

## Typescirpt

Shuvi.js fails your production build (`shuvi build`) when TypeScript errors are present in your project.

If you'd like Shuvi.js to dangerously produce production code even when your application has errors, you can disable the built-in type checking step.

If disabled, be sure you are running type checks as part of your build or deploy process, otherwise this can be very dangerous.

```ts
export default {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: false,
  },
};
```

## Dispose Inactive Page

Shuvi.js will compile page on demand and dispose them when they are considered inactive. The disposed pages need to be recompile when they became active again. You can disable "dispose inactive page" by setting `disposeInactivePage` to `false`

```ts
export default {
  disposeInactivePage: false,
};
```

## Parcel CSS

```ts
export default {
  experimental: {
    parcelCss: true,
  },
};
```

## Prebundle Packages

```ts
export default {
  experimental: {
    preBundle: true,
  },
};
```

## Modularize Imports

Allows to modularize imports, similar to babel-plugin-transform-imports.

Transforms member style imports:

```ts
import { Row, Grid as MyGrid } from "react-bootstrap";
import { merge } from "lodash";
```

into default style imports:

```ts
import Row from "react-bootstrap/lib/Row";
import MyGrid from "react-bootstrap/lib/Grid";
import merge from "lodash/merge";
```

Config for the above transform:

```ts
export default {
  experimental: {
    modularizeImports: {
      "react-bootstrap": {
        transform: "react-bootstrap/lib/{{member}}",
      },
      lodash: {
        transform: "lodash/{{member}}",
      },
    },
  },
};
```

<!-- ## (Experimental) Swc Plugins -->
