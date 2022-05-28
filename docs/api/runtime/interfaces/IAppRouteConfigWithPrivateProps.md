[runtime](../overview.md) / IAppRouteConfigWithPrivateProps

# Interface: IAppRouteConfigWithPrivateProps

## Hierarchy

- [`IRouteRecord`](IRouteRecord.md)

  ↳ **`IAppRouteConfigWithPrivateProps`**

## Indexable

▪ [x: `string`]: `any`

## Table of contents

### Properties

- [\_\_componentSourceWithAffix\_\_](IAppRouteConfigWithPrivateProps.md#__componentsourcewithaffix__)
- [\_\_componentSource\_\_](IAppRouteConfigWithPrivateProps.md#__componentsource__)
- [caseSensitive](IAppRouteConfigWithPrivateProps.md#casesensitive)
- [children](IAppRouteConfigWithPrivateProps.md#children)
- [component](IAppRouteConfigWithPrivateProps.md#component)
- [filepath](IAppRouteConfigWithPrivateProps.md#filepath)
- [id](IAppRouteConfigWithPrivateProps.md#id)
- [path](IAppRouteConfigWithPrivateProps.md#path)
- [props](IAppRouteConfigWithPrivateProps.md#props)
- [redirect](IAppRouteConfigWithPrivateProps.md#redirect)
- [resolve](IAppRouteConfigWithPrivateProps.md#resolve)

### Methods

- [\_\_import\_\_](IAppRouteConfigWithPrivateProps.md#__import__)
- [\_\_resolveWeak\_\_](IAppRouteConfigWithPrivateProps.md#__resolveweak__)

## Properties

### \_\_componentSourceWithAffix\_\_

• **\_\_componentSourceWithAffix\_\_**: `string`

___

### \_\_componentSource\_\_

• **\_\_componentSource\_\_**: `string`

___

### caseSensitive

• `Optional` **caseSensitive**: `boolean`

#### Inherited from

[IRouteRecord](IRouteRecord.md).[caseSensitive](IRouteRecord.md#casesensitive)

___

### children

• `Optional` **children**: [`IAppRouteConfigWithPrivateProps`](IAppRouteConfigWithPrivateProps.md)[]

#### Overrides

[IRouteRecord](IRouteRecord.md).[children](IRouteRecord.md#children)

___

### component

• `Optional` **component**: `any`

#### Overrides

[IRouteRecord](IRouteRecord.md).[component](IRouteRecord.md#component)

___

### filepath

• `Optional` **filepath**: `string`

#### Inherited from

[IRouteRecord](IRouteRecord.md).[filepath](IRouteRecord.md#filepath)

___

### id

• **id**: `string`

___

### path

• **path**: `string`

#### Overrides

[IRouteRecord](IRouteRecord.md).[path](IRouteRecord.md#path)

___

### props

• `Optional` **props**: [`IRouteComponentProps`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#iroutecomponentprops)

#### Inherited from

[IRouteRecord](IRouteRecord.md).[props](IRouteRecord.md#props)

___

### redirect

• `Optional` **redirect**: `string`

#### Inherited from

[IRouteRecord](IRouteRecord.md).[redirect](IRouteRecord.md#redirect)

___

### resolve

• `Optional` **resolve**: [`NavigationGuardHookWithContext`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.NavigationGuardHookWithContext.md)<`any`\>

#### Inherited from

[IRouteRecord](IRouteRecord.md).[resolve](IRouteRecord.md#resolve)

## Methods

### \_\_import\_\_

▸ **__import__**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

___

### \_\_resolveWeak\_\_

▸ **__resolveWeak__**(): `any`

#### Returns

`any`
