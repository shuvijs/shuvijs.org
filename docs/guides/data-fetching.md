---
sidebar_position: 2
id: Data Fetching
---

## What is Loader

Shuvi provides a feature to fetch initial data when server-side rendering or route navigation for route component.  
Each route module can export a component and a `loader`.

The loader is a function that receives a content object parameter containing current url and request information and several methods and returns a data object, a redirecting response or an error response.

The hook `useLoaderData` will provide the data that `loader` returns.

Take a look at the simple example as the following:

```tsx
import { useLoaderData, Loader } from "@shuvi/runtime";

const RouteComponent = () => {
  // highlight-next-line
  const data = useLoaderData<LoaderData>();
  return (
    <div>
      <p>{data.hello}</p>
    </div>
  );
};

type LoaderData = {
  hello: string;
};

async function doSomethingAsync() {
  // do something async
}

// highlight-start
export const loader: Loader<LoaderData> = async ({
  isServer,
  pathname,
  query,
  params,
  redirect,
  error,
  appContext,
  req,
}) => {
  await doSomethingAsync();
  return {
    hello: "world",
  };
};
// highlight-end

export default RouteComponent;
```

## Timing of Executing Loader

The `loader` is isomorphic and it will run before every server-side or client-side initial rendering and every route navigation to make sure the returned data is ready when component renders.

By default, when using server-side rendering, all loaders will run at server-side and the result of loaders will be inserted to the HTML document, so that during hydrating, the result of `loader` can be reused and `loader` will not run at client side.

On navigation in the browser, `loader` will run at client side before route navigation complete.

Shuvi allows nested routes. All `loader`s of matched route modules will run in parallel.

When a route navigation is triggered, only the loader of the newly rendered route component, the loader of the route component that remains rendered but the params have changed, and the loader of the last matched route component will be executed.

:::caution
Since loaders may be executed on the server or client, please make sure they are isomorphic.

During hot module reloading, all loaders will be re-executed on the client side.
The loaderContext on the client side does not contain the `req` object. If the loader contains codes that are not compatible with the client side, the application will throw an error.
:::

## Return Type of Loader

`Loader` should return a serializable object or a specific `response` indicating redirecting or throwing error.

### Serializable Object

It is the most common situation that `loader` returns an object which is route component needed.

But please note the returned object must be serializable because the returned data will be serialized as string and will be inserted in the HTML that send to the browser so that the data can be reused while hydrating.

```tsx
import { Loader } from "@shuvi/runtime";

type LoaderData = {
  hello: string;
};

export const loader: Loader<LoaderData> = async () => {
  return {
    hello: "world",
  };
};
```

### Redirecting Response

It is allowed that `loader` returns a response indicating redirecting to another path or url.  
A redirecting response can be created by `redirect` method on `loader` parameter object as the following example:

```tsx
import { Loader } from "@shuvi/runtime";
export const loader: Loader = async ({ redirect }) => {
  return redirect("/target", 301);
};
```

### Error Response

It is also allowed that `loader` returns a response that redirects to an error page with error statusCode.  
An error response can be created by `error` method on `loader` parameter object as the following example:

```tsx
import { Loader } from "@shuvi/runtime";
export const loader: Loader = async ({ error }) => {
  return error("error message", 404);
};
```

## Exception of Running Loader

If loader throws an error or causes an unhandled rejection, shuvi will handle this unexpected error.

On server side, shuvi will send a blank HTML and fallback to client-side rendering.

On client side, shuvi will automatically redirect to the error page.

## Loader Type

Please refer to [Reference / Loader](../old-reference/loader)
