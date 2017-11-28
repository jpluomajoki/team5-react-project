import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const initialState = {
  // Empty
}

export class Home extends Component {
  static propTypes = {
    // children: PropTypes.node.isRequired
  }

  static defaultProps = {
    // Empty
  }

  constructor (props) {
    super(props)

    this.state = initialState
  }

  componentWillMount () {

  }

  componentWillReceiveProps (nextProps) {

  }

  render () {
    return (
      <div>
        <h1>TODO: header</h1>
        <h1>TODO: left sidebar</h1>
        <h1>TODO: right sidebar</h1>
        <h1>TODO: content section</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapActionsToProps = {

}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Home)
