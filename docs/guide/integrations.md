---
outline: deep
editLink: true
---

# Integrations

## VSCode

### Install Extension

- [ESLint Extension]
- [Stylelint Extension]
- [Markdownlint Extension]
- [Prettier Extension]

### Settings

::: code-group

```json [.vscode/settings.json]
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.fixAll.stylelint": "explicit",
    "source.fixAll.markdownlint": "explicit"
  },
  "eslint.experimental.useFlatConfig": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "json",
    "jsonc",
    "json5"
  ]
}
```

:::

[ESLint Extension]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[Stylelint Extension]: https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint
[Markdownlint Extension]: https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint
[Prettier Extension]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
