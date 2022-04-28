[shuvi](../README.md) / [Exports](../modules.md) / IServerModule

# Interface: IServerModule

## Table of contents

### Properties

- [getPageData](IServerModule.md#getpagedata)
- [middlewares](IServerModule.md#middlewares)
- [modifyHtml](IServerModule.md#modifyhtml)
- [renderToHTML](IServerModule.md#rendertohtml)

## Properties

### getPageData

• `Optional` **getPageData**: (`extraArg`: `IContext`, `context`: [`IServerPluginContext`](../modules.md#iserverplugincontext)) => `Record`<`string`, `unknown`\> \| `Promise`<`Record`<`string`, `unknown`\>\>

#### Type declaration

▸ (`extraArg`, `context`): `Record`<`string`, `unknown`\> \| `Promise`<`Record`<`string`, `unknown`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `extraArg` | `IContext` |
| `context` | [`IServerPluginContext`](../modules.md#iserverplugincontext) |

##### Returns

`Record`<`string`, `unknown`\> \| `Promise`<`Record`<`string`, `unknown`\>\>

#### Defined in

packages/platform-web/lib/types/resources.d.ts:36

___

### middlewares

• `Optional` **middlewares**: [`IServerMiddleware`](../modules.md#iservermiddleware) \| [`IServerMiddleware`](../modules.md#iservermiddleware)[]

#### Defined in

packages/platform-web/lib/types/resources.d.ts:35

___

### modifyHtml

• `Optional` **modifyHtml**: (`initialValue`: `IDocumentProps`, `extraArg`: `IContext`, `context`: [`IServerPluginContext`](../modules.md#iserverplugincontext)) => `IDocumentProps` \| `Promise`<`IDocumentProps`\>

#### Type declaration

▸ (`initialValue`, `extraArg`, `context`): `IDocumentProps` \| `Promise`<`IDocumentProps`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `initialValue` | `IDocumentProps` |
| `extraArg` | `IContext` |
| `context` | [`IServerPluginContext`](../modules.md#iserverplugincontext) |

##### Returns

`IDocumentProps` \| `Promise`<`IDocumentProps`\>

#### Defined in

packages/platform-web/lib/types/resources.d.ts:38

___

### renderToHTML

• `Optional` **renderToHTML**: (`initialValue`: `IRenderToHTML`, `context`: [`IServerPluginContext`](../modules.md#iserverplugincontext)) => `IRenderToHTML` \| `Promise`<`IRenderToHTML`\>

#### Type declaration

▸ (`initialValue`, `context`): `IRenderToHTML` \| `Promise`<`IRenderToHTML`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `initialValue` | `IRenderToHTML` |
| `context` | [`IServerPluginContext`](../modules.md#iserverplugincontext) |

##### Returns

`IRenderToHTML` \| `Promise`<`IRenderToHTML`\>

#### Defined in

packages/platform-web/lib/types/resources.d.ts:37
