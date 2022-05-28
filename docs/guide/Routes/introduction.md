---
sidebar_position: 01
id: Introduction
---

## Pages

A **page** is a [React Component](https://reactjs.org/docs/components-and-props.html) exported from a `.js`, `.jsx`, `.ts`, or `.tsx` file in the `pages` directory. 

Each page is associated with a route based on its file name.

**Example**: If you create `pages/about.js` that exports a React component like below, it will be accessible at `/about`.

```jsx
function About() {
  return <div>About</div>
}

export default About
```

## Isomorph Render

shuvi support two modes that is **Server-side Rendering**(default) and **Single Page Application** for all pages(Only one mode can be selected).

> [change default mode, set ssr to false](../../api-reference/config.md#ssr)

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

### When does getInitialProps run

> `getInitialProps` should work with a **page**. Blocked render when it runing.

`getInitialProps` only runs on server-side and never runs on the browser. If a page uses `getInitialProps`, then:

 1. When you request this page directly, `getInitialProps` runs at request time, and this page will be rendered with the returned props

 2. When you request this page on client-side page transitions through [`Link`](../../api/runtime/overview.md#link), shuvi sends an API request to the server, which runs `getInitialProps`

It then returns `JSON` that contains the result of running `getInitialProps`, that `JSON` will be used to render the page. All this work will be handled automatically by Shuvi, so you don’t need to do anything extra as long as you have `getInitialProps` defined.

### What does getInitialProps ability

- inject props to component

  Just return object in `getInitialProps`, The object will be inject to component.

- data fetching on both server-side and client-side
  
  fetch data is common thing in `getInitialProps`, and it will **blocked render** during fetching.
  
- redirect before rendered

  request can be redirect to a new path immediately, and it will abort render step.
  
- throw error if necessary 
  
  If an error is thrown inside `getInitialProps`, it will show the `pages/500.js` file and status code will be 500. Check out the documentation for [500 page](../custom-error.md#500-page) to learn more on how to create it.
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

The [`getInitialProps` API reference](../../api/runtime/interfaces/IRouteComponentContext.md) covers all parameters and props that can be used with `getInitialProps`.

### Why server-side rendering?

There are three main reasons to create a Universal version of your application.

- Facilitate web crawlers through [search engine optimization (SEO)](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- Improve performance on mobile and low-powered devices
- Show the first page quickly with a [first-contentful paint (FCP)](https://web.dev/first-contentful-paint/)

## Routing

shuvi has a file-system based router built on the [concept of pages](#pages).

When a file is added to the `pages` directory, it's automatically available as a route.

The files inside the `pages` directory can be used to define most common patterns.

### Index routes

The router will automatically route files named `index` to the root of the directory.

- `pages/index.js` → `/`
- `pages/blog/index.js` → `/blog`

### Nested routes

The router supports nested files. If you create a nested folder structure, files will automatically be routed in the same way still.

- `pages/blog/first-post.js` → `/blog/first-post`
- `pages/dashboard/settings/username.js` → `/dashboard/settings/username`

### [Dynamic route segments](./dynamic-routes.md)

To match a dynamic segment, you can use the bracket syntax. This allows you to match named parameters.

- `pages/blog/[slug].js` → `/blog/:slug` (`/blog/hello-world`)
- `pages/[username]/settings.js` → `/:username/settings` (`/foo/settings`)
- `pages/post/[...all].js` → `/post/*` (`/post/2020/id/title`)

### Linking between pages

The shuvi router allows you to do client-side route transitions between pages, similar to a single-page application.

A React component called [`Link`](../../api/runtime/overview.md#link) is provided to do this client-side route transition.

```jsx
import { Link } from '@shuvi/runtime'

function Home() {
  return (
    <ul>
      <li>
        <Link to="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link to="/about">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link to="/blog/hello-world">
          <a>Blog Post</a>
        </Link>
      </li>
    </ul>
  )
}

export default Home
```

The example above uses multiple links. Each one maps a path (`href`) to a known page:

- `/` → `pages/index.js`
- `/about` → `pages/about.js`
- `/blog/hello-world` → `pages/blog/[slug].js`

### Linking to dynamic paths

You can also use interpolation to create the path, which comes in handy for [dynamic route segments](#dynamic-route-segments). For example, to show a list of posts which have been passed to the component as a prop:

```jsx
import { Link } from '@shuvi/runtime'

function Posts({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={`/blog/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Posts
```

> To access the `router` object in a React component you can use [`useRouter`](../../api/runtime/overview.md#userouter).

what's more, [routes can also set by `shuvi.config`](../../api-reference/config.md#routes)