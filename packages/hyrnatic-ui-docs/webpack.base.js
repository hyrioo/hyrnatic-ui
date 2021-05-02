const {VueLoaderPlugin} = require('vue-loader');
const path = require('path');

module.exports = {
    entry: './src/main.ts',
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js', '.vue'],
        alias: {
            '@': path.join(__dirname, 'src/'),
        },
        symlinks: false,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    'babel-loader',
                    {
                        loader: 'ts-loader',
                        options: {
                            appendTsSuffixTo: [/\.vue$/],
                        },
                    },
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.s?[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};