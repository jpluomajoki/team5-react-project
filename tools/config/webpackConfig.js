const path = require('path')
const webpack = require('webpack')
const LodashPlugin = require('lodash-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')

const paths = require('../helpers/paths')
const env = require('../helpers/env')

const rules = []

// babel
rules.push({
  test: /\.js$/,
  loader: 'babel-loader',
  exclude: /node_modules/,
  query: {
    cacheDirectory: env.isDev
  }
})

// scss files in src
rules.push({
  test: /\.scss/,
  include: /src/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [{
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        sourceMap: env.isDev,
        modules: true,
        localIdentName: env.isDev ? '[name]-[local]-[hash:base64:5]' : '[hash:base64:5]',
        minimize: !env.isDev,
        discardComments: {
          removeAll: true
        }
      }
    }, {
      loader: 'postcss-loader',
      options: {
        sourceMap: env.isDev,
        plugins: function () {
          return [autoprefixer]
        }
      }
    }, {
      loader: 'resolve-url-loader'
    }, {
      loader: 'sass-loader',
      options: {
        sourceMap: env.isDev,
        includePaths: [
          path.resolve(paths.srcPath, 'styles')
        ]
      }
    }]
  })
})

// css files in node_modules
rules.push({
  test: /\.css/,
  exclude: /src/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [{
      loader: 'css-loader',
      options: {
        sourceMap: env.isDev,
        minimize: !env.isDev
      }
    }, {
      loader: 'postcss-loader',
      options: {
        sourceMap: env.isDev,
        plugins: function () {
          return [autoprefixer]
        }
      }
    }]
  })
})

// scss files in node_modules
rules.push({
  test: /\.scss/,
  exclude: /src/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [{
      loader: 'css-loader',
      options: {
        sourceMap: env.isDev,
        minimize: !env.isDev
      }
    }, {
      loader: 'postcss-loader',
      options: {
        sourceMap: env.isDev,
        plugins: function () {
          return [autoprefixer]
        }
      }
    }, {
      loader: 'sass-loader',
      options: {
        sourceMap: env.isDev
      }
    }]
  })
})

// images
rules.push({
  test: /\.(ico|jpg|jpeg|png|gif)(\?.*)?$/,
  use: [{
    loader: 'file-loader',
    query: {
      name: env.isDev ? '[path][name].[ext]?[hash:8]' : '[hash:8].[ext]'
    }
  }, {
    loader: 'img-loader',
    query: {
      options: {
        enabled: env.isProd
      }
    }
  }]
})

// svg icons
rules.push({
  test: /\.svg$/,
  include: /src/,
  use: [{
    loader: 'svg-sprite-loader',
    query: {
      name: env.isDev ? '[path][name].[ext]?[hash:8]' : '[hash:8].[ext]'
    }
  }, {
    loader: 'svgo-loader'
  }]
})

// fonts
rules.push({
  test: /\.(ttf|eot|woff|woff2)(\?.*)?$/,
  loader: 'file-loader',
  query: {
    name: env.isDev ? '[path][name].[ext]?[hash:8]' : '[hash:8].[ext]'
  }
})

let plugins = [
  new LodashPlugin(),
  new HtmlWebpackPlugin({
    template: path.resolve(paths.srcPath, 'index.html'),
    inject: true,
    minify: env.isProd ? {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyURLs: true
    } : false
  }),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(env.env)
    },
    __PROD__: env.isProd,
    __DEV__: env.isDev
  }),
  new ExtractTextPlugin({
    filename: '[name]-[contenthash].css',
    disable: env.isDev,
    allChunks: true
  })
]

if (env.isDev) {
  plugins.push(
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: require(path.resolve(paths.dllOutputPath, 'deps.json'))
    }),
    new AddAssetHtmlPlugin({
      filepath: require.resolve(`${paths.dllOutputPath}/deps.dll.js`),
      includeSourcemap: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
}

if (env.isProd) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        screw_ie8: true, // React doesn't support IE8
        warnings: true,
        unused: true,
        dead_code: true
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    })
  )
}

const webpackConfig = {
  context: paths.rootPath,
  target: 'web',
  devtool: env.isDev ? 'cheap-module-source-map' : false,
  output: {
    path: paths.buildPath,
    publicPath: '/',
    filename: env.isDev ? '[name].js' : '[name].[hash:8].js',
    chunkFilename: env.isDev ? '[name].chunk.js' : '[name].[hash:8].chunk.js'
  },
  plugins,
  resolve: {
    modules: [
      'node_modules',
      paths.srcPath
    ]
  },
  entry: env.isDev ? [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/index.js'
  ] : [
    './src/index.js'
  ],
  module: {
    rules
  },
  bail: !env.isDev,
  cache: env.isDev,
  stats: {
    colors: true,
    timings: true
  }
}

module.exports = webpackConfig
