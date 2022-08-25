---
sidebar_position: 1
id: Custom App Context
---

Create a `src/app.js` file to intervene shuvi app.


## init

run on initialization

**example:**

```js
export const init = () => {
  console.log('init');
};
```

## appContext

Should return custom ctx data, mixin `ctx.appContext`, fired after `init`.

**example**:

```js
export const appContext = ctx => {
  return {
    ...ctx,
    data: 1
  };
}
```


## appComponent


'appComponent' is a function that should return a component that is the arrow at the top of the entire application.

**example**:

```javascript
// src/app.js

export const appComponent = UserApp => {
  function AppComponent(props) {
    return (
      <div>
        <div>This is AppComponent</div>
        <UserApp {...props} />
      </div>
    );
  }
  if (UserApp.getInitialProps)
    AppComponent.getInitialProps = UserApp.getInitialProps;
  return AppComponent;
};
```

```javascript
// src/routes/page.js
export default function Index(props) {
  return <div>Index Page: {props.index}</div>;
}

```

The **notes** shown layers of HOC in result HTML.

```html
// render result
<div id="__APP"> // container to render
  // highlight-next-line
  // getAppComponent HOC
  <div>
    <div>This is AppComponent</div>
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


## dispose

Will only run on the server side, when the page request is completed.

**example:**

```js
export const dispose = () => {
  console.log('dispose');
};
```
