const browserSync = require('browser-sync')
const history = require('connect-history-api-fallback')
const compression = require('compression')
const paths = require('./helpers/paths')

browserSync({
  open: true,
  notify: false,
  server: {
    baseDir: paths.buildPath,
    middleware: [
      history(),
      compression()
    ]
  }
})
