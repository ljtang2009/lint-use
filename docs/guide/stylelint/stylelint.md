---
outline: deep
editLink: true
---

# Stylelint config

LintUse provides a set of Stylelint config that can be used to lint your code.

The config reference [the official Stylelint documentation].

## Prerequisites

Install necessary dependencies:

::: code-group

```sh [npm]
npm install -D stylelint lodash
```

```sh [pnpm]
pnpm add -D stylelint lodash
```

```sh [yarn]
yarn add -D stylelint lodash
```

```sh [bun]
bun add -D stylelint lodash
```

:::

## Configuration

::: code-group

```js [stylelint.config.js]
import { stylelint } from "@ljtang2009/lint-use";
import _ from "lodash";

/** @type {import('stylelint').Config} */
export default {
  ..._.merge(
    stylelint.buildIn.default
  ),
};
```

:::

<!--@include: ./stylelint-reference.md-->

<!--@include: ./stylelint-usage.md-->

## Rules Reference

<script setup>
import { data } from '../../scripts/rules.data.js'
</script>
<ObjectVisualizer
  :data="data['stylelint.buildIn.rules']"
  rootName="rules"
  :expandOnCreatedAndUpdated="() => true"
></ObjectVisualizer>

[the official Stylelint documentation]: https://stylelint.io
