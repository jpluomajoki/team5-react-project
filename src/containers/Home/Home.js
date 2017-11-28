import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { demoFetch } from 'actions/demo'

const initialState = {
  // Empty
}

export class Home extends Component {
  static propTypes = {
    demoFetch: PropTypes.func,
    error: PropTypes.object,
    pending: PropTypes.bool,
    data: PropTypes.object
    // TODO: ^ to be removed
  }

  static defaultProps = {
    // Empty
  }

  get error () {
    if (!this.props.error) {
      return null
    }

    console.log(this.props.error)
    const errorMessage = 'Some error message'

    return (
      <p>{errorMessage}</p>
    )
  }

  get data () {
    if (!this.props.data) {
      return null
    }

    console.log(this.props.data)
    const dataToShow = 'Show some data or whatever'

    return (
      <p>{dataToShow}</p>
    )
  }

  handleFetchClick = () => {
    if (this.props.pending) {
      return
    }

    this.props.demoFetch()
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
        <button onClick={this.handleFetchClick}>Fetch</button>
        {this.error}
        {this.data}

        <p>header</p>
        <p>left sidebar</p>
        <p>right sidebar</p>
        <p>content section</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  pending: state.demo.pending,
  error: state.demo.error,
  data: state.demo.data
})

const mapActionsToProps = {
  demoFetch
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Home)
