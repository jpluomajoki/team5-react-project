import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from './Home.scss'
import {
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap'
import Sidebar from '../Sidebar'

const initialState = {
  // Empty
}

export class Home extends Component {
  static propTypes = {
    // Empty
  }

  static defaultProps = {
    // Empty
  }

  get content () {
    return (
      <div className={styles.content} />
    )
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
      <div className={styles.component}>
        <Sidebar />
        {this.content}
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
