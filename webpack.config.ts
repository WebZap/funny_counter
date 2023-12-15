import { BuildEnv, BuildMode, BuildPath } from './config/build/types/buildTypes'

import { buildConfig } from './config/build/buildConfig'
import path from 'path'
import webpack from 'webpack'

export default (env: BuildEnv) => {
	const mode: BuildMode = env.mode || 'development'
	const PORT: number = env.port || 3000
	const isDev = mode === 'development'

	const comboPath: BuildPath = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		build: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
	}

	const config: webpack.Configuration = buildConfig({
		mode,
		path: comboPath,
		port: PORT,
		isDev,
	})

	return config
}
