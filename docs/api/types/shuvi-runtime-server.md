---
id: shuvi-runtime-server
title: "@shuvi/runtime/server"
---

## ShuviApiHandler

```ts
interface ShuviApiHandler {
  (req: ApiRequest, res: ApiResponse): void | Promise<void>;
}
```

### ApiRequest

```ts
interface ApiRequest extends IncomingMessage {
  url: string;
  pathname: string;
  query: IQuery;
  params: IParams;
  cookies: {
    [key: string]: string;
  };
  body?: {
    [key: string]: any;
  };
}
```

### ApiResponse

```ts
interface ApiResponse<T> extends ServerResponse {
  send: Send<T>;
  json: Send<T>;
  status: (statusCode: number) => IApiRes<T>;
  redirect(url: string): IApiRes<T>;
  redirect(status: number, url: string): IApiRes<T>;
}
```

## HandlePageRequestFunction

```ts
type IHandlePageRequest = (req: IncomingMessage, res: ServerResponse) => any;

function handlePageRequest(
  originalHandlePageRequest: IHandlePageRequest
): IHandlePageRequest;
```

## ModifyHtmlFunction

```ts
type IHtmlAttrs = { textContent?: string } & {
  [x: string]: string | number | undefined | boolean;
};

interface IHtmlTag<TagNames = string> {
  tagName: TagNames;
  attrs: IHtmlAttrs;
  innerHTML?: string;
}

interface IHtmlDocument {
  htmlAttrs: IHtmlAttrs;
  headTags: IHtmlTag<
    "meta" | "link" | "style" | "script" | "noscript" | "title"
  >[];
  mainTags: IHtmlTag[];
  scriptTags: IHtmlTag<"script">[];
}

function modifyHtml(
  document: IHtmlDocument,
  appContext: AppContext
): void | Promise<void>;
```

- see [AppContext](./shuvi-runtime.md#appcontext)
