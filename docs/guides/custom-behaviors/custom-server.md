---
sidebar_position: 3
id: custom-server
title: Custom Server
---

Create a `src/server.js` or `src/server.ts` file to customize server behaviors.

:::caution

These methods **_only work in server side_**

:::


## `getPageData`

To add extra data to `pageData` object of the application

Example:

```ts title="src/server.ts"
import { GetPageDataFunction } from '@shuvi/runtime/server';

export const getPageData: GetPageDataFunction = () => {
  return {
    foo: 'bar'
  };
}
```

## `handlePageRequest`

To modify page handler. You can do most of works that a middleware can do.

Example:

```ts title="src/server.ts"

import { HandlePageRequestFunction } from '@shuvi/runtime/server';

export const handlePageRequest: HandlePageRequestFunction = originalHandlePageRequest => {
  return async (req, res) => {
    if (req.query.error) {
      res.status(500).end();
    } else {
      await originalHandlePageRequest(req, res);
    }
  };
};
```

## `modifyHtml`

To modify structured html document properties and elements.

Example:

```ts title="src/server.ts"

import { ModifyHtmlFunction } from '@shuvi/runtime/server';

export const modifyHtml: ModifyHtmlFunction = async (documentProps, { req, appContext }) => {
  documentProps.headTags.push({
    tagName: "meta",
    attrs: {
      name: "testDocumentProps",
    },
  });
};
```

## `sendHtml`

To modify the logic of sending html to browser.

Example:

```ts title="src/server.ts"
import etag from 'etag'
import { SendHtmlFunction } from '@shuvi/runtime/server';

export const sendHtml: SendHtmlFunction = originalSendHtml => async (html, { req, res }) => {
  if (!res.headersSent) {
    res.setHeader('ETag', etag(html));
  }
  await originalSendHtml(html, { req, res });
};
```
