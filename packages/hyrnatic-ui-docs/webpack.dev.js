const base = require('./webpack.base.js');

const config = Object.assign({}, base, {
    devServer: {
        // contentBase: options.paths.output.docs,
        host: '0.0.0.0', // Bind to 0.0.0.0 for external access for external devices (mobile testing)
        port: 9000,
        historyApiFallback: true,
        noInfo: true,
        clientLogLevel: 'error'
    }
});

module.exports = config;
