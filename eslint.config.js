import globals from 'globals';
import lintConfig from './dist/index.js';
import _ from 'lodash';
import { dirname, join } from 'desm';

const __dirname = dirname(import.meta.url);

const baseConfig = _.merge(
  _.cloneDeep(lintConfig.eslint.buildIn),
  lintConfig.eslint.stylistic,
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

const baseTSConfig = _.merge(_.cloneDeep(baseConfig), lintConfig.eslint.ts);

export default [
  {
    ..._.merge(_.cloneDeep(baseConfig), {
      files: ['eslint.config.js', 'jest.config.js'],
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
      files:           ['vite.config.ts', 'jest.config.ts'],
      languageOptions: {
        parserOptions: {
          project:         join(import.meta.url, 'tsconfig.node.json'),
          tsconfigRootDir: __dirname,
        },
      },
    }),
  },
  {
    ..._.merge(_.cloneDeep(lintConfig.eslint.json), {
      files: ['**/*.json', '**/*.jsonc', '**/*.json5'],
    }),
  },
];
