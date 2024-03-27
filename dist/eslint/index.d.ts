/// <reference types="eslint-plugin-jsonc" />
declare const _default: {
    buildIn: {
        rules: {
            'line-comment-position': string[];
            'unicode-bom': string[];
            'accessor-pairs': string;
            'arrow-body-style': (string | {
                requireReturnForObjectLiteral: boolean;
            })[];
            'block-scoped-var': string;
            camelcase: (string | {
                properties: string;
                ignoreDestructuring: boolean;
                ignoreImports: boolean;
                ignoreGlobals: boolean;
            })[];
            'capitalized-comments': string[];
            'class-methods-use-this': (string | {
                exceptMethods: never[];
                enforceForClassFields: boolean;
            })[];
            complexity: (string | number)[];
            'consistent-return': (string | {
                treatUndefinedAsUnspecified: boolean;
            })[];
            'consistent-this': string;
            curly: string[];
            'default-case': (string | {
                commentPattern: string;
            })[];
            'default-case-last': string;
            'default-param-last': string;
            'dot-notation': (string | {
                allowKeywords: boolean;
            })[];
            eqeqeq: (string | {
                null: string;
            })[];
            'func-name-matching': string[];
            'func-names': string[];
            'func-style': (string | {
                allowArrowFunctions: boolean;
            })[];
            'grouped-accessor-pairs': string[];
            'guard-for-in': string;
            'id-denylist': string;
            'id-length': string;
            'id-match': string[];
            'init-declarations': string;
            'logical-assignment-operators': (string | {
                enforceForIfStatements: boolean;
            })[];
            'max-classes-per-file': (string | number)[];
            'max-depth': string[];
            'max-lines': string[];
            'max-lines-per-function': string[];
            'max-nested-callbacks': string;
            'max-params': (string | number)[];
            'max-statements': string[];
            'multiline-comment-style': string[];
            'new-cap': string[];
            'no-alert': string;
            'no-array-constructor': string;
            'no-bitwise': string;
            'no-caller': string;
            'no-case-declarations': string;
            'no-console': string;
            'no-continue': string;
            'no-delete-var': string;
            'no-div-regex': string;
            'no-else-return': (string | {
                allowElseIf: boolean;
            })[];
            'no-empty': (string | {
                allowEmptyCatch: boolean;
            })[];
            'no-empty-function': (string | {
                allow: string[];
            })[];
            'no-empty-static-block': string;
            'no-eq-null': string;
            'no-eval': string;
            'no-extend-native': string;
            'no-extra-bind': string;
            'no-extra-boolean-cast': (string | {
                enforceForLogicalOperands: boolean;
            })[];
            'no-extra-label': string;
            'no-global-assign': (string | {
                exceptions: never[];
            })[];
            'no-implicit-coercion': (string | {
                disallowTemplateShorthand: boolean;
            })[];
            'no-implicit-globals': string;
            'no-implied-eval': string;
            'no-inline-comments': string;
            'no-invalid-this': string;
            'no-iterator': string;
            'no-label-var': string;
            'no-labels': (string | {
                allowLoop: boolean;
                allowSwitch: boolean;
            })[];
            'no-lone-blocks': string;
            'no-lonely-if': string;
            'no-loop-func': string;
            'no-magic-numbers': string[];
            'no-multi-assign': string[];
            'no-multi-str': string;
            'no-negated-condition': string;
            'no-nested-ternary': string;
            'no-new': string;
            'no-new-func': string;
            'no-new-wrappers': string;
            'no-nonoctal-decimal-escape': string;
            'no-object-constructor': string;
            'no-octal': string;
            'no-octal-escape': string;
            'no-param-reassign': (string | {
                props: boolean;
                ignorePropertyModificationsFor: string[];
            })[];
            'no-plusplus': (string | {
                allowForLoopAfterthoughts: boolean;
            })[];
            'no-proto': string;
            'no-redeclare': string;
            'no-regex-spaces': string;
            'no-restricted-exports': (string | {
                restrictedNamedExports: string[];
            })[];
            'no-restricted-globals': (string | {
                name: string;
                message: string;
            })[];
            'no-restricted-imports': (string | {
                paths: never[];
                patterns: never[];
            })[];
            'no-restricted-properties': (string | {
                object: string;
                property: string;
                message: string;
            } | {
                property: string;
                message: string;
                object?: undefined;
            })[];
            'no-restricted-syntax': (string | {
                selector: string;
                message: string;
            })[];
            'no-return-assign': string[];
            'no-script-url': string;
            'no-sequences': string;
            'no-shadow': string;
            'no-shadow-restricted-names': string;
            'no-ternary': string;
            'no-throw-literal': string;
            'no-undef-init': string;
            'no-undefined': string;
            'no-underscore-dangle': (string | {
                allow: string[];
                allowAfterThis: boolean;
                allowAfterSuper: boolean;
                enforceInMethodNames: boolean;
            })[];
            'no-unneeded-ternary': (string | {
                defaultAssignment: boolean;
            })[];
            'no-unused-expressions': (string | {
                allowShortCircuit: boolean;
                allowTernary: boolean;
                allowTaggedTemplates: boolean;
            })[];
            'no-unused-labels': string;
            'no-useless-call': string;
            'no-useless-catch': string;
            'no-useless-computed-key': string;
            'no-useless-concat': string;
            'no-useless-constructor': string;
            'no-useless-escape': string;
            'no-useless-rename': (string | {
                ignoreDestructuring: boolean;
                ignoreImport: boolean;
                ignoreExport: boolean;
            })[];
            'no-useless-return': string;
            'no-var': string;
            'no-void': string;
            'no-warning-comments': string[];
            'no-with': string;
            'object-shorthand': (string | {
                avoidQuotes: boolean;
            })[];
            'one-var': string[];
            'operator-assignment': string[];
            'prefer-arrow-callback': (string | {
                allowNamedFunctions: boolean;
                allowUnboundThis: boolean;
            })[];
            'prefer-const': (string | {
                destructuring: string;
                ignoreReadBeforeAssign: boolean;
            })[];
            'prefer-destructuring': (string | {
                VariableDeclarator: {
                    array: boolean;
                    object: boolean;
                };
                AssignmentExpression: {
                    array: boolean;
                    object: boolean;
                };
                enforceForRenamedProperties?: undefined;
            } | {
                enforceForRenamedProperties: boolean;
                VariableDeclarator?: undefined;
                AssignmentExpression?: undefined;
            })[];
            'prefer-exponentiation-operator': string;
            'prefer-named-capture-group': string;
            'prefer-numeric-literals': string;
            'prefer-object-has-own': string;
            'prefer-object-spread': string;
            'prefer-promise-reject-errors': (string | {
                allowEmptyReject: boolean;
            })[];
            'prefer-regex-literals': (string | {
                disallowRedundantWrapping: boolean;
            })[];
            'prefer-rest-params': string;
            'prefer-spread': string;
            'prefer-template': string;
            radix: string;
            'require-await': string;
            'require-unicode-regexp': string;
            'require-yield': string;
            'sort-imports': string[];
            'sort-keys': string[];
            'sort-vars': string;
            strict: string[];
            'symbol-description': string;
            'vars-on-top': string;
            yoda: string;
            'array-callback-return': (string | {
                allowImplicit: boolean;
                checkForEach: boolean;
            })[];
            'constructor-super': string;
            'for-direction': string;
            'getter-return': (string | {
                allowImplicit: boolean;
            })[];
            'no-async-promise-executor': string;
            'no-await-in-loop': string;
            'no-class-assign': string;
            'no-compare-neg-zero': string;
            'no-cond-assign': string[];
            'no-const-assign': string;
            'no-constant-binary-expression': string;
            'no-constant-condition': (string | {
                checkLoops: boolean;
            })[];
            'no-constructor-return': string;
            'no-control-regex': string;
            'no-debugger': string;
            'no-dupe-args': string;
            'no-dupe-class-members': string;
            'no-dupe-else-if': string;
            'no-dupe-keys': string;
            'no-duplicate-case': string;
            'no-duplicate-imports': string;
            'no-empty-character-class': string;
            'no-empty-pattern': string;
            'no-ex-assign': string;
            'no-fallthrough': string;
            'no-func-assign': string;
            'no-import-assign': string;
            'no-inner-declarations': string;
            'no-invalid-regexp': string;
            'no-irregular-whitespace': string;
            'no-loss-of-precision': string;
            'no-misleading-character-class': string;
            'no-new-native-nonconstructor': string;
            'no-new-symbol': string;
            'no-obj-calls': string;
            'no-promise-executor-return': string;
            'no-prototype-builtins': string;
            'no-self-assign': (string | {
                props: boolean;
            })[];
            'no-self-compare': string;
            'no-setter-return': string;
            'no-sparse-arrays': string;
            'no-template-curly-in-string': string;
            'no-this-before-super': string;
            'no-undef': (string | {
                typeof: boolean;
            })[];
            'no-unexpected-multiline': string;
            'no-unmodified-loop-condition': string;
            'no-unreachable': string;
            'no-unreachable-loop': (string | {
                ignore: never[];
            })[];
            'no-unsafe-finally': string;
            'no-unsafe-negation': string;
            'no-unsafe-optional-chaining': (string | {
                disallowArithmeticOperators: boolean;
            })[];
            'no-unused-private-class-members': string;
            'no-unused-vars': (string | {
                vars: string;
                varsIgnorePattern: string;
                args: string;
                caughtErrors: string;
                caughtErrorsIgnorePattern: string;
                destructuredArrayIgnorePattern: string;
                ignoreRestSiblings: boolean;
            })[];
            'no-use-before-define': (string | {
                functions: boolean;
                classes: boolean;
                variables: boolean;
                allowNamedExports: boolean;
            })[];
            'no-useless-backreference': string;
            'require-atomic-updates': string;
            'use-isnan': string;
            'valid-typeof': (string | {
                requireStringLiterals: boolean;
            })[];
        };
    };
    ts: Object;
    stylistic: {
        plugins: {
            '@stylistic': typeof import("@stylistic/eslint-plugin");
        };
        rules: Record<string, unknown>;
    };
    json: {
        languageOptions: {
            parser: typeof import("jsonc-eslint-parser");
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
                            parser: typeof import("jsonc-eslint-parser");
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
                            parser: typeof import("jsonc-eslint-parser");
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
                            parser: typeof import("jsonc-eslint-parser");
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
                            parser: typeof import("jsonc-eslint-parser");
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
                            parser: typeof import("jsonc-eslint-parser");
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
                            parser: typeof import("jsonc-eslint-parser");
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
                parseForESLint: typeof import("jsonc-eslint-parser").parseForESLint;
                parseJSON: typeof import("jsonc-eslint-parser").parseJSON;
                traverseNodes: typeof import("jsonc-eslint-parser").traverseNodes;
                getStaticJSONValue: typeof import("jsonc-eslint-parser").getStaticJSONValue;
            };
        };
        rules: Record<string, unknown>;
    };
};
export default _default;
//# sourceMappingURL=index.d.ts.map