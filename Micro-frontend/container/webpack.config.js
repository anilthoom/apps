const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('./package.json')

module.exports = {
    mode: 'development',
    devServer: {
        port: 3000,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container', 
            remotes: {
                products: 'products@http://localhost:8000/remoteEntry.js', // importing products file from port 8000
                cart: 'cart@http://localhost:8001/remoteEntry.js', // importing cart file from port 8001
            },
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        })
    ],
};