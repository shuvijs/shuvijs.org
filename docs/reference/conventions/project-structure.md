---
id: project-structure
title: Project Structure
---

Here is a detailed preview of what directories and files a standard Shuvi.js project has.

```
.
├── build
├── src
│   ├── routes
│   │   ├── home
│   │   │   └── page.ts          // url: /home
│   │   ├── user
│   │   │   └── $id
│   │   │       └── page.ts      // url: /user/123
│   │   ├── about
│   │   │      └── page.ts       // url: /about
│   │   └── layout.ts
│   ├── app.ts
│   ├── error.ts
│   └── server.ts
├── .env
├── package.json
├── shuvi.config.ts
└── tsconfig.json
```

## Configuration File

Shuvi uses `shuvi.config.ts` to expose some configuration options.

See also [Configuration](../../reference/configuration/general.md).

## Routes Directory

The `src/routes` directory contains your Application Routes. Shuvi reads all the conventional files(e.g. page.js) inside this directory and automatically creates the router configuration for you.

## Application Module

Module exports from `src/app.ts` will be run on both client and server. It can be used to custom some behaviors of Shuvi.

See also [Custom App](../../guides/custom-behaviors/custom-app.md).

## Error Handling

`src/error.ts` exports a component that is used to custom error page.

See also [Custom Error](../../guides/custom-behaviors/custom-error.md).

## Server Module

Module exports from `src/server.ts` will only be run on server.It can be used to custom some behaviors of Shuvi.

See also [Custom Server](../../guides/custom-behaviors/custom-server.md).
