[runtime](../overview.md) / <internal\>

# Namespace: <internal\>

## Table of contents

### Namespaces

- [&quot;@shuvi/hook/lib/index&quot;](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md)
- [&quot;@shuvi/router/lib/index&quot;](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md)

### Enumerations

- [SHUVI\_ERROR\_CODE](../enums/internal_.SHUVI_ERROR_CODE.md)

### Classes

- [default](../classes/internal_.default.md)
- [default](../classes/internal_.default-1.md)

### Interfaces

- [CustomRuntimePluginHooks](../interfaces/internal_.CustomRuntimePluginHooks.md)
- [HookMap](../interfaces/internal_.HookMap.md)
- [IApiModule](../interfaces/internal_.IApiModule.md)
- [IApiReq](../interfaces/internal_.IApiReq.md)
- [IAppComponent](../interfaces/internal_.IAppComponent.md)
- [IApplicationCreaterBase](../interfaces/internal_.IApplicationCreaterBase.md)
- [IApplicationCreaterClientContext](../interfaces/internal_.IApplicationCreaterClientContext.md)
- [IApplicationCreaterServerContext](../interfaces/internal_.IApplicationCreaterServerContext.md)
- [IApplicationOptions](../interfaces/internal_.IApplicationOptions.md)
- [IClientRendererOptions](../interfaces/internal_.IClientRendererOptions.md)
- [IContext](../interfaces/internal_.IContext.md)
- [IHtmlTag](../interfaces/internal_.IHtmlTag.md)
- [IIncomingMessage](../interfaces/internal_.IIncomingMessage.md)
- [IPathMatch](../interfaces/internal_.IPathMatch.md)
- [IRedirectFn](../interfaces/internal_.IRedirectFn.md)
- [IRedirectState](../interfaces/internal_.IRedirectState.md)
- [IRedirector](../interfaces/internal_.IRedirector.md)
- [IRenderOptions](../interfaces/internal_.IRenderOptions.md)
- [IRequest](../interfaces/internal_.IRequest.md)
- [IResponse](../interfaces/internal_.IResponse.md)
- [IRouteBaseObject](../interfaces/internal_.IRouteBaseObject.md)
- [IRouteComponentContext](../interfaces/internal_.IRouteComponentContext.md)
- [IRouteMatch](../interfaces/internal_.IRouteMatch.md)
- [IRouter](../interfaces/internal_.IRouter.md)
- [IRouterOptions](../interfaces/internal_.IRouterOptions.md)
- [IServerAppContext](../interfaces/internal_.IServerAppContext.md)
- [IView](../interfaces/internal_.IView.md)
- [LinkProps](../interfaces/internal_.LinkProps.md)
- [NavigationGuardHookWithContext](../interfaces/internal_.NavigationGuardHookWithContext.md)
- [PartialLocation](../interfaces/internal_.PartialLocation.md)
- [PushOptions](../interfaces/internal_.PushOptions.md)
- [TransitionOptions](../interfaces/internal_.TransitionOptions.md)

### Type aliases

- [AddContextParameter](internal_.md#addcontextparameter)
- [AnyHook](internal_.md#anyhook)
- [AsyncParallelHook](internal_.md#asyncparallelhook)
- [AsyncParallelHookHandler](internal_.md#asyncparallelhookhandler)
- [AsyncSeriesWaterfallHook](internal_.md#asyncserieswaterfallhook)
- [AsyncSeriesWaterfallHookHandler](internal_.md#asyncserieswaterfallhookhandler)
- [BuiltinRuntimePluginHooks](internal_.md#builtinruntimepluginhooks)
- [DynamicOptions](internal_.md#dynamicoptions)
- [Events](internal_.md#events)
- [ExcludeRouterProps](internal_.md#excluderouterprops)
- [HeadState](internal_.md#headstate)
- [HookManager](internal_.md#hookmanager)
- [HookRunnerType](internal_.md#hookrunnertype)
- [IApiRequest](internal_.md#iapirequest)
- [IApiRes](internal_.md#iapires)
- [IApiResponse](internal_.md#iapiresponse)
- [IApplicationCreaterContext](internal_.md#iapplicationcreatercontext)
- [IErrorHandler](internal_.md#ierrorhandler)
- [IHtmlAttrs](internal_.md#ihtmlattrs)
- [INextFunc](internal_.md#inextfunc)
- [IPathPattern](internal_.md#ipathpattern)
- [IPluginHandlers](internal_.md#ipluginhandlers)
- [IPluginHandlersFullMap](internal_.md#ipluginhandlersfullmap)
- [IPluginInstance](internal_.md#iplugininstance)
- [IQuery](internal_.md#iquery)
- [IRerenderConfig](internal_.md#irerenderconfig)
- [IRouteComponent](internal_.md#iroutecomponent)
- [IRouteComponentProps](internal_.md#iroutecomponentprops)
- [IRuntimeConfig](internal_.md#iruntimeconfig)
- [IRuntimePluginConstructor](internal_.md#iruntimepluginconstructor)
- [LoadableBaseOptions](internal_.md#loadablebaseoptions)
- [LoadableGeneratedOptions](internal_.md#loadablegeneratedoptions)
- [Loader](internal_.md#loader)
- [LoaderComponent](internal_.md#loadercomponent)
- [PatchPluginParameter](internal_.md#patchpluginparameter)
- [PathParserOptions](internal_.md#pathparseroptions)
- [PluginOptions](internal_.md#pluginoptions)
- [RemoveManagerVoidParameter](internal_.md#removemanagervoidparameter)
- [RemoveVoidParameter](internal_.md#removevoidparameter)
- [RunnerType](internal_.md#runnertype)
- [Send](internal_.md#send)
- [Setup](internal_.md#setup)
- [State](internal_.md#state)
- [SyncBailHook](internal_.md#syncbailhook)
- [SyncBailHookHandler](internal_.md#syncbailhookhandler)
- [SyncHook](internal_.md#synchook)
- [SyncHookHandler](internal_.md#synchookhandler)
- [SyncWaterfallHook](internal_.md#syncwaterfallhook)
- [SyncWaterfallHookHandler](internal_.md#syncwaterfallhookhandler)
- [WithRouterProps](internal_.md#withrouterprops)

### Variables

- [builtinRuntimePluginHooks](internal_.md#builtinruntimepluginhooks-1)

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

### BuiltinRuntimePluginHooks

Ƭ **BuiltinRuntimePluginHooks**: typeof [`builtinRuntimePluginHooks`](internal_.md#builtinruntimepluginhooks-1)

___

### DynamicOptions

Ƭ **DynamicOptions**<`P`\>: [`LoadableBaseOptions`](internal_.md#loadablebaseoptions)<`P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | {} |

___

### Events

Ƭ **Events**<`F`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `F` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `length` | `number` |
| `call` | (...`arg`: `any`) => `void` |
| `push` | (`fn`: `F`) => [`RemoveListenerCallback`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#removelistenercallback) |
| `toArray` | () => `F`[] |

___

### ExcludeRouterProps

Ƭ **ExcludeRouterProps**<`P`\>: `Pick`<`P`, `Exclude`<keyof `P`, keyof [`WithRouterProps`](internal_.md#withrouterprops)\>\>

#### Type parameters

| Name |
| :------ |
| `P` |

___

### HeadState

Ƭ **HeadState**: [`IHtmlTag`](../interfaces/internal_.IHtmlTag.md)[]

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

### HookRunnerType

Ƭ **HookRunnerType**<`H`\>: `H` extends [`SyncHook`](internal_.md#synchook)<infer T, infer E, infer R\> ? [`SyncHook`](internal_.md#synchook)<`T`, `E`, `R`\>[``"run"``] : `H` extends [`SyncBailHook`](internal_.md#syncbailhook)<infer T, infer E, infer R\> ? [`SyncBailHook`](internal_.md#syncbailhook)<`T`, `E`, `R`\>[``"run"``] : `H` extends [`SyncWaterfallHook`](internal_.md#syncwaterfallhook)<infer T, infer E\> ? [`SyncWaterfallHook`](internal_.md#syncwaterfallhook)<`T`, `E`\>[``"run"``] : `H` extends [`AsyncParallelHook`](internal_.md#asyncparallelhook)<infer T, infer E, infer R\> ? [`AsyncParallelHook`](internal_.md#asyncparallelhook)<`T`, `E`, `R`\>[``"run"``] : `H` extends [`AsyncSeriesWaterfallHook`](internal_.md#asyncserieswaterfallhook)<infer T, infer E\> ? [`AsyncSeriesWaterfallHook`](internal_.md#asyncserieswaterfallhook)<`T`, `E`\>[``"run"``] : `never`

#### Type parameters

| Name |
| :------ |
| `H` |

___

### IApiRequest

Ƭ **IApiRequest**: [`IRequest`](../interfaces/internal_.IRequest.md) & [`IApiReq`](../interfaces/internal_.IApiReq.md)

___

### IApiRes

Ƭ **IApiRes**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `json` | [`Send`](internal_.md#send)<`T`\> |
| `send` | [`Send`](internal_.md#send)<`T`\> |
| `redirect` | (`url`: `string`) => [`IResponse`](../interfaces/internal_.IResponse.md)(`status`: `number`, `url`: `string`) => [`IResponse`](../interfaces/internal_.IResponse.md) |
| `status` | (`statusCode`: `number`) => [`IResponse`](../interfaces/internal_.IResponse.md) |

___

### IApiResponse

Ƭ **IApiResponse**<`T`\>: `ServerResponse` & [`IApiRes`](internal_.md#iapires)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

___

### IApplicationCreaterContext

Ƭ **IApplicationCreaterContext**: [`IApplicationCreaterClientContext`](../interfaces/internal_.IApplicationCreaterClientContext.md) \| [`IApplicationCreaterServerContext`](../interfaces/internal_.IApplicationCreaterServerContext.md)

___

### IErrorHandler

Ƭ **IErrorHandler**: (`errorCode?`: [`SHUVI_ERROR_CODE`](../enums/internal_.SHUVI_ERROR_CODE.md) \| `string`, `errorDesc?`: `string`) => `void`

#### Type declaration

▸ (`errorCode?`, `errorDesc?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `errorCode?` | [`SHUVI_ERROR_CODE`](../enums/internal_.SHUVI_ERROR_CODE.md) \| `string` |
| `errorDesc?` | `string` |

##### Returns

`void`

___

### IHtmlAttrs

Ƭ **IHtmlAttrs**: { `textContent?`: `string`  } & { `[x: string]`: `string` \| `number` \| `undefined` \| `boolean`;  }

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

___

### IPathPattern

Ƭ **IPathPattern**: `string` \| { `caseSensitive?`: `boolean` ; `end?`: `boolean` ; `path`: `string`  }

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

### IQuery

Ƭ **IQuery**: `ParsedQuery`

___

### IRerenderConfig

Ƭ **IRerenderConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AppComponent?` | `any` |
| `UserAppComponent?` | `any` |

___

### IRouteComponent

Ƭ **IRouteComponent**<`C`, `P`\>: `C` & { `getInitialProps?`: (`context`: [`IRouteComponentContext`](../interfaces/internal_.IRouteComponentContext.md)) => `P` \| `Promise`<`P`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | `C` |
| `P` | {} |

___

### IRouteComponentProps

Ƭ **IRouteComponentProps**: `Record`<`string`, `string`\>

___

### IRuntimeConfig

Ƭ **IRuntimeConfig**: `Record`<`string`, `string`\>

___

### IRuntimePluginConstructor

Ƭ **IRuntimePluginConstructor**: [`IPluginHandlers`](internal_.md#ipluginhandlers)<[`BuiltinRuntimePluginHooks`](internal_.md#builtinruntimepluginhooks) & [`CustomRuntimePluginHooks`](../interfaces/internal_.CustomRuntimePluginHooks.md), `void`\>

___

### LoadableBaseOptions

Ƭ **LoadableBaseOptions**<`P`\>: [`LoadableGeneratedOptions`](internal_.md#loadablegeneratedoptions) & { `loader?`: [`Loader`](internal_.md#loader)<`P`\> ; `ssr?`: `boolean` ; `loading?`: (`__namedParameters`: { `error?`: `Error` \| ``null`` ; `isLoading?`: `boolean` ; `pastDelay?`: `boolean` ; `timedOut?`: `boolean`  }) => ``null`` \| `Element`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | {} |

___

### LoadableGeneratedOptions

Ƭ **LoadableGeneratedOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `modules?` | `string`[] |
| `webpack?` | () => `string`[] |

___

### Loader

Ƭ **Loader**<`P`\>: () => [`LoaderComponent`](internal_.md#loadercomponent)<`P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | {} |

#### Type declaration

▸ (): [`LoaderComponent`](internal_.md#loadercomponent)<`P`\>

##### Returns

[`LoaderComponent`](internal_.md#loadercomponent)<`P`\>

___

### LoaderComponent

Ƭ **LoaderComponent**<`P`\>: `Promise`<`React.ComponentType`<`P`\> \| { `default`: `React.ComponentType`<`P`\>  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | {} |

___

### PatchPluginParameter

Ƭ **PatchPluginParameter**<`T`, `C`\>: [`RemoveManagerVoidParameter`](internal_.md#removemanagervoidparameter)<[`AddContextParameter`](internal_.md#addcontextparameter)<`T`, `C`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `C` |

___

### PathParserOptions

Ƭ **PathParserOptions**: `Pick`<`_PathParserOptions`, ``"end"`` \| ``"sensitive"`` \| ``"strict"``\>

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

### RunnerType

Ƭ **RunnerType**<`HM`, `EHM`\>: { [K in keyof HM & EHM]: HookRunnerType<HM & EHM[K]\> } & { `setup`: [`Setup`](internal_.md#setup)<`EHM`\>  }

#### Type parameters

| Name |
| :------ |
| `HM` |
| `EHM` |

___

### Send

Ƭ **Send**<`T`\>: (`body`: `T`) => `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`body`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `T` |

##### Returns

`void`

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

### State

Ƭ **State**: `object` \| ``null``

An object that is used to associate some arbitrary data with a location, but
that does not appear in the URL path.

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

___

### WithRouterProps

Ƭ **WithRouterProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `router` | [`IRouter`](../interfaces/internal_.IRouter.md) |

## Variables

### builtinRuntimePluginHooks

• `Const` **builtinRuntimePluginHooks**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dispose` | [`"@shuvi/hook/lib/index"`](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md) |
| `getAppComponent` | [`"@shuvi/hook/lib/index"`](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md) |
| `getAppContext` | [`"@shuvi/hook/lib/index"`](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md) |
| `getRootAppComponent` | [`"@shuvi/hook/lib/index"`](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md) |
| `init` | [`"@shuvi/hook/lib/index"`](internal_.__Users_user_project_shuvi_packages_hook_lib_index_.md) |
