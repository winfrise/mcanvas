const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
const merge = require('webpack-merge');
const os = require('os');
const baseConfig = require('./webpack.base')
const resolve = filePath => path.resolve(__dirname, filePath)
const env = process.env.ENV

// web-server 配置IP；
const ifaces = os.networkInterfaces();
let devHost = '0.0.0.0';
let port = 9000;
Object.keys(ifaces).forEach(key => {
    for (let i in ifaces[key]) {
        if (ifaces[key][i].family === 'IPv4' && 
        /^(192|172)\./.test(ifaces[key][i].address)) {
            devHost = ifaces[key][i].address;
        }
    }
});

const config = {
    mode: 'development',
    entry: [
        resolve(`../example/main.js`),
    ],
    output: {
        path: resolve('../example/dist'),
        filename: `[name].js`,
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: resolve('../example/index.html'),
        }),
        new VueLoaderPlugin()
    ],
    devServer: {
        contentBase: resolve('../example/dist'),
        compress: false,
        port: port,
        open: false,
        hot: true,
        host: devHost,
        writeToDisk: true,
    },
    resolve: {
        extensions: ['.js', '.json', '.vue']
    }
}


module.exports = merge(baseConfig, config)
