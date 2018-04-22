import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CompressionPlugin from 'compression-webpack-plugin'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'

export default {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './scripts/bundle-[name].js',
        publicPath: '/'
    },
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
                loader: 'svg-react-loader',
                options: {
                    name: 'assets/images/[name].[ext]'
                }
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
    plugins: [
        new HtmlWebpackPlugin({
            title: 'vk-services',
            template: './app/index.html',
            minify: {
                collapseWhitespace: true
            },
            showErrors: false
        }),
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
        minimizer: [
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
        ]
    }
}