const path = require("path");
const webpack = require('webpack');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: [
        path.resolve('src', 'index.js')
    ],

    output: {
        path: path.resolve('dist'),
        filename: "bundle.js"
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: "file-loader",
                options: { name: '/static/[name].[ext]' }
            }
        ]
    },

    devServer: {
        contentBase: path.resolve('dist'),
        hot: true
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new MiniCssExtractPlugin({
            filename: process.env.NODE_ENV !== 'production' ? '[name].css' : '[name].[hash].css',
            chunkFilename: process.env.NODE_ENV !== 'production' ? '[id].css' : '[id].[hash].css',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('src', 'index.html')
        })
    ]
};