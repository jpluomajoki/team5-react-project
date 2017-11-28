import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import axiosMiddleware from 'redux-axios-middleware'
import { client } from 'utils/axios'
import reducers from 'reducers'

export default function configureStore (initialState = {}, history) {
  const middlewares = [
    // Add middleware here
    routerMiddleware(history),
    thunkMiddleware,
    promiseMiddleware,
    axiosMiddleware(client, {
      errorSuffix: '_ERROR'
    })
  ]

  const enhancers = [
    applyMiddleware(...middlewares)
  ]

  const composeEnhancers = (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(...enhancers)
  )

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      System.import('./reducers').then((nextReducers) => {
        store.replaceReducer(nextReducers.default)
      })
    })
  }

  return store
}
