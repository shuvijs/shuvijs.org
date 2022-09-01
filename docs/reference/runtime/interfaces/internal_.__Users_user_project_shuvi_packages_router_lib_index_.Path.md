[runtime](../overview.md) / [<internal\>](../modules/internal_.md) / ["@shuvi/router/lib/index"](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md) / Path

# Interface: Path

[internal](../modules/internal_.md).["@shuvi/router/lib/index"](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md).Path

The pathname, search, and hash values of a URL.

## Hierarchy

- **`Path`**

  ↳ [`Location`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Location.md)

  ↳ [`IRoute`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRoute.md)

## Table of contents

### Properties

- [hash](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Path.md#hash)
- [pathname](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Path.md#pathname)
- [query](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Path.md#query)
- [search](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Path.md#search)

## Properties

### hash

• **hash**: `string`

A URL fragment identifier, beginning with a #.

___

### pathname

• **pathname**: `string`

A URL pathname, beginning with a /.

___

### query

• **query**: `ParsedQuery`<`string`\>

The parsed URL search Object.

___

### search

• **search**: `string`

A URL search string, beginning with a ?.
