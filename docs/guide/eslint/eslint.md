---
outline: deep
editLink: true
---

# ESLint rules config

LintUse provides a set of ESLint rules that can be used to lint your code.

The rules reference [the official ESLint rules][eslint-build-in-rules], [eslint-config-airbnb-base] and [eslint-config-alloy].

## Configuration

::: code-group

```js [eslint.config.js]
import { eslint } from "@ljtang2009/lint-use";

export default [
  {
    files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
    rules: eslint.buildIn.default.rules
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
  :data="data['eslint.buildIn.rules']"
  rootName="rules"
  :expandOnCreatedAndUpdated="() => true"
></ObjectVisualizer>

[eslint-build-in-rules]: https://eslint.org/docs/latest/rules/
[eslint-config-airbnb-base]: https://www.npmjs.com/package/eslint-config-airbnb-base
[eslint-config-alloy]: https://github.com/AlloyTeam/eslint-config-alloy
