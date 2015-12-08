/* eslint strict: 0 */

'use strict';

const path = require('path');
const webpack = require('webpack');
const Clean = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const standardCssExtract = new ExtractTextPlugin('css/[name].[hash].css', {
    disable: false
});

const pathToReact = path.resolve(__dirname, './node_modules/react/dist/react.min.js');
const pathToReactDom = path.resolve(__dirname, './node_modules/react-dom/dist/react-dom.min.js');

const _exports = {
    context: path.join(__dirname, '/'),
    entry: path.join(__dirname, './client/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: './',
        filename: 'js/[name].[hash].bundle.js'
    },
    resolve: {
        root: path.join(__dirname, 'client'),
        alias: {
            react: pathToReact,
            'react-dom': pathToReactDom
        }
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader?optional[]=runtime'
            }, {
                test: /.scss$/,
                loader: standardCssExtract.extract('style-loader', 'css?autoprefixer-loader!sass?sourceMap&outputStyle=compressed&includePaths[]=' + (path.resolve(__dirname, './client/scss')) + '&includePaths[]=' + (path.resolve(__dirname, './node_modules')))
            }, {
                test: /\.woff(2)?(\?.+$)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            }, {
                test: /\.(ttf|eot|svg)(\?.+)?$/,
                loader: 'file-loader'
            }, {
                test: /\.json?$/,
                loader: 'json?optional[]=runtime'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
                BROWSER: JSON.stringify(true)
            }
        }),
        standardCssExtract,
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new HtmlWebpackPlugin({
            template: './client/index.html'
        })
    ]
};

if (process.env.NODE_ENV !== 'dev') {
    _exports.plugins
        .unshift(new Clean(['dist/*']));
}

module.exports = _exports;
