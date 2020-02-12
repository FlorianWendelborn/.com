module.exports = {
	env: {
		browser: true,
	},
	extends: [
		'react-app',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	rules: {
		'@typescript-eslint/interface-name-prefix': [
			'error',
			{ prefixWithI: 'always' },
		],
		'@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
		'no-magic-numbers': ['error', { ignore: [0, 1, -1, 2, 10, 100] }],

		'@typescript-eslint/member-delimiter-style': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		// unfortunately, this rule is too dumb to grasp
		// typescript’s code reachability rules
		'no-fallthrough': 'off',
		'prefer-arrow-callback': [
			'error',
			{
				// this helps with turning constate’s Context.Provider into the actual name
				allowNamedFunctions: true,
				allowUnboundThis: false,
			},
		],
		'arrow-body-style': ['error', 'as-needed'],
		'import/no-unassigned-import': [
			'error',
			{
				allow: ['**/*.css', '**/*.scss'],
			},
		],
		'import/order': [
			'error',
			{
				alphabetize: {
					caseInsensitive: true,
					order: 'asc',
				},
				'newlines-between': 'always',
			},
		],
	},
}
