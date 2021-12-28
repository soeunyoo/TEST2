const HtmlPlugin=require('html-webpack-plugin')
const CopyPlugin=require('copy-webpack-plugin')
module.exports={
entry:'./js/main.js',
plugins : [
new HtmlPlugin({
template:'./index.html'
}),
new CopyPlugin({
patterns: [
{ from: "static" }
]
})
],
module:{
rules:[
            {
                test:/\.s?css$/,
                use:[
                'style-loader',
                'css-loader',
                'sass-loader'
                ]
            },
            {
                test:/\.js$/,
                use:[
                'babel-loader'
                ]
            }       
        ]
    }
}