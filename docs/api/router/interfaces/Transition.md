[@shuvi/router](../README.md) / [Exports](../modules.md) / Transition

# Interface: Transition<S\>

A change to the current location that was blocked. May be retried
after obtaining user confirmation.

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](../modules.md#state) = [`State`](../modules.md#state) |

## Hierarchy

- [`Update`](Update.md)<`S`\>

  ↳ **`Transition`**

## Table of contents

### Properties

- [action](Transition.md#action)
- [location](Transition.md#location)

### Methods

- [retry](Transition.md#retry)

## Properties

### action

• **action**: [`Action`](../modules.md#action)

The action that triggered the change.

#### Inherited from

[Update](Update.md).[action](Update.md#action)

#### Defined in

[packages/router/src/types/history.ts:161](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L161)

___

### location

• **location**: [`Location`](Location.md)<`S`\>

The new location.

#### Inherited from

[Update](Update.md).[location](Update.md#location)

#### Defined in

[packages/router/src/types/history.ts:166](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L166)

## Methods

### retry

▸ **retry**(): `void`

Retries the update to the current location.

#### Returns

`void`

#### Defined in

[packages/router/src/types/history.ts:184](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L184)
