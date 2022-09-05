---
id: components
title: Components
---

## `<Head>`

Append elements to the head of the page.

### Props

```ts
interface HeadProps {
  children?: React.ReactNode;
}
```

### Example

```tsx
import { Head } from "@shuvi/runtime";

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p>Hello world!</p>
    </div>
  );
}
```

## `<Link>`

This component renders an anchor tag and is the primary way the user will navigate around your website. Anywhere you would have used `<a href="...">` you should now use `<Link to="..."/>` to get all the performance benefits of client-side routing in Shuvi.

### Props

```ts
interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  to: PathRecord;

  // route.push or route.replace
  replace?: boolean;

  state?: State;

  // default to true, whether to prefetch resource
  prefetch?: boolean;
}
```

### Example

```tsx
import { Link } from "@shuvi/runtime";

export default function Navigation() {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/about">about</Link>
    </nav>
  );
}
```

## `<RouterView>`

Component to display the current route the user is at.

### Example

With the following routes definition:

```ts
export const routes = [
  {
    path: "users",
    component: "Users",
    children: [
      {
        path: ":userId",
        component: "UserDetail",
      },
    ],
  },
];
```

```tsx
function App() {
  return (
    <div>
      <h1>App</h1>
      <Router>
        // this will render Users component
        <Outlet /> 
      <Router>
    </div>
  );
}

function Users() {
  return (
    <div>
      <h1>Users</h1>
      // this will render UserDetail component
      <Outlet />
    </div>
  );
}
```
