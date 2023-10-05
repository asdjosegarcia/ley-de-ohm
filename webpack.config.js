const path=require('path');

module.exports={
    entry:'./src/JS/index.js',//punto de entrada
    output:{//salida
        filename:'main.js',//carpeta de salida
        path:path.resolve(__dirname,'dist'),//
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },
};