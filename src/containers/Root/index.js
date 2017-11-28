if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
  module.exports = require('./Root.prod.js').default
} else {
  module.exports = require('./Root.dev.js').default
}
