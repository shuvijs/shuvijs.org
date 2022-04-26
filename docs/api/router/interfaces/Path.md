[@shuvi/router](../README.md) / [Exports](../modules.md) / Path

# Interface: Path

The pathname, search, and hash values of a URL.

## Hierarchy

- **`Path`**

  ↳ [`Location`](Location.md)

  ↳ [`IRoute`](IRoute.md)

## Table of contents

### Properties

- [hash](Path.md#hash)
- [pathname](Path.md#pathname)
- [query](Path.md#query)
- [search](Path.md#search)

## Properties

### hash

• **hash**: `string`

A URL fragment identifier, beginning with a #.

#### Defined in

[packages/router/src/types/history.ts:78](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L78)

___

### pathname

• **pathname**: `string`

A URL pathname, beginning with a /.

#### Defined in

[packages/router/src/types/history.ts:60](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L60)

___

### query

• **query**: [`ParsedQuery`](ParsedQuery.md)<`string`\>

The parsed URL search Object.

#### Defined in

[packages/router/src/types/history.ts:66](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L66)

___

### search

• **search**: `string`

A URL search string, beginning with a ?.

#### Defined in

[packages/router/src/types/history.ts:72](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L72)
