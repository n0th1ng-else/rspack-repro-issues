import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {CircularDependencyRspackPlugin} from '@rspack/core'
import RspackCircularDependencyPlugin from "rspack-circular-dependency-plugin";
import CircularDependencyPlugin from 'circular-dependency-plugin'

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isNativePlugin = process.env.RSPACK_PLUGIN === '1'

/**
 * @type {import('webpack').Configuration | import('@rspack/cli').Configuration}
 */
const config = {
  mode: "development",
  devtool: false,
  entry: {
    main: "./src/index",
  },
  plugins: [
      new HtmlWebpackPlugin(),
    isNativePlugin ? new CircularDependencyRspackPlugin({
      failOnError: true,
      allowAsyncCycles: false,
      exclude: /node_modules/,
      onEnd() {
        console.log('EXTERNAL RspackCircularDependencyPlugin')
      }
    }) :     new RspackCircularDependencyPlugin({
      failOnError: true,
      allowAsyncCycles: false,
      exclude: /node_modules/,
      onEnd() {
        console.log('NATIVE CircularDependencyRspackPlugin')
      }
    }),
    // new CircularDependencyPlugin({
    // 	failOnError: true,
    // 	allowAsyncCycles: false,
    // 	exclude: /node_modules/,
    // 	onEnd() {
    // 		console.log('WEBPACK CircularDependencyPlugin')
    // 	}
    // }),
  ],
  output: {
    clean: true,
    path: path.resolve(__dirname, "rspack-dist"),
    filename: "[name].js",
  },
  experiments: {
    css: true,
  },
};

export default config;
