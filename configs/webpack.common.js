const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

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
                normalize: {
                    name: 'normalize',
                    test: /normalize\.css/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(APP_DIR, 'index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: '[name]_[contenthash].css',
        }),
        new FaviconsWebpackPlugin(path.join(APP_DIR, 'assets/favicon.svg')),
    ],
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
                test: /\.m\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[folder]_[local]_[hash:base64:5]',
                            },
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                exclude: /\.m\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.svg$/,
                issuer: /\.tsx?$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(png|jpeg|jpg|webp)$/,
                type: 'asset/resource',
            },
            {
                test: /\.mdx?$/,
                use: [
                    {
                        loader: '@mdx-js/loader',
                    },
                ],
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
        filename: '[name]_[contenthash].js',
    },
};
