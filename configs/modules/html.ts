import path from 'path';

import type {Configuration} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import {APP_DIR} from '../constants';

export const html: Configuration = {
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(APP_DIR, 'index.html'),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
        ],
    },
};
