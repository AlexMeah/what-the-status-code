const webpack = require('webpack');
const path = require('path');

module.exports = function karmaConf(config) {
    config.set({
        basePath: '../client',
        frameworks: [
            'mocha', 'chai'
        ],
        browsers: ['Chrome'],

        files: [
            './**/__tests__/**/*.js', './**/__tests__/**/*.jsx'
        ],

        client: {
            mocha: {
                reporter: 'spec',
                ui: 'bdd'
            }
        },
        colors: true,
        logLevel: config.LOG_INFO,
        singleRun: true,

        preprocessors: {
            './**/__tests__/**/*.js': ['webpack'],
            './**/__tests__/**/*.jsx': ['webpack']
        },

        reporters: ['mocha', 'coverage'],

        webpackMiddleware: {
            noInfo: true
        },

        webpack: {
            devtool: 'inline-source-map',
            resolve: {
                root: path.join(__dirname, 'client')
            },
            module: {
                loaders: [{
                    test: /.jsx?$/,
                    exclude: /(node_modules)/,
                    loader: 'babel-loader?optional[]=runtime'
                }, {
                    test: /.scss$/,
                    loader: 'null-loader'
                }],
                postLoaders: [{
                    test: /\.jsx?$/,
                    exclude: /(__tests__|node_modules)/,
                    loader: 'istanbul-instrumenter'
                }]
            },
            plugins: [new webpack.DefinePlugin({
                'process.env': {
                    BROWSER: JSON.stringify(true)
                }
            })]
        }
    });
};
