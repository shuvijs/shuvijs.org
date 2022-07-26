[runtime](../overview.md) / IViewClient

# Interface: IViewClient<CompType, Data, Router\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CompType` | `any` |
| `Data` | {} |
| `Router` | extends [`IRouter`](internal_.IRouter.md) = [`IRouter`](internal_.IRouter.md) |

## Hierarchy

- [`IView`](internal_.IView.md)<[`IClientRendererOptions`](internal_.IClientRendererOptions.md)<`CompType`, `Data`, `Router`\>\>

  ↳ **`IViewClient`**

## Table of contents

### Methods

- [renderApp](IViewClient.md#renderapp)

## Methods

### renderApp

▸ **renderApp**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IClientRendererOptions`](internal_.IClientRendererOptions.md)<`CompType`, `Data`, `Router`\> |

#### Returns

`void`

#### Inherited from

[IView](internal_.IView.md).[renderApp](internal_.IView.md#renderapp)
