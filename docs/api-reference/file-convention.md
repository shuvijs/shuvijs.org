---
id: file-convention
title: File Convention
sidebar_position: 3
---

## Project Directory Structure
The directory structure of an shuvi project is as below:

```
.
├── .shuvi/
├── dist/
├── public/
├── src/
│   ├── apis/
│   │   ├── */
│   │   │   ├── index.js
│   │   │   └── *.js
│   │   ├── index.js
│   │   └── *.js
│   ├── pages/
│   │   ├── */
│   │   │   ├── index.jsx
│   │   │   ├── *.jsx
│   │   │   └── _middlewares.js
│   │   ├── index.jsx
│   │   ├── *.jsx
│   │   └── _middlewares.js
│   ├── app.jsx
│   ├── error.js
│   ├── runtime.js
│   ├── server.js
│   ├── document.js
│   └── document.ejs
└── shuvi.config.js
```
:::info

All `.js` or `.jsx` files could be `.ts` or `tsx` files.

:::


### .shuvi/

Shuvi temporary directory. It stores a lot of shuvi internal files and will be regenerated when `shuvi dev` or `shuvi build` execute.

### shuvi.config.js
To customize project configurations.

See details at [api/shuvi.config.js](./config.md)

### dist/
Default output directory.

### public/
All files under this directory will be copied to output directory.

### src/app.jsx
Root component that wraps all of the route components.

### src/pages/\*\*/\_middlewares.js
Defines server middlewares that will be applied at the corresponding route depending on file path.


### src/pages/\*\*/\*.jsx
Defines page components that will be applied at the corresponding route depending on file path.

### src/apis/\*\*/\*.js
Defines api handler that will be applied at the corresponding route depending on file path.
The handler is an async function with 2 parameters which are request and response.
```js title="src/apis/**/*.js"
 export default (req, res, next) => {
   res.statusCode = 200;
   res.end('200 OK');
 };
```

### document.js

Customize some of the server logic that generates HTML.

### document.ejs

Customize basic HTML template.