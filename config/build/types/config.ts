export type BuildMode = 'development' | 'production'
export interface BuildPaths {
    entry: string,
    build: string,
    html: string,
    src: string
    locale: string,
    buildLocale: string,
}
export interface BuildOptions {
    mode: BuildMode,
    paths: BuildPaths,
    isDev: boolean,
    port: number,
    apiUrl: string,
    project: 'frontend' | 'storybook' | 'jest'
}

export interface BuildEnv {
    mode: BuildMode,
    port: number,
    apiUrl: string
}
