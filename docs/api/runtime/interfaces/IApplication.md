[runtime](../overview.md) / IApplication

# Interface: IApplication

## Implemented by

- [`Application`](../classes/Application.md)

## Table of contents

### Properties

- [AppComponent](IApplication.md#appcomponent)
- [pluginManager](IApplication.md#pluginmanager)
- [router](IApplication.md#router)

### Methods

- [dispose](IApplication.md#dispose)
- [rerender](IApplication.md#rerender)
- [run](IApplication.md#run)

## Properties

### AppComponent

• **AppComponent**: [`IAppComponent`](internal_.IAppComponent.md)

___

### pluginManager

• **pluginManager**: [`HookManager`](../modules/internal_.md#hookmanager)<{ `dispose`: [`AsyncParallelHook`](../modules/internal_.md#asyncparallelhook)<`void`, `void`, `void`\> ; `getAppComponent`: [`AsyncSeriesWaterfallHook`](../modules/internal_.md#asyncserieswaterfallhook)<`unknown`, [`IContext`](IContext.md)\> ; `getAppContext`: [`AsyncSeriesWaterfallHook`](../modules/internal_.md#asyncserieswaterfallhook)<[`IContext`](IContext.md), `void`\> ; `getRootAppComponent`: [`AsyncSeriesWaterfallHook`](../modules/internal_.md#asyncserieswaterfallhook)<`unknown`, [`IContext`](IContext.md)\> ; `init`: [`AsyncParallelHook`](../modules/internal_.md#asyncparallelhook)<`void`, `void`, `void`\>  }, `void`, [`CustomRuntimePluginHooks`](internal_.CustomRuntimePluginHooks.md)\>

___

### router

• `Optional` **router**: [`IRouter`](internal_.IRouter.md)<`any`\>

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

___

### rerender

▸ **rerender**(`config?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | [`IRerenderConfig`](../modules/internal_.md#irerenderconfig) |

#### Returns

`Promise`<`void`\>

___

### run

▸ **run**(): `Promise`<{ `[k: string]`: `any`;  }\>

#### Returns

`Promise`<{ `[k: string]`: `any`;  }\>
