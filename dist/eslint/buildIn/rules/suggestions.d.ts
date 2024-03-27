declare const _default: {
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
};
export default _default;
//# sourceMappingURL=suggestions.d.ts.map