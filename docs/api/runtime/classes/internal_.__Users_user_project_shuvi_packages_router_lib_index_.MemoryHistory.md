[runtime](../overview.md) / [<internal\>](../modules/internal_.md) / ["@shuvi/router/lib/index"](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md) / MemoryHistory

# Class: MemoryHistory

[internal](../modules/internal_.md).["@shuvi/router/lib/index"](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md).MemoryHistory

## Hierarchy

- [`History`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md)

  ↳ **`MemoryHistory`**

## Table of contents

### Constructors

- [constructor](internal_.__Users_user_project_shuvi_packages_router_lib_index_.MemoryHistory.md#constructor)

### Properties

- [\_blockers](internal_.__Users_user_project_shuvi_packages_router_lib_index_.MemoryHistory.md#_blockers)
- [\_entries](internal_.__Users_user_project_shuvi_packages_router_lib_index_.MemoryHistory.md#_entries)
- [\_index](internal_.__Users_user_project_shuvi_packages_router_lib_index_.MemoryHistory.md#_index)
- [action](internal_.__Users_user_project_shuvi_packages_router_lib_index_.MemoryHistory.md#action)
- [doTransition](internal_.__Users_user_project_shuvi_packages_router_lib_index_.MemoryHistory.md#dotransition)
- [location](internal_.__Users_user_project_shuvi_packages_router_lib_index_.MemoryHistory.md#location)

### Methods

- [back](internal_.__Users_user_project_shuvi_packages_router_lib_index_.MemoryHistory.md#back)
- [block](internal_.__Users_user_project_shuvi_packages_router_lib_index_.MemoryHistory.md#block)
- [forward](internal_.__Users_user_project_shuvi_packages_router_lib_index_.MemoryHistory.md#forward)
- [getIndexAndLocation](internal_.__Users_user_project_shuvi_packages_router_lib_index_.MemoryHistory.md#getindexandlocation)
- [go](internal_.__Users_user_project_shuvi_packages_router_lib_index_.MemoryHistory.md#go)
- [push](internal_.__Users_user_project_shuvi_packages_router_lib_index_.MemoryHistory.md#push)
- [replace](internal_.__Users_user_project_shuvi_packages_router_lib_index_.MemoryHistory.md#replace)
- [resolve](internal_.__Users_user_project_shuvi_packages_router_lib_index_.MemoryHistory.md#resolve)
- [setup](internal_.__Users_user_project_shuvi_packages_router_lib_index_.MemoryHistory.md#setup)
- [transitionTo](internal_.__Users_user_project_shuvi_packages_router_lib_index_.MemoryHistory.md#transitionto)

## Constructors

### constructor

• **new MemoryHistory**(`__namedParameters?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters?` | [`MemoryHistoryOptions`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#memoryhistoryoptions) |

#### Overrides

[History](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md).[constructor](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md#constructor)

## Properties

### \_blockers

• `Protected` **\_blockers**: [`Events`](../modules/internal_.md#events)<[`Blocker`](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.Blocker.md)<[`State`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#state)\>\>

#### Inherited from

[History](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md).[_blockers](internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md#_blockers)

___

### \_entries

• `Private` **\_entries**: `any`

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
| `to` | [`PathRecord`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#pathrecord) |
| `from?` | `string` |

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
