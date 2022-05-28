[runtime](../overview.md) / Application

# Class: Application<Context, Router, ModelManager\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Context` | extends [`IContext`](../interfaces/IContext.md) |
| `Router` | extends [`IRouter`](../interfaces/internal_.IRouter.md) = [`IRouter`](../interfaces/internal_.IRouter.md) |
| `ModelManager` | extends `IModelManager` = `IModelManager` |

## Implements

- [`IApplication`](../interfaces/IApplication.md)

## Table of contents

### Constructors

- [constructor](Application.md#constructor)

### Properties

- [AppComponent](Application.md#appcomponent)
- [\_UserAppComponent](Application.md#_userappcomponent)
- [\_context](Application.md#_context)
- [\_createApplicationContext](Application.md#_createapplicationcontext)
- [\_getAppComponent](Application.md#_getappcomponent)
- [\_init](Application.md#_init)
- [\_modelManager](Application.md#_modelmanager)
- [\_render](Application.md#_render)
- [\_renderFn](Application.md#_renderfn)
- [pluginManager](Application.md#pluginmanager)
- [router](Application.md#router)

### Methods

- [dispose](Application.md#dispose)
- [getContext](Application.md#getcontext)
- [rerender](Application.md#rerender)
- [run](Application.md#run)

## Constructors

### constructor

• **new Application**<`Context`, `Router`, `ModelManager`\>(`options`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Context` | extends [`IContext`](../interfaces/IContext.md) |
| `Router` | extends [`IRouter`](../interfaces/internal_.IRouter.md)<`any`, `Router`\> = [`IRouter`](../interfaces/internal_.IRouter.md)<`any`\> |
| `ModelManager` | extends `IModelManager` = `IModelManager` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IApplicationOptions`](../interfaces/internal_.IApplicationOptions.md)<`Context`, `Router`, `ModelManager`\> |

## Properties

### AppComponent

• **AppComponent**: `any`

#### Implementation of

[IApplication](../interfaces/IApplication.md).[AppComponent](../interfaces/IApplication.md#appcomponent)

___

### \_UserAppComponent

• `Private` `Optional` **\_UserAppComponent**: `any`

___

### \_context

• `Private` **\_context**: `any`

___

### \_createApplicationContext

• `Private` **\_createApplicationContext**: `any`

___

### \_getAppComponent

• `Private` **\_getAppComponent**: `any`

___

### \_init

• `Private` **\_init**: `any`

___

### \_modelManager

• `Private` **\_modelManager**: `any`

___

### \_render

• `Private` **\_render**: `any`

___

### \_renderFn

• `Private` **\_renderFn**: `any`

___

### pluginManager

• **pluginManager**: [`HookManager`](../modules/internal_.md#hookmanager)<{ `dispose`: [`AsyncParallelHook`](../modules/internal_.md#asyncparallelhook)<`void`, `void`, `void`\> ; `getAppComponent`: [`AsyncSeriesWaterfallHook`](../modules/internal_.md#asyncserieswaterfallhook)<`unknown`, [`IContext`](../interfaces/IContext.md)\> ; `getAppContext`: [`AsyncSeriesWaterfallHook`](../modules/internal_.md#asyncserieswaterfallhook)<[`IContext`](../interfaces/IContext.md), `void`\> ; `getRootAppComponent`: [`AsyncSeriesWaterfallHook`](../modules/internal_.md#asyncserieswaterfallhook)<`unknown`, [`IContext`](../interfaces/IContext.md)\> ; `init`: [`AsyncParallelHook`](../modules/internal_.md#asyncparallelhook)<`void`, `void`, `void`\>  }, `void`, [`CustomRuntimePluginHooks`](../interfaces/internal_.CustomRuntimePluginHooks.md)\>

#### Implementation of

[IApplication](../interfaces/IApplication.md).[pluginManager](../interfaces/IApplication.md#pluginmanager)

___

### router

• **router**: `Router`

#### Implementation of

[IApplication](../interfaces/IApplication.md).[router](../interfaces/IApplication.md#router)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[IApplication](../interfaces/IApplication.md).[dispose](../interfaces/IApplication.md#dispose)

___

### getContext

▸ **getContext**(): `Context`

#### Returns

`Context`

___

### rerender

▸ **rerender**(`__namedParameters?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters?` | [`IRerenderConfig`](../modules/internal_.md#irerenderconfig) |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IApplication](../interfaces/IApplication.md).[rerender](../interfaces/IApplication.md#rerender)

___

### run

▸ **run**(): `Promise`<`Context`\>

#### Returns

`Promise`<`Context`\>

#### Implementation of

[IApplication](../interfaces/IApplication.md).[run](../interfaces/IApplication.md#run)
