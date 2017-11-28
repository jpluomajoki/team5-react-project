const browserSync = require('browser-sync')
const history = require('connect-history-api-fallback')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const paths = require('./helpers/paths')
const webpackConfigDll = require('./config/webpackConfigDll')
const _ = require('lodash')
const fs = require('fs-extra')
const path = require('path')
const log = require('./helpers/log')

function createDlls (callback) {
  const compiler = webpack(webpackConfigDll.webpackConfig)

  if (fs.pathExistsSync(paths.dllDependenciesPath)) {
    const lastDeps = fs.readJsonSync(paths.dllDependenciesPath)

    if (_.isEqual(webpackConfigDll.deps, lastDeps)) {
      log.info('No new dependencies found. Skipping DLL build.')
      return callback()
    }
  }

  log.info('Creating dlls...')

  compiler.run((error) => {
    if (error) {
      return console.log(error)
    }

    log.info('Dlls created.')

    fs.writeJsonSync(path.resolve(paths.dllDependenciesPath), webpackConfigDll.deps)
    return callback()
  })
}

function runApp () {
  const webpackConfig = require('./config/webpackConfig')
  const bundler = webpack(webpackConfig)

  browserSync({
    open: true,
    notify: false,
    ghostMode: false,
    server: {
      baseDir: paths.srcPath,
      middleware: [
        history(),
        webpackDevMiddleware(bundler, {
          publicPath: webpackConfig.output.publicPath,
          stats: webpackConfig.stats
        }),
        webpackHotMiddleware(bundler)
      ]
    }
  })
}

createDlls(() => {
  runApp()
})
