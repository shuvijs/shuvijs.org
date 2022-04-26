[@shuvi/utils](README.md) / Exports

# @shuvi/utils

## Table of contents

### Interfaces

- [Defer](interfaces/Defer.md)

### Variables

- [EMPTY\_OBJ](modules.md#empty_obj)

### Functions

- [Defer](modules.md#defer)
- [NOOP](modules.md#noop)
- [extend](modules.md#extend)
- [getType](modules.md#gettype)
- [hasOwn](modules.md#hasown)
- [isArray](modules.md#isarray)
- [isFunction](modules.md#isfunction)
- [isObject](modules.md#isobject)

## Variables

### EMPTY\_OBJ

• `Const` **EMPTY\_OBJ**: `Object` = `{}`

#### Defined in

[index.ts:7](https://github.com/shuvijs/shuvi/blob/8776f169/packages/utils/src/index.ts#L7)

## Functions

### Defer

▸ **Defer**<`T`\>(): [`Defer`](modules.md#defer)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Defer`](modules.md#defer)<`T`\>

#### Defined in

[defer.ts:7](https://github.com/shuvijs/shuvi/blob/8776f169/packages/utils/src/defer.ts#L7)

___

### NOOP

▸ **NOOP**(): `void`

#### Returns

`void`

#### Defined in

[noopFn.ts:1](https://github.com/shuvijs/shuvi/blob/8776f169/packages/utils/src/noopFn.ts#L1)

___

### extend

▸ **extend**<`T`, `U`\>(`target`, `source`): `T` & `U`

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `source` | `U` |

#### Returns

`T` & `U`

#### Defined in

[index.ts:9](https://github.com/shuvijs/shuvi/blob/8776f169/packages/utils/src/index.ts#L9)

▸ **extend**<`T`, `U`, `V`\>(`target`, `source1`, `source2`): `T` & `U` & `V`

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `source1` | `U` |
| `source2` | `V` |

#### Returns

`T` & `U` & `V`

#### Defined in

[index.ts:9](https://github.com/shuvijs/shuvi/blob/8776f169/packages/utils/src/index.ts#L9)

▸ **extend**<`T`, `U`, `V`, `W`\>(`target`, `source1`, `source2`, `source3`): `T` & `U` & `V` & `W`

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |
| `V` |
| `W` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `source1` | `U` |
| `source2` | `V` |
| `source3` | `W` |

#### Returns

`T` & `U` & `V` & `W`

#### Defined in

[index.ts:9](https://github.com/shuvijs/shuvi/blob/8776f169/packages/utils/src/index.ts#L9)

▸ **extend**(`target`, ...`sources`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `object` |
| `...sources` | `any`[] |

#### Returns

`any`

#### Defined in

[index.ts:9](https://github.com/shuvijs/shuvi/blob/8776f169/packages/utils/src/index.ts#L9)

___

### getType

▸ **getType**(`obj`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`string`

#### Defined in

[index.ts:25](https://github.com/shuvijs/shuvi/blob/8776f169/packages/utils/src/index.ts#L25)

___

### hasOwn

▸ **hasOwn**(`val`, `key`): key is never

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `object` |
| `key` | `string` \| `symbol` |

#### Returns

key is never

#### Defined in

[index.ts:19](https://github.com/shuvijs/shuvi/blob/8776f169/packages/utils/src/index.ts#L19)

___

### isArray

▸ **isArray**(`arg`): arg is any[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `any` |

#### Returns

arg is any[]

#### Defined in

[index.ts:11](https://github.com/shuvijs/shuvi/blob/8776f169/packages/utils/src/index.ts#L11)

___

### isFunction

▸ **isFunction**(`val`): val is Function

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `unknown` |

#### Returns

val is Function

#### Defined in

[index.ts:16](https://github.com/shuvijs/shuvi/blob/8776f169/packages/utils/src/index.ts#L16)

___

### isObject

▸ **isObject**(`val`): val is Record<any, any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `unknown` |

#### Returns

val is Record<any, any\>

#### Defined in

[index.ts:13](https://github.com/shuvijs/shuvi/blob/8776f169/packages/utils/src/index.ts#L13)
