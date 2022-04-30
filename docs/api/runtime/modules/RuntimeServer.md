[runtime](../overview.md) / RuntimeServer

# Namespace: RuntimeServer

## Table of contents

### Interfaces

- [IDocumentModule](../interfaces/RuntimeServer.IDocumentModule.md)
- [IDocumentProps](../interfaces/RuntimeServer.IDocumentProps.md)
- [ITemplateData](../interfaces/RuntimeServer.ITemplateData.md)

### Type aliases

- [IApiRequestHandler](RuntimeServer.md#iapirequesthandler)
- [IApiRoutes](RuntimeServer.md#iapiroutes)
- [IMiddlewareRoutes](RuntimeServer.md#imiddlewareroutes)
- [IRenderToHTML](RuntimeServer.md#irendertohtml)
- [IRequestHandlerWithNext](RuntimeServer.md#irequesthandlerwithnext)

## Type aliases

### IApiRequestHandler

Ƭ **IApiRequestHandler**<`T`\>: (`req`: [`IApiRequest`](internal_.md#iapirequest), `res`: [`IApiResponse`](internal_.md#iapiresponse)<`T`\>) => `void` \| `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Type declaration

▸ (`req`, `res`): `void` \| `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`IApiRequest`](internal_.md#iapirequest) |
| `res` | [`IApiResponse`](internal_.md#iapiresponse)<`T`\> |

##### Returns

`void` \| `Promise`<`void`\>

___

### IApiRoutes

Ƭ **IApiRoutes**: { `apiModule`: [`IApiModule`](../interfaces/internal_.IApiModule.md) ; `path`: `string`  }[]

___

### IMiddlewareRoutes

Ƭ **IMiddlewareRoutes**: { `middlewares`: [`IRequestHandlerWithNext`](RuntimeServer.md#irequesthandlerwithnext)[] ; `path`: `string`  }[]

___

### IRenderToHTML

Ƭ **IRenderToHTML**: (`req`: `IncomingMessage`, `res`: `ServerResponse`) => `Promise`<`string` \| ``null``\>

#### Type declaration

▸ (`req`, `res`): `Promise`<`string` \| ``null``\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `IncomingMessage` |
| `res` | `ServerResponse` |

##### Returns

`Promise`<`string` \| ``null``\>

___

### IRequestHandlerWithNext

Ƭ **IRequestHandlerWithNext**: (`req`: [`IRequest`](../interfaces/internal_.IRequest.md), `res`: [`IResponse`](../interfaces/internal_.IResponse.md), `next`: [`INextFunc`](internal_.md#inextfunc)) => `void`

#### Type declaration

▸ (`req`, `res`, `next`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`IRequest`](../interfaces/internal_.IRequest.md) |
| `res` | [`IResponse`](../interfaces/internal_.IResponse.md) |
| `next` | [`INextFunc`](internal_.md#inextfunc) |

##### Returns

`void`
