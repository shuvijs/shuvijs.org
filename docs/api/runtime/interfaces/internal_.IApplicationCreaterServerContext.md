[runtime](../overview.md) / [<internal\>](../modules/internal_.md) / IApplicationCreaterServerContext

# Interface: IApplicationCreaterServerContext

[internal](../modules/internal_.md).IApplicationCreaterServerContext

## Hierarchy

- [`IApplicationCreaterBase`](internal_.IApplicationCreaterBase.md)

  ↳ **`IApplicationCreaterServerContext`**

## Table of contents

### Properties

- [modelManager](internal_.IApplicationCreaterServerContext.md#modelmanager)
- [pageData](internal_.IApplicationCreaterServerContext.md#pagedata)
- [req](internal_.IApplicationCreaterServerContext.md#req)
- [routeProps](internal_.IApplicationCreaterServerContext.md#routeprops)
- [statusCode](internal_.IApplicationCreaterServerContext.md#statuscode)

## Properties

### modelManager

• `Optional` **modelManager**: `IModelManager`

#### Inherited from

[IApplicationCreaterBase](internal_.IApplicationCreaterBase.md).[modelManager](internal_.IApplicationCreaterBase.md#modelmanager)

___

### pageData

• `Optional` **pageData**: `any`

#### Inherited from

[IApplicationCreaterBase](internal_.IApplicationCreaterBase.md).[pageData](internal_.IApplicationCreaterBase.md#pagedata)

___

### req

• **req**: `IncomingMessage` & { `[x: string]`: `any`;  }

___

### routeProps

• `Optional` **routeProps**: `Object`

#### Index signature

▪ [x: `string`]: `any`

#### Inherited from

[IApplicationCreaterBase](internal_.IApplicationCreaterBase.md).[routeProps](internal_.IApplicationCreaterBase.md#routeprops)

___

### statusCode

• `Optional` **statusCode**: `number`
