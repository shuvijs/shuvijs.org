[@shuvi/router](../README.md) / [Exports](../modules.md) / NavigationGuardHookWithContext

# Interface: NavigationGuardHookWithContext<R\>

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
| `to` | [`IRoute`](IRoute.md)<`R`\> |
| `from` | [`IRoute`](IRoute.md)<`R`\> |
| `next` | (`nextObject?`: `string` \| ``false`` \| `Error` \| { `path?`: `string` ; `replace?`: `boolean`  }) => `void` |
| `context` | [`NavigationHookContext`](NavigationHookContext.md) |

#### Returns

`void`

#### Defined in

[packages/router/src/types/router.ts:36](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L36)
