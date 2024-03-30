import globals from 'globals';
import { eslint } from './dist/index.js';
import _ from 'lodash';
import { dirname, join } from 'desm';

const __dirname = dirname(import.meta.url);

const baseConfig = _.merge(
  _.cloneDeep(eslint.buildIn.default),
  eslint.stylistic.default,
  {
    languageOptions: {
      sourceType: 'module',
      globals:    {
        ...globals.node,
        ...globals.jest,
      },
    },
  },
);

const baseTSConfig = _.merge(_.cloneDeep(baseConfig), eslint.ts.default);

export default [
  {
    ..._.merge(_.cloneDeep(baseConfig), {
      files:   ['**/*.js', '**/*.cjs'],
      ignores: [
        'dist/**/*',
        'docs/public/typedoc/**/*',
        'docs/.vitepress/cache/**/*',
        'docs/.vitepress/dist/**/*',
      ],
    }),
  },
  {
    ..._.merge(_.cloneDeep(baseTSConfig), {
      files:           ['src/**/*.ts'],
      languageOptions: {
        parserOptions: {
          project:         join(import.meta.url, 'tsconfig.json'),
          tsconfigRootDir: __dirname,
        },
      },
    }),
  },
  {
    ..._.merge(_.cloneDeep(baseTSConfig), {
      files:           ['vite.config.ts'],
      languageOptions: {
        parserOptions: {
          project:         join(import.meta.url, 'tsconfig.node.json'),
          tsconfigRootDir: __dirname,
        },
      },
    }),
  },
  {
    ..._.merge(_.cloneDeep(eslint.json.default), {
      files:   ['**/*.json', '**/*.jsonc', '**/*.json5'],
      ignores: ['docs/.vitepress/dist/**/*'],
    }),
  },
];
