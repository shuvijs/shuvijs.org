[@shuvi/router](../README.md) / [Exports](../modules.md) / IRoute

# Interface: IRoute<RouteRecord\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `RouteRecord` | extends [`IRouteRecord`](IRouteRecord.md) = [`IRouteRecord`](IRouteRecord.md) |

## Hierarchy

- [`Path`](Path.md)

  ↳ **`IRoute`**

## Table of contents

### Properties

- [hash](IRoute.md#hash)
- [key](IRoute.md#key)
- [matches](IRoute.md#matches)
- [params](IRoute.md#params)
- [pathname](IRoute.md#pathname)
- [query](IRoute.md#query)
- [redirected](IRoute.md#redirected)
- [search](IRoute.md#search)
- [state](IRoute.md#state)

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

#### Defined in

[packages/router/src/types/router.ts:80](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L80)

___

### matches

• **matches**: ``null`` \| [`IRouteMatch`](IRouteMatch.md)<`RouteRecord`\>[]

#### Defined in

[packages/router/src/types/router.ts:78](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L78)

___

### params

• **params**: [`IParams`](../modules.md#iparams)

#### Defined in

[packages/router/src/types/router.ts:76](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L76)

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

### redirected

• `Optional` **redirected**: `boolean`

#### Defined in

[packages/router/src/types/router.ts:79](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L79)

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

• **state**: [`State`](../modules.md#state)

#### Defined in

[packages/router/src/types/router.ts:77](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L77)
