[runtime](../overview.md) / [<internal\>](../modules/internal_.md) / ["@shuvi/router/lib/index"](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md) / NavigationGuardHook

# Interface: NavigationGuardHook<R\>

[internal](../modules/internal_.md).["@shuvi/router/lib/index"](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md).NavigationGuardHook

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends [`IRouteRecord`](IRouteRecord.md) = `any` |

## Callable

### NavigationGuardHook

▸ **NavigationGuardHook**(`to`, `from`, `next`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | [`IRoute`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRoute.md)<`R`\> |
| `from` | [`IRoute`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRoute.md)<`R`\> |
| `next` | (`nextObject?`: `string` \| ``false`` \| `Error` \| { `path?`: `string` ; `replace?`: `boolean`  }) => `void` |

#### Returns

`void`
