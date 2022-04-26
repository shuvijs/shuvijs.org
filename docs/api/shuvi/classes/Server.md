[shuvi](../README.md) / [Exports](../modules.md) / Server

# Class: Server

## Table of contents

### Constructors

- [constructor](Server.md#constructor)

### Properties

- [\_checkPort](Server.md#_checkport)
- [\_finalhandler](Server.md#_finalhandler)
- [\_handleRequest](Server.md#_handlerequest)
- [\_router](Server.md#_router)
- [\_server](Server.md#_server)
- [\_setupRouter](Server.md#_setuprouter)
- [hostname](Server.md#hostname)
- [port](Server.md#port)

### Methods

- [close](Server.md#close)
- [getRequestHandler](Server.md#getrequesthandler)
- [listen](Server.md#listen)
- [use](Server.md#use)

## Constructors

### constructor

• **new Server**()

#### Defined in

packages/service/lib/server/http-server/server.d.ts:7

## Properties

### \_checkPort

• `Private` **\_checkPort**: `any`

#### Defined in

packages/service/lib/server/http-server/server.d.ts:16

___

### \_finalhandler

• `Private` **\_finalhandler**: `any`

#### Defined in

packages/service/lib/server/http-server/server.d.ts:15

___

### \_handleRequest

• `Private` **\_handleRequest**: `any`

#### Defined in

packages/service/lib/server/http-server/server.d.ts:14

___

### \_router

• `Private` **\_router**: `any`

#### Defined in

packages/service/lib/server/http-server/server.d.ts:6

___

### \_server

• `Private` **\_server**: `any`

#### Defined in

packages/service/lib/server/http-server/server.d.ts:5

___

### \_setupRouter

• `Private` **\_setupRouter**: `any`

#### Defined in

packages/service/lib/server/http-server/server.d.ts:13

___

### hostname

• **hostname**: `undefined` \| `string`

#### Defined in

packages/service/lib/server/http-server/server.d.ts:3

___

### port

• **port**: `undefined` \| `number`

#### Defined in

packages/service/lib/server/http-server/server.d.ts:4

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/service/lib/server/http-server/server.d.ts:12

___

### getRequestHandler

▸ **getRequestHandler**(): (`req`: `any`, `res`: `any`, `next?`: [`INextFunc`](../modules.md#inextfunc)) => `void`

#### Returns

`fn`

▸ (`req`, `res`, `next?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `any` |
| `res` | `any` |
| `next?` | [`INextFunc`](../modules.md#inextfunc) |

##### Returns

`void`

#### Defined in

packages/service/lib/server/http-server/server.d.ts:10

___

### listen

▸ **listen**(`port`, `hostname?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |
| `hostname?` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/service/lib/server/http-server/server.d.ts:11

___

### use

▸ **use**(`fn`): [`Server`](Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`IMiddlewareHandler`](../modules.md#imiddlewarehandler) |

#### Returns

[`Server`](Server.md)

#### Defined in

packages/service/lib/server/http-server/server.d.ts:8

▸ **use**(`path`, `fn`): [`Server`](Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `fn` | [`IMiddlewareHandler`](../modules.md#imiddlewarehandler) |

#### Returns

[`Server`](Server.md)

#### Defined in

packages/service/lib/server/http-server/server.d.ts:9
