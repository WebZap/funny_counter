//Режим сборки
export type BuildMode = 'development' | 'production'
//Типы путей
export interface BuildPath {
	entry: string
	build: string
	html: string
}
//Типы опций
export interface BuildOptions {
	mode: BuildMode
	path: BuildPath
	port: number
	isDev: boolean
}
//Типы путей окружения
export interface BuildEnv {
	mode: BuildMode
	port: number
}
