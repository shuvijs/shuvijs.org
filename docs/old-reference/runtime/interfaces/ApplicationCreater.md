[runtime](../overview.md) / ApplicationCreater

# Interface: ApplicationCreater<Context, Router, CompType, AppState\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Context` | extends [`IContext`](IContext.md) |
| `Router` | extends [`IRouter`](internal_.IRouter.md) = [`IRouter`](internal_.IRouter.md) |
| `CompType` | `any` |
| `AppState` | extends [`IAppState`](../overview.md#iappstate) = `any` |

## Callable

### ApplicationCreater

▸ **ApplicationCreater**(`context`, `options`): [`IApplication`](IApplication.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `Context` |
| `options` | `Object` |
| `options.appState?` | `AppState` |
| `options.render` | [`IAppRenderFn`](IAppRenderFn.md)<`Context`, `Router`, `CompType`\> |

#### Returns

[`IApplication`](IApplication.md)
