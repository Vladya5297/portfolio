import path from 'path';

import {merge} from 'webpack-merge';

import {APP_DIR, BUILD_DIR} from './constants';
import * as modules from './modules';

export default merge({
    entry: path.join(APP_DIR, 'index.tsx'),
    output: {
        path: BUILD_DIR,
        filename: '[name]_[contenthash].js',
    },
    resolve: {
        extensions: ['.js'],
    },
}, ...Object.values(modules));
