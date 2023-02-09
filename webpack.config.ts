import path from 'path';
import webpack from "webpack";
import {BuildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/build/types/config";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }

    const mode = env.mode || 'development'
    const PORT = env.port || 3000
    const isDev = mode === 'development'

    const config: webpack.Configuration = BuildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    })

    if (isDev) {
        config.plugins.push(new ReactRefreshPlugin())
        config.plugins.push(new webpack.HotModuleReplacementPlugin())
    }

    return config
}