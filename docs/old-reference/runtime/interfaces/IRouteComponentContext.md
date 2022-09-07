[runtime](../overview.md) / IRouteComponentContext

# Interface: IRouteComponentContext

route component getInitialProps params `context`

## Hierarchy

- **`IRouteComponentContext`**

  ↳ [`IAppComponentContext`](IAppComponentContext.md)

## Table of contents

### Properties

- [appContext](IRouteComponentContext.md#appcontext)
- [error](IRouteComponentContext.md#error)
- [isServer](IRouteComponentContext.md#isserver)
- [params](IRouteComponentContext.md#params)
- [pathname](IRouteComponentContext.md#pathname)
- [query](IRouteComponentContext.md#query)
- [redirect](IRouteComponentContext.md#redirect)

## Properties

### appContext

• **appContext**: [`IApplicationCreaterContext`](../overview.md#iapplicationcreatercontext)

Application context object, which accompanies the entire application life cycle
[IApplicationCreaterClientContext](IApplicationCreaterClientContext.md) for client
[IApplicationCreaterServerContext](IApplicationCreaterServerContext.md) for server

___

### error

• **error**: [`IErrorHandler`](../overview.md#ierrorhandler)

throw error if necessary
```ts
error(502, 'custom error describe')
```

___

### isServer

• **isServer**: `boolean`

is running on server, if server is true, client will be false

___

### params

• **params**: [`IParams`](../overview.md#iparams)

the params of current url

eg. url /x?name=xx path /:lng
```ts
{lng:x}
```

___

### pathname

• **pathname**: `string`

current url path

___

### query

• **query**: [`IQuery`](../overview.md#iquery)

the query string of current url

eg. url /x?name=xx
```ts
{name:xx}
```

___

### redirect

• **redirect**: [`IRedirectFn`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRedirectFn.md)

redirect function

```ts
redirect('/target')
redirect(301, '/target')
```
