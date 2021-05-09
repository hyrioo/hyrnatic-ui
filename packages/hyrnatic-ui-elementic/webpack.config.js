const {VueLoaderPlugin} = require('vue-loader');

const path = require('path')

var config = {
    externals: {
        vue: 'vue',
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js", ".vue"],
        alias: {
            // '@': path.join(__dirname, 'src/'),
        },
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
}

var indexConfig = Object.assign({}, config, {
    name: 'index',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "index.js",
        library: {
            type: "umd", // universal module definition
            name: "hyrnatic-ui-elementic", // string | string[]
        },
    }
});

var modulesConfig = Object.assign({}, config, {
    name: 'modules',
    entry: {
        // common: './src/modules/common/install.ts',
        buttons: './src/modules/buttons/install.ts',
        // checkboxes: './src/modules/checkboxes/install.ts',
        // collapses: './src/modules/collapses/install.ts',
        // dialogs: './src/modules/dialogs/install.ts',
        // dropdowns: './src/modules/dropdowns/install.ts',
        // inputs: './src/modules/inputs/install.ts',
        // "progress-bars": './src/modules/progress-bars/install.ts',
        // "radio-buttons": './src/modules/radio-buttons/install.ts',
        // "scroll-containers": './src/modules/scroll-containers/install.ts',
        // selects: './src/modules/selects/install.ts',
        // steps: './src/modules/steps/install.ts',
        // tabs: './src/modules/tabs/install.ts',
        // tables: './src/modules/tables/install.ts',
    },
    output: {
        path: path.resolve(__dirname, './dist/modules'),
        filename: "[name]/index.js",
        library: {
            type: "umd", // universal module definition
            name: "hyrnatic-ui-elementic", // string | string[]
        },
    },
});

module.exports = [indexConfig];//, modulesConfig];
