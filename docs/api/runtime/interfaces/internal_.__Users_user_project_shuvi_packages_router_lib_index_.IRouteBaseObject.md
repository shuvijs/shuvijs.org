[runtime](../overview.md) / [<internal\>](../modules/internal_.md) / ["@shuvi/router/lib/index"](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md) / IRouteBaseObject

# Interface: IRouteBaseObject<Element\>

[internal](../modules/internal_.md).["@shuvi/router/lib/index"](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md).IRouteBaseObject

## Type parameters

| Name | Type |
| :------ | :------ |
| `Element` | `any` |

## Hierarchy

- `Omit`<[`IRouteRecord`](IRouteRecord.md)<`Element`\>, ``"children"`` \| ``"element"`` \| ``"filepath"``\>

  ↳ **`IRouteBaseObject`**

## Table of contents

### Properties

- [caseSensitive](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRouteBaseObject.md#casesensitive)
- [children](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRouteBaseObject.md#children)
- [component](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRouteBaseObject.md#component)
- [path](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRouteBaseObject.md#path)
- [props](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRouteBaseObject.md#props)
- [redirect](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRouteBaseObject.md#redirect)
- [resolve](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRouteBaseObject.md#resolve)

## Properties

### caseSensitive

• `Optional` **caseSensitive**: `boolean`

#### Inherited from

Omit.caseSensitive

___

### children

• `Optional` **children**: [`IRouteBaseObject`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRouteBaseObject.md)<`Element`\>[]

___

### component

• `Optional` **component**: `Element`

#### Inherited from

Omit.component

___

### path

• **path**: `string`

#### Inherited from

Omit.path

___

### props

• `Optional` **props**: [`IRouteComponentProps`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#iroutecomponentprops)

#### Inherited from

Omit.props

___

### redirect

• `Optional` **redirect**: `string`

#### Inherited from

Omit.redirect

___

### resolve

• `Optional` **resolve**: [`NavigationGuardHookWithContext`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.NavigationGuardHookWithContext.md)<`any`\>

#### Inherited from

Omit.resolve
