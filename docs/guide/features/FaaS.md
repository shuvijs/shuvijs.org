---
sidebar_position: 90
id: FaaS Suppport
---

shuvi can be Functions as a Service for other server or even docker to handle [request](https://nodejs.org/api/http.html#class-httpclientrequest) and [response](https://nodejs.org/api/http.html#class-httpserverresponse).

- work with koa server

    ```javascript
    const Koa = require('koa');
    const { shuvi } = require('shuvi');
    
    const port = parseInt(process.env.PORT, 10) || 3000;
    const dev = process.env.NODE_ENV !== 'production';
    const config = process.env.CONFIGOVERRIDES
      ? JSON.parse(process.env.CONFIGOVERRIDES)
      : {};
    const app = shuvi({
      dev,
      cwd: __dirname,
      config
    });
    
    app.prepare().then(() => {
      const server = new Koa();
      const handle = app.getRequestHandler();
    
      server.use(async (ctx, next) => {
        ctx.res.statusCode = 200;
        await handle(ctx.req, ctx.res);
        ctx.respond = false;
        next();
      });
    
      server.listen(port, () => {
        console.log(`> Koa server Ready on http://localhost:${port}`);
      });
    });
    ```

- work with express server

    ```javascript
    const express = require('express');
    const { shuvi } = require('shuvi');
    
    const port = parseInt(process.env.PORT, 10) || 3000;
    const dev = process.env.NODE_ENV !== 'production';
    const config = process.env.CONFIGOVERRIDES
      ? JSON.parse(process.env.CONFIGOVERRIDES)
      : {};
    const app = shuvi({
      dev,
      cwd: __dirname,
      config
    });
    
    app.prepare().then(() => {
      const handle = app.getRequestHandler();
      const server = express();
    
      server.all('*', (req, res) => {
        return handle(req, res);
      });
    
      server.listen(port, err => {
        if (err) throw err;
        console.log(`> Express server Ready on http://localhost:${port}`);
      });
    });
    ```
