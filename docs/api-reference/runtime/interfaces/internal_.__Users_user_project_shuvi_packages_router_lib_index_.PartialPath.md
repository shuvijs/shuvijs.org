[runtime](../overview.md) / [<internal\>](../modules/internal_.md) / ["@shuvi/router/lib/index"](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md) / PartialPath

# Interface: PartialPath

[internal](../modules/internal_.md).["@shuvi/router/lib/index"](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md).PartialPath

A partial Path object that may be missing some properties.

## Hierarchy

- **`PartialPath`**

  ↳ [`PartialLocation`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.PartialLocation.md)

  ↳ [`PartialLocation`](internal_.PartialLocation.md)

## Table of contents

### Properties

- [hash](internal_.__Users_user_project_shuvi_packages_router_lib_index_.PartialPath.md#hash)
- [pathname](internal_.__Users_user_project_shuvi_packages_router_lib_index_.PartialPath.md#pathname)
- [query](internal_.__Users_user_project_shuvi_packages_router_lib_index_.PartialPath.md#query)
- [search](internal_.__Users_user_project_shuvi_packages_router_lib_index_.PartialPath.md#search)

## Properties

### hash

• `Optional` **hash**: `string`

The URL fragment identifier, beginning with a #.

___

### pathname

• `Optional` **pathname**: `string`

The URL pathname, beginning with a /.

___

### query

• `Optional` **query**: `ParsedQuery`<`string`\>

The parsed URL search Object.

___

### search

• `Optional` **search**: `string`

The URL search string, beginning with a ?.
