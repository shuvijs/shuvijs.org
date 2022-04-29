[runtime](../overview.md) / [<internal\>](../modules/internal_.md) / IRouteComponentContext

# Interface: IRouteComponentContext

[internal](../modules/internal_.md).IRouteComponentContext

route component getInitialProps params `context`

## Table of contents

### Properties

- [appContext](internal_.IRouteComponentContext.md#appcontext)
- [error](internal_.IRouteComponentContext.md#error)
- [isServer](internal_.IRouteComponentContext.md#isserver)
- [params](internal_.IRouteComponentContext.md#params)
- [pathname](internal_.IRouteComponentContext.md#pathname)
- [query](internal_.IRouteComponentContext.md#query)
- [redirect](internal_.IRouteComponentContext.md#redirect)

## Properties

### appContext

• **appContext**: [`IApplicationCreaterContext`](../modules/internal_.md#iapplicationcreatercontext)

Application context object, which accompanies the entire application life cycle
[IApplicationCreaterClientContext](internal_.IApplicationCreaterClientContext.md) for client
[IApplicationCreaterServerContext](internal_.IApplicationCreaterServerContext.md) for server

___

### error

• **error**: [`IErrorHandler`](../modules/internal_.md#ierrorhandler)

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

• **query**: [`IQuery`](../modules/internal_.md#iquery)

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
