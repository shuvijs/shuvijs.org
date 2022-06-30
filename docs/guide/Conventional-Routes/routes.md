---
sidebar_position: 01
id: Routes
---

## Introduction

Shuvi provides a file system-based convention routing rule.
Read the agreed files from **src/routes** in the project root directory, 
such as page.js, **`layout.js`**, **`api.js`**, **`middleware.js`**. 
The extension of the routing file is not limited to **`.js`**, but can also be **`.ts`**, **`.tsx`**, and **`.jsx`**.
Which produces the corresponding **`React Component`** routing hierarchy.

> Note that all future examples will use the .js extension.

## File structure

There are three route types of **`routing system`**, page.js, and layout.js.
**`directories`** and **`files`** under src/routes determine the rules for generating paths.


**Example**:

| file path                   | route path |
|-----------------------------|------------|
| src/routes/**page.js**      | /          |
| src/routes/**a/page.js**    | /a         |
| src/routes/**a/a1/page.js** | /a/a1      |
| src/routes/**b/layout.js**  | /b         |
| src/routes/**b/page.js**    | /b         |
| src/routes/**b/b1/page.js** | /b/b1      |
| src/routes/**b/b2/page.js** | /b/b2      |
| src/routes/**c/d/page.js**  | /c/d       |

> You should see layout.js, We'll talk about it later.


## Page


### Usage

page is leaf node in the routing tree，should export a **`React component`** by default.
Can be nested in any folder.

1. Create a `page.js` file under your `routes` directory.
2. Finally, export a React component function from the `page.js` file by default.


### Example

`/` → `src/routes/page.js`:

```jsx
//src/routes/page.js
export default function Index() {
  return <div>index</div>
}
```

`/a/b` → `src/routes/a/b/page.js`:

```jsx
//src/routes/a/b/page.js
export default function Index() {
  return <div>a-b</div>
}
```



## Dynamic Segments

Defining routes by using predefined paths is not always enough for complex applications. In shuvi you can add brackets to a page (`[param]`) to create a dynamic route (a.k.a. url slugs, pretty urls, and others).

Consider the following page `routes/post/[pid]/page.js`:

```jsx
import { useCurrentRoute } from '@shuvi/app'

const Post = () => {
  const { params } = useCurrentRoute()
  const { pid } = params;

  return <p>Post: {pid}</p>
}

export default Post
```

Any route like `/post/1`, `/post/abc`, etc. will be matched by `routes/post/[pid]/page.js`.

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

Multiple dynamic route segments work the same way. The page `routes/post/[pid]/[comment]/page.js` will match the route `/post/abc/a-comment` and its `params` object will be:

```json
{ "pid": "abc", "comment": "a-comment" }
```

### Catch all routes

Dynamic routes can be extended to catch all paths by adding three dots (`...`) inside the brackets. For example:

- `routes/post/[...slug].js` matches `/post/a`, but also `/post/a/b`, `/post/a/b/c` and so on.

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

For example, `routes/post/[[...slug]]/page.js` will match `/post`, `/post/a`, `/post/a/b`, and so on.

The main difference between catch all and optional catch all routes is that with optional, the route without the parameter is also matched (`/post` in the example above).

The `params` objects are as follows:

```json lines
{ } // GET `/post` (empty object)
{ "slug": ["a"] } // `GET /post/a` (single-element array)
{ "slug": ["a", "b"] } // `GET /post/a/b` (multi-element array)
```

## general rules

files under `src/routes`, file path `routes/*/*.js`

| path                           | route        | matched url                   |
|--------------------------------|--------------|-------------------------------|
| routes/post/create/page.js     | /post/create | /post/create                  |
| routes/post/[pid]/page.js      | /post/:pid   | /post/1, /post/abc            |
| routes/post/[[pid]]/page.js    | /post/:pid?  | /post, /post/1, /post/abc     |
| routes/post/[...pid]/page.js   | /post/:pid+  | /post/1/2, /post/a/b/c        |
| routes/post/[[...pid]]/page.js | /post/:pid*  | /post, /post/1/2, /post/a/b/c |

> [details about matched rules](router-match-rules)



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
