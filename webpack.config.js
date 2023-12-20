// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PugPlugin = require('pug-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';



const config = {
    entry: {
        index: './src/views/index.pug',
        success: './src/views/success.pug',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'assets/js/[name].[contenthash:8].js'
    },
    devServer: {
        open: true,
        host: 'localhost',
        watchFiles: {
            paths: ['src/**/*.*', 'src/sass/**/*.*'],
        }
    },
    plugins: [
        new PugPlugin({
            pretty: true,
            css: {
                filename: 'assets/css/[name].[contenthash:8].css'
            }
        })

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: PugPlugin.loader
            },
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['css-loader', 'sass-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        config.plugins.push(new MiniCssExtractPlugin());
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
