const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/JS/index.js',//punto de entrada
    output: {//salida
        filename: 'main.js',//carpeta de salida del js principal
        path: path.resolve(__dirname, 'dist'),//
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,//aqui no usamos jsx pero no hay problemas con dejarlo ahi
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'html-loader'
                }]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,//
                    // 'style-loader', //se desactivo ya que usaremos MiniCssExtractPlugin
                    'css-loader',
                ],
            },
            {
                test: /\.(png|svg|mp3|jp(e*)g|gif)$/,
                exclude: /node_modules/,
                type: 'asset'//asset viene con webpack, reemplazo a varios plugins y loaders de imagenes
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',  // Ruta de tu archivo HTML de entrada
            filename: 'index.html',      // Nombre del archivo HTML de salida
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css' //sale con el nombre main.css, por que en module .export configuramos que la salida seria main.js, por lo tanto esto seria main .css
        }),
    ],
    devServer: {
        static: {
          directory: path.join(__dirname, 'dev-server'),//segun entiendo esto es para indicarle a devserver cual sera el directorio que tiene que ejecutar
        },
        compress: true,
        port: 9000,
      },
};