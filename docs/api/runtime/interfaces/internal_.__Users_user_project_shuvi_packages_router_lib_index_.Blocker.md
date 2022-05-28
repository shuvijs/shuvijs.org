[runtime](../overview.md) / [<internal\>](../modules/internal_.md) / ["@shuvi/router/lib/index"](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md) / Blocker

# Interface: Blocker<S\>

[internal](../modules/internal_.md).["@shuvi/router/lib/index"](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md).Blocker

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#state) = [`State`](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md#state) |

## Callable

### Blocker

▸ **Blocker**(`tx`): `void`

A function that receives transitions when navigation is blocked.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | [`Transition`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.Transition.md)<`S`\> |

#### Returns

`void`
