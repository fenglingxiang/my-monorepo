// commitizen.config.js
/** @type {import('cz-git').UserConfig} */
export default {
	// 扩展配置
	extends: ["@commitlint/config-conventional"],

	// 规则
	rules: {
		"type-enum": [
			2,
			"always",
			[
				"feat", // 新功能
				"fix", // 修复
				"docs", // 文档
				"style", // 代码格式
				"refactor", // 重构
				"perf", // 性能优化
				"test", // 测试
				"build", // 构建
				"ci", // CI/CD
				"chore", // 其他修改
				"revert", // 回退
				"wip", // 开发中
			],
		],
		"type-case": [2, "always", "lower-case"],
		"type-empty": [2, "never"],
		"scope-case": [2, "always", "lower-case"],
		"subject-empty": [2, "never"],
		"subject-full-stop": [2, "never", "."],
		"subject-case": [
			2,
			"never",
			["start-case", "pascal-case", "upper-case"],
		],
		"header-max-length": [2, "always", 100],
	},

	// 提示配置
	prompt: {
		// 使用中文还是英文
		useEmoji: true,
		emojiAlign: "center",
		allowCustomIssuePrefix: true,
		allowEmptyIssuePrefix: true,

		// 类型配置
		types: [
			{ value: "feat", name: "feat:     新增功能", emoji: "✨" },
			{ value: "fix", name: "fix:      修复 Bug", emoji: "🐛" },
			{ value: "docs", name: "docs:     文档更新", emoji: "📝" },
			{ value: "style", name: "style:    代码格式", emoji: "💎" },
			{ value: "refactor", name: "refactor: 代码重构", emoji: "♻️" },
			{ value: "perf", name: "perf:     性能优化", emoji: "⚡️" },
			{ value: "test", name: "test:     测试相关", emoji: "✅" },
			{ value: "build", name: "build:    构建系统", emoji: "📦" },
			{ value: "ci", name: "ci:       持续集成", emoji: "🔧" },
			{ value: "chore", name: "chore:    其他修改", emoji: "🎫" },
			{ value: "revert", name: "revert:   回退提交", emoji: "⏪" },
			{ value: "wip", name: "wip:      开发中", emoji: "🚧" },
		],

		// 影响范围配置
		scopes: [
			// 通用范围
			{ name: "core" },
			{ name: "utils" },
			{ name: "config" },
			{ name: "deps" },

			// 项目特定范围
			{ name: "ui" },
			{ name: "layout" },
			{ name: "auth" },
			{ name: "api" },
			{ name: "database" },
			{ name: "security" },
			{ name: "performance" },
			{ name: "accessibility" },
			{ name: "i18n" },

			// 特定页面/组件
			{ name: "dashboard" },
			{ name: "login" },
			{ name: "user-profile" },
			{ name: "settings" },
		],

		// 是否允许自定义范围
		allowCustomScopes: true,
		allowEmptyScopes: false,
		customScopesAlign: "bottom",
		customScopesAlias: "custom",
		emptyScopesAlias: "empty",

		// 是否允许自定义类型
		allowCustomTypes: false,

		// 默认选择
		defaultType: "",
		defaultScope: "",
		defaultSubject: "",
		defaultBody: "",
		defaultIssues: "",

		// 消息模板
		messages: {
			type: "选择提交类型:",
			scope: "选择影响范围 (可选):",
			customScope: "输入自定义影响范围:",
			subject: "填写简短精炼的变更描述 (必填):\n",
			body: '填写更加详细的变更描述 (可选)。使用 "|" 换行:\n',
			breaking: "列举非兼容性重大的变更 (可选):\n",
			footerPrefixesSelect: "选择关联的 Issue 前缀 (可选):",
			customFooterPrefix: "输入自定义 Issue 前缀:",
			footer: "列举关联的 Issues (可选) 例如: #31, #34:\n",
			generatingByAI: "正在通过 AI 生成提交信息...",
			generatedSelectByAI: "选择 AI 生成的提交信息:",
			confirmCommit: "确认提交?",
		},

		// AI 生成提交信息
		useAI: false,
		aiNumber: 3,

		// 主题配置
		themeColorCode: "",
		allowTicketNumber: true,
		isTicketNumberRequired: false,
		ticketNumberPrefix: "TICKET-",
		ticketNumberRegExp: "\\d{1,5}",

		// 问题前缀
		issuePrefixes: [
			{ value: "closed", name: "closed:    ISSUES has been processed" },
			{ value: "fix", name: "fix:       ISSUES fixed" },
			{ value: "resolve", name: "resolve:   ISSUES resolved" },
		],

		// 提交前验证
		skipQuestions: [],
		askForBreakingChangeFirst: true,

		// 其他配置
		upperCaseSubject: false,
		markBreakingChangeMode: false,
		allowBreakingChanges: ["feat", "fix", "perf", "refactor"],
		breaklineNumber: 100,
		breaklineChar: "|",
		confirmColorize: true,
		maxHeaderLength: 100,
		maxSubjectLength: 70,
		minSubjectLength: 3,

		// 范围前缀
		scopeFilters: [
			// 可以在这里过滤某些类型的 scope
		],

		// 交互式配置
		subjectLimit: 100,
	},

	// 忽略某些文件/目录
	ignores: [
		// (commit) => commit === '',                 // 空提交
		// (commit) => commit.startsWith('Merge'),    // Merge 提交
		// (commit) => commit.startsWith('Revert'),   // Revert 提交
		// /^revert:/i,                               // 正则表达式
		// /^Merge branch/i,
		// /^Merge remote-tracking branch/i,
		// /^Merge pull request/i,
	],

	// 默认值配置
	defaultIgnores: true,

	// 帮助信息
	helpUrl:
		"https://github.com/conventional-changelog/commitlint/#what-is-commitlint",

	// 警告信息
	warning: false,
}
