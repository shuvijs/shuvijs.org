[@shuvi/router](../README.md) / [Exports](../modules.md) / Update

# Interface: Update<S\>

A change to the current location.

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](../modules.md#state) = [`State`](../modules.md#state) |

## Hierarchy

- **`Update`**

  ↳ [`Transition`](Transition.md)

## Table of contents

### Properties

- [action](Update.md#action)
- [location](Update.md#location)

## Properties

### action

• **action**: [`Action`](../modules.md#action)

The action that triggered the change.

#### Defined in

[packages/router/src/types/history.ts:161](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L161)

___

### location

• **location**: [`Location`](Location.md)<`S`\>

The new location.

#### Defined in

[packages/router/src/types/history.ts:166](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L166)
