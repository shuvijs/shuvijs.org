[runtime](../overview.md) / [RuntimeServer](../modules/RuntimeServer.md) / IDocumentModule

# Interface: IDocumentModule

[RuntimeServer](../modules/RuntimeServer.md).IDocumentModule

## Table of contents

### Methods

- [getTemplateData](RuntimeServer.IDocumentModule.md#gettemplatedata)
- [onDocumentProps](RuntimeServer.IDocumentModule.md#ondocumentprops)

## Methods

### getTemplateData

▸ **getTemplateData**(`context`): [`ITemplateData`](RuntimeServer.ITemplateData.md) \| `Promise`<[`ITemplateData`](RuntimeServer.ITemplateData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`IServerAppContext`](internal_.IServerAppContext.md) |

#### Returns

[`ITemplateData`](RuntimeServer.ITemplateData.md) \| `Promise`<[`ITemplateData`](RuntimeServer.ITemplateData.md)\>

___

### onDocumentProps

▸ **onDocumentProps**(`documentProps`, `context`): [`IDocumentProps`](RuntimeServer.IDocumentProps.md) \| `Promise`<[`IDocumentProps`](RuntimeServer.IDocumentProps.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `documentProps` | [`IDocumentProps`](RuntimeServer.IDocumentProps.md) |
| `context` | [`IServerAppContext`](internal_.IServerAppContext.md) |

#### Returns

[`IDocumentProps`](RuntimeServer.IDocumentProps.md) \| `Promise`<[`IDocumentProps`](RuntimeServer.IDocumentProps.md)\>
