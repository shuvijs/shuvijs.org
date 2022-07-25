[runtime](../overview.md) / [<internal\>](internal_.md) / "@shuvi/router/lib/index"

# Namespace: "@shuvi/router/lib/index"

[internal](internal_.md)."@shuvi/router/lib/index"

## Table of contents

### References

- [IParams](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#iparams)
- [IRouteRecord](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#irouterecord)
- [matchPathname](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#matchpathname)
- [matchRoutes](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#matchroutes)
- [parseQuery](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#parsequery)
- [rankRouteBranches](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#rankroutebranches)

### Classes

- [History](../classes/internal_.__Users_user_project_shuvi_packages_router_lib_index_.History.md)
- [MemoryHistory](../classes/internal_.__Users_user_project_shuvi_packages_router_lib_index_.MemoryHistory.md)

### Interfaces

- [Blocker](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.Blocker.md)
- [IPathMatch](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.IPathMatch.md)
- [IRedirectFn](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRedirectFn.md)
- [IRedirectState](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRedirectState.md)
- [IRoute](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRoute.md)
- [IRouteBaseObject](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRouteBaseObject.md)
- [IRouteMatch](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRouteMatch.md)
- [IRouter](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRouter.md)
- [Listener](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.Listener.md)
- [Location](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.Location.md)
- [NavigationGuardHook](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.NavigationGuardHook.md)
- [NavigationGuardHookWithContext](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.NavigationGuardHookWithContext.md)
- [NavigationHookContext](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.NavigationHookContext.md)
- [NavigationResolvedHook](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.NavigationResolvedHook.md)
- [PartialLocation](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.PartialLocation.md)
- [PartialPath](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.PartialPath.md)
- [Path](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.Path.md)
- [ResolvedPath](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.ResolvedPath.md)
- [Transition](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.Transition.md)
- [Update](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.Update.md)

### Type aliases

- [Action](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#action)
- [GlobalHistory](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#globalhistory)
- [Hash](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#hash)
- [HistoryState](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#historystate)
- [IPartialRouteRecord](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#ipartialrouterecord)
- [IPathPattern](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#ipathpattern)
- [IRouteBranch](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#iroutebranch)
- [IRouteComponentProps](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#iroutecomponentprops)
- [InitialEntry](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#initialentry)
- [Key](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#key)
- [MemoryHistoryOptions](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#memoryhistoryoptions)
- [PathRecord](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#pathrecord)
- [Pathname](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#pathname)
- [RemoveListenerCallback](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#removelistenercallback)
- [Search](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#search)
- [State](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#state)

### Functions

- [createBrowserHistory](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#createbrowserhistory)
- [createHashHistory](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#createhashhistory)
- [createLocation](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#createlocation)
- [createMemoryHistory](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#creatememoryhistory)
- [createRedirector](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#createredirector)
- [createRouter](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#createrouter)
- [createRoutesFromArray](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#createroutesfromarray)
- [matchStringify](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#matchstringify)
- [pathToString](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#pathtostring)
- [resolvePath](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#resolvepath)

## References

### IParams

Re-exports [IParams](../overview.md#iparams)

___

### IRouteRecord

Re-exports [IRouteRecord](../interfaces/IRouteRecord.md)

___

### matchPathname

Re-exports [matchPathname](../overview.md#matchpathname)

___

### matchRoutes

Re-exports [matchRoutes](../overview.md#matchroutes)

___

### parseQuery

Re-exports [parseQuery](../overview.md#parsequery)

___

### rankRouteBranches

Re-exports [rankRouteBranches](../overview.md#rankroutebranches)

## Type aliases

### Action

Ƭ **Action**: ``"POP"`` \| ``"PUSH"`` \| ``"REPLACE"``

Actions represent the type of change to a location value.

___

### GlobalHistory

Ƭ **GlobalHistory**: typeof `window.history`

___

### Hash

Ƭ **Hash**: `string`

A URL fragment identifier, beginning with a #.

___

### HistoryState

Ƭ **HistoryState**: { `idx`: `number` ; `key?`: `string` ; `usr`: [`State`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#state)  } \| ``null``

___

### IPartialRouteRecord

Ƭ **IPartialRouteRecord**<`Element`\>: `Partial`<[`IRouteRecord`](../interfaces/IRouteRecord.md)<`Element`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Element` | `any` |

___

### IPathPattern

Ƭ **IPathPattern**: `string` \| { `caseSensitive?`: `boolean` ; `end?`: `boolean` ; `path`: `string`  }

___

### IRouteBranch

Ƭ **IRouteBranch**<`T`\>: [`string`, `T`[], `number`[]]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`IRouteRecord`](../interfaces/IRouteRecord.md) |

___

### IRouteComponentProps

Ƭ **IRouteComponentProps**: `Record`<`string`, `string`\>

___

### InitialEntry

Ƭ **InitialEntry**: `string` \| [`PartialLocation`](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.PartialLocation.md)

A user-supplied object that describes a location. Used when providing
entries to `createMemoryHistory` via its `initialEntries` option.

___

### Key

Ƭ **Key**: `string`

A unique string associated with a location. May be used to safely store
and retrieve data in some other storage API, like `localStorage`.

___

### MemoryHistoryOptions

Ƭ **MemoryHistoryOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `initialEntries?` | [`InitialEntry`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#initialentry)[] |
| `initialIndex?` | `number` |

___

### PathRecord

Ƭ **PathRecord**: `string` \| [`PartialPath`](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.PartialPath.md)

Describes a location that is the destination of some navigation, either via
`history.push` or `history.replace`. May be either a URL or the pieces of a
URL path.

___

### Pathname

Ƭ **Pathname**: `string`

A URL pathname, beginning with a /.

___

### RemoveListenerCallback

Ƭ **RemoveListenerCallback**: () => `void` \| `undefined`

#### Type declaration

▸ (): `void` \| `undefined`

##### Returns

`void` \| `undefined`

___

### Search

Ƭ **Search**: `string`

A URL search string, beginning with a ?.

___

### State

Ƭ **State**: `object` \| ``null``

An object that is used to associate some arbitrary data with a location, but
that does not appear in the URL path.

## Functions

### createBrowserHistory

▸ **createBrowserHistory**(): [`default`](../classes/internal_.default.md)

#### Returns

[`default`](../classes/internal_.default.md)

___

### createHashHistory

▸ **createHashHistory**(): [`default`](../classes/internal_.default-1.md)

#### Returns

[`default`](../classes/internal_.default-1.md)

___

### createLocation

▸ **createLocation**(`to`, `__namedParameters?`): [`Location`](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.Location.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | [`PathRecord`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#pathrecord) |
| `__namedParameters?` | `Object` |
| `__namedParameters.key?` | `string` |
| `__namedParameters.redirectedFrom?` | [`PathRecord`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#pathrecord) |
| `__namedParameters.state?` | [`State`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#state) |

#### Returns

[`Location`](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.Location.md)<`any`\>

___

### createMemoryHistory

▸ **createMemoryHistory**(`options?`): [`MemoryHistory`](../classes/internal_.__Users_user_project_shuvi_packages_router_lib_index_.MemoryHistory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`MemoryHistoryOptions`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#memoryhistoryoptions) |

#### Returns

[`MemoryHistory`](../classes/internal_.__Users_user_project_shuvi_packages_router_lib_index_.MemoryHistory.md)

___

### createRedirector

▸ **createRedirector**(): [`IRedirector`](../interfaces/internal_.IRedirector.md)

#### Returns

[`IRedirector`](../interfaces/internal_.IRedirector.md)

___

### createRouter

▸ **createRouter**<`RouteRecord`\>(`options`): [`IRouter`](../interfaces/internal_.IRouter.md)<`RouteRecord`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteRecord` | extends [`IRouteRecord`](../interfaces/IRouteRecord.md)<`any`, `RouteRecord`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IRouterOptions`](../interfaces/internal_.IRouterOptions.md)<`RouteRecord`\> |

#### Returns

[`IRouter`](../interfaces/internal_.IRouter.md)<`RouteRecord`\>

___

### createRoutesFromArray

▸ **createRoutesFromArray**<`T`, `U`\>(`array`): `U`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Partial`<[`IRouteRecord`](../interfaces/IRouteRecord.md)<`any`\>\> |
| `U` | extends [`IRouteRecord`](../interfaces/IRouteRecord.md)<`any`, `U`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T`[] |

#### Returns

`U`[]

___

### matchStringify

▸ **matchStringify**(`path`, `params`, `options?`): `string`

stringify path to string by params and options

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `params` | [`IParams`](../overview.md#iparams) |
| `options?` | [`PathParserOptions`](internal_.md#pathparseroptions) |

#### Returns

`string`

___

### pathToString

▸ **pathToString**(`__namedParameters`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`PartialPath`](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.PartialPath.md) |

#### Returns

`string`

___

### resolvePath

▸ **resolvePath**(`to`, `fromPathname?`): [`Path`](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.Path.md)

Parses a string URL path into its separate pathname, search, and hash components.

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | [`PathRecord`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#pathrecord) |
| `fromPathname?` | `string` |

#### Returns

[`Path`](../interfaces/internal_.__Users_user_project_shuvi_packages_router_lib_index_.Path.md)
