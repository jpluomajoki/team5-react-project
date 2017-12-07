import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Sidebar.scss'
import _ from 'lodash'
import {
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap'
import * as FormControlNames from 'constants/FormControls'

export default class Sidebar extends Component {
  static propTypes = {
    regionLevels: PropTypes.array.isRequired,
    regions: PropTypes.array.isRequired,
    scenarios: PropTypes.array.isRequired,
    indicatorCategories: PropTypes.array.isRequired,
    timePeriods: PropTypes.array.isRequired,
    selectedValues: PropTypes.object.isRequired,
    onSelectValueChange: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired
  }

  static defaultProps = {
    // Empty
  }

  _scenariosInput = null
  _indicatorsInput = null

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

  // Get scenario collections from chosen region
  get scenarioCollections () {
    if (!this.props.regions || !this.props.selectedValues[FormControlNames.REGION]) {
      return null
    }

    const chosenRegion = _.find(this.props.regions, r => String(r.id) === this.props.selectedValues[FormControlNames.REGION])

    return chosenRegion ? chosenRegion.scenarioCollections : null
  }

  render () {
    const translate = this.props.translate
    const {
      regionLevels,
      regions,
      scenarios,
      indicatorCategories,
      timePeriods,
      onSelectValueChange
    } = this.props

    return (
      <div className={styles.component}>
        <FormGroup>
          <ControlLabel>{translate('region level')}</ControlLabel>
          <FormControl
            name={FormControlNames.REGION_LEVEL}
            componentClass='select'
            onChange={onSelectValueChange}>
            <option disabled selected>select</option>
            {_.map(regionLevels, (level, index) => {
              return (
                <option key={index} value={level.id}>
                  {level.name}
                </option>
              )
            })}
          </FormControl>
        </FormGroup>
        <FormGroup>
          <ControlLabel>{translate('region')}</ControlLabel>
          <FormControl
            name={FormControlNames.REGION}
            componentClass='select'
            onChange={onSelectValueChange}>
            <option disabled selected>select</option>
            {_.map(regions, (region, index) => {
              return (
                <option key={index} value={region.id}>
                  {region.name}
                </option>
              )
            })}
          </FormControl>
        </FormGroup>
        <FormGroup>
          <ControlLabel>{translate('scenario collection')}</ControlLabel>
          <FormControl
            name={FormControlNames.SCENARIO_COLLECTION}
            componentClass='select'
            onChange={onSelectValueChange}>
            <option disabled selected>select</option>
            {_.map(this.scenarioCollections, (collection, index) => {
              return (
                <option key={index} value={collection.id}>
                  {collection.name}
                </option>
              )
            })}
          </FormControl>
        </FormGroup>
        <FormGroup>
          <ControlLabel>{translate('scenario')}</ControlLabel>
          <FormControl
            multiple
            name='scenarios'
            componentClass='select'
            inputRef={ref => this._scenariosInput = ref}
            onChange={this.handleMultipleSelectValueChange('_scenariosInput')}>
            <option disabled selected>select</option>
            {_.map(scenarios, (scenario, index) => {
              return (
                <option key={index} value={scenario.id}>
                  {scenario.name}
                </option>
              )
            })}
          </FormControl>
        </FormGroup>
        <FormGroup>
          <ControlLabel>{translate('indicators')}</ControlLabel>
          <FormControl
            multiple
            name={FormControlNames.INDICATORS}
            componentClass='select'
            inputRef={ref => this._indicatorsInput = ref}
            onChange={this.handleMultipleSelectValueChange('_indicatorsInput')}>
            <option disabled selected>select</option>
            {_.map(indicatorCategories, (category, index) =>
              _.map(category.indicators, (indicator, index) => {
                return (
                  <option key={index} value={indicator.id}>
                    {indicator.name}
                  </option>
                )
              })
            )}
          </FormControl>
        </FormGroup>
        <FormGroup>
          <ControlLabel>{translate('time period')}</ControlLabel>
          <FormControl
            name={FormControlNames.TIME_PERIOD}
            componentClass='select'
            onChange={onSelectValueChange}>
            <option disabled selected>select</option>
            {_.map(timePeriods, (period, index) => {
              return (
                <option key={index} value={period.id}>
                  {`${period.yearStart}-${period.yearEnd}`}
                </option>
              )
            })}
          </FormControl>
        </FormGroup>
      </div>
    )
  }
}
