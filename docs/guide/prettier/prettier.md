---
outline: deep
editLink: true
---

# Prettier config

LintUse provides a prettier config to help you format your code.

The config reference [Prettier].

## Prerequisites

Install necessary dependencies:

::: code-group

```sh [npm]
npm install -D prettier
```

```sh [pnpm]
pnpm add -D prettier
```

```sh [yarn]
yarn add -D prettier
```

```sh [bun]
bun add -D prettier
```

:::

## Configuration

::: code-group

```js [.prettierrc.mjs]
import { prettier } from '@ljtang2009/lint-use';

/** @type {import("prettier").Config} */
const config = {
  ...prettier.default,
};

export default config;
```

:::

Configure Stylelint reference [prettier official configuration].

## Rules Reference

<script setup>
import { data } from '@/scripts/rules.data.js'
</script>
<ObjectVisualizer
  :data="data['prettier.rules']"
  rootName="rules"
  :expandOnCreatedAndUpdated="() => true"
></ObjectVisualizer>

[Prettier]: https://prettier.io/
[prettier official configuration]: https://prettier.io/docs/en/configuration
