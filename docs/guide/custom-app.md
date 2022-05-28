---
sidebar_position: 80
id: Custom App
---

## What App it is?

The component `<App />` is the dynamic component what routes matched. It just run once on application mount if there is no error. The `App.getInitialProps` receives a single argument called `context`. It's an object with the same set of properties as the context object in `getInitialProps`.

There is two route components `index.js` and `about.js`;

```javascript
// src/pages/index.js
export default function Index() {
  return <div id="index">Index Page</div>;
};
```

```javascript
// src/pages/about.js
export default function About() {
  return  <div id="about">About Page</div>;
};
```

- visit `/`, `<App />` point `index.js`, render `index.js`.
  
- visit `/about`, `<App />` point `about.js`, render `about.js`.

## How To Custom App

There is way to override `<App />`, add `src/app.js` or `src/app.ts`, `export default` HOC of `<App />`.

- The example below show add a listener to router.
  
  ```js
  // src/app.js
  import React from 'react';
  import { useRouter } from '@shuvi/runtime';
  const getApp = App => {
    const MyApp = () => {
      const router = useRouter();

      React.useEffect(() => {
        if (typeof window !== 'undefined') {
          router.listen(() => {
            console.log('history change');
          });
        }
      }, []);

      return <App />;
    };
    return MyApp;
  };

  export default getApp;
  ```

<div id="example-override-getInitialProps"></div>
- The example below, override method `getInitialProps`.

  > When you add getInitialProps in your custom app, do not forget to **call `fetchInitialProps` inside `getInitialProps`**.

  ```javascript
  // src/app.js
  const getApp = App => {
    const MyApp = props => (
      <div>
        <div id="pathname">{props.pathname}</div>
        <App />
      </div>
    );

    MyApp.getInitialProps = async ({ fetchInitialProps, appContext }) => {
      let pathname;
      if (appContext.req) {
        pathname = appContext.req.pathname;
      } else {
        pathname = window.location.pathname;
      }

      await fetchInitialProps();

      return {
        pathname,
      };
    };
    return MyApp;
  };

  export default getApp;
  ```

## Why Need To Custom App

- Persisting layout between page changes
- [Custom Error Boundaries](https://reactjs.org/docs/error-boundaries.html)
- Inject global state to pages
- Inject additional common data into pages
- Add a listener to router
- [Add global CSS](./basic-support.md#adding-a-global-stylesheet)

> `src/app.js` use HOC warp `<App />` layer by layer, just like a nesting doll. The HOC order is very important sometimes, especially for which HOC should be the closest to `<App />`. A other way to add the closest to `<App />` without care about order is [`src/runtime.js`](./custom-runtime.md).