[runtime](../overview.md) / [<internal\>](../modules/internal_.md) / ["@shuvi/router/lib/index"](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md) / PartialLocation

# Interface: PartialLocation<S\>

[internal](../modules/internal_.md).["@shuvi/router/lib/index"](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md).PartialLocation

A partial Location object that may be missing some properties.

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#state) = [`State`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#state) |

## Hierarchy

- [`PartialPath`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.PartialPath.md)

  ↳ **`PartialLocation`**

## Table of contents

### Properties

- [hash](internal_.__Users_user_project_shuvi_packages_router_lib_index_.PartialLocation.md#hash)
- [key](internal_.__Users_user_project_shuvi_packages_router_lib_index_.PartialLocation.md#key)
- [pathname](internal_.__Users_user_project_shuvi_packages_router_lib_index_.PartialLocation.md#pathname)
- [query](internal_.__Users_user_project_shuvi_packages_router_lib_index_.PartialLocation.md#query)
- [search](internal_.__Users_user_project_shuvi_packages_router_lib_index_.PartialLocation.md#search)
- [state](internal_.__Users_user_project_shuvi_packages_router_lib_index_.PartialLocation.md#state)

## Properties

### hash

• `Optional` **hash**: `string`

The URL fragment identifier, beginning with a #.

#### Inherited from

[PartialPath](internal_.__Users_user_project_shuvi_packages_router_lib_index_.PartialPath.md).[hash](internal_.__Users_user_project_shuvi_packages_router_lib_index_.PartialPath.md#hash)

___

### key

• `Optional` **key**: `string`

A unique string associated with this location. May be used to safely store
and retrieve data in some other storage API, like `localStorage`.

Note: This value is always "default" on the initial location.

___

### pathname

• `Optional` **pathname**: `string`

The URL pathname, beginning with a /.

#### Inherited from

[PartialPath](internal_.__Users_user_project_shuvi_packages_router_lib_index_.PartialPath.md).[pathname](internal_.__Users_user_project_shuvi_packages_router_lib_index_.PartialPath.md#pathname)

___

### query

• `Optional` **query**: `ParsedQuery`<`string`\>

The parsed URL search Object.

#### Inherited from

[PartialPath](internal_.__Users_user_project_shuvi_packages_router_lib_index_.PartialPath.md).[query](internal_.__Users_user_project_shuvi_packages_router_lib_index_.PartialPath.md#query)

___

### search

• `Optional` **search**: `string`

The URL search string, beginning with a ?.

#### Inherited from

[PartialPath](internal_.__Users_user_project_shuvi_packages_router_lib_index_.PartialPath.md).[search](internal_.__Users_user_project_shuvi_packages_router_lib_index_.PartialPath.md#search)

___

### state

• `Optional` **state**: `S`

An object of arbitrary data associated with this location.
