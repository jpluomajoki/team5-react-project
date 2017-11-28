import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import createRoutes from 'routes'

export default class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  }

  render () {
    const { store, history } = this.props

    return (
      <Provider store={store}>
        <Router
          history={history}
          key={Math.random()}
          routes={createRoutes(store)} />
      </Provider>
    )
  }
}
