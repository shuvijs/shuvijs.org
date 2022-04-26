[shuvi](../README.md) / [Exports](../modules.md) / ShuviServerOptions

# Interface: ShuviServerOptions

## Hierarchy

- **`ShuviServerOptions`**

  ↳ [`CreateShuviServerOptions`](CreateShuviServerOptions.md)

## Table of contents

### Properties

- [getMiddlewares](ShuviServerOptions.md#getmiddlewares)
- [getMiddlewaresBeforeDevMiddlewares](ShuviServerOptions.md#getmiddlewaresbeforedevmiddlewares)
- [serverPlugins](ShuviServerOptions.md#serverplugins)

## Properties

### getMiddlewares

• `Optional` **getMiddlewares**: (`context`: [`IServerPluginContext`](../modules.md#iserverplugincontext)) => [`IServerMiddleware`](../modules.md#iservermiddleware) \| [`IServerMiddleware`](../modules.md#iservermiddleware)[]

#### Type declaration

▸ (`context`): [`IServerMiddleware`](../modules.md#iservermiddleware) \| [`IServerMiddleware`](../modules.md#iservermiddleware)[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`IServerPluginContext`](../modules.md#iserverplugincontext) |

##### Returns

[`IServerMiddleware`](../modules.md#iservermiddleware) \| [`IServerMiddleware`](../modules.md#iservermiddleware)[]

#### Defined in

packages/service/lib/server/shuviServerTypes.d.ts:13

___

### getMiddlewaresBeforeDevMiddlewares

• `Optional` **getMiddlewaresBeforeDevMiddlewares**: (`devMiddleware`: `DevMiddleware`, `context`: [`IServerPluginContext`](../modules.md#iserverplugincontext)) => [`IServerMiddleware`](../modules.md#iservermiddleware) \| [`IServerMiddleware`](../modules.md#iservermiddleware)[]

#### Type declaration

▸ (`devMiddleware`, `context`): [`IServerMiddleware`](../modules.md#iservermiddleware) \| [`IServerMiddleware`](../modules.md#iservermiddleware)[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `devMiddleware` | `DevMiddleware` |
| `context` | [`IServerPluginContext`](../modules.md#iserverplugincontext) |

##### Returns

[`IServerMiddleware`](../modules.md#iservermiddleware) \| [`IServerMiddleware`](../modules.md#iservermiddleware)[]

#### Defined in

packages/service/lib/server/shuviServerTypes.d.ts:14

___

### serverPlugins

• **serverPlugins**: [`ServerPluginInstance`](../modules.md#serverplugininstance)[]

#### Defined in

packages/service/lib/server/shuviServerTypes.d.ts:12
