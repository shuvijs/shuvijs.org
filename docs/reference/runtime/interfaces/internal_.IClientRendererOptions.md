[runtime](../overview.md) / [<internal\>](../modules/internal_.md) / IClientRendererOptions

# Interface: IClientRendererOptions<CompType, Data, Router\>

[internal](../modules/internal_.md).IClientRendererOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `CompType` | `any` |
| `Data` | {} |
| `Router` | extends [`IRouter`](internal_.IRouter.md)<`any`\> = [`IRouter`](internal_.IRouter.md)<`any`\> |

## Hierarchy

- [`IRenderOptions`](internal_.IRenderOptions.md)<[`IApplicationCreaterClientContext`](IApplicationCreaterClientContext.md), `Router`, `CompType`\>

  ↳ **`IClientRendererOptions`**

## Table of contents

### Properties

- [AppComponent](internal_.IClientRendererOptions.md#appcomponent)
- [appContainer](internal_.IClientRendererOptions.md#appcontainer)
- [appContext](internal_.IClientRendererOptions.md#appcontext)
- [appData](internal_.IClientRendererOptions.md#appdata)
- [modelManager](internal_.IClientRendererOptions.md#modelmanager)
- [router](internal_.IClientRendererOptions.md#router)

## Properties

### AppComponent

• **AppComponent**: `CompType`

#### Inherited from

[IRenderOptions](internal_.IRenderOptions.md).[AppComponent](internal_.IRenderOptions.md#appcomponent)

___

### appContainer

• **appContainer**: `HTMLElement`

___

### appContext

• **appContext**: [`IApplicationCreaterClientContext`](IApplicationCreaterClientContext.md)

#### Inherited from

[IRenderOptions](internal_.IRenderOptions.md).[appContext](internal_.IRenderOptions.md#appcontext)

___

### appData

• **appData**: [`IAppData`](../overview.md#iappdata)<`Data`, `any`\>

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
