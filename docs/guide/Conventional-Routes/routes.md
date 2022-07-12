---
sidebar_position: 01
id: Routes
---

## Introduction

Shuvi provides a file system-based convention routing rule.
Read the agreed files from **src/routes** in the project root directory, 
such as page.js, **`layout.js`**, **`api.js`**, **`middleware.js`**. 
Which produces the corresponding **`React Component`** routing hierarchy.



## File structure

The names of the directories under src/routes determine the rules for generating routes

**Example**:

| directory path  | route path |
|-----------------|------------|
| src/routes/     | /          |
| src/routes/a    | /a         |
| src/routes/a/a1 | /a/a1      |
| src/routes/b    | /b         |
| src/routes/b/b1 | /b/b1      |
| src/routes/b/b2 | /b/b2      |

## Dynamic Segments

Defining routes by using predefined paths is not always enough for complex applications. 
In shuvi you can add brackets to a directory name (`[param]`) to create a dynamic route (a.k.a. url slugs, pretty urls, and others).

Consider the following directory `routes/post/[pid]`:

Any route like `/post/1`, `/post/abc`, etc. will be matched by `routes/post/[pid]`.


For example, the route `/post/abc` will have the following `params` object:

```json
{ "pid": "abc" }
```

Similarly, the route `/post/abc?foo=bar` will have the following `params` and `query` object:

```json lines
// params
{"pid": "abc"}
// query
{ "foo": "bar" }
```

Multiple dynamic route segments work the same way. The page `routes/post/[pid]/[comment]` will match the route `/post/abc/a-comment` and its `params` object will be:

```json
{ "pid": "abc", "comment": "a-comment" }
```


### Catch all routes

Dynamic routes can be extended to catch all paths by adding three dots (`...`) inside the brackets. For example:

- `routes/post/[...slug]` matches `/post/a`, but also `/post/a/b`, `/post/a/b/c` and so on.

> **Note**: You can use names other than `slug`, such as: `[...param]`

Matched parameters will be sent as a query parameter (`slug` in the example) to the page, and it will always be an array, so, the path `/post/a` will have the following `params` object:

```json
{ "slug": ["a"] }
```

And in the case of `/post/a/b`, and any other matching path, new parameters will be added to the array, like so:

```json
{ "slug": ["a", "b"] }
```

### Optional catch all routes

Catch all routes can be made optional by including the parameter in double brackets (`[[...slug]]`).

For example, `routes/post/[[...slug]]` will match `/post`, `/post/a`, `/post/a/b`, and so on.

The main difference between catch all and optional catch all routes is that with optional, the route without the parameter is also matched (`/post` in the example above).

The `params` objects are as follows:

```json lines
{ "slug": [] } // GET `/post` (empty array)
{ "slug": ["a"] } // `GET /post/a` (single-element array)
{ "slug": ["a", "b"] } // `GET /post/a/b` (multi-element array)
```

### general rules


| path                   | route        | matched url                   |
|------------------------|--------------|-------------------------------|
| routes/post/create     | /post/create | /post/create                  |
| routes/post/[pid]      | /post/:pid   | /post/1, /post/abc            |
| routes/post/[[pid]]    | /post/:pid?  | /post, /post/1, /post/abc     |
| routes/post/[...pid]   | /post/:pid+  | /post/1/2, /post/a/b/c        |
| routes/post/[[...pid]] | /post/:pid*  | /post, /post/1/2, /post/a/b/c |

> [details about matched rules](router-match-rules)


## Page

The directory name determines the path, page.js determines the rendered content.
`page.js` should export a **`React component`** by default.page.js is leaf node in the routing tree，
Can be nested in any folder.

> Note that all future examples will use the .js extension.
> The extension of the routing file is not limited to **`.js`**, but can also be **`.ts`**, **`.tsx`**, and **`.jsx`**.


### Usage

1. Create a `page.js` file under your `routes` directory.
2. Finally, export a React component function from the `page.js` file by default.


### Example


```jsx
export default function Index() {
  return <div>index</div>
}
```

```jsx
export default function Index() {
  return <div>a-b</div>
}
```

## Layout


Layout is suitable for scenarios that require nested routing.
Similar to the `<router-view>` of `Vue-router`.

Layout can be understood as a more advanced page, it has all the capabilities of page,
and has the ability to share areas without repeated rendering and scheduling of sub-routes.

### Usage


1. Create a `layout.js` file under your `routes` directory.
2. Finally, export a React component function from the `layout.js` file by default.
3. Use 'RouterView Component' to render your child routes


### Example

A small example of a shared top navigation bar.

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
