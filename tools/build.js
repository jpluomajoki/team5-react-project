const path = require('path')
const webpack = require('webpack')
const fs = require('fs-extra')

const webpackConfig = require('./config/webpackConfig')
const paths = require('./helpers/paths')
const log = require('./helpers/log')

const compiler = webpack(webpackConfig)

compiler.run((error) => {
  if (error) {
    return log.error(error)
  }

  log.info('Compiled, copying public dir...')

  fs.copySync(path.join(paths.srcPath, 'public'), path.join(paths.buildPath, 'public'))
  log.info('All done.')
})
