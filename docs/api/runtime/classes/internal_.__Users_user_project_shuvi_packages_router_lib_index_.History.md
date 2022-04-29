[runtime](../overview.md) / [<internal\>](../modules/internal_.md) / ["@shuvi/router/lib/index"](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md) / History

# Class: History

[internal](../modules/internal_.md).["@shuvi/router/lib/index"](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md).History

## Hierarchy

- **`History`**

  ↳ [`MemoryHistory`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.MemoryHistory.md)

  ↳ [`default`](internal_.default.md)

  ↳ [`default`](internal_.default-1.md)

## Table of contents

### Constructors

- [constructor](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md#constructor)

### Properties

- [\_blockers](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md#_blockers)
- [\_index](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md#_index)
- [\_updateState](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md#_updatestate)
- [action](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md#action)
- [doTransition](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md#dotransition)
- [location](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md#location)

### Methods

- [back](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md#back)
- [block](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md#block)
- [forward](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md#forward)
- [getIndexAndLocation](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md#getindexandlocation)
- [go](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md#go)
- [push](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md#push)
- [replace](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md#replace)
- [resolve](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md#resolve)
- [setup](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md#setup)
- [transitionTo](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md#transitionto)

## Constructors

### constructor

• **new History**()

## Properties

### \_blockers

• `Protected` **\_blockers**: [`Events`](../modules/internal_.md#events)<[`Blocker`](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.Blocker.md)<[`State`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#state)\>\>

___

### \_index

• `Protected` **\_index**: `number`

___

### \_updateState

• `Private` **\_updateState**: `any`

___

### action

• **action**: [`Action`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#action)

___

### doTransition

• **doTransition**: (`to`: [`PathRecord`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#pathrecord), `onComplete`: `Function`, `onAbort?`: `Function`) => `void`

#### Type declaration

▸ (`to`, `onComplete`, `onAbort?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `to` | [`PathRecord`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#pathrecord) |
| `onComplete` | `Function` |
| `onAbort?` | `Function` |

##### Returns

`void`

___

### location

• **location**: [`Location`](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.Location.md)<[`State`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#state)\>

## Methods

### back

▸ **back**(): `void`

#### Returns

`void`

___

### block

▸ `Abstract` **block**(`blocker`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blocker` | [`Blocker`](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.Blocker.md)<[`State`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#state)\> |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

___

### forward

▸ **forward**(): `void`

#### Returns

`void`

___

### getIndexAndLocation

▸ `Protected` `Abstract` **getIndexAndLocation**(): [`number`, [`Location`](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.Location.md)<[`State`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#state)\>]

#### Returns

[`number`, [`Location`](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.Location.md)<[`State`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#state)\>]

___

### go

▸ `Abstract` **go**(`delta`): `void`

Jump to the specified route by number

#### Parameters

| Name | Type |
| :------ | :------ |
| `delta` | `number` |

#### Returns

`void`

___

### push

▸ `Abstract` **push**(`to`, `options`): `void`

Jump to the specified route
```ts
router.push("/list");
router.push("/list?a=b");
router.push({
  pathname: "/list",
  search: "?a=b"
})
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | [`PathRecord`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#pathrecord) |
| `options` | [`PushOptions`](../interfaces/internal_.PushOptions.md) |

#### Returns

`void`

___

### replace

▸ `Abstract` **replace**(`to`, `options?`): `void`

 Jump to the specified route and replace the current history record

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | [`PathRecord`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#pathrecord) |
| `options?` | [`PushOptions`](../interfaces/internal_.PushOptions.md) |

#### Returns

`void`

___

### resolve

▸ **resolve**(`to`, `from?`): [`ResolvedPath`](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.ResolvedPath.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `any` |
| `from?` | `any` |

#### Returns

[`ResolvedPath`](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.ResolvedPath.md)

___

### setup

▸ `Abstract` **setup**(): `void`

#### Returns

`void`

___

### transitionTo

▸ **transitionTo**(`to`, `__namedParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | [`PathRecord`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#pathrecord) |
| `__namedParameters` | [`TransitionOptions`](../interfaces/internal_.TransitionOptions.md) |

#### Returns

`void`
