import { BuildOptions } from './types/buildTypes'
import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import webpack from 'webpack'

export function buildConfig(options: BuildOptions): webpack.Configuration {
	const { path, mode } = options
	return {
		mode: mode,
		entry: path.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: path.build,
			clean: true,
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(),
		devtool: options.isDev ? 'inline-source-map' : undefined,
		devServer: buildDevServer(options),
	}
}
