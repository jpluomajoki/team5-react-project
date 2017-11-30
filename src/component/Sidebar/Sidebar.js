import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Sidebar.scss'
import _ from 'lodash'
import {
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap'

export default class Sidebar extends Component {
  static propTypes = {
    options: PropTypes.object.isRequired,
    onSelectValueChange: PropTypes.func.isRequired
  }

  static defaultProps = {
    // Empty
  }

  _scenariosInput = null
  _indicatorCategoriesInput = null

  // Note: In order to get all the values from a multiple select when the value changes
  // we need to handle this a bit differently.
  // This handler gets all the selected values on every value change.
  // Afterwards it will recreate a 'fake' event so that we can pass it along to the parent container
  // which can handle it on it's turn, like a normal on change event.
  handleMultipleSelectValueChange = (ref) => (event) => {
    const values = [].map.call(this[ref].selectedOptions, option => option.value)

    const fakeEvent = {}
    fakeEvent.target = {}
    fakeEvent.target.value = values
    fakeEvent.target.name = event.target.name

    this.props.onSelectValueChange(fakeEvent)
  }

  render () {
    const { options, onSelectValueChange } = this.props

    return (
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
          <FormControl
            multiple
            name='scenarios'
            componentClass='select'
            inputRef={ref => this._scenariosInput = ref}
            onChange={this.handleMultipleSelectValueChange('_scenariosInput')}>
            {_.map(options.scenarios, (scenario, index) => {
              return (
                <option key={index} value={scenario.id}>
                  {scenario.name}
                </option>
              )
            })}
          </FormControl>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Indicators</ControlLabel>
          <FormControl
            multiple
            name='indicatorCategories'
            componentClass='select'
            inputRef={ref => this._indicatorCategoriesInput = ref}
            onChange={this.handleMultipleSelectValueChange('_indicatorCategoriesInput')}>
            {_.map(options.indicatorCategories, (category, index) => {
              return (
                <option key={index} value={category.id}>
                  {category.name}
                </option>
              )
            })}
          </FormControl>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Time period</ControlLabel>
          <FormControl
            name='timePeriods'
            componentClass='select'
            onChange={onSelectValueChange}>
            {_.map(options.timePeriods, (period, index) => {
              return (
                <option key={index} value={period.id}>
                  {`${period.yearStart}-${period.yearEnd}`}
                </option>
              )
            })}
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
}
