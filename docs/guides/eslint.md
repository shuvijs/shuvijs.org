---
id: ESLint
title: ESLint
sidebar_position: 4.9
description: Shuvi.js provides an integrated ESLint experience by default. These conformance rules help you use Shuvi.js in the optimal way.
---

# ESLint

Shuvi.js provides an integrated [ESLint](https://eslint.org/) experience out of the box. Add `shuvi lint` as a script to `package.json`:

```json
"scripts": {
  "lint": "shuvi lint"
}
```

Then run `npm run lint` or `yarn lint`:

```bash
yarn lint
```

If you don't already have ESLint configured in your application, you will be guided through the installation and configuration process.

```bash
yarn lint

# You'll see a prompt like this:
#
# ? How would you like to configure ESLint?
#
# ❯   Base configuration (recommended)
#     Cancel
```

- **Base**: Includes Shuvi.js' base ESLint configuration. This is the recommended configuration for developers setting up ESLint for the first time.

  ```json
  {
    "extends": "shuvi"
  }
  ```

- **Cancel**: Does not include any ESLint configuration. Only select this option if you plan on setting up your own custom ESLint configuration.

If the recommended configuration option is selected, Shuvi.js will automatically install `eslint` and `eslint-config-shuvi` as development dependencies in your application and create an `.eslintrc.json` file in the project root directory containing the recommended configuration.

You can now run `shuvi lint` every time you want to run ESLint to catch errors.

We recommend using an appropriate [integration](https://eslint.org/docs/user-guide/integrations#editors) to view warnings and errors directly in your code editor during development.

## ESLint Config

The default configuration (`eslint-config-shuvi`) includes everything you need to have an optimal out-of-the-box linting experience in Shuvi.js. If you do not have ESLint already configured in your application, we recommend using `shuvi lint` to set up ESLint along with this configuration.

> If you would like to use `eslint-config-shuvi` along with other ESLint configurations, refer to the [Additional Configurations](#additional-configurations) section to learn how to do so without causing any conflicts.

Recommended rule-sets from the following ESLint plugins are all used within `eslint-config-shuvi`:

\- [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react)  
\- [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks)  
\- [`eslint-plugin-shuvi`](https://www.npmjs.com/package/@shuvi/eslint-plugin-shuvi)  

## ESLint Plugin

Shuvi.js provides an ESLint plugin, [`eslint-plugin-shuvi`](https://www.npmjs.com/package/@shuvi/eslint-plugin-shuvi), already bundled within the base configuration that makes it possible to catch common issues and problems in a Shuvi.js application. The full set of rules is as follows:

\- ✔: Enabled in the recommended configuration

|     | Rule                                                                                                                        | Description                                                                                        |
| :-: | --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| ✔️  | [@shuvi/shuvi/no-head-element](/docs/guides/rules/no-head-element.md)                                                             | Prevent usage of `<head>` element.                                                                 |
| ✔️  | [@shuvi/shuvi/no-html-link-for-pages](/docs/guides/rules/no-html-link-for-pages.md)                                               | Prevent usage of `<a>` elements to navigate to internal Shuvi.js pages.                             |
| ✔️  | @shuvi/shuvi/no-typos-page                                                                                                   | Prevent common typos in [Shuvi.js's data fetching functions](/docs/guides/data-fetching.md) |
| ✔️  | @shuvi/shuvi/no-typos-custom-app                                                                                             | Prevent common typos in [Custom App](/docs/guides/custom-behaviors/custom-app.md) |
| ✔️  | @shuvi/shuvi/no-typos-custom-server                                                                                          | Prevent common typos in [Custom Server](/docs/guides/custom-behaviors/custom-server.md) |

If you already have ESLint configured in your application, we recommend extending from this plugin directly instead of including `eslint-config-shuvi` unless a few conditions are met. Refer to the [Recommended Plugin Ruleset](#recommended-plugin-ruleset) to learn more.


## Linting Custom Directories and Files

By default, Shuvi.js will run ESLint for all files in the `src`.

```js
module.exports = {
  eslint: {
    dirs: ['utils']
  },
}
```

Similarly, the `--dir` and `--file` flags can be used for `shuvi lint` to lint specific directories and files:

```bash
shuvi lint --dir utils --file bar.js
```

## Caching

To improve performance, information of files processed by ESLint are cached by default. This is stored in `.shuvi/cache`. If you include any ESLint rules that depend on more than the contents of a single source file and need to disable the cache, use the `--no-cache` flag with `shuvi lint`.

```bash
shuvi lint --no-cache
```

## Disabling Rules

If you would like to modify or disable any rules provided by the supported plugins (`react`, `react-hooks`, `shuvi`), you can directly change them using the `rules` property in your `.eslintrc`:

```json
{
  "extends": "shuvi",
  "rules": {
    "react/no-unescaped-entities": "off",
    "@shuvi/shuvi/no-page-custom-font": "off"
  }
}
```

## Usage With Other Tools

### Prettier

ESLint also contains code formatting rules, which can conflict with your existing [Prettier](https://prettier.io/) setup. We recommend including [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) in your ESLint config to make ESLint and Prettier work together.

First, install the dependency:

```bash
npm install --save-dev eslint-config-prettier
# or
yarn add --dev eslint-config-prettier
```

Then, add `prettier` to your existing ESLint config:

```json
{
  "extends": ["shuvi", "prettier"]
}
```

### lint-staged

If you would like to use `shuvi lint` with [lint-staged](https://github.com/okonet/lint-staged) to run the linter on staged git files, you'll have to add the following to the `.lintstagedrc.js` file in the root of your project in order to specify usage of the `--file` flag.

```js
const path = require('path')

const buildEslintCommand = (filenames) =>
  `shuvi lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
}
```

## Migrating Existing Config

### Recommended Plugin Ruleset

If you already have ESLint configured in your application and any of the following conditions are true:

\- You have one or more of the following plugins already installed (either separately or through a different config such as `airbnb` or `react-app`):

  \- `react`  
  \- `react-hooks`  
  \- `jsx-a11y`  
  \- `import`  
  
\- You've defined specific `parserOptions` that are different from how Babel is configured within Shuvi.js (this is not recommended unless you have customized your Babel configuration)
\- You have `eslint-plugin-import` installed with Node.js and/or TypeScript [resolvers](https://github.com/benmosher/eslint-plugin-import#resolvers) defined to handle imports

Then we recommend either removing these settings if you prefer how these properties have been configured within [`eslint-config-shuvi`](https://github.com/vercel/shuvi.js/blob/canary/packages/eslint-config-shuvi/index.js) or extending directly from the Shuvi.js ESLint plugin instead:

```js
module.exports = {
  extends: [
    //...
    'plugin:@shuvi/shuvi/recommended',
  ],
}
```

The plugin can be installed normally in your project without needing to run `shuvi lint`:

```bash
npm install --save-dev @shuvi/eslint-plugin-shuvi
# or
yarn add --dev @shuvi/eslint-plugin-shuvi
```

This eliminates the risk of collisions or errors that can occur due to importing the same plugin or parser across multiple configurations.

### Additional Configurations

If you already use a separate ESLint configuration and want to include `eslint-config-shuvi`, ensure that it is extended last after other configurations. For example:

```
{
  "extends": ["eslint:recommended", "shuvi"]
}
```

The `shuvi` configuration already handles setting default values for the `parser`, `plugins` and `settings` properties. There is no need to manually re-declare any of these properties unless you need a different configuration for your use case. If you include any other shareable configurations, **you will need to make sure that these properties are not overwritten or modified**. Otherwise, we recommend removing any configurations that share behavior with the `shuvi` configuration or extending directly from the Shuvi.js ESLint plugin as mentioned above.
