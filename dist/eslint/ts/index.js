import rules from './rules/index.js';
import tseslint from 'typescript-eslint';
const config = {
    languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
            // @see https://typescript-eslint.io/rules/consistent-type-imports/#usage-with-emitdecoratormetadata
            emitDecoratorMetadata: true,
        },
    },
    plugins: {
        '@typescript-eslint': tseslint.plugin,
    },
    rules: rules.getRules('@typescript-eslint'),
};
export default config;
//# sourceMappingURL=index.js.map