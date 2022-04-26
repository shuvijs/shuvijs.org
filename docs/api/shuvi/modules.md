[shuvi](README.md) / Exports

# shuvi

## Table of contents

### Classes

- [Api](classes/Api.md)
- [ProjectBuilder](classes/ProjectBuilder.md)
- [Server](classes/Server.md)

### Interfaces

- [Config](interfaces/Config.md)
- [CreateShuviServerOptions](interfaces/CreateShuviServerOptions.md)
- [IDocumentModule](interfaces/IDocumentModule.md)
- [IIncomingMessage](interfaces/IIncomingMessage.md)
- [IPaths](interfaces/IPaths.md)
- [IRequest](interfaces/IRequest.md)
- [IResponse](interfaces/IResponse.md)
- [IServerMiddlewareItem](interfaces/IServerMiddlewareItem.md)
- [IServerModule](interfaces/IServerModule.md)
- [IShuviServer](interfaces/IShuviServer.md)
- [IUserRouteConfig](interfaces/IUserRouteConfig.md)
- [PluginHooks](interfaces/PluginHooks.md)
- [ServerPluginHooks](interfaces/ServerPluginHooks.md)
- [ShuviServerOptions](interfaces/ShuviServerOptions.md)
- [UserConfig](interfaces/UserConfig.md)

### Type aliases

- [CorePluginConstructor](modules.md#corepluginconstructor)
- [CorePluginInstance](modules.md#coreplugininstance)
- [IApiRoutes](modules.md#iapiroutes)
- [IAsyncRequestHandler](modules.md#iasyncrequesthandler)
- [IErrorHandler](modules.md#ierrorhandler)
- [IErrorHandlerWithNext](modules.md#ierrorhandlerwithnext)
- [IMiddlewareHandler](modules.md#imiddlewarehandler)
- [IMiddlewareRoutes](modules.md#imiddlewareroutes)
- [INextFunc](modules.md#inextfunc)
- [IPlatform](modules.md#iplatform)
- [IPlatformContent](modules.md#iplatformcontent)
- [IPluginContext](modules.md#iplugincontext)
- [IProxy](modules.md#iproxy)
- [IRequestHandler](modules.md#irequesthandler)
- [IRequestHandlerWithNext](modules.md#irequesthandlerwithnext)
- [IServerMiddleware](modules.md#iservermiddleware)
- [IServerPluginConstructor](modules.md#iserverpluginconstructor)
- [IServerPluginContext](modules.md#iserverplugincontext)
- [InternalServerPluginHooks](modules.md#internalserverpluginhooks)
- [PluginManager](modules.md#pluginmanager)
- [PluginRunner](modules.md#pluginrunner)
- [ServerPluginInstance](modules.md#serverplugininstance)

### Variables

- [BUILD\_CLIENT\_RUNTIME\_MAIN](modules.md#build_client_runtime_main)
- [BUILD\_CLIENT\_RUNTIME\_POLYFILL](modules.md#build_client_runtime_polyfill)
- [BUILD\_CLIENT\_RUNTIME\_WEBPACK](modules.md#build_client_runtime_webpack)
- [BUILD\_DEFAULT\_DIR](modules.md#build_default_dir)
- [BUILD\_MANIFEST\_PATH](modules.md#build_manifest_path)
- [BUILD\_MEDIA\_PATH](modules.md#build_media_path)
- [BUILD\_SERVER\_DIR](modules.md#build_server_dir)
- [BUILD\_SERVER\_FILE\_SERVER](modules.md#build_server_file_server)
- [PHASE\_DEVELOPMENT\_SERVER](modules.md#phase_development_server)
- [PHASE\_INSPECT\_WEBPACK](modules.md#phase_inspect_webpack)
- [PHASE\_PRODUCTION\_BUILD](modules.md#phase_production_build)
- [PHASE\_PRODUCTION\_SERVER](modules.md#phase_production_server)
- [PUBLIC\_PATH](modules.md#public_path)

### Functions

- [createPlugin](modules.md#createplugin)
- [createServerPlugin](modules.md#createserverplugin)
- [createShuviServer](modules.md#createshuviserver)
- [defineConfig](modules.md#defineconfig)
- [getApi](modules.md#getapi)
- [getBundler](modules.md#getbundler)
- [getManager](modules.md#getmanager)
- [initServerPlugins](modules.md#initserverplugins)
- [loadConfig](modules.md#loadconfig)

## Type aliases

### CorePluginConstructor

Ƭ **CorePluginConstructor**: `IPluginHandlers`<`BuiltinPluginHooks` & `CustomCorePluginHooks`, [`IPluginContext`](modules.md#iplugincontext)\>

#### Defined in

packages/service/lib/core/lifecycle.d.ts:23

___

### CorePluginInstance

Ƭ **CorePluginInstance**: `IPluginInstance`<`BuiltinPluginHooks` & `CustomCorePluginHooks`, [`IPluginContext`](modules.md#iplugincontext)\>

#### Defined in

packages/service/lib/core/lifecycle.d.ts:22

___

### IApiRoutes

Ƭ **IApiRoutes**: { `apiModule`: `IApiModule` ; `path`: `string`  }[]

#### Defined in

packages/platform-web/lib/types/resources.d.ts:22

___

### IAsyncRequestHandler

Ƭ **IAsyncRequestHandler**: (`req`: [`IRequest`](interfaces/IRequest.md), `res`: [`IResponse`](interfaces/IResponse.md), `next?`: [`INextFunc`](modules.md#inextfunc)) => `Promise`<`any`\>

#### Type declaration

▸ (`req`, `res`, `next?`): `Promise`<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`IRequest`](interfaces/IRequest.md) |
| `res` | [`IResponse`](interfaces/IResponse.md) |
| `next?` | [`INextFunc`](modules.md#inextfunc) |

##### Returns

`Promise`<`any`\>

#### Defined in

packages/service/lib/server/http-server/serverTypes.d.ts:25

___

### IErrorHandler

Ƭ **IErrorHandler**: (`err`: `any`, `req`: [`IRequest`](interfaces/IRequest.md), `res`: [`IResponse`](interfaces/IResponse.md)) => `void`

#### Type declaration

▸ (`err`, `req`, `res`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `any` |
| `req` | [`IRequest`](interfaces/IRequest.md) |
| `res` | [`IResponse`](interfaces/IResponse.md) |

##### Returns

`void`

#### Defined in

packages/service/lib/server/http-server/serverTypes.d.ts:23

___

### IErrorHandlerWithNext

Ƭ **IErrorHandlerWithNext**: (`err`: `any`, `req`: [`IRequest`](interfaces/IRequest.md), `res`: [`IResponse`](interfaces/IResponse.md), `next`: [`INextFunc`](modules.md#inextfunc)) => `void`

#### Type declaration

▸ (`err`, `req`, `res`, `next`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `any` |
| `req` | [`IRequest`](interfaces/IRequest.md) |
| `res` | [`IResponse`](interfaces/IResponse.md) |
| `next` | [`INextFunc`](modules.md#inextfunc) |

##### Returns

`void`

#### Defined in

packages/service/lib/server/http-server/serverTypes.d.ts:24

___

### IMiddlewareHandler

Ƭ **IMiddlewareHandler**: [`IRequestHandler`](modules.md#irequesthandler) \| [`IRequestHandlerWithNext`](modules.md#irequesthandlerwithnext) \| [`IAsyncRequestHandler`](modules.md#iasyncrequesthandler) \| [`IErrorHandler`](modules.md#ierrorhandler) \| [`IErrorHandlerWithNext`](modules.md#ierrorhandlerwithnext)

#### Defined in

packages/service/lib/server/http-server/serverTypes.d.ts:26

___

### IMiddlewareRoutes

Ƭ **IMiddlewareRoutes**: { `middlewares`: [`IRequestHandlerWithNext`](modules.md#irequesthandlerwithnext)[] ; `path`: `string`  }[]

#### Defined in

packages/platform-web/lib/types/resources.d.ts:26

___

### INextFunc

Ƭ **INextFunc**: (`err?`: `any`) => `void`

#### Type declaration

▸ (`err?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `err?` | `any` |

##### Returns

`void`

#### Defined in

packages/service/lib/server/http-server/serverTypes.d.ts:21

___

### IPlatform

Ƭ **IPlatform**: (`config`: `Omit`<`IPlatformConfig`, ``"name"``\>, `context`: `IPlatformContext`) => `Promise`<[`IPlatformContent`](modules.md#iplatformcontent)\> \| [`IPlatformContent`](modules.md#iplatformcontent)

#### Type declaration

▸ (`config`, `context`): `Promise`<[`IPlatformContent`](modules.md#iplatformcontent)\> \| [`IPlatformContent`](modules.md#iplatformcontent)

##### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Omit`<`IPlatformConfig`, ``"name"``\> |
| `context` | `IPlatformContext` |

##### Returns

`Promise`<[`IPlatformContent`](modules.md#iplatformcontent)\> \| [`IPlatformContent`](modules.md#iplatformcontent)

#### Defined in

packages/service/lib/core/apiTypes.d.ts:74

___

### IPlatformContent

Ƭ **IPlatformContent**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `plugins?` | ([`CorePluginInstance`](modules.md#coreplugininstance) \| `ResolvedPlugin` \| `string`)[] |
| `getMiddlewares?` | (`context`: [`IServerPluginContext`](modules.md#iserverplugincontext)) => [`IServerMiddleware`](modules.md#iservermiddleware) \| [`IServerMiddleware`](modules.md#iservermiddleware)[] |
| `getMiddlewaresBeforeDevMiddlewares?` | (`devMiddleware`: `DevMiddleware`, `context`: [`IServerPluginContext`](modules.md#iserverplugincontext)) => [`IServerMiddleware`](modules.md#iservermiddleware) \| [`IServerMiddleware`](modules.md#iservermiddleware)[] |
| `getPresetRuntimeFiles` | (`context`: [`IPluginContext`](modules.md#iplugincontext)) => `FileOptions`<`any`, `any`\>[] \| `Promise`<`FileOptions`<`any`, `any`\>[]\> |

#### Defined in

packages/service/lib/core/apiTypes.d.ts:65

___

### IPluginContext

Ƭ **IPluginContext**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `assetPublicPath` | `string` |
| `config` | [`Config`](interfaces/Config.md) |
| `mode` | `IShuviMode` |
| `paths` | [`IPaths`](interfaces/IPaths.md) |
| `phase` | `IPhase` |
| `pluginRunner` | `PluginRunner` |
| `getAssetPublicUrl` | (...`paths`: `string`[]) => `string` |
| `resolveAppFile` | (...`paths`: `string`[]) => `string` |
| `resolveBuildFile` | (...`paths`: `string`[]) => `string` |
| `resolvePublicFile` | (...`paths`: `string`[]) => `string` |
| `resolveUserFile` | (...`paths`: `string`[]) => `string` |

#### Defined in

packages/service/lib/core/apiTypes.d.ts:118

___

### IProxy

Ƭ **IProxy**: `IProxyConfigItem` \| `IProxyConfigItem`[]

#### Defined in

packages/service/lib/server/pluginTypes.d.ts:4

___

### IRequestHandler

Ƭ **IRequestHandler**: (`req`: [`IRequest`](interfaces/IRequest.md), `res`: [`IResponse`](interfaces/IResponse.md)) => `void`

#### Type declaration

▸ (`req`, `res`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`IRequest`](interfaces/IRequest.md) |
| `res` | [`IResponse`](interfaces/IResponse.md) |

##### Returns

`void`

#### Defined in

packages/service/lib/server/http-server/serverTypes.d.ts:20

___

### IRequestHandlerWithNext

Ƭ **IRequestHandlerWithNext**: (`req`: [`IRequest`](interfaces/IRequest.md), `res`: [`IResponse`](interfaces/IResponse.md), `next`: [`INextFunc`](modules.md#inextfunc)) => `void`

#### Type declaration

▸ (`req`, `res`, `next`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`IRequest`](interfaces/IRequest.md) |
| `res` | [`IResponse`](interfaces/IResponse.md) |
| `next` | [`INextFunc`](modules.md#inextfunc) |

##### Returns

`void`

#### Defined in

packages/service/lib/server/http-server/serverTypes.d.ts:22

___

### IServerMiddleware

Ƭ **IServerMiddleware**: [`IServerMiddlewareItem`](interfaces/IServerMiddlewareItem.md) \| [`IServerMiddlewareItem`](interfaces/IServerMiddlewareItem.md)[``"handler"``]

#### Defined in

packages/service/lib/server/pluginTypes.d.ts:3

___

### IServerPluginConstructor

Ƭ **IServerPluginConstructor**: `IPluginHandlers`<[`InternalServerPluginHooks`](modules.md#internalserverpluginhooks) & `CustomServerPluginHooks`, [`IServerPluginContext`](modules.md#iserverplugincontext)\>

#### Defined in

packages/service/lib/server/plugin.d.ts:43

___

### IServerPluginContext

Ƭ **IServerPluginContext**: [`IPluginContext`](modules.md#iplugincontext) & { `serverPluginRunner`: [`PluginManager`](modules.md#pluginmanager)[``"runner"``]  }

#### Defined in

packages/service/lib/server/plugin.d.ts:6

___

### InternalServerPluginHooks

Ƭ **InternalServerPluginHooks**: typeof `internalHooks`

#### Defined in

packages/service/lib/server/plugin.d.ts:18

___

### PluginManager

Ƭ **PluginManager**: `ReturnType`<typeof [`getManager`](modules.md#getmanager)\>

#### Defined in

packages/service/lib/server/plugin.d.ts:9

___

### PluginRunner

Ƭ **PluginRunner**: [`PluginManager`](modules.md#pluginmanager)[``"runner"``]

#### Defined in

packages/service/lib/server/plugin.d.ts:10

___

### ServerPluginInstance

Ƭ **ServerPluginInstance**: `IPluginInstance`<[`InternalServerPluginHooks`](modules.md#internalserverpluginhooks) & `CustomServerPluginHooks`, [`IServerPluginContext`](modules.md#iserverplugincontext)\>

#### Defined in

packages/service/lib/server/plugin.d.ts:44

## Variables

### BUILD\_CLIENT\_RUNTIME\_MAIN

• `Const` **BUILD\_CLIENT\_RUNTIME\_MAIN**: ``"static/runtime/main"``

#### Defined in

packages/service/lib/constants.d.ts:5

___

### BUILD\_CLIENT\_RUNTIME\_POLYFILL

• `Const` **BUILD\_CLIENT\_RUNTIME\_POLYFILL**: ``"static/runtime/polyfill"``

#### Defined in

packages/service/lib/constants.d.ts:7

___

### BUILD\_CLIENT\_RUNTIME\_WEBPACK

• `Const` **BUILD\_CLIENT\_RUNTIME\_WEBPACK**: ``"static/runtime/webpack"``

#### Defined in

packages/service/lib/constants.d.ts:6

___

### BUILD\_DEFAULT\_DIR

• `Const` **BUILD\_DEFAULT\_DIR**: ``"client"``

#### Defined in

packages/service/lib/constants.d.ts:4

___

### BUILD\_MANIFEST\_PATH

• `Const` **BUILD\_MANIFEST\_PATH**: ``"build-manifest.json"``

#### Defined in

packages/service/lib/constants.d.ts:2

___

### BUILD\_MEDIA\_PATH

• `Const` **BUILD\_MEDIA\_PATH**: ``"static/media/[name].[hash:8].[ext]"``

#### Defined in

packages/service/lib/constants.d.ts:3

___

### BUILD\_SERVER\_DIR

• `Const` **BUILD\_SERVER\_DIR**: ``"server"``

#### Defined in

packages/service/lib/constants.d.ts:8

___

### BUILD\_SERVER\_FILE\_SERVER

• `Const` **BUILD\_SERVER\_FILE\_SERVER**: ``"server"``

#### Defined in

packages/service/lib/constants.d.ts:9

___

### PHASE\_DEVELOPMENT\_SERVER

• `Const` **PHASE\_DEVELOPMENT\_SERVER**: ``"PHASE_DEVELOPMENT_SERVER"``

#### Defined in

packages/service/lib/constants.d.ts:12

___

### PHASE\_INSPECT\_WEBPACK

• `Const` **PHASE\_INSPECT\_WEBPACK**: ``"PHASE_INSPECT_WEBPACK"``

#### Defined in

packages/service/lib/constants.d.ts:13

___

### PHASE\_PRODUCTION\_BUILD

• `Const` **PHASE\_PRODUCTION\_BUILD**: ``"PHASE_PRODUCTION_BUILD"``

#### Defined in

packages/service/lib/constants.d.ts:10

___

### PHASE\_PRODUCTION\_SERVER

• `Const` **PHASE\_PRODUCTION\_SERVER**: ``"PHASE_PRODUCTION_SERVER"``

#### Defined in

packages/service/lib/constants.d.ts:11

___

### PUBLIC\_PATH

• `Const` **PUBLIC\_PATH**: `string`

#### Defined in

packages/service/lib/constants.d.ts:1

## Functions

### createPlugin

▸ **createPlugin**(`pluginHandlers`, `options?`): `IPluginInstance`<{ `addExtraTarget`: `AsyncParallelHook`<`ExtraTargetAssistant`, `void`, `TargetChain`\> ; `addResource`: `AsyncParallelHook`<`void`, `void`, `Resources` \| `Resources`[]\> ; `addRuntimeFile`: `AsyncParallelHook`<`void`, `AddRuntimeFileUtils`, `FileOptions`<`any`, `any`\> \| `FileOptions`<`any`, `any`\>[]\> ; `addRuntimeService`: `AsyncParallelHook`<`void`, `void`, `RuntimeService` \| `RuntimeService`[]\> ; `afterBuild`: `AsyncParallelHook`<`void`, `void`, `void`\> ; `afterBundlerDone`: `AsyncParallelHook`<`BundlerDoneExtra`, `void`, `void`\> ; `afterBundlerTargetDone`: `AsyncParallelHook`<`BundlerTargetDoneExtra`, `void`, `void`\> ; `afterDestroy`: `AsyncParallelHook`<`void`, `void`, `void`\> ; `afterInit`: `AsyncParallelHook`<`void`, `void`, `void`\> ; `configWebpack`: `AsyncSeriesWaterfallHook`<`WebpackChainType`, `ConfigWebpackAssistant`\>  } & `CustomCorePluginHooks`, [`IPluginContext`](modules.md#iplugincontext)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pluginHandlers` | `Partial`<`IPluginHandlersFullMap`<{ `addExtraTarget`: `AsyncParallelHook`<`ExtraTargetAssistant`, `void`, `TargetChain`\> ; `addResource`: `AsyncParallelHook`<`void`, `void`, `Resources` \| `Resources`[]\> ; `addRuntimeFile`: `AsyncParallelHook`<`void`, `AddRuntimeFileUtils`, `FileOptions`<`any`, `any`\> \| `FileOptions`<`any`, `any`\>[]\> ; `addRuntimeService`: `AsyncParallelHook`<`void`, `void`, `RuntimeService` \| `RuntimeService`[]\> ; `afterBuild`: `AsyncParallelHook`<`void`, `void`, `void`\> ; `afterBundlerDone`: `AsyncParallelHook`<`BundlerDoneExtra`, `void`, `void`\> ; `afterBundlerTargetDone`: `AsyncParallelHook`<`BundlerTargetDoneExtra`, `void`, `void`\> ; `afterDestroy`: `AsyncParallelHook`<`void`, `void`, `void`\> ; `afterInit`: `AsyncParallelHook`<`void`, `void`, `void`\> ; `configWebpack`: `AsyncSeriesWaterfallHook`<`WebpackChainType`, `ConfigWebpackAssistant`\>  } & `CustomCorePluginHooks`, [`IPluginContext`](modules.md#iplugincontext)\>\> & { `setup?`: `Setup`<`CustomCorePluginHooks`\>  } |
| `options?` | `PluginOptions` |

#### Returns

`IPluginInstance`<{ `addExtraTarget`: `AsyncParallelHook`<`ExtraTargetAssistant`, `void`, `TargetChain`\> ; `addResource`: `AsyncParallelHook`<`void`, `void`, `Resources` \| `Resources`[]\> ; `addRuntimeFile`: `AsyncParallelHook`<`void`, `AddRuntimeFileUtils`, `FileOptions`<`any`, `any`\> \| `FileOptions`<`any`, `any`\>[]\> ; `addRuntimeService`: `AsyncParallelHook`<`void`, `void`, `RuntimeService` \| `RuntimeService`[]\> ; `afterBuild`: `AsyncParallelHook`<`void`, `void`, `void`\> ; `afterBundlerDone`: `AsyncParallelHook`<`BundlerDoneExtra`, `void`, `void`\> ; `afterBundlerTargetDone`: `AsyncParallelHook`<`BundlerTargetDoneExtra`, `void`, `void`\> ; `afterDestroy`: `AsyncParallelHook`<`void`, `void`, `void`\> ; `afterInit`: `AsyncParallelHook`<`void`, `void`, `void`\> ; `configWebpack`: `AsyncSeriesWaterfallHook`<`WebpackChainType`, `ConfigWebpackAssistant`\>  } & `CustomCorePluginHooks`, [`IPluginContext`](modules.md#iplugincontext)\>

#### Defined in

packages/service/lib/core/lifecycle.d.ts:38

___

### createServerPlugin

▸ **createServerPlugin**(`pluginHandlers`, `options?`): `IPluginInstance`<{ `addProxy`: `AsyncParallelHook`<`void`, `void`, [`IProxy`](modules.md#iproxy)\> ; `onListen`: `AsyncParallelHook`<{ `hostname?`: `string` ; `port`: `number`  }, `void`, `void`\>  } & `CustomServerPluginHooks`, [`IServerPluginContext`](modules.md#iserverplugincontext)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pluginHandlers` | `Partial`<`IPluginHandlersFullMap`<{ `addProxy`: `AsyncParallelHook`<`void`, `void`, [`IProxy`](modules.md#iproxy)\> ; `onListen`: `AsyncParallelHook`<{ `hostname?`: `string` ; `port`: `number`  }, `void`, `void`\>  } & `CustomServerPluginHooks`, [`IServerPluginContext`](modules.md#iserverplugincontext)\>\> & { `setup?`: `Setup`<`CustomServerPluginHooks`\>  } |
| `options?` | `PluginOptions` |

#### Returns

`IPluginInstance`<{ `addProxy`: `AsyncParallelHook`<`void`, `void`, [`IProxy`](modules.md#iproxy)\> ; `onListen`: `AsyncParallelHook`<{ `hostname?`: `string` ; `port`: `number`  }, `void`, `void`\>  } & `CustomServerPluginHooks`, [`IServerPluginContext`](modules.md#iserverplugincontext)\>

#### Defined in

packages/service/lib/server/plugin.d.ts:28

___

### createShuviServer

▸ **createShuviServer**(`__namedParameters`): `Promise`<[`IShuviServer`](interfaces/IShuviServer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`CreateShuviServerOptions`](interfaces/CreateShuviServerOptions.md) |

#### Returns

`Promise`<[`IShuviServer`](interfaces/IShuviServer.md)\>

#### Defined in

packages/service/lib/server/index.d.ts:10

___

### defineConfig

▸ **defineConfig**(`config`): [`UserConfig`](interfaces/UserConfig.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`UserConfig`](interfaces/UserConfig.md) |

#### Returns

[`UserConfig`](interfaces/UserConfig.md)

#### Defined in

packages/service/lib/core/config/config.d.ts:12

___

### getApi

▸ **getApi**(`options`): `Promise`<[`Api`](classes/Api.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<`IApiOPtions`\> |

#### Returns

`Promise`<[`Api`](classes/Api.md)\>

#### Defined in

packages/service/lib/core/api.d.ts:68

___

### getBundler

▸ **getBundler**(`_cliContext`): `WebpackBundler`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_cliContext` | [`IPluginContext`](modules.md#iplugincontext) |

#### Returns

`WebpackBundler`

#### Defined in

packages/service/lib/bundler/bundler.d.ts:29

___

### getManager

▸ **getManager**(): `HookManager`<{ `addProxy`: `AsyncParallelHook`<`void`, `void`, [`IProxy`](modules.md#iproxy)\> ; `onListen`: `AsyncParallelHook`<{ `hostname?`: `string` ; `port`: `number`  }, `void`, `void`\>  }, [`IServerPluginContext`](modules.md#iserverplugincontext), `CustomServerPluginHooks`\>

#### Returns

`HookManager`<{ `addProxy`: `AsyncParallelHook`<`void`, `void`, [`IProxy`](modules.md#iproxy)\> ; `onListen`: `AsyncParallelHook`<{ `hostname?`: `string` ; `port`: `number`  }, `void`, `void`\>  }, [`IServerPluginContext`](modules.md#iserverplugincontext), `CustomServerPluginHooks`\>

#### Defined in

packages/service/lib/server/plugin.d.ts:21

___

### initServerPlugins

▸ **initServerPlugins**(`manager`, `serverPlugins`, `pluginContext`): [`IServerPluginContext`](modules.md#iserverplugincontext)

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | `HookManager`<{ `addProxy`: `AsyncParallelHook`<`void`, `void`, [`IProxy`](modules.md#iproxy)\> ; `onListen`: `AsyncParallelHook`<{ `hostname?`: `string` ; `port`: `number`  }, `void`, `void`\>  }, [`IServerPluginContext`](modules.md#iserverplugincontext), `CustomServerPluginHooks`\> |
| `serverPlugins` | [`ServerPluginInstance`](modules.md#serverplugininstance)[] |
| `pluginContext` | [`IPluginContext`](modules.md#iplugincontext) |

#### Returns

[`IServerPluginContext`](modules.md#iserverplugincontext)

#### Defined in

packages/service/lib/server/plugin.d.ts:45

___

### loadConfig

▸ **loadConfig**(`__namedParameters?`): `Promise`<[`UserConfig`](interfaces/UserConfig.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters?` | `LoadConfigOptions` |

#### Returns

`Promise`<[`UserConfig`](interfaces/UserConfig.md)\>

#### Defined in

packages/service/lib/core/config/config.d.ts:14
