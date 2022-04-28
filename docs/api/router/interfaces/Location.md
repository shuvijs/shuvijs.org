[@shuvi/router](../README.md) / [Exports](../modules.md) / Location

# Interface: Location<S\>

An entry in a history stack. A location contains information about the
URL path, as well as possibly some arbitrary state and a key.

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](../modules.md#state) = [`State`](../modules.md#state) |

## Hierarchy

- [`Path`](Path.md)

  ↳ **`Location`**

## Table of contents

### Properties

- [hash](Location.md#hash)
- [key](Location.md#key)
- [pathname](Location.md#pathname)
- [query](Location.md#query)
- [redirectedFrom](Location.md#redirectedfrom)
- [search](Location.md#search)
- [state](Location.md#state)

## Properties

### hash

• **hash**: `string`

A URL fragment identifier, beginning with a #.

#### Inherited from

[Path](Path.md).[hash](Path.md#hash)

#### Defined in

[packages/router/src/types/history.ts:78](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L78)

___

### key

• **key**: `string`

A unique string associated with this location. May be used to safely store
and retrieve data in some other storage API, like `localStorage`.

Note: This value is always "default" on the initial location.

#### Defined in

[packages/router/src/types/history.ts:131](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L131)

___

### pathname

• **pathname**: `string`

A URL pathname, beginning with a /.

#### Inherited from

[Path](Path.md).[pathname](Path.md#pathname)

#### Defined in

[packages/router/src/types/history.ts:60](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L60)

___

### query

• **query**: [`ParsedQuery`](ParsedQuery.md)<`string`\>

The parsed URL search Object.

#### Inherited from

[Path](Path.md).[query](Path.md#query)

#### Defined in

[packages/router/src/types/history.ts:66](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L66)

___

### redirectedFrom

• `Optional` **redirectedFrom**: [`PathRecord`](../modules.md#pathrecord)

#### Defined in

[packages/router/src/types/history.ts:116](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L116)

___

### search

• **search**: `string`

A URL search string, beginning with a ?.

#### Inherited from

[Path](Path.md).[search](Path.md#search)

#### Defined in

[packages/router/src/types/history.ts:72](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L72)

___

### state

• **state**: `S`

An object of arbitrary data associated with this location.

#### Defined in

[packages/router/src/types/history.ts:122](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L122)
