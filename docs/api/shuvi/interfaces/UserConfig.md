[shuvi](../README.md) / [Exports](../modules.md) / UserConfig

# Interface: UserConfig

## Table of contents

### Properties

- [analyze](UserConfig.md#analyze)
- [apiConfig](UserConfig.md#apiconfig)
- [apiRoutes](UserConfig.md#apiroutes)
- [env](UserConfig.md#env)
- [experimental](UserConfig.md#experimental)
- [outputPath](UserConfig.md#outputpath)
- [platform](UserConfig.md#platform)
- [plugins](UserConfig.md#plugins)
- [presets](UserConfig.md#presets)
- [proxy](UserConfig.md#proxy)
- [publicDir](UserConfig.md#publicdir)
- [publicPath](UserConfig.md#publicpath)
- [router](UserConfig.md#router)
- [routes](UserConfig.md#routes)
- [runtimeConfig](UserConfig.md#runtimeconfig)
- [ssr](UserConfig.md#ssr)
- [target](UserConfig.md#target)

## Properties

### analyze

• `Optional` **analyze**: `boolean`

#### Defined in

packages/service/lib/core/apiTypes.d.ts:109

___

### apiConfig

• `Optional` **apiConfig**: `IApiConfig`

#### Defined in

packages/service/lib/core/apiTypes.d.ts:99

___

### apiRoutes

• `Optional` **apiRoutes**: `IApiRouteConfig`[]

#### Defined in

packages/service/lib/core/apiTypes.d.ts:98

___

### env

• `Optional` **env**: `Record`<`string`, `string`\>

#### Defined in

packages/service/lib/core/apiTypes.d.ts:95

___

### experimental

• `Optional` **experimental**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `parcelCss?` | `boolean` |

#### Defined in

packages/service/lib/core/apiTypes.d.ts:110

___

### outputPath

• `Optional` **outputPath**: `string`

#### Defined in

packages/service/lib/core/apiTypes.d.ts:91

___

### platform

• `Optional` **platform**: `IPlatformConfig`

#### Defined in

packages/service/lib/core/apiTypes.d.ts:105

___

### plugins

• `Optional` **plugins**: `IPluginConfig`[]

#### Defined in

packages/service/lib/core/apiTypes.d.ts:107

___

### presets

• `Optional` **presets**: `IPresetConfig`[]

#### Defined in

packages/service/lib/core/apiTypes.d.ts:108

___

### proxy

• `Optional` **proxy**: `any`

#### Defined in

packages/service/lib/core/apiTypes.d.ts:106

___

### publicDir

• `Optional` **publicDir**: `string`

#### Defined in

packages/service/lib/core/apiTypes.d.ts:93

___

### publicPath

• `Optional` **publicPath**: `string`

#### Defined in

packages/service/lib/core/apiTypes.d.ts:94

___

### router

• `Optional` **router**: `IRouterConfig`

#### Defined in

packages/service/lib/core/apiTypes.d.ts:96

___

### routes

• `Optional` **routes**: [`IUserRouteConfig`](IUserRouteConfig.md)[]

#### Defined in

packages/service/lib/core/apiTypes.d.ts:97

___

### runtimeConfig

• `Optional` **runtimeConfig**: `IRuntimeConfig`

#### Defined in

packages/service/lib/core/apiTypes.d.ts:100

___

### ssr

• `Optional` **ssr**: `boolean`

#### Defined in

packages/service/lib/core/apiTypes.d.ts:92

___

### target

• `Optional` **target**: ``"spa"`` \| ``"ssr"``

specifically target for `platform-web`

#### Defined in

packages/service/lib/core/apiTypes.d.ts:104
