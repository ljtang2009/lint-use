---
outline: deep
editLink: true
---

# Typescript ESLint config

LintUse provides a Typescript ESLint config to help you lint your Typescript code.

The config is based on the [typescript-eslint] plugin.

[typescript-eslint]: https://typescript-eslint.io

## Prerequisites

- Install necessary dependencies:

::: code-group

```sh [npm]
npm install -D lodash desm
```

```sh [pnpm]
pnpm add -D lodash desm
```

```sh [yarn]
yarn add -D lodash desm
```

```sh [bun]
bun add -D lodash desm
```

:::

- Create a `tsconfig.json` file.

See [What is a tsconfig.json] for more information.

## Configuration

::: code-group

```js [eslint.config.js]
import { eslint } from "@ljtang2009/lint-use";
import _ from "lodash";
import { dirname, join } from 'desm';

export default [
  {
    ..._.merge(_.cloneDeep(eslint.ts.default), {
      files:           ['src/**/*.ts'],
      languageOptions: {
        parserOptions: {
          project:         join(import.meta.url, 'tsconfig.json'),
          tsconfigRootDir: dirname(import.meta.url),
        },
      },
    }),
  },
];
```

:::

<!--@include: ./eslint-reference.md-->

<!--@include: ./eslint-usage.md-->

## Rules Reference

<script setup>
import { data } from '@/scripts/rules.data.js'
</script>
<ObjectVisualizer
  :data="data['eslint.ts.rules']"
  rootName="rules"
  :expandOnCreatedAndUpdated="() => true"
></ObjectVisualizer>

[What is a tsconfig.json]: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
