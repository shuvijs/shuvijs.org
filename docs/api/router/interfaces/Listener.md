[@shuvi/router](../README.md) / [Exports](../modules.md) / Listener

# Interface: Listener<S\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](../modules.md#state) = [`State`](../modules.md#state) |

## Callable

### Listener

▸ **Listener**(`update`): `void`

A function that receives notifications about location changes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `update` | [`Update`](Update.md)<`S`\> |

#### Returns

`void`

#### Defined in

[packages/router/src/types/history.ts:173](https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L173)
