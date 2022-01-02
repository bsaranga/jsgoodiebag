const path = require('path');
const json5 = require('json5');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    optimization: {
        usedExports: true,
    },
    entry: './src/index.js',
    devServer: {
        static: {
            directory: './dist',
            watch: true,
        },
        hot: true,
        port: 3600,
        client: {
            overlay: true,
            logging: 'info',
            progress: true,
            reconnect: true,
        },
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Base',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
            },
            {
                test: /\.json5$/i,
                type: 'json',
                parser: {
                  parse: json5.parse,
                },
            },
        ],
    },
}