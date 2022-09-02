[runtime](../overview.md) / [<internal\>](../modules/internal_.md) / IRequest

# Interface: IRequest

[internal](../modules/internal_.md).IRequest

## Hierarchy

- [`IIncomingMessage`](internal_.IIncomingMessage.md)

  ↳ **`IRequest`**

## Table of contents

### Properties

- [headers](internal_.IRequest.md#headers)
- [originalUrl](internal_.IRequest.md#originalurl)
- [params](internal_.IRequest.md#params)
- [parsedUrl](internal_.IRequest.md#parsedurl)
- [pathname](internal_.IRequest.md#pathname)
- [query](internal_.IRequest.md#query)
- [url](internal_.IRequest.md#url)

## Properties

### headers

• **headers**: `IncomingHttpHeaders`

#### Overrides

IIncomingMessage.headers

___

### originalUrl

• `Optional` **originalUrl**: `string`

#### Inherited from

[IIncomingMessage](internal_.IIncomingMessage.md).[originalUrl](internal_.IIncomingMessage.md#originalurl)

___

### params

• **params**: [`IParams`](../overview.md#iparams)

___

### parsedUrl

• **parsedUrl**: `UrlWithParsedQuery`

#### Inherited from

[IIncomingMessage](internal_.IIncomingMessage.md).[parsedUrl](internal_.IIncomingMessage.md#parsedurl)

___

### pathname

• **pathname**: `string`

___

### query

• **query**: `ParsedQuery`<`string`\>

___

### url

• **url**: `string`

#### Overrides

[IIncomingMessage](internal_.IIncomingMessage.md).[url](internal_.IIncomingMessage.md#url)
