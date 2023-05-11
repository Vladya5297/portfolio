const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const APP_DIR = path.resolve(__dirname, '../src');
const BUILD_DIR = path.resolve(__dirname, '../build');

module.exports = {
    entry: path.join(APP_DIR, 'index.tsx'),
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    name: 'vendor',
                    chunks: 'initial',
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    }],
            },
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                mode: 'local',
                                localIdentName: '[folder]__[local]__[hash:base64:5]',
                            },
                        },
                    },
                ],
            },
            {
                test: /\.svg$/i,
                issuer: /\.tsx?$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.png$/i,
                type: 'asset/inline',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '~': APP_DIR,
        },
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].[contenthash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(APP_DIR, 'index.html'),
        }),
        // new FaviconsWebpackPlugin(path.join(APP_DIR, 'images/favicon.svg')),
    ],
};
