const path=require('path');

module.exports={
    entry:'./src/index.js',//punto de entrada
    output:{//salida
        filename:'main.js',//carpeta de salida
        path:path.resolve(__dirname,'dist'),//
    },
};