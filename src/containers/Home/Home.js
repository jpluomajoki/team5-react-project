import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from './Home.scss'
import {
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap'

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

  get sidebar () {
    return (
      <div className={styles.sidebar}>
        <FormGroup>
          <ControlLabel>Region level</ControlLabel>
          <FormControl componentClass='select'>
            <option value='option1'>option 1</option>
            <option value='option2'>option 2</option>
            <option value='option3'>option 3</option>
          </FormControl>
        </FormGroup>

        <FormGroup>
          <ControlLabel>Region</ControlLabel>
          <FormControl componentClass='select'>
            <option value='option1'>option 1</option>
            <option value='option2'>option 2</option>
            <option value='option3'>option 3</option>
          </FormControl>
        </FormGroup>

        <FormGroup>
          <ControlLabel>Scenario collection</ControlLabel>
          <FormControl componentClass='select'>
            <option value='option1'>option 1</option>
            <option value='option2'>option 2</option>
            <option value='option3'>option 3</option>
          </FormControl>
        </FormGroup>

        <FormGroup>
          <ControlLabel>Scenario</ControlLabel>
          <FormControl componentClass='select'>
            <option value='option1'>option 1</option>
            <option value='option2'>option 2</option>
            <option value='option3'>option 3</option>
          </FormControl>
        </FormGroup>

        <FormGroup>
          <ControlLabel>Scenario</ControlLabel>
          <FormControl componentClass='select' multiple>
            <option value='option1'>option 1</option>
            <option value='option2'>option 2</option>
            <option value='option3'>option 3</option>
          </FormControl>
        </FormGroup>

        <FormGroup>
          <ControlLabel>Indicators</ControlLabel>
          <FormControl componentClass='select' multiple>
            <option value='option1'>option 1</option>
            <option value='option2'>option 2</option>
            <option value='option3'>option 3</option>
          </FormControl>
        </FormGroup>

        <FormGroup>
          <ControlLabel>Period</ControlLabel>
          <FormControl componentClass='select'>
            <option value='option1'>option 1</option>
            <option value='option2'>option 2</option>
            <option value='option3'>option 3</option>
          </FormControl>
        </FormGroup>

        <FormGroup>
          <ControlLabel>Graph type</ControlLabel>
          <FormControl componentClass='select'>
            <option value='option1'>option 1</option>
            <option value='option2'>option 2</option>
            <option value='option3'>option 3</option>
          </FormControl>
        </FormGroup>
      </div>
    )
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
        {this.sidebar}
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
