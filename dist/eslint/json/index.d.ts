/// <reference types="eslint-plugin-jsonc" />
import jsoncParser from 'jsonc-eslint-parser';
declare const _default: {
    languageOptions: {
        parser: typeof jsoncParser;
    };
    plugins: {
        jsonc: {
            meta: typeof import("eslint-plugin-jsonc/meta");
            configs: {
                base: {
                    plugins: string[];
                    overrides: {
                        files: string[];
                        parser: string;
                        rules: {
                            strict: string;
                            "no-unused-expressions": string;
                            "no-unused-vars": string;
                        };
                    }[];
                };
                "auto-config": {
                    extends: string[];
                    rules: {
                        "jsonc/auto": string;
                    };
                };
                "recommended-with-json": {
                    extends: string[];
                    rules: {
                        "jsonc/comma-dangle": string;
                        "jsonc/no-bigint-literals": string;
                        "jsonc/no-binary-expression": string;
                        "jsonc/no-binary-numeric-literals": string;
                        "jsonc/no-comments": string;
                        "jsonc/no-dupe-keys": string;
                        "jsonc/no-escape-sequence-in-identifier": string;
                        "jsonc/no-floating-decimal": string;
                        "jsonc/no-hexadecimal-numeric-literals": string;
                        "jsonc/no-infinity": string;
                        "jsonc/no-multi-str": string;
                        "jsonc/no-nan": string;
                        "jsonc/no-number-props": string;
                        "jsonc/no-numeric-separators": string;
                        "jsonc/no-octal-numeric-literals": string;
                        "jsonc/no-octal": string;
                        "jsonc/no-parenthesized": string;
                        "jsonc/no-plus-sign": string;
                        "jsonc/no-regexp-literals": string;
                        "jsonc/no-sparse-arrays": string;
                        "jsonc/no-template-literals": string;
                        "jsonc/no-undefined-value": string;
                        "jsonc/no-unicode-codepoint-escapes": string;
                        "jsonc/no-useless-escape": string;
                        "jsonc/quote-props": string;
                        "jsonc/quotes": string;
                        "jsonc/space-unary-ops": string;
                        "jsonc/valid-json-number": string;
                        "jsonc/vue-custom-block/no-parsing-error": string;
                    };
                };
                "recommended-with-jsonc": {
                    extends: string[];
                    rules: {
                        "jsonc/no-bigint-literals": string;
                        "jsonc/no-binary-expression": string;
                        "jsonc/no-binary-numeric-literals": string;
                        "jsonc/no-dupe-keys": string;
                        "jsonc/no-escape-sequence-in-identifier": string;
                        "jsonc/no-floating-decimal": string;
                        "jsonc/no-hexadecimal-numeric-literals": string;
                        "jsonc/no-infinity": string;
                        "jsonc/no-multi-str": string;
                        "jsonc/no-nan": string;
                        "jsonc/no-number-props": string;
                        "jsonc/no-numeric-separators": string;
                        "jsonc/no-octal-numeric-literals": string;
                        "jsonc/no-octal": string;
                        "jsonc/no-parenthesized": string;
                        "jsonc/no-plus-sign": string;
                        "jsonc/no-regexp-literals": string;
                        "jsonc/no-sparse-arrays": string;
                        "jsonc/no-template-literals": string;
                        "jsonc/no-undefined-value": string;
                        "jsonc/no-unicode-codepoint-escapes": string;
                        "jsonc/no-useless-escape": string;
                        "jsonc/quote-props": string;
                        "jsonc/quotes": string;
                        "jsonc/space-unary-ops": string;
                        "jsonc/valid-json-number": string;
                        "jsonc/vue-custom-block/no-parsing-error": string;
                    };
                };
                "recommended-with-json5": {
                    extends: string[];
                    rules: {
                        "jsonc/no-bigint-literals": string;
                        "jsonc/no-binary-expression": string;
                        "jsonc/no-binary-numeric-literals": string;
                        "jsonc/no-dupe-keys": string;
                        "jsonc/no-escape-sequence-in-identifier": string;
                        "jsonc/no-number-props": string;
                        "jsonc/no-numeric-separators": string;
                        "jsonc/no-octal-numeric-literals": string;
                        "jsonc/no-octal": string;
                        "jsonc/no-parenthesized": string;
                        "jsonc/no-regexp-literals": string;
                        "jsonc/no-sparse-arrays": string;
                        "jsonc/no-template-literals": string;
                        "jsonc/no-undefined-value": string;
                        "jsonc/no-unicode-codepoint-escapes": string;
                        "jsonc/no-useless-escape": string;
                        "jsonc/space-unary-ops": string;
                        "jsonc/vue-custom-block/no-parsing-error": string;
                    };
                };
                prettier: {
                    extends: string[];
                    rules: {
                        "jsonc/array-bracket-newline": string;
                        "jsonc/array-bracket-spacing": string;
                        "jsonc/array-element-newline": string;
                        "jsonc/comma-dangle": string;
                        "jsonc/comma-style": string;
                        "jsonc/indent": string;
                        "jsonc/key-spacing": string;
                        "jsonc/no-floating-decimal": string;
                        "jsonc/object-curly-newline": string;
                        "jsonc/object-curly-spacing": string;
                        "jsonc/object-property-newline": string;
                        "jsonc/quote-props": string;
                        "jsonc/quotes": string;
                        "jsonc/space-unary-ops": string;
                    };
                };
                all: {
                    extends: string[];
                    rules: {
                        [x: string]: string;
                    };
                };
                "flat/base": ({
                    plugins: {
                        readonly jsonc: import("eslint").ESLint.Plugin;
                    };
                    files?: undefined;
                    languageOptions?: undefined;
                    rules?: undefined;
                } | {
                    files: string[];
                    languageOptions: {
                        parser: typeof jsoncParser;
                    };
                    rules: {
                        strict: string;
                        "no-unused-expressions": string;
                        "no-unused-vars": string;
                    };
                    plugins?: undefined;
                })[];
                "flat/recommended-with-json": ({
                    plugins: {
                        readonly jsonc: import("eslint").ESLint.Plugin;
                    };
                    files?: undefined;
                    languageOptions?: undefined;
                    rules?: undefined;
                } | {
                    files: string[];
                    languageOptions: {
                        parser: typeof jsoncParser;
                    };
                    rules: {
                        strict: string;
                        "no-unused-expressions": string;
                        "no-unused-vars": string;
                    };
                    plugins?: undefined;
                } | {
                    rules: {
                        "jsonc/comma-dangle": string;
                        "jsonc/no-bigint-literals": string;
                        "jsonc/no-binary-expression": string;
                        "jsonc/no-binary-numeric-literals": string;
                        "jsonc/no-comments": string;
                        "jsonc/no-dupe-keys": string;
                        "jsonc/no-escape-sequence-in-identifier": string;
                        "jsonc/no-floating-decimal": string;
                        "jsonc/no-hexadecimal-numeric-literals": string;
                        "jsonc/no-infinity": string;
                        "jsonc/no-multi-str": string;
                        "jsonc/no-nan": string;
                        "jsonc/no-number-props": string;
                        "jsonc/no-numeric-separators": string;
                        "jsonc/no-octal-numeric-literals": string;
                        "jsonc/no-octal": string;
                        "jsonc/no-parenthesized": string;
                        "jsonc/no-plus-sign": string;
                        "jsonc/no-regexp-literals": string;
                        "jsonc/no-sparse-arrays": string;
                        "jsonc/no-template-literals": string;
                        "jsonc/no-undefined-value": string;
                        "jsonc/no-unicode-codepoint-escapes": string;
                        "jsonc/no-useless-escape": string;
                        "jsonc/quote-props": string;
                        "jsonc/quotes": string;
                        "jsonc/space-unary-ops": string;
                        "jsonc/valid-json-number": string;
                        "jsonc/vue-custom-block/no-parsing-error": string;
                    };
                })[];
                "flat/recommended-with-jsonc": ({
                    plugins: {
                        readonly jsonc: import("eslint").ESLint.Plugin;
                    };
                    files?: undefined;
                    languageOptions?: undefined;
                    rules?: undefined;
                } | {
                    files: string[];
                    languageOptions: {
                        parser: typeof jsoncParser;
                    };
                    rules: {
                        strict: string;
                        "no-unused-expressions": string;
                        "no-unused-vars": string;
                    };
                    plugins?: undefined;
                } | {
                    rules: {
                        "jsonc/no-bigint-literals": string;
                        "jsonc/no-binary-expression": string;
                        "jsonc/no-binary-numeric-literals": string;
                        "jsonc/no-dupe-keys": string;
                        "jsonc/no-escape-sequence-in-identifier": string;
                        "jsonc/no-floating-decimal": string;
                        "jsonc/no-hexadecimal-numeric-literals": string;
                        "jsonc/no-infinity": string;
                        "jsonc/no-multi-str": string;
                        "jsonc/no-nan": string;
                        "jsonc/no-number-props": string;
                        "jsonc/no-numeric-separators": string;
                        "jsonc/no-octal-numeric-literals": string;
                        "jsonc/no-octal": string;
                        "jsonc/no-parenthesized": string;
                        "jsonc/no-plus-sign": string;
                        "jsonc/no-regexp-literals": string;
                        "jsonc/no-sparse-arrays": string;
                        "jsonc/no-template-literals": string;
                        "jsonc/no-undefined-value": string;
                        "jsonc/no-unicode-codepoint-escapes": string;
                        "jsonc/no-useless-escape": string;
                        "jsonc/quote-props": string;
                        "jsonc/quotes": string;
                        "jsonc/space-unary-ops": string;
                        "jsonc/valid-json-number": string;
                        "jsonc/vue-custom-block/no-parsing-error": string;
                    };
                })[];
                "flat/recommended-with-json5": ({
                    plugins: {
                        readonly jsonc: import("eslint").ESLint.Plugin;
                    };
                    files?: undefined;
                    languageOptions?: undefined;
                    rules?: undefined;
                } | {
                    files: string[];
                    languageOptions: {
                        parser: typeof jsoncParser;
                    };
                    rules: {
                        strict: string;
                        "no-unused-expressions": string;
                        "no-unused-vars": string;
                    };
                    plugins?: undefined;
                } | {
                    rules: {
                        "jsonc/no-bigint-literals": string;
                        "jsonc/no-binary-expression": string;
                        "jsonc/no-binary-numeric-literals": string;
                        "jsonc/no-dupe-keys": string;
                        "jsonc/no-escape-sequence-in-identifier": string;
                        "jsonc/no-number-props": string;
                        "jsonc/no-numeric-separators": string;
                        "jsonc/no-octal-numeric-literals": string;
                        "jsonc/no-octal": string;
                        "jsonc/no-parenthesized": string;
                        "jsonc/no-regexp-literals": string;
                        "jsonc/no-sparse-arrays": string;
                        "jsonc/no-template-literals": string;
                        "jsonc/no-undefined-value": string;
                        "jsonc/no-unicode-codepoint-escapes": string;
                        "jsonc/no-useless-escape": string;
                        "jsonc/space-unary-ops": string;
                        "jsonc/vue-custom-block/no-parsing-error": string;
                    };
                })[];
                "flat/prettier": ({
                    plugins: {
                        readonly jsonc: import("eslint").ESLint.Plugin;
                    };
                    files?: undefined;
                    languageOptions?: undefined;
                    rules?: undefined;
                } | {
                    files: string[];
                    languageOptions: {
                        parser: typeof jsoncParser;
                    };
                    rules: {
                        strict: string;
                        "no-unused-expressions": string;
                        "no-unused-vars": string;
                    };
                    plugins?: undefined;
                } | {
                    rules: {
                        "jsonc/array-bracket-newline": string;
                        "jsonc/array-bracket-spacing": string;
                        "jsonc/array-element-newline": string;
                        "jsonc/comma-dangle": string;
                        "jsonc/comma-style": string;
                        "jsonc/indent": string;
                        "jsonc/key-spacing": string;
                        "jsonc/no-floating-decimal": string;
                        "jsonc/object-curly-newline": string;
                        "jsonc/object-curly-spacing": string;
                        "jsonc/object-property-newline": string;
                        "jsonc/quote-props": string;
                        "jsonc/quotes": string;
                        "jsonc/space-unary-ops": string;
                    };
                })[];
                "flat/all": ({
                    plugins: {
                        readonly jsonc: import("eslint").ESLint.Plugin;
                    };
                    files?: undefined;
                    languageOptions?: undefined;
                    rules?: undefined;
                } | {
                    files: string[];
                    languageOptions: {
                        parser: typeof jsoncParser;
                    };
                    rules: {
                        strict: string;
                        "no-unused-expressions": string;
                        "no-unused-vars": string;
                    };
                    plugins?: undefined;
                } | {
                    rules: {
                        [x: string]: string;
                    };
                })[];
            };
            rules: {
                [key: string]: import("eslint-plugin-jsonc/types").RuleModule;
            };
            parseForESLint: typeof jsoncParser.parseForESLint;
            parseJSON: typeof jsoncParser.parseJSON;
            traverseNodes: typeof jsoncParser.traverseNodes;
            getStaticJSONValue: typeof jsoncParser.getStaticJSONValue;
        };
    };
    rules: Record<string, unknown>;
};
export default _default;
//# sourceMappingURL=index.d.ts.map