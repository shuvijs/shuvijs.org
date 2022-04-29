[runtime](../overview.md) / [<internal\>](../modules/internal_.md) / IView

# Interface: IView<RenderOption, RenderResult\>

[internal](../modules/internal_.md).IView

## Type parameters

| Name | Type |
| :------ | :------ |
| `RenderOption` | extends [`IRenderOptions`](internal_.IRenderOptions.md)<[`IContext`](IContext.md), [`IRouter`](internal_.IRouter.md)\> = `any` |
| `RenderResult` | `void` |

## Hierarchy

- **`IView`**

  ↳ [`IViewClient`](IViewClient.md)

  ↳ [`IViewServer`](IViewServer.md)

## Table of contents

### Methods

- [renderApp](internal_.IView.md#renderapp)

## Methods

### renderApp

▸ **renderApp**(`options`): `RenderResult`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `RenderOption` |

#### Returns

`RenderResult`
