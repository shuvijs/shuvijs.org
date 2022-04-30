---
sidebar_position: 81
id: Custom Runtime
---

Create a `src/runtime.js` file to intervene shuvi runtime.


The example shown intervene `<App />`. 

> `getRootAppComponent` is closest HOC to `<App />`. 

> `getAppComponent` is outermost HOC to [User Custom APP(or not custom)](./custom-app.md).

```javascript
// src/runtime.js
export const getRootAppComponent = App => {
  function RootAppComponent(props) {
    return (
      <div>
        <div>This is getRootAppComponent</div>
        <App {...props} />
      </div>
    );
  }
  if (App.getInitialProps)
    RootAppComponent.getInitialProps = App.getInitialProps;
  return RootAppComponent;
};

export const getAppComponent = UserApp => {
  function AppComponent(props) {
    return (
      <div>
        <div>This is getAppComponent</div>
        <UserApp {...props} />
      </div>
    );
  }
  if (UserApp.getInitialProps)
    AppComponent.getInitialProps = UserApp.getInitialProps;
  return AppComponent;
};
```

[user custom app code link](./custom-app.md#example-override-getInitialProps)

```javascript
// src/pages/index.js
export default function Index(props) {
  return <div>Index Page: {props.index}</div>;
}
Index.getInitialProps = function () {
  return {
    index: 'index props'
  };
};
```

The **notes** shown layers of HOC in result HTML.

```html
// render result
<div id="__APP"> // container to render
  // highlight-next-line
  // getAppComponent HOC
  <div>
    <div>This is getAppComponent</div>
    <div>
      // highlight-next-line
      // user custom app
      <div id="pathname">pathname: /</div>
      // highlight-next-line
      // getRootAppComponent HOC
      <div>
        <div>This is getRootAppComponent</div>
        // highlight-next-line
        // index page
        <div>Index Page: index props</div>
      </div>
    </div>
    </div>
  </div>
</div>
```