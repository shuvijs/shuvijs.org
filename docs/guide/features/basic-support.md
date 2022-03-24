---
sidebar_position: 01
id: Basic Support
---

## Supported Browsers and Features

Shuvi supports **IE11 and all modern browsers** (Edge, Firefox, Chrome, Safari, Opera, et al) with no required configuration.

## Polyfills

We transparently inject polyfills required for IE11 compatibility. In addition, we also inject widely used polyfills, including:

- [**Promise**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [**fetch**](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [**Object.assign**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign).
- [**Symbol**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol).
- [**Spread syntax (...)**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

### client-Side Polyfills

Use node native module belows on client-side, will not throw error when bundled.

- [stream](https://www.npmjs.com/package/stream-browserify) 
- [path](https://www.npmjs.com/package/path-browserify) 
- [crypto](https://www.npmjs.com/package/crypto-browserify) 
- [buffer, Buffer](https://www.npmjs.com/package/buffer) 
- [vm](https://www.npmjs.com/package/vm-browserify) 
- [process](https://www.npmjs.com/package/process) 

## JavaScript Language Features

shuvi allows you to use the latest JavaScript features out of the box. 

javascript files can be extended with `.js, .jsx, .ts, or .tsx`;

In addition to [ES6 features](https://github.com/lukehoban/es6features), also supports:

- [Async/await](https://github.com/tc39/ecmascript-asyncawait) (ES2017)
- [Object Rest/Spread Properties](https://github.com/tc39/proposal-object-rest-spread) (ES2018)
- [Dynamic `import()`](https://github.com/tc39/proposal-dynamic-import) (ES2020)
- [Optional Chaining](https://github.com/tc39/proposal-optional-chaining) (ES2020)
- [Nullish Coalescing](https://github.com/tc39/proposal-nullish-coalescing) (ES2020)
- [Class Fields](https://github.com/tc39/proposal-class-fields) and [Static Properties](https://github.com/tc39/proposal-static-class-features) (part of stage 3 proposal)
- and more!

## Typescript Support

shuvi has built-in TypeScript support. shuvi provide types both runtime and plugins.

- [ ] link runtime and plugins type, https://nextjs.org/docs/basic-features/typescript
   
## CSS Support

shuvi allows you to import CSS files from a JavaScript file.
This is possible because Next.js extends the concept of [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) beyond JavaScript.

### Adding a Global Stylesheet

To add a stylesheet to your application, import the CSS file within `pages/_app.js`.

For example, consider the following stylesheet named `styles.css`:

```css
body {
  font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;
  padding: 20px 20px 60px;
  max-width: 680px;
  margin: 0 auto;
}
```

Create a [`pages/_app.js` file](./custom-app.md) if not already present.
Then, [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) the `styles.css` file.

```jsx
import '../styles.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

These styles (`styles.css`) will apply to all pages and components in your application.
Due to the global nature of stylesheets, and to avoid conflicts, you may **only import them inside [`pages/_app.js`](#666)**.

In development, expressing stylesheets this way allows your styles to be hot reloaded as you edit them—meaning you can keep application state.

In production, all CSS files will be automatically concatenated into a single minified `.css` file.

### Import styles from `node_modules`

For global stylesheets, like `bootstrap` or `nprogress`, you should import the file inside `pages/_app.js`.
For example:

```jsx
// pages/_app.js
import 'bootstrap/dist/css/bootstrap.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

For importing CSS required by a third party component, you can do so in your component. For example:

```tsx
// components/ExampleDialog.js
import { useState } from 'react'
import { Dialog } from '@reach/dialog'
import VisuallyHidden from '@reach/visually-hidden'
import '@reach/dialog/styles.css'

function ExampleDialog(props) {
  const [showDialog, setShowDialog] = useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)

  return (
    <div>
      <button onClick={open}>Open Dialog</button>
      <Dialog isOpen={showDialog} onDismiss={close}>
        <button className="close-button" onClick={close}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>×</span>
        </button>
        <p>Hello there. I am a dialog</p>
      </Dialog>
    </div>
  )
}
```

### Adding Component-Level CSS

shuvi supports [CSS Modules](https://github.com/css-modules/css-modules) using the `[name].module.css` file naming convention.

CSS Modules locally scope CSS by automatically creating a unique class name.
This allows you to use the same CSS class name in different files without worrying about collisions.

This behavior makes CSS Modules the ideal way to include component-level CSS.
CSS Module files **can be imported anywhere in your application**.

For example, consider a reusable `Button` component in the `components/` folder:

First, create `components/Button.module.css` with the following content:

```css
/*
You do not need to worry about .error {} colliding with any other `.css` or
`.module.css` files!
*/
.error {
  color: white;
  background-color: red;
}
```

Then, create `components/Button.js`, importing and using the above CSS file:

```jsx
import styles from './Button.module.css'

export function Button() {
  return (
    <button
      type="button"
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object.
      className={styles.error}
    >
      Destroy
    </button>
  )
}
```

CSS Modules are an _optional feature_ and are **only enabled for files with the `.module.css` extension**.
Regular `<link>` stylesheets and global CSS files are still supported.

In production, all CSS Module files will be automatically concatenated into **many minified and code-split** `.css` files.
These `.css` files represent hot execution paths in your application, ensuring the minimal amount of CSS is loaded for your application to paint.

### Sass Support

shuvi allows you to import Sass using both the `.scss` and `.sass` extensions.
You can use component-level Sass via CSS Modules and the `.module.scss` or `.module.sass` extension.

Sass support has the same benefits and restrictions as the built-in CSS support detailed above.

> **Note**: Sass supports [two different syntaxes](https://sass-lang.com/documentation/syntax), each with their own extension.
> The `.scss` extension requires you use the [SCSS syntax](https://sass-lang.com/documentation/syntax#scss),
> while the `.sass` extension requires you use the [Indented Syntax ("Sass")](https://sass-lang.com/documentation/syntax#the-indented-syntax).
>
> If you're not sure which to choose, start with the `.scss` extension which is a superset of CSS, and doesn't require you learn the
> Indented Syntax ("Sass").

## Runtime Config

Runtime config is a Store for application storage constants values. 

Users can get the Store by call `getRuntimeConfig` everywhere both client-side and server-side.

```javascript
import { getRuntimeConfig } from '@shuvi/runtime';

const isServer = typeof window === 'undefined';
const runtimeConfig = getRuntimeConfig();

const getApp = App => () =>
  (
    <div>
      <div id="app">{isServer ? null : runtimeConfig.a}</div>
      <App />
    </div>
  );

export default getApp;
```

> The Store key which start with `$` only can be got on server-side.

## Dotenv

shuvi support [dotenv](https://github.com/motdotla/dotenv) by default. Loads environment variables from a `.env` file into [process.env](https://nodejs.org/docs/latest/api/process.html#process_process_env).

shuvi can loaded env files that under application root directory and files name should include `process.env.NODE_ENV`, The priority and file name rules as showed below:

```javascript
const mode = process.env.NODE_ENV;
// Priority top to bottom
const dotenvFiles = [
  `.env.${mode}.local`,
  `.env.local`,
  `.env.${mode}`,
  '.env'
];
```

## Global Constant

shuvi inject some global constant to replaces variables in your code with other values or expressions at **compile** time. [examples usage](https://webpack.js.org/plugins/define-plugin/#usage)

collect constants form `process.env`, `config.env` and some is shuvi defined.

  - `process.env`: The key should startWith `SHUVI_PUBLIC_`.
  
  - `config.env`: The key should match Regex `/^(?:NODE_.+)|^(?:__.+)$/i`.

  - shuvi defined

    - `'process.env.NODE_ENV': JSON.stringify(isDev ? 'development' : 'production')`
    - `__BROWSER__: isClientSide?true:false,`
    - `'process.env': JSON.stringify('{}')` **only inject on client-side**

## Dynamic Import


shuvi supports ES2020 [dynamic `import()`](https://github.com/tc39/proposal-dynamic-import) for JavaScript. With it you can import JavaScript modules dynamically and work with them. They also work with SSR.

In the following example, we implement fuzzy search using `fuse.js` and only load the module dynamically in the browser after the user types in the search input:

You can think of dynamic imports as another way to split your code into manageable chunks.

React components can also be imported using dynamic imports, but in this case we use it in conjunction with `dynamic` to make sure it works like any other React Component. Check out the sections below for more details on how it works.

### Basic usage

In the following example, the module `../components/hello` will be dynamically loaded by the page:

```jsx
import { dynamic } from '@shuvi/runtime';

const Hello = dynamic(() => import('../components/helloComponent'));

export default Hello;
```

`helloComponent` will be the default component returned by `../components/helloComponent`. It works like a regular React Component, and you can pass props to it as you normally would.

> **Note**: In `import('path/to/component')`, the path must be explicitly written. It can't be a template string nor a variable. Furthermore the `import()` has to be inside the `dynamic()` call for shuvi to be able to match webpack bundles / module ids to the specific `dynamic()` call and preload them before rendering. `dynamic()` can't be used inside of React rendering as it needs to be marked in the top level of the module for preloading to work, similar to `React.lazy`.

### With named exports

If the dynamic component is not the default export, you can use a named export too. Consider the module `../components/hello.js` which has a named export `Hello`:

```jsx
export function Hello() {
  return <p>Hello!</p>
}
```

To dynamically import the `Hello` component, you can return it from the [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) returned by [`import()`](https://github.com/tc39/proposal-dynamic-import#example), like so:

```jsx
import { dynamic } from "@shuvi/runtime";

const DynamicComponent = dynamic(() =>
  import('../components/hello').then((mod) => mod.Hello)
)

function Mod() {
  return (
    <div>
      <Header />
      <DynamicComponent />
    </div>
  )
}

export default Mod
```

### With custom loading component

An optional `loading` component can be added to render a loading state while the dynamic component is being loaded. For example:

```jsx
import { dynamic } from "@shuvi/runtime";

const DynamicComponentWithCustomLoading = dynamic(
  () => import('../components/hello'),
  { loading: () => <p>LOADING</p> }
)

function Load() {
  return (
    <div>
      <Header />
      <DynamicComponentWithCustomLoading />
    </div>
  )
}

export default Load
```

### With no SSR

You may not always want to include a module on server-side. For example, when the module includes a library that only works in the browser.

```jsx
import { dynamic } from "@shuvi/runtime";

const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/hello'),
  { ssr: false }
)

function NoSSR() {
  return (
    <div>
      <Header />
      <DynamicComponentWithNoSSR />
    </div>
  )
}

export default NoSSR
```

### Dynamic Invalid

If there is already a normal module by `import`, `dynamic` will be invalid.

```javascript
import { dynamic } from "@shuvi/runtime";
import Welcome from "../components/welcome";

const Welcome2 = dynamic(() => import("../components/welcome"));

export default () => (
  <div>
    <Welcome name="normal" />
    <Welcome2 name="dynamic" />
  </div>
);
```

## Serving Static Files

To serve static files such as images, CSS files, and JavaScript files, All files under the `/public` will be static resources for visit
   
   ```javascript
   // /public/user.json
   {
      "name": "foo"
   }
   ```
   visit url: `/_shuvi/user.json`

> `_shuvi` is publicPath, `user.json` is relative path to `/public`


## Change Public Path

Default publicPath is `_shuvi`, There is a way to override runtime publicPath:

   ```javascript
   // /src/document
   import { IDENTITY_RUNTIME_PUBLICPATH } from '@shuvi/shared/lib/constants';
   
   export function onDocumentProps(documentProps) {
      documentProps.headTags.push({
         tagName: 'script',
         attrs: {
            name: 'test',
         },
         innerHTML: `${IDENTITY_RUNTIME_PUBLICPATH} = "/client-overwrite/"`
      });
   
      return documentProps;
   }
   ```
> override code should run ahead of other codes
