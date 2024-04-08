---
outline: deep
editLink: true
---

# Stylelint Prettier config

LintUse provides a stylelint config for stylelint-prettier.

The config reference [stylelint-prettier].

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
    stylelint.prettier.default
  ),
};
```

:::

<!--@include: ./stylelint-reference.md-->

<!--@include: ./stylelint-usage.md-->

[stylelint-prettier]: https://github.com/prettier/stylelint-prettier
