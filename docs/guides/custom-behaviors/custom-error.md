---
sidebar_position: 2
id: Custom Error
---

If an error occurred, shuvi render error page. In [SSR mode], response.statusCode will be set when server render HTML.


## Default Error Message

Error component accept error props as shown below:

```js
// ...style
function error({ errorCode, errorDesc }) {
  return (
    <div style={style.container}>
      <Head>
        <title>Page Error</title>
      </Head>

      <div style={style.error}>
        <div style={style.errorCode}>{errorCode}</div>
        {errorDesc && <div style={style.errorDesc}>{errorDesc}</div>}
      </div>
    </div>
  );
}
```

> `errorCode, errorDesc` type is [here](../../old-reference/runtime/interfaces/IPageError.md)

## Custom Error Page

To create a custom error page you can create a `src/error.js` file.
```javascript
import React from 'react';
import { Link } from '@shuvi/runtime';
export default ({ errorCode, errorDesc }) => {
  const [showError, setErrorStatus] = React.useState(false);
  React.useEffect(() => {
    setErrorStatus(true);
  });
  return (
    <div style={{ color: 'red' }}>
      <div id="error">
        custom error {errorCode} {errorDesc}
      </div>
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

### 404 Page

  To create a custom error page you can create a `src/404.js` file.

### 500 Page

  To create a custom error page you can create a `src/500.js` file.

## Error Priority

There is two specific custom error page `404` and `500`, which one should be rendered decide by `errorCode`.

  - when `errorCode` is 500, rendered `src/500.js` first. If no found, rendered `src/error.js` second. If no found, rendered `default error`.
  - when `errorCode` is 400, rendered `src/error.js` first. If no found, rendered `default error`.
