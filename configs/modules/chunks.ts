import type {Configuration} from 'webpack';

export const chunks: Configuration = {
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
};
