import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
    mode: "development",
    entry: "./any-ascii.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "anyasciiBundle.js",
        library: {
          name: "anyascii",
          type: 'var',
          export: 'default'
        },
    },
    experiments: {
        outputModule: true,
    },
    plugins: [
       //empty pluggins array
    ],
    module: {
         // https://webpack.js.org/loaders/babel-loader/#root
        //rules: [
        //    {
        //        test: /.m?js$/,
        //        loader: 'babel-loader',
        //        exclude: /node_modules/,
        //    }
        //],
    },
    devtool: 'source-map'
}
