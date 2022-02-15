/* eslint-disable */
module.exports = {
	env: {
		browser: true,
		es2020: true,
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 11,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'prettier'],
	rules: {
		'prettier/prettier': [
			{
				semi: true,
				singleQuote: true,
				trailingComma: 'all',
				bracketSpacing: true,
				printWidth: 120,
				useTabs: true,
			},
		],
		...require('eslint-config-prettier').rules,
	},
};
