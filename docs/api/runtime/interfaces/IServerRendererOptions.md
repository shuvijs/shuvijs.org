[runtime](../overview.md) / IServerRendererOptions

# Interface: IServerRendererOptions<CompType, Router\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CompType` | `any` |
| `Router` | extends [`IRouter`](internal_.IRouter.md) = [`IRouter`](internal_.IRouter.md) |

## Hierarchy

- [`IRenderOptions`](internal_.IRenderOptions.md)<[`IApplicationCreaterServerContext`](IApplicationCreaterServerContext.md), `Router`, `CompType`\>

  ↳ **`IServerRendererOptions`**

## Table of contents

### Properties

- [AppComponent](IServerRendererOptions.md#appcomponent)
- [appContext](IServerRendererOptions.md#appcontext)
- [manifest](IServerRendererOptions.md#manifest)
- [modelManager](IServerRendererOptions.md#modelmanager)
- [router](IServerRendererOptions.md#router)

### Methods

- [getAssetPublicUrl](IServerRendererOptions.md#getassetpublicurl)

## Properties

### AppComponent

• **AppComponent**: `CompType`

#### Inherited from

[IRenderOptions](internal_.IRenderOptions.md).[AppComponent](internal_.IRenderOptions.md#appcomponent)

___

### appContext

• **appContext**: [`IApplicationCreaterServerContext`](IApplicationCreaterServerContext.md)

#### Inherited from

[IRenderOptions](internal_.IRenderOptions.md).[appContext](internal_.IRenderOptions.md#appcontext)

___

### manifest

• **manifest**: `IManifest`

___

### modelManager

• **modelManager**: `IModelManager`

#### Inherited from

[IRenderOptions](internal_.IRenderOptions.md).[modelManager](internal_.IRenderOptions.md#modelmanager)

___

### router

• **router**: `Router`

#### Overrides

[IRenderOptions](internal_.IRenderOptions.md).[router](internal_.IRenderOptions.md#router)

## Methods

### getAssetPublicUrl

▸ **getAssetPublicUrl**(`path`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`string`
