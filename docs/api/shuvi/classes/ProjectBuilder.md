[shuvi](../README.md) / [Exports](../modules.md) / ProjectBuilder

# Class: ProjectBuilder

## Table of contents

### Constructors

- [constructor](ProjectBuilder.md#constructor)

### Properties

- [\_fileManager](ProjectBuilder.md#_filemanager)
- [\_internalFiles](ProjectBuilder.md#_internalfiles)
- [\_projectContext](ProjectBuilder.md#_projectcontext)

### Methods

- [addFile](ProjectBuilder.md#addfile)
- [addResources](ProjectBuilder.md#addresources)
- [addRuntimePlugin](ProjectBuilder.md#addruntimeplugin)
- [addRuntimeService](ProjectBuilder.md#addruntimeservice)
- [addTypeDeclarationFile](ProjectBuilder.md#addtypedeclarationfile)
- [build](ProjectBuilder.md#build)
- [stopBuild](ProjectBuilder.md#stopbuild)

## Constructors

### constructor

• **new ProjectBuilder**(`option?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `option?` | `ProjectBuilderOptions` |

#### Defined in

packages/service/lib/project/projectBuilder.d.ts:10

## Properties

### \_fileManager

• `Private` **\_fileManager**: `any`

#### Defined in

packages/service/lib/project/projectBuilder.d.ts:8

___

### \_internalFiles

• `Private` **\_internalFiles**: `any`

#### Defined in

packages/service/lib/project/projectBuilder.d.ts:9

___

### \_projectContext

• `Private` **\_projectContext**: `any`

#### Defined in

packages/service/lib/project/projectBuilder.d.ts:7

## Methods

### addFile

▸ **addFile**(`options`): `void`

default path is the root path

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `FileOptions`<`any`, `any`\> |

#### Returns

`void`

#### Defined in

packages/service/lib/project/projectBuilder.d.ts:18

___

### addResources

▸ **addResources**(`key`, `requireStr?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `requireStr?` | `string` |

#### Returns

`void`

#### Defined in

packages/service/lib/project/projectBuilder.d.ts:14

___

### addRuntimePlugin

▸ **addRuntimePlugin**(`plugin`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `plugin` | `RuntimePluginConfig` |

#### Returns

`void`

#### Defined in

packages/service/lib/project/projectBuilder.d.ts:11

___

### addRuntimeService

▸ **addRuntimeService**(`source`, `exported`, `filepath?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `exported` | `string` |
| `filepath?` | `string` |

#### Returns

`void`

#### Defined in

packages/service/lib/project/projectBuilder.d.ts:13

___

### addTypeDeclarationFile

▸ **addTypeDeclarationFile**(`file`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |

#### Returns

`void`

#### Defined in

packages/service/lib/project/projectBuilder.d.ts:12

___

### build

▸ **build**(`dir`): `Promise`<`void`\>

There is no longer `buildOnce` method.
Continuous building or static building will rely on `static` value of `ProjectBuilderOptions`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/service/lib/project/projectBuilder.d.ts:23

___

### stopBuild

▸ **stopBuild**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/service/lib/project/projectBuilder.d.ts:24
