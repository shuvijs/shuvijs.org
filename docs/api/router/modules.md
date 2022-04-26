[@shuvi/router](README.md) / Exports

# @shuvi/router

## Table of contents

### Classes

- [History](classes/History.md)
- [MemoryHistory](classes/MemoryHistory.md)

### Interfaces

- [Blocker](interfaces/Blocker.md)
- [IPathMatch](interfaces/IPathMatch.md)
- [IRedirectFn](interfaces/IRedirectFn.md)
- [IRedirectState](interfaces/IRedirectState.md)
- [IRoute](interfaces/IRoute.md)
- [IRouteBaseObject](interfaces/IRouteBaseObject.md)
- [IRouteMatch](interfaces/IRouteMatch.md)
- [IRouteRecord](interfaces/IRouteRecord.md)
- [IRouter](interfaces/IRouter.md)
- [Listener](interfaces/Listener.md)
- [Location](interfaces/Location.md)
- [NavigationGuardHook](interfaces/NavigationGuardHook.md)
- [NavigationGuardHookWithContext](interfaces/NavigationGuardHookWithContext.md)
- [NavigationHookContext](interfaces/NavigationHookContext.md)
- [NavigationResolvedHook](interfaces/NavigationResolvedHook.md)
- [ParsedQuery](interfaces/ParsedQuery.md)
- [PartialLocation](interfaces/PartialLocation.md)
- [PartialPath](interfaces/PartialPath.md)
- [Path](interfaces/Path.md)
- [ResolvedPath](interfaces/ResolvedPath.md)
- [Transition](interfaces/Transition.md)
- [Update](interfaces/Update.md)

### Type aliases

- [Action](modules.md#action)
- [GlobalHistory](modules.md#globalhistory)
- [Hash](modules.md#hash)
- [HistoryState](modules.md#historystate)
- [IParams](modules.md#iparams)
- [IPartialRouteRecord](modules.md#ipartialrouterecord)
- [IPathPattern](modules.md#ipathpattern)
- [IRouteBranch](modules.md#iroutebranch)
- [IRouteComponentProps](modules.md#iroutecomponentprops)
- [InitialEntry](modules.md#initialentry)
- [Key](modules.md#key)
- [MemoryHistoryOptions](modules.md#memoryhistoryoptions)
- [PathRecord](modules.md#pathrecord)
- [Pathname](modules.md#pathname)
- [RemoveListenerCallback](modules.md#removelistenercallback)
- [Search](modules.md#search)
- [State](modules.md#state)

### Functions

- [createBrowserHistory](modules.md#createbrowserhistory)
- [createHashHistory](modules.md#createhashhistory)
- [createLocation](modules.md#createlocation)
- [createMemoryHistory](modules.md#creatememoryhistory)
- [createRedirector](modules.md#createredirector)
- [createRouter](modules.md#createrouter)
- [createRoutesFromArray](modules.md#createroutesfromarray)
- [matchPathname](modules.md#matchpathname)
- [matchRoutes](modules.md#matchroutes)
- [matchStringify](modules.md#matchstringify)
- [parseQuery](modules.md#parsequery)
- [pathToString](modules.md#pathtostring)
- [rankRouteBranches](modules.md#rankroutebranches)
- [resolvePath](modules.md#resolvepath)

## Type aliases

### Action

Ƭ **Action**: ``"POP"`` \| ``"PUSH"`` \| ``"REPLACE"``

Actions represent the type of change to a location value.

#### Defined in

[packages/router/src/types/history.ts:12](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L12)

___

### GlobalHistory

Ƭ **GlobalHistory**: typeof `window.history`

#### Defined in

[packages/router/src/types/history.ts:6](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L6)

___

### Hash

Ƭ **Hash**: `string`

A URL fragment identifier, beginning with a #.

#### Defined in

[packages/router/src/types/history.ts:30](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L30)

___

### HistoryState

Ƭ **HistoryState**: { `idx`: `number` ; `key?`: `string` ; `usr`: [`State`](modules.md#state)  } \| ``null``

#### Defined in

[packages/router/src/types/history.ts:39](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L39)

___

### IParams

Ƭ **IParams**: `Record`<`string`, `string`[] \| `string`\>

#### Defined in

[packages/router/src/types/router.ts:10](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L10)

___

### IPartialRouteRecord

Ƭ **IPartialRouteRecord**<`Element`\>: `Partial`<[`IRouteRecord`](interfaces/IRouteRecord.md)<`Element`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Element` | `any` |

#### Defined in

[packages/router/src/types/router.ts:72](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L72)

___

### IPathPattern

Ƭ **IPathPattern**: `string` \| { `caseSensitive?`: `boolean` ; `end?`: `boolean` ; `path`: `string`  }

#### Defined in

[packages/router/src/types/router.ts:62](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L62)

___

### IRouteBranch

Ƭ **IRouteBranch**<`T`\>: [`string`, `T`[], `number`[]]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`IRouteRecord`](interfaces/IRouteRecord.md) |

#### Defined in

[packages/router/src/types/router.ts:60](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L60)

___

### IRouteComponentProps

Ƭ **IRouteComponentProps**: `Record`<`string`, `string`\>

#### Defined in

[packages/router/src/types/router.ts:12](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L12)

___

### InitialEntry

Ƭ **InitialEntry**: `string` \| [`PartialLocation`](interfaces/PartialLocation.md)

A user-supplied object that describes a location. Used when providing
entries to `createMemoryHistory` via its `initialEntries` option.

#### Defined in

[packages/router/src/history/memory.ts:19](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/memory.ts#L19)

___

### Key

Ƭ **Key**: `string`

A unique string associated with a location. May be used to safely store
and retrieve data in some other storage API, like `localStorage`.

#### Defined in

[packages/router/src/types/history.ts:50](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L50)

___

### MemoryHistoryOptions

Ƭ **MemoryHistoryOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `initialEntries?` | [`InitialEntry`](modules.md#initialentry)[] |
| `initialIndex?` | `number` |

#### Defined in

[packages/router/src/history/memory.ts:21](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/memory.ts#L21)

___

### PathRecord

Ƭ **PathRecord**: `string` \| [`PartialPath`](interfaces/PartialPath.md)

Describes a location that is the destination of some navigation, either via
`history.push` or `history.replace`. May be either a URL or the pieces of a
URL path.

#### Defined in

[packages/router/src/types/history.ts:199](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L199)

___

### Pathname

Ƭ **Pathname**: `string`

A URL pathname, beginning with a /.

#### Defined in

[packages/router/src/types/history.ts:18](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L18)

___

### RemoveListenerCallback

Ƭ **RemoveListenerCallback**: () => `void` \| `undefined`

#### Type declaration

▸ (): `void` \| `undefined`

##### Returns

`void` \| `undefined`

#### Defined in

[packages/router/src/types/history.ts:206](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L206)

___

### Search

Ƭ **Search**: `string`

A URL search string, beginning with a ?.

#### Defined in

[packages/router/src/types/history.ts:24](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L24)

___

### State

Ƭ **State**: `object` \| ``null``

An object that is used to associate some arbitrary data with a location, but
that does not appear in the URL path.

#### Defined in

[packages/router/src/types/history.ts:37](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L37)

## Functions

### createBrowserHistory

▸ **createBrowserHistory**(): `BrowserHistory`

#### Returns

`BrowserHistory`

#### Defined in

[packages/router/src/history/index.ts:7](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/index.ts#L7)

___

### createHashHistory

▸ **createHashHistory**(): `HashHistory`

#### Returns

`HashHistory`

#### Defined in

[packages/router/src/history/index.ts:11](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/index.ts#L11)

___

### createLocation

▸ **createLocation**(`to`, `__namedParameters?`): [`Location`](interfaces/Location.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | [`PathRecord`](modules.md#pathrecord) |
| `__namedParameters` | `Object` |
| `__namedParameters.key?` | `string` |
| `__namedParameters.redirectedFrom?` | [`PathRecord`](modules.md#pathrecord) |
| `__namedParameters.state?` | [`State`](modules.md#state) |

#### Returns

[`Location`](interfaces/Location.md)<`any`\>

#### Defined in

[packages/router/src/utils/history.ts:25](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/utils/history.ts#L25)

___

### createMemoryHistory

▸ **createMemoryHistory**(`options?`): [`MemoryHistory`](classes/MemoryHistory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`MemoryHistoryOptions`](modules.md#memoryhistoryoptions) |

#### Returns

[`MemoryHistory`](classes/MemoryHistory.md)

#### Defined in

[packages/router/src/history/index.ts:15](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/history/index.ts#L15)

___

### createRedirector

▸ **createRedirector**(): `IRedirector`

#### Returns

`IRedirector`

#### Defined in

[packages/router/src/utils/createRedirector.ts:8](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/utils/createRedirector.ts#L8)

___

### createRouter

▸ **createRouter**<`RouteRecord`\>(`options`): [`IRouter`](interfaces/IRouter.md)<`RouteRecord`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteRecord` | extends [`IRouteRecord`](interfaces/IRouteRecord.md)<`any`, `RouteRecord`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `IRouterOptions`<`RouteRecord`\> |

#### Returns

[`IRouter`](interfaces/IRouter.md)<`RouteRecord`\>

#### Defined in

[packages/router/src/router.ts:301](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/router.ts#L301)

___

### createRoutesFromArray

▸ **createRoutesFromArray**<`T`, `U`\>(`array`): `U`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Partial`<[`IRouteRecord`](interfaces/IRouteRecord.md)<`any`\>\> |
| `U` | extends [`IRouteRecord`](interfaces/IRouteRecord.md)<`any`, `U`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T`[] |

#### Returns

`U`[]

#### Defined in

[packages/router/src/createRoutesFromArray.ts:3](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/createRoutesFromArray.ts#L3)

___

### matchPathname

▸ **matchPathname**(`pattern`, `pathname`): [`IPathMatch`](interfaces/IPathMatch.md) \| ``null``

match pathname, online link https://paths.esm.dev/?p=AAMeJSyAwR4UbFDAFxAcAGAIJnMCo0SmCHGYBdyBsATSBUQBsAPABAwxsAHeGVJwuLlARA..#

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | [`IPathPattern`](modules.md#ipathpattern) |
| `pathname` | `string` |

#### Returns

[`IPathMatch`](interfaces/IPathMatch.md) \| ``null``

#### Defined in

[packages/router/src/matchPathname.ts:35](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/matchPathname.ts#L35)

___

### matchRoutes

▸ **matchRoutes**<`T`\>(`routes`, `location`, `basename?`): [`IRouteMatch`](interfaces/IRouteMatch.md)<`T`\>[] \| ``null``

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IRouteBaseObject`](interfaces/IRouteBaseObject.md)<`any`, `T`\> |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `routes` | `T`[] | `undefined` |
| `location` | `string` \| [`PartialLocation`](interfaces/PartialLocation.md)<[`State`](modules.md#state)\> | `undefined` |
| `basename` | `string` | `''` |

#### Returns

[`IRouteMatch`](interfaces/IRouteMatch.md)<`T`\>[] \| ``null``

#### Defined in

[packages/router/src/matchRoutes.ts:115](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/matchRoutes.ts#L115)

___

### matchStringify

▸ **matchStringify**(`path`, `params`, `options?`): `string`

stringify path to string by params and options

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `params` | [`IParams`](modules.md#iparams) |
| `options?` | `PathParserOptions` |

#### Returns

`string`

#### Defined in

[packages/router/src/matchPathname.ts:74](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/matchPathname.ts#L74)

___

### parseQuery

▸ **parseQuery**(`queryStr`): [`ParsedQuery`](interfaces/ParsedQuery.md)<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryStr` | `string` |

#### Returns

[`ParsedQuery`](interfaces/ParsedQuery.md)<`string`\>

#### Defined in

[packages/router/src/utils/path.ts:33](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/utils/path.ts#L33)

___

### pathToString

▸ **pathToString**(`__namedParameters`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`PartialPath`](interfaces/PartialPath.md) |

#### Returns

`string`

#### Defined in

[packages/router/src/utils/path.ts:37](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/utils/path.ts#L37)

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

#### Defined in

[packages/router/src/matchRoutes.ts:57](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/matchRoutes.ts#L57)

___

### resolvePath

▸ **resolvePath**(`to`, `fromPathname?`): [`Path`](interfaces/Path.md)

Parses a string URL path into its separate pathname, search, and hash components.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `to` | [`PathRecord`](modules.md#pathrecord) | `undefined` |
| `fromPathname` | `string` | `'/'` |

#### Returns

[`Path`](interfaces/Path.md)

#### Defined in

[packages/router/src/utils/path.ts:69](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/utils/path.ts#L69)
