const env = process.env.NODE_ENV || 'development'
const isDev = env === 'development'
const isProd = env === 'production'

module.exports = {
  env,
  isDev,
  isProd
}
