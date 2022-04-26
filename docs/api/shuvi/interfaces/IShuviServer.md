[shuvi](../README.md) / [Exports](../modules.md) / IShuviServer

# Interface: IShuviServer

## Table of contents

### Methods

- [close](IShuviServer.md#close)
- [getRequestHandler](IShuviServer.md#getrequesthandler)
- [init](IShuviServer.md#init)
- [listen](IShuviServer.md#listen)

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/service/lib/server/shuviServerTypes.d.ts:8

___

### getRequestHandler

▸ **getRequestHandler**(): `RequestListener`

#### Returns

`RequestListener`

#### Defined in

packages/service/lib/server/shuviServerTypes.d.ts:9

___

### init

▸ **init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/service/lib/server/shuviServerTypes.d.ts:6

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

packages/service/lib/server/shuviServerTypes.d.ts:7
