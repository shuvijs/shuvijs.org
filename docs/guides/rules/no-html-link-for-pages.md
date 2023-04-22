# No HTML link for pages

> Prevent usage of `<a>` elements to navigate to internal Shuvi.js pages.

### Why This Error Occurred

An `<a>` element was used to navigate to a page route without using the `Link` component, causing unnecessary full page refreshes.

The `Link` component is required in order to enable client-side route transitions between pages and provide a single-page app experience.

### Possible Ways to Fix It

Make sure to import the `Link` component and wrap anchor elements that route to different page routes.

**Before:**

```jsx
function Home() {
  return (
    <div>
      <a href="/about">About Us</a>
    </div>
  );
}
```

**After:**

```jsx
import { Link } from "@shuvi/runtime";

function Home() {
  return (
    <div>
      <Link href="/about">About Us</Link>
    </div>
  );
}

export default Home;
```

### Options

#### `routesDir`

This rule can normally locate your `routes` directory automatically.

In some cases, you may also need to configure this rule directly by providing a `routes` directory. This can be a path or an array of paths.

```json
{
  "rules": {
    "@shuvi/shuvi/no-html-link-for-pages": ["error", "packages/my-app/src/routes"]
  }
}
```

### Useful Links

- [`Link`](/docs/api/runtime/components#link)
