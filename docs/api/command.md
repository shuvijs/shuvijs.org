---
id: command
title: Command
sidebar_position: 2
---

## `shuvi dev`

- `shuvi dev [dir] [options]`
  - `dir` app root dirt
  - `options`
      - `--port <port: 3000>` specify port
      - `--host <host: localhost>` specify host
      - `--config <file: ./shuvi.config.js>` path to config file
```tip
shuvi dev ./ --port 3300 --host 0.0.0.0 --config ./shuvi.config.js
```

## `shuvi build`

- `shuvi build [dir] [options]`
    - `dir` app root dirt
    - `options`
        - `--public-path <url: _shuvi>` specify port
        - `--target <target: ssr>` 'specify the app output target. eg: spa'
        - `--router-history <history: browser>` specify the hisotry type. 'browser' or 'hash'
        - `--analyze` generate html file to help analyze webpack bundle
        - `--config <file: ./shuvi.config.js>` path to config file

```tip
shuvi build ./ --public-path _shuvi --target spa --router-history browser --config ./shuvi.config.js --analyze

```
## `shuvi serve`

- `shuvi serve [dir] [options]`
    - `dir` app root dirt
    - `options`
        - `--port <port: 3000>` specify port
        - `--host <host: localhost>` specify host
        - `--config <file: ./shuvi.config.js>` path to config file
```tip
shuvi serve ./ --port 3300 --host 0.0.0.0 --config ./shuvi.config.js
```

## `shuvi inspect`

