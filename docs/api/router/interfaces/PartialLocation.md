[@shuvi/router](../README.md) / [Exports](../modules.md) / PartialLocation

# Interface: PartialLocation<S\>

A partial Location object that may be missing some properties.

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](../modules.md#state) = [`State`](../modules.md#state) |

## Hierarchy

- [`PartialPath`](PartialPath.md)

  ↳ **`PartialLocation`**

## Table of contents

### Properties

- [hash](PartialLocation.md#hash)
- [key](PartialLocation.md#key)
- [pathname](PartialLocation.md#pathname)
- [query](PartialLocation.md#query)
- [search](PartialLocation.md#search)
- [state](PartialLocation.md#state)

## Properties

### hash

• `Optional` **hash**: `string`

The URL fragment identifier, beginning with a #.

#### Inherited from

[PartialPath](PartialPath.md).[hash](PartialPath.md#hash)

#### Defined in

[packages/router/src/types/history.ts:107](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L107)

___

### key

• `Optional` **key**: `string`

A unique string associated with this location. May be used to safely store
and retrieve data in some other storage API, like `localStorage`.

Note: This value is always "default" on the initial location.

#### Defined in

[packages/router/src/types/history.ts:151](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L151)

___

### pathname

• `Optional` **pathname**: `string`

The URL pathname, beginning with a /.

#### Inherited from

[PartialPath](PartialPath.md).[pathname](PartialPath.md#pathname)

#### Defined in

[packages/router/src/types/history.ts:89](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L89)

___

### query

• `Optional` **query**: [`ParsedQuery`](ParsedQuery.md)<`string`\>

The parsed URL search Object.

#### Inherited from

[PartialPath](PartialPath.md).[query](PartialPath.md#query)

#### Defined in

[packages/router/src/types/history.ts:95](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L95)

___

### search

• `Optional` **search**: `string`

The URL search string, beginning with a ?.

#### Inherited from

[PartialPath](PartialPath.md).[search](PartialPath.md#search)

#### Defined in

[packages/router/src/types/history.ts:101](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L101)

___

### state

• `Optional` **state**: `S`

An object of arbitrary data associated with this location.

#### Defined in

[packages/router/src/types/history.ts:142](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L142)
