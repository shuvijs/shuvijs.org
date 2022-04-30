runtime

# runtime

## Table of contents

### Namespaces

- [&lt;internal\&gt;](modules/internal_.md)
- [Head](modules/Head.md)
- [RouterView](modules/RouterView.md)
- [RuntimeServer](modules/RuntimeServer.md)

### Classes

- [Application](classes/Application.md)

### Interfaces

- [ApplicationCreater](interfaces/ApplicationCreater.md)
- [IAppComponentContext](interfaces/IAppComponentContext.md)
- [IAppRenderFn](interfaces/IAppRenderFn.md)
- [IAppRouteConfig](interfaces/IAppRouteConfig.md)
- [IAppRouteConfigWithPrivateProps](interfaces/IAppRouteConfigWithPrivateProps.md)
- [IApplication](interfaces/IApplication.md)
- [IApplicationCreaterBase](interfaces/IApplicationCreaterBase.md)
- [IApplicationCreaterClientContext](interfaces/IApplicationCreaterClientContext.md)
- [IApplicationCreaterServerContext](interfaces/IApplicationCreaterServerContext.md)
- [IContext](interfaces/IContext.md)
- [IHtmlTag](interfaces/IHtmlTag.md)
- [IPageError](interfaces/IPageError.md)
- [IRouteComponentContext](interfaces/IRouteComponentContext.md)
- [IRouteRecord](interfaces/IRouteRecord.md)
- [IServerRendererOptions](interfaces/IServerRendererOptions.md)
- [IViewClient](interfaces/IViewClient.md)
- [IViewServer](interfaces/IViewServer.md)

### Type aliases

- [IAppComponent](overview.md#iappcomponent)
- [IAppData](overview.md#iappdata)
- [IAppState](overview.md#iappstate)
- [IApplicationCreaterContext](overview.md#iapplicationcreatercontext)
- [IData](overview.md#idata)
- [IErrorHandler](overview.md#ierrorhandler)
- [IHtmlAttrs](overview.md#ihtmlattrs)
- [IParams](overview.md#iparams)
- [IQuery](overview.md#iquery)
- [IRenderAppResult](overview.md#irenderappresult)
- [IRouteComponent](overview.md#iroutecomponent)
- [IRuntimeConfig](overview.md#iruntimeconfig)
- [IRuntimeModule](overview.md#iruntimemodule)
- [RuntimePluginInstance](overview.md#runtimeplugininstance)

### Variables

- [App](overview.md#app)
- [Link](overview.md#link)
- [errorModel](overview.md#errormodel)

### Functions

- [Head](overview.md#head)
- [RouterView](overview.md#routerview)
- [createPlugin](overview.md#createplugin)
- [dynamic](overview.md#dynamic)
- [getAppData](overview.md#getappdata)
- [getErrorHandler](overview.md#geterrorhandler)
- [getModelManager](overview.md#getmodelmanager)
- [getPageData](overview.md#getpagedata)
- [getRuntimeConfig](overview.md#getruntimeconfig)
- [matchPathname](overview.md#matchpathname)
- [matchRoutes](overview.md#matchroutes)
- [parseQuery](overview.md#parsequery)
- [rankRouteBranches](overview.md#rankroutebranches)
- [useCurrentRoute](overview.md#usecurrentroute)
- [useParams](overview.md#useparams)
- [useRouter](overview.md#userouter)
- [withRouter](overview.md#withrouter)

## Type aliases

### IAppComponent

Ƭ **IAppComponent**<`C`, `P`\>: `C` & { `getInitialProps?`: (`context`: [`IAppComponentContext`](interfaces/IAppComponentContext.md)) => `P` \| `Promise`<`P`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | `C` |
| `P` | {} |

___

### IAppData

Ƭ **IAppData**<`Data`, `appState`\>: { `appState?`: `appState` ; `pageData?`: { `[key: string]`: `any`;  } ; `routeProps?`: { `[x: string]`: `any`;  } ; `runtimeConfig?`: `Record`<`string`, `string`\> ; `ssr`: `boolean`  } & { [K in keyof Data]: Data[K] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | {} |
| `appState` | `any` |

___

### IAppState

Ƭ **IAppState**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `error?` | [`IPageError`](interfaces/IPageError.md) |

___

### IApplicationCreaterContext

Ƭ **IApplicationCreaterContext**: [`IApplicationCreaterClientContext`](interfaces/IApplicationCreaterClientContext.md) \| [`IApplicationCreaterServerContext`](interfaces/IApplicationCreaterServerContext.md)

___

### IData

Ƭ **IData**: `Object`

#### Index signature

▪ [k: `string`]: `string` \| `number` \| `boolean` \| `undefined` \| ``null``

___

### IErrorHandler

Ƭ **IErrorHandler**: (`errorCode?`: [`SHUVI_ERROR_CODE`](enums/internal_.SHUVI_ERROR_CODE.md) \| `string`, `errorDesc?`: `string`) => `void`

#### Type declaration

▸ (`errorCode?`, `errorDesc?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `errorCode?` | [`SHUVI_ERROR_CODE`](enums/internal_.SHUVI_ERROR_CODE.md) \| `string` |
| `errorDesc?` | `string` |

##### Returns

`void`

___

### IHtmlAttrs

Ƭ **IHtmlAttrs**: { `textContent?`: `string`  } & { `[x: string]`: `string` \| `number` \| `undefined` \| `boolean`;  }

___

### IParams

Ƭ **IParams**: `Record`<`string`, `string`[] \| `string`\>

___

### IQuery

Ƭ **IQuery**: `ParsedQuery`

___

### IRenderAppResult

Ƭ **IRenderAppResult**<`Data`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | {} |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `appData?` | `Data` |
| `appHtml?` | `string` |
| `headBeginTags?` | [`IHtmlTag`](interfaces/IHtmlTag.md)[] |
| `headEndTags?` | [`IHtmlTag`](interfaces/IHtmlTag.md)[] |
| `htmlAttrs?` | [`IHtmlAttrs`](overview.md#ihtmlattrs) |
| `mainBeginTags?` | [`IHtmlTag`](interfaces/IHtmlTag.md)[] |
| `mainEndTags?` | [`IHtmlTag`](interfaces/IHtmlTag.md)[] |
| `redirect?` | [`IRedirectState`](interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRedirectState.md) |
| `scriptBeginTags?` | [`IHtmlTag`](interfaces/IHtmlTag.md)[] |
| `scriptEndTags?` | [`IHtmlTag`](interfaces/IHtmlTag.md)[] |

___

### IRouteComponent

Ƭ **IRouteComponent**<`C`, `P`\>: `C` & { `getInitialProps?`: (`context`: [`IRouteComponentContext`](interfaces/IRouteComponentContext.md)) => `P` \| `Promise`<`P`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | `C` |
| `P` | {} |

___

### IRuntimeConfig

Ƭ **IRuntimeConfig**: `Record`<`string`, `string`\>

___

### IRuntimeModule

Ƭ **IRuntimeModule**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dispose` | [`IRuntimePluginConstructor`](modules/internal_.md#iruntimepluginconstructor)[``"dispose"``] |
| `getAppComponent` | [`IRuntimePluginConstructor`](modules/internal_.md#iruntimepluginconstructor)[``"getAppComponent"``] |
| `getAppContext` | [`IRuntimePluginConstructor`](modules/internal_.md#iruntimepluginconstructor)[``"getAppContext"``] |
| `getRootAppComponent` | [`IRuntimePluginConstructor`](modules/internal_.md#iruntimepluginconstructor)[``"getRootAppComponent"``] |
| `init` | [`IRuntimePluginConstructor`](modules/internal_.md#iruntimepluginconstructor)[``"init"``] |

___

### RuntimePluginInstance

Ƭ **RuntimePluginInstance**: [`IPluginInstance`](modules/internal_.md#iplugininstance)<[`BuiltinRuntimePluginHooks`](modules/internal_.md#builtinruntimepluginhooks) & [`CustomRuntimePluginHooks`](interfaces/internal_.CustomRuntimePluginHooks.md), `void`\>

## Variables

### App

• **App**: `unknown`

The root app Component that user can modify

___

### Link

• `Const` **Link**: `React.ForwardRefExoticComponent`<[`LinkProps`](interfaces/internal_.LinkProps.md) & `React.RefAttributes`<`HTMLAnchorElement`\>\>

The public API for rendering a history-aware `<a>`.
```ts
// jump to `/about`
<Link to="/about">About</Link>
// jump with query
<Link to="/about?sort=name">About</Link>
// with some state
<Link to="/about" state={{fromDashboard: true}}>About</Link>
// props `to` could be a object
<Link to={{
  pathname: "/about",
  search: "?sort=name",
  hash: "#the-hash",
}}>About</Link>
// props target '_self' | '_blank', default is '_self'
<Link to="/about" target="_self">About</Link>
// overrides default redirect mode by `replace`
<Link to="/about" replace>About</Link>
// if `onClick` function, run it first
<Link to="/about" onClick={fn}>About</Link>
// other props will be delivered to `<a>`
<Link to="/about" a='a' b='b'>About</Link> => <{...rest} a>
```

___

### errorModel

• `Const` **errorModel**: `Model`

## Functions

### Head

▸ **Head**(`__namedParameters`): `JSX.Element`

This component injects elements to `<head>` of your page.
To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.

```ts
import { Head } from "@shuvi/runtime";

function IndexPage() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p>Hello world!</p>
   </div>
 );
}

export default IndexPage;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.children?` | `ReactNode` |

#### Returns

`JSX.Element`

___

### RouterView

▸ **RouterView**(): `React.ReactElement` \| ``null``

#### Returns

`React.ReactElement` \| ``null``

___

### createPlugin

▸ **createPlugin**(`pluginHandlers`, `options?`): [`IPluginInstance`](modules/internal_.md#iplugininstance)<{ `dispose`: [`AsyncParallelHook`](modules/internal_.md#asyncparallelhook)<`void`, `void`, `void`\> ; `getAppComponent`: [`AsyncSeriesWaterfallHook`](modules/internal_.md#asyncserieswaterfallhook)<`unknown`, [`IContext`](interfaces/IContext.md)\> ; `getAppContext`: [`AsyncSeriesWaterfallHook`](modules/internal_.md#asyncserieswaterfallhook)<[`IContext`](interfaces/IContext.md), `void`\> ; `getRootAppComponent`: [`AsyncSeriesWaterfallHook`](modules/internal_.md#asyncserieswaterfallhook)<`unknown`, [`IContext`](interfaces/IContext.md)\> ; `init`: [`AsyncParallelHook`](modules/internal_.md#asyncparallelhook)<`void`, `void`, `void`\>  } & [`CustomRuntimePluginHooks`](interfaces/internal_.CustomRuntimePluginHooks.md), `void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pluginHandlers` | `Partial`<[`IPluginHandlersFullMap`](modules/internal_.md#ipluginhandlersfullmap)<{ `dispose`: [`AsyncParallelHook`](modules/internal_.md#asyncparallelhook)<`void`, `void`, `void`\> ; `getAppComponent`: [`AsyncSeriesWaterfallHook`](modules/internal_.md#asyncserieswaterfallhook)<`unknown`, [`IContext`](interfaces/IContext.md)\> ; `getAppContext`: [`AsyncSeriesWaterfallHook`](modules/internal_.md#asyncserieswaterfallhook)<[`IContext`](interfaces/IContext.md), `void`\> ; `getRootAppComponent`: [`AsyncSeriesWaterfallHook`](modules/internal_.md#asyncserieswaterfallhook)<`unknown`, [`IContext`](interfaces/IContext.md)\> ; `init`: [`AsyncParallelHook`](modules/internal_.md#asyncparallelhook)<`void`, `void`, `void`\>  } & [`CustomRuntimePluginHooks`](interfaces/internal_.CustomRuntimePluginHooks.md), `void`\>\> & { `setup?`: [`Setup`](modules/internal_.md#setup)<[`CustomRuntimePluginHooks`](interfaces/internal_.CustomRuntimePluginHooks.md)\>  } |
| `options?` | [`PluginOptions`](modules/internal_.md#pluginoptions) |

#### Returns

[`IPluginInstance`](modules/internal_.md#iplugininstance)<{ `dispose`: [`AsyncParallelHook`](modules/internal_.md#asyncparallelhook)<`void`, `void`, `void`\> ; `getAppComponent`: [`AsyncSeriesWaterfallHook`](modules/internal_.md#asyncserieswaterfallhook)<`unknown`, [`IContext`](interfaces/IContext.md)\> ; `getAppContext`: [`AsyncSeriesWaterfallHook`](modules/internal_.md#asyncserieswaterfallhook)<[`IContext`](interfaces/IContext.md), `void`\> ; `getRootAppComponent`: [`AsyncSeriesWaterfallHook`](modules/internal_.md#asyncserieswaterfallhook)<`unknown`, [`IContext`](interfaces/IContext.md)\> ; `init`: [`AsyncParallelHook`](modules/internal_.md#asyncparallelhook)<`void`, `void`, `void`\>  } & [`CustomRuntimePluginHooks`](interfaces/internal_.CustomRuntimePluginHooks.md), `void`\>

___

### dynamic

▸ **dynamic**<`P`\>(`dynamicOptions`, `options?`): `React.ComponentType`<`P`\>

 ES2020 [dynamic import()](https://github.com/tc39/proposal-dynamic-import) for JavaScript

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | {} |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dynamicOptions` | [`DynamicOptions`](modules/internal_.md#dynamicoptions)<`P`\> \| [`Loader`](modules/internal_.md#loader)<`P`\> | [DynamicOptions](modules/internal_.md#dynamicoptions) \| [Loader](modules/internal_.md#loader) |
| `options?` | [`DynamicOptions`](modules/internal_.md#dynamicoptions)<`P`\> | [DynamicOptions](modules/internal_.md#dynamicoptions) |

#### Returns

`React.ComponentType`<`P`\>

React.ComponentType

___

### getAppData

▸ **getAppData**(): [`IAppData`](overview.md#iappdata)

#### Returns

[`IAppData`](overview.md#iappdata)

___

### getErrorHandler

▸ **getErrorHandler**(`modelManager`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelManager` | `IModelManager` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `errorHandler` | [`IErrorHandler`](overview.md#ierrorhandler) |
| `reset` | () => `void` |

___

### getModelManager

▸ **getModelManager**(`initialState?`): `IModelManager`

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialState?` | [`IAppState`](overview.md#iappstate) |

#### Returns

`IModelManager`

___

### getPageData

▸ **getPageData**<`T`\>(`key`, `defaultValue?`): `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `defaultValue?` | `T` |

#### Returns

`any`

___

### getRuntimeConfig

▸ **getRuntimeConfig**(): [`IRuntimeConfig`](modules/internal_.md#iruntimeconfig)

#### Returns

[`IRuntimeConfig`](modules/internal_.md#iruntimeconfig)

___

### matchPathname

▸ **matchPathname**(`pattern`, `pathname`): [`IPathMatch`](interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.IPathMatch.md) \| ``null``

match pathname, online link https://paths.esm.dev/?p=AAMeJSyAwR4UbFDAFxAcAGAIJnMCo0SmCHGYBdyBsATSBUQBsAPABAwxsAHeGVJwuLlARA..#

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | [`IPathPattern`](modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#ipathpattern) |
| `pathname` | `string` |

#### Returns

[`IPathMatch`](interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.IPathMatch.md) \| ``null``

___

### matchRoutes

▸ **matchRoutes**<`T`\>(`routes`, `location`, `basename?`): [`IRouteMatch`](interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRouteMatch.md)<`T`\>[] \| ``null``

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IRouteBaseObject`](interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRouteBaseObject.md)<`any`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `routes` | `T`[] |
| `location` | `string` \| [`PartialLocation`](interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.PartialLocation.md)<[`State`](modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#state)\> |
| `basename?` | `string` |

#### Returns

[`IRouteMatch`](interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRouteMatch.md)<`T`\>[] \| ``null``

___

### parseQuery

▸ **parseQuery**(`queryStr`): `qs.ParsedQuery`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryStr` | `string` |

#### Returns

`qs.ParsedQuery`<`string`\>

___

### rankRouteBranches

▸ **rankRouteBranches**<`T`\>(`branches`): `T`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`string`, ...any[]] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `branches` | `T`[] |

#### Returns

`T`[]

___

### useCurrentRoute

▸ **useCurrentRoute**(): [`"@shuvi/router/lib/index"`](modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md)

 is just point `router.current` object

#### Returns

[`"@shuvi/router/lib/index"`](modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md)

___

### useParams

▸ **useParams**(): [`IParams`](overview.md#iparams)

Returns an object of key/value pairs of the dynamic params from the current
URL that were matched by the route path.

#### Returns

[`IParams`](overview.md#iparams)

___

### useRouter

▸ **useRouter**(): [`IRouter`](interfaces/internal_.IRouter.md)

Returns the current router object
two parts, one is router behavior(browser history mode, hash history mode), another is router content

#### Returns

[`IRouter`](interfaces/internal_.IRouter.md)

___

### withRouter

▸ **withRouter**<`P`\>(`ComposedComponent`): [`IRouteComponent`](modules/internal_.md#iroutecomponent)<`React.ComponentType`<[`ExcludeRouterProps`](modules/internal_.md#excluderouterprops)<`P`\>\>, `any`\>

withRouter is HOC, add property router to param `ComposedComponent`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`WithRouterProps`](modules/internal_.md#withrouterprops) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ComposedComponent` | [`IRouteComponent`](modules/internal_.md#iroutecomponent)<`ComponentType`<`P`\>, `any`\> | IRouteComponent |

#### Returns

[`IRouteComponent`](modules/internal_.md#iroutecomponent)<`React.ComponentType`<[`ExcludeRouterProps`](modules/internal_.md#excluderouterprops)<`P`\>\>, `any`\>

`<ComposedComponent router={useRouter()} {...props} />`
