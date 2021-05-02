const base = require('./webpack.base.js');
HtmlWebpackPlugin = require('html-webpack-plugin');

const config = Object.assign({}, base, {
    mode: 'development',
    devServer: {
        // contentBase: options.paths.output.docs,
        host: '0.0.0.0', // Bind to 0.0.0.0 for external access for external devices (mobile testing)
        port: 8080,
        historyApiFallback: true,
        hot: false,
        liveReload: false,
    },
    plugins: [
        ...base.plugins,
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
    ]
});

module.exports = config;
