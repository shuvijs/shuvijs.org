[runtime](../overview.md) / [<internal\>](../modules/internal_.md) / IApplicationOptions

# Interface: IApplicationOptions<Context, Router, ModelManager\>

[internal](../modules/internal_.md).IApplicationOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `Context` | extends [`IContext`](IContext.md) |
| `Router` | extends [`IRouter`](internal_.IRouter.md) |
| `ModelManager` | extends `IModelManager` |

## Table of contents

### Properties

- [AppComponent](internal_.IApplicationOptions.md#appcomponent)
- [UserAppComponent](internal_.IApplicationOptions.md#userappcomponent)
- [context](internal_.IApplicationOptions.md#context)
- [modelManager](internal_.IApplicationOptions.md#modelmanager)
- [render](internal_.IApplicationOptions.md#render)
- [router](internal_.IApplicationOptions.md#router)

## Properties

### AppComponent

• **AppComponent**: `any`

___

### UserAppComponent

• `Optional` **UserAppComponent**: `any`

___

### context

• **context**: `Context`

___

### modelManager

• **modelManager**: `ModelManager`

___

### render

• **render**: [`IAppRenderFn`](IAppRenderFn.md)<`Context`, `Router`, `any`\>

___

### router

• **router**: `Router`
