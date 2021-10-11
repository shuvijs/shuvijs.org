---
id: router-match-rules
title: router match rules
---

# New dynamic Route Matching rules

1. A _param_ is denoted by a colon `:`  
1. colon `:` is **necessary** for _param_

When a route is matched, the value of its _params_ will be exposed as `params`. 

```js
const User = {
  template: '<div>User {{ $route.params.id }}</div>',
}
// these are passed to `createRouter`
const routes = [
  // dynamic segments start with a colon
  { path: '/users/:id', component: User },
]
```

You can have multiple _params_ in the same route, and they will map to corresponding fields on `params`. Examples:

| pattern                        | matched path             | params                                   |
| ------------------------------ | ------------------------ | ---------------------------------------- |
| /users/:username               | /users/eduardo           | `{ username: 'eduardo' }`                |
| /users/:username/posts/:postId | /users/eduardo/posts/123 | `{ username: 'eduardo', postId: '123' }` |

## Custom Regexp in params

```javascript
const routes = [
  // /:productName -> matches /o,/p
  { path: '/:productName' },
]
```

In some scenarios we don't want to add that static section `/o`/`p`. However, `orderId` is always a number while `productName` can be anything, so we can specify a custom regexp for a param in parentheses:

```js
const routes = [
  // /:orderId -> matches only numbers
  { path: '/:orderId(\\d+)' },
  // /:productName -> matches anything else
  { path: '/:productName' },
]
```

Now, going to `/25` will match `/:orderId` while going to anything else will match `/:productName`. The order of the `routes` array doesn't even matter!

> Make sure to **escape backslashes (\\)** like we did with `\d` (becomes `\\d`) to actually pass the backslash character in a string in JavaScript.

## Repeatable params

If you need to match routes with multiple sections like `/first/second/third`, you should mark a param as repeatable with `*` (0 or more) and `+` (1 or more):

```js
const routes = [
  // /:chapters -> matches /one, /one/two, /one/two/three, etc
  { path: '/:chapters+' },
  // /:chapters -> matches /, /one, /one/two, /one/two/three, etc
  { path: '/:chapters*' },
]
```

```js
// given { path: '/:chapters*', name: 'chapters' },
router.resolve({ name: 'chapters', params: { chapters: [] } }).href
// produces /
router.resolve({ name: 'chapters', params: { chapters: ['a', 'b'] } }).href
// produces /a/b

// given { path: '/:chapters+', name: 'chapters' },
router.resolve({ name: 'chapters', params: { chapters: [] } }).href
// throws an Error because `chapters` is empty
```

These can also be combined with custom Regexp by adding them **after the closing parentheses**:

```js
const routes = [
  // only match numbers
  // matches /1, /1/2, etc
  { path: '/:chapters(\\d+)+' },
  // matches /, /1, /1/2, etc
  { path: '/:chapters(\\d+)*' },
]
```

## Optional parameters

You can also mark a parameter as optional by using the `?` modifier (0 or 1):

```js
const routes = [
  // will match /users and /users/posva
  { path: '/users/:userId?' },
  // will match /users and /users/42
  { path: '/users/:userId(\\d+)?' },
]
```

Note that `*` technically also marks a parameter as optional but `?` parameters cannot be repeated.

## Catch all / 404 Not found Route

```js
const routes = [
  // will match everything and put it under `$route.params._other`
  { path: '/:_other(.*)', name: 'NotFound', component: NotFound },
  // will match anything starting with `/user-` and put it under `$route.params.afterUser`
  { path: '/user-:afterUser(.*)', component: UserGeneric },
]
```

### different between math all
| pattern                        | matched path             | \$route.params                           |
| ------------------------------ | ------------------------ | ---------------------------------------- |
| /:chapters*                    | /one                     | `{ chapters: ['one'] }`                  |
| /:chapters(.*)                 | /one                     | `{ chapters: 'one' }`                   |

This will give you an array of params instead of a string and will also require you to pass an array when using named routes:

## Debugging

If you need to dig how your routes are transformed into Regexp to understand why a route isn't being matched or, to report a bug, you can use the [path ranker tool](https://paths.esm.dev/?p=AAMeJSyAwR4UbFDAFxAcAGAIJXMAAA..#). It supports sharing your routes through the URL.
