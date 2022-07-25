[runtime](../overview.md) / IRouteRecord

# Interface: IRouteRecord<Element\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Element` | `any` |

## Hierarchy

- **`IRouteRecord`**

  ↳ [`IAppRouteConfig`](IAppRouteConfig.md)

  ↳ [`IAppRouteConfigWithPrivateProps`](IAppRouteConfigWithPrivateProps.md)

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

___

### children

• `Optional` **children**: [`IRouteRecord`](IRouteRecord.md)<`Element`\>[]

___

### component

• `Optional` **component**: `Element`

___

### filepath

• `Optional` **filepath**: `string`

___

### path

• **path**: `string`

___

### props

• `Optional` **props**: [`IRouteComponentProps`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#iroutecomponentprops)

___

### redirect

• `Optional` **redirect**: `string`

___

### resolve

• `Optional` **resolve**: [`NavigationGuardHookWithContext`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.NavigationGuardHookWithContext.md)<`any`\>
