---
sidebar_position: 3
id: custom-server
title: Custom Server
---

## How to Custom Document

To create a custom error page you can create a `src/server.js` file. `export` with `getPageData`, `modifyHtml`,`renderToHTML` and `middlewares`, all that methods **_only work in server side_**.

- `getPageData` add extra data to application.
- `modifyHtml` modify document props.
- `renderToHTML` last chance to modify rendered html before it be sended to browser.

```javascript
// src/server.js
export const getPageData = () => {
  return {
    foo: "bar",
  };
};

export const handlePageRequest = (originalHandlePageRequest, appContext) => {
  return async (req, res) => {
    if (req.query.error) {
      res.status(500).end();
    } else {
      await originalHandlePageRequest(req, res);
    }
  };
};

export const modifyHtml = (documentProps, appContext) => {
  documentProps.headTags.push({
    tagName: "meta",
    attrs: {
      name: "testDocumentProps",
    },
  });
};
```
