---
outline: deep
editLink: true
---

# Markdownlint config

LintUse provides a set of Markdownlint config that can be used to lint your code.

The config reference [markdownlint-cli2].

## Prerequisites

Install necessary dependencies:

::: code-group

```sh [npm]
npm install -D markdownlint-cli2
```

```sh [pnpm]
pnpm add -D markdownlint-cli2
```

```sh [yarn]
yarn add -D markdownlint-cli2
```

```sh [bun]
bun add -D markdownlint-cli2
```

:::

## Configuration

::: code-group

```js [.markdownlint-cli2.cjs]
const lintUse = require('@ljtang2009/lint-use');

module.exports = lintUse.markdownlint.default;
```

:::

Configure Stylelint reference [markdownlint-cli2 official configuration].

## Usage

```sh
npx markdownlint-cli2
```

## Rules Reference

<script setup>
import { data } from '@/scripts/rules.data.js'
</script>
<ObjectVisualizer
  :data="data['markdownlint.rules']"
  rootName="rules"
  :expandOnCreatedAndUpdated="() => true"
></ObjectVisualizer>

[markdownlint-cli2]: https://github.com/DavidAnson/markdownlint-cli2
[markdownlint-cli2 official configuration]: https://github.com/DavidAnson/markdownlint-cli2#markdownlint-cli2cjs-or-markdownlint-cli2mjs
