var path=require('path');
module.exports = {
  entry: './index.d.ts',
  output: {
    filename: 'dist/bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx']
  },
  module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                include: [
                    path.resolve('./', "src")
                ],
                
                exclude: [
                    '/node_modules/',
                ],
                enforce: "pre",
                enforce: "post",
                loader: "ts-loader",
                options: {
                    presets: ["es2015"]
                },
            },

            {
                test: "\.html$",

                use: [
                    "htmllint-loader",
                    {
                        loader: "html-loader",
                        options: {
                            /* ... */
                        }
                    }
                ]
            },

           
        ],

    },

  // module: {
  //   loaders: [
  //     {
  //       test: /\.tsx?$/,
  //       exclude: /node_modules/,
  //       loader: 'ts-loader'
  //     }
  //   ]
  // }
}