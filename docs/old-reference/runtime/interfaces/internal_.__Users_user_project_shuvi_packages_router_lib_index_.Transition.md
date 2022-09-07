[runtime](../overview.md) / [<internal\>](../modules/internal_.md) / ["@shuvi/router/lib/index"](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md) / Transition

# Interface: Transition<S\>

[internal](../modules/internal_.md).["@shuvi/router/lib/index"](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md).Transition

A change to the current location that was blocked. May be retried
after obtaining user confirmation.

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#state) = [`State`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#state) |

## Hierarchy

- [`Update`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Update.md)<`S`\>

  ↳ **`Transition`**

## Table of contents

### Properties

- [action](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Transition.md#action)
- [location](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Transition.md#location)

### Methods

- [retry](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Transition.md#retry)

## Properties

### action

• **action**: [`Action`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#action)

The action that triggered the change.

#### Inherited from

[Update](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Update.md).[action](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Update.md#action)

___

### location

• **location**: [`Location`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Location.md)<`S`\>

The new location.

#### Inherited from

[Update](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Update.md).[location](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Update.md#location)

## Methods

### retry

▸ **retry**(): `void`

Retries the update to the current location.

#### Returns

`void`
