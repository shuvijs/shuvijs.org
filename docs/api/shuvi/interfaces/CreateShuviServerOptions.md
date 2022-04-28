[shuvi](../README.md) / [Exports](../modules.md) / CreateShuviServerOptions

# Interface: CreateShuviServerOptions

## Hierarchy

- [`ShuviServerOptions`](ShuviServerOptions.md)

  ↳ **`CreateShuviServerOptions`**

## Table of contents

### Properties

- [context](CreateShuviServerOptions.md#context)
- [dev](CreateShuviServerOptions.md#dev)
- [getMiddlewares](CreateShuviServerOptions.md#getmiddlewares)
- [getMiddlewaresBeforeDevMiddlewares](CreateShuviServerOptions.md#getmiddlewaresbeforedevmiddlewares)
- [serverPlugins](CreateShuviServerOptions.md#serverplugins)

## Properties

### context

• **context**: [`IPluginContext`](../modules.md#iplugincontext)

#### Defined in

packages/service/lib/server/index.d.ts:7

___

### dev

• `Optional` **dev**: `boolean`

#### Defined in

packages/service/lib/server/index.d.ts:8

___

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

#### Inherited from

[ShuviServerOptions](ShuviServerOptions.md).[getMiddlewares](ShuviServerOptions.md#getmiddlewares)

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

#### Inherited from

[ShuviServerOptions](ShuviServerOptions.md).[getMiddlewaresBeforeDevMiddlewares](ShuviServerOptions.md#getmiddlewaresbeforedevmiddlewares)

#### Defined in

packages/service/lib/server/shuviServerTypes.d.ts:14

___

### serverPlugins

• **serverPlugins**: [`ServerPluginInstance`](../modules.md#serverplugininstance)[]

#### Inherited from

[ShuviServerOptions](ShuviServerOptions.md).[serverPlugins](ShuviServerOptions.md#serverplugins)

#### Defined in

packages/service/lib/server/shuviServerTypes.d.ts:12
