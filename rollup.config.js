import builtins from 'rollup-plugin-node-builtins';
import babel from 'rollup-plugin-babel';
import istanbul from 'rollup-plugin-istanbul';
import pkg from './package.json';

export default [
	{
		input: 'src/main.js',
		output: [
			{ name: 'IIFE', file: pkg.browser, format: 'iife' }
		],
		plugins: [
			babel({ exclude: 'node_modules/**' })
		]
	},
	{
		input: 'src/main.js',
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'esm' }
		]
	},
	{
		input: 'src/test.js',
		output: [
			{ file: 'test/test.js', format: 'cjs' }
		],
		plugins: [
			builtins(),
			istanbul({
				exclude: ['test/*.js']
			})
		]
	}
];