---
outline: deep
editLink: true
---

# JSON ESLint config

LintUse provides a JSON ESLint config that can be used to lint JSON files.

The config is based on the [eslint-plugin-jsonc] plugin.

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
    ..._.merge(_.cloneDeep(eslint.json.default), {
      files:   ['**/*.json', '**/*.jsonc', '**/*.json5'],
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
  :data="data['eslint.json.rules']"
  rootName="rules"
  :expandOnCreatedAndUpdated="() => true"
></ObjectVisualizer>

[eslint-plugin-jsonc]: https://github.com/ota-meshi/eslint-plugin-jsonc
