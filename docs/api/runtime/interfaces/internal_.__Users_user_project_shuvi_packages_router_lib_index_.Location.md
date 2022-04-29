[runtime](../overview.md) / [<internal\>](../modules/internal_.md) / ["@shuvi/router/lib/index"](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md) / Location

# Interface: Location<S\>

[internal](../modules/internal_.md).["@shuvi/router/lib/index"](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md).Location

An entry in a history stack. A location contains information about the
URL path, as well as possibly some arbitrary state and a key.

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#state) = [`State`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#state) |

## Hierarchy

- [`Path`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Path.md)

  ↳ **`Location`**

## Table of contents

### Properties

- [hash](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Location.md#hash)
- [key](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Location.md#key)
- [pathname](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Location.md#pathname)
- [query](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Location.md#query)
- [redirectedFrom](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Location.md#redirectedfrom)
- [search](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Location.md#search)
- [state](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Location.md#state)

## Properties

### hash

• **hash**: `string`

A URL fragment identifier, beginning with a #.

#### Inherited from

[Path](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Path.md).[hash](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Path.md#hash)

___

### key

• **key**: `string`

A unique string associated with this location. May be used to safely store
and retrieve data in some other storage API, like `localStorage`.

Note: This value is always "default" on the initial location.

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

### redirectedFrom

• `Optional` **redirectedFrom**: [`PathRecord`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#pathrecord)

___

### search

• **search**: `string`

A URL search string, beginning with a ?.

#### Inherited from

[Path](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Path.md).[search](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Path.md#search)

___

### state

• **state**: `S`

An object of arbitrary data associated with this location.
