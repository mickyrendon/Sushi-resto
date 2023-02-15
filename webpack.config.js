const path =  require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } =  require('clean-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const cssRules = {
    test: /\.css$/i,
    use: [
            // MiniCssExtractPlugin.loader,
            'style-loader',
            'css-loader',
        ]
    }

const jsRules = {
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader'
    }
}
const fontsRules = {
    test: /\.(ttf)$/,
    use: {
        loader: 'url-loader',
        options: {
            limit: 10000,
            mimetype: "application/font-woff",
            name: "[name].[contenthash].[ext]",
            outputPath: "../assets/fonts/",
            publicPath: "../assets/fonts/",
            esModule: false
        }
    }
}

const imgRules = {
    test: /\.(png|ico|jpg|svg|mp4)$/,
    type: 'assets/resource'
}

const rules = [ jsRules, cssRules, fontsRules, imgRules ]


module.exports = (env, arg) => {
    const { mode } =  arg
    const isProduction = mode === 'production'
    return {
        // entry: './dist/index.js' // default
        output: {
            filename: isProduction
            ? '[name].[contenthash].js' 
            : 'main.js', 
            path: path.resolve(__dirname, 'dist'),
            assetModuleFilename: 'assets/images/[hash][ext][query]'
        }, 
        resolve: {
            extensions: ['.js'],
        }, 
        module: { rules },
        devServer: {
            open: true,
            port: 3000,
            compress: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                inject: true,
                template: './public/index.html',
                filename: './index.html'
            }),
            // new MiniCssExtractPlugin()
            new CopyPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, 'src', 'assets/images'),
                        to: 'assets/images'
                    }
                ]
            }),
            new CleanWebpackPlugin()
        ],
        optimization: {
            minimize: true,
            minimizer: [
                new CssMinimizerPlugin(),
                new TerserPlugin()
            ]
        }
    }
}