
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

const deps = require('./package.json').dependencies

module.exports = {
    output: {
        publicPath: 'teambuilder22.herokuapp.com'
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"]
    },
    devServer: {
        port: 3001,
        historyApiFallback: true
    },
    module: {
        rules: [
          {
            test: /\.m?js/,
            type: "javascript/auto",
            resolve: {
              fullySpecified: false,
            },
          },
          {
            test: /\.(css|s[ac]ss)$/i,
            use: ["style-loader", "css-loader", "postcss-loader"],
          },
          {
            test: /\.(ts|tsx|js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: { presets: ['@babel/env','@babel/preset-react'] },
          }, {
            test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
            loader: 'url-loader',
          }
        ],
      },
      plugins: [
        new ModuleFederationPlugin({
          name: "teambuilder",
          filename: "remoteEntry.js",
          remotes: {},
          exposes: {
            './App': "./src/App.js"
          },
          shared: {
            ...deps,
            react: {
              singleton: true,
              requiredVersion: deps.react,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: deps["react-dom"],
            },
          },
        }),
      ],
}