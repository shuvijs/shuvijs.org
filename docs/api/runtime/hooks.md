---
id: hooks
title: Hooks
---

## useLoaderData

This hook returns the JSON parsed data from your route loader function.

### Example

```tsx
import { useLoaderData } from "@shuvi/runtime";

export async function loader() {
  return fetchUserDetail();
}

export default function UserProfile() {
  const userInfo = useLoaderData();
  // ...
}
```

## useParams

The `useParams` hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the `route.path`. Child routes inherit all params from their parent routes.

### Type

```ts
function useParams<T extends {} = {}>(): Readonly<T>;
```

### Example

```tsx
import * as React from "react";
import { Routes, Route, useParams } from "react-router-dom";

function ProfilePage() {
  // Get the userId param from the URL.
  let { userId } = useParams();
  // ...
}

function App() {
  return (
    <Router
      routes={[
        {
          path: "users",
          children: [
            {
              path: ":userId",
              componnet: ProfilePage,
            },
            {
              path: "me",
            },
          ],
        },
      ]}
    ></Router>
  );
}
```

## useCurrentRoute

Return the matched route with the current URL.

### Type

```ts
function useCurrentRoute(): import("@shuvi/router").IRoute<{
  path: string;
  component?: any;
  children?: any[] | undefined;
  props?: object;
  redirect?: string | undefined;
}>;
```

## useRouter

Return `router` instance.

### Type

```tsx
interface IRouter<
  RouteRecord extends {
    path: string;
  } = any
> {
  push(to: PathRecord, state?: any): void;
  replace(to: PathRecord, state?: any): void;
  go: History["go"];
  back: History["back"];
  block: History["block"];
  resolve: History["resolve"];
  forward(): void;
  routes: RouteRecord[];
  match(to: PathRecord): Array<IRouteMatch<RouteRecord>>;
  listen: (listener: Listener) => RemoveListenerCallback;
  beforeEach: (listener: NavigationGuardHook) => RemoveListenerCallback;
  beforeResolve: (listener: NavigationGuardHook) => RemoveListenerCallback;
  afterEach: (listener: NavigationResolvedHook) => RemoveListenerCallback;
}

function useRouter(): IRouter;
```
