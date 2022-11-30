const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: resolve(__dirname, 'build'),
    library:{
      name:'morescxutil',
      type:'umd'
    }
  },
  module: {
    rules: [
      /**
       * 语法检查：eslint-loader 依赖于eslint
       * 注意：只检查自己写的源代码，别人的第三方库是不检查的
       * 设置检查规则：
       * package.json中的eslintConfig中设置！
       * "eslintConfig": {
            "extends": "airbnb-base"
          }
       * airbnb --> eslint-config-airbnb-base  eslint-plugin-import eslint
       */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:[
          {
              loader:'babel-loader',
              options:{
                  presets:[
                      '@babel/preset-env',
                  ],
                  plugins:[
                      "@babel/plugin-transform-runtime"
                  ]
              }
          }
      ]
      },
    ],
  },
  // plugins: [
  //   // new HtmlWebpackPlugin({
  //   //   template: './src/index.html',
  //   // }),
  // ],
  mode: 'production',
};
