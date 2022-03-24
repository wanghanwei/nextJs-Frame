const nodeConfig = require('config')
const nextTM = require('next-transpile-modules')
const withImages = require('next-images')
const path = require('path')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})
const withPlugins = require('next-compose-plugins')
const packageInfo = require('./package.json')

const generateUID = () => {
	var firstPart = (Math.random() * 46656) | 0
	var secondPart = (Math.random() * 46656) | 0
	firstPart = ('000' + firstPart.toString(36)).slice(-3)
	secondPart = ('000' + secondPart.toString(36)).slice(-3)
	return firstPart + secondPart
}

const nextConfig = {
	distDir: 'build',
	pageExtensions: ['page.mdx', 'page.jsx', 'page.js', 'page.ts', 'page.tsx'],
	generateBuildId: async () => {
		const uuid = generateUID()
		return `${packageInfo.version}-${uuid}`
	},
	publicRuntimeConfig: {
		appVersion: packageInfo.version,
	},
	// 默认起始路径
	// basePath: '/h5',

	serverRuntimeConfig: {
		baseURL: nodeConfig.baseURL,
	},
	crossOrigin: 'anonymous',
	webpack: (config, { isServer, defaultLoaders }) => {
		const originalEntry = config.entry

		// config.entry = async () => {
		// 	const entries = await originalEntry()

		// 	if (
		// 		entries['main.js'] &&
		// 		!entries['main.js'].includes('./polyfills.js')
		// 	) {
		// 		entries['main.js'].unshift('./polyfills.js')
		// 	}
		// 	return entries
		// }

		if (!isServer) {
			// config.node = {
			// 	fs: 'empty',
			// }
			config.module.rules.unshift({
				test: /cls-hooked/,
				use: 'null-loader',
			})
		}
		return config
	},
	typescript: {
		// TODO 构建忽略ts报错
		// ignoreBuildErrors: true,
	},
}

const withTM = nextTM(['query-string', 'split-on-first', 'strict-uri-encode'], {
	debug: true,
})

module.exports = withPlugins(
	[
		// [withImages, { esModule: true }], withTM, withBundleAnalyzer
	],
	nextConfig
)
