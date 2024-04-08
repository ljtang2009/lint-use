import fs from 'node:fs/promises';
import { fileURLToPath } from 'url';
import path from 'node:path';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

import {
  eslint, stylelint, markdownlint, prettier,
} from '../dist/index.js';

const writeFilePromiseArray = [];

function writeFile(filePath, content) {
  return fs.writeFile(filePath, content, 'utf8');
}

const eslintPlugins = ['buildIn', 'json', 'stylistic', 'ts'];
eslintPlugins.forEach((plugin) => {
  writeFilePromiseArray.push(
    writeFile(
      path.resolve(__dirname, `../docs/data/eslint.${plugin}.rules.json`),
      JSON.stringify(eslint[plugin].default.rules),
      'utf8',
    ),
  );
});

const stylelintPlugins = ['buildIn'];
stylelintPlugins.forEach((plugin) => {
  writeFilePromiseArray.push(
    writeFile(
      path.resolve(__dirname, `../docs/data/stylelint.${plugin}.rules.json`),
      JSON.stringify(stylelint[plugin].default.rules),
      'utf8',
    ),
  );
});

writeFilePromiseArray.push(
  writeFile(
    path.resolve(__dirname, '../docs/data/markdownlint.rules.json'),
    JSON.stringify(markdownlint.default.config),
    'utf8',
  ),
);

writeFilePromiseArray.push(
  writeFile(
    path.resolve(__dirname, '../docs/data/prettier.rules.json'),
    JSON.stringify(prettier.default),
    'utf8',
  ),
);

await Promise.all(writeFilePromiseArray);

// eslint-disable-next-line no-console
console.log('🎉 Success to output rules');
