const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const mode = process.env.NODE_ENV;

const OUTPUT_DIR = path.resolve(__dirname, 'dist');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: "./src/index.js",
    plugins: [
        new HtmlWebpackPlugin({ title: "WebSynth" }),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: { babelrc: true }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            // Prefer `dart-sass`
                            implementation: require('sass'),
                        },
                    },
                ]
            },
        ]
    },
    devServer: {
        contentBase: OUTPUT_DIR,
        compress: true,
        port: 9000,
    },
    output: {
        path: OUTPUT_DIR,
        filename: "index.js"
    },
}