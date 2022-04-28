[@shuvi/router](../README.md) / [Exports](../modules.md) / IRouteRecord

# Interface: IRouteRecord<Element\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Element` | `any` |

## Table of contents

### Properties

- [caseSensitive](IRouteRecord.md#casesensitive)
- [children](IRouteRecord.md#children)
- [component](IRouteRecord.md#component)
- [filepath](IRouteRecord.md#filepath)
- [path](IRouteRecord.md#path)
- [props](IRouteRecord.md#props)
- [redirect](IRouteRecord.md#redirect)
- [resolve](IRouteRecord.md#resolve)

## Properties

### caseSensitive

• `Optional` **caseSensitive**: `boolean`

#### Defined in

[packages/router/src/types/router.ts:15](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L15)

___

### children

• `Optional` **children**: [`IRouteRecord`](IRouteRecord.md)<`Element`\>[]

#### Defined in

[packages/router/src/types/router.ts:16](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L16)

___

### component

• `Optional` **component**: `Element`

#### Defined in

[packages/router/src/types/router.ts:17](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L17)

___

### filepath

• `Optional` **filepath**: `string`

#### Defined in

[packages/router/src/types/router.ts:22](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L22)

___

### path

• **path**: `string`

#### Defined in

[packages/router/src/types/router.ts:21](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L21)

___

### props

• `Optional` **props**: [`IRouteComponentProps`](../modules.md#iroutecomponentprops)

#### Defined in

[packages/router/src/types/router.ts:20](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L20)

___

### redirect

• `Optional` **redirect**: `string`

#### Defined in

[packages/router/src/types/router.ts:18](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L18)

___

### resolve

• `Optional` **resolve**: [`NavigationGuardHookWithContext`](NavigationGuardHookWithContext.md)<`any`\>

#### Defined in

[packages/router/src/types/router.ts:19](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L19)
