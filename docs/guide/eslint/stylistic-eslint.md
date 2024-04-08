---
outline: deep
editLink: true
---

# Stylistic ESLint config

LintUse provides a eslint config that can be used to enforce consistent code style across your project.

The config is based on the [@stylistic/eslint-plugin] plugin.

## Prerequisites

Install necessary dependencies:

::: code-group

```sh [npm]
npm install -D lodash
```

```sh [pnpm]
pnpm add -D lodash
```

```sh [yarn]
yarn add -D lodash
```

```sh [bun]
bun add -D lodash
```

:::

## Configuration

::: code-group

```js [eslint.config.js]
import { eslint } from "@ljtang2009/lint-use";
import _ from "lodash";

export default [
  {
    ..._.merge(_.cloneDeep(eslint.stylistic.default), {
      files: ["**/*.js", "**/*.cjs", "**/*.mjs", "**/*.ts"],
    }),
  },
];
```

:::

<!--@include: ./eslint-reference.md-->

<!--@include: ./eslint-usage.md-->

## Rules Reference

<script setup>
import { data } from '../../scripts/rules.data.js'
</script>
<ObjectVisualizer
  :data="data['eslint.stylistic.rules']"
  rootName="rules"
  :expandOnCreatedAndUpdated="() => true"
></ObjectVisualizer>

[@stylistic/eslint-plugin]: https://eslint.style/
