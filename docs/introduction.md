---
id: introduction
title: Introduction
slug: /
---

## Introduction

shuvi is a front-end application development solution that integrates modern tool chains, focuses on improving development experience and efficiency.

## System Requirements

- [node ^16.x](https://github.com/nodejs/Release)

## Start

Create a new directory and init `package.json`

```sh
mkdir my-app && cd my-app
npm init -y
```

Install shuvi

```sh
npm i shuvi
```

Create `src/pages` directory, then generate a page with `hello, world`:

```sh
mkdir -p src/pages &&
echo "export default () => <div>hello, world</div>" > ./src/pages/index.js
```

Open `package.json` and add the following `scripts`:

```json
{
  "scripts": {
    "dev": "shuvi dev",
    "build": "shuvi build",
    "serve": "shuvi serve"
  }
}
```

- `shuvi dev` - which starts shuvi in development mode
- `shuvi build` - which builds the application for production usage
- `shuvi serve` - which starts a shuvi production server

Shuvi.js is built around the concept of React Component exported from a .js, .jsx, .ts, or .tsx file in the pages directory.

## Development

run development command and visit [localhost:3000](http://localhost:3000)

```sh
npm run dev
```

## production

run production command to bundle application

```sh
npm run build
```

start a server for visit

```sh
npm run serve
```
