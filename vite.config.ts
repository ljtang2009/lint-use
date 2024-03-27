/// <reference types="vitest" />

import { defineConfig } from 'vite';
import { join } from 'desm';

const entry = join(import.meta.url, 'src/index.ts');

export default defineConfig({
  resolve: {
    alias: {
      '@': join(import.meta.url, 'src'),
    },
  },
  build: {
    outDir:    join(import.meta.url, 'dist'),
    sourcemap: true,
    lib:       {
      entry,
      name:    'LintConfig',
      formats: ['cjs'],
    },
    rollupOptions: {
      external: ['@stylistic/eslint-plugin', 'typescript-eslint', 'jsonc-eslint-parser', 'eslint-plugin-jsonc'],
      output:   {
        globals: {
          '@stylistic/eslint-plugin': 'stylisticEslintPlugin',
          'typescript-eslint':        'tseslint',
          'jsonc-eslint-parser':      'jsoncEslintParser',
          'eslint-plugin-jsonc':      'jsoncEslintPlugin',
        },
      },
    },
    ssr:         true,
    minify:      false,
    emptyOutDir: false,
  },
});
