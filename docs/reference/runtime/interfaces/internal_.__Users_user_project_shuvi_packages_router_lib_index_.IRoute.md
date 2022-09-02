[runtime](../overview.md) / [<internal\>](../modules/internal_.md) / ["@shuvi/router/lib/index"](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md) / IRoute

# Interface: IRoute<RouteRecord\>

[internal](../modules/internal_.md).["@shuvi/router/lib/index"](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md).IRoute

## Type parameters

| Name | Type |
| :------ | :------ |
| `RouteRecord` | extends [`IRouteRecord`](IRouteRecord.md) = [`IRouteRecord`](IRouteRecord.md) |

## Hierarchy

- [`Path`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Path.md)

  ↳ **`IRoute`**

## Table of contents

### Properties

- [hash](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRoute.md#hash)
- [key](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRoute.md#key)
- [matches](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRoute.md#matches)
- [params](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRoute.md#params)
- [pathname](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRoute.md#pathname)
- [query](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRoute.md#query)
- [redirected](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRoute.md#redirected)
- [search](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRoute.md#search)
- [state](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRoute.md#state)

## Properties

### hash

• **hash**: `string`

A URL fragment identifier, beginning with a #.

#### Inherited from

[Path](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Path.md).[hash](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Path.md#hash)

___

### key

• **key**: `string`

___

### matches

• **matches**: ``null`` \| [`IRouteMatch`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRouteMatch.md)<`RouteRecord`\>[]

___

### params

• **params**: [`IParams`](../overview.md#iparams)

___

### pathname

• **pathname**: `string`

A URL pathname, beginning with a /.

#### Inherited from

[Path](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Path.md).[pathname](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Path.md#pathname)

___

### query

• **query**: `ParsedQuery`<`string`\>

The parsed URL search Object.

#### Inherited from

[Path](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Path.md).[query](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Path.md#query)

___

### redirected

• `Optional` **redirected**: `boolean`

___

### search

• **search**: `string`

A URL search string, beginning with a ?.

#### Inherited from

[Path](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Path.md).[search](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Path.md#search)

___

### state

• **state**: [`State`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#state)
