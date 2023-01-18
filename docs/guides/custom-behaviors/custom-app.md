---
sidebar_position: 1
id: custom-app
title: Custom App
---

Create a `src/app.js` or `src/app.ts` file to intervene shuvi app.


## `init`

run on initialization

**example:**

```ts title="src/app.ts"
import { InitFunction } from '@shuvi/runtime/app'

export const init = () => {
  console.log('init');
};
```

## `appContext`

Should return custom ctx data, mixin `ctx.appContext`, fired after `init`.

**example**:

```ts title="src/app.ts"
import { AppContextFunction } from '@shuvi/runtime/app'

export const appContext: AppContextFunction = ctx => {
  return {
    ...ctx,
    data: 1
  };
}
```


## `appComponent`


`appComponent` is a function that should return a component that is the arrow at the top of the entire application.

**example**:

```tsx title="src/app.ts"
import { AppComponentFunction } from '@shuvi/runtime/app'

export const appComponent: AppComponentFunction = async UserApp => {
  function AppComponent() {
    return (
      <div>
        <div>This is AppComponent</div>
        <UserApp />
      </div>
    );
  }
  return AppComponent;
};
```

```ts title="src/routes/page.js"
// src/routes/page.js
export default function Index() {
  return <div>Index Page</div>;
}

```

The **notes** shown layers of HOC in result HTML.

```html
// render result
<div id="__APP"> // container to render
  // highlight-next-line
  // appComponent HOC
  <div>
    <div>This is AppComponent</div>
    // highlight-next-line
    // index page
    <div>Index Page</div>
  </div>
</div>
```


## `dispose`

Will only run on the server side, when the page request is completed.

**example:**

```ts title="src/app.ts"
import { DisposeFunction } from '@shuvi/runtime/app';

export const dispose: DisposeFunction = () => {
  console.log('dispose');
};
```
