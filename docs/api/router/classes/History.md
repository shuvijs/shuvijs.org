[@shuvi/router](../README.md) / [Exports](../modules.md) / History

# Class: History

## Hierarchy

- **`History`**

  ↳ [`MemoryHistory`](MemoryHistory.md)

## Table of contents

### Constructors

- [constructor](History.md#constructor)

### Properties

- [\_blockers](History.md#_blockers)
- [\_index](History.md#_index)
- [action](History.md#action)
- [doTransition](History.md#dotransition)
- [location](History.md#location)

### Methods

- [\_updateState](History.md#_updatestate)
- [back](History.md#back)
- [block](History.md#block)
- [forward](History.md#forward)
- [getIndexAndLocation](History.md#getindexandlocation)
- [go](History.md#go)
- [push](History.md#push)
- [replace](History.md#replace)
- [resolve](History.md#resolve)
- [setup](History.md#setup)
- [transitionTo](History.md#transitionto)

## Constructors

### constructor

• **new History**()

## Properties

### \_blockers

• `Protected` **\_blockers**: `Events`<[`Blocker`](../interfaces/Blocker.md)<[`State`](../modules.md#state)\>\>

#### Defined in

[packages/router/src/history/base.ts:66](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/base.ts#L66)

___

### \_index

• `Protected` **\_index**: `number` = `0`

#### Defined in

[packages/router/src/history/base.ts:65](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/base.ts#L65)

___

### action

• **action**: [`Action`](../modules.md#action) = `ACTION_POP`

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

#### Defined in

[packages/router/src/history/base.ts:59](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/base.ts#L59)

___

### location

• **location**: [`Location`](../interfaces/Location.md)<[`State`](../modules.md#state)\>

#### Defined in

[packages/router/src/history/base.ts:58](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/base.ts#L58)

## Methods

### \_updateState

▸ `Private` **_updateState**(`nextAction`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextAction` | [`Action`](../modules.md#action) |

#### Returns

`void`

#### Defined in

[packages/router/src/history/base.ts:145](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/base.ts#L145)

___

### back

▸ **back**(): `void`

#### Returns

`void`

#### Defined in

[packages/router/src/history/base.ts:79](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/base.ts#L79)

___

### block

▸ `Abstract` **block**(`blocker`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blocker` | [`Blocker`](../interfaces/Blocker.md)<[`State`](../modules.md#state)\> |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/router/src/history/base.ts:77](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/base.ts#L77)

___

### forward

▸ **forward**(): `void`

#### Returns

`void`

#### Defined in

[packages/router/src/history/base.ts:83](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/base.ts#L83)

___

### getIndexAndLocation

▸ `Protected` `Abstract` **getIndexAndLocation**(): [`number`, [`Location`](../interfaces/Location.md)<[`State`](../modules.md#state)\>]

#### Returns

[`number`, [`Location`](../interfaces/Location.md)<[`State`](../modules.md#state)\>]

#### Defined in

[packages/router/src/history/base.ts:70](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/base.ts#L70)

___

### go

▸ `Abstract` **go**(`delta`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `delta` | `number` |

#### Returns

`void`

#### Defined in

[packages/router/src/history/base.ts:76](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/base.ts#L76)

___

### push

▸ `Abstract` **push**(`to`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | [`PathRecord`](../modules.md#pathrecord) |
| `options` | `PushOptions` |

#### Returns

`void`

#### Defined in

[packages/router/src/history/base.ts:74](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/base.ts#L74)

___

### replace

▸ `Abstract` **replace**(`to`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | [`PathRecord`](../modules.md#pathrecord) |
| `options?` | `PushOptions` |

#### Returns

`void`

#### Defined in

[packages/router/src/history/base.ts:75](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/base.ts#L75)

___

### resolve

▸ **resolve**(`to`, `from?`): [`ResolvedPath`](../interfaces/ResolvedPath.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `any` |
| `from?` | `any` |

#### Returns

[`ResolvedPath`](../interfaces/ResolvedPath.md)

#### Defined in

[packages/router/src/history/base.ts:87](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/base.ts#L87)

___

### setup

▸ `Abstract` **setup**(): `void`

#### Returns

`void`

#### Defined in

[packages/router/src/history/base.ts:71](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/base.ts#L71)

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

#### Defined in

[packages/router/src/history/base.ts:95](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/base.ts#L95)
