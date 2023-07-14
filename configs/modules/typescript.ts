import type {Configuration} from 'webpack';

export const typescript: Configuration = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    }],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts'],
    },
};
