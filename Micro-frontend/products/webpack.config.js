const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('./package.json')

module.exports = {
    mode: 'development',
    devServer: {
        port: 8000,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'products', // name of the item being exposed (required in container)
            filename: 'remoteEntry.js', // name of the file
            exposes: {
                './ProductIndex': './src/bootstrap' // actual file being exposed
            },
            shared: packageJson.dependencies, // to remove duplicate external modules loading in the container
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        })
    ],
};