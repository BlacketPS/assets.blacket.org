module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: ["./tsconfig.eslint.json"],
		tsconfigRootDir: __dirname,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: ["@typescript-eslint", "react", "react-hooks"],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended"
	],
	env: {
		browser: true,
		es2020: true
	},
	settings: {
		react: {
			version: "detect"
		}
	},
	rules: {
		// react specific
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",

		// style
		quotes: ["error", "double", { avoidEscape: false, allowTemplateLiterals: false }],
		semi: ["error", "always"],
		indent: ["error", "tab", { SwitchCase: 1 }],
		"comma-dangle": ["error", "never"],
		"no-trailing-spaces": "error",
		"eol-last": ["error", "always"],
		"linebreak-style": ["error", "unix"],
		"object-curly-spacing": ["error", "always"],
		"array-bracket-spacing": ["error", "never"],
		"block-spacing": ["error", "always"],
		"space-before-blocks": ["error", "always"],
		"space-before-function-paren": "off",
		"comma-spacing": ["error", { before: false, after: true }],
		"key-spacing": ["error", { beforeColon: false, afterColon: true }],
		"keyword-spacing": ["error", { before: true, after: true }],

		// consistency
		curly: ["error", "multi-line"],
		"brace-style": ["error", "1tbs", { allowSingleLine: false }],
		"arrow-parens": ["error", "always"],
		"no-case-declarations": "off",
		"no-multiple-empty-lines": ["error", { max: 1 }],
		"no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
		"consistent-return": "error",
		eqeqeq: ["error", "always"],
		yoda: ["error", "never"],

		// strictness
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
		"@typescript-eslint/consistent-type-definitions": ["error", "interface"],
		"@typescript-eslint/strict-boolean-expressions": "off",

		// safety
		"@typescript-eslint/no-floating-promises": "error",
		"@typescript-eslint/no-unsafe-argument": "error",
		"@typescript-eslint/no-unsafe-call": "off",
		"@typescript-eslint/no-unsafe-return": "off",
		"@typescript-eslint/no-unsafe-assignment": "off",
		"@typescript-eslint/no-unsafe-member-access": "off",

		// constructor and array formatting
		"object-property-newline": ["error", { "allowAllPropertiesOnSameLine": false }],
		"array-bracket-newline": ["error", { "multiline": true, "minItems": 4 }],
		"array-element-newline": ["error", { "multiline": true, "minItems": 4 }]
	}
};
