[@shuvi/router](../README.md) / [Exports](../modules.md) / IRouter

# Interface: IRouter<RouteRecord\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `RouteRecord` | extends `Object` = `any` |

## Table of contents

### Properties

- [action](IRouter.md#action)
- [back](IRouter.md#back)
- [block](IRouter.md#block)
- [current](IRouter.md#current)
- [go](IRouter.md#go)
- [ready](IRouter.md#ready)
- [resolve](IRouter.md#resolve)

### Methods

- [afterEach](IRouter.md#aftereach)
- [beforeEach](IRouter.md#beforeeach)
- [forward](IRouter.md#forward)
- [listen](IRouter.md#listen)
- [push](IRouter.md#push)
- [replace](IRouter.md#replace)
- [replaceRoutes](IRouter.md#replaceroutes)

## Properties

### action

• **action**: [`Action`](../modules.md#action)

#### Defined in

[packages/router/src/types/router.ts:88](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L88)

___

### back

• **back**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/router/src/types/router.ts:92](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L92)

___

### block

• **block**: (`blocker`: [`Blocker`](Blocker.md)<[`State`](../modules.md#state)\>) => () => `void`

#### Type declaration

▸ (`blocker`): () => `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `blocker` | [`Blocker`](Blocker.md)<[`State`](../modules.md#state)\> |

##### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/router/src/types/router.ts:93](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L93)

___

### current

• **current**: [`IRoute`](IRoute.md)<`RouteRecord`\>

#### Defined in

[packages/router/src/types/router.ts:87](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L87)

___

### go

• **go**: (`delta`: `number`) => `void`

#### Type declaration

▸ (`delta`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `delta` | `number` |

##### Returns

`void`

#### Defined in

[packages/router/src/types/router.ts:91](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L91)

___

### ready

• **ready**: `Promise`<`any`\>

#### Defined in

[packages/router/src/types/router.ts:96](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L96)

___

### resolve

• **resolve**: (`to`: `any`, `from?`: `any`) => [`ResolvedPath`](ResolvedPath.md)

#### Type declaration

▸ (`to`, `from?`): [`ResolvedPath`](ResolvedPath.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `any` |
| `from?` | `any` |

##### Returns

[`ResolvedPath`](ResolvedPath.md)

#### Defined in

[packages/router/src/types/router.ts:94](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L94)

## Methods

### afterEach

▸ **afterEach**(`listener`): [`RemoveListenerCallback`](../modules.md#removelistenercallback)

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`NavigationResolvedHook`](NavigationResolvedHook.md)<`any`\> |

#### Returns

[`RemoveListenerCallback`](../modules.md#removelistenercallback)

#### Defined in

[packages/router/src/types/router.ts:100](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L100)

___

### beforeEach

▸ **beforeEach**(`listener`): [`RemoveListenerCallback`](../modules.md#removelistenercallback)

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`NavigationGuardHook`](NavigationGuardHook.md)<`any`\> |

#### Returns

[`RemoveListenerCallback`](../modules.md#removelistenercallback)

#### Defined in

[packages/router/src/types/router.ts:99](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L99)

___

### forward

▸ **forward**(): `void`

#### Returns

`void`

#### Defined in

[packages/router/src/types/router.ts:95](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L95)

___

### listen

▸ **listen**(`listener`): [`RemoveListenerCallback`](../modules.md#removelistenercallback)

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`Listener`](Listener.md)<[`State`](../modules.md#state)\> |

#### Returns

[`RemoveListenerCallback`](../modules.md#removelistenercallback)

#### Defined in

[packages/router/src/types/router.ts:98](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L98)

___

### push

▸ **push**(`to`, `state?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | [`PathRecord`](../modules.md#pathrecord) |
| `state?` | `any` |

#### Returns

`void`

#### Defined in

[packages/router/src/types/router.ts:89](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L89)

___

### replace

▸ **replace**(`to`, `state?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | [`PathRecord`](../modules.md#pathrecord) |
| `state?` | `any` |

#### Returns

`void`

#### Defined in

[packages/router/src/types/router.ts:90](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L90)

___

### replaceRoutes

▸ **replaceRoutes**(`routes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `routes` | `RouteRecord`[] |

#### Returns

`void`

#### Defined in

[packages/router/src/types/router.ts:102](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L102)
