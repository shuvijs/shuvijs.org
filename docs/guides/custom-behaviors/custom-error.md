---
sidebar_position: 2
id: custom-error
title: Custom Error
---

## How to Custom Error Page

If an error occurred, shuvi render error page. To create a custom error page you can create an `src/error.js`, `src/error.jsx`, `src/error.ts` or `src/error.tsx` file and export a component:

```ts title="src/error.tsx"
import React from "react";
import { Link } from "@shuvi/runtime";

type Props = {
  errorCode?: number;
  errorDesc?: string;
  error?: Error;
}

export default ({ errorCode, errorDesc }: Props) => {
  const [showError, setErrorStatus] = React.useState(false);
  React.useEffect(() => {
    setErrorStatus(true);
  });
  return (
    <div style={{ color: "red" }}>
      { errorCode && <div>{errorCode}</div> }
      <div id="error">
        custom error {errorDesc}
      </div>
      { error &&
        <div>
          <div>Error Detail</div>
          {error.stack}
        </div> 
      }
      <br />
      <Link id="to-about" to="/about">
        about
      </Link>
      {showError ? (
        <div id="error-show-client">error only in client for test</div>
      ) : null}
    </div>
  );
};
```
This component is isomorphic and will handle both server and client errors.

This page will be displayed if any errors are thrown during the initial rendering on the server side.

On the client side, when a rendering error occurs, the built-in errorBoundary will display this error page. This error page will also be displayed when the `loader` throws an unexpected error.

## Error Component Props

### errorCode

type: `string | undefined`

http status code of the error. Used in server side.

At client side, `errorCode` is always `undefined`.


#### errorDesc

type: `string | undefined`

A brief description of the error shown to users.

Please note this is not `error.message`.

Default value:

- server side: `'Internal Server Error'`
- client side: `'Internal Application Error'`

You can customize `errorDesc` by actively returning an [Error Response](../data-fetching.md/#error-response) at the `loader`.

#### error

type: `Error | undefined`

The error object. If you want to display the detail info of the error, you can use this prop.

The `error` props is only available at client side when catching errorBoundary or unexpected `loader` errors.