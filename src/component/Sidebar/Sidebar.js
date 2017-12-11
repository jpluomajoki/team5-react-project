import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Sidebar.scss'
import _ from 'lodash'
import {
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap'
import { connect } from 'react-redux'
import { getTranslate } from 'react-localize-redux'
import {
  fetchRegionLevels,
  fetchRegions,
  fetchScenarioCollectionData,
  selectRegionLevel,
  selectRegion,
  selectScenarioCollection,
  selectScenarios,
  selectIndicators,
  selectPeriod
} from '../../actions/data'
import * as FormControlNames from 'constants/FormControls'

class Sidebar extends Component {
  static propTypes = {
    regionLevels: PropTypes.array.isRequired,
    regions: PropTypes.array.isRequired,
    scenarios: PropTypes.array.isRequired,
    indicatorCategories: PropTypes.array.isRequired,
    timePeriods: PropTypes.array.isRequired,
    translate: PropTypes.func.isRequired,
    selectedValues: PropTypes.object.isRequired
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

    switch (ref) {
      case '_scenariosInput':
        this.props.selectScenarios(_.map(fakeEvent.target.value, id => (parseInt(id))))
        break
      case '_indicatorsInput':
        this.props.selectIndicators(_.map(fakeEvent.target.value, id => (parseInt(id))))
        break
      default:
        break
    }
  }

  // Get scenario collections from chosen region
  get scenarioCollections () {
    if (!this.props.regions || !this.props.selectedValues[FormControlNames.REGION]) {
      return null
    }

    const chosenRegion = _.find(this.props.regions, r => String(r.id) === this.props.selectedValues[FormControlNames.REGION])

    return chosenRegion ? chosenRegion.scenarioCollections : null
  }

  componentWillReceiveProps (newProps) {
    if (!newProps.pending) {
      const oldSelectedValues = this.props.selectedValues
      const newSelectedValues = newProps.selectedValues
      if (oldSelectedValues.regionLevel !== newSelectedValues.regionLevel) {
        this.props.fetchRegions(newSelectedValues.regionLevel)
      }
      if (newSelectedValues.scenarioCollection !== oldSelectedValues.scenarioCollection) {
        this.props.fetchScenarioCollectionData(newSelectedValues.scenarioCollection, newSelectedValues.region)
      }
    }
  }

  onSelectValueChange (e) {
    console.log(e.target.value)
  }

  render () {
    const translate = this.props.translate
    console.log('regions', this.props.regions)
    console.log('selectedregion', this.props.selectedValues.region)
    const scenarioCollections = this.props.regions.length === 0
      ? []
      : this.props.regions.find(region => region.id === this.props.selectedValues.region).scenarioCollections

    return (
      <div className={styles.component}>
        <FormGroup>
          <ControlLabel>{translate('region level')}</ControlLabel>
          <FormControl
            name={FormControlNames.REGION_LEVEL}
            componentClass='select'
            onChange={(e) => {
              this.props.selectRegionLevel(parseInt(e.target.value))
            }}
            value={this.props.selectedValues.regionLevel}>
            {_.map(this.props.regionLevels, (regionLevel) => {
              return (
                <option key={regionLevel.id} value={regionLevel.id}>
                  {regionLevel.name}
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
            onChange={(e) => {
              this.props.selectRegion(parseInt(e.target.value))
            }}
            value={this.props.selectedValues.region}>
            {_.map(this.props.regions, (region) => {
              return (
                <option key={region.id} value={region.id}>
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
            onChange={(e) => {
              this.props.selectScenarioCollection(parseInt(e.target.value))
            }}
            value={this.props.selectedValues.scenarioCollection}>
            {_.map(scenarioCollections, (collection) => {
              return (
                <option key={collection.id} value={collection.id}>
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
            inputRef={ref => (this._scenariosInput = ref)}
            onChange={this.handleMultipleSelectValueChange('_scenariosInput')}
            value={this.props.selectedValues.scenarios}
          >
            {_.map(this.props.scenarios, (scenario) => {
              return (
                <option key={scenario.id} value={scenario.id}>
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
            inputRef={ref => (this._indicatorsInput = ref)}
            onChange={this.handleMultipleSelectValueChange('_indicatorsInput')}
            value={this.props.selectedValues.indicators}>
            {_.map(this.props.indicatorCategories, indicatorCategory => {
              return [
                <option
                  disabled
                  key={indicatorCategory.id}>
                  ----{indicatorCategory.name}----
                </option>,
                _.map(indicatorCategory.indicators, indicator => {
                  return (
                    <option value={indicator.id} key={indicator.id}>{indicator.name}</option>
                  )
                })]
            })}
          </FormControl>
        </FormGroup>
        <FormGroup>
          <ControlLabel>{translate('time period')}</ControlLabel>
          <FormControl
            name={FormControlNames.TIME_PERIOD}
            componentClass='select'
            onChange={(e) => {
              this.props.selectPeriod(parseInt(e.target.value))
            }}
            value={this.props.selectedValues.timePeriod} >
            {_.map(this.props.timePeriods, (period) => {
              return (
                <option key={period.id} value={period.id}>
                  {`${period.yearStart}-${period.yearEnd}`}
                </option>
              )
            })
            }
          </FormControl>
        </FormGroup>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  regionLevels: state.data.regionLevels,
  regions: state.data.regions,
  scenarios: state.data.scenarios,
  indicatorCategories: state.data.indicatorCategories,
  timePeriods: state.data.timePeriods,
  selectedValues: state.data.selectedValues,
  translate: getTranslate(state.locale)
})

const mapDispatchToProps = {
  fetchRegionLevels,
  fetchRegions,
  fetchScenarioCollectionData,
  selectRegionLevel,
  selectRegion,
  selectScenarioCollection,
  selectScenarios,
  selectIndicators,
  selectPeriod
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
