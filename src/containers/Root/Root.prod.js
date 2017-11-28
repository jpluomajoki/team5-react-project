import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import createRoutes from 'routes'

const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history} routes={createRoutes(store)} />
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root
