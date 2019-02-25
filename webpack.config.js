const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeJsPlugin = require('optimize-js-plugin');
const path = require('path');
const env = process.env.NODE_ENV || 'development';

config = {
    entry: [
        'react-hot-loader/patch',
        './client/index.js'
    ],
    output: {
        filename: './bundle.js',
        path: path.join(__dirname, 'public'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                loader: "babel-loader"
            },
            {
                test:/\.css$/,
                use: [
                    { loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true //limited range to local
                        }
                    }
                ]
            }

        ]
    },
      devServer: {
      historyApiFallback: true,
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: 'client/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
    ]
};

console.log('NODE_ENV: ', env);

if(env === 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin(),
        new OptimizeJsPlugin({
            sourceMap: false
        })
    )
}

module.exports = config;
