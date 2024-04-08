import { readFileSync } from 'node:fs';
import { parse } from 'path';

export default {
  watch: ['../data/*.json'],
  load(watchedFiles) {
    const result = {};
    watchedFiles.forEach((file) => {
      result[parse(file).name] = JSON.parse(readFileSync(file, 'utf-8'));
    });
    return result;
  },
};
