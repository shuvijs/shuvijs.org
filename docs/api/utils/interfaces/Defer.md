[@shuvi/utils](../README.md) / [Exports](../modules.md) / Defer

# Interface: Defer<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `void` |

## Table of contents

### Constructors

- [constructor](Defer.md#constructor)

### Properties

- [promise](Defer.md#promise)

### Methods

- [reject](Defer.md#reject)
- [resolve](Defer.md#resolve)

## Constructors

### constructor

• **constructor**: `Object`

## Properties

### promise

• **promise**: `Promise`<`T`\>

#### Defined in

[defer.ts:4](https://github.com/shuvijs/shuvi/blob/8776f169/packages/utils/src/defer.ts#L4)

## Methods

### reject

▸ **reject**(`err`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `any` |

#### Returns

`void`

#### Defined in

[defer.ts:3](https://github.com/shuvijs/shuvi/blob/8776f169/packages/utils/src/defer.ts#L3)

___

### resolve

▸ **resolve**(`T?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `T?` | `T` \| `PromiseLike`<`T`\> |

#### Returns

`void`

#### Defined in

[defer.ts:2](https://github.com/shuvijs/shuvi/blob/8776f169/packages/utils/src/defer.ts#L2)
