---
id: compiler
title: Compiler
---

## Remove Console

This transform allows for removing all `console.*` calls in application code (not node_modules). Similar to `babel-plugin-transform-remove-console`.

Remove all `console.*` calls:

```ts
export default {
  compiler: {
    removeConsole: true,
  },
};
```

Remove `console.*` output except `console.error`:

```ts
export default {
  compiler: {
    removeConsole: {
      exclude: ["error"],
    },
  },
};
```

## Remove React Properties

Allows to remove JSX properties. This is often used for testing. Similar to `babel-plugin-react-remove-properties`.

To remove properties matching the default regex `^data-test`:

```ts
export default {
  compiler: {
    reactRemoveProperties: true,
  },
};
```

To remove custom properties:

```ts
module.exports = {
  compiler: {
    // The regexes defined here are processed in Rust so the syntax is different from
    // JavaScript `RegExp`s. See https://docs.rs/regex.
    reactRemoveProperties: { properties: ["^data-custom$"] },
  },
};
```

## JSX ImportSource

Same as jsxImportSource in `jsconfig.json` or `tsconfig.json` and apply that. This is commonly used with libraries like Theme UI.

```ts
export default {
  compiler: {
    jsxImportSource: "preact",
  },
};
```

## Styled Components

Works like `babel-plugin-styled-components`.

```ts
type StyledComponentsOptions =
  | boolean
  | {
      // Enabled by default in development, disabled in production to reduce file size,
      // setting this will override the default for all environments.
      displayName?: boolean;
      // Enabled by default.
      ssr?: boolean;
      // Enabled by default.
      fileName?: boolean;
      // Empty by default.
      topLevelImportPaths?: string[];
      // Defaults to ["index"].
      meaninglessFileNames?: string[];
      // Enabled by default.
      cssProp?: boolean;
      // Empty by default.
      namespace?: string;
      // Not supported yet.
      minify?: boolean;
      // Not supported yet.
      transpileTemplateLiterals?: boolean;
      // Not supported yet.
      pure?: boolean;
    };

export default {
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: {} as StyledComponentsOptions,
  },
};
```

## Emotion CSS

```ts
type EmotionOptions =
  | boolean
  | {
      // default is true. It will be disabled when build type is production.
      sourceMap?: boolean;
      // default is 'dev-only'.
      autoLabel?: "never" | "dev-only" | "always";
      // default is '[local]'.
      // Allowed values: `[local]` `[filename]` and `[dirname]`
      // This option only works when autoLabel is set to 'dev-only' or 'always'.
      // It allows you to define the format of the resulting label.
      // The format is defined via string where variable parts are enclosed in square brackets [].
      // For example labelFormat: "my-classname--[local]", where [local] will be replaced with the name of the variable the result is assigned to.
      labelFormat?: string;
    };

export default {
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    emotion: {} as EmotionOptions,
  },
};
```

Only `importMap` in `@emotion/babel-plugin` is not supported for now.

## Decorators

This flag is only supported for compatibility with existing applications. We do not recommend using legacy decorators in new applications.

```ts
export default {
  compiler: {
    experimentalDecorators: true,
    // emitDecoratorMetadata: true,
  },
};
```

```ts
  // react
  reactRemoveProperties?: CompilerOptions['reactRemoveProperties'];
  jsxImportSource?: CompilerOptions['jsxImportSource'];

  // third-party libraries
  styledComponents?: CompilerOptions['styledComponents'];
  emotion?: CompilerOptions['emotion'];
```
