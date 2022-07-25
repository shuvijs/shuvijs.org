[runtime](../overview.md) / [<internal\>](../modules/internal_.md) / ["@shuvi/router/lib/index"](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md) / IRouter

# Interface: IRouter<RouteRecord\>

[internal](../modules/internal_.md).["@shuvi/router/lib/index"](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md).IRouter

## Type parameters

| Name | Type |
| :------ | :------ |
| `RouteRecord` | extends `Object` = `any` |

## Table of contents

### Properties

- [action](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRouter.md#action)
- [back](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRouter.md#back)
- [block](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRouter.md#block)
- [current](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRouter.md#current)
- [go](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRouter.md#go)
- [ready](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRouter.md#ready)
- [resolve](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRouter.md#resolve)

### Methods

- [afterEach](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRouter.md#aftereach)
- [beforeEach](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRouter.md#beforeeach)
- [forward](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRouter.md#forward)
- [listen](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRouter.md#listen)
- [push](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRouter.md#push)
- [replace](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRouter.md#replace)
- [replaceRoutes](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRouter.md#replaceroutes)

## Properties

### action

• **action**: [`Action`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#action)

___

### back

• **back**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

___

### block

• **block**: (`blocker`: [`Blocker`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Blocker.md)<[`State`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#state)\>) => () => `void`

#### Type declaration

▸ (`blocker`): () => `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `blocker` | [`Blocker`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Blocker.md)<[`State`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#state)\> |

##### Returns

`fn`

▸ (): `void`

##### Returns

`void`

___

### current

• **current**: [`IRoute`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRoute.md)<`RouteRecord`\>

___

### go

• **go**: (`delta`: `number`) => `void`

#### Type declaration

▸ (`delta`): `void`

Jump to the specified route by number

##### Parameters

| Name | Type |
| :------ | :------ |
| `delta` | `number` |

##### Returns

`void`

___

### ready

• **ready**: `Promise`<`any`\>

___

### resolve

• **resolve**: (`to`: `any`, `from?`: `any`) => [`ResolvedPath`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.ResolvedPath.md)

#### Type declaration

▸ (`to`, `from?`): [`ResolvedPath`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.ResolvedPath.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `any` |
| `from?` | `any` |

##### Returns

[`ResolvedPath`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.ResolvedPath.md)

## Methods

### afterEach

▸ **afterEach**(`listener`): [`RemoveListenerCallback`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#removelistenercallback)

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`NavigationResolvedHook`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.NavigationResolvedHook.md)<`any`\> |

#### Returns

[`RemoveListenerCallback`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#removelistenercallback)

___

### beforeEach

▸ **beforeEach**(`listener`): [`RemoveListenerCallback`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#removelistenercallback)

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`NavigationGuardHook`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.NavigationGuardHook.md)<`any`\> |

#### Returns

[`RemoveListenerCallback`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#removelistenercallback)

___

### forward

▸ **forward**(): `void`

#### Returns

`void`

___

### listen

▸ **listen**(`listener`): [`RemoveListenerCallback`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#removelistenercallback)

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`Listener`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Listener.md)<[`State`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#state)\> |

#### Returns

[`RemoveListenerCallback`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#removelistenercallback)

___

### push

▸ **push**(`to`, `state?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | [`PathRecord`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#pathrecord) |
| `state?` | `any` |

#### Returns

`void`

___

### replace

▸ **replace**(`to`, `state?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | [`PathRecord`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#pathrecord) |
| `state?` | `any` |

#### Returns

`void`

___

### replaceRoutes

▸ **replaceRoutes**(`routes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `routes` | `RouteRecord`[] |

#### Returns

`void`
