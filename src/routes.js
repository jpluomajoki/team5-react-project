import * as Routes from 'constants/Routes'

import Application from 'containers/Application'

const getContainer = container => (location, callback) => {
  import(`containers/${container}/${container}`)
    .then((module) => callback(null, module.default))
    .catch((error) => {
      throw new Error(`Dynamic page loading failed: ${error}`)
    })
}

export default function createRoutes (store) {
  return {
    path: Routes.MAIN,
    component: Application,
    indexRoute: {
      getComponent: getContainer('Home')
    }
  }
}
