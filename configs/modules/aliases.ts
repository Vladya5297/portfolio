import type {Configuration} from 'webpack';

import {APP_DIR} from '../constants';

export const aliases: Configuration = {
    resolve: {
        alias: {
            '~': APP_DIR,
        },
    },
};
