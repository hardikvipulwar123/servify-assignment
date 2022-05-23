const path = require('path')

module.exports={
mode :"production",
entry :"./src/App.js",
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