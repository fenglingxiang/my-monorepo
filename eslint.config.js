// eslint.config.js
import js from "@eslint/js"
import ts from "typescript-eslint"
import vue from "eslint-plugin-vue"
import prettier from "eslint-config-prettier"
import globals from "globals"

/** @type {import('eslint').Linter.Config[]} */
export default [
	// 基础 JavaScript 规则
	js.configs.recommended,

	// TypeScript 规则
	...ts.configs.recommended,
	...ts.configs.stylistic,

	// Vue 3 规则
	...vue.configs["flat/recommended"],
	...vue.configs["flat/essential"],

	// Prettier 集成（必须放在最后）
	prettier,

	// 全局忽略文件
	{
		ignores: [
			"**/node_modules/**",
			"**/dist/**",
			"**/build/**",
			"**/coverage/**",
			"**/.git/**",
			"**/public/**",
			"**/tmp/**",
			"**/temp/**",
			"**/logs/**",
			"**/*.min.js",
			"**/*.min.css",
			"**/.DS_Store",
			"**/.vscode/**",
			"**/.idea/**",
			"package-lock.json",
			"yarn.lock",
			"pnpm-lock.yaml",
		],
	},

	// Vue 文件配置
	{
		files: ["**/*.vue"],
		languageOptions: {
			parser: vue.parser,
			parserOptions: {
				parser: "@typescript-eslint/parser",
				extraFileExtensions: [".vue"],
				project: "./tsconfig.json",
				ecmaVersion: "latest",
				sourceType: "module",
			},
			globals: {
				...globals.browser,
				...globals.es2021,
				...globals.node,
			},
		},
		plugins: {
			vue,
		},
		rules: {
			// Vue 特定规则
			"vue/multi-word-component-names": "off", // 允许单文件组件名
			"vue/no-v-html": "warn",
			"vue/require-default-prop": "off", // TypeScript 项目中不需要
			"vue/require-prop-types": "off", // TypeScript 项目中不需要
			"vue/no-unused-components": "warn",
			"vue/no-unused-vars": "warn",
			"vue/component-definition-name-casing": ["error", "PascalCase"],
			"vue/component-name-in-template-casing": ["error", "PascalCase"],
			"vue/html-self-closing": [
				"error",
				{
					html: {
						void: "always",
						normal: "always",
						component: "always",
					},
					svg: "always",
					math: "always",
				},
			],
			"vue/block-order": [
				"error",
				{
					order: ["script", "template", "style"],
				},
			],
			"vue/component-tags-order": [
				"error",
				{
					order: ["script", "template", "style"],
				},
			],
			"vue/padding-line-between-blocks": ["error", "always"],
			"vue/no-reserved-component-names": [
				"error",
				{
					disallowVueBuiltInComponents: true,
					disallowVue3BuiltInComponents: true,
				},
			],
		},
	},

	// TypeScript 文件配置
	{
		files: ["**/*.ts", "**/*.tsx"],
		languageOptions: {
			parser: ts.parser,
			parserOptions: {
				project: "./tsconfig.json",
				tsconfigRootDir: import.meta.dirname,
			},
		},
		rules: {
			// TypeScript 规则
			"@typescript-eslint/explicit-function-return-type": "off",
			"@typescript-eslint/explicit-module-boundary-types": "off",
			"@typescript-eslint/no-inferrable-types": "off",
			"@typescript-eslint/no-non-null-assertion": "off",
			"@typescript-eslint/ban-ts-comment": "warn",
			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					argsIgnorePattern: "^_",
					varsIgnorePattern: "^_",
					caughtErrorsIgnorePattern: "^_",
				},
			],
			"@typescript-eslint/consistent-type-imports": [
				"error",
				{
					prefer: "type-imports",
					fixStyle: "separate-type-imports",
				},
			],
			"@typescript-eslint/no-empty-interface": [
				"error",
				{
					allowSingleExtends: true,
				},
			],
		},
	},

	// JavaScript 文件配置
	{
		files: ["**/*.js", "**/*.jsx"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: {
				...globals.browser,
				...globals.es2016,
				...globals.node,
			},
		},
		rules: {
			// 通用 JavaScript 规则
			"no-console":
				process.env.NODE_ENV === "production" ? "error" : "warn",
			"no-debugger":
				process.env.NODE_ENV === "production" ? "error" : "warn",
			"no-alert": "error",
			"no-duplicate-imports": "error",
			"prefer-const": "error",
			"no-var": "error",
			eqeqeq: ["error", "always", { null: "ignore" }],
			curly: ["error", "all"],
			"no-unused-vars": [
				"error",
				{
					argsIgnorePattern: "^_",
					varsIgnorePattern: "^_",
				},
			],
		},
	},

	// 测试文件特殊规则
	{
		files: [
			"**/*.test.{js,jsx,ts,tsx,vue}",
			"**/*.spec.{js,jsx,ts,tsx,vue}",
			"**/tests/**/*.{js,jsx,ts,tsx,vue}",
			"**/__tests__/**/*.{js,jsx,ts,tsx,vue}",
			"**/test/**/*.{js,jsx,ts,tsx,vue}",
		],
		rules: {
			"no-console": "off",
			"no-debugger": "off",
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-non-null-assertion": "off",
		},
	},

	// 配置文件特殊规则
	{
		files: [
			"*.config.{js,ts}",
			"**/*.config.{js,ts}",
			"**/config/**/*.{js,ts}",
		],
		rules: {
			"no-console": "off",
			"@typescript-eslint/no-var-requires": "off",
		},
	},

	// 脚本文件特殊规则
	{
		files: ["scripts/**/*.{js,ts}"],
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
		rules: {
			"no-console": "off",
		},
	},
]
