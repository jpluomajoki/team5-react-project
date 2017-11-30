import React from 'react'
import PropTypes from 'prop-types'
import styles from './Sidebar.scss'
import {
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap'

const Sidebar = ({ }) => (
  <div className={styles.component}>
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

Sidebar.propTypes = {
  // TOOD
}

Sidebar.defaultProps = {
  // Empty
}

export default Sidebar
