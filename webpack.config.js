
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
      studio: "./src/playground/studio.js",
      homepage: "./src/playground/homepage.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "build"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
            filename: "studio/index.html",
            chunks: ["studio"],
            title: "CatchJS Studio"
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
            filename: "index.html",
            chunks: ["homepage"],
            title: "CatchJS Home"
        }),
    ],
    module: {
        // exclude node_modules
        rules: [
            {
                test: /\.svg$/,
                type: "asset/inline"
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    // pass all js files through Babel
    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },
};
