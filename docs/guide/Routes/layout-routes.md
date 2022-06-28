---
sidebar_position: 03
id: layout-routes
---
## Routes

**Layout routes** is a directory structure for convention routing.
Which produces the corresponding `React` routing hierarchy.
Read from **src/routes** directory.

**Page route** is divided into two types: **layout** and **page**.
Which correspond to page.js and layout.js respectively. 
The extension can also be replaced with `.ts`, `.jsx`, and `.tsx` . 
`page` or `layout` should export a `react component` by default.

> All the examples below use `.js` as the extension.


## Page

Page can be used as a leaf node of a route, 
the name of the folder is the corresponding path, 
and it can be nested.

**example**: If you want to create a route like `/about`, 
you can create a directory with the path is `src/routes/about`, 
and then create `page.js` under this directory.

```jsx
export default function About() {
  return <div>about</div>
}
```

**example**: If you also want to create a sub-route,
for example, the path is /about/me.
You can create a directory with the path is `src/routes/about/me`,
and then create `page.js` under this directory.

```jsx
export default function Me() {
  return <div>me</div>
}
```

Now visiting `/about` and `/about/me` will see the corresponding two components rendered.

### Index routes

The router will automatically route `page.js` to the root of the directory.

- `routes/page.js` → `/`
- `routes/blog/page.js` → `/blog`

### Nested routes

The router supports nested files. If you create a nested folder structure, files will automatically be routed in the same way still.

- `routes/blog/first-post/page.js` → `/blog/first-post`
- `routes/dashboard/settings/username/page.js` → `/dashboard/settings/username`


### Dynamic route segments

To match a dynamic segment, you can use the bracket syntax. This allows you to match named parameters.

- `routes/blog/[slug]/page.js` → `/blog/:slug (/blog/hello-world)`
- `routes/[username]/settings/page.js` → `/:username/settings (/foo/settings)`
- `routes/post/[...all]./page.js` → `/post/* (/post/2020/id/title)`


## Layout

Layout is suitable for scenarios that require nested routing.
Similar to the slot of Vue.js.

Layout can be understood as a more advanced page, it has all the capabilities of page, 
and has the ability to share areas without repeated rendering and scheduling of sub-routes.

**Example**: A small example of a shared top navigation bar.

**`src/routes/dashboard/layout.js`** → `/dashboard`
```jsx
import { RouterView } from '@shuvi/runtime';

export default function Layout() {
  return (
    <div>
      <header>
        <h1>dashboard</h1>
        <nav>
          <Link to="categories">categories</Link>
          <Link to="articles">articles</Link>
          <Link to="tags">tags</Link>
        </nav>
      </header>
      <main>
        <RouterView />
      </main>
    </div>
  )
}
```

**`src/routes/dashboard/categories/page.js`** → `/dashboard/categories`

```jsx
export default function () {
  return <div>categories</div>
}
```
**`src/routes/dashboard/articles/page.js`** → `/dashboard/articles`

```jsx
export default function () {
  return <div>articles</div>
}
```
**`src/routes/dashboard/tags/page.js`** → `/dashboard/tags`

```jsx
export default function () {
  return <div>tags</div>
}
```

**`src/routes/dashboard/page.js`** → `/dashboard` can be used as index route.

```jsx
export default function () {
  return <div>index</div>
}
```

Now, 
accessing any sub-route under /dashboard/ will render the matching layout and page together.
When the route changes, the layout will not be unmounted.
Implemented regional component sharing

> **Notice**: Layout and page do not conflict with dynamic segment and can be freely combined.
