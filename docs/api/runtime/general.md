---
id: general
title: General
---

## getRuntimeConfig

To get access to the runtime configs in your app.

### Type

```ts
function getRuntimeConfig(): Record<string, string>;
```

### Example

To add runtime configuration to your app open shuvi.config.js and add the `publicRuntimeConfig` and `serverRuntimeConfig` configs:

```js
exports default {
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
}
```

To get access to the runtime configs in your app:

```tsx
import { getRuntimeConfig } from "@shuvi/runtime";

const runtimeConfig = getRuntimeConfig();
// Will only be available on the server-side
console.log(runtimeConfig.mySecret);
// Will be available on both server-side and client-side
console.log(runtimeConfig.staticFolder);

function MyImage() {
  return (
    <div>
      <image src={`${runtimeConfig.staticFolder}/logo.png`} alt="logo" />
    </div>
  );
}

export default MyImage``;
```

## dynamic

Use `dynamic()` to lazy loading external libraries with `import()` and React components.
Deferred loading helps improve the initial loading performance by decreasing the amount of JavaScript necessary to render the page. Components or libraries are only imported and included in the JavaScript bundle when they're used.

### Type

```ts
type Loader<P> = Promise<React.ComponentType<P>>

interface DynamicOptions {
  loading?: ({ error, isLoading, pastDelay }: {
      error?: Error | null;
      isLoading?: boolean;
      pastDelay?: boolean;
      timedOut?: boolean;
  }) => JSX.Element | null;
  loader?: Loader<P>;
  ssr?: boolean;
}

function dynamic<Props = {}>(
  loader: () => Loader<Props>
  options?: DynamicOptions<Props>
): React.ComponentType<Props>;
```

### Example

```tsx
import dynamic from "@shuvi/runtime";
import { Suspense } from "react";

const DynamicHeader = dynamic(() => import("../components/header"), {
  loading: () => <div>Loading...</div>,
});

export default function Home() {
  return <DynamicHeader />;
}
```
