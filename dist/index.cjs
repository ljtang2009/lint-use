"use strict";
const js = require("@eslint/js");
const confusingBrowserGlobals = require("confusing-browser-globals");
const tseslint = require("typescript-eslint");
const stylistic$2 = require("@stylistic/eslint-plugin");
const jsoncParser = require("jsonc-eslint-parser");
const jsonc$1 = require("eslint-plugin-jsonc");
const possibleProblems = {
  // Enforce return statements in callbacks of array methods
  // https://eslint.org/docs/latest/rules/array-callback-return
  "array-callback-return": [
    "error",
    { allowImplicit: false, checkForEach: false }
  ],
  // verify super() callings in constructors
  // https://eslint.org/docs/latest/rules/constructor-super
  "constructor-super": "error",
  // Enforce “for” loop update clause moving the counter in the right direction
  // https://eslint.org/docs/rules/for-direction
  "for-direction": "error",
  // Enforces that a return statement is present in property getters
  // https://eslint.org/docs/rules/getter-return
  "getter-return": ["error", { allowImplicit: true }],
  // disallow using an async function as a Promise executor
  // https://eslint.org/docs/rules/no-async-promise-executor
  "no-async-promise-executor": "error",
  // Disallow await inside of loops
  // https://eslint.org/docs/rules/no-await-in-loop
  "no-await-in-loop": "error",
  // disallow modifying variables of class declarations
  // https://eslint.org/docs/rules/no-class-assign
  "no-class-assign": "error",
  // Disallow comparisons to negative zero
  // https://eslint.org/docs/rules/no-compare-neg-zero
  "no-compare-neg-zero": "error",
  // disallow assignment in conditional expressions
  // https://eslint.org/docs/latest/rules/no-cond-assign
  "no-cond-assign": ["error", "always"],
  // disallow modifying variables that are declared using const
  // https://eslint.org/docs/latest/rules/no-const-assign
  "no-const-assign": "error",
  // Disallow expressions where the operation doesn't affect the value
  // https://eslint.org/docs/latest/rules/no-constant-binary-expression
  "no-constant-binary-expression": "error",
  // disallow use of constant expressions in conditions
  // https://eslint.org/docs/latest/rules/no-constant-condition
  "no-constant-condition": ["error", { checkLoops: false }],
  // Disallow returning value in constructor
  // https://eslint.org/docs/rules/no-constructor-return
  "no-constructor-return": "error",
  // disallow control characters in regular expressions
  // https://eslint.org/docs/latest/rules/no-control-regex
  "no-control-regex": "error",
  // disallow use of debugger
  // https://eslint.org/docs/latest/rules/no-debugger
  "no-debugger": "error",
  // disallow duplicate arguments in functions
  // https://eslint.org/docs/latest/rules/no-dupe-args
  "no-dupe-args": "error",
  // disallow duplicate class members
  // https://eslint.org/docs/rules/no-dupe-class-members
  "no-dupe-class-members": "error",
  // Disallow duplicate conditions in if-else-if chains
  // https://eslint.org/docs/rules/no-dupe-else-if
  "no-dupe-else-if": "error",
  // disallow duplicate keys when creating object literals
  // https://eslint.org/docs/latest/rules/no-dupe-keys
  "no-dupe-keys": "error",
  // disallow a duplicate case label.
  // https://eslint.org/docs/latest/rules/no-duplicate-case
  "no-duplicate-case": "error",
  // disallow importing from the same path more than once
  // https://eslint.org/docs/rules/no-duplicate-imports
  "no-duplicate-imports": "error",
  // disallow the use of empty character classes in regular expressions
  // https://eslint.org/docs/latest/rules/no-empty-character-class
  "no-empty-character-class": "error",
  // disallow empty destructuring patterns
  // https://eslint.org/docs/rules/no-empty-pattern
  "no-empty-pattern": "error",
  // disallow assigning to the exception in a catch block
  // https://eslint.org/docs/latest/rules/no-ex-assign
  "no-ex-assign": "error",
  // disallow fallthrough of case statements
  // https://eslint.org/docs/rules/no-fallthrough
  "no-fallthrough": "error",
  // disallow overwriting functions written as function declarations
  // https://eslint.org/docs/latest/rules/no-func-assign
  "no-func-assign": "error",
  // Disallow assigning to imported bindings
  // https://eslint.org/docs/rules/no-import-assign
  "no-import-assign": "error",
  // disallow function or variable declarations in nested blocks
  // https://eslint.org/docs/latest/rules/no-inner-declarations
  "no-inner-declarations": "error",
  // disallow invalid regular expression strings in the RegExp constructor
  // https://eslint.org/docs/latest/rules/no-invalid-regexp
  "no-invalid-regexp": "error",
  // disallow irregular whitespace outside of strings and comments
  // https://eslint.org/docs/latest/rules/no-irregular-whitespace
  "no-irregular-whitespace": "error",
  // Disallow Number Literals That Lose Precision
  // https://eslint.org/docs/rules/no-loss-of-precision
  "no-loss-of-precision": "error",
  // Disallow characters which are made with multiple code points in character class syntax
  // https://eslint.org/docs/rules/no-misleading-character-class
  "no-misleading-character-class": "error",
  // Disallow new operators with global non-constructor functions
  // https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
  "no-new-native-nonconstructor": "error",
  // disallow symbol constructor
  // https://eslint.org/docs/rules/no-new-symbol
  "no-new-symbol": "error",
  // disallow the use of object properties of the global object (Math and JSON) as functions
  // https://eslint.org/docs/latest/rules/no-obj-calls
  "no-obj-calls": "error",
  // Disallow returning values from Promise executor functions
  // https://eslint.org/docs/rules/no-promise-executor-return
  "no-promise-executor-return": "error",
  // disallow use of Object.prototypes builtins directly
  // https://eslint.org/docs/rules/no-prototype-builtins
  "no-prototype-builtins": "error",
  // disallow self assignment
  // https://eslint.org/docs/rules/no-self-assign
  "no-self-assign": [
    "error",
    {
      props: true
    }
  ],
  // disallow comparisons where both sides are exactly the same
  // https://eslint.org/docs/rules/no-self-compare
  "no-self-compare": "error",
  // Disallow returning values from setters
  // https://eslint.org/docs/rules/no-setter-return
  "no-setter-return": "error",
  // disallow sparse arrays
  // https://eslint.org/docs/latest/rules/no-sparse-arrays
  "no-sparse-arrays": "error",
  // Disallow template literal placeholder syntax in regular strings
  // https://eslint.org/docs/rules/no-template-curly-in-string
  "no-template-curly-in-string": "error",
  // disallow to use this/super before super() calling in constructors.
  // https://eslint.org/docs/rules/no-this-before-super
  "no-this-before-super": "error",
  // disallow use of undeclared variables unless mentioned in a /*global */ block
  // https://eslint.org/docs/latest/rules/no-undef
  "no-undef": ["error", { typeof: true }],
  // Avoid code that looks like two expressions but is actually one
  // https://eslint.org/docs/rules/no-unexpected-multiline
  "no-unexpected-multiline": "error",
  // disallow unmodified conditions of loops
  // https://eslint.org/docs/rules/no-unmodified-loop-condition
  "no-unmodified-loop-condition": "off",
  // disallow unreachable statements after a return, throw, continue, or break statement
  // https://eslint.org/docs/latest/rules/no-unreachable
  "no-unreachable": "error",
  // Disallow loops with a body that allows only one iteration
  // https://eslint.org/docs/rules/no-unreachable-loop
  "no-unreachable-loop": [
    "error",
    {
      ignore: []
      // WhileStatement, DoWhileStatement, ForStatement, ForInStatement, ForOfStatement
    }
  ],
  // disallow return/throw/break/continue inside finally blocks
  // https://eslint.org/docs/rules/no-unsafe-finally
  "no-unsafe-finally": "error",
  // disallow negating the left operand of relational operators
  // https://eslint.org/docs/rules/no-unsafe-negation
  "no-unsafe-negation": "error",
  // disallow use of optional chaining in contexts where the undefined value is not allowed
  // https://eslint.org/docs/rules/no-unsafe-optional-chaining
  "no-unsafe-optional-chaining": [
    "error",
    { disallowArithmeticOperators: true }
  ],
  // Disallow Unused Private Class Members
  // https://eslint.org/docs/rules/no-unused-private-class-members
  "no-unused-private-class-members": "error",
  // disallow declaration of variables that are not used in the code
  // https://eslint.org/docs/latest/rules/no-unused-vars
  "no-unused-vars": [
    "error",
    {
      vars: "all",
      varsIgnorePattern: "^_",
      args: "after-used",
      caughtErrors: "all",
      caughtErrorsIgnorePattern: "^_",
      destructuredArrayIgnorePattern: "^_",
      ignoreRestSiblings: true
    }
  ],
  // disallow use of variables before they are defined
  // https://eslint.org/docs/latest/rules/no-use-before-define
  "no-use-before-define": [
    "error",
    {
      functions: true,
      classes: true,
      variables: true,
      allowNamedExports: false
    }
  ],
  // Disallow useless backreferences in regular expressions
  // https://eslint.org/docs/rules/no-useless-backreference
  "no-useless-backreference": "error",
  // Disallow assignments that can lead to race conditions due to usage of await or yield
  // https://eslint.org/docs/rules/require-atomic-updates
  // note: not enabled because it is very buggy
  "require-atomic-updates": "off",
  // disallow comparisons with the value NaN
  // https://eslint.org/docs/latest/rules/use-isnan
  "use-isnan": "error",
  // ensure that the results of typeof are compared against a valid string
  // https://eslint.org/docs/rules/valid-typeof
  "valid-typeof": ["error", { requireStringLiterals: true }]
};
const suggestions = {
  // enforces getter/setter pairs in objects
  // https://eslint.org/docs/rules/accessor-pairs
  "accessor-pairs": "off",
  // enforces no braces where they can be omitted
  // https://eslint.org/docs/rules/arrow-body-style
  "arrow-body-style": [
    "error",
    "as-needed",
    {
      requireReturnForObjectLiteral: true
    }
  ],
  // treat var statements as if they were block scoped
  // https://eslint.org/docs/rules/block-scoped-var
  "block-scoped-var": "error",
  // require camel case names
  // https://eslint.org/docs/latest/rules/camelcase
  camelcase: [
    "error",
    {
      properties: "always",
      ignoreDestructuring: false,
      ignoreImports: false,
      ignoreGlobals: false
    }
  ],
  // enforce or disallow capitalization of the first letter of a comment
  // https://eslint.org/docs/rules/capitalized-comments
  "capitalized-comments": ["off"],
  // enforce that class methods use "this"
  // https://eslint.org/docs/rules/class-methods-use-this
  "class-methods-use-this": [
    "error",
    {
      exceptMethods: [],
      enforceForClassFields: true
    }
  ],
  // specify the maximum cyclomatic complexity allowed in a program
  // https://eslint.org/docs/rules/complexity
  complexity: ["error", 20],
  // require return statements to either always or never specify values
  // https://eslint.org/docs/rules/consistent-return
  "consistent-return": ["error", { treatUndefinedAsUnspecified: false }],
  // enforces consistent naming when capturing the current execution context
  // https://eslint.org/docs/latest/rules/consistent-this
  "consistent-this": "off",
  // specify curly brace conventions for all control statements
  // https://eslint.org/docs/rules/curly
  curly: ["error", "multi-line", "consistent"],
  // multiline
  // require default case in switch statements
  // https://eslint.org/docs/rules/default-case
  "default-case": ["error", { commentPattern: "^no default$" }],
  // Enforce default clauses in switch statements to be last
  // https://eslint.org/docs/rules/default-case-last
  "default-case-last": "error",
  // Enforce default parameters to be last
  // https://eslint.org/docs/rules/default-param-last
  "default-param-last": "error",
  // encourages use of dot notation whenever possible
  // https://eslint.org/docs/rules/dot-notation
  "dot-notation": ["error", { allowKeywords: true }],
  // require the use of === and !==
  // https://eslint.org/docs/rules/eqeqeq
  eqeqeq: ["error", "always", { null: "ignore" }],
  // requires function names to match the name of the variable or property to which they are
  // assigned
  // https://eslint.org/docs/rules/func-name-matching
  "func-name-matching": ["off"],
  // require function expressions to have a name
  // https://eslint.org/docs/rules/func-names
  "func-names": ["error", "as-needed"],
  // enforces use of function declarations or expressions
  // https://eslint.org/docs/rules/func-style
  "func-style": ["error", "declaration", { allowArrowFunctions: true }],
  // Require grouped accessor pairs in object literals and classes
  // https://eslint.org/docs/rules/grouped-accessor-pairs
  "grouped-accessor-pairs": ["error", "getBeforeSet"],
  // make sure for-in loops have an if statement
  // https://eslint.org/docs/rules/guard-for-in
  "guard-for-in": "error",
  // disallow specified identifiers
  // https://eslint.org/docs/rules/id-denylist
  "id-denylist": "off",
  // this option enforces minimum and maximum identifier lengths
  // https://eslint.org/docs/latest/rules/id-length
  "id-length": "off",
  // require identifiers to match the provided regular expression
  // https://eslint.org/docs/latest/rules/id-match
  "id-match": ["off"],
  // enforce or disallow variable initializations at definition
  // https://eslint.org/docs/latest/rules/init-declarations
  "init-declarations": "off",
  // Require or disallow logical assignment operator shorthand
  // https://eslint.org/docs/latest/rules/logical-assignment-operators
  "logical-assignment-operators": [
    "error",
    "always",
    { enforceForIfStatements: true }
  ],
  // enforce a maximum number of classes per file
  // https://eslint.org/docs/rules/max-classes-per-file
  "max-classes-per-file": ["error", 1],
  // specify the maximum depth that blocks can be nested
  // https://eslint.org/docs/latest/rules/max-depth
  "max-depth": ["off"],
  // specify the max number of lines in a file
  // https://eslint.org/docs/rules/max-lines
  "max-lines": ["off"],
  // enforce a maximum function length
  // https://eslint.org/docs/rules/max-lines-per-function
  "max-lines-per-function": ["off"],
  // specify the maximum depth callbacks can be nested
  // https://eslint.org/docs/latest/rules/max-nested-callbacks
  "max-nested-callbacks": "off",
  // limits the number of parameters that can be used in the function declaration.
  // https://eslint.org/docs/latest/rules/max-params
  "max-params": ["error", 3],
  // specify the maximum number of statement allowed in a function
  // https://eslint.org/docs/latest/rules/max-statements
  "max-statements": ["off"],
  // enforce a particular style for multiline comments
  // https://eslint.org/docs/rules/multiline-comment-style
  "multiline-comment-style": ["off"],
  // require a capital letter for constructors
  // https://eslint.org/docs/latest/rules/new-cap
  "new-cap": ["off"],
  // disallow the use of alert, confirm, and prompt
  // https://eslint.org/docs/rules/no-alert
  "no-alert": "error",
  // disallow use of the Array constructor
  // https://eslint.org/docs/latest/rules/no-array-constructor
  "no-array-constructor": "error",
  // disallow use of bitwise operators
  // https://eslint.org/docs/rules/no-bitwise
  "no-bitwise": "error",
  // disallow use of arguments.caller or arguments.callee
  // https://eslint.org/docs/rules/no-caller
  "no-caller": "error",
  // disallow lexical declarations in case/default clauses
  // https://eslint.org/docs/rules/no-case-declarations
  "no-case-declarations": "error",
  // disallow use of console
  // https://eslint.org/docs/latest/rules/no-console
  "no-console": "error",
  // disallow use of the continue statement
  // https://eslint.org/docs/rules/no-continue
  "no-continue": "error",
  // disallow deletion of variables
  // https://eslint.org/docs/latest/rules/no-delete-var
  "no-delete-var": "error",
  // disallow division operators explicitly at beginning of regular expression
  // https://eslint.org/docs/rules/no-div-regex
  "no-div-regex": "off",
  // disallow else after a return in an if
  // https://eslint.org/docs/rules/no-else-return
  "no-else-return": ["error", { allowElseIf: false }],
  // disallow empty statements
  // https://eslint.org/docs/rules/no-else-return
  "no-empty": ["error", { allowEmptyCatch: false }],
  // disallow empty functions, except for standalone funcs/arrows
  // https://eslint.org/docs/rules/no-empty-function
  "no-empty-function": [
    "error",
    {
      allow: [
        "functions",
        "arrowFunctions",
        "asyncFunctions",
        "generatorFunctions",
        "methods",
        "asyncMethods",
        "generatorMethods"
      ]
    }
  ],
  // Disallow empty static blocks
  // https://eslint.org/docs/latest/rules/no-empty-static-block
  "no-empty-static-block": "error",
  // disallow comparisons to null without a type-checking operator
  // https://eslint.org/docs/rules/no-eq-null
  "no-eq-null": "off",
  // disallow use of eval()
  // https://eslint.org/docs/rules/no-eval
  "no-eval": "error",
  // disallow adding to native types
  // https://eslint.org/docs/rules/no-extend-native
  "no-extend-native": "error",
  // disallow unnecessary function binding
  // https://eslint.org/docs/rules/no-extra-bind
  "no-extra-bind": "error",
  // disallow double-negation boolean casts in a boolean context
  // https://eslint.org/docs/rules/no-extra-boolean-cast
  "no-extra-boolean-cast": ["error", { enforceForLogicalOperands: true }],
  // disallow Unnecessary Labels
  // https://eslint.org/docs/rules/no-extra-label
  "no-extra-label": "error",
  // disallow reassignments of native objects or read-only globals
  // https://eslint.org/docs/rules/no-global-assign
  "no-global-assign": ["error", { exceptions: [] }],
  // disallow implicit type conversions
  // https://eslint.org/docs/rules/no-implicit-coercion
  "no-implicit-coercion": ["error", { disallowTemplateShorthand: true }],
  // disallow var and named functions in global scope
  // https://eslint.org/docs/rules/no-implicit-globals
  "no-implicit-globals": "off",
  // disallow use of eval()-like methods
  // https://eslint.org/docs/rules/no-implied-eval
  "no-implied-eval": "error",
  // disallow comments inline after code
  // https://eslint.org/docs/latest/rules/no-inline-comments
  "no-inline-comments": "off",
  // disallow this keywords outside of classes or class-like objects
  // https://eslint.org/docs/rules/no-invalid-this
  "no-invalid-this": "off",
  // disallow usage of __iterator__ property
  // https://eslint.org/docs/rules/no-iterator
  "no-iterator": "error",
  // disallow labels that share a name with a variable
  // https://eslint.org/docs/rules/no-label-var
  "no-label-var": "error",
  // disallow use of labels for anything other than loops and switches
  // https://eslint.org/docs/rules/no-labels
  "no-labels": ["error", { allowLoop: false, allowSwitch: false }],
  // disallow unnecessary nested blocks
  // https://eslint.org/docs/rules/no-lone-blocks
  "no-lone-blocks": "error",
  // disallow if as the only statement in an else block
  // https://eslint.org/docs/rules/no-lonely-if
  "no-lonely-if": "error",
  // disallow creation of functions within loops
  // https://eslint.org/docs/rules/no-loop-func
  "no-loop-func": "error",
  // disallow magic numbers
  // https://eslint.org/docs/rules/no-magic-numbers
  "no-magic-numbers": ["off"],
  // disallow use of chained assignment expressions
  // https://eslint.org/docs/rules/no-multi-assign
  "no-multi-assign": ["error"],
  // disallow use of multiline strings
  // https://eslint.org/docs/rules/no-multi-str
  "no-multi-str": "error",
  // disallow negated conditions
  // https://eslint.org/docs/rules/no-negated-condition
  "no-negated-condition": "off",
  // disallow nested ternary expressions
  // https://eslint.org/docs/latest/rules/no-nested-ternary
  "no-nested-ternary": "error",
  // disallow use of new operator when not part of the assignment or comparison
  // https://eslint.org/docs/rules/no-new
  "no-new": "error",
  // disallow use of new operator for Function object
  // https://eslint.org/docs/rules/no-new-func
  "no-new-func": "error",
  // disallows creating new instances of String, Number, and Boolean
  // https://eslint.org/docs/rules/no-new-wrappers
  "no-new-wrappers": "error",
  // Disallow \8 and \9 escape sequences in string literals
  // https://eslint.org/docs/rules/no-nonoctal-decimal-escape
  "no-nonoctal-decimal-escape": "error",
  // Disallow calls to the Object constructor without an argument
  // https://eslint.org/docs/latest/rules/no-object-constructor
  "no-object-constructor": "off",
  // disallow use of (old style) octal literals
  // https://eslint.org/docs/rules/no-octal
  "no-octal": "error",
  // disallow use of octal escape sequences in string literals, such as
  // https://eslint.org/docs/rules/no-octal-escape
  "no-octal-escape": "error",
  // disallow reassignment of function parameters
  // disallow parameter object manipulation except for specific exclusions
  // rule: https://eslint.org/docs/rules/no-param-reassign.html
  "no-param-reassign": [
    "error",
    {
      props: true,
      ignorePropertyModificationsFor: [
        "acc",
        // for reduce accumulators
        "accumulator",
        // for reduce accumulators
        "e",
        // for e.return value
        "ctx",
        // for Koa routing
        "context",
        // for Koa routing
        "req",
        // for Express requests
        "request",
        // for Express requests
        "res",
        // for Express responses
        "response",
        // for Express responses
        "$scope",
        // for Angular 1 scopes
        "staticContext"
        // for ReactRouter context
      ]
    }
  ],
  // disallow use of unary operators, ++ and --
  // https://eslint.org/docs/rules/no-plusplusÍ
  "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
  // disallow usage of __proto__ property
  // https://eslint.org/docs/rules/no-proto
  "no-proto": "error",
  // disallow declaring the same variable more than once
  // https://eslint.org/docs/rules/no-redeclare
  "no-redeclare": "error",
  // disallow multiple spaces in a regular expression literal
  // https://eslint.org/docs/latest/rules/no-regex-spaces
  "no-regex-spaces": "error",
  // Disallow specified names in exports
  // https://eslint.org/docs/rules/no-restricted-exports
  "no-restricted-exports": [
    "error",
    {
      restrictedNamedExports: [
        "default",
        // use `export default` to provide a default export
        "then"
        // this will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
      ]
    }
  ],
  // disallow specific globals
  // https://eslint.org/docs/latest/rules/no-restricted-globals
  "no-restricted-globals": [
    "error",
    {
      name: "isFinite",
      message: "Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite"
    },
    {
      name: "isNaN",
      message: "Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan"
    }
  ].concat(confusingBrowserGlobals),
  // disallow specific imports
  // https://eslint.org/docs/rules/no-restricted-imports
  "no-restricted-imports": [
    "off",
    {
      paths: [],
      patterns: []
    }
  ],
  // disallow certain object properties
  // https://eslint.org/docs/rules/no-restricted-properties
  "no-restricted-properties": [
    "error",
    {
      object: "arguments",
      property: "callee",
      message: "arguments.callee is deprecated"
    },
    {
      object: "global",
      property: "isFinite",
      message: "Please use Number.isFinite instead"
    },
    {
      object: "self",
      property: "isFinite",
      message: "Please use Number.isFinite instead"
    },
    {
      object: "window",
      property: "isFinite",
      message: "Please use Number.isFinite instead"
    },
    {
      object: "global",
      property: "isNaN",
      message: "Please use Number.isNaN instead"
    },
    {
      object: "self",
      property: "isNaN",
      message: "Please use Number.isNaN instead"
    },
    {
      object: "window",
      property: "isNaN",
      message: "Please use Number.isNaN instead"
    },
    {
      property: "__defineGetter__",
      message: "Please use Object.defineProperty instead."
    },
    {
      property: "__defineSetter__",
      message: "Please use Object.defineProperty instead."
    },
    {
      object: "Math",
      property: "pow",
      message: "Use the exponentiation operator (**) instead."
    }
  ],
  // disallow certain syntax forms
  // https://eslint.org/docs/rules/no-restricted-syntax
  "no-restricted-syntax": [
    "error",
    {
      selector: "ForInStatement",
      message: "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array."
    },
    {
      selector: "ForOfStatement",
      message: "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations."
    },
    {
      selector: "LabeledStatement",
      message: "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand."
    },
    {
      selector: "WithStatement",
      message: "`with` is disallowed in strict mode because it makes code impossible to predict and optimize."
    }
  ],
  // disallow use of assignment in return statement
  // https://eslint.org/docs/rules/no-return-assign
  "no-return-assign": ["error", "always"],
  // disallow use of `javascript:` urls.
  // https://eslint.org/docs/rules/no-script-url
  "no-script-url": "error",
  // disallow use of comma operator
  // https://eslint.org/docs/rules/no-sequences
  "no-sequences": "error",
  // disallow declaration of variables already declared in the outer scope
  // https://eslint.org/docs/latest/rules/no-shadow
  "no-shadow": "off",
  // disallow shadowing of names such as arguments
  // https://eslint.org/docs/latest/rules/no-shadow-restricted-names
  "no-shadow-restricted-names": "error",
  // disallow the use of ternary operators
  // https://eslint.org/docs/latest/rules/no-ternary
  "no-ternary": "off",
  // restrict what can be thrown as an exception
  // https://eslint.org/docs/rules/no-throw-literal
  "no-throw-literal": "error",
  // disallow use of undefined when initializing variables
  // https://eslint.org/docs/latest/rules/no-undef-init
  "no-undef-init": "error",
  // disallow use of undefined variable
  // https://eslint.org/docs/rules/no-undefined
  "no-undefined": "off",
  // disallow dangling underscores in identifiers
  // https://eslint.org/docs/rules/no-underscore-dangle
  "no-underscore-dangle": [
    "error",
    {
      allow: ["__dirname"],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: true
    }
  ],
  // disallow the use of Boolean literals in conditional expressions
  // also, prefer `a || b` over `a ? a : b`
  // https://eslint.org/docs/rules/no-unneeded-ternary
  "no-unneeded-ternary": ["error", { defaultAssignment: false }],
  // disallow usage of expressions in statement position
  // https://eslint.org/docs/rules/no-unused-expressions
  "no-unused-expressions": [
    "error",
    {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false
    }
  ],
  // disallow unused labels
  // https://eslint.org/docs/rules/no-unused-labels
  "no-unused-labels": "error",
  // disallow unnecessary .call() and .apply()
  // https://eslint.org/docs/rules/no-useless-call
  "no-useless-call": "off",
  // Disallow unnecessary catch clauses
  // https://eslint.org/docs/rules/no-useless-catch
  "no-useless-catch": "error",
  // disallow useless computed property keys
  // https://eslint.org/docs/rules/no-useless-computed-key
  "no-useless-computed-key": "error",
  // disallow useless string concatenation
  // https://eslint.org/docs/rules/no-useless-concat
  "no-useless-concat": "error",
  // disallow unnecessary constructor
  // https://eslint.org/docs/rules/no-useless-constructor
  "no-useless-constructor": "error",
  // disallow unnecessary string escaping
  // https://eslint.org/docs/rules/no-useless-escape
  "no-useless-escape": "error",
  // disallow renaming import, export, and destructured assignments to the same name
  // https://eslint.org/docs/rules/no-useless-rename
  "no-useless-rename": [
    "error",
    {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false
    }
  ],
  // disallow redundant return; keywords
  // https://eslint.org/docs/rules/no-useless-return
  "no-useless-return": "error",
  // require let or const instead of var
  // https://eslint.org/docs/latest/rules/no-var
  "no-var": "error",
  // disallow use of void operator
  // https://eslint.org/docs/rules/no-void
  "no-void": "error",
  // disallow usage of configurable warning terms in comments: e.g. todo
  // https://eslint.org/docs/rules/no-warning-comments
  "no-warning-comments": ["off"],
  // disallow use of the with statement
  // https://eslint.org/docs/rules/no-with
  "no-with": "error",
  // require method and property shorthand syntax for object literals
  // https://eslint.org/docs/rules/object-shorthand
  "object-shorthand": [
    "error",
    "properties",
    {
      avoidQuotes: true
    }
  ],
  // allow just one var statement per function
  // https://eslint.org/docs/latest/rules/one-var
  "one-var": ["error", "never"],
  // require assignment operator shorthand where possible or prohibit it entirely
  // https://eslint.org/docs/rules/operator-assignment
  "operator-assignment": ["error", "always"],
  // suggest using arrow functions as callbacks
  // https://eslint.org/docs/latest/rules/prefer-arrow-callback
  "prefer-arrow-callback": [
    "error",
    {
      allowNamedFunctions: false,
      allowUnboundThis: true
    }
  ],
  // suggest using of const declaration for variables that are never modified after declared
  // https://eslint.org/docs/latest/rules/prefer-const
  "prefer-const": [
    "error",
    {
      destructuring: "any",
      ignoreReadBeforeAssign: true
    }
  ],
  // Prefer destructuring from arrays and objects
  // https://eslint.org/docs/rules/prefer-destructuring
  "prefer-destructuring": [
    "error",
    {
      VariableDeclarator: {
        array: false,
        object: true
      },
      AssignmentExpression: {
        array: true,
        object: false
      }
    },
    {
      enforceForRenamedProperties: false
    }
  ],
  // Disallow the use of Math.pow in favor of the ** operator
  // https://eslint.org/docs/rules/prefer-exponentiation-operator
  "prefer-exponentiation-operator": "error",
  // Suggest using named capture group in regular expression
  // https://eslint.org/docs/rules/prefer-named-capture-group
  "prefer-named-capture-group": "off",
  // disallow parseInt() in favor of binary, octal, and hexadecimal literals
  // https://eslint.org/docs/rules/prefer-numeric-literals
  "prefer-numeric-literals": "error",
  // Disallow use of Object.prototype.hasOwnProperty.call() and prefer use of Object.hasOwn()
  // https://eslint.org/docs/latest/rules/prefer-object-has-own
  "prefer-object-has-own": "off",
  // Prefer use of an object spread over Object.assign
  // https://eslint.org/docs/rules/prefer-object-spread
  "prefer-object-spread": "error",
  // require using Error objects as Promise rejection reasons
  // https://eslint.org/docs/rules/prefer-promise-reject-errors
  "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],
  // Disallow use of the RegExp constructor in favor of regular expression literals
  // https://eslint.org/docs/rules/prefer-regex-literals
  "prefer-regex-literals": [
    "error",
    {
      disallowRedundantWrapping: true
    }
  ],
  // use rest parameters instead of arguments
  // https://eslint.org/docs/rules/prefer-rest-params
  "prefer-rest-params": "error",
  // suggest using the spread syntax instead of .apply()
  // https://eslint.org/docs/rules/prefer-spread
  "prefer-spread": "error",
  // suggest using template literals instead of string concatenation
  // https://eslint.org/docs/rules/prefer-template
  "prefer-template": "error",
  // require use of the second argument for parseInt()
  // https://eslint.org/docs/rules/radix
  radix: "error",
  // require `await` in `async function` (note: this is a horrible rule that should never be used)
  // https://eslint.org/docs/rules/require-await
  "require-await": "off",
  // Enforce the use of u flag on RegExp
  // https://eslint.org/docs/rules/require-unicode-regexp
  "require-unicode-regexp": "off",
  // disallow generator functions that do not have yield
  // https://eslint.org/docs/rules/require-yield
  "require-yield": "error",
  // import sorting
  // https://eslint.org/docs/rules/sort-imports
  "sort-imports": ["off"],
  // requires object keys to be sorted
  // https://eslint.org/docs/latest/rules/sort-keys
  "sort-keys": ["off"],
  // sort variables within the same declaration block
  // https://eslint.org/docs/latest/rules/sort-vars
  "sort-vars": "off",
  // babel inserts `'use strict';` for us
  // https://eslint.org/docs/latest/rules/strict
  strict: ["error", "never"],
  // require a Symbol description
  // https://eslint.org/docs/rules/symbol-description
  "symbol-description": "error",
  // requires to declare all vars on top of their containing scope
  // https://eslint.org/docs/rules/vars-on-top
  "vars-on-top": "error",
  // require or disallow Yoda conditions
  // https://eslint.org/docs/rules/yoda
  yoda: "error"
};
const layoutFormatting = {
  // enforce position of line comments
  // https://eslint.org/docs/rules/line-comment-position
  "line-comment-position": ["off"],
  // require or disallow the Unicode Byte Order Mark
  // https://eslint.org/docs/rules/unicode-bom
  "unicode-bom": ["error", "never"]
};
const rules$5 = {
  ...js.configs.recommended.rules,
  ...possibleProblems,
  ...suggestions,
  ...layoutFormatting
};
const buildIn$1 = { rules: rules$5 };
const base = {
  // Enforce that class methods utilize this.
  // https://typescript-eslint.io/rules/class-methods-use-this
  // use eslint rule
  "class-methods-use-this": "off",
  // Require return statements to either always or never specify values.
  // https://typescript-eslint.io/rules/consistent-return/
  // TODO emit error: Could not find "consistent-return" in plugin "@typescript-eslint", so disable this rule
  // 'consistent-return': 'error',
  // Enforce consistent usage of type exports.
  // https://typescript-eslint.io/rules/consistent-type-exports/
  "consistent-type-exports": "off",
  // Enforce consistent usage of type imports.
  // https://typescript-eslint.io/rules/consistent-type-imports/
  "consistent-type-imports": [
    "error",
    {
      fixStyle: "separate-type-imports"
    }
  ],
  // Enforce default parameters to be last.
  // https://typescript-eslint.io/rules/default-param-last/
  // use eslint rule
  "default-param-last": "off",
  // Require explicit return types on functions and class methods.
  // https://typescript-eslint.io/rules/
  "explicit-function-return-type": "off",
  // Require explicit accessibility modifiers on class properties and methods.
  // https://typescript-eslint.io/rules/explicit-member-accessibility
  "explicit-member-accessibility": "error",
  // Require explicit return and argument types on exported functions' and classes' public class methods.
  // https://typescript-eslint.io/rules/explicit-module-boundary-types/
  "explicit-module-boundary-types": "off",
  // Require or disallow initialization in variable declarations.
  // https://typescript-eslint.io/rules/init-declarations/
  // use eslint rule
  "init-declarations": "off",
  // Enforce a maximum number of parameters in function definitions.
  // https://typescript-eslint.io/rules/max-params/
  // use eslint rule
  "max-params": "off",
  // member-ordering
  // https://typescript-eslint.io/rules/member-ordering/
  // priority：
  // 0. signature
  // 1. static > instance > decorated > abstract
  // 2. field > constructor > get > set > method
  // 3. public > protected > private > #private
  // 4. not readonly > readonly
  // 5. bottom of all
  "member-ordering": [
    "error",
    {
      default: [
        // #region signature
        "signature",
        "call-signature",
        "readonly-signature",
        // #endregion
        // #region static
        // Fields
        "public-static-field",
        "public-static-readonly-field",
        "protected-static-readonly-field",
        "protected-static-field",
        "private-static-field",
        "private-static-readonly-field",
        "#private-static-field",
        "#private-static-readonly-field",
        "static-field",
        "static-readonly-field",
        "static-initialization",
        // Getters
        "public-static-get",
        "protected-static-get",
        "private-static-get",
        "#private-static-get",
        "static-get",
        // Setters
        "public-static-set",
        "protected-static-set",
        "private-static-set",
        "#private-static-set",
        "static-set",
        // Methods
        "public-static-method",
        "protected-static-method",
        "private-static-method",
        "#private-static-method",
        "static-method",
        // #endregion
        // #region instance
        // Fields
        "public-instance-field",
        "public-instance-readonly-field",
        "protected-instance-field",
        "protected-instance-readonly-field",
        "private-instance-field",
        "private-instance-readonly-field",
        "#private-instance-field",
        "#private-instance-readonly-field",
        "instance-field",
        "instance-readonly-field",
        // Constructors
        "public-constructor",
        "protected-constructor",
        "private-constructor",
        "constructor",
        // Getters
        "public-instance-get",
        "protected-instance-get",
        "private-instance-get",
        "#private-instance-get",
        "instance-get",
        // Setters
        "public-instance-set",
        "protected-instance-set",
        "private-instance-set",
        "#private-instance-set",
        "instance-set",
        // Methods
        "public-instance-method",
        "protected-instance-method",
        "private-instance-method",
        "#private-instance-method",
        "instance-method",
        // #endregion
        // #region decorated
        // Fields
        "public-decorated-field",
        "public-decorated-readonly-field",
        "protected-decorated-field",
        "protected-decorated-readonly-field",
        "private-decorated-field",
        "private-decorated-readonly-field",
        "decorated-field",
        "decorated-readonly-field",
        // Getters
        "public-decorated-get",
        "protected-decorated-get",
        "private-decorated-get",
        "decorated-get",
        // Setters
        "public-decorated-set",
        "protected-decorated-set",
        "private-decorated-set",
        "decorated-set",
        // Methods
        "public-decorated-method",
        "protected-decorated-method",
        "private-decorated-method",
        "decorated-method",
        // #endregion
        // #region abstract
        // Fields
        "public-abstract-field",
        "public-abstract-readonly-field",
        "protected-abstract-field",
        "protected-abstract-readonly-field",
        "abstract-field",
        "abstract-readonly-field",
        // Getters
        "public-abstract-get",
        "protected-abstract-get",
        "abstract-get",
        // Setters
        "public-abstract-set",
        "protected-abstract-set",
        "abstract-set",
        // Methods
        "public-abstract-method",
        "protected-abstract-method",
        "abstract-method",
        // #endregion
        // #region bottom of all
        "field",
        "get",
        "set",
        "method"
        // #endregion
      ]
    }
  ],
  // Enforce using a particular method signature syntax.
  // https://typescript-eslint.io/rules/method-signature-style/
  "method-signature-style": ["error", "property"],
  // Enforce naming conventions for everything across a codebase.
  // https://typescript-eslint.io/rules/naming-convention/#format
  "naming-convention": "off",
  // Disallow duplicate class members.
  // https://typescript-eslint.io/rules/no-dupe-class-members/
  // use eslint rule
  "no-dupe-class-members": "off",
  // Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers.
  // https://typescript-eslint.io/rules/no-import-type-side-effects/
  "no-import-type-side-effects": "error",
  // Disallow this keywords outside of classes or class-like objects.
  // https://typescript-eslint.io/rules/no-invalid-this/
  // use eslint rule
  "no-invalid-this": "off",
  // Disallow function declarations that contain unsafe references inside loop statements.
  // https://typescript-eslint.io/rules/no-loop-func/
  // use eslint rule
  "no-loop-func": "off",
  // Disallow magic numbers.
  // https://typescript-eslint.io/rules/no-magic-numbers/
  // use eslint rule
  "no-magic-numbers": "off",
  // Disallow variable redeclaration.
  // https://typescript-eslint.io/rules/no-redeclare/
  // use eslint rule
  "no-redeclare": "off",
  // Prefer the newer ES6-style imports over require().
  // https://typescript-eslint.io/rules/no-require-imports/
  "no-require-imports": ["error", { allow: ["/package\\.json$"] }],
  // Disallow specified modules when loaded by import.
  // https://typescript-eslint.io/rules/no-restricted-imports/
  // use eslint rule
  "no-restricted-imports": "off",
  // Disallow variable declarations from shadowing variables declared in the outer scope.
  // https://typescript-eslint.io/rules/no-shadow/
  "no-shadow": "off",
  // Disallow unnecessary namespace qualifiers.
  // https://typescript-eslint.io/rules/no-unnecessary-qualifier/
  "no-unnecessary-qualifier": "off",
  // Require unary negation to take a number.
  // https://typescript-eslint.io/rules/no-unsafe-unary-minus/
  "no-unsafe-unary-minus": "error",
  // Disallow unused expressions.
  // https://typescript-eslint.io/rules/no-unused-expressions/
  // use eslint rule
  "no-unused-expressions": "off",
  // Disallow the use of variables before they are defined.
  // https://typescript-eslint.io/rules/no-use-before-define/
  "no-use-before-define": [
    "error",
    {
      enums: true,
      typedefs: true,
      ignoreTypeReferences: false
    }
  ],
  // Disallow empty exports that don't change anything in a module file.
  // https://typescript-eslint.io/rules/no-useless-empty-export/
  "no-useless-empty-export": "error",
  // Require or disallow parameter properties in class constructors.
  // https://typescript-eslint.io/rules/parameter-properties/
  "parameter-properties": "off",
  // Require destructuring from arrays and/or objects.
  // https://typescript-eslint.io/rules/prefer-destructuring/#enforcefordeclarationwithtypeannotation
  // use eslint rule
  "prefer-destructuring": "off",
  // Require each enum member value to be explicitly initialized.
  // https://typescript-eslint.io/rules/prefer-enum-initializers/
  "prefer-enum-initializers": "off",
  // Enforce the use of Array.prototype.find() over Array.prototype.filter() followed by [0] when looking for a single result.
  // https://typescript-eslint.io/rules/prefer-find/
  "prefer-find": "off",
  // Require private members to be marked as readonly if they're never modified outside of the constructor.
  // https://typescript-eslint.io/rules/prefer-readonly/
  "prefer-readonly": "off",
  // Require function parameters to be typed as readonly to prevent accidental mutation of inputs.
  // https://typescript-eslint.io/rules/prefer-readonly-parameter-types/
  "prefer-readonly-parameter-types": "off",
  // Enforce RegExp#exec over String#match if no global flag is provided.
  // https://typescript-eslint.io/rules/prefer-regexp-exec/
  "prefer-regexp-exec": "off",
  // Require any function or method that returns a Promise to be marked async.
  // https://typescript-eslint.io/rules/promise-function-async/
  "promise-function-async": "off",
  // Require Array#sort and Array#toSorted calls to always provide a compareFunction.
  // https://typescript-eslint.io/rules/require-array-sort-compare/
  "require-array-sort-compare": ["error", { ignoreStringArrays: true }],
  // Enforce consistent returning of awaited values.
  // https://typescript-eslint.io/rules/return-await
  "return-await": "off",
  // Enforce constituents of a type union/intersection to be sorted alphabetically.
  // https://typescript-eslint.io/rules/sort-type-constituents/
  "sort-type-constituents": "off",
  "strict-boolean-expressions": [
    "error",
    {
      allowString: false,
      allowNumber: false,
      allowNullableObject: false,
      allowNullableBoolean: false,
      allowNullableString: false,
      allowNullableNumber: false,
      allowNullableEnum: false,
      allowAny: false,
      allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false
    }
  ],
  // Require switch-case statements to be exhaustive.
  // https://typescript-eslint.io/rules/switch-exhaustiveness-check/
  "switch-exhaustiveness-check": "off",
  // Require type annotations in certain places.
  // https://typescript-eslint.io/rules/typedef/
  typedef: [
    "error",
    {
      arrayDestructuring: false,
      arrowParameter: false,
      memberVariableDeclaration: false,
      objectDestructuring: false,
      parameter: false,
      propertyDeclaration: true,
      variableDeclaration: false,
      variableDeclarationIgnoreFunction: false
    }
  ]
};
const stylistic$1 = {
  // Require that function overload signatures be consecutive.
  // https://typescript-eslint.io/rules/adjacent-overload-signatures
  "adjacent-overload-signatures": "error",
  // Require consistently using either T[] or Array<T> for arrays.
  // https://typescript-eslint.io/rules/array-type
  "array-type": "off",
  // Disallow // tslint:<rule-flag> comments.
  // https://typescript-eslint.io/rules/ban-tslint-comment/
  "ban-tslint-comment": "off",
  // Enforce that literals on classes are exposed in a consistent style.
  // https://typescript-eslint.io/rules/class-literal-property-style/
  "class-literal-property-style": ["error", "fields"],
  // Enforce specifying generic type arguments on type annotation or constructor name of a constructor call.
  // https://typescript-eslint.io/rules/consistent-generic-constructors/
  "consistent-generic-constructors": ["error", "constructor"],
  // Require or disallow the Record type.
  // https://typescript-eslint.io/rules/consistent-indexed-object-style/
  "consistent-indexed-object-style": ["error", "record"],
  // Enforce consistent usage of type assertions.
  // https://typescript-eslint.io/rules/consistent-type-assertions/
  "consistent-type-assertions": [
    "error",
    {
      assertionStyle: "as",
      objectLiteralTypeAssertions: "never"
    }
  ],
  // Enforce type definitions to consistently use either interface or type.
  // https://typescript-eslint.io/rules/consistent-type-definitions/
  "consistent-type-definitions": ["error", "interface"],
  // Enforce dot notation whenever possible.
  // https://typescript-eslint.io/rules/dot-notation/
  // use eslint rule
  "dot-notation": ["off"],
  // Disallow non-null assertion in locations that may be confusing.
  // https://typescript-eslint.io/rules/no-confusing-non-null-assertion/
  "no-confusing-non-null-assertion": "off",
  // Disallow empty functions.
  // https://typescript-eslint.io/rules/no-empty-function/
  // use eslint rule
  "no-empty-function": "off",
  // Disallow the declaration of empty interfaces.
  // https://typescript-eslint.io/rules/no-empty-interface/
  "no-empty-interface": "error",
  // Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean.
  // https://typescript-eslint.io/rules/no-inferrable-types/
  "no-inferrable-types": "error",
  // Enforce non-null assertions over explicit type casts.
  // https://typescript-eslint.io/rules/non-nullable-type-assertion-style/
  "non-nullable-type-assertion-style": "off",
  // Enforce the use of for-of loop over the standard for loop where possible.
  // https://typescript-eslint.io/rules/prefer-for-of/
  "prefer-for-of": "error",
  // Enforce using function types instead of interfaces with call signatures.
  // https://typescript-eslint.io/rules/prefer-function-type/
  "prefer-function-type": "error",
  // Enforce using the nullish coalescing operator instead of logical assignments or chaining.
  // https://typescript-eslint.io/rules/prefer-nullish-coalescing
  "prefer-nullish-coalescing": "error",
  // Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects.
  // https://typescript-eslint.io/rules/prefer-optional-chain/
  "prefer-optional-chain": "error",
  // Enforce using String#startsWith and String#endsWith over other equivalent methods of checking substrings.
  // https://typescript-eslint.io/rules/prefer-string-starts-ends-with/
  "prefer-string-starts-ends-with": "error"
};
const recommended = {
  // Disallow awaiting a value that is not a Thenable.
  // https://typescript-eslint.io/rules/await-thenable/
  "await-thenable": "off",
  // Disallow @ts-<directive> comments or require descriptions after directives.
  // https://typescript-eslint.io/rules/ban-ts-comment/
  "ban-ts-comment": "off",
  // Disallow certain types.
  // https://typescript-eslint.io/rules/ban-types/
  "ban-types": "off",
  // Disallow generic Array constructors.
  // https://typescript-eslint.io/rules/no-array-constructor/
  // use eslint rule
  "no-array-constructor": "off",
  // Require .toString() to only be called on objects which provide useful information when stringified.
  // https://typescript-eslint.io/rules/no-base-to-string/
  "no-base-to-string": "off",
  // Disallow duplicate enum member values
  // https://typescript-eslint.io/rules/no-duplicate-enum-values/
  "no-duplicate-enum-values": "error",
  // Disallow duplicate constituents of union or intersection types.
  // https://typescript-eslint.io/rules/no-duplicate-type-constituents/
  "no-duplicate-type-constituents": "off",
  // Disallow the any type.
  // https://typescript-eslint.io/rules/no-explicit-any/
  "no-explicit-any": "warn",
  // Disallow extra non-null assertions.
  // https://typescript-eslint.io/rules/no-extra-non-null-assertion/
  "no-extra-non-null-assertion": "error",
  // Require Promise-like statements to be handled appropriately.
  // https://typescript-eslint.io/rules/no-floating-promises/
  "no-floating-promises": "off",
  // Disallow iterating over an array with a for-in loop.
  // https://typescript-eslint.io/rules/no-for-in-array/
  "no-for-in-array": "off",
  // Disallow the use of eval()-like methods.
  // https://typescript-eslint.io/rules/no-implied-eval/
  // use eslint rule https://eslint.org/docs/latest/rules/no-implied-eval
  "no-implied-eval": "off",
  // Disallow literal numbers that lose precision.
  // https://typescript-eslint.io/rules/no-loss-of-precision/
  // use eslint rule
  "no-loss-of-precision": "off",
  // Enforce valid definition of new and constructor.
  // https://typescript-eslint.io/rules/no-misused-new/
  "no-misused-new": "off",
  // Disallow Promises in places not designed to handle them
  // https://typescript-eslint.io/rules/no-misused-promises/
  "no-misused-promises": "off",
  // Disallow TypeScript namespaces.
  // https://typescript-eslint.io/rules/no-namespace/
  "no-namespace": [
    "error",
    {
      allowDeclarations: true,
      allowDefinitionFiles: true
    }
  ],
  // Disallow non-null assertions after an optional chain expression.
  // https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain/
  "no-non-null-asserted-optional-chain": "error",
  // Disallow members of unions and intersections that do nothing or override type information.
  // https://typescript-eslint.io/rules/no-redundant-type-constituents/
  "no-redundant-type-constituents": "off",
  // Disallow aliasing this.
  // https://typescript-eslint.io/rules/no-this-alias/
  "no-this-alias": [
    "error",
    {
      allowDestructuring: true
    }
  ],
  // Disallow type assertions that do not change the type of an expression.
  // https://typescript-eslint.io/rules/no-unnecessary-type-assertion/
  "no-unnecessary-type-assertion": "off",
  // Disallow unnecessary constraints on generic types.
  // https://typescript-eslint.io/rules/no-unnecessary-type-constraint/
  "no-unnecessary-type-constraint": "error",
  // Disallow calling a function with a value with type any.
  // https://typescript-eslint.io/rules/no-unsafe-argument/
  "no-unsafe-argument": "off",
  // Disallow assigning a value with type any to variables and properties.
  // https://typescript-eslint.io/rules/no-unsafe-assignment/
  "no-unsafe-assignment": "off",
  // Disallow calling a value with type any.
  // https://typescript-eslint.io/rules/no-unsafe-call/
  "no-unsafe-call": "off",
  // Disallow unsafe declaration merging.
  // https://typescript-eslint.io/rules/no-unsafe-declaration-merging/
  "no-unsafe-declaration-merging": "off",
  // Disallow comparing an enum value with a non-enum value.
  // https://typescript-eslint.io/rules/no-unsafe-enum-comparison/
  "no-unsafe-enum-comparison": "off",
  // Disallow member access on a value with type any.
  // https://typescript-eslint.io/rules/no-unsafe-member-access/
  "no-unsafe-member-access": "off",
  // Disallow returning a value with type any from a function.
  // https://typescript-eslint.io/rules/no-unsafe-return/
  "no-unsafe-return": "off",
  // Disallow unused variables.
  // https://typescript-eslint.io/rules/no-unused-vars/
  // use eslint rule
  "no-unused-vars": "off",
  // Disallow require statements except in import statements.
  // https://typescript-eslint.io/rules/no-var-requires/
  // repeat with https://typescript-eslint.io/rules/no-require-imports/
  "no-var-requires": "off",
  // Enforce the use of as const over literal type.
  // https://typescript-eslint.io/rules/prefer-as-const/
  "prefer-as-const": "error",
  // Disallow async functions which have no await expression.
  // https://typescript-eslint.io/rules/require-await/
  // use eslint rule
  "require-await": "off",
  // Require both operands of addition to be the same type and be bigint, number, or string.
  // https://typescript-eslint.io/rules/restrict-plus-operands/
  "restrict-plus-operands": [
    "error",
    {
      allowAny: false,
      allowBoolean: false,
      allowNullish: false,
      allowNumberAndString: false,
      allowRegExp: false,
      skipCompoundAssignments: false
    }
  ],
  // Enforce template literal expressions to be of string type.
  // https://typescript-eslint.io/rules/restrict-template-expressions/
  "restrict-template-expressions": [
    "error",
    {
      allowAny: false,
      allowBoolean: false,
      allowNullish: false,
      allowNumber: false,
      allowRegExp: false
    }
  ],
  // Disallow certain triple slash directives in favor of ES6-style import declarations.
  // https://typescript-eslint.io/rules/triple-slash-reference/
  "triple-slash-reference": [
    "error",
    {
      path: "never",
      types: "always",
      lib: "always"
    }
  ],
  // Enforce unbound methods are called with their expected scope.
  // https://typescript-eslint.io/rules/unbound-method/
  "unbound-method": "off"
};
const strict = {
  // Disallow using the delete operator on array values.
  // https://typescript-eslint.io/rules/no-array-delete/
  "no-array-delete": "error",
  // Require expressions of type void to appear in statement position.
  // https://typescript-eslint.io/rules/no-confusing-void-expression/
  "no-confusing-void-expression": "off",
  // Disallow using the delete operator on computed key expressions.
  // https://typescript-eslint.io/rules/no-dynamic-delete/
  "no-dynamic-delete": "off",
  // Disallow classes used as namespaces.
  // https://typescript-eslint.io/rules/no-extraneous-class/
  "no-extraneous-class": "off",
  // Disallow void type outside of generic or return types.
  // https://typescript-eslint.io/rules/no-invalid-void-type/
  "no-invalid-void-type": "error",
  // Disallow the void operator except when used to discard a value.
  // https://typescript-eslint.io/rules/no-meaningless-void-operator/
  "no-meaningless-void-operator": "error",
  // Disallow enums from having both number and string members.
  // https://typescript-eslint.io/rules/no-mixed-enums/
  "no-mixed-enums": "error",
  // Disallow non-null assertions in the left operand of a nullish coalescing operator.
  // https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing/
  "no-non-null-asserted-nullish-coalescing": "error",
  // Disallow non-null assertions using the ! postfix operator.
  // https://typescript-eslint.io/rules/no-non-null-assertion/
  "no-non-null-assertion": "off",
  // Disallow throwing literals as exceptions.
  // https://typescript-eslint.io/rules/no-throw-literal/
  "no-throw-literal": "off",
  // Disallow unnecessary equality comparisons against boolean literals.
  // https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare/
  "no-unnecessary-boolean-literal-compare": "off",
  // Disallow conditionals where the type is always truthy or always falsy.
  // https://typescript-eslint.io/rules/no-unnecessary-condition/
  "no-unnecessary-condition": "off",
  // Disallow type arguments that are equal to the default.
  // https://typescript-eslint.io/rules/no-unnecessary-type-arguments/
  "no-unnecessary-type-arguments": "off",
  // Disallow unnecessary constructors.
  // https://typescript-eslint.io/rules/no-useless-constructor/
  // use eslint rule
  "no-useless-constructor": "off",
  // Disallow unnecessary template literals.
  // https://typescript-eslint.io/rules/no-useless-template-literals/
  "no-useless-template-literals": "error",
  // Enforce includes method over indexOf method.
  // https://typescript-eslint.io/rules/prefer-includes/
  "prefer-includes": "error",
  // Require all enum members to be literal values.
  // https://typescript-eslint.io/rules/prefer-literal-enum-member/
  "prefer-literal-enum-member": "error",
  // Require using namespace keyword over module keyword to declare custom TypeScript modules.
  // https://typescript-eslint.io/rules/prefer-namespace-keyword/
  "prefer-namespace-keyword": "error",
  // Require using Error objects as Promise rejection reasons.
  // https://typescript-eslint.io/rules/prefer-promise-reject-errors/
  // use eslint rule
  "prefer-promise-reject-errors": "off",
  // Enforce using type parameter when calling Array#reduce instead of casting.
  // https://typescript-eslint.io/rules/prefer-reduce-type-parameter/
  "prefer-reduce-type-parameter": "off",
  // Enforce that this is used when only this type is returned.
  // https://typescript-eslint.io/rules/prefer-return-this-type/
  "prefer-return-this-type": "off",
  // Enforce using @ts-expect-error over @ts-ignore.
  // https://typescript-eslint.io/rules/prefer-ts-expect-error/
  "prefer-ts-expect-error": "error",
  // Disallow two overloads that could be unified into one with a union or an optional/rest parameter.
  // https://typescript-eslint.io/rules/unified-signatures/
  "unified-signatures": ["error", { ignoreDifferentlyNamedParameters: false }]
};
function addPluginNameToRules(pluginName, rules2) {
  return Object.keys(rules2).reduce(
    (result, key) => Object.assign(result, { [`${pluginName}/${key}`]: rules2[key] }),
    {}
  );
}
function addPluginName(pluginName, rules2) {
  if (rules2 instanceof Array) {
    return rules2.reduce(
      (result, group) => Object.assign(
        result,
        addPluginNameToRules(pluginName, group)
      ),
      {}
    );
  }
  return addPluginNameToRules(pluginName, rules2);
}
const ruleGroups$1 = [base, stylistic$1, recommended, strict];
function getRules$2(pluginName) {
  return addPluginName(pluginName, ruleGroups$1);
}
const rules$4 = { getRules: getRules$2 };
const config = {
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      // @see https://typescript-eslint.io/rules/consistent-type-imports/#usage-with-emitdecoratormetadata
      emitDecoratorMetadata: true
    }
  },
  plugins: {
    "@typescript-eslint": tseslint.plugin
  },
  rules: rules$4.getRules("@typescript-eslint")
};
const rules$2 = {
  // Enforce linebreaks after opening and before closing array brackets
  // https://eslint.style/rules/default/array-bracket-newline
  "array-bracket-newline": ["error", "consistent"],
  // Enforce consistent spacing inside array brackets
  // https://eslint.style/rules/default/array-bracket-spacing
  "array-bracket-spacing": ["error", "never"],
  // Enforce line breaks after each array element
  // https://eslint.style/rules/default/array-element-newline
  "array-element-newline": ["error", "consistent"],
  // Require parentheses around arrow function
  // https://eslint.style/rules/default/arrow-parens
  "arrow-parens": ["error", "always"],
  // Enforce consistent spacing before and after the arrow in arrow functions
  // https://eslint.style/rules/default/arrow-spacing
  "arrow-spacing": ["error", { before: true, after: true }],
  // Disallow or enforce spaces inside of blocks after opening block and before closing block
  // https://eslint.style/rules/default/block-spacing
  "block-spacing": ["error", "always"],
  // Enforce consistent brace style for blocks
  // https://eslint.style/rules/default/brace-style
  "brace-style": ["error", "1tbs", { allowSingleLine: true }],
  // Require or disallow trailing commas
  // https://eslint.style/rules/default/comma-dangle
  "comma-dangle": ["error", "always-multiline"],
  // Enforce consistent spacing before and after commas
  // https://eslint.style/rules/default/comma-spacing
  "comma-spacing": ["error", { before: false, after: true }],
  // Enforce consistent comma style
  // https://eslint.style/rules/default/comma-style
  "comma-style": ["error", "last"],
  // Enforce consistent spacing inside computed property brackets
  // https://eslint.style/rules/default/computed-property-spacing
  "computed-property-spacing": [
    "error",
    "never",
    { enforceForClassMembers: true }
  ],
  // Enforce consistent newlines before and after dots
  // https://eslint.style/rules/default/dot-location
  "dot-location": ["error", "property"],
  // Require or disallow newline at the end of files
  // https://eslint.style/rules/default/eol-last
  "eol-last": ["error", "always"],
  // Enforce line breaks between arguments of a function call
  // https://eslint.style/rules/default/function-call-argument-newline
  "function-call-argument-newline": ["error", "consistent"],
  // Require or disallow spacing between function identifiers and their invocations
  // https://eslint.style/rules/default/function-call-spacing
  "function-call-spacing": ["error", "never"],
  // Enforce consistent line breaks inside function parentheses
  // https://eslint.style/rules/default/function-paren-newline
  "function-paren-newline": ["error", "multiline-arguments"],
  // Enforce consistent spacing around `*` operators in generator functions
  // https://eslint.style/rules/default/generator-star-spacing
  "generator-star-spacing": ["error", { before: false, after: true }],
  // Enforce the location of arrow function bodies
  // https://eslint.style/rules/default/implicit-arrow-linebreak
  "implicit-arrow-linebreak": ["error", "beside"],
  // Enforce consistent indentation
  // https://eslint.style/rules/default/indent
  indent: [
    "error",
    2,
    {
      SwitchCase: 1,
      VariableDeclarator: "first",
      FunctionDeclaration: { parameters: "first", body: 1 },
      FunctionExpression: { parameters: "first", body: 1 },
      CallExpression: { arguments: "first" },
      ArrayExpression: "first",
      ObjectExpression: "first",
      ImportDeclaration: "first",
      flatTernaryExpressions: true,
      offsetTernaryExpressions: true,
      ignoreComments: false
    }
  ],
  // Indentation for binary operators
  // https://eslint.style/rules/default/indent-binary-ops
  "indent-binary-ops": ["error", 2],
  // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
  // https://eslint.style/rules/default/jsx-child-element-spacing
  "jsx-child-element-spacing": "error",
  // Enforce closing bracket location in JSX
  // https://eslint.style/rules/default/jsx-closing-bracket-location
  "jsx-closing-bracket-location": ["error", "tag-aligned"],
  // Enforce closing tag location for multiline JSX
  // https://eslint.style/rules/default/jsx-closing-tag-location
  "jsx-closing-tag-location": "error",
  // Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
  // https://eslint.style/rules/default/jsx-curly-brace-presence
  "jsx-curly-brace-presence": [
    "error",
    { props: "never", children: "never", propElementValues: "always" }
  ],
  // Enforce consistent linebreaks in curly braces in JSX attributes and expressions
  // https://eslint.style/rules/default/jsx-curly-newline
  "jsx-curly-newline": [
    "error",
    { multiline: "consistent", singleline: "consistent" }
  ],
  // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
  // https://eslint.style/rules/default/jsx-curly-spacing
  "jsx-curly-spacing": ["error", { when: "never" }],
  // Enforce or disallow spaces around equal signs in JSX attributes
  // https://eslint.style/rules/default/jsx-equals-spacing
  "jsx-equals-spacing": ["error", "never"],
  // Enforce proper position of the first property in JSX
  // https://eslint.style/rules/default/jsx-first-prop-new-line
  "jsx-first-prop-new-line": ["error", "multiline-multiprop"],
  // Enforce JSX indentation
  // https://eslint.style/rules/default/jsx-indent
  "jsx-indent": [
    "error",
    2,
    { checkAttributes: true, indentLogicalExpressions: true }
  ],
  // Enforce props indentation in JSX
  // https://eslint.style/rules/default/jsx-indent-props
  "jsx-indent-props": ["error", "first"],
  // Enforce maximum of props on a single line in JSX
  // https://eslint.style/rules/default/jsx-max-props-per-line
  "jsx-max-props-per-line": "off",
  // Require or prevent a new line after jsx elements and expressions.
  // https://eslint.style/rules/default/jsx-newline
  "jsx-newline": ["error", { prevent: false, allowMultilines: false }],
  // Require one JSX element per line
  // https://eslint.style/rules/default/jsx-one-expression-per-line
  "jsx-one-expression-per-line": "off",
  // Enforce PascalCase for user-defined JSX components
  // https://eslint.style/rules/default/jsx-pascal-case
  "jsx-pascal-case": ["error", { allowAllCaps: true }],
  // Disallow multiple spaces between inline JSX props
  // https://eslint.style/rules/default/jsx-props-no-multi-spaces
  "jsx-props-no-multi-spaces": "error",
  // Enforce the consistent use of either double or single quotes in JSX attributes
  // https://eslint.style/rules/default/jsx-quotes
  "jsx-quotes": ["error", "prefer-double"],
  // Disallow extra closing tags for components without children
  // https://eslint.style/rules/default/jsx-self-closing-comp
  "jsx-self-closing-comp": ["error", {
    component: true,
    html: true
  }],
  // Enforce props alphabetical sorting
  // https://eslint.style/rules/default/jsx-sort-props
  "jsx-sort-props": ["error", {
    callbacksLast: true,
    shorthandFirst: true,
    ignoreCase: false,
    multiline: "ignore",
    reservedFirst: ["children", "dangerouslySetInnerHTML", "key", "ref"],
    locale: "auto"
  }],
  // Enforce whitespace in and around the JSX opening and closing brackets
  // https://eslint.style/rules/default/jsx-tag-spacing
  "jsx-tag-spacing": ["error", {
    closingSlash: "never",
    beforeSelfClosing: "proportional-always",
    afterOpening: "never",
    beforeClosing: "proportional-always"
  }],
  // Disallow missing parentheses around multiline JSX
  // https://eslint.style/rules/default/jsx-wrap-multilines
  "jsx-wrap-multilines": ["error", {
    declaration: "parens-new-line",
    assignment: "parens-new-line",
    return: "parens-new-line",
    arrow: "parens-new-line",
    condition: "parens-new-line",
    logical: "parens-new-line",
    prop: "parens-new-line"
  }],
  // Enforce consistent spacing between keys and values in object literal properties
  // https://eslint.style/rules/default/key-spacing
  "key-spacing": ["error", {
    beforeColon: false,
    afterColon: true,
    mode: "strict",
    align: {
      beforeColon: false,
      afterColon: true,
      on: "value",
      mode: "strict"
    }
    // multiLine: {
    //   "beforeColon": false,
    //   "afterColon": true,
    //   "align": "value",
    //   mode: 'strict',
    // },
    // "singleLine": {
    //   "beforeColon": false,
    //   "afterColon": true,
    //   mode: 'strict',
    // },
  }],
  // Enforce consistent spacing before and after keywords
  // https://eslint.style/rules/default/keyword-spacing
  "keyword-spacing": ["error", {
    before: true,
    after: true
  }],
  // Enforce consistent linebreak style
  // eslint.style/rules/default/linebreak-style
  "linebreak-style": ["error", "unix"],
  // Require empty lines around comments
  // https://eslint.style/rules/default/lines-around-comment
  "lines-around-comment": "off",
  // Require or disallow an empty line between class members
  // https://eslint.style/rules/default/lines-between-class-members
  "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
  // Enforce a maximum line length
  // https://eslint.style/rules/default/max-len
  "max-len": ["error", {
    tabWidth: 2,
    ignoreComments: true,
    ignoreTrailingComments: true,
    ignoreUrls: true,
    ignoreStrings: true,
    ignoreTemplateLiterals: true,
    ignoreRegExpLiterals: true
  }],
  // Enforce a maximum number of statements allowed per line
  // https://eslint.style/rules/default/max-statements-per-line
  "max-statements-per-line": "off",
  // Require a specific member delimiter style for interfaces and type literals
  // https://eslint.style/rules/default/member-delimiter-style
  "member-delimiter-style": ["error", {
    multiline: {
      delimiter: "semi",
      requireLast: true
    },
    singleline: {
      delimiter: "semi",
      requireLast: false
    },
    multilineDetection: "brackets"
  }],
  // Enforce newlines between operands of ternary expressions
  // https://eslint.style/rules/default/multiline-ternary
  "multiline-ternary": ["error", "always-multiline"],
  // Enforce or disallow parentheses when invoking a constructor with no arguments
  // https://eslint.style/rules/default/new-parens
  "new-parens": ["error", "always"],
  // Require a newline after each call in a method chain
  // https://eslint.style/rules/default/newline-per-chained-call
  "newline-per-chained-call": ["error", { ignoreChainWithDepth: 3 }],
  // Disallow arrow functions where they could be confused with comparisons
  // https://eslint.style/rules/default/no-confusing-arrow
  "no-confusing-arrow": ["error", { allowParens: true, onlyOneSimpleParam: false }],
  // Disallow unnecessary parentheses
  // https://eslint.style/rules/default/no-extra-parens
  "no-extra-parens": "off",
  // Disallow unnecessary semicolons
  // https://eslint.style/rules/default/no-extra-semi
  "no-extra-semi": "error",
  // Disallow leading or trailing decimal points in numeric literals
  // https://eslint.style/rules/default/no-floating-decimal
  "no-floating-decimal": "error",
  // Disallow mixed binary operators
  // https://eslint.style/rules/default/no-mixed-operators
  "no-mixed-operators": ["error", {
    groups: [
      ["+", "-", "*", "/", "%", "**"],
      ["&", "|", "^", "~", "<<", ">>", ">>>"],
      ["==", "!=", "===", "!=="],
      ["&&", "||"],
      ["in", "instanceof"]
    ],
    allowSamePrecedence: false
  }],
  // Disallow mixed spaces and tabs for indentation
  // https://eslint.style/rules/default/no-mixed-spaces-and-tabs
  "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
  // Disallow multiple spaces
  // https://eslint.style/rules/default/no-multi-spaces
  "no-multi-spaces": ["error", {
    ignoreEOLComments: true,
    exceptions: {
      Property: true,
      BinaryExpression: false,
      VariableDeclarator: false,
      ImportDeclaration: false
    },
    includeTabs: true
  }],
  // Disallow multiple empty lines
  // https://eslint.style/rules/default/no-multiple-empty-lines
  "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 0 }],
  // Disallow all tabs
  // https://eslint.style/rules/default/no-tabs
  "no-tabs": "error",
  // Disallow trailing whitespace at the end of lines
  // https://eslint.style/rules/default/no-trailing-spaces
  "no-trailing-spaces": ["error", {
    skipBlankLines: false,
    ignoreComments: false
  }],
  // Disallow whitespace before properties
  // https://eslint.style/rules/default/no-whitespace-before-property
  "no-whitespace-before-property": "error",
  // Enforce the location of single-line statements
  // https://eslint.style/rules/default/nonblock-statement-body-position
  "nonblock-statement-body-position": ["error", "beside"],
  // Enforce consistent line breaks after opening and before closing braces
  // https://eslint.style/rules/default/object-curly-newline
  "object-curly-newline": ["error", {
    ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
    ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
    ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    ExportDeclaration: { minProperties: 4, multiline: true, consistent: true }
  }],
  // Enforce consistent spacing inside braces
  // https://eslint.style/rules/default/object-curly-spacing
  "object-curly-spacing": ["error", "always"],
  // Enforce placing object properties on separate lines
  // https://eslint.style/rules/default/object-property-newline
  "object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],
  // Require or disallow newlines around variable declarations
  // https://eslint.style/rules/default/one-var-declaration-per-line
  "one-var-declaration-per-line": ["error", "always"],
  // Enforce consistent linebreak style for operators
  // https://eslint.style/rules/default/operator-linebreak
  "operator-linebreak": ["error", "before", { overrides: { "=": "none" } }],
  // Require or disallow padding within blocks
  // https://eslint.style/rules/default/padded-blocks
  "padded-blocks": ["error", {
    blocks: "never",
    classes: "never",
    switches: "never"
  }, {
    allowSingleLineBlocks: true
  }],
  // Require or disallow padding lines between statements
  // https://eslint.style/rules/default/padding-line-between-statements
  "padding-line-between-statements": "off",
  // Require quotes around object literal property names
  // https://eslint.style/rules/default/quote-props
  "quote-props": ["error", "as-needed", { keywords: false, unnecessary: true, numbers: false }],
  // Enforce the consistent use of either backticks, double, or single quotes
  // https://eslint.style/rules/default/quotes
  quotes: ["error", "single", { avoidEscape: true, allowTemplateLiterals: true }],
  // Enforce spacing between rest and spread operators and their expressions
  // https://eslint.style/rules/default/rest-spread-spacing
  "rest-spread-spacing": ["error", "never"],
  // Require or disallow semicolons instead of ASI
  // https://eslint.style/rules/default/semi
  semi: ["error", "always", { omitLastInOneLineBlock: false, omitLastInOneLineClassBody: false }],
  // Enforce consistent spacing before and after semicolons
  // https://eslint.style/rules/default/semi-spacing
  "semi-spacing": ["error", { before: false, after: true }],
  // Enforce location of semicolons
  // https://eslint.style/rules/default/semi-style
  "semi-style": ["error", "last"],
  // Enforce consistent spacing before blocks
  // https://eslint.style/rules/default/space-before-blocks
  "space-before-blocks": ["error", "always"],
  // Enforce consistent spacing before `function` definition opening parenthesis
  // https://eslint.style/rules/default/space-before-function-paren
  "space-before-function-paren": ["error", {
    anonymous: "always",
    named: "never",
    asyncArrow: "always"
  }],
  // Enforce consistent spacing inside parentheses
  // https://eslint.style/rules/default/space-in-parens
  "space-in-parens": ["error", "never"],
  // Require spacing around infix operators
  // https://eslint.style/rules/default/space-infix-ops
  "space-infix-ops": ["error", { int32Hint: false }],
  // Enforce consistent spacing before or after unary operators
  // https://eslint.style/rules/default/space-unary-ops
  "space-unary-ops": ["error", {
    words: true,
    nonwords: false
  }],
  // Enforce consistent spacing after the `//` or `/*` in a comment
  // https://eslint.style/rules/default/spaced-comment
  "spaced-comment": ["error", "always", {
    line: {
      exceptions: ["-", "+"],
      markers: ["=", "!", "/"]
    },
    block: {
      exceptions: ["-", "+"],
      markers: ["=", "!", ":", "::"],
      balanced: true
    }
  }],
  // Enforce spacing around colons of switch statements
  // https://eslint.style/rules/default/switch-colon-spacing
  "switch-colon-spacing": ["error", { after: true, before: false }],
  // Require or disallow spacing around embedded expressions of template strings
  // https://eslint.style/rules/default/template-curly-spacing
  "template-curly-spacing": ["error", "never"],
  // Require or disallow spacing between template tags and their literals
  // https://eslint.style/rules/default/template-tag-spacing
  "template-tag-spacing": ["error", "never"],
  // Require consistent spacing around type annotations
  // https://eslint.style/rules/default/type-annotation-spacing
  "type-annotation-spacing": ["error", { before: false, after: true }],
  // type-generic-spacing Enforces consistent spacing inside TypeScript type generics
  // https://eslint.style/rules/default/type-generic-spacing
  "type-generic-spacing": "error",
  // type-named-tuple-spacing Expect space before the type declaration in the named tuple
  // https://eslint.style/rules/default/type-named-tuple-spacing
  "type-named-tuple-spacing": "error",
  // Require parentheses around immediate `function` invocations
  // https://eslint.style/rules/default/wrap-iife
  "wrap-iife": ["error", "inside", { functionPrototypeMethods: true }],
  // Require parenthesis around regex literals
  // https://eslint.style/rules/default/wrap-regex
  "wrap-regex": "error",
  // Require or disallow spacing around the `*` in `yield*` expressions
  // https://eslint.style/rules/default/yield-star-spacing
  "yield-star-spacing": ["error", "after"]
};
function getRules$1(pluginName) {
  return addPluginName(pluginName, rules$2);
}
const rules$3 = {
  getRules: getRules$1
};
const stylistic = {
  plugins: {
    "@stylistic": stylistic$2
  },
  rules: rules$3.getRules("@stylistic")
};
const jsonc = {
  // apply jsonc rules similar to your configured ESLint core rules
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/auto.html
  auto: "error",
  // enforce naming convention to property key names
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/key-name-casing.html
  "key-name-casing": "off",
  // disallow BigInt literals
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-bigint-literals.html
  "no-bigint-literals": "error",
  // disallow binary expression
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-binary-expression.html
  "no-binary-expression": "error",
  // disallow binary numeric literals
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-binary-numeric-literals.html
  "no-binary-numeric-literals": "error",
  // disallow comments
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-comments.html
  "no-comments": "off",
  // disallow escape sequences in identifiers.
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-escape-sequence-in-identifier.html
  "no-escape-sequence-in-identifier": "error",
  // disallow hexadecimal numeric literals
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-hexadecimal-numeric-literals.html
  "no-hexadecimal-numeric-literals": "error",
  // disallow Infinity
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-infinity.html
  "no-infinity": "error",
  // disallow NaN
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-nan.html
  "no-nan": "error",
  // disallow number property keys
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-number-props.html
  "no-number-props": "error",
  // disallow numeric separators
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-numeric-separators.html
  "no-numeric-separators": "error",
  // disallow octal numeric literals
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal-numeric-literals.html
  "no-octal-numeric-literals": "error",
  // disallow parentheses around the expression
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-parenthesized.html
  "no-parenthesized": "error",
  // disallow plus sign
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-plus-sign.html
  "no-plus-sign": "error",
  // disallow RegExp literals
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-regexp-literals.html
  "no-regexp-literals": "error",
  // disallow template literals
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-template-literals.html
  "no-template-literals": "error",
  // disallow undefined
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-undefined-value.html
  "no-undefined-value": "error",
  // disallow Unicode code point escape sequences.
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-unicode-codepoint-escapes.html
  "no-unicode-codepoint-escapes": "error",
  // require array values to be sorted
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-array-values.html
  "sort-array-values": "off",
  // require object keys to be sorted
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-keys.html
  "sort-keys": "off",
  // disallow invalid number for JSON
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/valid-json-number.html
  "valid-json-number": "error",
  // disallow parsing errors in Vue custom blocks
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/vue-custom-block/no-parsing-error.html
  "vue-custom-block/no-parsing-error": "error"
};
const extension = {
  // enforce line breaks after opening and before closing array brackets
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-bracket-newline.html
  "array-bracket-newline": [
    "error",
    {
      multiline: true,
      minItems: null
    }
  ],
  // disallow or enforce spaces inside of brackets
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-bracket-spacing.html
  "array-bracket-spacing": ["error", "never"],
  // enforce line breaks between array elements
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-element-newline.html
  "array-element-newline": ["error", "consistent"],
  // require or disallow trailing commas
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/comma-dangle.html
  "comma-dangle": ["error", "never"],
  // enforce consistent comma style
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/comma-style.html
  "comma-style": ["error", "last"],
  // enforce consistent indentation
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/indent.html
  indent: ["error", 2],
  // enforce consistent spacing between keys and values in object literal properties
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/key-spacing.html
  "key-spacing": ["error", {
    beforeColon: false,
    afterColon: true,
    mode: "strict"
  }],
  // disallow duplicate keys in object literals
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-dupe-keys.html
  "no-dupe-keys": "error",
  // disallow leading or trailing decimal points in numeric literals
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-floating-decimal.html
  "no-floating-decimal": "error",
  // disallow irregular whitespace
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-irregular-whitespace.html
  "no-irregular-whitespace": "error",
  // disallow multiline strings
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-multi-str.html
  "no-multi-str": "error",
  // disallow octal escape sequences in string literals
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal-escape.html
  "no-octal-escape": "error",
  // disallow legacy octal literals
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal.html
  "no-octal": "error",
  // disallow sparse arrays
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-sparse-arrays.html
  "no-sparse-arrays": "error",
  // disallow unnecessary escape usage
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-useless-escape.html
  "no-useless-escape": "error",
  // enforce consistent line breaks inside braces
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-curly-newline.html
  "object-curly-newline": [
    "error",
    {
      consistent: true
    }
  ],
  // enforce consistent spacing inside braces
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-curly-spacing.html
  "object-curly-spacing": ["error", "always"],
  // enforce placing object properties on separate lines
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-property-newline.html
  "object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],
  // require quotes around object literal property names
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/quote-props.html
  "quote-props": ["error", "always"],
  // enforce use of double or single quotes
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/quotes.html
  quotes: ["error", "double", { avoidEscape: false }],
  // disallow spaces after unary operators
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/space-unary-ops.html
  "space-unary-ops": "error"
};
const ruleGroups = [jsonc, extension];
function getRules(pluginName) {
  return addPluginName(pluginName, ruleGroups);
}
const rules$1 = { getRules };
const json = {
  languageOptions: {
    parser: jsoncParser
  },
  plugins: {
    jsonc: jsonc$1
  },
  rules: rules$1.getRules("jsonc")
};
const eslint = {
  buildIn: buildIn$1,
  ts: config,
  stylistic,
  json
};
const avoidErrors = {
  // #region Descending
  // Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.
  // https://stylelint.io/user-guide/rules/no-descending-specificity/
  "no-descending-specificity": true,
  // #endregion
  // #region Duplicate
  // Disallow duplicate custom properties within declaration blocks.
  // https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-custom-properties/
  "declaration-block-no-duplicate-custom-properties": true,
  // Disallow duplicate properties within declaration blocks.
  // https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties/
  "declaration-block-no-duplicate-properties": true,
  // Disallow duplicate names within font families.
  // https://stylelint.io/user-guide/rules/font-family-no-duplicate-names/
  "font-family-no-duplicate-names": true,
  // Disallow duplicate selectors within keyframe blocks.
  // https://stylelint.io/user-guide/rules/keyframe-block-no-duplicate-selectors/
  "keyframe-block-no-duplicate-selectors": true,
  // no-duplicate-at-import-rules
  // https://stylelint.io/user-guide/rules/no-duplicate-at-import-rules/
  "no-duplicate-at-import-rules": true,
  // Disallow duplicate selectors.
  // https://stylelint.io/user-guide/rules/no-duplicate-selectors/
  "no-duplicate-selectors": [true, { disallowInList: false }],
  // #endregion
  // #region Empty
  // Disallow empty blocks.
  // https://stylelint.io/user-guide/rules/block-no-empty/
  "block-no-empty": true,
  // Disallow empty comments.
  // https://stylelint.io/user-guide/rules/comment-no-empty/
  "comment-no-empty": true,
  // Disallow empty sources.
  // https://stylelint.io/user-guide/rules/no-empty-source/
  "no-empty-source": true,
  // #endregion
  // #region Invalid
  // Disallow invalid hex colors.
  // https://stylelint.io/user-guide/rules/color-no-invalid-hex/
  "color-no-invalid-hex": true,
  // Disallow invalid unspaced operator within calc functions.
  // https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator/
  "function-calc-no-unspaced-operator": true,
  // Disallow invalid !important within keyframe declarations.
  // https://stylelint.io/user-guide/rules/keyframe-declaration-no-important/
  "keyframe-declaration-no-important": true,
  // Disallow invalid media queries.
  // https://stylelint.io/user-guide/rules/media-query-no-invalid/
  "media-query-no-invalid": true,
  // Disallow invalid named grid areas.
  // https://stylelint.io/user-guide/rules/named-grid-areas-no-invalid/
  "named-grid-areas-no-invalid": true,
  // Disallow invalid double-slash comments.
  // https://stylelint.io/user-guide/rules/no-invalid-double-slash-comments/
  "no-invalid-double-slash-comments": true,
  // Disallow invalid position @import rules.
  // https://stylelint.io/user-guide/rules/no-invalid-position-at-import-rule/
  "no-invalid-position-at-import-rule": true,
  // Disallow invalid newlines within strings.
  // https://stylelint.io/user-guide/rules/string-no-newline/
  "string-no-newline": true,
  // #endregion
  // #region Irregular
  // Disallow irregular whitespaces.
  // https://stylelint.io/user-guide/rules/no-irregular-whitespace/
  "no-irregular-whitespace": true,
  // #endregion
  // #region Missing
  // Disallow missing var function for custom properties.
  // https://stylelint.io/user-guide/rules/custom-property-no-missing-var-function/
  "custom-property-no-missing-var-function": true,
  // Disallow a missing generic family keyword within font families.
  // https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword/
  "font-family-no-missing-generic-family-keyword": true,
  // #endregion
  // #region Non-standard
  // Disallow non-standard direction values for linear gradient functions.
  // https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction/
  "function-linear-gradient-no-nonstandard-direction": true,
  // #endregion
  // #region Overrides
  // Disallow shorthand properties that override related longhand properties.
  // https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides/
  "declaration-block-no-shorthand-property-overrides": true,
  // #endregion
  // #region Unmatchable
  // Disallow unmatchable An+B selectors.
  // https://stylelint.io/user-guide/rules/selector-anb-no-unmatchable/
  "selector-anb-no-unmatchable": true,
  // #endregion
  // #region Unknown
  // Disallow unknown annotations.
  // https://stylelint.io/user-guide/rules/annotation-no-unknown/
  "annotation-no-unknown": true,
  // Disallow unknown at-rules.
  // https://stylelint.io/user-guide/rules/at-rule-no-unknown/
  "at-rule-no-unknown": true,
  // Disallow unknown values for properties within declarations.
  // https://stylelint.io/user-guide/rules/declaration-property-value-no-unknown/
  "declaration-property-value-no-unknown": true,
  // Disallow unknown functions.
  // https://stylelint.io/user-guide/rules/function-no-unknown/
  "function-no-unknown": true,
  // Disallow unknown media feature names.
  // https://stylelint.io/user-guide/rules/media-feature-name-no-unknown/
  "media-feature-name-no-unknown": true,
  // Disallow unknown values for media features.
  // https://stylelint.io/user-guide/rules/media-feature-name-value-no-unknown/
  "media-feature-name-value-no-unknown": true,
  // Disallow unknown animations.
  // https://stylelint.io/user-guide/rules/no-unknown-animations/
  "no-unknown-animations": true,
  // Disallow unknown custom properties.
  // https://stylelint.io/user-guide/rules/no-unknown-custom-properties/
  "no-unknown-custom-properties": true,
  // Disallow unknown properties.
  // https://stylelint.io/user-guide/rules/property-no-unknown/
  "property-no-unknown": true,
  // Disallow unknown pseudo-class selectors.
  // https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown/
  "selector-pseudo-class-no-unknown": true,
  // Disallow unknown pseudo-element selectors.
  // https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown/
  "selector-pseudo-element-no-unknown": true,
  // Disallow unknown type selectors.
  // https://stylelint.io/user-guide/rules/selector-type-no-unknown/
  "selector-type-no-unknown": true,
  // Disallow unknown units.
  // https://stylelint.io/user-guide/rules/unit-no-unknown/
  "unit-no-unknown": true
  // #endregion
};
const enforceConventions = {
  // #region Allowed, disallowed & required
  // Specify a list of allowed at-rules.
  // https://stylelint.io/user-guide/rules#enforce-conventions
  // 'at-rule-allowed-list': null,
  // Specify a list of disallowed at-rules.
  // https://stylelint.io/user-guide/rules/at-rule-disallowed-list/
  // 'at-rule-disallowed-list': null,
  // Disallow vendor prefixes for at-rules.
  // https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix/
  "at-rule-no-vendor-prefix": true,
  // Specify a list of required properties for an at-rule.
  // https://stylelint.io/user-guide/rules/at-rule-property-required-list/
  // 'at-rule-property-required-list': null,
  // Require or disallow alpha channel for hex colors.
  // https://stylelint.io/user-guide/rules/color-hex-alpha/
  // 'color-hex-alpha': null,
  // Require (where possible) or disallow named colors.
  // https://stylelint.io/user-guide/rules/color-named/
  "color-named": ["never"],
  // Disallow hex colors.
  // https://stylelint.io/user-guide/rules/color-no-hex/
  // 'color-no-hex': null,
  // Specify a list of disallowed words within comments.
  // https://stylelint.io/user-guide/rules/comment-word-disallowed-list/
  // 'comment-word-disallowed-list': null,
  // Disallow !important within declarations.
  // https://stylelint.io/user-guide/rules/declaration-no-important/
  "declaration-no-important": true,
  // Specify a list of allowed property and unit pairs within declarations.
  // https://stylelint.io/user-guide/rules/declaration-property-unit-allowed-list/
  // 'declaration-property-unit-allowed-list': null,
  // Specify a list of disallowed property and unit pairs within declarations.
  // https://stylelint.io/user-guide/rules/declaration-property-unit-disallowed-list/
  // 'declaration-property-unit-disallowed-list': null,
  // Specify a list of allowed property and value pairs within declarations.
  // https://stylelint.io/user-guide/rules/declaration-property-value-allowed-list/
  // 'declaration-property-value-allowed-list': null,
  // Specify a list of disallowed property and value pairs within declarations.
  // https://stylelint.io/user-guide/rules/declaration-property-value-disallowed-list/
  // 'declaration-property-value-disallowed-list': null,
  // Specify a list of allowed functions.
  // https://stylelint.io/user-guide/rules/function-allowed-list/
  // 'function-allowed-list': null,
  // Specify a list of disallowed functions.
  // https://stylelint.io/user-guide/rules/function-disallowed-list/
  // 'function-disallowed-list': null,
  // Disallow scheme-relative urls.
  // https://stylelint.io/user-guide/rules/function-url-no-scheme-relative/
  "function-url-no-scheme-relative": true,
  // Specify a list of allowed URL schemes.
  // https://stylelint.io/user-guide/rules/function-url-scheme-allowed-list/
  // 'function-url-scheme-allowed-list': null,
  // Specify a list of disallowed URL schemes.
  // https://stylelint.io/user-guide/rules/function-url-scheme-disallowed-list/
  // 'function-url-scheme-disallowed-list': null,
  // Disallow units for zero lengths.
  // https://stylelint.io/user-guide/rules/length-zero-no-unit/
  "length-zero-no-unit": true,
  // Specify a list of allowed media feature names.
  // https://stylelint.io/user-guide/rules/media-feature-name-allowed-list/
  // 'media-feature-name-allowed-list': null,
  // Specify a list of disallowed media feature names.
  // https://stylelint.io/user-guide/rules/media-feature-name-disallowed-list/
  // 'media-feature-name-disallowed-list': null,
  // Disallow vendor prefixes for media feature names.
  // https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix/
  "media-feature-name-no-vendor-prefix": true,
  // Specify a list of allowed name and unit pairs within media features.
  // https://stylelint.io/user-guide/rules/media-feature-name-unit-allowed-list/
  // 'media-feature-name-unit-allowed-list': null,
  // Specify a list of allowed media feature name and value pairs.
  // https://stylelint.io/user-guide/rules/media-feature-name-value-allowed-list/
  // 'media-feature-name-value-allowed-list': null,
  // Specify a list of allowed properties.
  // https://stylelint.io/user-guide/rules/property-allowed-list/
  // 'property-allowed-list': null,
  // Specify a list of disallowed properties.
  // https://stylelint.io/user-guide/rules/property-disallowed-list/
  // 'property-disallowed-list': null,
  // Disallow vendor prefixes for properties.
  // https://stylelint.io/user-guide/rules/property-no-vendor-prefix/
  "property-no-vendor-prefix": true,
  // Specify a list of disallowed properties for selectors within rules.
  // https://stylelint.io/user-guide/rules/rule-selector-property-disallowed-list/
  // 'rule-selector-property-disallowed-list': null,
  // Specify a list of disallowed attribute names.
  // https://stylelint.io/user-guide/rules/selector-attribute-name-disallowed-list/
  // 'selector-attribute-name-disallowed-list': null,
  // Specify a list of allowed attribute operators.
  // https://stylelint.io/user-guide/rules/selector-attribute-operator-allowed-list/
  // 'selector-attribute-operator-allowed-list': null,
  // Specify a list of disallowed attribute operators.
  // https://stylelint.io/user-guide/rules/selector-attribute-operator-disallowed-list/
  // 'selector-attribute-operator-disallowed-list': null,
  // Specify a list of allowed combinators.
  // https://stylelint.io/user-guide/rules/selector-combinator-allowed-list/
  // 'selector-combinator-allowed-list': null,
  // Specify a list of disallowed combinators.
  // https://stylelint.io/user-guide/rules/selector-combinator-disallowed-list/
  // 'selector-combinator-disallowed-list': null,
  // Specify a list of disallowed selectors.
  // https://stylelint.io/user-guide/rules/selector-disallowed-list/
  // 'selector-disallowed-list': null,
  // Disallow qualifying a selector by type.
  // https://stylelint.io/user-guide/rules/selector-no-qualifying-type/
  // 'selector-no-qualifying-type': null,
  // Disallow vendor prefixes for selectors.
  // https://stylelint.io/user-guide/rules/selector-no-vendor-prefix/
  // 'selector-no-vendor-prefix': true,
  // Specify a list of allowed pseudo-class selectors.
  // https://stylelint.io/user-guide/rules/selector-pseudo-class-allowed-list/
  // 'selector-pseudo-class-allowed-list': null,
  // Specify a list of disallowed pseudo-class selectors.
  // https://stylelint.io/user-guide/rules/selector-pseudo-class-disallowed-list/
  // 'selector-pseudo-class-disallowed-list': null,
  // Specify a list of allowed pseudo-element selectors.
  // https://stylelint.io/user-guide/rules/selector-pseudo-element-allowed-list/
  // 'selector-pseudo-element-allowed-list': null,
  // Specify a list of disallowed pseudo-element selectors.
  // https://stylelint.io/user-guide/rules/selector-pseudo-element-disallowed-list/
  // 'selector-pseudo-element-disallowed-list': null,
  // Specify a list of allowed units.
  // https://stylelint.io/user-guide/rules/unit-allowed-list/
  // 'unit-allowed-list': null,
  // Specify a list of disallowed units.
  // https://stylelint.io/user-guide/rules/unit-disallowed-list/
  // 'unit-disallowed-list': null,
  // Disallow vendor prefixes for values.
  // https://stylelint.io/user-guide/rules/value-no-vendor-prefix/
  // 'value-no-vendor-prefix': true,
  // #endregion
  // #region Case
  // Specify lowercase or uppercase for function names.
  // https://stylelint.io/user-guide/rules/function-name-case/
  "function-name-case": "lower",
  // Specify lowercase or uppercase for type selectors.
  // https://stylelint.io/user-guide/rules/selector-type-case/
  "selector-type-case": "lower",
  // Specify lowercase or uppercase for keywords values.
  // https://stylelint.io/user-guide/rules/value-keyword-case/
  "value-keyword-case": ["lower", {
    camelCaseSvgKeywords: true
  }],
  // #endregion
  // #region Empty lines
  // Require or disallow an empty line before at-rules.
  // https://stylelint.io/user-guide/rules/at-rule-empty-line-before/
  "at-rule-empty-line-before": ["always", {
    except: ["after-same-name", "blockless-after-same-name-blockless", "blockless-after-blockless"],
    ignore: ["after-comment", "first-nested", "inside-block"]
  }],
  // Require or disallow an empty line before comments.
  // https://stylelint.io/user-guide/rules/comment-empty-line-before/#except-first-nested
  // 'comment-empty-line-before': null,
  // Require or disallow an empty line before custom properties.
  // https://stylelint.io/user-guide/rules/custom-property-empty-line-before/
  // 'custom-property-empty-line-before': null,
  // Require or disallow an empty line before declarations.
  // https://stylelint.io/user-guide/rules/declaration-empty-line-before/
  // 'declaration-empty-line-before': null,
  // Require or disallow an empty line before rules.
  // https://stylelint.io/user-guide/rules/rule-empty-line-before/
  // 'rule-empty-line-before': null,
  // #endregion
  // #region Max & min
  // Limit the number of declarations within a single-line declaration block.
  // https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations/
  "declaration-block-single-line-max-declarations": 1,
  // Limit the number of values for a list of properties within declarations.
  // https://stylelint.io/user-guide/rules/declaration-property-max-values/
  // 'declaration-property-max-values': null,
  // Limit the depth of nesting.
  // https://stylelint.io/user-guide/rules/max-nesting-depth/
  // 'max-nesting-depth': null,
  // Limit the number of decimal places allowed in numbers.
  // https://stylelint.io/user-guide/rules/number-max-precision/#insidefunctions-regex-int-regex-int-string-int
  // 'number-max-precision': 3,
  // Limit the number of attribute selectors in a selector.
  // https://stylelint.io/user-guide/rules/selector-max-attribute/
  // 'selector-max-attribute': null,
  // Limit the number of classes in a selector.
  // https://stylelint.io/user-guide/rules/selector-max-class/
  // 'selector-max-class': null,
  // Limit the number of combinators in a selector.
  // https://stylelint.io/user-guide/rules/selector-max-combinators/
  // 'selector-max-combinators': null,
  // Limit the number of compound selectors in a selector.
  // https://stylelint.io/user-guide/rules/selector-max-compound-selectors/
  // 'selector-max-compound-selectors': null,
  // Limit the number of ID selectors in a selector.
  // https://stylelint.io/user-guide/rules/selector-max-id/
  // 'selector-max-id': null,
  // Limit the number of pseudo-classes in a selector.
  // https://stylelint.io/user-guide/rules/selector-max-pseudo-class/
  // 'selector-max-pseudo-class': null,
  // Limit the specificity of selectors.
  // https://stylelint.io/user-guide/rules/selector-max-specificity/
  // 'selector-max-specificity': null,
  // Limit the number of type selectors in a selector.
  // https://stylelint.io/user-guide/rules/selector-max-type/
  // 'selector-max-type': null,
  // Limit the number of universal selectors in a selector.
  // https://stylelint.io/user-guide/rules/selector-max-universal/
  // 'selector-max-universal': null,
  // Limit the minimum number of milliseconds for time values.
  // https://stylelint.io/user-guide/rules/time-min-milliseconds/
  // 'time-min-milliseconds': null,
  // #endregion
  // #region Notation
  // Specify percentage or number notation for alpha-values.
  // https://stylelint.io/user-guide/rules/alpha-value-notation/
  "alpha-value-notation": "number",
  // Specify modern or legacy notation for color-functions.
  // https://stylelint.io/user-guide/rules/color-function-notation/
  // 'color-function-notation': null,
  // Specify short or long notation for hex colors.
  // https://stylelint.io/user-guide/rules/color-hex-length/
  "color-hex-length": "short",
  // Require numeric or named (where possible) font-weight values.
  // https://stylelint.io/user-guide/rules/font-weight-notation/
  "font-weight-notation": "numeric",
  // Specify number or angle notation for degree hues.
  // https://stylelint.io/user-guide/rules/hue-degree-notation/
  "hue-degree-notation": "angle",
  // Specify string or URL notation for @import rules.
  // https://stylelint.io/user-guide/rules/import-notation/
  "import-notation": "string",
  // Specify keyword or percentage notation for keyframe selectors.
  // https://stylelint.io/user-guide/rules/keyframe-selector-notation/
  "keyframe-selector-notation": "percentage-unless-within-keyword-only-block",
  // Specify number or percentage notation for lightness.
  // https://stylelint.io/user-guide/rules/lightness-notation/
  "lightness-notation": "number",
  // Specify context or prefix notation for media feature ranges.
  // https://stylelint.io/user-guide/rules/media-feature-range-notation/
  "media-feature-range-notation": "context",
  // Specify simple or complex notation for :not() pseudo-class selectors.
  // https://stylelint.io/user-guide/rules/selector-not-notation/
  "selector-not-notation": "complex",
  // Specify single or double colon notation for applicable pseudo-element selectors.
  // https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation/
  "selector-pseudo-element-colon-notation": "single",
  // #endregion
  // #region Pattern
  // Specify a pattern for comments.
  // https://stylelint.io/user-guide/rules/comment-pattern/
  "comment-pattern": null,
  // Specify a pattern for custom media query names.
  // https://stylelint.io/user-guide/rules/custom-media-pattern/
  "custom-media-pattern": null,
  // custom-property-pattern
  // https://stylelint.io/user-guide/rules/custom-property-pattern/
  "custom-property-pattern": null,
  // Specify a pattern for keyframe names.
  // https://stylelint.io/user-guide/rules/keyframes-name-pattern/
  "keyframes-name-pattern": null,
  // Specify a pattern for class selectors.
  // https://stylelint.io/user-guide/rules/selector-class-pattern/
  "selector-class-pattern": null,
  // Specify a pattern for ID selectors.
  // https://stylelint.io/user-guide/rules/selector-id-pattern/
  "selector-id-pattern": null,
  // Specify a pattern for the selectors of rules nested within rules.
  // https://stylelint.io/user-guide/rules/selector-nested-pattern/
  "selector-nested-pattern": null,
  // #endregion
  // #region Quotes
  // Require or disallow quotes for font family names.
  // https://stylelint.io/user-guide/rules/font-family-name-quotes/#always-where-required
  // 'font-family-name-quotes': null,
  // Require or disallow quotes for urls.
  // https://stylelint.io/user-guide/rules/function-url-quotes/
  "function-url-quotes": "never",
  // Require or disallow quotes for attribute values.
  // https://stylelint.io/user-guide/rules/selector-attribute-quotes/
  "selector-attribute-quotes": "always"
  // #endregion
  // #region Redundant
  // Disallow redundant longhand properties within declaration-block.
  // https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties/#true
  // 'declaration-block-no-redundant-longhand-properties': null,
  // Disallow redundant values within shorthand properties.
  // https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values/
  // 'shorthand-property-no-redundant-values': null,
  // #endregion
  // #region Whitespace inside
  // Require or disallow whitespace on the inside of comment markers.
  // https://stylelint.io/user-guide/rules/comment-whitespace-inside/
  // 'comment-whitespace-inside': 'always',
  // #endregion
};
const rules = {
  ...avoidErrors,
  ...enforceConventions
};
const buildIn = {
  plugins: [],
  defaultSeverity: "error",
  reportDescriptionlessDisables: true,
  reportInvalidScopeDisables: [true, { severity: "warning" }],
  reportNeedlessDisables: [true, { severity: "warning" }],
  ignoreDisables: false,
  rules
};
const order = {
  extends: ["stylelint-config-clean-order/error"]
};
const prettier = {
  plugins: ["stylelint-prettier"],
  rules: {
    "prettier/prettier": true
  }
};
const stylelint = {
  buildIn,
  order,
  prettier
};
const index = {
  eslint,
  stylelint
};
module.exports = index;
//# sourceMappingURL=index.cjs.map
