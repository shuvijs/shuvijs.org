[runtime](../overview.md) / [<internal\>](internal_.md) / "@shuvi/hook/lib/index"

# Namespace: "@shuvi/hook/lib/index"

[internal](internal_.md)."@shuvi/hook/lib/index"

## Table of contents

### Interfaces

- [HookMap](../interfaces/internal_.__Users_user_project_shuvi_packages_hook_lib_index_.HookMap.md)

### Type aliases

- [AddContextParameter](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#addcontextparameter)
- [AnyHook](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#anyhook)
- [ArrayElements](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#arrayelements)
- [AsyncParallelHook](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#asyncparallelhook)
- [AsyncParallelHookHandler](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#asyncparallelhookhandler)
- [AsyncSeriesWaterfallHook](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#asyncserieswaterfallhook)
- [AsyncSeriesWaterfallHookHandler](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#asyncserieswaterfallhookhandler)
- [CreatePlugin](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#createplugin)
- [HookManager](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#hookmanager)
- [HookRunnerFromHandler](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#hookrunnerfromhandler)
- [HookRunnerType](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#hookrunnertype)
- [IPluginHandlers](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#ipluginhandlers)
- [IPluginHandlersFullMap](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#ipluginhandlersfullmap)
- [IPluginInstance](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#iplugininstance)
- [PatchPluginParameter](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#patchpluginparameter)
- [PluginOptions](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#pluginoptions)
- [Remove3VoidParameter](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#remove3voidparameter)
- [RemoveManagerVoidParameter](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#removemanagervoidparameter)
- [RemoveVoidParameter](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#removevoidparameter)
- [RemoveVoidParameterBackup](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#removevoidparameterbackup)
- [RunnerType](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#runnertype)
- [Setup](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#setup)
- [SyncBailHook](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#syncbailhook)
- [SyncBailHookHandler](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#syncbailhookhandler)
- [SyncHook](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#synchook)
- [SyncHookHandler](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#synchookhandler)
- [SyncWaterfallHook](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#syncwaterfallhook)
- [SyncWaterfallHookHandler](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#syncwaterfallhookhandler)

### Variables

- [DEFAULT\_OPTIONS](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#default_options)
- [SYNC\_PLUGIN\_SYMBOL](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#sync_plugin_symbol)

### Functions

- [createAsyncParallelHook](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#createasyncparallelhook)
- [createAsyncSeriesWaterfallHook](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#createasyncserieswaterfallhook)
- [createHookManager](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#createhookmanager)
- [createSyncBailHook](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#createsyncbailhook)
- [createSyncHook](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#createsynchook)
- [createSyncWaterfallHook](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#createsyncwaterfallhook)
- [isPluginInstance](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md#isplugininstance)

## Type aliases

### AddContextParameter

Ƭ **AddContextParameter**<`T`, `C`\>: `T` extends (`initalValue`: infer I, `extraArg`: infer E) => infer R ? (`initalValue`: `I`, `extraArg`: `E`, `context`: `C`) => `R` : `T`

#### Type parameters

| Name |
| :------ |
| `T` |
| `C` |

___

### AnyHook

Ƭ **AnyHook**: [`SyncHook`](internal_.md#synchook)<`any`, `any`, `any`\> \| [`SyncBailHook`](internal_.md#syncbailhook)<`any`, `any`, `any`\> \| [`SyncWaterfallHook`](internal_.md#syncwaterfallhook)<`any`, `any`\> \| [`AsyncParallelHook`](internal_.md#asyncparallelhook)<`any`, `any`, `any`\> \| [`AsyncSeriesWaterfallHook`](internal_.md#asyncserieswaterfallhook)<`any`, `any`\>

___

### ArrayElements

Ƭ **ArrayElements**<`T`\>: { [K in keyof T]: T[K][] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

___

### AsyncParallelHook

Ƭ **AsyncParallelHook**<`I`, `E`, `R`\>: `Object`

Normal async hook. No return value

RemoveVoidParameter<(
null extends R ?
(R extends void ? ((initalValue: I, extraArg: E) => Promise<R[]>) :
((initalValue: I, extraArg: E) => Promise<R[]>)) :
((initalValue: I, extraArg: E) => Promise<R[]>)
)>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | `void` |
| `E` | `void` |
| `R` | `void` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `run` | [`RemoveVoidParameter`](internal_.md#removevoidparameter)<(`initalValue`: `I`, `extraArg`: `E`) => `Promise`<`R`[]\>\> |
| `type` | `string` |
| `clear` | () => `void` |
| `use` | (...`handlers`: ``null`` extends `I` ? `I` & ``null`` extends `E` ? (`initialValue`: `I`, `extraArg`: `E`) => `R` \| `Promise`<`R`\> : `void` extends `E` ? (`initialValue`: `I`) => `R` \| `Promise`<`R`\> : (`initialValue`: `I`, `extraArg`: `E`) => `R` \| `Promise`<`R`\> : `void` extends `I` ? ``null`` extends `E` ? (`extraArg`: `E`) => `R` \| `Promise`<`R`\> : `I` & `void` extends `E` ? () => `R` \| `Promise`<`R`\> : (`extraArg`: `E`) => `R` \| `Promise`<`R`\> : ``null`` extends `E` ? (`initialValue`: `I`, `extraArg`: `E`) => `R` \| `Promise`<`R`\> : `void` extends `E` ? (`initialValue`: `I`) => `R` \| `Promise`<`R`\> : (`initialValue`: `I`, `extraArg`: `E`) => `R` \| `Promise`<`R`\>[]) => `void` |

___

### AsyncParallelHookHandler

Ƭ **AsyncParallelHookHandler**<`I`, `E`, `R`\>: (`initalValue`: `I`, `extraArgs`: `E`) => `Promise`<`R`\> \| `R`

#### Type parameters

| Name |
| :------ |
| `I` |
| `E` |
| `R` |

#### Type declaration

▸ (`initalValue`, `extraArgs`): `Promise`<`R`\> \| `R`

##### Parameters

| Name | Type |
| :------ | :------ |
| `initalValue` | `I` |
| `extraArgs` | `E` |

##### Returns

`Promise`<`R`\> \| `R`

___

### AsyncSeriesWaterfallHook

Ƭ **AsyncSeriesWaterfallHook**<`I`, `E`\>: `Object`

Has return value with given type

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | `void` |
| `E` | `void` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `run` | [`RemoveVoidParameter`](internal_.md#removevoidparameter)<(`initalValue`: `I`, `extraArgs`: `E`) => `Promise`<`I`\>\> |
| `type` | `string` |
| `clear` | () => `void` |
| `use` | (...`handlers`: ``null`` extends `I` ? `I` & ``null`` extends `E` ? (`initialValue`: `I`, `extraArg`: `E`) => `I` \| `Promise`<`I`\> : `void` extends `E` ? (`initialValue`: `I`) => `I` \| `Promise`<`I`\> : (`initialValue`: `I`, `extraArg`: `E`) => `I` \| `Promise`<`I`\> : `void` extends `I` ? ``null`` extends `E` ? (`extraArg`: `E`) => `I` \| `Promise`<`I`\> : `I` & `void` extends `E` ? () => `I` \| `Promise`<`I`\> : (`extraArg`: `E`) => `I` \| `Promise`<`I`\> : ``null`` extends `E` ? (`initialValue`: `I`, `extraArg`: `E`) => `I` \| `Promise`<`I`\> : `void` extends `E` ? (`initialValue`: `I`) => `I` \| `Promise`<`I`\> : (`initialValue`: `I`, `extraArg`: `E`) => `I` \| `Promise`<`I`\>[]) => `void` |

___

### AsyncSeriesWaterfallHookHandler

Ƭ **AsyncSeriesWaterfallHookHandler**<`I`, `E`\>: (`initalValue`: `I`, `extraArg`: `E`) => `Promise`<`I`\> \| `I`

#### Type parameters

| Name |
| :------ |
| `I` |
| `E` |

#### Type declaration

▸ (`initalValue`, `extraArg`): `Promise`<`I`\> \| `I`

##### Parameters

| Name | Type |
| :------ | :------ |
| `initalValue` | `I` |
| `extraArg` | `E` |

##### Returns

`Promise`<`I`\> \| `I`

___

### CreatePlugin

Ƭ **CreatePlugin**<`HM`, `C`, `EHM`\>: (`pluginHandlers`: [`IPluginHandlers`](internal_.md#ipluginhandlers)<`HM` & `EHM`, `C`\> & { `setup?`: [`Setup`](internal_.md#setup)<`EHM`\>  }, `options?`: [`PluginOptions`](internal_.md#pluginoptions)) => [`IPluginInstance`](internal_.md#iplugininstance)<`HM` & `EHM`, `C`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `HM` | extends [`HookMap`](../interfaces/internal_.HookMap.md) |
| `C` | `C` |
| `EHM` | extends [`HookMap`](../interfaces/internal_.HookMap.md) |

#### Type declaration

▸ (`pluginHandlers`, `options?`): [`IPluginInstance`](internal_.md#iplugininstance)<`HM` & `EHM`, `C`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `pluginHandlers` | [`IPluginHandlers`](internal_.md#ipluginhandlers)<`HM` & `EHM`, `C`\> & { `setup?`: [`Setup`](internal_.md#setup)<`EHM`\>  } |
| `options?` | [`PluginOptions`](internal_.md#pluginoptions) |

##### Returns

[`IPluginInstance`](internal_.md#iplugininstance)<`HM` & `EHM`, `C`\>

___

### HookManager

Ƭ **HookManager**<`HM`, `C`, `EHM`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `HM` | extends [`HookMap`](../interfaces/internal_.HookMap.md) |
| `C` | `C` |
| `EHM` | extends [`HookMap`](../interfaces/internal_.HookMap.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hooks` | `HM` \| `HM` & `EHM` |
| `runner` | [`RunnerType`](internal_.md#runnertype)<`HM`, `EHM`\> |
| `addHooks` | (`hook`: `Partial`<`EHM`\>) => `void` |
| `clear` | () => `void` |
| `createPlugin` | (`pluginHandlers`: `Partial`<[`IPluginHandlersFullMap`](internal_.md#ipluginhandlersfullmap)<`HM` & `EHM`, `C`\>\> & { `setup?`: [`Setup`](internal_.md#setup)<`EHM`\>  }, `options?`: [`PluginOptions`](internal_.md#pluginoptions)) => [`IPluginInstance`](internal_.md#iplugininstance)<`HM` & `EHM`, `C`\> |
| `getPlugins` | () => [`IPluginInstance`](internal_.md#iplugininstance)<`HM` & `EHM`, `C`\>[] |
| `setContext` | (`context`: `C`) => `void` |
| `usePlugin` | (...`plugins`: [`IPluginInstance`](internal_.md#iplugininstance)<`HM` & `EHM`, `C`\>[]) => `void` |

___

### HookRunnerFromHandler

Ƭ **HookRunnerFromHandler**<`T`\>: `T` extends (...`args`: infer A) => infer R ? `void` extends `R` ? (...`args`: `A`) => `void` : (...`args`: `A`) => `R`[] : `T`

#### Type parameters

| Name |
| :------ |
| `T` |

___

### HookRunnerType

Ƭ **HookRunnerType**<`H`\>: `H` extends [`SyncHook`](internal_.md#synchook)<infer T, infer E, infer R\> ? [`SyncHook`](internal_.md#synchook)<`T`, `E`, `R`\>[``"run"``] : `H` extends [`SyncBailHook`](internal_.md#syncbailhook)<infer T, infer E, infer R\> ? [`SyncBailHook`](internal_.md#syncbailhook)<`T`, `E`, `R`\>[``"run"``] : `H` extends [`SyncWaterfallHook`](internal_.md#syncwaterfallhook)<infer T, infer E\> ? [`SyncWaterfallHook`](internal_.md#syncwaterfallhook)<`T`, `E`\>[``"run"``] : `H` extends [`AsyncParallelHook`](internal_.md#asyncparallelhook)<infer T, infer E, infer R\> ? [`AsyncParallelHook`](internal_.md#asyncparallelhook)<`T`, `E`, `R`\>[``"run"``] : `H` extends [`AsyncSeriesWaterfallHook`](internal_.md#asyncserieswaterfallhook)<infer T, infer E\> ? [`AsyncSeriesWaterfallHook`](internal_.md#asyncserieswaterfallhook)<`T`, `E`\>[``"run"``] : `never`

#### Type parameters

| Name |
| :------ |
| `H` |

___

### IPluginHandlers

Ƭ **IPluginHandlers**<`HM`, `C`\>: `Partial`<[`IPluginHandlersFullMap`](internal_.md#ipluginhandlersfullmap)<`HM`, `C`\>\>

#### Type parameters

| Name |
| :------ |
| `HM` |
| `C` |

___

### IPluginHandlersFullMap

Ƭ **IPluginHandlersFullMap**<`HM`, `C`\>: { [K in keyof HM]: HM[K] extends SyncHook<infer T, infer E, infer R\> ? PatchPluginParameter<SyncHookHandler<T, E, R\>, C\> : HM[K] extends SyncBailHook<infer T, infer E, infer R\> ? PatchPluginParameter<SyncBailHookHandler<T, E, R\>, C\> : HM[K] extends SyncWaterfallHook<infer T, infer E\> ? PatchPluginParameter<SyncWaterfallHookHandler<T, E\>, C\> : HM[K] extends AsyncParallelHook<infer T, infer E, infer R\> ? PatchPluginParameter<AsyncParallelHookHandler<T, E, R\>, C\> : HM[K] extends AsyncSeriesWaterfallHook<infer T, infer E\> ? PatchPluginParameter<AsyncSeriesWaterfallHookHandler<T, E\>, C\> : never }

#### Type parameters

| Name |
| :------ |
| `HM` |
| `C` |

___

### IPluginInstance

Ƭ **IPluginInstance**<`HM`, `C`\>: { `SYNC_PLUGIN_SYMBOL`: ``"SYNC_PLUGIN_SYMBOL"`` ; `handlers`: [`IPluginHandlers`](internal_.md#ipluginhandlers)<`HM`, `C`\>  } & [`PluginOptions`](internal_.md#pluginoptions)

#### Type parameters

| Name |
| :------ |
| `HM` |
| `C` |

___

### PatchPluginParameter

Ƭ **PatchPluginParameter**<`T`, `C`\>: [`RemoveManagerVoidParameter`](internal_.md#removemanagervoidparameter)<[`AddContextParameter`](internal_.md#addcontextparameter)<`T`, `C`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `C` |

___

### PluginOptions

Ƭ **PluginOptions**: `Object`

#### Index signature

▪ [x: `string`]: `any`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name?` | `string` |
| `order?` | `number` |
| `post?` | `string`[] |
| `pre?` | `string`[] |
| `required?` | `string`[] |
| `rivals?` | `string`[] |

___

### Remove3VoidParameter

Ƭ **Remove3VoidParameter**<`T`\>: `T` extends (`initalValue`: infer I, `extraArg`: infer E, `context`: infer C) => infer R ? `I` extends `void` ? `I` extends `void` ? `E` extends `void` ? `E` extends `void` ? `C` extends `void` ? `C` extends `void` ? ``"C无"`` : ``"C为any"`` : ``"C有"`` : (`extraArg`: `E`) => `R` : (`extraArg`: `E`) => `R` : `E` extends `void` ? `E` extends `void` ? () => `R` : (`initalValue`: `I`, `extraArg`: `E`) => `R` : (`initalValue`: `I`, `extraArg`: `E`) => `R` : ``"I有"`` : `T`

#### Type parameters

| Name |
| :------ |
| `T` |

___

### RemoveManagerVoidParameter

Ƭ **RemoveManagerVoidParameter**<`T`\>: `T` extends (`initalValue`: infer I, `extraArg`: infer E, `context`: infer C) => infer R ? ``null`` extends `I` ? ``null`` extends `E` ? ``null`` extends `C` ? (`initialValue`: `I`, `extraArg`: `E`, `context`: `C`) => `R` : `void` extends `C` ? (`initialValue`: `I`, `extraArg`: `E`) => `R` : (`initialValue`: `I`, `extraArg`: `E`, `context`: `C`) => `R` : `void` extends `E` ? ``null`` extends `C` ? (`initialValue`: `I`, `context`: `C`) => `R` : `void` extends `C` ? (`initialValue`: `I`) => `R` : (`initialValue`: `I`, `context`: `C`) => `R` : ``null`` extends `C` ? (`initialValue`: `I`, `extraArg`: `E`, `context`: `C`) => `R` : `void` extends `C` ? (`initialValue`: `I`, `extraArg`: `E`) => `R` : (`initialValue`: `I`, `extraArg`: `E`, `context`: `C`) => `R` : `void` extends `I` ? ``null`` extends `E` ? ``null`` extends `C` ? (`extraArg`: `E`, `context`: `C`) => `R` : `void` extends `C` ? (`extraArg`: `E`) => `R` : (`extraArg`: `E`, `context`: `C`) => `R` : `void` extends `E` ? ``null`` extends `C` ? (`context`: `C`) => `R` : `void` extends `C` ? () => `R` : (`context`: `C`) => `R` : ``null`` extends `C` ? (`extraArg`: `E`, `context`: `C`) => `R` : `void` extends `C` ? (`extraArg`: `E`) => `R` : (`extraArg`: `E`, `context`: `C`) => `R` : ``null`` extends `E` ? ``null`` extends `C` ? (`initialValue`: `I`, `extraArg`: `E`, `context`: `C`) => `R` : `void` extends `C` ? (`initialValue`: `I`, `extraArg`: `E`) => `R` : (`initialValue`: `I`, `extraArg`: `E`, `context`: `C`) => `R` : `void` extends `E` ? ``null`` extends `C` ? (`initialValue`: `I`, `context`: `C`) => `R` : `void` extends `C` ? (`initialValue`: `I`) => `R` : (`initialValue`: `I`, `context`: `C`) => `R` : ``null`` extends `C` ? (`initialValue`: `I`, `extraArg`: `E`, `context`: `C`) => `R` : `void` extends `C` ? (`initialValue`: `I`, `extraArg`: `E`) => `R` : (`initialValue`: `I`, `extraArg`: `E`, `context`: `C`) => `R` : `T`

#### Type parameters

| Name |
| :------ |
| `T` |

___

### RemoveVoidParameter

Ƭ **RemoveVoidParameter**<`T`\>: `T` extends (`initalValue`: infer I, `extraArg`: infer E) => infer R ? ``null`` extends `I` ? ``null`` extends `E` ? (`initialValue`: `I`, `extraArg`: `E`) => `R` : `void` extends `E` ? (`initialValue`: `I`) => `R` : (`initialValue`: `I`, `extraArg`: `E`) => `R` : `void` extends `I` ? ``null`` extends `E` ? (`extraArg`: `E`) => `R` : `void` extends `E` ? () => `R` : (`extraArg`: `E`) => `R` : ``null`` extends `E` ? (`initialValue`: `I`, `extraArg`: `E`) => `R` : `void` extends `E` ? (`initialValue`: `I`) => `R` : (`initialValue`: `I`, `extraArg`: `E`) => `R` : `T`

#### Type parameters

| Name |
| :------ |
| `T` |

___

### RemoveVoidParameterBackup

Ƭ **RemoveVoidParameterBackup**<`T`\>: `T` extends (`initalValue`: infer I, `extraArg`: infer E) => infer R ? `I` extends `void` ? `I` extends `void` ? `E` extends `void` ? `E` extends `void` ? () => `R` : (`extraArg`: `E`) => `R` : (`extraArg`: `E`) => `R` : `E` extends `void` ? `E` extends `void` ? () => `R` : (`initalValue`: `I`, `extraArg`: `E`) => `R` : (`initalValue`: `I`, `extraArg`: `E`) => `R` : `E` extends `void` ? `E` extends `void` ? (`initalValue`: `I`) => `R` : (`initalValue`: `I`, `extradddArg`: `E`) => `R` : (`initalValue`: `I`, `extraArg`: `E`) => `R` : `T`

#### Type parameters

| Name |
| :------ |
| `T` |

___

### RunnerType

Ƭ **RunnerType**<`HM`, `EHM`\>: { [K in keyof HM & EHM]: HookRunnerType<HM & EHM[K]\> } & { `setup`: [`Setup`](internal_.md#setup)<`EHM`\>  }

#### Type parameters

| Name |
| :------ |
| `HM` |
| `EHM` |

___

### Setup

Ƭ **Setup**<`EHM`\>: (`utils`: { `addHooks`: (`hook`: `Partial`<`EHM`\>) => `void`  }) => `void`

#### Type parameters

| Name |
| :------ |
| `EHM` |

#### Type declaration

▸ (`utils`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `utils` | `Object` |
| `utils.addHooks` | (`hook`: `Partial`<`EHM`\>) => `void` |

##### Returns

`void`

___

### SyncBailHook

Ƭ **SyncBailHook**<`I`, `E`, `R`\>: `Object`

Has return value with `any` type

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | `void` |
| `E` | `void` |
| `R` | `I` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `run` | [`RemoveVoidParameter`](internal_.md#removevoidparameter)<[`SyncBailHookHandler`](internal_.md#syncbailhookhandler)<`I`, `E`, `R`\>\> |
| `type` | `string` |
| `clear` | () => `void` |
| `use` | (...`handlers`: ``null`` extends `I` ? `I` & ``null`` extends `E` ? (`initialValue`: `I`, `extraArg`: `E`) => `undefined` \| `void` \| `R` : `void` extends `E` ? (`initialValue`: `I`) => `undefined` \| `void` \| `R` : (`initialValue`: `I`, `extraArg`: `E`) => `undefined` \| `void` \| `R` : `void` extends `I` ? ``null`` extends `E` ? (`extraArg`: `E`) => `undefined` \| `void` \| `R` : `I` & `void` extends `E` ? () => `undefined` \| `void` \| `R` : (`extraArg`: `E`) => `undefined` \| `void` \| `R` : ``null`` extends `E` ? (`initialValue`: `I`, `extraArg`: `E`) => `undefined` \| `void` \| `R` : `void` extends `E` ? (`initialValue`: `I`) => `undefined` \| `void` \| `R` : (`initialValue`: `I`, `extraArg`: `E`) => `undefined` \| `void` \| `R`[]) => `void` |

___

### SyncBailHookHandler

Ƭ **SyncBailHookHandler**<`I`, `E`, `R`\>: (`initalValue`: `I`, `extraArg`: `E`) => `R` \| `undefined` \| `void`

#### Type parameters

| Name |
| :------ |
| `I` |
| `E` |
| `R` |

#### Type declaration

▸ (`initalValue`, `extraArg`): `R` \| `undefined` \| `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `initalValue` | `I` |
| `extraArg` | `E` |

##### Returns

`R` \| `undefined` \| `void`

___

### SyncHook

Ƭ **SyncHook**<`I`, `E`, `R`\>: `Object`

Normal hook.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | `void` |
| `E` | `void` |
| `R` | `void` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `run` | [`RemoveVoidParameter`](internal_.md#removevoidparameter)<(`initalValue`: `I`, `extraArg`: `E`) => `R`[]\> |
| `type` | `string` |
| `clear` | () => `void` |
| `use` | (...`handlers`: ``null`` extends `I` ? `I` & ``null`` extends `E` ? (`initialValue`: `I`, `extraArg`: `E`) => `R` : `void` extends `E` ? (`initialValue`: `I`) => `R` : (`initialValue`: `I`, `extraArg`: `E`) => `R` : `void` extends `I` ? ``null`` extends `E` ? (`extraArg`: `E`) => `R` : `I` & `void` extends `E` ? () => `R` : (`extraArg`: `E`) => `R` : ``null`` extends `E` ? (`initialValue`: `I`, `extraArg`: `E`) => `R` : `void` extends `E` ? (`initialValue`: `I`) => `R` : (`initialValue`: `I`, `extraArg`: `E`) => `R`[]) => `void` |

___

### SyncHookHandler

Ƭ **SyncHookHandler**<`I`, `E`, `R`\>: (`initalValue`: `I`, `extraArg`: `E`) => `R`

#### Type parameters

| Name |
| :------ |
| `I` |
| `E` |
| `R` |

#### Type declaration

▸ (`initalValue`, `extraArg`): `R`

##### Parameters

| Name | Type |
| :------ | :------ |
| `initalValue` | `I` |
| `extraArg` | `E` |

##### Returns

`R`

___

### SyncWaterfallHook

Ƭ **SyncWaterfallHook**<`I`, `E`\>: `Object`

Has return value with given type

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | `I` |
| `E` | `void` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `run` | [`RemoveVoidParameter`](internal_.md#removevoidparameter)<[`SyncWaterfallHookHandler`](internal_.md#syncwaterfallhookhandler)<`I`, `E`\>\> |
| `type` | `string` |
| `clear` | () => `void` |
| `use` | (...`handlers`: ``null`` extends `I` ? `I` & ``null`` extends `E` ? (`initialValue`: `I`, `extraArg`: `E`) => `I` : `void` extends `E` ? (`initialValue`: `I`) => `I` : (`initialValue`: `I`, `extraArg`: `E`) => `I` : `void` extends `I` ? ``null`` extends `E` ? (`extraArg`: `E`) => `I` : `I` & `void` extends `E` ? () => `I` : (`extraArg`: `E`) => `I` : ``null`` extends `E` ? (`initialValue`: `I`, `extraArg`: `E`) => `I` : `void` extends `E` ? (`initialValue`: `I`) => `I` : (`initialValue`: `I`, `extraArg`: `E`) => `I`[]) => `void` |

___

### SyncWaterfallHookHandler

Ƭ **SyncWaterfallHookHandler**<`I`, `E`\>: (`initalValue`: `I`, `extraArgs`: `E`) => `I`

#### Type parameters

| Name |
| :------ |
| `I` |
| `E` |

#### Type declaration

▸ (`initalValue`, `extraArgs`): `I`

##### Parameters

| Name | Type |
| :------ | :------ |
| `initalValue` | `I` |
| `extraArgs` | `E` |

##### Returns

`I`

## Variables

### DEFAULT\_OPTIONS

• `Const` **DEFAULT\_OPTIONS**: `Required`<[`PluginOptions`](internal_.md#pluginoptions)\>

___

### SYNC\_PLUGIN\_SYMBOL

• `Const` **SYNC\_PLUGIN\_SYMBOL**: ``"SYNC_PLUGIN_SYMBOL"``

## Functions

### createAsyncParallelHook

▸ **createAsyncParallelHook**<`I`, `E`, `R`\>(): [`AsyncParallelHook`](internal_.md#asyncparallelhook)<`I`, `E`, `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | `void` |
| `E` | `void` |
| `R` | `void` |

#### Returns

[`AsyncParallelHook`](internal_.md#asyncparallelhook)<`I`, `E`, `R`\>

___

### createAsyncSeriesWaterfallHook

▸ **createAsyncSeriesWaterfallHook**<`I`, `E`\>(): [`AsyncSeriesWaterfallHook`](internal_.md#asyncserieswaterfallhook)<`I`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | `void` |
| `E` | `void` |

#### Returns

[`AsyncSeriesWaterfallHook`](internal_.md#asyncserieswaterfallhook)<`I`, `E`\>

___

### createHookManager

▸ **createHookManager**<`HM`, `C`, `EHM`\>(`hookMap`, `hasContext?`): [`HookManager`](internal_.md#hookmanager)<`HM`, `C`, `EHM`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `HM` | extends [`HookMap`](../interfaces/internal_.HookMap.md) |
| `C` | `void` |
| `EHM` | extends [`HookMap`](../interfaces/internal_.HookMap.md) = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `hookMap` | `HM` |
| `hasContext?` | `boolean` |

#### Returns

[`HookManager`](internal_.md#hookmanager)<`HM`, `C`, `EHM`\>

___

### createSyncBailHook

▸ **createSyncBailHook**<`I`, `E`, `R`\>(): [`SyncBailHook`](internal_.md#syncbailhook)<`I`, `E`, `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | `void` |
| `E` | `void` |
| `R` | `I` |

#### Returns

[`SyncBailHook`](internal_.md#syncbailhook)<`I`, `E`, `R`\>

___

### createSyncHook

▸ **createSyncHook**<`I`, `E`, `R`\>(): [`SyncHook`](internal_.md#synchook)<`I`, `E`, `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | `void` |
| `E` | `void` |
| `R` | `void` |

#### Returns

[`SyncHook`](internal_.md#synchook)<`I`, `E`, `R`\>

___

### createSyncWaterfallHook

▸ **createSyncWaterfallHook**<`I`, `E`\>(): [`SyncWaterfallHook`](internal_.md#syncwaterfallhook)<`I`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | `void` |
| `E` | `void` |

#### Returns

[`SyncWaterfallHook`](internal_.md#syncwaterfallhook)<`I`, `E`\>

___

### isPluginInstance

▸ **isPluginInstance**(`plugin`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `plugin` | `any` |

#### Returns

`any`
