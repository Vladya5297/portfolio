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
                test: /\.(png|jpeg|jpg|webp)$/,
                type: 'asset/resource',
            },
        ],
    },
};
