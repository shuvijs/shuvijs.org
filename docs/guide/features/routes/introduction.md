---
id: introduction
title: Introduction
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

## Routing

shuvi has a file-system based router built on the [concept of pages](#Pages).

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

### [Dynamic route segments](./dynamic-routes)

To match a dynamic segment, you can use the bracket syntax. This allows you to match named parameters.

- `pages/blog/[slug].js` → `/blog/:slug` (`/blog/hello-world`)
- `pages/[username]/settings.js` → `/:username/settings` (`/foo/settings`)
- `pages/post/[...all].js` → `/post/*` (`/post/2020/id/title`)

### Linking between pages

The Next.js router allows you to do client-side route transitions between pages, similar to a single-page application.

A React component called `Link` is provided to do this client-side route transition.

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

[comment]: <add useRouter url>
> To access the `router` object in a React component you can use [`useRouter`](#index).
