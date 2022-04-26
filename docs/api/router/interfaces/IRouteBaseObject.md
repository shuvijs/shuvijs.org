[@shuvi/router](../README.md) / [Exports](../modules.md) / IRouteBaseObject

# Interface: IRouteBaseObject<Element\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Element` | `any` |

## Hierarchy

- `Omit`<[`IRouteRecord`](IRouteRecord.md)<`Element`\>, ``"children"`` \| ``"element"`` \| ``"filepath"``\>

  ↳ **`IRouteBaseObject`**

## Table of contents

### Properties

- [caseSensitive](IRouteBaseObject.md#casesensitive)
- [children](IRouteBaseObject.md#children)
- [component](IRouteBaseObject.md#component)
- [path](IRouteBaseObject.md#path)
- [props](IRouteBaseObject.md#props)
- [redirect](IRouteBaseObject.md#redirect)
- [resolve](IRouteBaseObject.md#resolve)

## Properties

### caseSensitive

• `Optional` **caseSensitive**: `boolean`

#### Inherited from

Omit.caseSensitive

#### Defined in

[packages/router/src/types/router.ts:15](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L15)

___

### children

• `Optional` **children**: [`IRouteBaseObject`](IRouteBaseObject.md)<`Element`\>[]

#### Defined in

[packages/router/src/matchRoutes.ts:15](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/matchRoutes.ts#L15)

___

### component

• `Optional` **component**: `Element`

#### Inherited from

Omit.component

#### Defined in

[packages/router/src/types/router.ts:17](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L17)

___

### path

• **path**: `string`

#### Inherited from

Omit.path

#### Defined in

[packages/router/src/types/router.ts:21](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L21)

___

### props

• `Optional` **props**: [`IRouteComponentProps`](../modules.md#iroutecomponentprops)

#### Inherited from

Omit.props

#### Defined in

[packages/router/src/types/router.ts:20](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L20)

___

### redirect

• `Optional` **redirect**: `string`

#### Inherited from

Omit.redirect

#### Defined in

[packages/router/src/types/router.ts:18](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L18)

___

### resolve

• `Optional` **resolve**: [`NavigationGuardHookWithContext`](NavigationGuardHookWithContext.md)<`any`\>

#### Inherited from

Omit.resolve

#### Defined in

[packages/router/src/types/router.ts:19](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L19)
