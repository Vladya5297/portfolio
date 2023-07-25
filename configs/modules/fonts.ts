import type {Configuration} from 'webpack';

export const fonts: Configuration = {
    module: {
        rules: [{
            test: /\.woff2?$/,
            type: 'asset/resource',
        }],
    },
};
