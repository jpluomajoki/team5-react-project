import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const initialState = {
  // Empty
}

// TODO: stateless component (?)
export class Application extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  static defaultProps = {
    // Empty
  }

  constructor (props) {
    super(props)

    this.state = initialState
  }

  componentWillMount () {
    // Empty
  }

  componentWillReceiveProps (nextProps) {
    // Empty
  }

  render () {
    return (
      <div>
        <h1>Application</h1>
        {this.props.children}
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
)(Application)
