---
id: getting-started
title: Getting Started
---

## Introduction

shuvi is a front-end application development solution that integrates modern tool chains and focuses on improving development experience and efficiency.

## System Requirements

- [node 14.x](https://github.com/nodejs/Release)

- npm with node version

## Start

Create a new directory and init `package.json`

```sh
mkdir shuvi-app & cd shuvi-app
npm init -y
```

Install shuvi

```sh
npm install shuvi@last
```

Create `src/pages` directory, then generate a page with `hello, world`:
```sh
mkdir -p src/pages
cat <<EOF >> /src/pages/index.js
export default () => <div>hello, world</div>
EOF
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
  
Shuvi is built around the concept of React Component exported from a .js, .jsx, .ts, or .tsx file in the pages directory.

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

