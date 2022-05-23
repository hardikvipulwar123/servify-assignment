const path = require('path')


module.exports={
mode :"production",
entry :"./src/App.js",
output:{
    path:path.resolve(__dirname,'dist'),
    filename:'main.js'
},
module:{
    rules:[
        {
            test :/\.css$/,
            use:[
                'style-loader',
                'css-loader'
            ]
        }
    ]
},
devServer:{
   static:path.join(__dirname,'dist'),
    compress:true,
    port:3500
}
}