import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from './Application.scss'
import { Navbar } from 'react-bootstrap'

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

  get header () {
    return (
      <Navbar className={styles.header}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='#'>DIGA</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    )
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
      <div className={styles.component}>
        {this.header}
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
