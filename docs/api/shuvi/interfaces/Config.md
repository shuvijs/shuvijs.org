[shuvi](../README.md) / [Exports](../modules.md) / Config

# Interface: Config

## Hierarchy

- `Omit`<`Required`<[`UserConfig`](UserConfig.md)\>, ``"router"`` \| ``"apiConfig"``\>

  ↳ **`Config`**

## Table of contents

### Properties

- [analyze](Config.md#analyze)
- [apiConfig](Config.md#apiconfig)
- [apiRoutes](Config.md#apiroutes)
- [env](Config.md#env)
- [experimental](Config.md#experimental)
- [outputPath](Config.md#outputpath)
- [platform](Config.md#platform)
- [plugins](Config.md#plugins)
- [presets](Config.md#presets)
- [proxy](Config.md#proxy)
- [publicDir](Config.md#publicdir)
- [publicPath](Config.md#publicpath)
- [router](Config.md#router)
- [routes](Config.md#routes)
- [runtimeConfig](Config.md#runtimeconfig)
- [ssr](Config.md#ssr)
- [target](Config.md#target)

## Properties

### analyze

• **analyze**: `boolean`

#### Inherited from

Omit.analyze

#### Defined in

packages/service/lib/core/apiTypes.d.ts:109

___

### apiConfig

• **apiConfig**: `Required`<`IApiConfig`\>

#### Defined in

packages/service/lib/core/apiTypes.d.ts:116

___

### apiRoutes

• **apiRoutes**: `IApiRouteConfig`[]

#### Inherited from

Omit.apiRoutes

#### Defined in

packages/service/lib/core/apiTypes.d.ts:98

___

### env

• **env**: `Record`<`string`, `string`\>

#### Inherited from

Omit.env

#### Defined in

packages/service/lib/core/apiTypes.d.ts:95

___

### experimental

• **experimental**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `parcelCss?` | `boolean` |

#### Inherited from

Omit.experimental

#### Defined in

packages/service/lib/core/apiTypes.d.ts:110

___

### outputPath

• **outputPath**: `string`

#### Inherited from

Omit.outputPath

#### Defined in

packages/service/lib/core/apiTypes.d.ts:91

___

### platform

• **platform**: `IPlatformConfig`

#### Inherited from

Omit.platform

#### Defined in

packages/service/lib/core/apiTypes.d.ts:105

___

### plugins

• **plugins**: `IPluginConfig`[]

#### Inherited from

Omit.plugins

#### Defined in

packages/service/lib/core/apiTypes.d.ts:107

___

### presets

• **presets**: `IPresetConfig`[]

#### Inherited from

Omit.presets

#### Defined in

packages/service/lib/core/apiTypes.d.ts:108

___

### proxy

• **proxy**: `any`

#### Inherited from

Omit.proxy

#### Defined in

packages/service/lib/core/apiTypes.d.ts:106

___

### publicDir

• **publicDir**: `string`

#### Inherited from

Omit.publicDir

#### Defined in

packages/service/lib/core/apiTypes.d.ts:93

___

### publicPath

• **publicPath**: `string`

#### Inherited from

Omit.publicPath

#### Defined in

packages/service/lib/core/apiTypes.d.ts:94

___

### router

• **router**: `Required`<`IRouterConfig`\>

#### Defined in

packages/service/lib/core/apiTypes.d.ts:115

___

### routes

• **routes**: [`IUserRouteConfig`](IUserRouteConfig.md)[]

#### Inherited from

Omit.routes

#### Defined in

packages/service/lib/core/apiTypes.d.ts:97

___

### runtimeConfig

• **runtimeConfig**: `IRuntimeConfig`

#### Inherited from

Omit.runtimeConfig

#### Defined in

packages/service/lib/core/apiTypes.d.ts:100

___

### ssr

• **ssr**: `boolean`

#### Inherited from

Omit.ssr

#### Defined in

packages/service/lib/core/apiTypes.d.ts:92

___

### target

• **target**: ``"spa"`` \| ``"ssr"``

specifically target for `platform-web`

#### Inherited from

Omit.target

#### Defined in

packages/service/lib/core/apiTypes.d.ts:104
