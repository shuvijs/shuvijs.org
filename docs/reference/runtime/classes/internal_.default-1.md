[runtime](../overview.md) / [<internal\>](../modules/internal_.md) / default

# Class: default

[internal](../modules/internal_.md).default

## Hierarchy

- [`History`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](internal_.default-1.md#constructor)

### Properties

- [\_blockers](internal_.default-1.md#_blockers)
- [\_history](internal_.default-1.md#_history)
- [\_index](internal_.default-1.md#_index)
- [action](internal_.default-1.md#action)
- [doTransition](internal_.default-1.md#dotransition)
- [location](internal_.default-1.md#location)

### Methods

- [back](internal_.default-1.md#back)
- [block](internal_.default-1.md#block)
- [forward](internal_.default-1.md#forward)
- [getIndexAndLocation](internal_.default-1.md#getindexandlocation)
- [go](internal_.default-1.md#go)
- [push](internal_.default-1.md#push)
- [replace](internal_.default-1.md#replace)
- [resolve](internal_.default-1.md#resolve)
- [setup](internal_.default-1.md#setup)
- [transitionTo](internal_.default-1.md#transitionto)

## Constructors

### constructor

• **new default**()

#### Overrides

[History](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md).[constructor](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md#constructor)

## Properties

### \_blockers

• `Protected` **\_blockers**: [`Events`](../modules/internal_.md#events)<[`Blocker`](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.Blocker.md)<[`State`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#state)\>\>

#### Inherited from

[History](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md).[_blockers](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md#_blockers)

___

### \_history

• `Private` **\_history**: `any`

___

### \_index

• `Protected` **\_index**: `number`

#### Inherited from

[History](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md).[_index](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md#_index)

___

### action

• **action**: [`Action`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#action)

#### Inherited from

[History](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md).[action](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md#action)

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

#### Inherited from

[History](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md).[doTransition](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md#dotransition)

___

### location

• **location**: [`Location`](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.Location.md)<[`State`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#state)\>

#### Inherited from

[History](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md).[location](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md#location)

## Methods

### back

▸ **back**(): `void`

#### Returns

`void`

#### Inherited from

[History](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md).[back](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md#back)

___

### block

▸ **block**(`blocker`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blocker` | [`Blocker`](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.Blocker.md)<[`State`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#state)\> |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Overrides

[History](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md).[block](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md#block)

___

### forward

▸ **forward**(): `void`

#### Returns

`void`

#### Inherited from

[History](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md).[forward](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md#forward)

___

### getIndexAndLocation

▸ `Protected` **getIndexAndLocation**(): [`number`, [`Location`](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.Location.md)<[`State`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#state)\>]

#### Returns

[`number`, [`Location`](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.Location.md)<[`State`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#state)\>]

#### Overrides

[History](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md).[getIndexAndLocation](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md#getindexandlocation)

___

### go

▸ **go**(`delta`): `void`

Jump to the specified route by number

#### Parameters

| Name | Type |
| :------ | :------ |
| `delta` | `number` |

#### Returns

`void`

#### Overrides

[History](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md).[go](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md#go)

___

### push

▸ **push**(`to`, `__namedParameters?`): `void`

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
| `__namedParameters?` | [`PushOptions`](../interfaces/internal_.PushOptions.md) |

#### Returns

`void`

#### Overrides

[History](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md).[push](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md#push)

___

### replace

▸ **replace**(`to`, `__namedParameters?`): `void`

 Jump to the specified route and replace the current history record

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | [`PathRecord`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#pathrecord) |
| `__namedParameters?` | [`PushOptions`](../interfaces/internal_.PushOptions.md) |

#### Returns

`void`

#### Overrides

[History](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md).[replace](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md#replace)

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

#### Overrides

[History](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md).[resolve](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md#resolve)

___

### setup

▸ **setup**(): `void`

#### Returns

`void`

#### Overrides

[History](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md).[setup](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md#setup)

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

#### Inherited from

[History](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md).[transitionTo](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md#transitionto)
