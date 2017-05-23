var DEBUG = process.env.DEBUG;

var _ = require("lodash");

var autoprefixer = require("autoprefixer");

var path = require("path");
var webpack = require("webpack");

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var WebpackErrorNotificationPlugin = require("webpack-error-notification");
var webpackFailPlugin = function () {
	this.plugin("done", function (stats) {
		if (stats.compilation.errors && stats.compilation.errors.length && process.argv.indexOf("--watch") === -1) { // eslint-disable-line
			process.on("beforeExit", function () {
				process.exit(1);
			});
		}
	});
};

var AssetsPlugin = require("assets-webpack-plugin");
var assetsPluginInstance = new AssetsPlugin({
	filename: "./public/assets.json"
});

var devFlagPlugin = new webpack.DefinePlugin({
	__DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || "false"))
});

var SCRIPTS_ROOT = path.resolve(__dirname, "./scripts");
var STYLES_ROOT = path.resolve(__dirname, "./styles");

var MODULES = {
	site: "./src/index.js"
};

const sassLoaders = [
	"css-loader",
	"postcss-loader",
	"sass-loader?indentedSyntax=sass&includePaths[]=" + path.resolve(__dirname, "./style")
];

module.exports = {
	entry: MODULES,
	output: {
		path: path.resolve(__dirname, "./public"),
		filename: "[name].bundle.js",
		pathinfo: DEBUG
	},
	module: {
		noParse: [
			/[\/]jquery[\/]/,
			/[\/]slideout[\/]/,
			/[\/]highcharts[\/]/
		],
		loaders: [
			{
				test: /\.(woff|woff2|ttf|eot|svg)$/,
				loader: "file",
				query: { name: "fonts/[name].[ext]" },
			}, {
				test: /\.png$/,
				loader: "file?name=[name].[ext]"
			}, {
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("css-loader")
			}, {
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract("style-loader", sassLoaders.join("!"))
			}, {
				test: /\.(js|jsx|es6)$/,
				exclude: /(node_modules)/,
				loader: "babel",
				query: {
					"presets": ["react", "es2015", "stage-0"]
				}
			}, {
        test: /\.json$/,
        exclude: /(node_modules)/,
        loader: 'json-loader'
      }
		]
	},
	resolve: {
		extensions: ["", ".js", ".es6", ".jsx"],
		modulesDirectories: ["node_modules"],
		alias: {
			"az-scripts": SCRIPTS_ROOT,
			"az-styles": STYLES_ROOT,
			"jquery$": "jquery/dist/jquery",
			"bootstrap$": "bootstrap/dist/js/bootstrap.min"
		}
	},
	postcss: [
		autoprefixer({
			browsers: ["last 2 versions"]
		})
	],
	plugins: [
		new webpack.ProvidePlugin({
			"window.jQuery": "jquery",
			$: "jquery",
			jQuery: "jquery"
		}),
		new webpack.DefinePlugin({
			DEBUG: DEBUG
		}),
		new webpack.optimize.OccurenceOrderPlugin(true),
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			filename: "vendor.bundle.js",
			minChunks: Infinity
		}),
		assetsPluginInstance,
		devFlagPlugin,
	].concat(DEBUG ? [
		new WebpackErrorNotificationPlugin()
	] : [
		new webpack.optimize.UglifyJsPlugin({
			mangle: false,
			compress: false
		}),
		webpackFailPlugin
	]).concat([
		new ExtractTextPlugin("[name].css"),
		new webpack.NoErrorsPlugin()
	]),
	debug: DEBUG,
	devtool: DEBUG ? "cheap-module-source-map" : "hidden-cheap-module-source-map"
};
