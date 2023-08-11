import type {Configuration} from 'webpack';

export const images: Configuration = {
    module: {
        rules: [
            {
                test: /\.svg$/,
                issuer: /\.tsx?$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(jpeg|jpg|webp|gif)$/,
                type: 'asset/resource',
            },
            {
                test: /\.png$/,
                issuer: /\.tsx?$/,
                use: [{
                    loader: 'responsive-loader',
                    options: {
                        placeholder: true,
                        format: 'webp',
                        adapter: require('responsive-loader/sharp'),
                    },
                }],
            },
        ],
    },
};
