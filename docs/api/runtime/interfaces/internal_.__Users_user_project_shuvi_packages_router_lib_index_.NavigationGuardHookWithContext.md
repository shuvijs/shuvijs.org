[runtime](../overview.md) / [<internal\>](../modules/internal_.md) / ["@shuvi/router/lib/index"](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md) / NavigationGuardHookWithContext

# Interface: NavigationGuardHookWithContext<R\>

[internal](../modules/internal_.md).["@shuvi/router/lib/index"](../modules/internal_.__Users_user_project_shuvi_packages_router_lib_index_.md).NavigationGuardHookWithContext

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends [`IRouteRecord`](IRouteRecord.md) = `any` |

## Callable

### NavigationGuardHookWithContext

▸ **NavigationGuardHookWithContext**(`to`, `from`, `next`, `context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | [`IRoute`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRoute.md)<`R`\> |
| `from` | [`IRoute`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.IRoute.md)<`R`\> |
| `next` | (`nextObject?`: `string` \| ``false`` \| `Error` \| { `path?`: `string` ; `replace?`: `boolean`  }) => `void` |
| `context` | [`NavigationHookContext`](internal_.__Users_user_project_shuvi_packages_router_lib_index_.NavigationHookContext.md) |

#### Returns

`void`
