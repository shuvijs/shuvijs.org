# No Head Element

> Prevent usage of `<head>` element.

### Why This Error Occurred

A `<head>` element was used to include page-level metadata, but this can cause unexpected behavior in a Shuvi.js application. Use Shuvi.js' built-in `<Head />` component instead.

### Possible Ways to Fix It

Import and use the `<Head />` component:

```jsx
import { Head } from '@shuvi/runtime'

function Index() {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </>
  )
}

export default Index
```

### Useful Links

- [`<Head />`](/docs/api/runtime/components#head)
