[runtime](../overview.md) / IAppComponentContext

# Interface: IAppComponentContext

app component getInitialProps params `context`

## Hierarchy

- [`IRouteComponentContext`](IRouteComponentContext.md)

  ↳ **`IAppComponentContext`**

## Table of contents

### Properties

- [appContext](IAppComponentContext.md#appcontext)
- [error](IAppComponentContext.md#error)
- [isServer](IAppComponentContext.md#isserver)
- [params](IAppComponentContext.md#params)
- [pathname](IAppComponentContext.md#pathname)
- [query](IAppComponentContext.md#query)
- [redirect](IAppComponentContext.md#redirect)

### Methods

- [fetchInitialProps](IAppComponentContext.md#fetchinitialprops)

## Properties

### appContext

• **appContext**: [`IApplicationCreaterContext`](../overview.md#iapplicationcreatercontext)

Application context object, which accompanies the entire application life cycle
[IApplicationCreaterClientContext](IApplicationCreaterClientContext.md) for client
[IApplicationCreaterServerContext](IApplicationCreaterServerContext.md) for server

#### Inherited from

[IRouteComponentContext](IRouteComponentContext.md).[appContext](IRouteComponentContext.md#appcontext)

___

### error

• **error**: [`IErrorHandler`](../overview.md#ierrorhandler)

throw error if necessary
```ts
error(502, 'custom error describe')
```

#### Inherited from

[IRouteComponentContext](IRouteComponentContext.md).[error](IRouteComponentContext.md#error)

___

### isServer

• **isServer**: `boolean`

is running on server, if server is true, client will be false

#### Inherited from

[IRouteComponentContext](IRouteComponentContext.md).[isServer](IRouteComponentContext.md#isserver)

___

### params

• **params**: [`IParams`](../overview.md#iparams)

the params of current url

eg. url /x?name=xx path /:lng
```ts
{lng:x}
```

#### Inherited from

[IRouteComponentContext](IRouteComponentContext.md).[params](IRouteComponentContext.md#params)

___

### pathname

• **pathname**: `string`

current url path

#### Inherited from

[IRouteComponentContext](IRouteComponentContext.md).[pathname](IRouteComponentContext.md#pathname)

___

### query

• **query**: [`IQuery`](../overview.md#iquery)

the query string of current url

eg. url /x?name=xx
```ts
{name:xx}
```

#### Inherited from

[IRouteComponentContext](IRouteComponentContext.md).[query](IRouteComponentContext.md#query)

___

### redirect

• **redirect**: [`IRedirectFn`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRedirectFn.md)

redirect function

```ts
redirect('/target')
redirect(301, '/target')
```

#### Inherited from

[IRouteComponentContext](IRouteComponentContext.md).[redirect](IRouteComponentContext.md#redirect)

## Methods

### fetchInitialProps

▸ **fetchInitialProps**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>
