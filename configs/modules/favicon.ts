import path from 'path';

import type {Configuration} from 'webpack';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';

import {APP_DIR} from '../constants';

export const favicon: Configuration = {
    plugins: [
        new FaviconsWebpackPlugin(path.join(APP_DIR, 'assets/favicon.svg')),
    ],
};
