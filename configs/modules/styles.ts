import type {Configuration} from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const styles: Configuration = {
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]_[contenthash].css',
        }),
    ],
    module: {
        rules: [
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
        ],
    },
};
