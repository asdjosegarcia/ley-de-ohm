const path=require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports={
/*     module.exports = {
        entry: 'index.js',
        output: {
          path: path.resolve(__dirname, './dist'),
          filename: 'index_bundle.js',
        },
        plugins: [new HtmlWebpackPlugin()],
      }; */
    entry:'./src/JS/index.js',//punto de entrada
    output:{//salida
        filename:'main.js',//carpeta de salida
        path:path.resolve(__dirname,'dist'),//
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
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
                test:/\.css$/,
                exclude: /node_modules/,
                use:[
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test:/\.(png|svg|mp3|jp(e*)g|gif)$/,
                exclude: /node_modules/,
                type:'asset'//asset viene con webpack, reemplazo a varios plugins y loaders de imagenes
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: './index.html',  // Ruta de tu archivo HTML de entrada
        filename: 'index.html',      // Nombre del archivo HTML de salida
    })],

};