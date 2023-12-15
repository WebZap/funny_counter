import { BuildOptions } from './types/buildTypes'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}
	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			// Creates `style` nodes from JS strings
			options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resPath: string) => Boolean(resPath.includes('.module.')),
						localIdentName: options.isDev
							? '[path][name]__[local]--[hash:base64:5]'
							: '[hash:base64:8]',
					},
				},
			},
			// Compiles Sass to CSS
			'sass-loader',
		],
	}
	const fontsLoader = {
		test: /\.(woff|woff2|eot|ttf|otf)$/i,
		type: 'asset/fonts/',
	}
	return [typescriptLoader, cssLoader, fontsLoader]
}
