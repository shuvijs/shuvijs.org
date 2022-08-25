---
sidebar_position: 3
id: Custom document
---

shuvi generate HTML by [ejs engine](https://ejs.co/). It works both `spa` and `ssr` mode.

```template
// default template
<!doctype html>
<html<%- htmlAttrs %>>
<head>
  <%- head %>
</head>
<body>
  <%- main %>
  <%- script %>
</body>
</html>
```

Intervention HTML with handle `documentProps`, Keyof `documentProps` is `htmlAttrs, headTags, mainTags, scriptTags`, all is ejs variables.

handle `documentProps` in function `onDocumentProps` and `modifyHtml`.

> Detail type of `onDocumentProps` is [here](../../api/runtime/interfaces/RuntimeServer.IDocumentModule.md#ondocumentprops)

## How to Custom Document

There is way to modify default ejs template, add `src/document.ejs`:

```template
// /src/document.ejs
<!doctype html>
<html<%- htmlAttrs %>>
<head>
  <%- head %>
</head>
<body test="<%= test %>">
  <%- main %>
  <%- script %>
</body>
</html>
```

`test="<%= test %>"` is new variable.

To create a custom error page you can create a `src/document.js` file.
`document.js` collaboratively with [`document.ejs`](#how-to-custom-document):
```javascript
// src/document.js
export function getTemplateData() {
  return { test: 1 }; // inject data to ejs template
}

export function onDocumentProps(documentProps, context) {
  console.log('context: ', context);
  documentProps.headTags.push({ // modify documentProps 
    tagName: "meta",
    attrs: {
      name: "test",
      content: "1"
    }
  });

  return documentProps;
}
```

> `document.ejs` and `document.js` can work independently or collaboratively. In the example, they work collaboratively.

render results:

```template
// html
<!doctype html>
<html>
<head>
<meta name="test" content="1">    
</head>
<body test="1">
</body>
</html>
```

## Why Need To Custom Document

- import some external resources, such as CDN
