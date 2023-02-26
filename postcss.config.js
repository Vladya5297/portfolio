module.exports = {
    plugins: [
        require('postcss-import')({path: ['./src/utils']}),
        require('postcss-mixins'),
        require('postcss-simple-vars'),
        require('postcss-nested'),
        require('postcss-css-reset'),
        require('postcss-preset-env'),
    ],
};
