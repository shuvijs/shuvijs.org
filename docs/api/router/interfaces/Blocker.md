[@shuvi/router](../README.md) / [Exports](../modules.md) / Blocker

# Interface: Blocker<S\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](../modules.md#state) = [`State`](../modules.md#state) |

## Callable

### Blocker

▸ **Blocker**(`tx`): `void`

A function that receives transitions when navigation is blocked.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | [`Transition`](Transition.md)<`S`\> |

#### Returns

`void`

#### Defined in

[packages/router/src/types/history.ts:191](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L191)
