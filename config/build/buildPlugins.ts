import { BuildOptions } from './types/buildTypes'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'

export const buildPlugins = ({
	path,
}: BuildOptions): webpack.WebpackPluginInstance[] => {
	return [
		new HtmlWebpackPlugin({
			template: path.html,
		}),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
	]
}
