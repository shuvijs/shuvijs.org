---
sidebar_position: 2
id: custom-error
title: Custom Error
---

## How to Custom Error Page

If an error occurred, shuvi render error page. To create a custom error page you can create a `src/error.js` file and export a component:

```javascript
import React from "react";
import { Link } from "@shuvi/runtime";

export default ({ errorCode, errorDesc }) => {
  const [showError, setErrorStatus] = React.useState(false);
  React.useEffect(() => {
    setErrorStatus(true);
  });
  return (
    <div style={{ color: "red" }}>
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
