[runtime](../overview.md) / [<internal\>](../modules/internal_.md) / ["@shuvi/router/lib/index"](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md) / Update

# Interface: Update<S\>

[internal](../modules/internal_.md).["@shuvi/router/lib/index"](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md).Update

A change to the current location.

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#state) = [`State`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#state) |

## Hierarchy

- **`Update`**

  ↳ [`Transition`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Transition.md)

## Table of contents

### Properties

- [action](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Update.md#action)
- [location](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Update.md#location)

## Properties

### action

• **action**: [`Action`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#action)

The action that triggered the change.

___

### location

• **location**: [`Location`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Location.md)<`S`\>

The new location.
