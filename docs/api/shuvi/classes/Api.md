[shuvi](../README.md) / [Exports](../modules.md) / Api

# Class: Api

## Table of contents

### Constructors

- [constructor](Api.md#constructor)

### Properties

- [\_applyPlugin](Api.md#_applyplugin)
- [\_config](Api.md#_config)
- [\_cwd](Api.md#_cwd)
- [\_initArtifacts](Api.md#_initartifacts)
- [\_initPlatform](Api.md#_initplatform)
- [\_mode](Api.md#_mode)
- [\_paths](Api.md#_paths)
- [\_phase](Api.md#_phase)
- [\_platform](Api.md#_platform)
- [\_pluginContext](Api.md#_plugincontext)
- [\_pluginManager](Api.md#_pluginmanager)
- [\_projectBuilder](Api.md#_projectbuilder)
- [\_removeLastArtifacts](Api.md#_removelastartifacts)
- [\_serverConfigs](Api.md#_serverconfigs)
- [\_serverPlugins](Api.md#_serverplugins)
- [\_userConfig](Api.md#_userconfig)

### Accessors

- [assetPublicPath](Api.md#assetpublicpath)
- [cwd](Api.md#cwd)
- [mode](Api.md#mode)
- [pluginContext](Api.md#plugincontext)
- [pluginManager](Api.md#pluginmanager)
- [serverConfigs](Api.md#serverconfigs)

### Methods

- [addInternalRuntimeFile](Api.md#addinternalruntimefile)
- [addResources](Api.md#addresources)
- [addRuntimeFile](Api.md#addruntimefile)
- [addRuntimePlugin](Api.md#addruntimeplugin)
- [addRuntimeService](Api.md#addruntimeservice)
- [addTypeDeclarationFile](Api.md#addtypedeclarationfile)
- [buildApp](Api.md#buildapp)
- [destory](Api.md#destory)
- [getAssetPublicUrl](Api.md#getassetpublicurl)
- [init](Api.md#init)
- [resolveAppFile](Api.md#resolveappfile)
- [resolveBuildFile](Api.md#resolvebuildfile)
- [resolvePublicFile](Api.md#resolvepublicfile)
- [resolveUserFile](Api.md#resolveuserfile)

## Constructors

### constructor

• **new Api**(`__namedParameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `IApiOPtions` |

#### Defined in

packages/service/lib/core/api.d.ts:30

## Properties

### \_applyPlugin

• `Private` **\_applyPlugin**: `any`

#### Defined in

packages/service/lib/core/api.d.ts:62

___

### \_config

• `Private` **\_config**: `any`

#### Defined in

packages/service/lib/core/api.d.ts:22

___

### \_cwd

• `Private` **\_cwd**: `any`

#### Defined in

packages/service/lib/core/api.d.ts:18

___

### \_initArtifacts

• `Private` **\_initArtifacts**: `any`

#### Defined in

packages/service/lib/core/api.d.ts:64

___

### \_initPlatform

• `Private` **\_initPlatform**: `any`

#### Defined in

packages/service/lib/core/api.d.ts:63

___

### \_mode

• `Private` **\_mode**: `any`

#### Defined in

packages/service/lib/core/api.d.ts:19

___

### \_paths

• `Private` **\_paths**: `any`

#### Defined in

packages/service/lib/core/api.d.ts:23

___

### \_phase

• `Private` **\_phase**: `any`

#### Defined in

packages/service/lib/core/api.d.ts:20

___

### \_platform

• `Private` `Optional` **\_platform**: `any`

#### Defined in

packages/service/lib/core/api.d.ts:25

___

### \_pluginContext

• `Private` **\_pluginContext**: `any`

#### Defined in

packages/service/lib/core/api.d.ts:28

___

### \_pluginManager

• `Private` **\_pluginManager**: `any`

#### Defined in

packages/service/lib/core/api.d.ts:27

___

### \_projectBuilder

• `Private` **\_projectBuilder**: `any`

#### Defined in

packages/service/lib/core/api.d.ts:24

___

### \_removeLastArtifacts

• `Private` **\_removeLastArtifacts**: `any`

#### Defined in

packages/service/lib/core/api.d.ts:65

___

### \_serverConfigs

• `Private` **\_serverConfigs**: `any`

#### Defined in

packages/service/lib/core/api.d.ts:29

___

### \_serverPlugins

• `Private` **\_serverPlugins**: `any`

#### Defined in

packages/service/lib/core/api.d.ts:26

___

### \_userConfig

• `Private` **\_userConfig**: `any`

#### Defined in

packages/service/lib/core/api.d.ts:21

## Accessors

### assetPublicPath

• `get` **assetPublicPath**(): `string`

#### Returns

`string`

#### Defined in

packages/service/lib/core/api.d.ts:48

___

### cwd

• `get` **cwd**(): `string`

#### Returns

`string`

#### Defined in

packages/service/lib/core/api.d.ts:31

___

### mode

• `get` **mode**(): `IShuviMode`

#### Returns

`IShuviMode`

#### Defined in

packages/service/lib/core/api.d.ts:32

___

### pluginContext

• `get` **pluginContext**(): [`IPluginContext`](../modules.md#iplugincontext)

#### Returns

[`IPluginContext`](../modules.md#iplugincontext)

#### Defined in

packages/service/lib/core/api.d.ts:45

___

### pluginManager

• `get` **pluginManager**(): `HookManager`<{ `addExtraTarget`: `AsyncParallelHook`<`ExtraTargetAssistant`, `void`, `TargetChain`\> ; `addResource`: `AsyncParallelHook`<`void`, `void`, `Resources` \| `Resources`[]\> ; `addRuntimeFile`: `AsyncParallelHook`<`void`, `AddRuntimeFileUtils`, `FileOptions`<`any`, `any`\> \| `FileOptions`<`any`, `any`\>[]\> ; `addRuntimeService`: `AsyncParallelHook`<`void`, `void`, `RuntimeService` \| `RuntimeService`[]\> ; `afterBuild`: `AsyncParallelHook`<`void`, `void`, `void`\> ; `afterBundlerDone`: `AsyncParallelHook`<`BundlerDoneExtra`, `void`, `void`\> ; `afterBundlerTargetDone`: `AsyncParallelHook`<`BundlerTargetDoneExtra`, `void`, `void`\> ; `afterDestroy`: `AsyncParallelHook`<`void`, `void`, `void`\> ; `afterInit`: `AsyncParallelHook`<`void`, `void`, `void`\> ; `configWebpack`: `AsyncSeriesWaterfallHook`<`WebpackChainType`, `ConfigWebpackAssistant`\>  }, [`IPluginContext`](../modules.md#iplugincontext), `CustomCorePluginHooks`\>

#### Returns

`HookManager`<{ `addExtraTarget`: `AsyncParallelHook`<`ExtraTargetAssistant`, `void`, `TargetChain`\> ; `addResource`: `AsyncParallelHook`<`void`, `void`, `Resources` \| `Resources`[]\> ; `addRuntimeFile`: `AsyncParallelHook`<`void`, `AddRuntimeFileUtils`, `FileOptions`<`any`, `any`\> \| `FileOptions`<`any`, `any`\>[]\> ; `addRuntimeService`: `AsyncParallelHook`<`void`, `void`, `RuntimeService` \| `RuntimeService`[]\> ; `afterBuild`: `AsyncParallelHook`<`void`, `void`, `void`\> ; `afterBundlerDone`: `AsyncParallelHook`<`BundlerDoneExtra`, `void`, `void`\> ; `afterBundlerTargetDone`: `AsyncParallelHook`<`BundlerTargetDoneExtra`, `void`, `void`\> ; `afterDestroy`: `AsyncParallelHook`<`void`, `void`, `void`\> ; `afterInit`: `AsyncParallelHook`<`void`, `void`, `void`\> ; `configWebpack`: `AsyncSeriesWaterfallHook`<`WebpackChainType`, `ConfigWebpackAssistant`\>  }, [`IPluginContext`](../modules.md#iplugincontext), `CustomCorePluginHooks`\>

#### Defined in

packages/service/lib/core/api.d.ts:33

___

### serverConfigs

• `get` **serverConfigs**(): `ServerConfigs`

#### Returns

`ServerConfigs`

#### Defined in

packages/service/lib/core/api.d.ts:46

## Methods

### addInternalRuntimeFile

▸ **addInternalRuntimeFile**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `FileOptions`<`any`, `any`\> |

#### Returns

`void`

#### Defined in

packages/service/lib/core/api.d.ts:51

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

packages/service/lib/core/api.d.ts:55

___

### addRuntimeFile

▸ **addRuntimeFile**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `FileOptions`<`any`, `any`\> |

#### Returns

`void`

#### Defined in

packages/service/lib/core/api.d.ts:50

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

packages/service/lib/core/api.d.ts:52

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

packages/service/lib/core/api.d.ts:53

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

packages/service/lib/core/api.d.ts:54

___

### buildApp

▸ **buildApp**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/service/lib/core/api.d.ts:49

___

### destory

▸ **destory**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/service/lib/core/api.d.ts:61

___

### getAssetPublicUrl

▸ **getAssetPublicUrl**(...`paths`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...paths` | `string`[] |

#### Returns

`string`

#### Defined in

packages/service/lib/core/api.d.ts:56

___

### init

▸ **init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/service/lib/core/api.d.ts:47

___

### resolveAppFile

▸ **resolveAppFile**(...`paths`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...paths` | `string`[] |

#### Returns

`string`

#### Defined in

packages/service/lib/core/api.d.ts:57

___

### resolveBuildFile

▸ **resolveBuildFile**(...`paths`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...paths` | `string`[] |

#### Returns

`string`

#### Defined in

packages/service/lib/core/api.d.ts:59

___

### resolvePublicFile

▸ **resolvePublicFile**(...`paths`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...paths` | `string`[] |

#### Returns

`string`

#### Defined in

packages/service/lib/core/api.d.ts:60

___

### resolveUserFile

▸ **resolveUserFile**(...`paths`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...paths` | `string`[] |

#### Returns

`string`

#### Defined in

packages/service/lib/core/api.d.ts:58
