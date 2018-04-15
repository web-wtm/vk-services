import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import CompressionPlugin from 'compression-webpack-plugin'

export default {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, './dist/scripts'),
        filename: '.bundle-[name].js',
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
                test: /\.scss?$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'resolve-url-loader', 'sass-loader'],
                    fallback: "style-loader"
                })
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
        new ExtractTextPlugin({
            filename: "assets/styles/main.css",
            allChunks: true
        }),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
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
        }
    }
}