declare const _default: {
    buildIn: {
        plugins: never[];
        defaultSeverity: string;
        reportDescriptionlessDisables: boolean;
        reportInvalidScopeDisables: (boolean | {
            severity: string;
        })[];
        reportNeedlessDisables: (boolean | {
            severity: string;
        })[];
        ignoreDisables: boolean;
        rules: {
            'at-rule-no-vendor-prefix': boolean;
            'color-named': string[];
            'declaration-no-important': boolean;
            'function-url-no-scheme-relative': boolean;
            'length-zero-no-unit': boolean;
            'media-feature-name-no-vendor-prefix': boolean;
            'property-no-vendor-prefix': boolean;
            'function-name-case': string;
            'selector-type-case': string;
            'value-keyword-case': (string | {
                camelCaseSvgKeywords: boolean;
            })[];
            'at-rule-empty-line-before': (string | {
                except: string[];
                ignore: string[];
            })[];
            'declaration-block-single-line-max-declarations': number;
            'alpha-value-notation': string;
            'color-hex-length': string;
            'font-weight-notation': string;
            'hue-degree-notation': string;
            'import-notation': string;
            'keyframe-selector-notation': string;
            'lightness-notation': string;
            'media-feature-range-notation': string;
            'selector-not-notation': string;
            'selector-pseudo-element-colon-notation': string;
            'comment-pattern': null;
            'custom-media-pattern': null;
            'custom-property-pattern': null;
            'keyframes-name-pattern': null;
            'selector-class-pattern': null;
            'selector-id-pattern': null;
            'selector-nested-pattern': null;
            'function-url-quotes': string;
            'selector-attribute-quotes': string;
            'no-descending-specificity': boolean;
            'declaration-block-no-duplicate-custom-properties': boolean;
            'declaration-block-no-duplicate-properties': boolean;
            'font-family-no-duplicate-names': boolean;
            'keyframe-block-no-duplicate-selectors': boolean;
            'no-duplicate-at-import-rules': boolean;
            'no-duplicate-selectors': (boolean | {
                disallowInList: boolean;
            })[];
            'block-no-empty': boolean;
            'comment-no-empty': boolean;
            'no-empty-source': boolean;
            'color-no-invalid-hex': boolean;
            'function-calc-no-unspaced-operator': boolean;
            'keyframe-declaration-no-important': boolean;
            'media-query-no-invalid': boolean;
            'named-grid-areas-no-invalid': boolean;
            'no-invalid-double-slash-comments': boolean;
            'no-invalid-position-at-import-rule': boolean;
            'string-no-newline': boolean;
            'no-irregular-whitespace': boolean;
            'custom-property-no-missing-var-function': boolean;
            'font-family-no-missing-generic-family-keyword': boolean;
            'function-linear-gradient-no-nonstandard-direction': boolean;
            'declaration-block-no-shorthand-property-overrides': boolean;
            'selector-anb-no-unmatchable': boolean;
            'annotation-no-unknown': boolean;
            'at-rule-no-unknown': boolean;
            'declaration-property-value-no-unknown': boolean;
            'function-no-unknown': boolean;
            'media-feature-name-no-unknown': boolean;
            'media-feature-name-value-no-unknown': boolean;
            'no-unknown-animations': boolean;
            'no-unknown-custom-properties': boolean;
            'property-no-unknown': boolean;
            'selector-pseudo-class-no-unknown': boolean;
            'selector-pseudo-element-no-unknown': boolean;
            'selector-type-no-unknown': boolean;
            'unit-no-unknown': boolean;
        };
    };
    order: {
        extends: string[];
    };
    prettier: {
        plugins: string[];
        rules: {
            'prettier/prettier': boolean;
        };
    };
};
export default _default;
//# sourceMappingURL=index.d.ts.map