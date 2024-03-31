/** @type {import('typedoc').TypeDocOptions} */
const config = {
  entryPoints:      ['./src'],
  out:              'docs/public/typedoc',
  searchInComments: true,
  cleanOutputDir:   true,
};

export default config;
