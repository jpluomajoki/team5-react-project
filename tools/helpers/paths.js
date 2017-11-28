const path = require('path')

const rootPath = path.resolve(__dirname, '../../')
const srcPath = path.resolve(rootPath, 'src')
const buildPath = path.resolve(rootPath, 'build')
const dllOutputPath = path.join(rootPath, `dlls`)
const dllDependenciesPath = path.resolve(dllOutputPath, 'dependencies.json')

module.exports = {
  rootPath,
  srcPath,
  buildPath,
  dllOutputPath,
  dllDependenciesPath
}
