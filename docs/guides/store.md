---
sidebar_position: 2
id: Store
---

Shuvi provides a feature to manage store by [Doura](https://dourajs.github.io/doura/). The global Store state on Server-side will be delivered to Client-side automatically.

`@shuvi/runtime/model` offer [Doura](https://dourajs.github.io/doura/) features and types.

Take a look at the simple example as the following:

```tsx
import { Loader } from "@shuvi/runtime";
import { defineModel, useModel } from "@shuvi/runtime/model";

const sleep = (time: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, time);
  });

const baseName = "base";
const base = defineModel({
  state: {
    step: 1,
  },
  actions: {
    addStep() {
      this.step++;
    },
    async addStepAsync() {
      await sleep(100);
      this.addStep();
    },
  },
});

export default function Index() {
  const baseModel = useModel(baseName, base);
  return (
    <div>
      <span>{baseModel.step}</span>
      <button
        onClick={() => {
          baseModel.addStepAsync();
        }}
      >
        Add Step
      </button>
    </div>
  );
}

export const loader: Loader = async (ctx) => {
  // access store from ctx.appContext
  const store = ctx.appContext.store;
  const baseStore = store.getModel(baseName, base);
  await baseStore.addStepAsync();
  return {};
};
```

:::info More Features
[More features about Doura, click me !](https://dourajs.github.io/doura/docs/react/component-state)
:::
