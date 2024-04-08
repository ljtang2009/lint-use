---
outline: deep
editLink: true
---

# Stylelint order config

LintUse provides a set of Stylelint config that can be used to order your code.

The config reference [stylelint-config-clean-order].

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
    stylelint.order.default
  ),
};
```

:::

<!--@include: ./stylelint-reference.md-->

<!--@include: ./stylelint-usage.md-->

[stylelint-config-clean-order]: https://github.com/kutsan/stylelint-config-clean-order
