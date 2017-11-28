const path = require('path')
const webpack = require('webpack')
const _ = require('lodash')
const pkg = require('../../package.json')
const paths = require('../helpers/paths')

const deps = _.remove(Object.keys(pkg.dependencies), d => !pkg.dll.exclude.includes(d))

const webpackConfig = {
  entry: {
    deps
  },
  devtool: 'source-map',
  output: {
    filename: '[name].dll.js',
    path: paths.dllOutputPath,
    library: '[name]_[hash]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(paths.dllOutputPath, '[name].json'),
      name: '[name]_[hash]'
    })
  ],
  performance: {
    hints: false
  }
}

module.exports = {
  webpackConfig,
  deps
}
