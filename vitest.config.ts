import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      enabled:  true,
      include:  ['src'],
      all:      false,
      reporter: [
        ['text'],
        ['json', { file: 'coverage.json' }],
        ['html', { subdir: 'html' }],
      ],
    },
  },
});
