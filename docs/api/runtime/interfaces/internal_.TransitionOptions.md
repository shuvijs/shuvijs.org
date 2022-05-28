[runtime](../overview.md) / [<internal\>](../modules/internal_.md) / TransitionOptions

# Interface: TransitionOptions

[internal](../modules/internal_.md).TransitionOptions

## Table of contents

### Properties

- [action](internal_.TransitionOptions.md#action)
- [redirectedFrom](internal_.TransitionOptions.md#redirectedfrom)
- [state](internal_.TransitionOptions.md#state)

### Methods

- [onAbort](internal_.TransitionOptions.md#onabort)
- [onTransition](internal_.TransitionOptions.md#ontransition)

## Properties

### action

• `Optional` **action**: [`Action`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#action)

___

### redirectedFrom

• `Optional` **redirectedFrom**: [`PathRecord`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#pathrecord)

___

### state

• `Optional` **state**: [`State`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#state)

## Methods

### onAbort

▸ `Optional` **onAbort**(): `void`

#### Returns

`void`

___

### onTransition

▸ **onTransition**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Object` |
| `event.location` | [`Location`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Location.md)<[`State`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#state)\> |
| `event.state` | [`HistoryState`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#historystate) |
| `event.url` | `string` |

#### Returns

`void`
