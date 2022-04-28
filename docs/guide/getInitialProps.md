---
sidebar_position: 03
id: GetInitialProps
---

## Isomorph Render

shuvi support two modes that is **Server-side Rendering**(default) and **Single Page Application** for all pages(Only one mode can be selected).

> change default mode, set ssr to false

For example, suppose that your page needs to SEO friendly or frequently updated data(fetched from an external API). You can write `getInitialProps` which fetches this data and passes it to `Page` like below:

```jsx
function Page({ data }) {
  // Render data...
}

// This gets called on every request
Page.getInitialProps = async ctx => {
  // Fetch data from external API
  const res = await fetch(`https://.../data`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Page
```

## When does getInitialProps run

> `getInitialProps` should work with a **page**. Blocked render when it runing.

`getInitialProps` only runs on server-side and never runs on the browser. If a page uses `getInitialProps`, then:

 1. When you request this page directly, `getInitialProps` runs at request time, and this page will be rendered with the returned props

 - [] api getInitialProps link
 1. When you request this page on client-side page transitions through [`shuvi/link`](#666), shuvi sends an API request to the server, which runs `getInitialProps`

It then returns `JSON` that contains the result of running `getInitialProps`, that `JSON` will be used to render the page. All this work will be handled automatically by Shuvi, so you don’t need to do anything extra as long as you have `getInitialProps` defined.

## What does getInitialProps ability

- inject props to component

  Just return object in `getInitialProps`, The object will be inject to component.

- data fetching on both server-side and client-side
  
  fetch data is common thing in `getInitialProps`, and it will **blocked render** during fetching.
  
- redirect before rendered

  request can be redirect to a new path immediately, and it will abort render step.
  
- throw error if necessary 
  
  If an error is thrown inside `getInitialProps`, it will show the `pages/500.js` file and status code will be 500. Check out the documentation for [500 page](./custom-error.md#500-page) to learn more on how to create it.
  ```javascript
  function errPage({ position }) {
      return <div id="ctx-error">Ctx.error Page Render: {position}</div>;
  }
  errPage.getInitialProps = function (ctx) {
      if (ctx.query.a) {
          ctx.error(502, 'custom error describe');
      }
      return {
          position: ctx.isServer ? 'server' : 'client'
      };
  };
  export default errPage;
  ```

- [] api getInitialProps link

The [`getInitialProps` API reference](#666) covers all parameters and props that can be used with `getInitialProps`.

## Why server-side rendering?

There are three main reasons to create a Universal version of your application.

- Facilitate web crawlers through [search engine optimization (SEO)](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- Improve performance on mobile and low-powered devices
- Show the first page quickly with a [first-contentful paint (FCP)](https://web.dev/first-contentful-paint/)
