import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store'
import Root from 'containers/Root'

const initialState = {
  // Empty

}

const store = configureStore(initialState, browserHistory)
const history = syncHistoryWithStore(browserHistory, store)
const rootElement = document.getElementById('root')

if (process.env.NODE_ENV === 'production') {
  render(<Root store={store} history={history} />, rootElement)
} else {
  const AppContainer = require('react-hot-loader').AppContainer

  // Trick babel to avoid hoisting <AppContainer />
  // transform-react-constant-elements
  const noHoist = {}

  render((
    <AppContainer {...noHoist}>
      <Root store={store} history={history} />
    </AppContainer>
  ), rootElement)

  if (module.hot) {
    module.hot.accept('./containers/Root', () => {
      System.import('./containers/Root').then((NextRootContainer) => {
        render((
          <AppContainer {...noHoist}>
            <NextRootContainer store={store} history={history} />
          </AppContainer>
        ), rootElement)
      })
    })
  }
}
