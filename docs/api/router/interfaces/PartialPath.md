[@shuvi/router](../README.md) / [Exports](../modules.md) / PartialPath

# Interface: PartialPath

A partial Path object that may be missing some properties.

## Hierarchy

- **`PartialPath`**

  ↳ [`PartialLocation`](PartialLocation.md)

## Table of contents

### Properties

- [hash](PartialPath.md#hash)
- [pathname](PartialPath.md#pathname)
- [query](PartialPath.md#query)
- [search](PartialPath.md#search)

## Properties

### hash

• `Optional` **hash**: `string`

The URL fragment identifier, beginning with a #.

#### Defined in

[packages/router/src/types/history.ts:107](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L107)

___

### pathname

• `Optional` **pathname**: `string`

The URL pathname, beginning with a /.

#### Defined in

[packages/router/src/types/history.ts:89](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L89)

___

### query

• `Optional` **query**: [`ParsedQuery`](ParsedQuery.md)<`string`\>

The parsed URL search Object.

#### Defined in

[packages/router/src/types/history.ts:95](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L95)

___

### search

• `Optional` **search**: `string`

The URL search string, beginning with a ?.

#### Defined in

[packages/router/src/types/history.ts:101](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L101)
