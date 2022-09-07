[runtime](../overview.md) / IApplicationCreaterServerContext

# Interface: IApplicationCreaterServerContext

## Hierarchy

- [`IApplicationCreaterBase`](IApplicationCreaterBase.md)

  ↳ **`IApplicationCreaterServerContext`**

## Table of contents

### Properties

- [modelManager](IApplicationCreaterServerContext.md#modelmanager)
- [pageData](IApplicationCreaterServerContext.md#pagedata)
- [req](IApplicationCreaterServerContext.md#req)
- [routeProps](IApplicationCreaterServerContext.md#routeprops)
- [statusCode](IApplicationCreaterServerContext.md#statuscode)

## Properties

### modelManager

• `Optional` **modelManager**: `IModelManager`

#### Inherited from

[IApplicationCreaterBase](IApplicationCreaterBase.md).[modelManager](IApplicationCreaterBase.md#modelmanager)

___

### pageData

• `Optional` **pageData**: `any`

#### Inherited from

[IApplicationCreaterBase](IApplicationCreaterBase.md).[pageData](IApplicationCreaterBase.md#pagedata)

___

### req

• **req**: `IncomingMessage` & { `[x: string]`: `any`;  }

___

### routeProps

• `Optional` **routeProps**: `Object`

#### Index signature

▪ [x: `string`]: `any`

#### Inherited from

[IApplicationCreaterBase](IApplicationCreaterBase.md).[routeProps](IApplicationCreaterBase.md#routeprops)

___

### statusCode

• `Optional` **statusCode**: `number`
