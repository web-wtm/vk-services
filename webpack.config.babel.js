import path from 'path'
import webpack from 'webpack'
import CompressionPlugin from 'compression-webpack-plugin'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'

const IS_DEV = (process.env.NODE_ENV === 'development');

export default {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './scripts/bundle-[name].js',
        publicPath: '/'
    },
    plugins: [
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.html$/,
            threshold: 10240,
            minRatio: 0
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                context: path.join(__dirname, './app'),
                output: {
                    path: path.join(__dirname, './dist')
                }
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        [
                            'env', {
                                targets: {
                                    browsers: ['last 2 versions']
                                }
                            }
                        ],
                        'stage-2'
                    ],
                    env: {
                        production: {
                            presets: ['react-optimize']
                        }
                    }
                }
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/images/[name].[ext]'
                }
            },
            {
                test: /\.(svg)$/,
                loader: 'react-svg-loader'
            },
            {
                test: /\.(mp4|webm)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/video/[name].[ext]'
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        port: 5000
    },
    optimization: {
        runtimeChunk: false,
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'common',
                    chunks: 'all',
                },
            },
        },
        minimizer: !IS_DEV ? [
            new UglifyJsPlugin({
                uglifyOptions: {
                    output: {
                        comments: false,
                    },
                    compress: {
                        unused: true,
                        dead_code: true,
                        warnings: false,
                        drop_debugger: true,
                        conditionals: true,
                        evaluate: true,
                        drop_console: true,
                        sequences: true,
                        booleans: true,
                    }
                }
            })
        ] : []
    }
}