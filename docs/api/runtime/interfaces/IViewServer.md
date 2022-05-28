[runtime](../overview.md) / IViewServer

# Interface: IViewServer<CompType, Data, Router\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CompType` | `any` |
| `Data` | {} |
| `Router` | extends [`IRouter`](internal_.IRouter.md) = [`IRouter`](internal_.IRouter.md) |

## Hierarchy

- [`IView`](internal_.IView.md)<[`IServerRendererOptions`](IServerRendererOptions.md)<`CompType`, `Router`\>, `Promise`<[`IRenderAppResult`](../overview.md#irenderappresult)<`Data`\>\>\>

  ↳ **`IViewServer`**

## Table of contents

### Methods

- [renderApp](IViewServer.md#renderapp)

## Methods

### renderApp

▸ **renderApp**(`options`): `Promise`<[`IRenderAppResult`](../overview.md#irenderappresult)<`Data`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IServerRendererOptions`](IServerRendererOptions.md)<`CompType`, `Router`\> |

#### Returns

`Promise`<[`IRenderAppResult`](../overview.md#irenderappresult)<`Data`\>\>

#### Inherited from

[IView](internal_.IView.md).[renderApp](internal_.IView.md#renderapp)
