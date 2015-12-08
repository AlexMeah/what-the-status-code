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

const _exports = {
    context: path.join(__dirname, '/'),
    entry: path.join(__dirname, './client/index.js'),
    devtool: '#inline-source-map',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'js/[name].[hash].bundle.js'
    },
    resolve: {
        root: path.join(__dirname, 'client')
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader?optional[]=runtime'
        }, {
            test: /.scss$/,
            loader: standardCssExtract.extract('style-loader', 'css?autoprefixer-loader!sass?sourceMap&outputStyle=minified&includePaths[]=' + (path.resolve(__dirname, './client/scss')) + '&includePaths[]=' + (path.resolve(__dirname, './node_modules')))
        }, {
            test: /\.woff(2)?(\?.+$)?$/,
            loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        }, {
            test: /\.(ttf|eot|svg)(\?.+)?$/,
            loader: 'file-loader'
        }, {
            test: /\.json?$/,
            loader: 'json?optional[]=runtime'
        }]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                BROWSER: JSON.stringify(true)
            }
        }),
        standardCssExtract,
        new HtmlWebpackPlugin({
            template: './client/index.html'
        })
    ]
};

if (process.env.NODE_ENV !== 'dev') {
    _exports.plugins.unshift(new Clean(['dist/*']));
}

module.exports = _exports;
