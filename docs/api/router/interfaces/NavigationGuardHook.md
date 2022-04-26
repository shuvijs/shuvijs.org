[@shuvi/router](../README.md) / [Exports](../modules.md) / NavigationGuardHook

# Interface: NavigationGuardHook<R\>

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
| `to` | [`IRoute`](IRoute.md)<`R`\> |
| `from` | [`IRoute`](IRoute.md)<`R`\> |
| `next` | (`nextObject?`: `string` \| ``false`` \| `Error` \| { `path?`: `string` ; `replace?`: `boolean`  }) => `void` |

#### Returns

`void`

#### Defined in

[packages/router/src/types/router.ts:26](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/router.ts#L26)
