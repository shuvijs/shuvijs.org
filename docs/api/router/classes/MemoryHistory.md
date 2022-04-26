[@shuvi/router](../README.md) / [Exports](../modules.md) / MemoryHistory

# Class: MemoryHistory

## Hierarchy

- [`History`](History.md)

  ↳ **`MemoryHistory`**

## Table of contents

### Constructors

- [constructor](MemoryHistory.md#constructor)

### Properties

- [\_blockers](MemoryHistory.md#_blockers)
- [\_entries](MemoryHistory.md#_entries)
- [\_index](MemoryHistory.md#_index)
- [action](MemoryHistory.md#action)
- [doTransition](MemoryHistory.md#dotransition)
- [location](MemoryHistory.md#location)

### Methods

- [back](MemoryHistory.md#back)
- [block](MemoryHistory.md#block)
- [forward](MemoryHistory.md#forward)
- [getIndexAndLocation](MemoryHistory.md#getindexandlocation)
- [go](MemoryHistory.md#go)
- [push](MemoryHistory.md#push)
- [replace](MemoryHistory.md#replace)
- [resolve](MemoryHistory.md#resolve)
- [setup](MemoryHistory.md#setup)
- [transitionTo](MemoryHistory.md#transitionto)

## Constructors

### constructor

• **new MemoryHistory**(`__namedParameters?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`MemoryHistoryOptions`](../modules.md#memoryhistoryoptions) |

#### Overrides

[History](History.md).[constructor](History.md#constructor)

#### Defined in

[packages/router/src/history/memory.ts:29](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/memory.ts#L29)

## Properties

### \_blockers

• `Protected` **\_blockers**: `Events`<[`Blocker`](../interfaces/Blocker.md)<[`State`](../modules.md#state)\>\>

#### Inherited from

[History](History.md).[_blockers](History.md#_blockers)

#### Defined in

[packages/router/src/history/base.ts:66](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/base.ts#L66)

___

### \_entries

• `Private` **\_entries**: [`Location`](../interfaces/Location.md)<[`State`](../modules.md#state)\>[] = `[]`

#### Defined in

[packages/router/src/history/memory.ts:27](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/memory.ts#L27)

___

### \_index

• `Protected` **\_index**: `number` = `0`

#### Inherited from

[History](History.md).[_index](History.md#_index)

#### Defined in

[packages/router/src/history/base.ts:65](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/base.ts#L65)

___

### action

• **action**: [`Action`](../modules.md#action) = `ACTION_POP`

#### Inherited from

[History](History.md).[action](History.md#action)

#### Defined in

[packages/router/src/history/base.ts:57](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/base.ts#L57)

___

### doTransition

• **doTransition**: (`to`: [`PathRecord`](../modules.md#pathrecord), `onComplete`: `Function`, `onAbort?`: `Function`) => `void`

#### Type declaration

▸ (`to`, `onComplete`, `onAbort?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `to` | [`PathRecord`](../modules.md#pathrecord) |
| `onComplete` | `Function` |
| `onAbort?` | `Function` |

##### Returns

`void`

#### Inherited from

[History](History.md).[doTransition](History.md#dotransition)

#### Defined in

[packages/router/src/history/base.ts:59](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/base.ts#L59)

___

### location

• **location**: [`Location`](../interfaces/Location.md)<[`State`](../modules.md#state)\>

#### Inherited from

[History](History.md).[location](History.md#location)

#### Defined in

[packages/router/src/history/base.ts:58](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/base.ts#L58)

## Methods

### back

▸ **back**(): `void`

#### Returns

`void`

#### Inherited from

[History](History.md).[back](History.md#back)

#### Defined in

[packages/router/src/history/base.ts:79](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/base.ts#L79)

___

### block

▸ **block**(`blocker`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blocker` | [`Blocker`](../interfaces/Blocker.md)<[`State`](../modules.md#state)\> |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Overrides

[History](History.md).[block](History.md#block)

#### Defined in

[packages/router/src/history/memory.ts:111](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/memory.ts#L111)

___

### forward

▸ **forward**(): `void`

#### Returns

`void`

#### Inherited from

[History](History.md).[forward](History.md#forward)

#### Defined in

[packages/router/src/history/base.ts:83](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/base.ts#L83)

___

### getIndexAndLocation

▸ `Protected` **getIndexAndLocation**(): [`number`, [`Location`](../interfaces/Location.md)<[`State`](../modules.md#state)\>]

#### Returns

[`number`, [`Location`](../interfaces/Location.md)<[`State`](../modules.md#state)\>]

#### Overrides

[History](History.md).[getIndexAndLocation](History.md#getindexandlocation)

#### Defined in

[packages/router/src/history/memory.ts:123](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/memory.ts#L123)

___

### go

▸ **go**(`delta`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `delta` | `number` |

#### Returns

`void`

#### Overrides

[History](History.md).[go](History.md#go)

#### Defined in

[packages/router/src/history/memory.ts:85](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/memory.ts#L85)

___

### push

▸ **push**(`to`, `__namedParameters?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | [`PathRecord`](../modules.md#pathrecord) |
| `__namedParameters` | `PushOptions` |

#### Returns

`void`

#### Overrides

[History](History.md).[push](History.md#push)

#### Defined in

[packages/router/src/history/memory.ts:63](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/memory.ts#L63)

___

### replace

▸ **replace**(`to`, `__namedParameters?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | [`PathRecord`](../modules.md#pathrecord) |
| `__namedParameters` | `PushOptions` |

#### Returns

`void`

#### Overrides

[History](History.md).[replace](History.md#replace)

#### Defined in

[packages/router/src/history/memory.ts:74](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/memory.ts#L74)

___

### resolve

▸ **resolve**(`to`, `from?`): [`ResolvedPath`](../interfaces/ResolvedPath.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | [`PathRecord`](../modules.md#pathrecord) |
| `from?` | `string` |

#### Returns

[`ResolvedPath`](../interfaces/ResolvedPath.md)

#### Overrides

[History](History.md).[resolve](History.md#resolve)

#### Defined in

[packages/router/src/history/memory.ts:115](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/memory.ts#L115)

___

### setup

▸ **setup**(): `void`

#### Returns

`void`

#### Overrides

[History](History.md).[setup](History.md#setup)

#### Defined in

[packages/router/src/history/memory.ts:59](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/memory.ts#L59)

___

### transitionTo

▸ **transitionTo**(`to`, `__namedParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | [`PathRecord`](../modules.md#pathrecord) |
| `__namedParameters` | `TransitionOptions` |

#### Returns

`void`

#### Inherited from

[History](History.md).[transitionTo](History.md#transitionto)

#### Defined in

[packages/router/src/history/base.ts:95](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/base.ts#L95)
