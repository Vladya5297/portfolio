import {merge} from 'webpack-merge';
import type {Configuration} from 'webpack';
import type {Configuration as DevServerConfiguration} from 'webpack-dev-server';

import common from './webpack.common';

export default merge<Configuration & DevServerConfiguration>(common, {
    mode: 'development',
    cache: true,
    devtool: 'inline-source-map',
    devServer: {
        port: 3000,
    },
});
